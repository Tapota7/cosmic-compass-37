-- Add explicit anonymous blocking policies for defense-in-depth security

-- Block anonymous access to calculation_history
CREATE POLICY "Block anonymous access to calculation_history" 
ON public.calculation_history 
FOR ALL 
TO anon 
USING (false);

-- Block anonymous access to profiles (contains birth dates, names)
CREATE POLICY "Block anonymous access to profiles" 
ON public.profiles 
FOR ALL 
TO anon 
USING (false);

-- Block anonymous access to favorites (user-specific data)
CREATE POLICY "Block anonymous access to favorites" 
ON public.favorites 
FOR ALL 
TO anon 
USING (false);