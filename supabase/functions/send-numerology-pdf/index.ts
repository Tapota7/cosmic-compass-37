import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Restrict CORS to specific domain
const ALLOWED_ORIGIN = "https://ljlzljlictunpiznfafs.lovableproject.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Rate limit configuration
const RATE_LIMIT_MAX_REQUESTS_PER_IP = 5; // 5 requests per IP per hour
const RATE_LIMIT_MAX_REQUESTS_PER_EMAIL = 3; // 3 requests per email per hour
const RATE_LIMIT_WINDOW_MINUTES = 60;

interface NumerologyEmailRequest {
  email: string;
  name?: string;
  calculationData: {
    fullName: string;
    birthDate: string;
    lifePath: number;
    destiny: number;
    soul: number;
    personality: number;
    personalYear: number;
  };
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

// Validate email format properly
function isValidEmail(email: string): boolean {
  if (!email || email.length > 255) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Sanitize string for HTML output
function sanitizeForHTML(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

const handler = async (req: Request): Promise<Response> => {
  // Check origin for non-OPTIONS requests
  const origin = req.headers.get("origin");
  
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Validate origin for actual requests
  if (origin && origin !== ALLOWED_ORIGIN) {
    console.warn("Request from unauthorized origin:", origin);
    return new Response(
      JSON.stringify({ error: "Unauthorized origin" }),
      { status: 403, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  try {
    const { email, name, calculationData }: NumerologyEmailRequest = await req.json();

    // Validate email format
    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Email inválido" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate name length if provided
    if (name && name.length > 100) {
      return new Response(
        JSON.stringify({ error: "Nombre demasiado largo" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate calculationData
    if (!calculationData || 
        !calculationData.fullName || 
        calculationData.fullName.length > 200 ||
        !calculationData.birthDate) {
      return new Response(
        JSON.stringify({ error: "Datos de cálculo inválidos" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Initialize Supabase client with service role for rate limiting
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get client IP for rate limiting
    const clientIP = getClientIP(req);

    // Check rate limit by IP
    const { data: ipAllowed, error: ipRateError } = await supabase.rpc("check_rate_limit", {
      p_identifier: clientIP,
      p_identifier_type: "ip",
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
    const { data: emailAllowed, error: emailRateError } = await supabase.rpc("check_rate_limit", {
      p_identifier: email.toLowerCase(),
      p_identifier_type: "email",
      p_max_requests: RATE_LIMIT_MAX_REQUESTS_PER_EMAIL,
      p_window_minutes: RATE_LIMIT_WINDOW_MINUTES,
    });

    if (emailRateError) {
      console.error("Rate limit check error (email):", emailRateError);
    } else if (!emailAllowed) {
      console.warn("Rate limit exceeded for email:", email);
      return new Response(
        JSON.stringify({ error: "Ya enviamos los resultados a este email recientemente." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Save lead to database
    const { error: dbError } = await supabase.from("email_leads").insert({
      email,
      name: name || null,
      source: "numerology",
      calculation_data: calculationData,
    });

    if (dbError) {
      console.error("Error saving lead:", dbError);
    }

    // Sanitize user inputs for HTML email
    const safeName = sanitizeForHTML(name || "");
    const safeFullName = sanitizeForHTML(calculationData.fullName);
    const safeBirthDate = sanitizeForHTML(calculationData.birthDate);

    // Send email with results
    const emailResponse = await resend.emails.send({
      from: "Numerología <onboarding@resend.dev>",
      to: [email],
      subject: `🔢 Tus Números de Numerología - ${safeFullName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #0a0a0f; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0f; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 16px; overflow: hidden;">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%); padding: 30px; text-align: center;">
                      <h1 style="color: white; margin: 0; font-size: 28px;">🔢 Tus Números del Destino</h1>
                      <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">${safeFullName}</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 30px;">
                      <p style="color: #a1a1aa; margin: 0 0 20px 0; font-size: 14px;">
                        ${safeName ? `Hola ${safeName},` : 'Hola,'} aquí están tus números personales basados en tu fecha de nacimiento (${safeBirthDate}):
                      </p>
                      
                      <!-- Numbers Grid -->
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding: 10px;">
                            <div style="background: rgba(20, 184, 166, 0.1); border: 1px solid rgba(20, 184, 166, 0.3); border-radius: 12px; padding: 20px; text-align: center;">
                              <div style="font-size: 36px; color: #14b8a6; font-weight: bold;">${Number(calculationData.lifePath) || 0}</div>
                              <div style="color: #e4e4e7; font-size: 14px; margin-top: 8px;">Número de Vida</div>
                            </div>
                          </td>
                          <td style="padding: 10px;">
                            <div style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 12px; padding: 20px; text-align: center;">
                              <div style="font-size: 36px; color: #a855f7; font-weight: bold;">${Number(calculationData.destiny) || 0}</div>
                              <div style="color: #e4e4e7; font-size: 14px; margin-top: 8px;">Número de Destino</div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 10px;">
                            <div style="background: rgba(236, 72, 153, 0.1); border: 1px solid rgba(236, 72, 153, 0.3); border-radius: 12px; padding: 20px; text-align: center;">
                              <div style="font-size: 36px; color: #ec4899; font-weight: bold;">${Number(calculationData.soul) || 0}</div>
                              <div style="color: #e4e4e7; font-size: 14px; margin-top: 8px;">Número del Alma</div>
                            </div>
                          </td>
                          <td style="padding: 10px;">
                            <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 12px; padding: 20px; text-align: center;">
                              <div style="font-size: 36px; color: #3b82f6; font-weight: bold;">${Number(calculationData.personality) || 0}</div>
                              <div style="color: #e4e4e7; font-size: 14px; margin-top: 8px;">Personalidad</div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2" style="padding: 10px;">
                            <div style="background: rgba(251, 191, 36, 0.1); border: 1px solid rgba(251, 191, 36, 0.3); border-radius: 12px; padding: 20px; text-align: center;">
                              <div style="font-size: 36px; color: #fbbf24; font-weight: bold;">${Number(calculationData.personalYear) || 0}</div>
                              <div style="color: #e4e4e7; font-size: 14px; margin-top: 8px;">Año Personal ${new Date().getFullYear()}</div>
                            </div>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- CTA -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                        <tr>
                          <td align="center">
                            <a href="https://ljlzljlictunpiznfafs.lovableproject.com/consultas" style="display: inline-block; background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%); color: white; text-decoration: none; padding: 16px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
                              ✨ Ver Consultas Premium
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 20px 30px; border-top: 1px solid rgba(255,255,255,0.1); text-align: center;">
                      <p style="color: #71717a; font-size: 12px; margin: 0;">
                        Este email fue enviado porque solicitaste tus resultados de numerología.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Email enviado correctamente" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in send-numerology-pdf function:", error);
    return new Response(
      JSON.stringify({ error: "Error al procesar la solicitud" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
