import { reduceNumber } from './numerology';

export interface CycleInfo {
  number: number;
  name: string;
  theme: string;
  energy: string;
  advice: string;
  activities: string[];
}

const cycleDescriptions: { [key: number]: CycleInfo } = {
  1: {
    number: 1,
    name: 'Nuevos Comienzos',
    theme: 'Inicio, independencia y nuevas oportunidades',
    energy: 'Es momento de plantar semillas, iniciar proyectos y tomar la iniciativa. La energía favorece la acción individual y la confianza en uno mismo.',
    advice: 'Atrévete a empezar algo nuevo. Este ciclo favorece la originalidad y el liderazgo. No esperes permiso de nadie.',
    activities: ['Iniciar nuevos proyectos', 'Tomar decisiones importantes', 'Enfocarte en metas personales', 'Desarrollar independencia']
  },
  2: {
    number: 2,
    name: 'Cooperación y Paciencia',
    theme: 'Asociaciones, diplomacia y espera receptiva',
    energy: 'Tiempo de cultivar relaciones, buscar equilibrio y ser paciente. La energía favorece la colaboración sobre la acción individual.',
    advice: 'No fuerces las cosas. Escucha más de lo que hablas. Las asociaciones y la diplomacia son tu camino ahora.',
    activities: ['Fortalecer relaciones', 'Mediar en conflictos', 'Practicar la paciencia', 'Colaborar con otros']
  },
  3: {
    number: 3,
    name: 'Expresión Creativa',
    theme: 'Creatividad, alegría y comunicación',
    energy: 'La energía creativa está en su punto más alto. Es momento de expresarte, socializar y disfrutar de la vida.',
    advice: 'Expresa tu verdad. Crea, comunica y comparte tu alegría con el mundo. La diversión es parte del camino.',
    activities: ['Proyectos creativos', 'Escribir o hablar en público', 'Socializar y networking', 'Celebrar la vida']
  },
  4: {
    number: 4,
    name: 'Construcción y Trabajo',
    theme: 'Organización, disciplina y fundamentos',
    energy: 'Es tiempo de trabajar duro, organizar y construir bases sólidas. La energía favorece lo práctico sobre lo idealista.',
    advice: 'Enfócate en el trabajo. No hay atajos ahora. Los cimientos que construyas serán la base de tu futuro.',
    activities: ['Organizar finanzas', 'Establecer rutinas', 'Trabajar con disciplina', 'Construir seguridad']
  },
  5: {
    number: 5,
    name: 'Cambio y Libertad',
    theme: 'Transformación, aventura y nuevas experiencias',
    energy: 'Los cambios están en el aire. Es momento de adaptarse, explorar y liberarse de lo que ya no sirve.',
    advice: 'Abraza el cambio en lugar de resistirlo. Viaja, aprende algo nuevo y mantente flexible. La libertad te llama.',
    activities: ['Viajar y explorar', 'Aprender algo nuevo', 'Hacer cambios de vida', 'Liberarte de limitaciones']
  },
  6: {
    number: 6,
    name: 'Responsabilidad y Hogar',
    theme: 'Familia, amor y servicio',
    energy: 'El foco está en el hogar, la familia y las responsabilidades. Es tiempo de nutrir y ser nutridos.',
    advice: 'Cuida de los tuyos pero no te olvides de ti. El amor y el servicio son tu camino, pero desde el equilibrio.',
    activities: ['Atender a la familia', 'Mejorar el hogar', 'Servir a la comunidad', 'Cultivar relaciones de amor']
  },
  7: {
    number: 7,
    name: 'Introspección y Sabiduría',
    theme: 'Reflexión, espiritualidad y conocimiento interior',
    energy: 'Es un ciclo para ir hacia adentro, estudiar, meditar y conectar con la sabiduría interior.',
    advice: 'Retírate del ruido externo. La soledad productiva y el estudio profundo traerán las respuestas que buscas.',
    activities: ['Meditar y reflexionar', 'Estudiar temas profundos', 'Buscar tiempo a solas', 'Desarrollar la intuición']
  },
  8: {
    number: 8,
    name: 'Manifestación y Poder',
    theme: 'Logros materiales, autoridad y karma',
    energy: 'La energía de manifestación está potenciada. Es tiempo de cosechar resultados y asumir el poder personal.',
    advice: 'Es tu momento de brillar materialmente. Negocia, invierte y reclama tu autoridad. El universo apoya tu abundancia.',
    activities: ['Negociar y cerrar tratos', 'Invertir y expandir', 'Asumir posiciones de liderazgo', 'Manifestar metas materiales']
  },
  9: {
    number: 9,
    name: 'Culminación y Cierre',
    theme: 'Finales, soltar y preparación para lo nuevo',
    energy: 'Un ciclo de cierre. Es tiempo de completar, perdonar y soltar lo que ya no pertenece a tu camino.',
    advice: 'Suelta con gratitud. Este no es momento de comenzar, sino de completar. Limpia el espacio para el nuevo ciclo.',
    activities: ['Completar proyectos pendientes', 'Perdonar y soltar', 'Servir a causas mayores', 'Prepararte para el nuevo ciclo']
  },
  11: {
    number: 11,
    name: 'Iluminación',
    theme: 'Intuición elevada, inspiración y maestría espiritual',
    energy: 'Un ciclo de alta vibración espiritual. La intuición está amplificada y puedes recibir guía superior.',
    advice: 'Confía en tu intuición más que nunca. Eres un canal de inspiración. Comparte tu luz pero mantente enraizado.',
    activities: ['Seguir la intuición', 'Inspirar a otros', 'Desarrollo espiritual', 'Trabajo con energía elevada']
  },
  22: {
    number: 22,
    name: 'Maestro Constructor',
    theme: 'Manifestación a gran escala y legado',
    energy: 'La energía del maestro constructor te apoya para crear algo que trascienda. Piensa en grande.',
    advice: 'Tienes el poder de manifestar visiones extraordinarias. No te conformes con menos. Construye tu legado.',
    activities: ['Proyectos de gran escala', 'Construir sistemas duraderos', 'Liderar con visión', 'Crear impacto duradero']
  },
  33: {
    number: 33,
    name: 'Maestro Sanador',
    theme: 'Amor incondicional y servicio elevado',
    energy: 'La energía del amor universal te llama a servir desde el corazón. Eres un sanador en este ciclo.',
    advice: 'Tu presencia sana. Sirve desde el amor pero cuida de no agotarte. El mundo necesita tu compasión.',
    activities: ['Sanar y servir', 'Enseñar con amor', 'Elevar a la comunidad', 'Practicar compasión activa']
  }
};

export const calculatePersonalYear = (birthDay: number, birthMonth: number, year: number): number => {
  const dayReduced = reduceNumber(birthDay);
  const monthReduced = reduceNumber(birthMonth);
  const yearReduced = reduceNumber(year);
  
  return reduceNumber(dayReduced + monthReduced + yearReduced);
};

export const calculatePersonalMonth = (personalYear: number, currentMonth: number): number => {
  return reduceNumber(personalYear + currentMonth);
};

export const calculatePersonalDay = (personalMonth: number, currentDay: number): number => {
  return reduceNumber(personalMonth + currentDay);
};

export const getCycleInfo = (number: number): CycleInfo => {
  return cycleDescriptions[number] || cycleDescriptions[reduceNumber(number)];
};

export const calculateAllCycles = (birthDay: number, birthMonth: number) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1; // 1-indexed
  const currentDay = now.getDate();
  
  const personalYear = calculatePersonalYear(birthDay, birthMonth, currentYear);
  const personalMonth = calculatePersonalMonth(personalYear, currentMonth);
  const personalDay = calculatePersonalDay(personalMonth, currentDay);
  
  return {
    personalYear: {
      number: personalYear,
      info: getCycleInfo(personalYear),
      period: `${currentYear}`
    },
    personalMonth: {
      number: personalMonth,
      info: getCycleInfo(personalMonth),
      period: `${new Date(currentYear, currentMonth - 1).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}`
    },
    personalDay: {
      number: personalDay,
      info: getCycleInfo(personalDay),
      period: `${now.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}`
    }
  };
};
