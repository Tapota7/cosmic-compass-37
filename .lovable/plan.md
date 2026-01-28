
# Plan: Eliminar Precios de Todos los Servicios

## Resumen

Remover todos los precios visibles de la página de servicios y del sitio, manteniendo la estructura de las tarjetas pero sin mostrar valores monetarios.

---

## Cambios a Realizar

### 1. Modificar `src/pages/Consultas.tsx`

**A. Eliminar propiedad `price` de cada servicio:**
- Línea 17: `price: 30` → eliminar
- Línea 42: `price: 50` → eliminar
- Línea 66: `price: 70` → eliminar
- Línea 92: `price: 50` → eliminar

**B. Actualizar mensajes de WhatsApp (sin precios):**
```typescript
// Antes:
whatsappMessage: '¡Hola! ✨ Me interesa reservar una Carta Natal Completa ($30 USD)...'

// Después:
whatsappMessage: '¡Hola! ✨ Me interesa reservar una Carta Natal Completa...'
```

**C. Eliminar texto del extra opcional:**
```typescript
// Antes:
extraText: 'Tránsitos Actuales (+$10 USD): Cómo los planetas...'

// Después:
extraText: 'Tránsitos Actuales: Cómo los planetas...'
```

**D. Eliminar sección visual del precio en las tarjetas (líneas 283-292):**
```tsx
// Eliminar este bloque completo:
<div className="flex items-baseline gap-2 mb-4">
  <span className="text-4xl font-bold text-primary">${service.price}</span>
  <span className="text-muted-foreground">USD</span>
  {service.isRecommended && (
    <Badge variant="outline" className="ml-2 text-xs">
      Mejor inversión
    </Badge>
  )}
</div>
```

**E. Actualizar Schema.org sin priceRange:**
```tsx
// Antes:
priceRange="$30 - $70 USD"

// Después: eliminar o dejar vacío
```

**F. Actualizar schemaServices (eliminar price):**
```typescript
// Antes:
const schemaServices = services.map(s => ({
  name: s.title,
  description: s.features.slice(0, 3).join('. '),
  price: s.price,
  priceCurrency: 'USD',
}));

// Después:
const schemaServices = services.map(s => ({
  name: s.title,
  description: s.features.slice(0, 3).join('. '),
}));
```

---

### 2. Modificar `src/pages/Home.tsx`

**Eliminar texto "desde $30 USD" (líneas 356-359):**

```tsx
// Antes:
<p className="text-sm text-muted-foreground">
  desde <span className="text-primary font-bold text-lg">$30 USD</span>
</p>

// Después: eliminar este párrafo completo
```

---

### 3. Modificar `src/components/SchemaOrg.tsx`

**Actualizar valor por defecto sin precio (línea 188):**

```typescript
// Antes:
priceRange = '$30 - $70 USD'

// Después: hacer el parámetro opcional sin valor por defecto
priceRange?: string
```

**Y eliminar su uso en el schema si está vacío.**

---

## Resultado Visual

### Tarjeta de Servicio (Antes):
```
💫 Carta Natal Completa
   Consulta Evolutiva

   $30 USD

   ✨ Análisis escrito + Sesión virtual...
```

### Tarjeta de Servicio (Después):
```
💫 Carta Natal Completa
   Consulta Evolutiva

   ✨ Análisis escrito + Sesión virtual...
```

---

## Archivos a Modificar

| Archivo | Cambio |
|---------|--------|
| `src/pages/Consultas.tsx` | Eliminar precios de servicios, mensajes WhatsApp, UI y Schema |
| `src/pages/Home.tsx` | Eliminar "desde $30 USD" del CTA final |
| `src/components/SchemaOrg.tsx` | Hacer priceRange opcional |

---

## Notas Adicionales

- Los usuarios contactarán por WhatsApp para conocer precios
- Se mantiene toda la información de los servicios excepto valores monetarios
- Los botones CTA y mensajes de WhatsApp siguen funcionando
