-- Fix 1: email_rate_limits - Remove broken policy (service role bypasses RLS anyway)
DROP POLICY IF EXISTS "Service role only" ON public.email_rate_limits;

-- Fix 2: favorites - Add missing item types to CHECK constraint
ALTER TABLE public.favorites 
DROP CONSTRAINT IF EXISTS favorites_item_type_check;

ALTER TABLE public.favorites 
ADD CONSTRAINT favorites_item_type_check 
CHECK (item_type IN ('signo', 'planeta', 'casa', 'aspecto', 'numero', 'grabovoi', 'reiki'));

-- Fix 3: email_leads - Remove broken SELECT policy (service role bypasses RLS anyway)
DROP POLICY IF EXISTS "Service role can read email leads" ON public.email_leads;