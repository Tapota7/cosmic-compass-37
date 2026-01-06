export interface ReikiSymbol {
  id: string;
  name: string;
  japaneseName: string;
  meaning: string;
  description: string;
  uses: string[];
  level: 'I' | 'II' | 'III' | 'Maestría';
  visualDescription: string;
  howToDraw: string[];
}

export interface ReikiPrinciple {
  id: string;
  japanese: string;
  spanish: string;
  explanation: string;
}

export interface HandPosition {
  id: string;
  name: string;
  area: string;
  description: string;
  benefits: string[];
  duration: string;
}

export interface ReikiLevel {
  id: string;
  name: string;
  japaneseName: string;
  description: string;
  whatYouLearn: string[];
  benefits: string[];
}

export interface ChakraReiki {
  id: string;
  name: string;
  sanskritName: string;
  color: string;
  location: string;
  element: string;
  reikiConnection: string;
  balancingSigns: string[];
}

export const reikiSymbols: ReikiSymbol[] = [
  {
    id: 'cho-ku-rei',
    name: 'Cho Ku Rei',
    japaneseName: '霊気',
    meaning: 'Pon el poder del universo aquí',
    description: 'El Cho Ku Rei es el símbolo de poder de Reiki, conocido como el "interruptor de luz" que activa y amplifica la energía. Es el primer símbolo que se enseña en el Nivel II y actúa como catalizador para los demás símbolos. Su espiral representa la concentración de energía universal en un punto específico, aumentando exponencialmente el flujo de ki hacia donde se dirige.',
    uses: [
      'Aumentar la potencia de cualquier tratamiento de Reiki',
      'Limpiar y purificar espacios de energías negativas',
      'Protección energética personal y de lugares',
      'Sellar la energía al final de un tratamiento',
      'Potenciar alimentos, agua y medicinas',
      'Manifestar intenciones y metas'
    ],
    level: 'II',
    visualDescription: 'Una línea horizontal en la parte superior, seguida de una línea vertical descendente que termina en una espiral de tres vueltas y media hacia el centro.',
    howToDraw: [
      'Dibuja una línea horizontal de izquierda a derecha',
      'Desde el extremo derecho, baja una línea vertical',
      'Desde el final de la línea vertical, comienza una espiral',
      'La espiral gira en sentido antihorario 3.5 vueltas hacia el centro'
    ]
  },
  {
    id: 'sei-he-ki',
    name: 'Sei He Ki',
    japaneseName: '聖平気',
    meaning: 'La tierra y el cielo se encuentran',
    description: 'El Sei He Ki es el símbolo mental y emocional de Reiki, actuando como puente entre el consciente y el subconsciente. Este poderoso símbolo trabaja directamente con los patrones mentales, las memorias traumáticas y los bloqueos emocionales. Se le conoce como el símbolo de la armonía porque restaura el equilibrio entre los hemisferios cerebrales y ayuda a sanar heridas del pasado.',
    uses: [
      'Liberar traumas emocionales y memorias dolorosas',
      'Equilibrar los hemisferios cerebrales',
      'Superar adicciones y patrones destructivos',
      'Mejorar la memoria y la concentración',
      'Calmar la ansiedad y el estrés',
      'Sanar la relación mente-cuerpo',
      'Protección contra ataques psíquicos'
    ],
    level: 'II',
    visualDescription: 'Dos curvas que se asemejan a un dragón o una ola, representando la unión del cielo (yang) con la tierra (yin).',
    howToDraw: [
      'Comienza con una curva suave hacia la izquierda en la parte superior',
      'Continúa con una segunda curva más pronunciada hacia la derecha',
      'Las curvas representan el flujo ondulante de la energía emocional'
    ]
  },
  {
    id: 'hon-sha-ze-sho-nen',
    name: 'Hon Sha Ze Sho Nen',
    japaneseName: '本者是正念',
    meaning: 'Sin pasado, sin presente, sin futuro',
    description: 'El Hon Sha Ze Sho Nen es el símbolo de sanación a distancia, trascendiendo las limitaciones del tiempo y el espacio. Este símbolo representa los Registros Akáshicos y permite enviar Reiki a cualquier persona, lugar o situación sin importar la distancia física. También puede usarse para sanar eventos del pasado y programar sanación para el futuro, conectando con la naturaleza no-local de la consciencia.',
    uses: [
      'Enviar Reiki a distancia a personas, lugares o situaciones',
      'Sanar traumas y eventos del pasado',
      'Programar sanación para eventos futuros',
      'Conectar con los Registros Akáshicos',
      'Sanar el karma y patrones ancestrales',
      'Enviar Reiki a metas y proyectos',
      'Conectar con guías espirituales y maestros'
    ],
    level: 'II',
    visualDescription: 'Un símbolo complejo formado por varios caracteres kanji apilados verticalmente, representando la torre de la pagoda y la conexión entre dimensiones.',
    howToDraw: [
      'Es el símbolo más complejo, formado por múltiples trazos kanji',
      'Se dibuja de arriba hacia abajo',
      'Cada sección representa: esencia, persona, correcto, conciencia',
      'Requiere práctica para memorizarlo correctamente'
    ]
  },
  {
    id: 'dai-ko-myo',
    name: 'Dai Ko Myo',
    japaneseName: '大光明',
    meaning: 'Gran luz brillante',
    description: 'El Dai Ko Myo es el símbolo maestro de Reiki, representando la iluminación espiritual y la conexión directa con la fuente divina. Es el símbolo más sagrado y poderoso, utilizado exclusivamente por los Maestros de Reiki. Trabaja a nivel del alma, facilitando la transformación espiritual profunda y la sanación de vidas pasadas. Es la llave que desbloquea todo el potencial del Reiki.',
    uses: [
      'Sanación a nivel del alma y espiritual',
      'Iniciar a otros en Reiki',
      'Potenciar todos los demás símbolos',
      'Despertar la iluminación espiritual',
      'Sanar karma de vidas pasadas',
      'Conectar con la sabiduría divina',
      'Transformación y ascensión espiritual'
    ],
    level: 'Maestría',
    visualDescription: 'Un símbolo grande y elaborado que representa el gran sol brillante, compuesto por tres kanji que significan "gran", "luz" y "brillante".',
    howToDraw: [
      'Comienza con el kanji de "Dai" (grande) en la parte superior',
      'Continúa con "Ko" (luz) en el medio',
      'Finaliza con "Myo" (brillante) en la parte inferior',
      'Cada parte se traza siguiendo el orden tradicional de los kanji'
    ]
  },
  {
    id: 'raku',
    name: 'Raku',
    japaneseName: '楽',
    meaning: 'Rayo de luz descendente',
    description: 'El Raku es el símbolo de finalización y enraizamiento, usado principalmente al concluir las iniciaciones de Reiki. Representa un rayo de luz que desciende desde el cosmos, anclando la energía en el cuerpo físico y conectando todos los chakras. Es el sello final que completa el proceso de sintonización.',
    uses: [
      'Completar y sellar iniciaciones de Reiki',
      'Enraizar la energía después de tratamientos',
      'Conectar el cielo con la tierra a través del cuerpo',
      'Activar la kundalini de manera segura',
      'Separar la energía del practicante y el receptor'
    ],
    level: 'Maestría',
    visualDescription: 'Una línea en zigzag que desciende como un rayo, representando la energía que baja del cosmos a la tierra.',
    howToDraw: [
      'Comienza en la parte superior',
      'Dibuja una línea en zigzag descendente',
      'El movimiento es similar a un rayo',
      'Termina en la base, anclando la energía'
    ]
  }
];

export const reikiPrinciples: ReikiPrinciple[] = [
  {
    id: 'no-enojo',
    japanese: 'Kyo dake wa, okoru na',
    spanish: 'Solo por hoy, no te enojes',
    explanation: 'El enojo es una emoción que bloquea el flujo de energía vital. Este principio nos invita a liberar la ira y cultivar la paz interior. No se trata de reprimir emociones, sino de procesarlas conscientemente y elegir respuestas más elevadas ante las situaciones que nos desafían.'
  },
  {
    id: 'no-preocupacion',
    japanese: 'Kyo dake wa, shinpai suna',
    spanish: 'Solo por hoy, no te preocupes',
    explanation: 'La preocupación consume nuestra energía vital sin resolver nada. Este principio nos enseña a confiar en el flujo de la vida y a enfocarnos en el momento presente. La frase "solo por hoy" hace que el compromiso sea alcanzable, día a día.'
  },
  {
    id: 'gratitud',
    japanese: 'Kyo dake wa, kansha shite',
    spanish: 'Solo por hoy, sé agradecido',
    explanation: 'La gratitud eleva nuestra vibración y nos conecta con la abundancia del universo. Agradecer por lo que tenemos, incluso por los desafíos que nos hacen crecer, transforma nuestra perspectiva y atrae más bendiciones a nuestra vida.'
  },
  {
    id: 'trabajo-honesto',
    japanese: 'Kyo dake wa, gyo wo hageme',
    spanish: 'Solo por hoy, trabaja honestamente',
    explanation: 'Este principio se refiere a cumplir con nuestro dharma o propósito de vida con integridad. El trabajo honesto incluye nuestra labor interna de crecimiento espiritual y nuestra contribución al mundo exterior de manera ética y consciente.'
  },
  {
    id: 'amabilidad',
    japanese: 'Kyo dake wa, hito ni shinsetsu ni',
    spanish: 'Solo por hoy, sé amable con todos los seres',
    explanation: 'La amabilidad hacia todos los seres, incluyéndonos a nosotros mismos, es fundamental en Reiki. Este principio nos recuerda que todos estamos conectados y que cada acto de bondad eleva la consciencia colectiva.'
  }
];

export const handPositions: HandPosition[] = [
  {
    id: 'posicion-1',
    name: 'Corona y Frente',
    area: 'Cabeza',
    description: 'Manos sobre la coronilla y la frente, cubriendo el chakra corona y el tercer ojo.',
    benefits: ['Claridad mental', 'Intuición aumentada', 'Conexión espiritual', 'Alivio de dolores de cabeza'],
    duration: '3-5 minutos'
  },
  {
    id: 'posicion-2',
    name: 'Sienes y Oídos',
    area: 'Cabeza',
    description: 'Manos cubriendo suavemente las sienes y los oídos.',
    benefits: ['Equilibrio mental', 'Reducción del estrés', 'Mejora de la audición energética', 'Calma del sistema nervioso'],
    duration: '3-5 minutos'
  },
  {
    id: 'posicion-3',
    name: 'Nuca y Base del Cráneo',
    area: 'Cabeza',
    description: 'Manos en la parte posterior de la cabeza, cubriendo la nuca y la médula.',
    benefits: ['Liberación de tensión', 'Mejora del sueño', 'Conexión mente-cuerpo', 'Alivio de migrañas'],
    duration: '3-5 minutos'
  },
  {
    id: 'posicion-4',
    name: 'Garganta',
    area: 'Cuello',
    description: 'Manos suavemente sobre la garganta, sin presionar.',
    benefits: ['Expresión auténtica', 'Sanación de la comunicación', 'Liberación de emociones reprimidas', 'Equilibrio tiroideo'],
    duration: '3-5 minutos'
  },
  {
    id: 'posicion-5',
    name: 'Corazón',
    area: 'Pecho',
    description: 'Manos sobre el centro del pecho, cubriendo el chakra corazón.',
    benefits: ['Amor incondicional', 'Sanación emocional profunda', 'Apertura del corazón', 'Paz interior'],
    duration: '3-5 minutos'
  },
  {
    id: 'posicion-6',
    name: 'Plexo Solar',
    area: 'Abdomen Superior',
    description: 'Manos sobre el área del estómago, justo debajo del esternón.',
    benefits: ['Poder personal', 'Digestión saludable', 'Liberación de miedos', 'Confianza en uno mismo'],
    duration: '3-5 minutos'
  },
  {
    id: 'posicion-7',
    name: 'Ombligo',
    area: 'Abdomen',
    description: 'Manos sobre el ombligo y el área circundante.',
    benefits: ['Creatividad', 'Equilibrio emocional', 'Energía vital', 'Sanación del niño interior'],
    duration: '3-5 minutos'
  },
  {
    id: 'posicion-8',
    name: 'Zona Pélvica',
    area: 'Pelvis',
    description: 'Manos sobre la zona pélvica, cubriendo el chakra raíz.',
    benefits: ['Enraizamiento', 'Seguridad', 'Vitalidad física', 'Conexión con la tierra'],
    duration: '3-5 minutos'
  },
  {
    id: 'posicion-9',
    name: 'Hombros',
    area: 'Espalda Alta',
    description: 'Manos sobre los hombros, liberando la tensión acumulada.',
    benefits: ['Liberación de cargas', 'Relajación muscular', 'Flujo de energía hacia brazos', 'Alivio del estrés'],
    duration: '3-5 minutos'
  },
  {
    id: 'posicion-10',
    name: 'Espalda Media',
    area: 'Espalda',
    description: 'Manos sobre la zona media de la espalda, a la altura del corazón posterior.',
    benefits: ['Apoyo emocional', 'Fortaleza interior', 'Sanación de traiciones', 'Apertura posterior del corazón'],
    duration: '3-5 minutos'
  },
  {
    id: 'posicion-11',
    name: 'Riñones',
    area: 'Espalda Baja',
    description: 'Manos sobre los riñones, la zona lumbar.',
    benefits: ['Vitalidad', 'Liberación del miedo', 'Fuerza de voluntad', 'Equilibrio suprarrenal'],
    duration: '3-5 minutos'
  },
  {
    id: 'posicion-12',
    name: 'Sacro',
    area: 'Base de la Columna',
    description: 'Manos sobre el sacro y la base de la columna vertebral.',
    benefits: ['Enraizamiento profundo', 'Conexión ancestral', 'Estabilidad', 'Kundalini equilibrada'],
    duration: '3-5 minutos'
  }
];

export const reikiLevels: ReikiLevel[] = [
  {
    id: 'nivel-1',
    name: 'Nivel I - Shoden',
    japaneseName: '初伝',
    description: 'El primer grado de Reiki, también llamado "El Despertar", abre el canal energético del practicante y lo conecta con la energía universal. En este nivel se aprende la autosanación y el tratamiento presencial a otros.',
    whatYouLearn: [
      'Historia y filosofía del Reiki',
      'Los 5 principios de Reiki',
      'Las 12 posiciones de manos para autosanación',
      'Tratamiento completo para otros',
      'Técnica de escaneado (Byosen)',
      'Limpieza energética básica'
    ],
    benefits: [
      'Apertura del canal energético',
      'Capacidad de autosanación',
      'Mayor sensibilidad energética',
      'Reducción del estrés',
      'Equilibrio emocional',
      'Conexión con la energía universal'
    ]
  },
  {
    id: 'nivel-2',
    name: 'Nivel II - Okuden',
    japaneseName: '奥伝',
    description: 'El segundo grado, "Las Enseñanzas Internas", amplifica significativamente la energía y enseña los tres primeros símbolos sagrados. Se habilita la sanación a distancia y el trabajo con aspectos mentales y emocionales.',
    whatYouLearn: [
      'Símbolo Cho Ku Rei (Poder)',
      'Símbolo Sei He Ki (Mental/Emocional)',
      'Símbolo Hon Sha Ze Sho Nen (Distancia)',
      'Técnicas de sanación a distancia',
      'Sanación de situaciones pasadas y futuras',
      'Trabajo con el karma'
    ],
    benefits: [
      'Energía amplificada 4 veces',
      'Capacidad de enviar Reiki a distancia',
      'Herramientas para sanación emocional',
      'Conexión más profunda con la intuición',
      'Mayor claridad mental',
      'Protección energética avanzada'
    ]
  },
  {
    id: 'nivel-3',
    name: 'Nivel III - Shinpiden',
    japaneseName: '神秘伝',
    description: 'El tercer grado, "Las Enseñanzas del Misterio", otorga el símbolo maestro Dai Ko Myo. El practicante alcanza un nivel de conexión espiritual profunda y comienza su camino hacia la maestría.',
    whatYouLearn: [
      'Símbolo Dai Ko Myo (Maestro)',
      'Meditaciones avanzadas con símbolos',
      'Trabajo espiritual profundo',
      'Técnicas de cirugía psíquica',
      'Sanación de vidas pasadas',
      'Conexión con guías espirituales'
    ],
    benefits: [
      'Conexión directa con la fuente',
      'Transformación espiritual acelerada',
      'Sanación a nivel del alma',
      'Mayor consciencia espiritual',
      'Desarrollo de dones psíquicos',
      'Integración de cuerpo, mente y espíritu'
    ]
  },
  {
    id: 'maestria',
    name: 'Maestría - Shihan',
    japaneseName: '師範',
    description: 'La Maestría de Reiki otorga la capacidad de iniciar a otros en el camino del Reiki. El Maestro asume la responsabilidad de transmitir las enseñanzas sagradas y guiar a nuevos practicantes en su desarrollo.',
    whatYouLearn: [
      'Símbolo Raku (Finalización)',
      'Proceso completo de iniciación',
      'Cómo enseñar cada nivel',
      'Desarrollo de intuición para guiar alumnos',
      'Técnicas avanzadas de sintonización',
      'Ética y responsabilidad del Maestro'
    ],
    benefits: [
      'Capacidad de iniciar a otros',
      'Compromiso profundo con el camino espiritual',
      'Conexión con el linaje de maestros',
      'Servicio a la humanidad',
      'Crecimiento espiritual continuo',
      'Liderazgo espiritual'
    ]
  }
];

export const chakrasReiki: ChakraReiki[] = [
  {
    id: 'muladhara',
    name: 'Chakra Raíz',
    sanskritName: 'Muladhara',
    color: 'Rojo',
    location: 'Base de la columna vertebral',
    element: 'Tierra',
    reikiConnection: 'El Reiki en el chakra raíz fortalece la conexión con la tierra, proporciona estabilidad y ayuda a liberar miedos relacionados con la supervivencia y la seguridad material.',
    balancingSigns: ['Tauro', 'Virgo', 'Capricornio']
  },
  {
    id: 'svadhisthana',
    name: 'Chakra Sacro',
    sanskritName: 'Svadhisthana',
    color: 'Naranja',
    location: 'Debajo del ombligo',
    element: 'Agua',
    reikiConnection: 'El Reiki en el chakra sacro desbloquea la creatividad, sana la sexualidad, equilibra las emociones y restaura la capacidad de experimentar placer y alegría.',
    balancingSigns: ['Cáncer', 'Escorpio', 'Piscis']
  },
  {
    id: 'manipura',
    name: 'Chakra del Plexo Solar',
    sanskritName: 'Manipura',
    color: 'Amarillo',
    location: 'Zona del estómago',
    element: 'Fuego',
    reikiConnection: 'El Reiki en el plexo solar fortalece el poder personal, la autoestima y la capacidad de tomar decisiones. Ayuda a liberar el control y la necesidad de aprobación externa.',
    balancingSigns: ['Aries', 'Leo', 'Sagitario']
  },
  {
    id: 'anahata',
    name: 'Chakra del Corazón',
    sanskritName: 'Anahata',
    color: 'Verde',
    location: 'Centro del pecho',
    element: 'Aire',
    reikiConnection: 'El Reiki en el chakra del corazón abre la capacidad de dar y recibir amor incondicional, sana heridas emocionales y desarrolla la compasión hacia uno mismo y los demás.',
    balancingSigns: ['Libra', 'Tauro', 'Cáncer']
  },
  {
    id: 'vishuddha',
    name: 'Chakra de la Garganta',
    sanskritName: 'Vishuddha',
    color: 'Azul',
    location: 'Garganta',
    element: 'Éter',
    reikiConnection: 'El Reiki en la garganta libera la expresión auténtica, sana problemas de comunicación y ayuda a expresar la verdad personal con claridad y compasión.',
    balancingSigns: ['Géminis', 'Virgo', 'Acuario']
  },
  {
    id: 'ajna',
    name: 'Chakra del Tercer Ojo',
    sanskritName: 'Ajna',
    color: 'Índigo',
    location: 'Entre las cejas',
    element: 'Luz',
    reikiConnection: 'El Reiki en el tercer ojo desarrolla la intuición, la clarividencia y la capacidad de ver más allá de la ilusión. Equilibra los hemisferios cerebrales y mejora la concentración.',
    balancingSigns: ['Sagitario', 'Acuario', 'Piscis']
  },
  {
    id: 'sahasrara',
    name: 'Chakra Corona',
    sanskritName: 'Sahasrara',
    color: 'Violeta/Blanco',
    location: 'Coronilla de la cabeza',
    element: 'Consciencia Pura',
    reikiConnection: 'El Reiki en el chakra corona facilita la conexión con la divinidad, la iluminación espiritual y la experiencia de unidad con todo lo que existe. Es el portal hacia estados superiores de consciencia.',
    balancingSigns: ['Piscis', 'Cáncer', 'Escorpio']
  }
];

export const reikiHistory = {
  founder: 'Mikao Usui',
  foundingYear: 1922,
  origin: 'Japón',
  description: 'El Reiki fue redescubierto por Mikao Usui en 1922 después de 21 días de meditación y ayuno en el Monte Kurama, Japón. Durante esta experiencia mística, Usui recibió la sintonización con la energía universal y los símbolos sagrados. Fundó la Usui Reiki Ryoho Gakkai en Tokio y dedicó el resto de su vida a enseñar este método de sanación. El Reiki se transmitió a occidente principalmente a través de Hawayo Takata, quien aprendió de Chujiro Hayashi, alumno directo de Usui.',
  lineage: [
    'Mikao Usui (1865-1926)',
    'Chujiro Hayashi (1880-1940)',
    'Hawayo Takata (1900-1980)',
    'Phyllis Lei Furumoto y otros 22 maestros'
  ]
};

// Helper functions
export const getReikiSymbolById = (id: string): ReikiSymbol | undefined => {
  return reikiSymbols.find(symbol => symbol.id === id);
};

export const getReikiLevelById = (id: string): ReikiLevel | undefined => {
  return reikiLevels.find(level => level.id === id);
};

export const getChakraById = (id: string): ChakraReiki | undefined => {
  return chakrasReiki.find(chakra => chakra.id === id);
};

export const getHandPositionById = (id: string): HandPosition | undefined => {
  return handPositions.find(position => position.id === id);
};

export const getSymbolsByLevel = (level: 'I' | 'II' | 'III' | 'Maestría'): ReikiSymbol[] => {
  return reikiSymbols.filter(symbol => symbol.level === level);
};
