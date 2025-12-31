export interface GrabovoiNumber {
  id: string;
  code: string;
  name: string;
  category: string;
  description: string;
  howToUse: string;
}

export const grabovoiCategories = [
  { id: 'salud', name: 'Salud y Bienestar', emoji: '💚', color: 'emerald' },
  { id: 'abundancia', name: 'Abundancia y Prosperidad', emoji: '💰', color: 'amber' },
  { id: 'amor', name: 'Amor y Relaciones', emoji: '💕', color: 'rose' },
  { id: 'proteccion', name: 'Protección', emoji: '🛡️', color: 'blue' },
  { id: 'trabajo', name: 'Trabajo y Éxito', emoji: '🎯', color: 'violet' },
  { id: 'sanacion', name: 'Sanación Emocional', emoji: '🦋', color: 'cyan' },
];

export const grabovoiNumbers: GrabovoiNumber[] = [
  // Salud y Bienestar
  {
    id: 'curacion-general',
    code: '9187948181',
    name: 'Curación General',
    category: 'salud',
    description: 'Secuencia maestra para la curación y restauración del equilibrio en todo el organismo. Activa los mecanismos naturales de sanación del cuerpo a nivel celular.',
    howToUse: 'Visualiza esta secuencia rodeando todo tu cuerpo con luz verde esmeralda. Repite mentalmente el código mientras respiras profundamente durante 5-10 minutos.',
  },
  {
    id: 'sistema-inmune',
    code: '8543219',
    name: 'Fortalecimiento del Sistema Inmune',
    category: 'salud',
    description: 'Potencia las defensas naturales del cuerpo, fortaleciendo el sistema inmunológico para combatir enfermedades y mantener la vitalidad.',
    howToUse: 'Escribe esta secuencia en un papel y colócala bajo tu almohada. Al despertar, visualiza el código entrando en tu cuerpo como luz dorada.',
  },
  {
    id: 'dolor-cabeza',
    code: '4818543',
    name: 'Alivio del Dolor de Cabeza',
    category: 'salud',
    description: 'Secuencia específica para aliviar dolores de cabeza, migrañas y tensiones craneales. Restaura el flujo energético normal en la zona.',
    howToUse: 'Toca tu frente con los dedos índice y medio mientras visualizas la secuencia. Repite el código 3 veces en voz alta.',
  },
  {
    id: 'peso-ideal',
    code: '4812412',
    name: 'Peso Ideal',
    category: 'salud',
    description: 'Ayuda a alcanzar y mantener el peso corporal óptimo, equilibrando el metabolismo y los procesos de asimilación de nutrientes.',
    howToUse: 'Escribe el código en tu muñeca izquierda cada mañana. Visualízalo mientras comes, imaginando que tu cuerpo absorbe solo lo necesario.',
  },
  {
    id: 'vista',
    code: '1891014',
    name: 'Mejora de la Vista',
    category: 'salud',
    description: 'Secuencia para mejorar la salud ocular y la capacidad visual. Fortalece los ojos y los músculos oculares.',
    howToUse: 'Cierra los ojos y visualiza cada número de la secuencia como un punto de luz que entra en tus ojos, llenándolos de energía azul.',
  },

  // Abundancia y Prosperidad
  {
    id: 'dinero-inesperado',
    code: '520 741 8',
    name: 'Dinero Inesperado',
    category: 'abundancia',
    description: 'Atrae situaciones inesperadas de prosperidad económica. Abre canales para recibir dinero de fuentes no anticipadas.',
    howToUse: 'Escribe esta secuencia en tu billetera o cartera. Visualízala cada vez que realices un pago, agradeciendo por la abundancia.',
  },
  {
    id: 'abundancia-infinita',
    code: '318798',
    name: 'Abundancia Infinita',
    category: 'abundancia',
    description: 'Conecta con la fuente universal de abundancia, permitiendo que la prosperidad fluya en todas las áreas de la vida.',
    howToUse: 'Medita con esta secuencia durante 10 minutos, visualizando un río dorado de monedas que fluye hacia ti desde el universo.',
  },
  {
    id: 'exito-negocios',
    code: '5481974',
    name: 'Éxito en los Negocios',
    category: 'abundancia',
    description: 'Potencia el éxito comercial y empresarial. Atrae oportunidades de negocio favorables y clientes potenciales.',
    howToUse: 'Coloca esta secuencia en tu lugar de trabajo o en la entrada de tu negocio. Repítela antes de reuniones importantes.',
  },
  {
    id: 'deudas',
    code: '8965148974126',
    name: 'Liberación de Deudas',
    category: 'abundancia',
    description: 'Ayuda a resolver situaciones de endeudamiento, abriendo caminos para la liquidación de deudas y la estabilidad financiera.',
    howToUse: 'Escribe la secuencia en un papel junto con el monto de tu deuda. Visualiza la deuda reduciéndose cada día mientras repites el código.',
  },

  // Amor y Relaciones
  {
    id: 'amor-verdadero',
    code: '888 412 1289018',
    name: 'Atraer el Amor Verdadero',
    category: 'amor',
    description: 'Abre el corazón para atraer y manifestar el amor verdadero en tu vida. Conecta con tu alma gemela o pareja ideal.',
    howToUse: 'Escribe esta secuencia en un papel rosa y colócala bajo tu almohada. Antes de dormir, visualiza el amor entrando en tu vida.',
  },
  {
    id: 'armonia-pareja',
    code: '5765488',
    name: 'Armonía en la Pareja',
    category: 'amor',
    description: 'Restaura la armonía y el entendimiento en relaciones de pareja. Disuelve conflictos y fortalece el vínculo amoroso.',
    howToUse: 'Visualiza a tu pareja rodeada por esta secuencia en luz rosa. Repite el código pensando en momentos felices juntos.',
  },
  {
    id: 'reconciliacion',
    code: '3418914',
    name: 'Reconciliación',
    category: 'amor',
    description: 'Facilita la reconciliación y el perdón entre personas. Sana heridas emocionales causadas por conflictos.',
    howToUse: 'Escribe el nombre de la persona y la secuencia en un papel. Envía mentalmente luz dorada hacia ella mientras repites el código.',
  },
  {
    id: 'familia-unida',
    code: '815482197',
    name: 'Unión Familiar',
    category: 'amor',
    description: 'Fortalece los lazos familiares y promueve la armonía en el hogar. Une a la familia en amor y comprensión.',
    howToUse: 'Coloca esta secuencia en el centro de tu hogar (sala o comedor). Visualiza a toda tu familia rodeada de luz dorada.',
  },

  // Protección
  {
    id: 'proteccion-general',
    code: '8941',
    name: 'Protección General',
    category: 'proteccion',
    description: 'Crea un campo de protección energética alrededor de ti, tu familia y tus pertenencias. Repele energías negativas.',
    howToUse: 'Visualiza esta secuencia como un escudo de luz azul que te rodea completamente. Actívala cada mañana al despertar.',
  },
  {
    id: 'proteccion-hogar',
    code: '4818481',
    name: 'Protección del Hogar',
    category: 'proteccion',
    description: 'Protege tu hogar de energías negativas, robos y cualquier tipo de peligro. Crea un ambiente seguro y armonioso.',
    howToUse: 'Escribe la secuencia y colócala en la entrada principal de tu casa. Visualiza tu hogar envuelto en una burbuja protectora.',
  },
  {
    id: 'proteccion-viajes',
    code: '49874',
    name: 'Protección en Viajes',
    category: 'proteccion',
    description: 'Asegura viajes seguros y sin contratiempos. Protege durante desplazamientos en cualquier medio de transporte.',
    howToUse: 'Antes de salir de viaje, visualiza tu vehículo o medio de transporte rodeado por esta secuencia en luz violeta.',
  },
  {
    id: 'contra-envidia',
    code: '5491',
    name: 'Protección contra la Envidia',
    category: 'proteccion',
    description: 'Neutraliza las energías negativas provenientes de la envidia y los celos de otras personas.',
    howToUse: 'Lleva esta secuencia escrita contigo (en la cartera o como colgante). Visualiza un espejo reflejando toda negatividad.',
  },

  // Trabajo y Éxito
  {
    id: 'encontrar-trabajo',
    code: '493151',
    name: 'Encontrar Trabajo',
    category: 'trabajo',
    description: 'Atrae oportunidades laborales alineadas con tus habilidades y propósito. Abre puertas para el empleo ideal.',
    howToUse: 'Escribe tu nombre y esta secuencia en tu currículum (puede ser invisible). Visualízala antes de cada entrevista.',
  },
  {
    id: 'exito-profesional',
    code: '914215148221',
    name: 'Éxito Profesional',
    category: 'trabajo',
    description: 'Potencia el crecimiento y reconocimiento profesional. Facilita ascensos y mejoras en la carrera.',
    howToUse: 'Coloca esta secuencia en tu escritorio o lugar de trabajo. Repítela mentalmente antes de reuniones importantes.',
  },
  {
    id: 'creatividad',
    code: '19751',
    name: 'Creatividad e Inspiración',
    category: 'trabajo',
    description: 'Desbloquea la creatividad y atrae inspiración divina. Ideal para artistas, escritores y profesionales creativos.',
    howToUse: 'Visualiza esta secuencia girando sobre tu cabeza como una corona de luz violeta mientras trabajas en proyectos creativos.',
  },
  {
    id: 'examenes',
    code: '1548218',
    name: 'Éxito en Exámenes',
    category: 'trabajo',
    description: 'Mejora la concentración, memoria y rendimiento en exámenes y pruebas académicas.',
    howToUse: 'Escribe la secuencia en la parte superior de tu hoja de examen o visualízala antes de comenzar. Respira profundo y confía.',
  },

  // Sanación Emocional
  {
    id: 'paz-interior',
    code: '4851485',
    name: 'Paz Interior',
    category: 'sanacion',
    description: 'Restaura la paz interior y la calma mental. Disuelve la ansiedad, el estrés y los pensamientos negativos.',
    howToUse: 'Medita con esta secuencia durante 15 minutos. Visualízala entrando en tu corazón como luz turquesa, llenándote de paz.',
  },
  {
    id: 'superar-miedos',
    code: '848491',
    name: 'Superar Miedos',
    category: 'sanacion',
    description: 'Ayuda a enfrentar y disolver miedos profundos, fobias y bloqueos emocionales que limitan tu vida.',
    howToUse: 'Cuando sientas miedo, visualiza esta secuencia como un escudo de luz frente a ti. Repite: "Estoy protegido, soy valiente".',
  },
  {
    id: 'perdon',
    code: '4815148914',
    name: 'Perdón y Liberación',
    category: 'sanacion',
    description: 'Facilita el proceso de perdón hacia ti mismo y hacia otros. Libera resentimientos y cargas emocionales del pasado.',
    howToUse: 'Escribe el nombre de quien necesitas perdonar (incluyéndote) junto con esta secuencia. Quema el papel con intención de soltar.',
  },
  {
    id: 'autoestima',
    code: '517417818',
    name: 'Elevación de la Autoestima',
    category: 'sanacion',
    description: 'Fortalece la autoestima, el amor propio y la confianza en uno mismo. Sana heridas de rechazo y abandono.',
    howToUse: 'Mírate al espejo cada mañana y repite esta secuencia mientras te sonríes. Visualiza luz dorada llenando tu corazón.',
  },
  {
    id: 'depresion',
    code: '519 514 819891 4',
    name: 'Alivio de la Depresión',
    category: 'sanacion',
    description: 'Ayuda a elevar el estado de ánimo y a salir de estados depresivos. Restaura la alegría de vivir y la esperanza.',
    howToUse: 'Escribe esta secuencia en un papel amarillo. Colócala donde reciba luz solar. Visualiza el sol llenándote de vitalidad.',
  },
];

export const getGrabovoiByCategory = (categoryId: string): GrabovoiNumber[] => {
  return grabovoiNumbers.filter(num => num.category === categoryId);
};

export const getGrabovoiById = (id: string): GrabovoiNumber | undefined => {
  return grabovoiNumbers.find(num => num.id === id);
};

export const getCategoryById = (id: string) => {
  return grabovoiCategories.find(cat => cat.id === id);
};

export const searchGrabovoi = (query: string): GrabovoiNumber[] => {
  const lowerQuery = query.toLowerCase();
  return grabovoiNumbers.filter(num => 
    num.name.toLowerCase().includes(lowerQuery) ||
    num.description.toLowerCase().includes(lowerQuery) ||
    num.code.includes(query) ||
    num.category.toLowerCase().includes(lowerQuery)
  );
};
