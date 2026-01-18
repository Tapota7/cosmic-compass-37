-- Disable RLS on email_leads (only accessed by edge functions with service role)
DROP POLICY IF EXISTS "No public access to email_leads" ON public.email_leads;
ALTER TABLE public.email_leads DISABLE ROW LEVEL SECURITY;

-- Disable RLS on email_rate_limits (only accessed by SECURITY DEFINER functions)
DROP POLICY IF EXISTS "No public access to email_rate_limits" ON public.email_rate_limits;
ALTER TABLE public.email_rate_limits DISABLE ROW LEVEL SECURITY;