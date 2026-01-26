-- Drop the insecure public insert policy for course waitlist
-- This policy allowed unauthenticated database inserts, bypassing rate limiting
DROP POLICY IF EXISTS "Allow public insert for course waitlist" ON public.email_leads;