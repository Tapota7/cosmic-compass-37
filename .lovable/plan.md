
# Plan: Arreglar Ícono PWA en Móviles

## Problema Detectado

El ícono transparente sigue apareciendo porque:

1. **App ya instalada**: Chrome guarda en caché el manifest y los íconos. No actualiza automáticamente el ícono aunque cambies el archivo.

2. **Íconos viejos siguen en el proyecto**: Los archivos `icon-192.png` e `icon-512.png` todavía existen y podrían usarse como fallback.

3. **Workbox no cachea JPG**: La configuración actual solo cachea `png, svg, ico` pero **no incluye archivos `jpg`**, así que el nuevo ícono no se precachea.

4. **Falta versionado**: Sin una versión o nombre diferente, el navegador no sabe que debe descargar el ícono nuevo.

5. **Configuración maskable incorrecta**: Usar `purpose: 'any maskable'` en la misma entrada puede causar problemas en algunos dispositivos.

## Solución Completa

### Paso 1: Renombrar el ícono con versión
Renombrar `pwa-icon.jpg` a `pwa-icon-v2.jpg` para forzar que el navegador descargue el nuevo archivo.

### Paso 2: Eliminar íconos viejos transparentes
Borrar `icon-192.png` e `icon-512.png` del proyecto para evitar cualquier uso accidental.

### Paso 3: Corregir configuración de Workbox
Agregar `.jpg` y `.jpeg` a `globPatterns` para que el Service Worker cachee el nuevo ícono correctamente.

### Paso 4: Separar purpose "any" y "maskable"
Crear entradas separadas en el manifest: una para `any` y otra para `maskable`, para máxima compatibilidad.

### Paso 5: Agregar apple-touch-icon con múltiples tamaños
iOS requiere tamaños específicos (180x180, 152x152, 120x120). Agregar las etiquetas necesarias.

---

## Detalles Técnicos

### Archivos a eliminar:
- `public/icon-192.png`
- `public/icon-512.png`

### Archivos a renombrar:
- `public/pwa-icon.jpg` a `public/pwa-icon-v2.jpg`

### Archivos a modificar:

**vite.config.ts**
```text
Línea 18: Cambiar includeAssets para usar 'pwa-icon-v2.jpg'
Línea 29-42: Actualizar íconos del manifest con nombres versionados y separar purpose
Línea 47: Agregar jpg,jpeg a globPatterns
```

Nuevo bloque de íconos:
```typescript
icons: [
  {
    src: '/pwa-icon-v2.jpg',
    sizes: '192x192',
    type: 'image/jpeg',
    purpose: 'any'
  },
  {
    src: '/pwa-icon-v2.jpg',
    sizes: '512x512',
    type: 'image/jpeg',
    purpose: 'any'
  },
  {
    src: '/pwa-icon-v2.jpg',
    sizes: '192x192',
    type: 'image/jpeg',
    purpose: 'maskable'
  },
  {
    src: '/pwa-icon-v2.jpg',
    sizes: '512x512',
    type: 'image/jpeg',
    purpose: 'maskable'
  }
]
```

Nuevo globPatterns:
```typescript
globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,svg,woff2}']
```

**index.html**
```text
Línea 30: Cambiar apple-touch-icon a pwa-icon-v2.jpg
Agregar múltiples tamaños de apple-touch-icon para iOS
```

---

## Lo que tenés que hacer vos después

Como la app **ya estaba instalada** en tu celular, Chrome no va a actualizar el ícono automáticamente. Después de que yo haga los cambios, tenés que:

1. **Desinstalar la app actual** de tu celular (mantener presionado el ícono y borrar)
2. **Limpiar caché del navegador** (Chrome → Configuración → Privacidad → Borrar datos de navegación → Imágenes y archivos en caché)
3. **Visitar la página de nuevo** y esperar que cargue completamente
4. **Instalar de nuevo** usando el botón "Instalar" o el menú del navegador

Esto es necesario porque los navegadores no permiten que las apps actualicen su propio ícono una vez instaladas (por seguridad).

## Resultado Esperado

- Ícono con fondo oscuro visible en la pantalla de inicio
- Funciona correctamente en Android, iOS y escritorio
- El Service Worker cachea el ícono para uso offline
- Compatible con todos los dispositivos móviles
