
# Plan: Solucionar Alerta de Seguridad de email_leads

## Problema Identificado

El archivo `CoursesComingSoon.tsx` intenta hacer una consulta directa a la tabla `email_leads` desde el cliente:

```typescript
const { count } = await supabase
  .from('email_leads')
  .select('*', { count: 'exact', head: true })
  .eq('source', 'courses');
```

Esto genera la alerta de seguridad porque:
1. Aunque la política RLS bloquea el acceso (devuelve 0 siempre), el patrón es incorrecto
2. El código intenta acceder a una tabla protegida desde el frontend
3. Si la política RLS se modifica en el futuro, podría haber exposicion

## Solucion

Crear una funcion de base de datos `SECURITY DEFINER` que devuelva solo el conteo sin exponer datos.

---

## Cambios a Realizar

### 1. Migracion de Base de Datos

Crear una funcion `get_course_waitlist_count()`:

```sql
-- Funcion segura para obtener conteo de suscriptores de cursos
-- Solo devuelve un numero, no expone datos personales
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

-- Permitir que cualquiera pueda llamar esta funcion
GRANT EXECUTE ON FUNCTION public.get_course_waitlist_count() TO anon, authenticated;
```

Esta funcion es segura porque:
- Usa `SECURITY DEFINER` para ejecutar con privilegios del creador
- Solo devuelve un numero entero (el conteo)
- No expone emails, nombres ni datos personales
- Tiene `search_path = public` para prevenir ataques de schema hijacking

### 2. Actualizar CoursesComingSoon.tsx

Cambiar la consulta para usar la funcion RPC:

```typescript
// Antes (inseguro - acceso directo a tabla)
const { count } = await supabase
  .from('email_leads')
  .select('*', { count: 'exact', head: true })
  .eq('source', 'courses');

// Despues (seguro - usa funcion RPC)
const { data: count, error } = await supabase.rpc('get_course_waitlist_count');
return count || 0;
```

### 3. Marcar el Finding como Resuelto

Una vez implementada la solucion, actualizar el sistema de seguridad para reflejar que el problema fue corregido.

---

## Resultado Esperado

- El contador de "personas esperando" seguira funcionando correctamente
- No habra acceso directo desde el cliente a la tabla `email_leads`
- La alerta de seguridad sera resuelta
- Los datos de email permanecen completamente protegidos

---

## Resumen Tecnico

| Cambio | Archivo | Descripcion |
|--------|---------|-------------|
| Nueva funcion SQL | Migracion | `get_course_waitlist_count()` con SECURITY DEFINER |
| Actualizar query | `src/pages/CoursesComingSoon.tsx` | Usar `supabase.rpc()` en lugar de `.from()` |
| Actualizar tipos | `src/integrations/supabase/types.ts` | Agregar tipo para la nueva funcion (automatico) |
