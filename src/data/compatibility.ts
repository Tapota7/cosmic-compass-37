export interface CompatibilityResult {
  score: number;
  level: 'muy-alta' | 'alta' | 'media' | 'baja' | 'muy-baja';
  summary: string;
  strengths: string[];
  challenges: string[];
  advice: string;
}

type Element = 'Fuego' | 'Tierra' | 'Aire' | 'Agua';
type Modality = 'Cardinal' | 'Fijo' | 'Mutable';

interface SignInfo {
  element: Element;
  modality: Modality;
}

const signData: Record<string, SignInfo> = {
  aries: { element: 'Fuego', modality: 'Cardinal' },
  tauro: { element: 'Tierra', modality: 'Fijo' },
  geminis: { element: 'Aire', modality: 'Mutable' },
  cancer: { element: 'Agua', modality: 'Cardinal' },
  leo: { element: 'Fuego', modality: 'Fijo' },
  virgo: { element: 'Tierra', modality: 'Mutable' },
  libra: { element: 'Aire', modality: 'Cardinal' },
  escorpio: { element: 'Agua', modality: 'Fijo' },
  sagitario: { element: 'Fuego', modality: 'Mutable' },
  capricornio: { element: 'Tierra', modality: 'Cardinal' },
  acuario: { element: 'Aire', modality: 'Fijo' },
  piscis: { element: 'Agua', modality: 'Mutable' },
};

// Compatibilidad por elementos
const elementCompatibility: Record<Element, Record<Element, number>> = {
  Fuego: { Fuego: 85, Aire: 90, Tierra: 45, Agua: 40 },
  Tierra: { Tierra: 80, Agua: 85, Fuego: 45, Aire: 50 },
  Aire: { Aire: 80, Fuego: 90, Agua: 55, Tierra: 50 },
  Agua: { Agua: 85, Tierra: 85, Fuego: 40, Aire: 55 },
};

// Bonus por modalidad
const modalityBonus: Record<string, number> = {
  'Cardinal-Mutable': 10,
  'Mutable-Cardinal': 10,
  'Fijo-Mutable': 5,
  'Mutable-Fijo': 5,
  'Cardinal-Fijo': 0,
  'Fijo-Cardinal': 0,
  'Cardinal-Cardinal': -5,
  'Fijo-Fijo': -10,
  'Mutable-Mutable': 5,
};

const elementDescriptions: Record<Element, Record<Element, { strengths: string[]; challenges: string[] }>> = {
  Fuego: {
    Fuego: {
      strengths: ['Pasión compartida', 'Energía inagotable', 'Aventura constante', 'Inspiración mutua'],
      challenges: ['Competitividad', 'Ego enfrentados', 'Falta de paciencia', 'Discusiones intensas'],
    },
    Aire: {
      strengths: ['Comunicación fluida', 'Ideas brillantes juntos', 'Libertad respetada', 'Diversión constante'],
      challenges: ['Falta de profundidad emocional', 'Inconstancia', 'Evitar temas serios'],
    },
    Tierra: {
      strengths: ['Balance acción-estabilidad', 'El fuego inspira, la tierra construye'],
      challenges: ['Ritmos diferentes', 'Fuego impaciente, tierra lenta', 'Valores distintos'],
    },
    Agua: {
      strengths: ['Pasión intensa', 'Conexión emocional profunda cuando funciona'],
      challenges: ['Fuego evapora el agua', 'Sensibilidades opuestas', 'Malentendidos frecuentes'],
    },
  },
  Tierra: {
    Tierra: {
      strengths: ['Estabilidad máxima', 'Metas compartidas', 'Construcción sólida', 'Lealtad profunda'],
      challenges: ['Rutina excesiva', 'Terquedad mutua', 'Falta de espontaneidad'],
    },
    Agua: {
      strengths: ['Nutrición mutua', 'Seguridad emocional', 'Creatividad fértil', 'Hogar armonioso'],
      challenges: ['Posesividad', 'Dependencia emocional', 'Resistencia al cambio'],
    },
    Fuego: {
      strengths: ['Balance acción-estabilidad', 'La tierra grunda al fuego'],
      challenges: ['Ritmos diferentes', 'Frustración mutua', 'El fuego se siente limitado'],
    },
    Aire: {
      strengths: ['Tierra aporta practicidad', 'Aire aporta ideas frescas'],
      challenges: ['Aire demasiado volátil para tierra', 'Falta de conexión emocional'],
    },
  },
  Aire: {
    Aire: {
      strengths: ['Comunicación excepcional', 'Libertad compartida', 'Vida social activa', 'Estimulación mental'],
      challenges: ['Falta de arraigo', 'Evitar emociones', 'Inconsistencia mutua'],
    },
    Fuego: {
      strengths: ['Comunicación fluida', 'Aire aviva las llamas', 'Aventuras compartidas'],
      challenges: ['Falta de profundidad', 'Compromisos superficiales'],
    },
    Agua: {
      strengths: ['Aire ayuda al agua a expresarse', 'Profundidad emocional + intelecto'],
      challenges: ['Aire parece frío al agua', 'Agua parece irracional al aire'],
    },
    Tierra: {
      strengths: ['Aire aporta flexibilidad', 'Tierra aporta estabilidad'],
      challenges: ['Demasiado diferentes', 'Frustración con ritmos distintos'],
    },
  },
  Agua: {
    Agua: {
      strengths: ['Conexión emocional profunda', 'Intuición compartida', 'Comprensión sin palabras'],
      challenges: ['Emociones abrumadoras', 'Falta de objetividad', 'Drama constante'],
    },
    Tierra: {
      strengths: ['Nutrición mutua', 'Estabilidad emocional', 'Construcción del hogar'],
      challenges: ['Posesividad', 'Demasiada seriedad'],
    },
    Fuego: {
      strengths: ['Pasión cuando hay conexión', 'Transformación mutua'],
      challenges: ['Herir sensibilidades', 'Malentendidos constantes'],
    },
    Aire: {
      strengths: ['Balance emoción-razón', 'Crecimiento mutuo'],
      challenges: ['Desconexión emocional', 'Frustración comunicativa'],
    },
  },
};

const levelLabels: Record<string, { label: string; emoji: string }> = {
  'muy-alta': { label: 'Muy Alta', emoji: '💫' },
  'alta': { label: 'Alta', emoji: '✨' },
  'media': { label: 'Media', emoji: '⚖️' },
  'baja': { label: 'Baja', emoji: '🌙' },
  'muy-baja': { label: 'Difícil', emoji: '🔥' },
};

export const getCompatibilityLevel = (score: number): 'muy-alta' | 'alta' | 'media' | 'baja' | 'muy-baja' => {
  if (score >= 85) return 'muy-alta';
  if (score >= 70) return 'alta';
  if (score >= 55) return 'media';
  if (score >= 40) return 'baja';
  return 'muy-baja';
};

export const getLevelInfo = (level: string) => levelLabels[level] || levelLabels['media'];

export const calculateCompatibility = (sign1Id: string, sign2Id: string): CompatibilityResult => {
  const s1 = signData[sign1Id];
  const s2 = signData[sign2Id];
  
  if (!s1 || !s2) {
    return {
      score: 50,
      level: 'media',
      summary: 'No se pudo calcular la compatibilidad.',
      strengths: [],
      challenges: [],
      advice: 'Selecciona dos signos válidos.',
    };
  }

  // Calcular score base por elemento
  let baseScore = elementCompatibility[s1.element][s2.element];
  
  // Añadir bonus/penalty por modalidad
  const modalityKey = `${s1.modality}-${s2.modality}`;
  const bonus = modalityBonus[modalityKey] || 0;
  
  // Mismo signo tiene bonus especial
  if (sign1Id === sign2Id) {
    baseScore = 75;
  }

  const finalScore = Math.min(100, Math.max(0, baseScore + bonus));
  const level = getCompatibilityLevel(finalScore);
  
  const elementInfo = elementDescriptions[s1.element][s2.element];
  
  const summaries: Record<string, string> = {
    'muy-alta': 'Una conexión natural y armoniosa. Sus energías se complementan de manera extraordinaria.',
    'alta': 'Buena compatibilidad con potencial para una relación sólida y enriquecedora.',
    'media': 'Compatibilidad equilibrada. Con esfuerzo y comprensión pueden construir algo valioso.',
    'baja': 'Requiere trabajo consciente. Las diferencias pueden ser fuente de crecimiento o fricción.',
    'muy-baja': 'Una unión desafiante que requerirá paciencia y compromiso de ambas partes.',
  };

  const advices: Record<string, string> = {
    'muy-alta': 'Aprovecha esta conexión natural pero no des la relación por sentada. Sigue cultivando la comunicación.',
    'alta': 'Tienen una base sólida. Enfócate en mantener el equilibrio y explorar nuevas experiencias juntos.',
    'media': 'La clave está en la comunicación abierta. Celebren sus diferencias como oportunidades de crecimiento.',
    'baja': 'Practiquen la paciencia y busquen puntos en común. La aceptación mutua será fundamental.',
    'muy-baja': 'Esta relación es una oportunidad de crecimiento profundo. Aprendan de sus diferencias sin intentar cambiar al otro.',
  };

  return {
    score: finalScore,
    level,
    summary: summaries[level],
    strengths: elementInfo?.strengths || [],
    challenges: elementInfo?.challenges || [],
    advice: advices[level],
  };
};

export const zodiacSignsList = [
  { id: 'aries', name: 'Aries', symbol: '♈' },
  { id: 'tauro', name: 'Tauro', symbol: '♉' },
  { id: 'geminis', name: 'Géminis', symbol: '♊' },
  { id: 'cancer', name: 'Cáncer', symbol: '♋' },
  { id: 'leo', name: 'Leo', symbol: '♌' },
  { id: 'virgo', name: 'Virgo', symbol: '♍' },
  { id: 'libra', name: 'Libra', symbol: '♎' },
  { id: 'escorpio', name: 'Escorpio', symbol: '♏' },
  { id: 'sagitario', name: 'Sagitario', symbol: '♐' },
  { id: 'capricornio', name: 'Capricornio', symbol: '♑' },
  { id: 'acuario', name: 'Acuario', symbol: '♒' },
  { id: 'piscis', name: 'Piscis', symbol: '♓' },
];
