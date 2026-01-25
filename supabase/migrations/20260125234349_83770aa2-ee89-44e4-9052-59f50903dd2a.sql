-- Create table for zodiac images
CREATE TABLE public.zodiac_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  sign_id TEXT NOT NULL UNIQUE,
  image_url TEXT,
  prompt TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.zodiac_images ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Anyone can view zodiac images"
ON public.zodiac_images
FOR SELECT
USING (true);

-- Admin write access
CREATE POLICY "Admins can insert zodiac images"
ON public.zodiac_images
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update zodiac images"
ON public.zodiac_images
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete zodiac images"
ON public.zodiac_images
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Create storage bucket for zodiac images
INSERT INTO storage.buckets (id, name, public) VALUES ('zodiac-images', 'zodiac-images', true);

-- Storage policies
CREATE POLICY "Zodiac images are publicly accessible"
ON storage.objects
FOR SELECT
USING (bucket_id = 'zodiac-images');

CREATE POLICY "Admins can upload zodiac images"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'zodiac-images' AND public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update zodiac images"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'zodiac-images' AND public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete zodiac images"
ON storage.objects
FOR DELETE
USING (bucket_id = 'zodiac-images' AND public.has_role(auth.uid(), 'admin'::app_role));

-- Trigger for updated_at
CREATE TRIGGER update_zodiac_images_updated_at
BEFORE UPDATE ON public.zodiac_images
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();