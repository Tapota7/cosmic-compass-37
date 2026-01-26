import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

// Restrict CORS to allowed origins
const ALLOWED_ORIGINS = [
  "https://ljlzljlictunpiznfafs.lovableproject.com",
  "https://sabiduria-cuantica.lovable.app",
  "https://id-preview--bdf04038-7e5d-429c-9f4c-3ae8437aae13.lovable.app"
];

const getCorsHeaders = (origin: string | null) => {
  const allowedOrigin = origin && ALLOWED_ORIGINS.some(allowed => origin.startsWith(allowed.replace(/\/$/, ''))) 
    ? origin 
    : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };
};

// Rate limit configuration
const RATE_LIMIT_MAX_REQUESTS_PER_IP = 5; // 5 requests per IP per hour
const RATE_LIMIT_MAX_REQUESTS_PER_EMAIL = 2; // 2 requests per email per hour
const RATE_LIMIT_WINDOW_MINUTES = 60;

// Valid course interest IDs
const VALID_INTERESTS = ['astro-basics', 'natal-chart', 'numerology', 'transits', 'synastry'];

interface CourseWaitlistRequest {
  email: string;
  interests: string[];
}

// Get client IP from request headers
function getClientIP(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIP = req.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }
  return "unknown";
}

// Validate email format
function isValidEmail(email: string): boolean {
  if (!email || email.length > 255) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate interests array
function validateInterests(interests: unknown): interests is string[] {
  if (!Array.isArray(interests)) return false;
  if (interests.length === 0 || interests.length > VALID_INTERESTS.length) return false;
  return interests.every(interest => 
    typeof interest === 'string' && VALID_INTERESTS.includes(interest)
  );
}

const handler = async (req: Request): Promise<Response> => {
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Validate origin for actual requests
  if (origin && !ALLOWED_ORIGINS.some(allowed => origin.startsWith(allowed.replace(/\/$/, '')))) {
    console.warn("Request from unauthorized origin:", origin);
    return new Response(
      JSON.stringify({ error: "Unauthorized origin" }),
      { status: 403, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  try {
    const body = await req.json();
    const { email, interests }: CourseWaitlistRequest = body;

    // Validate email format
    if (!email || !isValidEmail(email.trim())) {
      return new Response(
        JSON.stringify({ error: "Email inválido" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate interests
    if (!validateInterests(interests)) {
      return new Response(
        JSON.stringify({ error: "Selecciona al menos un tema de interés válido" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Initialize Supabase client with service role for rate limiting and inserts
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get client IP for rate limiting
    const clientIP = getClientIP(req);

    // Check rate limit by IP
    const { data: ipAllowed, error: ipRateError } = await supabase.rpc("check_rate_limit", {
      p_identifier: clientIP,
      p_identifier_type: "ip_courses",
      p_max_requests: RATE_LIMIT_MAX_REQUESTS_PER_IP,
      p_window_minutes: RATE_LIMIT_WINDOW_MINUTES,
    });

    if (ipRateError) {
      console.error("Rate limit check error (IP):", ipRateError);
    } else if (!ipAllowed) {
      console.warn("Rate limit exceeded for IP:", clientIP);
      return new Response(
        JSON.stringify({ error: "Demasiadas solicitudes. Intenta de nuevo más tarde." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Check rate limit by email
    const normalizedEmail = email.toLowerCase().trim();
    const { data: emailAllowed, error: emailRateError } = await supabase.rpc("check_rate_limit", {
      p_identifier: normalizedEmail,
      p_identifier_type: "email_courses",
      p_max_requests: RATE_LIMIT_MAX_REQUESTS_PER_EMAIL,
      p_window_minutes: RATE_LIMIT_WINDOW_MINUTES,
    });

    if (emailRateError) {
      console.error("Rate limit check error (email):", emailRateError);
    } else if (!emailAllowed) {
      console.warn("Rate limit exceeded for email:", normalizedEmail);
      return new Response(
        JSON.stringify({ error: "Este email ya está registrado. ¡Te avisaremos pronto!" }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Check if email already exists
    const { data: existingLead } = await supabase
      .from("email_leads")
      .select("id")
      .eq("email", normalizedEmail)
      .eq("source", "courses")
      .maybeSingle();

    if (existingLead) {
      return new Response(
        JSON.stringify({ error: "Este email ya está registrado. ¡Te avisaremos pronto!" }),
        { status: 409, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Save lead to database using service role (bypasses RLS)
    const { error: dbError } = await supabase.from("email_leads").insert({
      email: normalizedEmail,
      source: "courses",
      calculation_data: { interests },
    });

    if (dbError) {
      console.error("Error saving lead:", dbError);
      
      // Handle unique constraint violation
      if (dbError.code === "23505") {
        return new Response(
          JSON.stringify({ error: "Este email ya está registrado. ¡Te avisaremos pronto!" }),
          { status: 409, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "Error al guardar. Intenta de nuevo." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Course waitlist signup successful:", normalizedEmail);

    return new Response(
      JSON.stringify({ success: true, message: "¡Registro exitoso!" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: unknown) {
    console.error("Error in submit-course-waitlist function:", error);
    return new Response(
      JSON.stringify({ error: "Error al procesar la solicitud" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
