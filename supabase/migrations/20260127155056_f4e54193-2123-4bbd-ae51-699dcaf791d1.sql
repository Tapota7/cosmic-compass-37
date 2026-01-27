-- Block anonymous access to user_roles table
-- This prevents attackers from discovering admin accounts
CREATE POLICY "Block anonymous access to user_roles" 
ON public.user_roles 
FOR ALL 
TO anon 
USING (false);