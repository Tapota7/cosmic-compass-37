

# Plan: Arreglar Menú Móvil que No Se Abre

## Problema Identificado

El botón hamburguesa cambia a X (el estado funciona), pero el panel del menú no aparece. Esto sucede porque:

**El overlay del menú está renderizado DENTRO del header**, que también tiene `position: fixed`. Cuando un elemento `fixed` está dentro de otro elemento `fixed`, puede crear problemas de "stacking context" (contexto de apilamiento) que hace que el menú quede invisible o detrás de otros elementos.

Estructura actual problemática:
```text
<header> (fixed, z-50)
  └── <div> (wrapper)
       └── <MobileNav>
            └── <button> (hamburger - FUNCIONA)
            └── <div> (overlay fixed, z-50 - NO SE VE)
```

## Solución

Usar un **React Portal** para renderizar el overlay del menú FUERA del header, directamente en el `document.body`. Esto garantiza que el menú tenga su propio contexto de apilamiento independiente.

Nueva estructura:
```text
<header> (fixed, z-50)
  └── <MobileNav>
       └── <button> (hamburger)

<body>
  └── <Portal>  <-- NUEVO: se renderiza aquí
       └── <div> (overlay fixed, z-[60])
```

---

## Cambios a Realizar

### Archivo: `src/components/navigation/MobileNav.tsx`

1. Importar `createPortal` de `react-dom`
2. Envolver el overlay con `createPortal(..., document.body)`
3. Subir el z-index del overlay a `z-[60]` para estar por encima del header
4. Cambiar `top-14` a un cálculo dinámico que considere el safe-area

Código modificado (líneas 1-6):
```typescript
import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
// ... resto igual
```

Código modificado (líneas 93-98):
```typescript
{/* Fullscreen Overlay - usando Portal para evitar stacking context issues */}
{(isOpen || isClosing) && createPortal(
  <div 
    className="fixed inset-0 z-[60] lg:hidden"
    style={{ top: 'calc(56px + var(--safe-area-top, 0px))' }}
    onClick={handleBackdropClick}
  >
    {/* Backdrop */}
    <div 
      className={`absolute inset-0 bg-black/60 transition-opacity duration-200 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
    />
    
    {/* Menu Panel */}
    <div
      ref={menuRef}
      className={`absolute inset-y-0 left-0 w-[85%] max-w-sm bg-gray-950 border-r border-gray-800/50 shadow-2xl overflow-y-auto ${
        isClosing ? 'animate-slide-out-left' : 'animate-slide-in-left'
      }`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* contenido del menú */}
    </div>
  </div>,
  document.body
)}
```

---

## Por qué esta solución funciona

1. **Portal**: Renderiza el overlay directamente en `<body>`, evitando cualquier problema de stacking context del header padre

2. **Z-index 60**: Garantiza que el menú esté por encima del header (z-50) y otros elementos

3. **Safe-area dinámico**: Usa CSS calc() para posicionar correctamente el menú debajo del header, considerando dispositivos con notch

4. **Sin cambios en Layout.tsx**: El componente sigue funcionando igual desde la perspectiva del padre

---

## Resultado Esperado

- Al tocar las 3 líneas, el menú se abrirá deslizándose desde la izquierda
- El panel será visible y táctil
- El swipe-to-close seguirá funcionando
- Compatible con todos los dispositivos móviles incluyendo iPhones con notch

