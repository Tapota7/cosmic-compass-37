-- Fix email_leads: Remove public SELECT access, only allow service role (edge functions) to access
DROP POLICY IF EXISTS "Anyone can view email leads" ON public.email_leads;

-- Create restrictive policy: No public access, only authenticated service role operations
CREATE POLICY "No public access to email_leads" 
ON public.email_leads 
FOR ALL 
USING (false);

-- Fix email_rate_limits: Remove any public access
DROP POLICY IF EXISTS "Anyone can view rate limits" ON public.email_rate_limits;
DROP POLICY IF EXISTS "Anyone can insert rate limits" ON public.email_rate_limits;
DROP POLICY IF EXISTS "Anyone can update rate limits" ON public.email_rate_limits;

-- Ensure RLS is enabled
ALTER TABLE public.email_rate_limits ENABLE ROW LEVEL SECURITY;

-- Create restrictive policy: No public access at all (service role will bypass RLS)
CREATE POLICY "No public access to email_rate_limits" 
ON public.email_rate_limits 
FOR ALL 
USING (false);