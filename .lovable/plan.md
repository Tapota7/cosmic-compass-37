
# Plan: Resolver Error de Build y Alertas de Seguridad

## Resumen

Hay dos problemas a resolver:
1. **Error de Build**: La imagen de perfil excede el límite del PWA
2. **Alertas de Seguridad**: El escáner detecta 2 errores que son falsos positivos

---

## Problema 1: Error de Build PWA

### Causa
La imagen `public/images/sobre-mi-damian.png` tiene 2.82 MB, pero Workbox (el sistema de cache del PWA) tiene un límite de 2 MiB para pre-cachear archivos.

### Solución
Configurar Workbox para excluir imágenes grandes del precaché o aumentar el límite.

**Opción elegida**: Excluir imágenes grandes del directorio `images/` del precaché, pero permitir que se carguen normalmente.

### Cambio en `vite.config.ts`

Modificar la sección `workbox` para:
1. Excluir imágenes del directorio `images/` del precaché
2. Agregar runtime caching para que las imágenes se cacheen bajo demanda

```typescript
workbox: {
  globPatterns: ['**/*.{js,css,html,ico,svg,woff2}'],
  // Excluir imágenes grandes del precaché
  globIgnores: ['**/images/**'],
  runtimeCaching: [
    // Cache existente para Google Fonts...
    {
      urlPattern: /\/images\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images-cache',
        expiration: { 
          maxEntries: 20, 
          maxAgeSeconds: 60 * 60 * 24 * 30 // 30 días
        }
      }
    }
  ]
}
```

---

## Problema 2: Alertas de Seguridad

### Error 1: `email_leads_table_exposure`
**Estado**: Ya fue analizado y marcado como seguro anteriormente.

**Realidad de la seguridad**:
- Política RLS `USING(false)` bloquea todo acceso directo
- Solo accesible via Edge Functions con service role
- Ya existe función `get_course_waitlist_count()` para el contador

**Acción**: Marcar como ignorado con justificación documentada.

### Error 2: `profiles_table_public_exposure`
**Estado**: Falso positivo del escáner.

**Realidad de la seguridad**:
La tabla `profiles` tiene las siguientes políticas RLS:
- `Block anonymous access`: `USING(false)` - bloquea anónimos
- `Users can view their own profile`: `USING(auth.uid() = user_id)`
- `Users can insert their own profile`: `WITH CHECK(auth.uid() = user_id)`
- `Users can update their own profile`: `USING(auth.uid() = user_id)`

Esto es una configuración **defensa en profundidad**:
1. Usuarios anónimos son bloqueados explícitamente
2. Usuarios autenticados solo pueden ver/editar su propio perfil
3. No hay forma de acceder a perfiles de otros usuarios

**Acción**: Marcar como ignorado con justificación documentada.

---

## Archivos a Modificar

| Archivo | Cambio |
|---------|--------|
| `vite.config.ts` | Excluir imágenes grandes del precaché PWA |
| (Security Finding) | Marcar `email_leads_table_exposure` como ignorado |
| (Security Finding) | Marcar `profiles_table_public_exposure` como ignorado |

---

## Resultado Esperado

1. El build de producción completará exitosamente
2. Las imágenes grandes se cachearán bajo demanda (no en precaché)
3. Las alertas de seguridad desaparecerán con justificación documentada
4. La sección "Sobre Mí" funcionará correctamente

---

## Resumen Técnico

### Configuración PWA Final
```typescript
workbox: {
  // Excluir png y jpg del precaché
  globPatterns: ['**/*.{js,css,html,ico,svg,woff2}'],
  globIgnores: ['**/images/**'],
  runtimeCaching: [
    // Google Fonts (existente)...
    // Imágenes locales (nuevo)
    {
      urlPattern: /\/images\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'local-images-cache',
        expiration: { maxEntries: 20, maxAgeSeconds: 2592000 }
      }
    }
  ]
}
```

### Justificación de Seguridad
Las políticas `USING(false)` en Supabase son efectivas para bloquear acceso. La combinación de:
- RLS con `USING(false)` para anónimos
- RLS con `auth.uid() = user_id` para autenticados
- Edge Functions con service role para operaciones de backend

Proporciona una protección robusta de múltiples capas.
