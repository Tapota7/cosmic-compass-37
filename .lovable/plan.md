
# Plan: Rediseño PRO del Dashboard con Clima Cósmico Dinámico

## Resumen

Transformar completamente el Dashboard actual en una experiencia de alto impacto con lógica de "Frecuencia Cuántica Personal" calculada en tiempo real, combinando datos del perfil de Supabase con cálculos numerológicos y astrológicos simulados.

---

## 1. Lógica del "Clima Cósmico Personal"

### A. Factor Numerológico - Enfoque del Día

```text
Fórmula: (Día Nacimiento + Mes Nacimiento + Día Actual + Mes Actual + Año Actual)
         → Reducir a dígito único (1-9)
```

**Mapeo de Energías:**
| Número | Enfoque del Día |
|--------|-----------------|
| 1 | "Día de Inicios" - Perfectos para comenzar proyectos |
| 2 | "Día de Conexión" - Ideal para relaciones y cooperación |
| 3 | "Día de Comunicación" - Expresa tu creatividad |
| 4 | "Día de Estructura" - Enfócate en organizar |
| 5 | "Día de Cambio" - Abraza lo nuevo y diferente |
| 6 | "Día de Amor" - Cuida a los tuyos |
| 7 | "Día de Reflexión" - Medita y analiza |
| 8 | "Día de Poder" - Toma decisiones importantes |
| 9 | "Día de Culminación" - Cierra ciclos |

### B. Factor Astrológico - Vibra Emocional (Tránsito Lunar Simulado)

```text
Ciclo Lunar: (Día del año % 28) → Posición en ciclo de 12 signos
             → Cada signo dura ~2.3 días
```

**Mapeo de Vibraciones por Elemento:**
| Elemento | Signos | Vibra Emocional |
|----------|--------|-----------------|
| Fuego | Aries, Leo, Sagitario | "Acción & Pasión" |
| Tierra | Tauro, Virgo, Capricornio | "Estructura & Estabilidad" |
| Aire | Géminis, Libra, Acuario | "Ideas & Comunicación" |
| Agua | Cáncer, Escorpio, Piscis | "Intuición & Emociones" |

---

## 2. Nueva Estructura del Dashboard

### Sección A: Header de Bienvenida Animado

```text
┌─────────────────────────────────────────────────────────┐
│  ✨ Bienvenido, [Nombre]                                │
│                                                         │
│  Tu vibración hoy es:                                   │
│  ╔═══════════════════════════════════════════════════╗  │
│  ║  "ACCIÓN & PODER"  ← (texto con gradiente animado)║  │
│  ╚═══════════════════════════════════════════════════╝  │
│                                                         │
│  💫 Enfoque: Día de Inicios | 🌙 Luna en Fuego         │
└─────────────────────────────────────────────────────────┘
```

**CSS del gradiente animado:**
```css
.animate-gradient-text {
  background: linear-gradient(90deg, #a78bfa, #f472b6, #a78bfa);
  background-size: 200% auto;
  animation: gradient-shift 3s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Sección B: Widget "Esencia Vital" (3 Círculos)

```text
┌─────────────────────────────────────────────────────────┐
│               ✨ Tu Esencia Vital                       │
│                                                         │
│    ┌───────┐     ┌───────┐     ┌───────┐               │
│    │  ♌    │     │  ♏    │     │   7   │               │
│    │  Leo  │     │Escorpio│     │ Vida  │               │
│    │ Solar │     │ Lunar  │     │Mission│               │
│    └───────┘     └───────┘     └───────┘               │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

- Círculos con `border-2 border-purple-500/30` y `backdrop-blur`
- Iconos con `drop-shadow` púrpura neón
- Si falta dato: mostrar botón "Completa tu perfil"

### Sección C: Frecuencia Cuántica del Día

```text
┌─────────────────────────────────────────────────────────┐
│  🔮 Tu Frecuencia Cuántica de Hoy                      │
│                                                         │
│  ╭─────────────────────────────────────────────────────╮│
│  │ "Hoy es un día perfecto para tomar la iniciativa.  ││
│  │  La Luna en Fuego amplifica tu energía creadora.   ││
│  │  Confía en tu intuición y actúa con determinación."││
│  ╰─────────────────────────────────────────────────────╯│
│                                                         │
│  🎯 Enfoque: Inicios  │  ⚡ Energía: Alta  │  🌙 Luna: ♈ │
└─────────────────────────────────────────────────────────┘
```

### Sección D: Historial Reciente (Últimos 3)

```text
┌─────────────────────────────────────────────────────────┐
│  📜 Tu Historial Reciente                              │
│                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │ 📊          │  │ 💕          │  │ 🔄          │     │
│  │ Numerología │  │ Compatib.   │  │ Ciclos      │     │
│  │ Ene 30      │  │ Ene 28      │  │ Ene 25      │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
│                                                         │
│            [Ver todo el historial →]                    │
└─────────────────────────────────────────────────────────┘
```

### Sección E: Quick Action Grid (4 Botones)

```text
┌─────────────────────────────────────────────────────────┐
│  ⚡ Acciones Rápidas                                   │
│                                                         │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │  💕              │  │  🔢              │            │
│  │  Analizar        │  │  Mi              │            │
│  │  Sinastría       │  │  Numerología     │            │
│  └──────────────────┘  └──────────────────┘            │
│                                                         │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │  🪐              │  │  ✨              │            │
│  │  Tránsitos       │  │  Códigos         │            │
│  │  2026            │  │  Grabovoi        │            │
│  └──────────────────┘  └──────────────────┘            │
└─────────────────────────────────────────────────────────┘
```

### Sección F: Banner de Conversión (Skool)

```text
┌─────────────────────────────────────────────────────────┐
│ ╔═══════════════════════════════════════════════════╗  │
│ ║  🎓 ¿Listo para dominar tu destino?              ║  │
│ ║                                                   ║  │
│ ║  La Academia de Sabiduría Cuántica se está       ║  │
│ ║  preparando.                                      ║  │
│ ║                                                   ║  │
│ ║  [✨ Próximamente acceso exclusivo]               ║  │
│ ╚═══════════════════════════════════════════════════╝  │
└─────────────────────────────────────────────────────────┘
```

- Gradiente púrpura/rosa con `animate-gradient`
- Efecto `backdrop-blur-md`

---

## 3. Componentes y Estética

### Estilos de Cards (Glassmorphism)

```tsx
className="bg-white/5 bg-opacity-10 backdrop-blur-md 
           border border-white/10 rounded-xl"
```

### Iconos con Drop Shadow Neón

```tsx
<Sun className="w-6 h-6 text-purple-400 
               drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
```

### Skeletons para Carga

```tsx
// Skeleton para el Header
<Skeleton className="h-8 w-48 mb-2" />
<Skeleton className="h-12 w-64" />

// Skeleton para Esencia Vital
<div className="flex gap-4 justify-center">
  <Skeleton className="h-24 w-24 rounded-full" />
  <Skeleton className="h-24 w-24 rounded-full" />
  <Skeleton className="h-24 w-24 rounded-full" />
</div>
```

---

## 4. Archivos a Crear/Modificar

| Archivo | Acción | Descripción |
|---------|--------|-------------|
| `src/pages/Dashboard.tsx` | Reescribir | Nueva estructura completa |
| `src/utils/cosmicClimate.ts` | Crear | Lógica de cálculo cósmico |
| `src/index.css` | Modificar | Añadir animación de gradiente |

---

## 5. Detalle Técnico: cosmicClimate.ts

```typescript
// src/utils/cosmicClimate.ts

interface CosmicClimate {
  dayFocus: { number: number; name: string; description: string };
  moonVibe: { sign: string; element: string; vibe: string };
  combinedMessage: string;
  energyLevel: 'alta' | 'media' | 'baja';
}

// Reduce cualquier número a un solo dígito (1-9)
function reduceToSingleDigit(num: number): number {
  while (num > 9) {
    num = String(num).split('').reduce((a, b) => a + parseInt(b), 0);
  }
  return num;
}

// Calcular tránsito lunar simulado basado en día del año
function getMoonSign(date: Date): { sign: string; element: string } {
  const dayOfYear = Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) 
    / (1000 * 60 * 60 * 24)
  );
  const moonCyclePosition = dayOfYear % 28;
  const signIndex = Math.floor(moonCyclePosition / 2.33);
  // ... mapeo a signos y elementos
}

export function calculateCosmicClimate(
  birthDate: Date | null
): CosmicClimate {
  // Implementación completa
}
```

---

## 6. Diseño Responsivo (Mobile First)

### Mobile (< 768px)
- Header apilado verticalmente
- Esencia Vital: 3 círculos en fila con scroll horizontal
- Quick Actions: Grid 2x2 compacto
- Historial: Scroll horizontal de cards

### Tablet/Desktop (>= 768px)
- Layout más espacioso
- Esencia Vital: 3 círculos centrados
- Quick Actions: Grid 2x2 grande
- Historial: 3 cards en fila

---

## 7. Estado de Perfil Incompleto

Si el usuario no tiene `birth_date` en su perfil:

```text
┌─────────────────────────────────────────────────────────┐
│  🔮 Desbloquea tu Frecuencia Cuántica                  │
│                                                         │
│  Completa tu perfil para recibir predicciones          │
│  personalizadas cada día.                              │
│                                                         │
│  [Completar mi perfil →]                               │
└─────────────────────────────────────────────────────────┘
```

---

## Resultado Final

Un Dashboard transformado con:
1. Cálculo dinámico de "Frecuencia Cuántica" basado en fecha de nacimiento
2. Visualización elegante con glassmorphism y efectos neón
3. Experiencia personalizada que cambia cada día
4. Acceso rápido a las herramientas principales
5. Banner de conversión para la Academia
6. Estados de carga con Skeletons
7. Diseño 100% responsivo (Mobile First)
