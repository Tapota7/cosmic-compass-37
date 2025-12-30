export interface House {
  id: string;
  number: number;
  name: string;
  symbol: string;
  keywords: string[];
  meaning: string;
  areasOfLife: string[];
  positiveAspects: string[];
  challenges: string[];
  workingWith: string;
}

export const houses: House[] = [
  {
    id: 'casa-1',
    number: 1,
    name: 'Casa del Yo',
    symbol: '🪞',
    keywords: ['Identidad', 'Apariencia', 'Personalidad', 'Nuevos comienzos'],
    meaning: 'La Casa 1, también conocida como Ascendente, representa el punto de partida de tu viaje por la vida. Es la máscara que presentas al mundo, tu primera impresión, tu apariencia física y la energía que proyectas antes de que otros te conozcan verdaderamente. Esta casa define cómo te inicias en nuevos proyectos, cómo enfrentas la vida y cómo te defines a ti mismo. Es el nacimiento continuo del yo.',
    areasOfLife: ['Apariencia física y estilo personal', 'Primera impresión que causas', 'Vitalidad y energía corporal', 'Identidad personal', 'Cómo te presentas al mundo', 'Nuevos comienzos y proyectos'],
    positiveAspects: ['Autoconocimiento profundo', 'Capacidad de reinvención', 'Presencia magnética', 'Autenticidad en la expresión', 'Iniciativa y liderazgo personal'],
    challenges: ['Egocentrismo excesivo', 'Preocupación exagerada por la imagen', 'Dificultad para ver más allá del yo', 'Impulsividad en nuevos comienzos'],
    workingWith: 'Para trabajar conscientemente con la Casa 1, cultiva la autenticidad sin narcisismo. Pregúntate: ¿Quién soy realmente más allá de lo que proyecto? Desarrolla una identidad basada en valores internos más que en la validación externa. Cada nuevo comienzo es una oportunidad para nacer de nuevo más alineado con tu esencia.'
  },
  {
    id: 'casa-2',
    number: 2,
    name: 'Casa de los Recursos',
    symbol: '💎',
    keywords: ['Dinero', 'Valores', 'Posesiones', 'Autoestima'],
    meaning: 'La Casa 2 gobierna todo lo que consideras valioso: desde recursos materiales hasta talentos innatos y autoestima. Es la casa de la abundancia personal, de lo que acumulas y de cómo generas seguridad en tu vida. Aquí descubres lo que realmente importa para ti, más allá de las expectativas sociales, y aprendes a honrar tus propios valores como brújula de vida.',
    areasOfLife: ['Finanzas y capacidad de generar dinero', 'Posesiones materiales', 'Talentos naturales', 'Autoestima y autovaloración', 'Valores personales fundamentales', 'Recursos internos y externos'],
    positiveAspects: ['Abundancia material', 'Talentos bien desarrollados', 'Autoestima sólida', 'Claridad de valores', 'Capacidad de manifestar prosperidad'],
    challenges: ['Materialismo excesivo', 'Autoestima dependiente de posesiones', 'Avaricia o miedo a la escasez', 'Confundir valor propio con valor neto'],
    workingWith: 'Para trabajar conscientemente con la Casa 2, distingue entre lo que tienes y lo que eres. Cultiva gratitud por tus recursos mientras desarrollas seguridad interna que no dependa de lo material. Identifica tus valores genuinos y alinea tu uso de recursos con ellos.'
  },
  {
    id: 'casa-3',
    number: 3,
    name: 'Casa de la Comunicación',
    symbol: '✉️',
    keywords: ['Comunicación', 'Hermanos', 'Aprendizaje', 'Entorno cercano'],
    meaning: 'La Casa 3 rige la mente concreta, el pensamiento cotidiano y todas las formas de comunicación. Es la casa de los hermanos, vecinos y el entorno inmediato. Gobierna el aprendizaje temprano, los viajes cortos y la curiosidad que nos impulsa a explorar nuestro ambiente cercano. Aquí aprendemos a nombrar el mundo y a compartir nuestros pensamientos.',
    areasOfLife: ['Comunicación verbal y escrita', 'Relación con hermanos', 'Educación primaria', 'Viajes cortos', 'Vecindario y comunidad local', 'Mente racional y lógica'],
    positiveAspects: ['Elocuencia y claridad mental', 'Relaciones fraternas enriquecedoras', 'Amor por el aprendizaje', 'Curiosidad insaciable', 'Habilidad para conectar ideas'],
    challenges: ['Dispersión mental', 'Conflictos con hermanos', 'Superficialidad en el pensamiento', 'Chismorreo o comunicación destructiva'],
    workingWith: 'Para trabajar conscientemente con la Casa 3, cultiva la escucha activa tanto como la expresión. Usa las palabras para construir puentes, no muros. Mantén viva la curiosidad del principiante mientras profundizas más allá de la información superficial.'
  },
  {
    id: 'casa-4',
    number: 4,
    name: 'Casa del Hogar',
    symbol: '🏠',
    keywords: ['Hogar', 'Familia', 'Raíces', 'Fundamentos emocionales'],
    meaning: 'La Casa 4, también conocida como el Fondo del Cielo (IC), representa las raíces más profundas de tu ser: tu hogar, tu familia de origen, tus ancestros y tu vida privada. Es el fundamento emocional sobre el cual construyes tu vida, el lugar de retiro donde puedes ser completamente tú mismo. Aquí guardamos memorias del pasado y los patrones heredados.',
    areasOfLife: ['Hogar y espacio doméstico', 'Familia de origen', 'Madre o figura maternal', 'Herencia ancestral', 'Vida privada e íntima', 'Final de la vida', 'Bienes raíces'],
    positiveAspects: ['Seguridad emocional profunda', 'Conexión con las raíces', 'Hogar como santuario', 'Sabiduría ancestral integrada', 'Fundamentos sólidos para la vida'],
    challenges: ['Apego excesivo al pasado', 'Patrones familiares disfuncionales', 'Dificultad para crear hogar propio', 'Heridas de la infancia no sanadas'],
    workingWith: 'Para trabajar conscientemente con la Casa 4, sana las heridas del pasado sin quedarte atrapado en él. Crea un hogar que refleje quién eres ahora, no solo de dónde vienes. Honra a tus ancestros mientras te liberas de patrones que ya no te sirven.'
  },
  {
    id: 'casa-5',
    number: 5,
    name: 'Casa de la Creatividad',
    symbol: '🎨',
    keywords: ['Creatividad', 'Romance', 'Hijos', 'Expresión personal'],
    meaning: 'La Casa 5 es el escenario donde expresamos nuestra creatividad, buscamos el placer y manifestamos nuestra singularidad. Gobierna los romances apasionados, los hijos (biológicos o creativos), el juego y todo lo que hacemos por puro gozo de hacerlo. Es la casa del corazón que late de alegría, del niño interior que quiere brillar.',
    areasOfLife: ['Expresión creativa y artística', 'Romances y citas', 'Hijos y su crianza', 'Juego y diversión', 'Especulaciones y riesgos', 'Hobbies y pasatiempos', 'Espectáculos y entretenimiento'],
    positiveAspects: ['Creatividad abundante', 'Romances apasionados', 'Alegría de vivir', 'Conexión con el niño interior', 'Expresión auténtica del yo'],
    challenges: ['Adicción al drama romántico', 'Ego inflado', 'Riesgos excesivos', 'Dificultad para comprometerse', 'Creatividad bloqueada'],
    workingWith: 'Para trabajar conscientemente con la Casa 5, permite que tu niño interior juegue sin juicio. Crea sin necesidad de resultados perfectos. En el romance, distingue entre la intoxicación de la pasión y el amor verdadero. Recuerda que eres el artista de tu propia vida.'
  },
  {
    id: 'casa-6',
    number: 6,
    name: 'Casa del Servicio',
    symbol: '⚕️',
    keywords: ['Trabajo', 'Salud', 'Rutinas', 'Servicio'],
    meaning: 'La Casa 6 gobierna la vida cotidiana: el trabajo diario, las rutinas, la salud física y el servicio a otros. Es la casa del perfeccionamiento, donde refinamos nuestras habilidades a través de la práctica constante. Aquí aprendemos que lo espiritual se manifiesta en lo mundano, que cuidar el cuerpo es cuidar el templo del alma.',
    areasOfLife: ['Trabajo diario y empleados', 'Salud física y hábitos', 'Rutinas y organización', 'Servicio a otros', 'Mascotas y pequeños animales', 'Mejoramiento personal continuo'],
    positiveAspects: ['Excelencia en el trabajo', 'Salud óptima', 'Rutinas que sostienen', 'Servicio significativo', 'Atención al detalle'],
    challenges: ['Perfeccionismo paralizante', 'Hipocondría', 'Workaholic', 'Crítica excesiva', 'Descuido de la salud'],
    workingWith: 'Para trabajar conscientemente con la Casa 6, encuentra lo sagrado en lo cotidiano. Cuida tu cuerpo como el vehículo de tu alma. Sirve a otros sin agotarte. Busca la excelencia sin caer en el perfeccionismo que paraliza.'
  },
  {
    id: 'casa-7',
    number: 7,
    name: 'Casa de las Alianzas',
    symbol: '💍',
    keywords: ['Matrimonio', 'Socios', 'Contratos', 'El Otro'],
    meaning: 'La Casa 7, opuesta a la Casa 1, representa el encuentro con el otro significativo. Gobierna el matrimonio, las asociaciones de todo tipo, los contratos legales y los enemigos declarados. Es el espejo donde vemos reflejadas partes de nosotros que no reconocemos. Aquí aprendemos que las relaciones son nuestros mayores maestros.',
    areasOfLife: ['Matrimonio y pareja comprometida', 'Socios de negocios', 'Contratos y acuerdos legales', 'Consultores y terapeutas', 'Enemigos abiertos', 'El público en general'],
    positiveAspects: ['Relaciones equilibradas', 'Asociaciones fructíferas', 'Diplomacia efectiva', 'Aprendizaje a través del otro', 'Compromiso maduro'],
    challenges: ['Dependencia del otro', 'Proyección en la pareja', 'Conflictos legales', 'Elección de parejas problemáticas', 'Pérdida de identidad en la relación'],
    workingWith: 'Para trabajar conscientemente con la Casa 7, reconoce que lo que te atrae o repele en otros refleja algo en ti. Cultiva relaciones de iguales donde ambos crecen. Aprende a comprometerte sin perderte. Recuerda que el otro no está para completarte, sino para acompañarte.'
  },
  {
    id: 'casa-8',
    number: 8,
    name: 'Casa de la Transformación',
    symbol: '🦂',
    keywords: ['Transformación', 'Muerte', 'Sexualidad', 'Recursos compartidos'],
    meaning: 'La Casa 8 es el territorio de Escorpio: muerte, renacimiento, sexualidad profunda y recursos compartidos. Gobierna las herencias, los impuestos, el dinero de otros y todo lo que yace oculto bajo la superficie. Es la casa del poder psicológico, de los tabúes y de la transformación radical que surge cuando enfrentamos nuestras sombras más profundas.',
    areasOfLife: ['Transformaciones profundas', 'Sexualidad e intimidad', 'Muerte y renacimiento', 'Herencias y legados', 'Dinero de otros', 'Lo oculto y tabú', 'Psicología profunda'],
    positiveAspects: ['Poder transformador', 'Intimidad profunda', 'Resiliencia ante las crisis', 'Recursos compartidos abundantes', 'Capacidad de renacer'],
    challenges: ['Obsesión con el control', 'Miedo a la intimidad', 'Problemas con herencias', 'Luchas de poder', 'Atracción hacia lo destructivo'],
    workingWith: 'Para trabajar conscientemente con la Casa 8, abraza la muerte de lo viejo sin resistencia. Permite que la intimidad te transforme. Examina tus dinámicas de poder con honestidad. Recuerda que solo muriendo a lo que ya no eres puedes nacer a lo que estás llamado a ser.'
  },
  {
    id: 'casa-9',
    number: 9,
    name: 'Casa de la Expansión',
    symbol: '🌍',
    keywords: ['Filosofía', 'Viajes lejanos', 'Educación superior', 'Espiritualidad'],
    meaning: 'La Casa 9 es el territorio de Sagitario: la expansión de horizontes a través de viajes, estudios superiores, filosofía y espiritualidad. Gobierna las culturas extranjeras, la ley, la religión y la búsqueda de significado. Es la casa donde preguntamos "¿Por qué estamos aquí?" y emprendemos el viaje hacia la respuesta.',
    areasOfLife: ['Viajes largos y extranjero', 'Educación universitaria', 'Filosofía y religión', 'Leyes y sistema legal', 'Publicaciones y difusión', 'Búsqueda de significado'],
    positiveAspects: ['Sabiduría expandida', 'Aventuras enriquecedoras', 'Fe y optimismo', 'Éxito académico', 'Visión global'],
    challenges: ['Fanatismo religioso', 'Arrogancia intelectual', 'Escapismo a través de viajes', 'Dogmatismo', 'Promesas incumplidas'],
    workingWith: 'Para trabajar conscientemente con la Casa 9, mantén la mente abierta mientras cultivas convicciones. Viaja tanto por el mundo exterior como por el interior. Busca la verdad en múltiples tradiciones sin apegarte a ninguna. Recuerda que la sabiduría verdadera incluye saber que no sabes.'
  },
  {
    id: 'casa-10',
    number: 10,
    name: 'Casa de la Vocación',
    symbol: '🏆',
    keywords: ['Carrera', 'Reputación', 'Logros', 'Padre'],
    meaning: 'La Casa 10, también conocida como Medio Cielo (MC), representa la cima de tu carta, tu posición más visible en el mundo. Gobierna la carrera, la reputación, los logros públicos y la autoridad. Es la casa de tu vocación, de lo que estás llamado a contribuir a la sociedad, del legado que dejarás.',
    areasOfLife: ['Carrera profesional', 'Reputación pública', 'Ambiciones y metas', 'Padre o figura de autoridad', 'Estatus social', 'Legado y contribución'],
    positiveAspects: ['Éxito profesional', 'Reconocimiento público', 'Autoridad bien ganada', 'Vocación clara', 'Legado significativo'],
    challenges: ['Obsesión con el estatus', 'Sacrificar lo personal por lo profesional', 'Miedo al fracaso público', 'Tiranía en posiciones de poder'],
    workingWith: 'Para trabajar conscientemente con la Casa 10, define el éxito en tus propios términos. Busca una vocación, no solo una carrera. Usa cualquier autoridad que adquieras para servir, no para dominar. Recuerda que tu legado más importante es cómo tocaste las vidas de otros.'
  },
  {
    id: 'casa-11',
    number: 11,
    name: 'Casa de la Comunidad',
    symbol: '🌐',
    keywords: ['Amigos', 'Grupos', 'Sueños', 'Humanidad'],
    meaning: 'La Casa 11 gobierna las amistades, los grupos, las organizaciones y los ideales colectivos. Es la casa de los sueños para el futuro, de las causas sociales y de nuestra participación en la humanidad más amplia. Aquí trascendemos el ego individual para unirnos a otros en visiones compartidas de un mundo mejor.',
    areasOfLife: ['Amistades y redes sociales', 'Grupos y organizaciones', 'Causas humanitarias', 'Esperanzas y sueños', 'Tecnología e innovación', 'Conciencia colectiva'],
    positiveAspects: ['Amistades duraderas', 'Participación en causas nobles', 'Visión de futuro', 'Red de apoyo sólida', 'Innovación para el bien común'],
    challenges: ['Perderse en el grupo', 'Amistades superficiales', 'Idealismo desconectado de la realidad', 'Dificultad para la intimidad'],
    workingWith: 'Para trabajar conscientemente con la Casa 11, cultiva amistades basadas en valores compartidos, no solo conveniencia. Participa en causas mayores que tú sin perder tu individualidad. Sueña en grande mientras tomas pasos concretos hacia el cambio.'
  },
  {
    id: 'casa-12',
    number: 12,
    name: 'Casa del Inconsciente',
    symbol: '🌊',
    keywords: ['Inconsciente', 'Espiritualidad', 'Karma', 'Trascendencia'],
    meaning: 'La Casa 12, la más misteriosa del zodíaco, representa el inconsciente, los enemigos ocultos, las instituciones de reclusión y la espiritualidad trascendente. Es la casa del karma, de lo que hemos acumulado en vidas pasadas, y de la disolución del ego que precede al renacimiento. Aquí encontramos tanto nuestros mayores miedos como nuestra conexión con lo divino.',
    areasOfLife: ['Inconsciente y sueños', 'Espiritualidad y meditación', 'Retiros y reclusión', 'Enemigos ocultos y autosabotaje', 'Hospitales e instituciones', 'Karma y vidas pasadas', 'Servicio desinteresado'],
    positiveAspects: ['Intuición desarrollada', 'Conexión espiritual profunda', 'Compasión universal', 'Liberación kármica', 'Paz interior'],
    challenges: ['Autosabotaje inconsciente', 'Adicciones y escapismo', 'Confusión y engaño', 'Victimismo', 'Aislamiento excesivo'],
    workingWith: 'Para trabajar conscientemente con la Casa 12, cultiva prácticas que iluminen el inconsciente: meditación, terapia, trabajo con sueños. Reconoce tus patrones de autosabotaje sin juzgarlos. Sirve a otros sin buscar reconocimiento. Recuerda que la verdadera espiritualidad te hace más humano, no menos.'
  }
];

export const getHouseById = (id: string): House | undefined => {
  return houses.find(house => house.id === id);
};

export const getHouseByNumber = (number: number): House | undefined => {
  return houses.find(house => house.number === number);
};
