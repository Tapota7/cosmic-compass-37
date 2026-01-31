-- Fix 1: Add WITH CHECK clause to profiles UPDATE policy
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Fix 2: Strengthen favorites RLS policies by ensuring proper ordering and explicit restrictive behavior
-- First, drop existing policies to recreate them with proper enforcement
DROP POLICY IF EXISTS "Users can view their own favorites" ON public.favorites;
DROP POLICY IF EXISTS "Users can insert their own favorites" ON public.favorites;
DROP POLICY IF EXISTS "Users can delete their own favorites" ON public.favorites;
DROP POLICY IF EXISTS "Block anonymous access to favorites" ON public.favorites;

-- Recreate with explicit RESTRICTIVE type and proper order
-- Block anonymous access first (most restrictive)
CREATE POLICY "Block anonymous access to favorites"
  ON public.favorites
  AS RESTRICTIVE
  FOR ALL
  TO anon
  USING (false);

-- Then user-specific access (for authenticated users only)
CREATE POLICY "Users can view their own favorites"
  ON public.favorites
  AS RESTRICTIVE
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own favorites"
  ON public.favorites
  AS RESTRICTIVE
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own favorites"
  ON public.favorites
  AS RESTRICTIVE
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);