export interface Transit {
  date: string;
  title: string;
  description: string;
  planets: string[];
  isSpecial?: boolean;
}

export interface SpecialEvent {
  title: string;
  description: string;
  type: 'eclipse' | 'historic' | 'rare';
}

export interface MonthData {
  id: string;
  month: string;
  year: number;
  title: string;
  emoji: string;
  themeCentral: string;
  summary: string;
  transits: Transit[];
  retrogrades: string[];
  areasAffected: string[];
  advice: string;
  specialEvents?: SpecialEvent[];
}

export interface Eclipse {
  date: string;
  type: string;
  sign: string;
  isMainEvent?: boolean;
}

export interface PlanetaryIngress {
  date: string;
  planet: string;
  sign: string;
  duration: string;
}

export interface Supermoon {
  date: string;
  type: 'Nueva' | 'Llena';
}

export interface SolsticeEquinox {
  date: string;
  name: string;
  hemisphere: string;
}

export interface YearSummary {
  title: string;
  summary: string;
  majorThemes: string[];
  keyword: string;
  keywordDescription: string;
  eclipses: Eclipse[];
  planetaryIngresses: PlanetaryIngress[];
  supermoons: Supermoon[];
  solsticesEquinoxes: SolsticeEquinox[];
  rareEvent: {
    date: string;
    title: string;
    description: string;
  };
}

export const transits2026: MonthData[] = [
  {
    id: 'enero-2026',
    month: 'Enero',
    year: 2026,
    emoji: '🔥',
    title: 'Nuevas Estructuras y Claridad Emocional',
    themeCentral: 'Estructura + Propósito',
    summary: 'Con Quirón activándose en tu signo si eres Aries, comienza una revisión profunda de tu identidad y autoestima. La Luna Llena en Cáncer emocional pide introspección y búsqueda de seguridad afectiva. La entrada del Sol en Acuario trae innovación mental y deseo de libertad. Este es el mes de estructurar metas claras mientras conectas con verdades emocionales.',
    transits: [
      { date: '3 de enero (10:01 UTC)', title: 'Luna Llena en Cáncer ♋', description: 'Introspección y búsqueda de seguridad afectiva', planets: ['Luna'] },
      { date: '3 de enero', title: 'Perihelio', description: 'La Tierra en su punto más cercano al Sol (147.099.798 km)', planets: ['Tierra', 'Sol'] },
      { date: '2 de enero', title: 'Quirón Directo en Aries ♈', description: 'Activación de sanación de identidad', planets: ['Quirón'], isSpecial: true },
      { date: '18 de enero', title: 'Luna Nueva en Capricornio ♑', description: 'Nuevos comienzos en metas y estructuras', planets: ['Luna', 'Sol'] },
      { date: '19 de enero', title: 'Sol entra en Acuario ♒', description: 'Innovación mental y deseo de libertad', planets: ['Sol'] },
      { date: '23 de enero', title: 'Marte entra en Acuario ♒', description: 'Acción hacia la independencia', planets: ['Marte'] },
      { date: '26 de enero', title: 'NEPTUNO INGRESA EN ARIES ♈', description: 'Permanecerá hasta 2038 - Nuevo ciclo de idealismo activo', planets: ['Neptuno'], isSpecial: true }
    ],
    retrogrades: [],
    areasAffected: ['Identidad', 'Autoestima', 'Metas', 'Innovación'],
    advice: 'Estructurar metas claras mientras conectas con verdades emocionales. Aprovecha la sanación de Quirón para trabajar en tu identidad.'
  },
  {
    id: 'febrero-2026',
    month: 'Febrero',
    year: 2026,
    emoji: '🌊',
    title: 'Revolución Interior y Hambre de Libertad',
    themeCentral: 'Ruptura de rutinas + Autenticidad',
    summary: 'Febrero es un punto de quiebre. La Luna Llena en Leo pide que brilles sin permiso. El eclipse solar anular en Acuario es una puerta de ruptura mental: necesitas independencia y autenticidad. La gran noticia: Saturno definitivamente en Aries junto a Neptuno crea una conjunción generacional el 20 de febrero. Esta es la fundación de una nueva era. La retrogradación de Mercurio en Piscis te pedirá revisión emocional y palabras no dichas.',
    transits: [
      { date: '1 de febrero (22:07 UTC)', title: 'Luna Llena en Leo ♌', description: 'Brilla sin permiso', planets: ['Luna'] },
      { date: '4 de febrero', title: 'Urano Directo en Tauro ♉', description: 'Desbloquea estancamientos', planets: ['Urano'], isSpecial: true },
      { date: '14 de febrero', title: 'SATURNO INGRESA EN ARIES ♈', description: 'Permanecerá hasta 2028 - Nuevo ciclo de responsabilidad', planets: ['Saturno'], isSpecial: true },
      { date: '17 de febrero', title: 'ECLIPSE SOLAR ANULAR + Luna Nueva en Acuario ♒', description: 'Puerta de ruptura mental e independencia', planets: ['Sol', 'Luna'], isSpecial: true },
      { date: '18 de febrero', title: 'Sol entra en Piscis ♓', description: 'Sensibilidad y conexión espiritual', planets: ['Sol'] },
      { date: '26 de febrero', title: 'Mercurio Retrógrado en Piscis', description: 'Revisión emocional hasta 18 de marzo', planets: ['Mercurio'] }
    ],
    retrogrades: ['Mercurio (26 feb - 18 mar)'],
    areasAffected: ['Libertad', 'Autenticidad', 'Rutinas', 'Comunicación emocional'],
    advice: 'La conjunción Saturno-Neptuno el 20 de febrero marca el inicio de un nuevo ciclo colectivo de 165 años. Prepárate para rupturas necesarias.',
    specialEvents: [
      { title: 'Conjunción Saturno-Neptuno a 0° Aries (20 de febrero)', description: 'Marca el inicio de un nuevo ciclo colectivo de 165 años', type: 'historic' }
    ]
  },
  {
    id: 'marzo-2026',
    month: 'Marzo',
    year: 2026,
    emoji: '🌱',
    title: 'Limpieza Profunda y Finales Necesarios',
    themeCentral: 'Depuración + Cierre de ciclos',
    summary: 'Marzo es catársis total. El eclipse lunar en Virgo limpia tu vida física y mental: necesitas orden, límites reales y cierre de ciclos que consumen tu energía. Marte en Piscis trae acción desde la emoción (cuidado con el cansancio acumulado). Mercurio en Aries desbloquea tu voz para hablar claro. El equinoccio marca el punto de renovación estacional. Finalmente, la Luna Nueva en Piscis te invita a renacer desde tu sensibilidad más auténtica.',
    transits: [
      { date: '2 de marzo', title: 'Marte entra en Piscis ♓', description: 'Acción desde la emoción', planets: ['Marte'] },
      { date: '3 de marzo', title: 'ECLIPSE LUNAR TOTAL en Virgo ♍', description: 'Limpieza y orden - Momento de verdad física y emocional', planets: ['Luna'], isSpecial: true },
      { date: '3 de marzo', title: 'Mercurio entra en Aries ♈', description: 'Tu voz se enciende', planets: ['Mercurio'] },
      { date: '11 de marzo', title: 'Júpiter Directo en Cáncer ♋', description: 'Alivio emocional', planets: ['Júpiter'], isSpecial: true },
      { date: '19 de marzo', title: 'Luna Nueva en Piscis ♓', description: 'Renacer desde tu sensibilidad', planets: ['Luna', 'Sol'] },
      { date: '20 de marzo (14:45 UTC)', title: 'EQUINOCCIO DE PRIMAVERA/OTOÑO', description: 'Hemisferio norte: Primavera / Hemisferio sur: Otoño', planets: ['Sol'], isSpecial: true }
    ],
    retrogrades: ['Mercurio (hasta 18 mar)'],
    areasAffected: ['Salud', 'Orden', 'Límites', 'Sensibilidad'],
    advice: 'El eclipse lunar es momento de verdad física y emocional. Cierra ciclos que consumen tu energía.',
    specialEvents: [
      { title: 'ECLIPSE LUNAR TOTAL en Virgo', description: 'Momento de verdad física y emocional', type: 'eclipse' }
    ]
  },
  {
    id: 'abril-2026',
    month: 'Abril',
    year: 2026,
    emoji: '💪',
    title: 'Impulso y Valentía para Actuar',
    themeCentral: 'Acción consciente + Nuevos comienzos',
    summary: 'Abril es acción controlada. La Luna Llena en Libra te pide honestidad en tus vínculos: revisa acuerdos reales vs. lo que esperabas. La Luna Nueva en Aries es tu oportunidad para saltar sin garantías; es el momento de comienzos valentía. Mercurio en Tauro ralentiza el ritmo mental pero lo hace más práctico. El Sol en Tauro trae estabilidad material: es tiempo de basar lo que comenzaste.',
    transits: [
      { date: '2 de abril', title: 'Luna Llena en Libra ♎', description: 'Revisar acuerdos y relaciones', planets: ['Luna'] },
      { date: '15 de abril', title: 'Mercurio entra en Tauro ♉', description: 'Comunicación más lenta, práctica', planets: ['Mercurio'] },
      { date: '17 de abril', title: 'Luna Nueva en Aries ♈', description: 'Comienzos valientes', planets: ['Luna', 'Sol'], isSpecial: true },
      { date: '20 de abril', title: 'Sol entra en Tauro ♉', description: 'Estabilidad material', planets: ['Sol'] }
    ],
    retrogrades: [],
    areasAffected: ['Relaciones', 'Acuerdos', 'Iniciativas', 'Estabilidad'],
    advice: 'La Luna Nueva en Aries es tu oportunidad para saltar sin garantías. Es el momento de comienzos con valentía.'
  },
  {
    id: 'mayo-2026',
    month: 'Mayo',
    year: 2026,
    emoji: '🌾',
    title: 'Bases Firmes y Crecimiento Estable',
    themeCentral: 'Estabilidad consciente + Oportunidades materiales',
    summary: 'Mayo es extraordinario: es el mes más activo del año. La Luna Llena en Escorpio te pide soltar emociones intensas o control excesivo. La conjunción Sol-Mercurio-Urano en Tauro trae IDEAS PRÁCTICAS y oportunidades económicas reales. La Luna Nueva en Tauro (superluna) consolida lo que iniciaste: es momento de crecer desde bases sólidas. Marte en Tauro te hace incansable pero reflexivo. El triple evento del 31 de mayo (Luna Llena + Luna Azul + Microluna) es histórico: despierta expansión, aventura y un deseo de crecer sin límites artificiales.',
    transits: [
      { date: '1 de mayo', title: 'Luna Llena en Escorpio ♏', description: 'Soltar control', planets: ['Luna'] },
      { date: '6 de mayo', title: 'Plutón Retrógrado en Acuario ♒', description: 'Revisión de miedos profundos', planets: ['Plutón'] },
      { date: '13 de mayo', title: 'Conjunción Sol-Mercurio-Urano en Tauro ♉', description: 'Claridad material, oportunidades económicas', planets: ['Sol', 'Mercurio', 'Urano'], isSpecial: true },
      { date: '16 de mayo', title: 'Luna Nueva en Tauro + SUPERLUNA ♉', description: 'Consolidación de procesos', planets: ['Luna', 'Sol'], isSpecial: true },
      { date: '19 de mayo', title: 'Marte entra en Tauro ♉', description: 'Acción constante', planets: ['Marte'] },
      { date: '21 de mayo', title: 'Sol entra en Géminis ♊', description: 'Movimiento mental', planets: ['Sol'] },
      { date: '31 de mayo', title: 'Luna Llena en Sagitario + Luna Azul + Microluna ♐', description: 'Triple evento raro - Expansión sin límites', planets: ['Luna'], isSpecial: true }
    ],
    retrogrades: ['Plutón (desde 6 may)'],
    areasAffected: ['Finanzas', 'Estabilidad', 'Valores', 'Expansión'],
    advice: 'La conjunción Sol-Mercurio-Urano trae oportunidades económicas reales. El triple evento del 31 de mayo es histórico.',
    specialEvents: [
      { title: 'Luna Azul + Luna Llena + Microluna (31 de mayo)', description: 'Ocurre cada 2,5 años aproximadamente', type: 'rare' }
    ]
  },
  {
    id: 'junio-2026',
    month: 'Junio',
    year: 2026,
    emoji: '📚',
    title: 'Aprendizaje, Comunicación y Decisiones Claras',
    themeCentral: 'Claridad comunicativa + Sanación del valor',
    summary: 'Junio es mental y emocional. La Luna Nueva en Géminis trae IDEAS NUEVAS y necesidad urgente de comunicar. El ingreso de Quirón en Tauro marca un giro importante: comienza una curación de 8 años sobre tu relación con el valor, el cuerpo y lo material (especialmente importante para Tauro). El solsticio marca estaciones nuevas. Mercurio retrógrado en Cáncer te pedirá hablar conversaciones pendientes desde el corazón. El ingreso de Júpiter en Leo encenderá sueños grandes y tu autoestima: es tiempo de brillo consciente. La Luna Llena en Capricornio (con Microluna) pide madurez y estructura clara.',
    transits: [
      { date: '15 de junio', title: 'Luna Nueva en Géminis + SUPERLUNA ♊', description: 'Ideas nuevas, comunicación', planets: ['Luna', 'Sol'], isSpecial: true },
      { date: '19 de junio', title: 'Quirón entra en Tauro ♉', description: 'Sanación de heridas del valor y lo material (8 años)', planets: ['Quirón'], isSpecial: true },
      { date: '21 de junio (08:25 UTC)', title: 'SOLSTICIO DE VERANO/INVIERNO', description: 'Hemisferio norte: Verano / Hemisferio sur: Invierno', planets: ['Sol'], isSpecial: true },
      { date: '29 de junio', title: 'Mercurio Retrógrado en Cáncer ♋', description: 'Palabras no dichas, emociones pendientes', planets: ['Mercurio'] },
      { date: '29 de junio', title: 'Luna Llena en Capricornio + Microluna ♑', description: 'Madurez y estructura clara', planets: ['Luna'] },
      { date: '30 de junio', title: 'Júpiter entra en Leo ♌', description: 'Sueños grandes, autoestima', planets: ['Júpiter'], isSpecial: true }
    ],
    retrogrades: ['Mercurio (desde 29 jun)'],
    areasAffected: ['Comunicación', 'Aprendizaje', 'Valor personal', 'Autoestima'],
    advice: 'El ingreso de Quirón en Tauro marca 8 años de sanación sobre tu relación con el valor. Júpiter en Leo enciende tu autoestima.'
  },
  {
    id: 'julio-2026',
    month: 'Julio',
    year: 2026,
    emoji: '🔮',
    title: 'Introspección y Sanación del Ego',
    themeCentral: 'Reflexión + Reparación emocional del ego',
    summary: 'Julio es pausa. Neptuno retrógrado pide cautela en decisiones: estás en niebla temporal, no es momento de grandes saltos. La Luna Nueva en Cáncer te invita a adentro, al autocuidado y a proteger tu mundo emocional. El Sol en Leo trae un renacer creativo que contrasta con la introspección: es momento de soñar pero sin prisa. Saturno retrógrado revisa tu disciplina real y tus límites. La Luna Llena en Acuario trae desapego y claridad social: ves con perspectiva qué vínculos te sostienen.',
    transits: [
      { date: '6 de julio', title: 'Afelio', description: 'La Tierra en su punto más lejano del Sol (152.088.063 km)', planets: ['Tierra', 'Sol'] },
      { date: '7 de julio', title: 'Neptuno Retrógrado en Aries ♈', description: 'Confusión temporal, pausa en decisiones', planets: ['Neptuno'] },
      { date: '14 de julio', title: 'Luna Nueva en Cáncer + SUPERLUNA ♋', description: 'Autocuidado, introspección', planets: ['Luna', 'Sol'], isSpecial: true },
      { date: '22 de julio', title: 'Sol entra en Leo ♌', description: 'Renacer creativo', planets: ['Sol'] },
      { date: '26 de julio', title: 'Saturno Retrógrado en Aries ♈', description: 'Revisión de límites y disciplina', planets: ['Saturno'] },
      { date: '29 de julio', title: 'Luna Llena en Acuario ♒', description: 'Desapego, claridad social', planets: ['Luna'] }
    ],
    retrogrades: ['Neptuno (desde 7 jul)', 'Saturno (desde 26 jul)', 'Mercurio (hasta mediados jul)'],
    areasAffected: ['Ego', 'Autocuidado', 'Creatividad', 'Límites'],
    advice: 'Julio es pausa. No es momento de grandes saltos. Enfócate en el autocuidado y proteger tu mundo emocional.'
  },
  {
    id: 'agosto-2026',
    month: 'Agosto',
    year: 2026,
    emoji: '⚡',
    title: 'Eclipses Transformadores y Redefinición de Propósito',
    themeCentral: 'Transformación profunda + Recuperación del propósito',
    summary: 'Agosto es renacimiento potente. El eclipse solar total en Leo (12 de agosto) es el evento más importante del año astrológico: te pregunta QUIÉN ERES y qué versión de ti quieres mostrar al mundo. Este eclipse trae liberación de viejos roles y recuperación de poder personal. El Sol en Virgo te ayuda a organizar lo que descubriste: estructura lo nuevo de forma práctica. El eclipse lunar parcial en Piscis (28 de agosto, solo 16 días después) cierra un capítulo emocional profundo que quizá arrastrabas desde años atrás. Este es un mes de revelación y liberación.',
    transits: [
      { date: '12 de agosto', title: 'ECLIPSE SOLAR TOTAL en Leo + Luna Nueva ♌', description: 'EVENTO DEL AÑO - ¿Quién eres? Recuperación de poder personal', planets: ['Sol', 'Luna'], isSpecial: true },
      { date: '23 de agosto', title: 'Sol entra en Virgo ♍', description: 'Organización, detalle', planets: ['Sol'] },
      { date: '28 de agosto', title: 'ECLIPSE LUNAR PARCIAL en Piscis + Luna Llena ♓', description: 'Cierre de capítulo emocional profundo', planets: ['Luna'], isSpecial: true }
    ],
    retrogrades: ['Neptuno', 'Saturno'],
    areasAffected: ['Identidad', 'Propósito', 'Poder personal', 'Emociones profundas'],
    advice: 'El eclipse solar total en Leo es el evento astrológico más potente del año. Pregúntate: ¿Quién eres realmente?',
    specialEvents: [
      { title: 'ECLIPSE SOLAR TOTAL en Leo (12 de agosto)', description: 'El evento astrológico más potente del año', type: 'eclipse' },
      { title: 'ECLIPSE LUNAR PARCIAL en Piscis (28 de agosto)', description: 'Cierre de capítulo emocional profundo', type: 'eclipse' }
    ]
  },
  {
    id: 'septiembre-2026',
    month: 'Septiembre',
    year: 2026,
    emoji: '🧩',
    title: 'Reajuste Mental y Pausa Estratégica',
    themeCentral: 'Claridad mental + Reorganización',
    summary: 'Septiembre es claridad después del ruido. Urano retrógrado revisa ideas y decisiones impulsivas que tomaste; es ajuste mental. La Luna Nueva en Virgo pone orden en prioridades reales: qué tareas son urgentes, cuáles pueden esperar. El equinoccio marca cambio estacional y equilibrio. La Luna Llena en Aries trae coraje emocional: cierras indecisiones y actúas desde convicción. Marte en Leo enciende impulso creativo genuino. Septiembre es pausa estratégica: ajustas sin drama emocional.',
    transits: [
      { date: '10 de septiembre', title: 'Urano Retrógrado en Géminis ♊', description: 'Revisión de ideas e impulsividad', planets: ['Urano'] },
      { date: '11 de septiembre', title: 'Luna Nueva en Virgo ♍', description: 'Orden de prioridades', planets: ['Luna', 'Sol'] },
      { date: '23 de septiembre (00:05 UTC)', title: 'EQUINOCCIO DE OTOÑO/PRIMAVERA', description: 'Hemisferio norte: Otoño / Hemisferio sur: Primavera', planets: ['Sol'], isSpecial: true },
      { date: '26 de septiembre', title: 'Luna Llena en Aries ♈', description: 'Coraje emocional, fin de indecisiones', planets: ['Luna'] },
      { date: '28 de septiembre', title: 'Marte entra en Leo ♌', description: 'Impulso creativo', planets: ['Marte'] }
    ],
    retrogrades: ['Urano (desde 10 sep)', 'Neptuno', 'Saturno'],
    areasAffected: ['Mente', 'Prioridades', 'Creatividad', 'Decisiones'],
    advice: 'Septiembre es pausa estratégica. Ajusta sin drama emocional y pon orden en prioridades reales.'
  },
  {
    id: 'octubre-2026',
    month: 'Octubre',
    year: 2026,
    emoji: '💔',
    title: 'Relaciones, Acuerdos y Equilibrio Interno',
    themeCentral: 'Verdad relacional + Negociación consciente',
    summary: 'Octubre es profundidad relacional. Venus retrógrado removerá vínculos intensos: tendrás claridad sobre qué es amor real y qué es obsesión. La Luna Nueva en Libra favorece acuerdos justos y nuevas etapas en relaciones. El Sol en Escorpio intensifica emociones: necesitas profundidad y verdad. Mercurio retrógrado revelará secretos, verdades incómodas y conflictos escondidos: la comunicación honesta es clave. La Luna Llena en Tauro devuelve estabilidad material y seguridad. Octubre pide honestidad total: negocia, pon límites, no sientas culpa.',
    transits: [
      { date: '3 de octubre', title: 'Venus Retrógrado en Escorpio ♏', description: 'Revisión de vínculos, celos, pasiones', planets: ['Venus'] },
      { date: '10 de octubre', title: 'Luna Nueva en Libra ♎', description: 'Acuerdos, armonía', planets: ['Luna', 'Sol'] },
      { date: '23 de octubre', title: 'Sol entra en Escorpio ♏', description: 'Intensidad emocional', planets: ['Sol'] },
      { date: '24 de octubre', title: 'Mercurio Retrógrado en Escorpio ♏', description: 'Secretos, conflictos escondidos', planets: ['Mercurio'] },
      { date: '26 de octubre', title: 'Luna Llena en Tauro ♉', description: 'Estabilidad material', planets: ['Luna'] }
    ],
    retrogrades: ['Venus (desde 3 oct)', 'Mercurio (desde 24 oct)', 'Urano', 'Neptuno', 'Saturno'],
    areasAffected: ['Relaciones', 'Acuerdos', 'Verdad', 'Límites'],
    advice: 'Venus retrógrado te dará claridad sobre qué es amor real y qué es obsesión. La comunicación honesta es clave.'
  },
  {
    id: 'noviembre-2026',
    month: 'Noviembre',
    year: 2026,
    emoji: '🔄',
    title: 'Cierre Kármico y Renacimiento Interior',
    themeCentral: 'Transformación consciente + Cierre de patrones',
    summary: 'Noviembre es cambio consciente. La Luna Nueva en Escorpio marca un renacer emocional profundo: dejas atrás una etapa dolorosa o un patrón repetitivo. El Sol en Sagitario trae luz, esperanza y claridad mental: ves el porqué de lo vivido. La Luna Llena en Géminis (superluna) trae decisiones claras: conversaciones cruciales y cruces de camino. Marte en Virgo te da disciplina para avanzar sin distraerte. Lo viejo muere para liberar espacio para lo auténtico: esta es tu alquimia de noviembre.',
    transits: [
      { date: '9 de noviembre', title: 'Luna Nueva en Escorpio ♏', description: 'Renacer emocional profundo', planets: ['Luna', 'Sol'], isSpecial: true },
      { date: '22 de noviembre', title: 'Sol entra en Sagitario ♐', description: 'Esperanza, claridad mental', planets: ['Sol'] },
      { date: '24 de noviembre', title: 'Luna Llena en Géminis + SUPERLUNA ♊', description: 'Decisiones, conversaciones cruciales', planets: ['Luna'], isSpecial: true },
      { date: '26 de noviembre', title: 'Marte entra en Virgo ♍', description: 'Disciplina, enfoque', planets: ['Marte'] }
    ],
    retrogrades: ['Venus (hasta mediados nov)', 'Mercurio (hasta mediados nov)', 'Urano', 'Neptuno'],
    areasAffected: ['Transformación', 'Patrones', 'Decisiones', 'Disciplina'],
    advice: 'Lo viejo muere para liberar espacio para lo auténtico. Esta es tu alquimia de noviembre.'
  },
  {
    id: 'diciembre-2026',
    month: 'Diciembre',
    year: 2026,
    emoji: '🎯',
    title: 'Expansión Consciente y Cierre con Propósito',
    themeCentral: 'Cierre sabio + Integración del aprendizaje',
    summary: 'Diciembre es cierre sabio. La Luna Nueva en Sagitario enciende tus ganas de crecimiento y nuevas metas. Saturno directo te da sensación de AVANCE REAL tras meses de pruebas: finalmente estructuras. Júpiter retrógrado revisa tu relación con el ego, la visibilidad y el poder personal: qué tipo de éxito quieres en 2027. El solsticio marca el punto de renovación estacional más profundo. La Luna Llena en Cáncer (superluna, víspera de Navidad) trae claridad emocional y cierre de pendientes afectivos. Diciembre te enseña el porqué de todo lo vivido en 2026: entras al 2027 más fuerte, más consciente.',
    transits: [
      { date: '9 de diciembre', title: 'Luna Nueva en Sagitario ♐', description: 'Crecimiento, nuevas metas', planets: ['Luna', 'Sol'] },
      { date: '11 de diciembre', title: 'Saturno Directo en Aries ♈', description: 'Estabilidad, estructura - Avance real', planets: ['Saturno'], isSpecial: true },
      { date: '13 de diciembre', title: 'Júpiter Retrógrado en Leo ♌', description: 'Revisión de ego, visibilidad', planets: ['Júpiter'] },
      { date: '21 de diciembre (20:49 UTC)', title: 'SOLSTICIO DE INVIERNO/VERANO', description: 'Hemisferio norte: Invierno / Hemisferio sur: Verano', planets: ['Sol'], isSpecial: true },
      { date: '24 de diciembre', title: 'Luna Llena en Cáncer + SUPERLUNA ♋', description: 'Claridad emocional, cierre afectivo', planets: ['Luna'], isSpecial: true }
    ],
    retrogrades: ['Júpiter (desde 13 dic)', 'Urano'],
    areasAffected: ['Metas', 'Estructura', 'Ego', 'Emociones'],
    advice: 'Diciembre te enseña el porqué de todo lo vivido en 2026. Entras al 2027 más fuerte, más consciente.'
  }
];

export const yearSummary: YearSummary = {
  title: 'Panorama Astrológico 2026',
  summary: '2026 no será un año para correr inconscientemente. Será un año para moverte CUANDO TOCA, frenar CUANDO HACE FALTA y actuar CUANDO TU ALMA LO PIDA. Los eclipses traerán VERDAD. Las retrogradaciones traerán INTROSPECCIÓN. Los planetas lentos (Saturno, Neptuno, Quirón) marcarán una nueva etapa de conciencia colectiva. Si aprendes a escuchar los silencios entre cada tránsito, verás que no pierdes el ritmo… TE ALINEAS CON ÉL.',
  majorThemes: [
    'Saturno en Aries: Nueva era de responsabilidad en la acción (hasta 2028)',
    'Neptuno en Aries: Nuevo ciclo de idealismo activo (hasta 2038)',
    'Quirón en Tauro: 8 años de sanación del valor y lo material',
    'Júpiter en Leo: Expansión de sueños y autoestima',
    'Eclipse Solar Total en Leo: El evento astrológico más potente del año'
  ],
  keyword: 'ALINEACIÓN CONSCIENTE',
  keywordDescription: 'Si aprendes a escuchar los silencios entre cada tránsito, verás que no pierdes el ritmo… TE ALINEAS CON ÉL.',
  eclipses: [
    { date: '17 de febrero', type: 'Eclipse Solar Anular', sign: 'Acuario' },
    { date: '3 de marzo', type: 'Eclipse Lunar Total', sign: 'Virgo' },
    { date: '12 de agosto', type: 'Eclipse Solar Total', sign: 'Leo', isMainEvent: true },
    { date: '28 de agosto', type: 'Eclipse Lunar Parcial', sign: 'Piscis' }
  ],
  planetaryIngresses: [
    { date: '26 de enero', planet: 'Neptuno', sign: 'Aries', duration: 'hasta 2038' },
    { date: '14 de febrero', planet: 'Saturno', sign: 'Aries', duration: 'hasta 2028' },
    { date: '19 de junio', planet: 'Quirón', sign: 'Tauro', duration: '8 años' },
    { date: '30 de junio', planet: 'Júpiter', sign: 'Leo', duration: '1 año' }
  ],
  supermoons: [
    { date: '16 de mayo', type: 'Nueva' },
    { date: '15 de junio', type: 'Nueva' },
    { date: '14 de julio', type: 'Nueva' },
    { date: '24 de noviembre', type: 'Llena' },
    { date: '24 de diciembre', type: 'Llena' }
  ],
  solsticesEquinoxes: [
    { date: '20 de marzo', name: 'Equinoccio', hemisphere: 'Primavera (norte) / Otoño (sur)' },
    { date: '21 de junio', name: 'Solsticio', hemisphere: 'Verano (norte) / Invierno (sur)' },
    { date: '23 de septiembre', name: 'Equinoccio', hemisphere: 'Otoño (norte) / Primavera (sur)' },
    { date: '21 de diciembre', name: 'Solsticio', hemisphere: 'Invierno (norte) / Verano (sur)' }
  ],
  rareEvent: {
    date: '31 de mayo',
    title: 'Luna Azul + Luna Llena + Microluna',
    description: 'Triple evento que ocurre cada 2,5 años aproximadamente'
  }
};

export const getMonthById = (id: string): MonthData | undefined => {
  return transits2026.find(m => m.id === id);
};
