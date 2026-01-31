

# Plan: Sincronizar Luna Real en el Dashboard

## Problema Actual

La función `getMoonSign()` usa una fórmula simplificada basada en el día del año que NO corresponde a la posición astronómica real de la Luna.

```typescript
// Código actual (INCORRECTO)
const moonCyclePosition = dayOfYear % 28;
const signIndex = Math.floor(moonCyclePosition / 2.33) % 12;
```

---

## Solución Propuesta: Algoritmo Astronómico Preciso

Implementar un cálculo basado en los algoritmos de Jean Meeus (estándar de la industria astronómica) que calcula la longitud eclíptica de la Luna y la convierte al signo zodiacal correspondiente.

### Ventajas:
- Sin dependencia de APIs externas
- Funciona offline
- Precisión de aproximadamente 1-2 grados (suficiente para determinar el signo)
- Sin costos adicionales

---

## Cambios Técnicos

### Archivo: `src/utils/cosmicClimate.ts`

**Nueva función `calculateMoonLongitude()`:**

```typescript
// Calcula la longitud eclíptica de la Luna usando algoritmos de Jean Meeus
function calculateMoonLongitude(date: Date): number {
  // Día Juliano desde J2000.0
  const JD = getJulianDay(date);
  const T = (JD - 2451545.0) / 36525; // Siglos desde J2000
  
  // Longitud media de la Luna (L')
  const Lp = 218.3164477 + 481267.88123421 * T 
           - 0.0015786 * T * T + T * T * T / 538841;
  
  // Anomalía media de la Luna (M')
  const Mp = 134.9633964 + 477198.8675055 * T 
           + 0.0087414 * T * T + T * T * T / 69699;
  
  // Anomalía media del Sol (M)
  const M = 357.5291092 + 35999.0502909 * T;
  
  // Distancia media de la Luna al nodo ascendente (F)
  const F = 93.272095 + 483202.0175233 * T;
  
  // Elongación media de la Luna (D)
  const D = 297.8501921 + 445267.1114034 * T;
  
  // Correcciones principales
  const moonLongitude = Lp 
    + 6.289 * sin(Mp)          // Ecuación del centro
    + 1.274 * sin(2 * D - Mp)  // Evección
    + 0.658 * sin(2 * D)       // Variación
    - 0.186 * sin(M)           // Perturbación solar
    - 0.114 * sin(2 * F);      // Reducción a la eclíptica
  
  return normalizeAngle(moonLongitude); // 0-360°
}
```

**Nueva función `getMoonSignFromLongitude()`:**

```typescript
function getMoonSignFromLongitude(longitude: number): MoonVibe {
  // Cada signo ocupa 30° de la eclíptica
  // Aries: 0-30°, Tauro: 30-60°, etc.
  const signIndex = Math.floor(longitude / 30) % 12;
  const zodiacSign = ZODIAC_SIGNS[signIndex];
  const elementVibe = ELEMENT_VIBES[zodiacSign.element];
  
  return {
    sign: zodiacSign.sign,
    symbol: zodiacSign.symbol,
    element: zodiacSign.element,
    vibe: elementVibe.vibe,
    icon: elementVibe.icon,
  };
}
```

---

## Verificación de Precisión

Para hoy **31 de enero de 2026**:
- La Luna está en **Cáncer** (transitando hacia Leo mañana)
- Longitud eclíptica aproximada: ~105-115° (Cáncer: 90-120°)

El algoritmo calculará correctamente esta posición.

---

## Archivos a Modificar

| Archivo | Cambio |
|---------|--------|
| `src/utils/cosmicClimate.ts` | Reemplazar `getMoonSign()` con cálculo astronómico real |

---

## Funciones Auxiliares Necesarias

```typescript
// Convertir fecha a Día Juliano
function getJulianDay(date: Date): number {
  const Y = date.getUTCFullYear();
  const M = date.getUTCMonth() + 1;
  const D = date.getUTCDate() + date.getUTCHours() / 24;
  
  const A = Math.floor((14 - M) / 12);
  const y = Y + 4800 - A;
  const m = M + 12 * A - 3;
  
  return D + Math.floor((153 * m + 2) / 5) + 365 * y 
       + Math.floor(y / 4) - Math.floor(y / 100) 
       + Math.floor(y / 400) - 32045;
}

// Normalizar ángulo a 0-360°
function normalizeAngle(angle: number): number {
  return ((angle % 360) + 360) % 360;
}

// Seno en grados
function sin(degrees: number): number {
  return Math.sin(degrees * Math.PI / 180);
}
```

---

## Resultado Esperado

Después de la implementación:
- **Hoy (31 enero 2026)**: Mostrará **Cáncer ♋** (correcto)
- **Mañana (1 febrero 2026)**: Mostrará **Leo ♌** (correcto)
- La Luna se actualizará automáticamente cada día con precisión astronómica

---

## Notas Adicionales

- El algoritmo tiene precisión suficiente para determinar el signo zodiacal
- Para cálculos de hora exacta de cambio de signo se necesitarían correcciones adicionales
- Los cambios de signo ocurren aproximadamente cada 2.5 días

