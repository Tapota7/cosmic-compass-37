-- Función segura para obtener conteo de suscriptores de cursos
-- Solo devuelve un número, no expone datos personales
CREATE OR REPLACE FUNCTION public.get_course_waitlist_count()
RETURNS integer
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COUNT(*)::integer 
  FROM public.email_leads 
  WHERE source = 'courses';
$$;

-- Permitir que cualquiera pueda llamar esta función
GRANT EXECUTE ON FUNCTION public.get_course_waitlist_count() TO anon, authenticated;