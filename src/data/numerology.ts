export interface NumerologyNumber {
  number: number;
  reducedTo?: number;
  name: string;
  keywords: string[];
  meaning: string;
  shadow: string;
  isMaster: boolean;
  isKarmic?: boolean;
  karmicLesson?: string;
  howToHeal?: string[];
}

export const numerologyNumbers: NumerologyNumber[] = [
  {
    number: 1,
    name: 'El Líder Pionero',
    keywords: ['Independencia', 'Liderazgo', 'Innovación', 'Originalidad', 'Iniciativa'],
    meaning: 'El número 1 representa el principio de todo, la chispa original de la creación. Las personas con este número como influencia principal poseen una fuerte necesidad de independencia y autodeterminación. Son pioneros naturales, capaces de iniciar proyectos y abrir caminos donde otros no ven posibilidades. Su energía es la del individuo que se levanta solo, que confía en su propia visión aunque el mundo aún no la comprenda. Son creativos, ambiciosos y poseen una determinación férrea para alcanzar sus metas. El 1 enseña que el liderazgo verdadero comienza con liderarse a uno mismo.',
    shadow: 'Cuando está desequilibrado, el 1 puede manifestar egoísmo extremo, arrogancia y tendencia a dominar a otros. La independencia se convierte en aislamiento, y la confianza en terquedad que rechaza toda ayuda o consejo. Puede haber dificultad para trabajar en equipo o considerar las necesidades de otros.',
    isMaster: false
  },
  {
    number: 2,
    name: 'El Diplomático',
    keywords: ['Cooperación', 'Sensibilidad', 'Mediación', 'Equilibrio', 'Receptividad'],
    meaning: 'El número 2 representa la dualidad, la asociación y el arte de relacionarse con otros. Las personas influenciadas por el 2 son naturalmente diplomáticas, capaces de ver ambos lados de cualquier situación y mediar entre partes en conflicto. Poseen una sensibilidad exquisita que les permite percibir las necesidades emocionales de los demás. Son los pacificadores, los que tejen conexiones y mantienen la armonía. Su fortaleza está en la cooperación, no en la competencia. El 2 enseña que la verdadera fuerza está en la receptividad y que juntos logramos más que solos.',
    shadow: 'Desequilibrado, el 2 puede volverse excesivamente dependiente de otros, perdiendo su identidad en las relaciones. La sensibilidad se convierte en hipersensibilidad que resulta herida por todo. Puede manifestar indecisión crónica, incapacidad de defender sus propias necesidades y tendencia a la manipulación pasivo-agresiva.',
    isMaster: false
  },
  {
    number: 3,
    name: 'El Comunicador Creativo',
    keywords: ['Expresión', 'Creatividad', 'Alegría', 'Comunicación', 'Optimismo'],
    meaning: 'El número 3 representa la expresión creativa, la comunicación y la alegría de vivir. Las personas con influencia del 3 son naturalmente artísticas, sociables y optimistas. Tienen el don de la palabra y pueden inspirar a otros con su entusiasmo contagioso. Son los artistas, escritores, oradores y entretenedores del mundo. Su presencia ilumina cualquier espacio y su creatividad encuentra expresión en múltiples formas. El 3 enseña que la vida es para celebrarse, que la expresión auténtica es sanadora y que la alegría es un derecho de nacimiento.',
    shadow: 'Cuando está desequilibrado, el 3 puede dispersar su energía creativa en múltiples direcciones sin completar nada. Puede volverse superficial, buscando solo el placer y evitando la profundidad. La comunicación puede convertirse en chisme o exageración. El optimismo puede negar realidades difíciles que necesitan enfrentarse.',
    isMaster: false
  },
  {
    number: 4,
    name: 'El Constructor',
    keywords: ['Estabilidad', 'Trabajo', 'Organización', 'Disciplina', 'Fundamentos'],
    meaning: 'El número 4 representa la estructura, el orden y el trabajo sistemático. Las personas influenciadas por el 4 son los constructores del mundo: metódicos, confiables y dedicados. Poseen la capacidad de tomar ideas abstractas y convertirlas en realidades tangibles a través del esfuerzo sostenido. Valoran la seguridad, la tradición y los procesos probados. Son el ancla que mantiene los proyectos en tierra, los que recuerdan que los grandes logros se construyen ladrillo a ladrillo. El 4 enseña que la disciplina es libertad y que los cimientos sólidos sostienen estructuras duraderas.',
    shadow: 'Desequilibrado, el 4 puede volverse rígido, terco y resistente a cualquier cambio o innovación. El trabajo puede convertirse en obsesión que descuida otras áreas de la vida. Puede manifestar tendencias controladoras, pesimismo y una visión limitada que no ve más allá de lo práctico.',
    isMaster: false
  },
  {
    number: 5,
    name: 'El Aventurero',
    keywords: ['Libertad', 'Cambio', 'Aventura', 'Versatilidad', 'Experiencia'],
    meaning: 'El número 5 representa la libertad, el cambio y la experiencia sensorial. Las personas con influencia del 5 son espíritus libres que necesitan variedad y estimulación para sentirse vivos. Son adaptables, curiosos y atraídos por lo nuevo y diferente. Poseen una energía magnética que atrae experiencias y personas interesantes. Son los viajeros, los exploradores, los que empujan los límites de lo conocido. Su camino es aprender a través de la experiencia directa. El 5 enseña que la vida es una aventura para vivirla plenamente, no un problema para resolverlo.',
    shadow: 'Cuando está desequilibrado, el 5 puede volverse adicto a la estimulación, incapaz de comprometerse o profundizar en nada. La libertad se convierte en irresponsabilidad, y la búsqueda de experiencias puede llevar a excesos destructivos. Puede manifestar inestabilidad crónica e incapacidad de construir algo duradero.',
    isMaster: false
  },
  {
    number: 6,
    name: 'El Protector',
    keywords: ['Responsabilidad', 'Amor', 'Familia', 'Servicio', 'Armonía'],
    meaning: 'El número 6 representa el amor, la responsabilidad y el servicio a otros. Las personas influenciadas por el 6 son naturalmente protectoras, nutricias y orientadas a la familia y la comunidad. Poseen un fuerte sentido de la justicia y se sienten llamadas a cuidar y servir. Son los consejeros, los sanadores, los que crean hogares amorosos y comunidades armoniosas. Su belleza interna se refleja en su apreciación de la estética externa. El 6 enseña que el amor en acción es servicio, y que nuestra mayor responsabilidad es hacia aquellos que dependen de nosotros.',
    shadow: 'Desequilibrado, el 6 puede volverse controlador bajo el disfraz del cuidado, entrometiéndose en las vidas de otros "por su bien". Puede sacrificar excesivamente sus propias necesidades hasta el agotamiento o el resentimiento. El perfeccionismo en el hogar y las relaciones puede crear presión insostenible.',
    isMaster: false
  },
  {
    number: 7,
    name: 'El Buscador',
    keywords: ['Sabiduría', 'Análisis', 'Espiritualidad', 'Introspección', 'Conocimiento'],
    meaning: 'El número 7 representa la búsqueda de la verdad, la sabiduría y el conocimiento profundo. Las personas con influencia del 7 son naturalmente introspectivas, analíticas y atraídas por los misterios de la existencia. Poseen una mente aguda que cuestiona todo y no acepta respuestas superficiales. Son los filósofos, los científicos, los místicos: aquellos que buscan comprender lo que yace más allá de las apariencias. Su camino es solitario por necesidad, pues la contemplación profunda requiere silencio. El 7 enseña que la verdad se encuentra en la quietud del alma investigadora.',
    shadow: 'Cuando está desequilibrado, el 7 puede volverse excesivamente aislado, perdido en su mundo interior y desconectado de la realidad práctica y las relaciones humanas. El análisis puede convertirse en parálisis. Puede manifestar escepticismo extremo, frialdad emocional y sensación de superioridad intelectual.',
    isMaster: false
  },
  {
    number: 8,
    name: 'El Manifestador',
    keywords: ['Poder', 'Abundancia', 'Logro', 'Autoridad', 'Manifestación'],
    meaning: 'El número 8 representa el poder material, el logro y la manifestación en el mundo físico. Las personas influenciadas por el 8 están destinadas a alcanzar posiciones de autoridad y abundancia material. Poseen una comprensión innata de cómo funcionan el dinero, los negocios y las estructuras de poder. Son ejecutivos naturales, capaces de manejar grandes proyectos y recursos. Su camino involucra aprender a usar el poder con responsabilidad y generosidad. El 8 enseña que la abundancia material puede ser espiritual cuando se usa para beneficiar a otros.',
    shadow: 'Desequilibrado, el 8 puede volverse obsesionado con el poder y el dinero, sacrificando relaciones y valores por el éxito material. Puede manifestar tendencias autoritarias, corrupción y uso del poder para dominar en lugar de elevar. También puede experimentar ciclos extremos de abundancia y pérdida.',
    isMaster: false
  },
  {
    number: 9,
    name: 'El Humanitario',
    keywords: ['Compasión', 'Culminación', 'Universalidad', 'Sabiduría', 'Servicio'],
    meaning: 'El número 9 representa la culminación, la compasión universal y el servicio a la humanidad. Las personas con influencia del 9 poseen una visión amplia que trasciende lo personal para abrazar lo universal. Son naturalmente compasivos, sabios y orientados a causas mayores que ellos mismos. Han integrado las lecciones de los números anteriores y ahora están llamados a compartir esa sabiduría. Son los maestros, los humanitarios, los que trabajan por el bienestar de todos. El 9 enseña que somos parte de una familia humana y que nuestra mayor realización viene de servir al todo.',
    shadow: 'Cuando está desequilibrado, el 9 puede volverse mártir, sacrificándose de manera poco saludable o usando el sacrificio como manipulación. Puede manifestar arrogancia espiritual, dificultad para aceptar las limitaciones humanas, o pérdidas repetidas que indican apegos no resueltos.',
    isMaster: false
  },
  {
    number: 11,
    name: 'El Visionario Iluminado',
    keywords: ['Intuición', 'Iluminación', 'Inspiración', 'Visión', 'Sensibilidad'],
    meaning: 'El número maestro 11 representa la intuición elevada, la iluminación espiritual y la capacidad de inspirar a las masas. Las personas con influencia del 11 son canales para energías superiores, capaces de percibir verdades que otros no ven y comunicarlas de manera transformadora. Poseen una sensibilidad exquisita y una conexión natural con lo trascendente. Son los visionarios, los profetas, los artistas inspirados que elevan la conciencia colectiva. Su camino implica equilibrar lo espiritual con lo material. El 11 enseña que somos puentes entre cielo y tierra.',
    shadow: 'El 11 desequilibrado puede manifestar ansiedad extrema, hipersensibilidad paralizante y dificultad para funcionar en el mundo práctico. Puede haber tendencia a la fantasía, la evasión o la megalomania espiritual. La sensibilidad no integrada puede llevar a adicciones o colapsos nerviosos.',
    isMaster: true
  },
  {
    number: 22,
    name: 'El Maestro Constructor',
    keywords: ['Construcción', 'Manifestación', 'Visión práctica', 'Legado', 'Poder'],
    meaning: 'El número maestro 22 representa la capacidad de manifestar visiones espirituales en forma material a gran escala. Las personas con influencia del 22 son los arquitectos del futuro, capaces de construir estructuras, organizaciones y sistemas que benefician a la humanidad entera. Combinan la visión del 11 con la practicidad del 4, creando legados duraderos. Son los fundadores, los visionarios prácticos, los que transforman sueños en realidades tangibles. El 22 enseña que no hay límites para lo que podemos construir cuando alineamos la visión superior con el trabajo disciplinado.',
    shadow: 'El 22 desequilibrado puede manifestar megalomanía, obsesión con proyectos imposibles de completar, o frustración extrema cuando la realidad no coincide con la visión. Puede haber tendencia a usar el poder para fines egoístas o a colapsar bajo el peso de su propio potencial.',
    isMaster: true
  },
  {
    number: 33,
    name: 'El Maestro Sanador',
    keywords: ['Amor incondicional', 'Servicio', 'Maestría', 'Compasión', 'Sanación'],
    meaning: 'El número maestro 33 representa el amor incondicional en acción, la maestría espiritual expresada a través del servicio. Las personas con influencia del 33 son maestros sanadores, capaces de elevar a otros a través de su mera presencia y ejemplo. Combinan la compasión del 6 con la iluminación del 11, manifestando amor divino en forma humana. Son los santos, los maestros espirituales, los que han trascendido el ego para servir al más alto bien. El 33 enseña que el amor es la fuerza más poderosa del universo y que todos somos capaces de encarnarlo.',
    shadow: 'El 33 desequilibrado puede manifestar complejo de salvador, agotamiento por servicio excesivo, o la creencia de que está por encima de las necesidades humanas normales. Puede haber tendencia al martirio, la manipulación emocional bajo el disfraz del amor, o la negación de los propios límites.',
    isMaster: true
  },
  // Números Kármicos
  {
    number: 13,
    reducedTo: 4,
    name: 'La Transformación',
    keywords: ['Renacimiento', 'Trabajo', 'Esfuerzo', 'Muerte y resurrección', 'Persistencia'],
    meaning: 'El número kármico 13 representa la necesidad de transformación profunda a través del trabajo y el esfuerzo. Este número aparece cuando en vidas pasadas hubo pereza, irresponsabilidad o tendencia a tomar atajos. La energía del 13 exige construir desde cero, con paciencia y perseverancia. Es el número del fénix: lo viejo debe morir para que nazca lo nuevo. Las personas con este número en su carta enfrentan obstáculos que les enseñan el valor del trabajo honesto y la transformación personal. El 13 reduce al 4, pero su camino es más intenso y kármico.',
    shadow: 'El 13 desequilibrado puede manifestar miedo paralizante al cambio, resistencia a las transformaciones necesarias, o repetición compulsiva de patrones destructivos. Puede haber tendencia a la auto-sabotaje justo cuando el éxito está cerca.',
    isMaster: false,
    isKarmic: true,
    karmicLesson: 'Aprender el valor del trabajo constante y la transformación. En vidas pasadas puede haber habido tendencia a la pereza o a buscar el camino fácil, descuidando responsabilidades importantes.',
    howToHeal: [
      'Aceptar que el trabajo duro es parte esencial del camino',
      'Abrazar los finales como oportunidades de renacimiento',
      'Desarrollar disciplina y constancia en los proyectos',
      'No temer a los cambios profundos, son necesarios para tu evolución',
      'Practicar la gratitud por los obstáculos como maestros'
    ]
  },
  {
    number: 14,
    reducedTo: 5,
    name: 'La Libertad Kármica',
    keywords: ['Moderación', 'Equilibrio', 'Libertad responsable', 'Adicciones', 'Cambio'],
    meaning: 'El número kármico 14 representa la necesidad de aprender a usar la libertad con sabiduría y moderación. Este número aparece cuando en vidas pasadas hubo abuso de la libertad personal, excesos, adicciones o uso irresponsable de los sentidos. La energía del 14 trae tentaciones y pruebas relacionadas con los placeres físicos, sustancias, sexo o comportamientos adictivos. Las personas con este número deben encontrar el equilibrio entre la libertad y la responsabilidad. El 14 reduce al 5, pero su camino incluye lecciones kármicas sobre el uso correcto de la libertad.',
    shadow: 'El 14 desequilibrado puede manifestar adicciones de todo tipo, incapacidad de comprometerse, búsqueda compulsiva de estimulación, o pérdida repetida de la libertad por decisiones impulsivas.',
    isMaster: false,
    isKarmic: true,
    karmicLesson: 'Aprender a usar la libertad con responsabilidad y moderación. En vidas pasadas puede haber habido abuso de sustancias, excesos sensuales o uso de la libertad para dañar a otros.',
    howToHeal: [
      'Practicar la moderación en todas las áreas de la vida',
      'Desarrollar autocontrol sin reprimir la naturaleza libre',
      'Encontrar formas saludables de experimentar novedad',
      'Asumir responsabilidad por las consecuencias de tus elecciones',
      'Meditar sobre la verdadera naturaleza de la libertad interior'
    ]
  },
  {
    number: 16,
    reducedTo: 7,
    name: 'La Torre Caída',
    keywords: ['Humildad', 'Ego', 'Caída', 'Iluminación', 'Reconstrucción'],
    meaning: 'El número kármico 16 representa la destrucción necesaria del ego para el despertar espiritual. Este número aparece cuando en vidas pasadas hubo orgullo excesivo, abuso de relaciones amorosas, o uso del carisma para manipular. La energía del 16 trae "caídas desde la torre": colapsos de estructuras de vida construidas sobre el ego. Estas caídas, aunque dolorosas, son purificadoras y conducen a una conexión espiritual más profunda. Las personas con este número experimentan ciclos de destrucción y renacimiento. El 16 reduce al 7, pero a través del fuego purificador.',
    shadow: 'El 16 desequilibrado puede manifestar arrogancia espiritual, negación de la necesidad de humildad, relaciones kármicas destructivas que se repiten, o resistencia a las lecciones que la vida presenta.',
    isMaster: false,
    isKarmic: true,
    karmicLesson: 'Aprender humildad y conectar con la espiritualidad verdadera. En vidas pasadas puede haber habido uso del amor o del carisma personal para controlar a otros, o arrogancia que causó sufrimiento.',
    howToHeal: [
      'Cultivar la humildad genuina sin falsa modestia',
      'Aceptar las "caídas" como oportunidades de purificación',
      'Desarrollar una espiritualidad auténtica, no basada en el ego',
      'Sanar las relaciones del pasado con perdón verdadero',
      'Practicar el desapego de la imagen pública y el reconocimiento'
    ]
  },
  {
    number: 19,
    reducedTo: 1,
    name: 'El Sol Kármico',
    keywords: ['Independencia', 'Poder personal', 'Autoridad', 'Liderazgo', 'Autonomía'],
    meaning: 'El número kármico 19 representa la necesidad de aprender a usar el poder personal de manera ética e independiente. Este número aparece cuando en vidas pasadas hubo abuso de poder, autoritarismo, o dependencia excesiva de otros. La energía del 19 trae situaciones donde la persona debe aprender a valerse por sí misma y desarrollar su propio poder sin dominar ni depender. Es el karma del liderazgo: aprender que el verdadero poder eleva a otros en lugar de someterlos. El 19 reduce al 1, pero con lecciones sobre el uso correcto de la autoridad.',
    shadow: 'El 19 desequilibrado puede manifestar tendencias dictatoriales, incapacidad de pedir ayuda, aislamiento orgulloso, o alternancia entre dominar y ser dominado en relaciones.',
    isMaster: false,
    isKarmic: true,
    karmicLesson: 'Aprender a liderar con integridad y desarrollar la verdadera independencia. En vidas pasadas puede haber habido abuso de posiciones de poder o, inversamente, abandono de la propia autoridad.',
    howToHeal: [
      'Desarrollar el poder personal sin necesidad de controlar a otros',
      'Aprender a pedir ayuda cuando es necesario sin perder autonomía',
      'Liderar con el ejemplo, no con la fuerza',
      'Cultivar la interdependencia saludable en las relaciones',
      'Usar la influencia para empoderar a otros, no para dominarlos'
    ]
  }
];

export const getNumerologyNumber = (num: number): NumerologyNumber | undefined => {
  return numerologyNumbers.find(n => n.number === num);
};

export const getBasicNumbers = (): NumerologyNumber[] => {
  return numerologyNumbers.filter(n => !n.isMaster && !n.isKarmic);
};

export const getMasterNumbers = (): NumerologyNumber[] => {
  return numerologyNumbers.filter(n => n.isMaster);
};

export const getKarmicNumbers = (): NumerologyNumber[] => {
  return numerologyNumbers.filter(n => n.isKarmic);
};

// Convert letter to number (Pythagorean system)
const letterValues: { [key: string]: number } = {
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
  j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9,
  s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8,
  á: 1, é: 5, í: 9, ó: 6, ú: 3, ñ: 5, ü: 3
};

const vowels = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú', 'ü'];

// Reduce number to single digit (keeping master numbers)
export const reduceNumber = (num: number): number => {
  if (num === 11 || num === 22 || num === 33) return num;
  if (num < 10) return num;
  
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  
  return reduceNumber(sum);
};

// Calculate Life Path number from birth date
export const calculateLifePath = (day: number, month: number, year: number): number => {
  const dayReduced = reduceNumber(day);
  const monthReduced = reduceNumber(month);
  const yearReduced = reduceNumber(year);
  
  return reduceNumber(dayReduced + monthReduced + yearReduced);
};

// Calculate Destiny number from full name
export const calculateDestiny = (fullName: string): number => {
  const cleanName = fullName.toLowerCase().replace(/[^a-záéíóúñü]/g, '');
  let sum = 0;
  
  for (const char of cleanName) {
    sum += letterValues[char] || 0;
  }
  
  return reduceNumber(sum);
};

// Calculate Soul number (vowels only)
export const calculateSoul = (fullName: string): number => {
  const cleanName = fullName.toLowerCase().replace(/[^a-záéíóúñü]/g, '');
  let sum = 0;
  
  for (const char of cleanName) {
    if (vowels.includes(char)) {
      sum += letterValues[char] || 0;
    }
  }
  
  return reduceNumber(sum);
};

// Calculate Personality number (consonants only)
export const calculatePersonality = (fullName: string): number => {
  const cleanName = fullName.toLowerCase().replace(/[^a-záéíóúñü]/g, '');
  let sum = 0;
  
  for (const char of cleanName) {
    if (!vowels.includes(char)) {
      sum += letterValues[char] || 0;
    }
  }
  
  return reduceNumber(sum);
};

// Calculate Personal Year
export const calculatePersonalYear = (day: number, month: number, currentYear: number): number => {
  const dayReduced = reduceNumber(day);
  const monthReduced = reduceNumber(month);
  const yearReduced = reduceNumber(currentYear);
  
  return reduceNumber(dayReduced + monthReduced + yearReduced);
};
