
# Plan: Reemplazar Imagen de Perfil en Sección "Sobre Mí"

## Resumen

Reemplazar la imagen actual `sobre-mi-damian.png` (2.8MB) por la nueva imagen subida `Diseño_sin_título.jpg` que tiene un tamaño mucho menor.

---

## Cambios a Realizar

### 1. Copiar Nueva Imagen

Copiar la imagen subida al directorio `public/images/`:

```
user-uploads://Diseño_sin_título.jpg → public/images/sobre-mi-damian.jpg
```

> **Nota**: Usamos formato `.jpg` porque es el formato de la nueva imagen y es más liviano.

### 2. Eliminar Imagen Anterior

Eliminar la imagen pesada:
```
public/images/sobre-mi-damian.png (2.8MB) → eliminar
```

### 3. Actualizar Referencia en Componente

Modificar `src/components/home/AboutMeSection.tsx`:

**Línea 7-8 (antes):**
```typescript
// Using public folder to avoid bundler size limits (original image is 2.8MB)
const sobreMiImage = '/images/sobre-mi-damian.png';
```

**Línea 7-8 (después):**
```typescript
// Using public folder - optimized JPG version
const sobreMiImage = '/images/sobre-mi-damian.jpg';
```

---

## Archivos Modificados

| Archivo | Cambio |
|---------|--------|
| `public/images/sobre-mi-damian.jpg` | Nueva imagen (copiada) |
| `public/images/sobre-mi-damian.png` | Eliminada |
| `src/components/home/AboutMeSection.tsx` | Actualizar ruta de `.png` a `.jpg` |

---

## Resultado Esperado

- La sección "Sobre Mí" mostrará la nueva imagen optimizada
- El build de producción funcionará sin problemas de tamaño
- Tiempos de carga mejorados gracias al menor tamaño del archivo
