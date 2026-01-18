-- Re-enable RLS on email_leads with policy that blocks all public access
-- Service role bypasses RLS, so edge functions will still work
ALTER TABLE public.email_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Block all public access to email_leads" 
ON public.email_leads 
FOR ALL 
USING (false);

-- Re-enable RLS on email_rate_limits with policy that blocks all public access
-- SECURITY DEFINER functions bypass RLS, so rate limit functions will still work
ALTER TABLE public.email_rate_limits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Block all public access to email_rate_limits" 
ON public.email_rate_limits 
FOR ALL 
USING (false);