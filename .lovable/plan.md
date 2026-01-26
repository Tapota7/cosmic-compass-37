
# Plan: Actualizar Íconos de la PWA

## Problema Actual

Los íconos actuales de la PWA (`icon-192.png` y `icon-512.png`) no tienen fondo, lo que hace que se vean mal cuando instalas la app en el celular porque el sistema operativo no sabe qué color de fondo usar.

## Solución

Reemplazaré los íconos actuales con la nueva imagen que tiene el fondo oscuro para que se vea profesional cuando se instale la app.

## Cambios a Realizar

### 1. Copiar la nueva imagen al proyecto
- Copiar `user-uploads://Blanco-negro-2.jpg` a `public/pwa-icon.jpg`

### 2. Actualizar configuración de PWA en vite.config.ts
- Cambiar los íconos en el manifest para usar la nueva imagen
- Actualizar la lista de `includeAssets` para incluir el nuevo ícono

### 3. Actualizar index.html
- Cambiar el `apple-touch-icon` para usar la nueva imagen con fondo
- Esto mejorará cómo se ve el ícono en iPhones

### 4. Actualizar el favicon también (opcional pero recomendado)
- Usar la misma imagen como favicon para mantener consistencia visual

---

## Detalles Técnicos

### Archivos a crear:
- `public/pwa-icon.jpg` (copia de la imagen subida)

### Archivos a modificar:

**vite.config.ts**
```text
- Línea 18: includeAssets → agregar 'pwa-icon.jpg'
- Líneas 29-41: Actualizar los íconos del manifest para usar la nueva imagen
```

**index.html**
```text
- Línea 30: Cambiar apple-touch-icon a la nueva imagen
```

## Resultado Esperado

Cuando instales la app en el celular:
- El ícono mostrará el logo con el fondo oscuro
- Se verá profesional y consistente en todas las plataformas
- El fondo oscuro (#2d2d2d aproximadamente) combinará bien con el tema de la app
