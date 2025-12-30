export interface Transit {
  date: string;
  title: string;
  description: string;
  planets: string[];
}

export interface MonthData {
  id: string;
  month: string;
  year: number;
  title: string;
  summary: string;
  transits: Transit[];
  retrogrades: string[];
  areasAffected: string[];
  advice: string;
}

export const transits2026: MonthData[] = [
  {
    id: 'enero-2026',
    month: 'Enero',
    year: 2026,
    title: 'Nuevos Comienzos Emocionales',
    summary: 'Enero 2026 marca el inicio de un año de profundas transformaciones. Júpiter en Cáncer activa temas familiares y emocionales, invitándonos a expandir nuestro concepto de hogar. Plutón continúa su travesía por Acuario, catalizando cambios en estructuras sociales.',
    transits: [
      { date: '5 enero', title: 'Sol conjunción Plutón', description: 'Transformación del ego y renacimiento personal', planets: ['Sol', 'Plutón'] },
      { date: '13 enero', title: 'Mercurio retrógrado en Acuario', description: 'Revisión de ideas sobre comunidad y tecnología', planets: ['Mercurio'] },
      { date: '20 enero', title: 'Luna Nueva en Acuario', description: 'Nuevos comienzos en proyectos grupales', planets: ['Luna', 'Sol'] }
    ],
    retrogrades: ['Mercurio (13 ene - 3 feb)'],
    areasAffected: ['Hogar', 'Familia', 'Comunicación', 'Tecnología'],
    advice: 'Evita compras tecnológicas importantes durante Mercurio retrógrado. Enfócate en fortalecer lazos familiares y revisar planes del hogar.'
  },
  {
    id: 'febrero-2026',
    month: 'Febrero',
    year: 2026,
    title: 'Claridad Mental Renovada',
    summary: 'Con Mercurio directo desde el día 3, la claridad mental regresa. Venus en Aries trae pasión a las relaciones, mientras Marte en Géminis energiza la comunicación.',
    transits: [
      { date: '3 febrero', title: 'Mercurio directo', description: 'Fin de la confusión comunicativa', planets: ['Mercurio'] },
      { date: '14 febrero', title: 'Venus en Aries', description: 'Amor apasionado y directo', planets: ['Venus'] },
      { date: '18 febrero', title: 'Luna Llena en Virgo', description: 'Culminación en temas de salud y trabajo', planets: ['Luna'] }
    ],
    retrogrades: [],
    areasAffected: ['Relaciones', 'Comunicación', 'Salud'],
    advice: 'Aprovecha la energía de Venus en Aries para tomar iniciativa en el amor. Es buen momento para proyectos de comunicación.'
  },
  {
    id: 'marzo-2026',
    month: 'Marzo',
    year: 2026,
    title: 'Equinoccio de Transformación',
    summary: 'El equinoccio de primavera trae renovación. Saturno se prepara para su transición a Aries en mayo. Eclipse solar en Aries marca nuevos comienzos poderosos.',
    transits: [
      { date: '20 marzo', title: 'Equinoccio - Sol en Aries', description: 'Nuevo año astrológico, energía de inicio', planets: ['Sol'] },
      { date: '29 marzo', title: 'Eclipse Solar en Aries', description: 'Portal de transformación personal', planets: ['Sol', 'Luna'] }
    ],
    retrogrades: [],
    areasAffected: ['Identidad', 'Nuevos proyectos', 'Liderazgo'],
    advice: 'El eclipse es momento de plantar semillas para los próximos 6 meses. Define tus intenciones con claridad.'
  },
  {
    id: 'abril-2026',
    month: 'Abril',
    year: 2026,
    title: 'Impulso y Acción',
    summary: 'La energía de Aries domina el mes con múltiples planetas activando este signo. Es tiempo de acción decidida y valentía.',
    transits: [
      { date: '12 abril', title: 'Eclipse Lunar en Libra', description: 'Revelaciones en relaciones y asociaciones', planets: ['Luna'] },
      { date: '19 abril', title: 'Sol en Tauro', description: 'Estabilización de las iniciativas de Aries', planets: ['Sol'] }
    ],
    retrogrades: [],
    areasAffected: ['Relaciones', 'Finanzas', 'Valores'],
    advice: 'El eclipse lunar ilumina lo que necesita equilibrarse en tus relaciones. Presta atención a las revelaciones.'
  },
  {
    id: 'mayo-2026',
    month: 'Mayo',
    year: 2026,
    title: 'Saturno Entra en Aries',
    summary: 'El evento astrológico más significativo del año: Saturno ingresa a Aries el 25 de mayo. Comienza un nuevo ciclo de 2.5 años de lecciones sobre iniciativa y liderazgo.',
    transits: [
      { date: '25 mayo', title: 'Saturno ingresa a Aries', description: 'Nuevo ciclo de responsabilidad en la acción', planets: ['Saturno'] },
      { date: '10 mayo', title: 'Mercurio retrógrado en Géminis', description: 'Revisión de comunicaciones', planets: ['Mercurio'] }
    ],
    retrogrades: ['Mercurio (10 may - 2 jun)'],
    areasAffected: ['Liderazgo', 'Iniciativa', 'Comunicación'],
    advice: 'El ingreso de Saturno en Aries marca un punto de inflexión. Prepárate para asumir nuevas responsabilidades con madurez.'
  },
  {
    id: 'junio-2026',
    month: 'Junio',
    year: 2026,
    title: 'Solsticio de Claridad',
    summary: 'Mercurio directo trae claridad. El solsticio de verano activa temas emocionales con el Sol en Cáncer uniéndose a Júpiter.',
    transits: [
      { date: '2 junio', title: 'Mercurio directo', description: 'Claridad mental restaurada', planets: ['Mercurio'] },
      { date: '21 junio', title: 'Solsticio - Sol en Cáncer', description: 'Máxima luz, enfoque en hogar y familia', planets: ['Sol'] },
      { date: '25 junio', title: 'Sol conjunción Júpiter', description: 'Expansión de la identidad emocional', planets: ['Sol', 'Júpiter'] }
    ],
    retrogrades: [],
    areasAffected: ['Familia', 'Emociones', 'Hogar', 'Abundancia'],
    advice: 'La conjunción Sol-Júpiter es excelente para expansión familiar, mudanzas o mejoras del hogar.'
  },
  {
    id: 'julio-2026',
    month: 'Julio',
    year: 2026,
    title: 'Urano Revoluciona la Comunicación',
    summary: 'Urano ingresa a Géminis el 7 de julio, comenzando 7 años de revolución en comunicación y tecnología. Cambios sísmicos en cómo nos conectamos.',
    transits: [
      { date: '7 julio', title: 'Urano ingresa a Géminis', description: 'Revolución en comunicación y tecnología', planets: ['Urano'] },
      { date: '22 julio', title: 'Sol en Leo', description: 'Brillo personal y creatividad', planets: ['Sol'] }
    ],
    retrogrades: [],
    areasAffected: ['Comunicación', 'Tecnología', 'Creatividad', 'Expresión'],
    advice: 'Mantente abierto a nuevas formas de comunicación y aprendizaje. La adaptabilidad será clave.'
  },
  {
    id: 'agosto-2026',
    month: 'Agosto',
    year: 2026,
    title: 'Expresión Creativa Plena',
    summary: 'El Sol en Leo activa la creatividad y el corazón. Venus en Leo aumenta el magnetismo personal. Es tiempo de brillar.',
    transits: [
      { date: '5 agosto', title: 'Venus en Leo', description: 'Amor dramático y generoso', planets: ['Venus'] },
      { date: '22 agosto', title: 'Sol en Virgo', description: 'Enfoque en salud y servicio', planets: ['Sol'] }
    ],
    retrogrades: [],
    areasAffected: ['Creatividad', 'Romance', 'Salud'],
    advice: 'Exprésate creativamente sin inhibiciones. El amor fluye cuando te atreves a brillar.'
  },
  {
    id: 'septiembre-2026',
    month: 'Septiembre',
    year: 2026,
    title: 'Equinoccio de Balance',
    summary: 'El equinoccio de otoño trae equilibrio. Eclipse solar en Virgo enfatiza la salud y el servicio. Mercurio retrógrado invita a revisar rutinas.',
    transits: [
      { date: '7 septiembre', title: 'Mercurio retrógrado en Libra', description: 'Revisión de relaciones y acuerdos', planets: ['Mercurio'] },
      { date: '21 septiembre', title: 'Eclipse Solar en Virgo', description: 'Nuevos comienzos en salud y trabajo', planets: ['Sol', 'Luna'] },
      { date: '22 septiembre', title: 'Equinoccio - Sol en Libra', description: 'Balance y armonía', planets: ['Sol'] }
    ],
    retrogrades: ['Mercurio (7 sep - 30 sep)'],
    areasAffected: ['Salud', 'Trabajo', 'Relaciones', 'Rutinas'],
    advice: 'El eclipse es ideal para iniciar nuevos hábitos de salud. Revisa contratos con cuidado durante Mercurio retrógrado.'
  },
  {
    id: 'octubre-2026',
    month: 'Octubre',
    year: 2026,
    title: 'Eclipse en las Profundidades',
    summary: 'Eclipse lunar en Aries trae culminaciones en proyectos personales. Plutón intensifica transformaciones sociales.',
    transits: [
      { date: '6 octubre', title: 'Eclipse Lunar en Aries', description: 'Culminación de ciclos personales', planets: ['Luna'] },
      { date: '23 octubre', title: 'Sol en Escorpio', description: 'Profundización emocional', planets: ['Sol'] }
    ],
    retrogrades: [],
    areasAffected: ['Transformación', 'Poder personal', 'Intimidad'],
    advice: 'Los eclipses revelan verdades ocultas. Acepta las transformaciones que se presentan.'
  },
  {
    id: 'noviembre-2026',
    month: 'Noviembre',
    year: 2026,
    title: 'Intensidad Transformadora',
    summary: 'La temporada de Escorpio trae profundidad. Marte en Escorpio intensifica la pasión y el poder personal.',
    transits: [
      { date: '9 noviembre', title: 'Marte en Escorpio', description: 'Poder de acción transformadora', planets: ['Marte'] },
      { date: '21 noviembre', title: 'Sol en Sagitario', description: 'Expansión de horizontes', planets: ['Sol'] }
    ],
    retrogrades: [],
    areasAffected: ['Transformación', 'Pasión', 'Viajes', 'Filosofía'],
    advice: 'Canaliza la intensidad de Marte en Escorpio hacia transformaciones constructivas.'
  },
  {
    id: 'diciembre-2026',
    month: 'Diciembre',
    year: 2026,
    title: 'Solsticio de Sabiduría',
    summary: 'El año cierra con el Sol entrando en Capricornio. Mercurio retrógrado final del año invita a reflexionar sobre todo lo aprendido.',
    transits: [
      { date: '13 diciembre', title: 'Mercurio retrógrado en Capricornio', description: 'Revisión de metas y estructuras', planets: ['Mercurio'] },
      { date: '21 diciembre', title: 'Solsticio - Sol en Capricornio', description: 'Reflexión y planificación', planets: ['Sol'] }
    ],
    retrogrades: ['Mercurio (13 dic - 2 ene 2027)'],
    areasAffected: ['Metas', 'Carrera', 'Estructuras', 'Planificación'],
    advice: 'Reflexiona sobre los logros del año. Evita firmar contratos importantes. Planifica el próximo año con sabiduría.'
  }
];

export const yearSummary = {
  title: 'Panorama Astrológico 2026',
  summary: 'El 2026 será un año de transiciones fundamentales. Saturno deja Piscis para entrar en Aries, marcando el inicio de un nuevo ciclo de 29 años. Urano ingresa a Géminis, revolucionando la comunicación y la tecnología. Júpiter en Cáncer durante todo el año expande temas de hogar, familia y nutrición emocional. Plutón continúa su largo tránsito por Acuario, transformando estructuras sociales. Neptuno en Aries inspira un nuevo idealismo activo. Es un año para adaptarse a cambios rápidos mientras mantenemos nuestras raíces emocionales nutridas.',
  majorThemes: [
    'Saturno en Aries: Nueva era de responsabilidad en la acción',
    'Urano en Géminis: Revolución en comunicación y tecnología',
    'Júpiter en Cáncer: Expansión emocional y familiar',
    'Plutón en Acuario: Transformación de estructuras sociales',
    'Neptuno en Aries: Idealismo activo y nuevas visiones espirituales'
  ]
};

export const getMonthById = (id: string): MonthData | undefined => {
  return transits2026.find(m => m.id === id);
};
