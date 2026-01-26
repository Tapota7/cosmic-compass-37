
# Plan: Arreglar Menú Móvil

## Problema Detectado

El menú móvil no funciona porque usa una clase de animación (`animate-slide-in-left`) que **nunca fue definida** en el proyecto. Cuando tocas el botón de hamburguesa, React sí renderiza el menú, pero al no tener la animación definida, el navegador no sabe cómo mostrarlo correctamente.

## Solución

Agregaré las animaciones faltantes y haré mejoras adicionales para asegurar que el menú funcione perfectamente en celulares.

## Cambios a Realizar

### 1. Agregar animación slide-in-left a Tailwind
Definiré la animación faltante en `tailwind.config.ts`:
- Keyframe para entrada desde la izquierda
- Keyframe para salida (para cuando cierres el menú)
- Animación de fade-in para las subsecciones

### 2. Mejorar el componente MobileNav
Optimizaré el menú móvil para mejor experiencia táctil:
- Asegurar que el z-index sea suficientemente alto
- Mejorar el área táctil de los botones
- Agregar animación de cierre suave
- Hacer los links más grandes y fáciles de tocar

### 3. Agregar soporte para gestos
- Permitir cerrar el menú deslizando hacia la izquierda
- Cerrar al tocar fuera del menú

---

## Detalles Técnicos

### Archivos a modificar:

**tailwind.config.ts**
```typescript
// Agregar keyframes
"slide-in-left": {
  from: { transform: "translateX(-100%)", opacity: "0" },
  to: { transform: "translateX(0)", opacity: "1" },
},
"slide-out-left": {
  from: { transform: "translateX(0)", opacity: "1" },
  to: { transform: "translateX(-100%)", opacity: "0" },
},

// Agregar animations
"slide-in-left": "slide-in-left 0.3s ease-out",
"slide-out-left": "slide-out-left 0.2s ease-in",
```

**src/components/navigation/MobileNav.tsx**
- Cambiar la clase del overlay para usar la animación definida
- Aumentar áreas táctiles para mejor UX móvil
- Agregar gesto de swipe para cerrar
- Mejorar transiciones de apertura/cierre de secciones

**src/index.css** (opcional)
- Agregar estilos de respaldo para navegadores más antiguos
