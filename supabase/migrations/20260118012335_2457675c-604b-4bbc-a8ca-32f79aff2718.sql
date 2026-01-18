-- Remove overly permissive RLS policy on email_leads (edge function uses service role, so public INSERT is not required)
DROP POLICY IF EXISTS "Anyone can insert email leads" ON public.email_leads;

-- Ensure RLS remains enabled (defense-in-depth)
ALTER TABLE public.email_leads ENABLE ROW LEVEL SECURITY;