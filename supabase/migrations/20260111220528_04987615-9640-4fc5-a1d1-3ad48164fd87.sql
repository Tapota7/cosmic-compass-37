-- Create table for email leads capture
CREATE TABLE public.email_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  source TEXT NOT NULL DEFAULT 'numerology',
  calculation_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.email_leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert leads (no auth required for lead capture)
CREATE POLICY "Anyone can insert email leads" 
ON public.email_leads 
FOR INSERT 
WITH CHECK (true);

-- Only authenticated users with service role can read (for admin purposes)
CREATE POLICY "Service role can read email leads" 
ON public.email_leads 
FOR SELECT 
USING (false);