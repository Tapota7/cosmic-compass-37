export type AspectType = 'armónico' | 'dinámico' | 'menor';

export interface Aspect {
  id: string;
  name: string;
  symbol: string;
  angle: number;
  orb: number;
  type: AspectType;
  keywords: string[];
  meaning: string;
  manifestation: string;
  challenges: string;
  opportunities: string;
}

export const aspects: Aspect[] = [
  {
    id: 'conjuncion',
    name: 'Conjunción',
    symbol: '☌',
    angle: 0,
    orb: 8,
    type: 'dinámico',
    keywords: ['Fusión', 'Intensidad', 'Unión', 'Concentración'],
    meaning: 'La conjunción representa la fusión de dos energías planetarias en un mismo punto del zodíaco. Es el aspecto más poderoso e intenso, donde las cualidades de ambos planetas se combinan y amplifican mutuamente. No es inherentemente positivo ni negativo; su expresión depende de los planetas involucrados y del resto de la carta. Es como dos instrumentos tocando la misma nota: pueden crear armonía perfecta o disonancia dependiendo de cómo se afinen.',
    manifestation: 'Se experimenta como una energía concentrada e intensa en el área de vida indicada por la casa. Las cualidades de ambos planetas son inseparables en tu experiencia; cuando activas uno, el otro también se activa automáticamente. Puede manifestarse como un talento natural intenso o como un punto ciego donde es difícil ver ambas energías por separado.',
    challenges: 'La fusión puede ser tan intensa que pierdas perspectiva sobre las energías individuales. Puede haber dificultad para moderar la expresión combinada. Con planetas en tensión natural (ej: Sol-Saturno), la conjunción puede crear conflictos internos intensos.',
    opportunities: 'Concentración de poder en un área específica. Capacidad de expresar ambas energías de manera unificada y potente. Cuando los planetas son compatibles, la conjunción otorga talentos excepcionales.'
  },
  {
    id: 'sextil',
    name: 'Sextil',
    symbol: '⚹',
    angle: 60,
    orb: 4,
    type: 'armónico',
    keywords: ['Oportunidad', 'Fluidez', 'Comunicación', 'Potencial'],
    meaning: 'El sextil conecta planetas a 60 grados de distancia, típicamente entre signos de elementos compatibles (fuego-aire o tierra-agua). Es un aspecto de oportunidad y talento latente que requiere cierto esfuerzo para activarse. A diferencia del trígono (que fluye automáticamente), el sextil ofrece potencial que debe ser cultivado conscientemente. Es como una puerta entreabierta: la oportunidad está ahí, pero debes empujarla.',
    manifestation: 'Se experimenta como facilidad para integrar las energías de ambos planetas cuando te lo propones. Hay comunicación fluida entre las áreas de vida representadas. Los talentos asociados se desarrollan con práctica moderada.',
    challenges: 'El peligro del sextil es subestimarlo o darlo por sentado. Por ser "fácil", puede no desarrollarse plenamente. Requiere intención consciente para manifestarse.',
    opportunities: 'Talentos que se desarrollan con esfuerzo moderado. Facilidad para conectar diferentes áreas de la vida. Oportunidades que llegan cuando estás abierto a recibirlas. Buena base para aprendizaje y crecimiento.'
  },
  {
    id: 'cuadratura',
    name: 'Cuadratura',
    symbol: '□',
    angle: 90,
    orb: 6,
    type: 'dinámico',
    keywords: ['Tensión', 'Desafío', 'Fricción', 'Crecimiento'],
    meaning: 'La cuadratura conecta planetas a 90 grados, típicamente entre signos de la misma modalidad pero diferente elemento. Es el aspecto de tensión productiva: las energías planetarias friccionan entre sí, creando conflicto interno que impulsa la acción y el crecimiento. Aunque incómoda, la cuadratura es uno de los aspectos más dinámicos; los logros más significativos suelen surgir de resolver las tensiones que genera.',
    manifestation: 'Se experimenta como conflicto interno entre dos partes de ti mismo. Hay sensación de que ambas energías quieren cosas diferentes o se obstaculizan mutuamente. Genera frustración pero también motivación para resolver la tensión.',
    challenges: 'La tensión constante puede ser agotadora. Hay riesgo de proyectar el conflicto interno en situaciones externas. Puede manifestarse como patrones repetitivos de obstáculos hasta que se integran las energías.',
    opportunities: 'Motor de crecimiento personal y logro. Desarrolla resiliencia y determinación. Los talentos que surgen de integrar una cuadratura son especialmente valiosos porque se forjaron en la dificultad.'
  },
  {
    id: 'trigono',
    name: 'Trígono',
    symbol: '△',
    angle: 120,
    orb: 6,
    type: 'armónico',
    keywords: ['Fluidez', 'Armonía', 'Talento natural', 'Facilidad'],
    meaning: 'El trígono conecta planetas a 120 grados, siempre entre signos del mismo elemento. Es el aspecto de armonía natural y talento innato; las energías planetarias cooperan sin esfuerzo. Es considerado el aspecto más afortunado, pero su misma facilidad puede ser una trampa si no se cultiva conscientemente. Lo que viene fácil puede darse por sentado.',
    manifestation: 'Se experimenta como fluidez natural entre las áreas de vida representadas. Hay talentos que se expresan sin esfuerzo aparente. La cooperación entre las energías es tan natural que puede pasar desapercibida.',
    challenges: 'El mayor peligro del trígono es la complacencia. Los talentos no desarrollados se atrofian. Puede generar pereza o falta de motivación en las áreas donde todo fluye fácilmente.',
    opportunities: 'Talentos naturales que, cuando se cultivan, alcanzan niveles excepcionales. Área de la vida donde puedes relajarte y confiar en el flujo. Recursos internos que te sostienen en momentos difíciles.'
  },
  {
    id: 'oposicion',
    name: 'Oposición',
    symbol: '☍',
    angle: 180,
    orb: 8,
    type: 'dinámico',
    keywords: ['Polaridad', 'Consciencia', 'Proyección', 'Integración'],
    meaning: 'La oposición conecta planetas a 180 grados, siempre entre signos opuestos del zodíaco. Es el aspecto de la polaridad consciente: las energías se enfrentan cara a cara, creando tensión que exige consciencia e integración. A menudo, proyectamos un extremo de la oposición en otros y nos identificamos solo con el otro. El trabajo es reconocer ambos polos en nosotros mismos.',
    manifestation: 'Se experimenta como oscilación entre extremos o como atracción hacia personas que encarnan el polo opuesto. Hay consciencia de la tensión, a diferencia de la cuadratura que puede ser más inconsciente. Las relaciones suelen activar fuertemente las oposiciones.',
    challenges: 'Tendencia a proyectar un extremo en otros. Oscilación agotadora entre polos. Dificultad para encontrar el punto de equilibrio. Conflictos relacionales que reflejan conflictos internos.',
    opportunities: 'Mayor consciencia que otros aspectos dinámicos. Capacidad de ver múltiples perspectivas. Cuando se integra, la oposición otorga sabiduría y equilibrio excepcionales. Las relaciones se convierten en espejos de crecimiento.'
  },
  {
    id: 'quincuncio',
    name: 'Quincuncio',
    symbol: '⚻',
    angle: 150,
    orb: 3,
    type: 'menor',
    keywords: ['Ajuste', 'Incomodidad', 'Adaptación', 'Reorganización'],
    meaning: 'El quincuncio (o inconjunción) conecta planetas a 150 grados, entre signos que no comparten ni elemento, ni modalidad, ni polaridad. Es el aspecto del ajuste constante: las energías no se entienden mutuamente y requieren adaptación continua. Es como tratar de conectar dos idiomas que no comparten raíces; la traducción siempre pierde algo.',
    manifestation: 'Se experimenta como una irritación persistente de bajo nivel, una sensación de que algo no encaja del todo. Puede manifestarse como problemas de salud relacionados con el estrés de mantener dos energías incompatibles. Requiere reorganización constante.',
    challenges: 'La incomodidad crónica puede normalizarse y pasar desapercibida. No hay solución definitiva; requiere ajuste continuo. Puede manifestarse como síntomas físicos cuando no se atiende psicológicamente.',
    opportunities: 'Desarrolla flexibilidad y capacidad de adaptación. Cuando se trabaja conscientemente, otorga habilidad para manejar situaciones complejas. La incomodidad puede ser un motor de creatividad.'
  },
  {
    id: 'semisextil',
    name: 'Semisextil',
    symbol: '⚺',
    angle: 30,
    orb: 2,
    type: 'menor',
    keywords: ['Crecimiento', 'Irritación leve', 'Vecindad', 'Desarrollo'],
    meaning: 'El semisextil conecta planetas a 30 grados, siempre entre signos consecutivos del zodíaco. Es un aspecto menor de crecimiento gradual: los signos vecinos tienen poco en común pero se influyen sutilmente. Es como vecinos que no son amigos pero cuyas vidas se rozan inevitablemente.',
    manifestation: 'Se experimenta como una influencia sutil, casi imperceptible. Puede manifestarse como pequeñas irritaciones o como oportunidades de crecimiento que requieren atención para notarse.',
    challenges: 'Por ser tan sutil, puede ignorarse completamente. La falta de elemento común dificulta la integración. Requiere consciencia para trabajarlo.',
    opportunities: 'Potencial de crecimiento gradual cuando se le presta atención. Conexiones sutiles entre áreas de vida que pueden enriquecerse mutuamente. Desarrollo de sensibilidad a las influencias sutiles.'
  },
  {
    id: 'semicuadratura',
    name: 'Semicuadratura',
    symbol: '∠',
    angle: 45,
    orb: 2,
    type: 'menor',
    keywords: ['Fricción', 'Irritación', 'Tensión menor', 'Agitación'],
    meaning: 'La semicuadratura conecta planetas a 45 grados y comparte la naturaleza tensa de la cuadratura, pero con menor intensidad. Es como una piedra pequeña en el zapato: no incapacitante pero persistentemente irritante. Representa fricciones menores que, acumuladas, pueden generar estrés significativo.',
    manifestation: 'Se experimenta como irritación de bajo nivel, pequeños obstáculos repetitivos, o tensión que no alcanza a ser crisis pero que desgasta con el tiempo.',
    challenges: 'Por ser "menor", puede ignorarse hasta que la acumulación genera problemas mayores. La irritación constante puede volverse crónica.',
    opportunities: 'Señala áreas que necesitan ajustes pequeños pero importantes. Cuando se atiende, previene problemas mayores. Desarrolla atención a los detalles y capacidad de hacer ajustes finos.'
  }
];

export const getAspectById = (id: string): Aspect | undefined => {
  return aspects.find(aspect => aspect.id === id);
};

export const calculateAspect = (degree1: number, degree2: number): { aspect: Aspect | null; exactAngle: number; orb: number } => {
  // Normalize degrees to 0-360
  const normalizedDegree1 = ((degree1 % 360) + 360) % 360;
  const normalizedDegree2 = ((degree2 % 360) + 360) % 360;
  
  // Calculate the smallest angle between the two points
  let diff = Math.abs(normalizedDegree1 - normalizedDegree2);
  if (diff > 180) {
    diff = 360 - diff;
  }
  
  // Check each aspect
  for (const aspect of aspects) {
    const orb = Math.abs(diff - aspect.angle);
    if (orb <= aspect.orb) {
      return {
        aspect,
        exactAngle: diff,
        orb: Math.round(orb * 100) / 100
      };
    }
  }
  
  return {
    aspect: null,
    exactAngle: diff,
    orb: 0
  };
};
