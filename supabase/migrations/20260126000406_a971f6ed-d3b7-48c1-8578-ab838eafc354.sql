-- Permitir inserción pública para pre-registros de cursos
CREATE POLICY "Allow public insert for course waitlist"
ON public.email_leads
FOR INSERT
WITH CHECK (source = 'courses');