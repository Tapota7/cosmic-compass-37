-- Create planet_images table
CREATE TABLE public.planet_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  planet_id text UNIQUE NOT NULL,
  image_url text,
  prompt text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.planet_images ENABLE ROW LEVEL SECURITY;

-- Anyone can view planet images
CREATE POLICY "Anyone can view planet images"
  ON public.planet_images FOR SELECT
  USING (true);

-- Only admins can insert planet images
CREATE POLICY "Admins can insert planet images"
  ON public.planet_images FOR INSERT
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Only admins can update planet images
CREATE POLICY "Admins can update planet images"
  ON public.planet_images FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

-- Only admins can delete planet images
CREATE POLICY "Admins can delete planet images"
  ON public.planet_images FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));

-- Create storage bucket for planet images
INSERT INTO storage.buckets (id, name, public)
VALUES ('planet-images', 'planet-images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for planet images
CREATE POLICY "Planet images are publicly accessible"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'planet-images');

CREATE POLICY "Admins can upload planet images"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'planet-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update planet images"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'planet-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete planet images"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'planet-images' AND public.has_role(auth.uid(), 'admin'));