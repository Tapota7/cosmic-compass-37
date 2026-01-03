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
  {
    id: 'sistema-digestivo',
    code: '5321482',
    name: 'Salud Digestiva',
    category: 'salud',
    description: 'Armoniza el sistema digestivo, mejorando la digestión y la absorción de nutrientes. Alivia malestares estomacales.',
    howToUse: 'Coloca tu mano sobre el estómago y visualiza la secuencia girando en espiral verde sobre tu abdomen.',
  },
  {
    id: 'sueno-reparador',
    code: '514248538',
    name: 'Sueño Reparador',
    category: 'salud',
    description: 'Facilita un sueño profundo y reparador. Combate el insomnio y los trastornos del sueño.',
    howToUse: 'Escribe la secuencia en un papel azul y colócala bajo la almohada. Repite el código mentalmente mientras te duermes.',
  },
  {
    id: 'energia-vital',
    code: '5189318',
    name: 'Energía Vital',
    category: 'salud',
    description: 'Restaura la energía y vitalidad del cuerpo. Combate el cansancio crónico y la fatiga.',
    howToUse: 'Visualiza la secuencia como rayos de sol entrando por la coronilla y llenando todo tu cuerpo de luz dorada.',
  },
  {
    id: 'corazon-sano',
    code: '5481247',
    name: 'Corazón Saludable',
    category: 'salud',
    description: 'Fortalece el sistema cardiovascular y promueve la salud del corazón.',
    howToUse: 'Coloca tu mano derecha sobre el corazón, visualiza la secuencia en luz rosa entrando y sanando tu corazón.',
  },
  {
    id: 'piel-sana',
    code: '1458741',
    name: 'Piel Sana y Radiante',
    category: 'salud',
    description: 'Mejora la salud de la piel, combate problemas cutáneos y promueve una apariencia radiante.',
    howToUse: 'Mientras aplicas crema o agua en tu rostro, visualiza la secuencia penetrando en cada célula de tu piel.',
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
  {
    id: 'aumento-salario',
    code: '137142597',
    name: 'Aumento de Salario',
    category: 'abundancia',
    description: 'Atrae mejoras salariales y aumentos de ingresos en tu trabajo actual.',
    howToUse: 'Escribe la secuencia junto a la cantidad que deseas ganar. Visualiza recibiendo ese monto cada mes.',
  },
  {
    id: 'buena-suerte',
    code: '817219738',
    name: 'Buena Suerte',
    category: 'abundancia',
    description: 'Atrae la buena fortuna y las sincronicidades positivas a tu vida.',
    howToUse: 'Repite esta secuencia 7 veces cada mañana mientras visualizas un trébol de cuatro hojas brillando sobre ti.',
  },
  {
    id: 'inversiones',
    code: '48141218',
    name: 'Éxito en Inversiones',
    category: 'abundancia',
    description: 'Guía las decisiones financieras hacia inversiones prósperas y protege el capital.',
    howToUse: 'Antes de tomar decisiones financieras, medita con esta secuencia pidiendo claridad y guía.',
  },
  {
    id: 'ventas',
    code: '548614918',
    name: 'Aumento de Ventas',
    category: 'abundancia',
    description: 'Multiplica las ventas y atrae clientes ideales para tu negocio o emprendimiento.',
    howToUse: 'Escribe la secuencia en la caja registradora o en tu sistema de pagos. Visualiza clientes satisfechos llegando constantemente.',
  },
  {
    id: 'casa-propia',
    code: '5148412571',
    name: 'Casa Propia',
    category: 'abundancia',
    description: 'Facilita la adquisición de vivienda propia y la manifestación del hogar ideal.',
    howToUse: 'Visualiza la casa de tus sueños mientras repites la secuencia. Dibuja el plano de tu casa ideal con el código escrito.',
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
  {
    id: 'amistad-verdadera',
    code: '894518798',
    name: 'Amistad Verdadera',
    category: 'amor',
    description: 'Atrae amistades sinceras y fortalece los vínculos de amistad existentes.',
    howToUse: 'Visualiza a tus amigos rodeados de luz dorada mientras repites la secuencia. Envía amor a cada uno de ellos.',
  },
  {
    id: 'comunicacion-pareja',
    code: '5481411',
    name: 'Comunicación en Pareja',
    category: 'amor',
    description: 'Mejora la comunicación y el entendimiento mutuo en las relaciones de pareja.',
    howToUse: 'Antes de conversaciones importantes con tu pareja, repite la secuencia mentalmente visualizando un puente de luz entre ambos.',
  },
  {
    id: 'fertilidad',
    code: '914871981',
    name: 'Fertilidad y Concepción',
    category: 'amor',
    description: 'Apoya el proceso de fertilidad y concepción para quienes desean formar familia.',
    howToUse: 'Medita con esta secuencia junto a tu pareja, visualizando una luz rosada llenando el vientre.',
  },
  {
    id: 'sanar-corazon-roto',
    code: '8974149128',
    name: 'Sanar Corazón Roto',
    category: 'amor',
    description: 'Sana las heridas de amores pasados y libera el dolor de relaciones terminadas.',
    howToUse: 'Escribe la secuencia sobre tu corazón con tu dedo mientras visualizas luz verde sanando cada herida.',
  },
  {
    id: 'relaciones-toxicas',
    code: '5148912561',
    name: 'Liberación de Relaciones Tóxicas',
    category: 'amor',
    description: 'Ayuda a soltar relaciones dañinas y liberar vínculos energéticos negativos.',
    howToUse: 'Visualiza un cordón entre tú y la persona, luego imagina la secuencia cortando suavemente ese cordón con luz violeta.',
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
  {
    id: 'proteccion-ninos',
    code: '5148915',
    name: 'Protección de los Niños',
    category: 'proteccion',
    description: 'Protege a los niños de peligros físicos, energéticos y emocionales.',
    howToUse: 'Escribe la secuencia en un papel y colócala en la habitación del niño. Visualízalo rodeado de luz blanca protectora.',
  },
  {
    id: 'proteccion-trabajo',
    code: '184159712',
    name: 'Protección en el Trabajo',
    category: 'proteccion',
    description: 'Protege contra conflictos laborales, competencia desleal y energías negativas en el ambiente de trabajo.',
    howToUse: 'Coloca la secuencia en tu escritorio o lugar de trabajo. Visualiza un escudo dorado a tu alrededor.',
  },
  {
    id: 'proteccion-accidentes',
    code: '5184918',
    name: 'Prevención de Accidentes',
    category: 'proteccion',
    description: 'Protege contra accidentes y situaciones peligrosas en la vida cotidiana.',
    howToUse: 'Repite la secuencia cada mañana visualizando un ángel guardián caminando a tu lado durante todo el día.',
  },
  {
    id: 'limpieza-energetica',
    code: '714981418',
    name: 'Limpieza Energética',
    category: 'proteccion',
    description: 'Limpia y purifica tu campo energético de cargas negativas acumuladas.',
    howToUse: 'Visualiza la secuencia como una cascada de luz violeta que cae sobre ti, limpiando toda tu aura.',
  },
  {
    id: 'proteccion-mascotas',
    code: '5148912',
    name: 'Protección de Mascotas',
    category: 'proteccion',
    description: 'Protege a tus mascotas de enfermedades, peligros y energías negativas.',
    howToUse: 'Escribe la secuencia en el collar de tu mascota o en su cama. Visualiza una burbuja de luz azul rodeándola.',
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
  {
    id: 'liderazgo',
    code: '498481518',
    name: 'Liderazgo y Autoridad',
    category: 'trabajo',
    description: 'Desarrolla cualidades de liderazgo y fortalece la presencia y autoridad en el ámbito profesional.',
    howToUse: 'Visualiza la secuencia formando una corona dorada sobre tu cabeza antes de dirigir reuniones o equipos.',
  },
  {
    id: 'concentracion',
    code: '5148918',
    name: 'Concentración Mental',
    category: 'trabajo',
    description: 'Mejora la concentración, el enfoque y la capacidad de atención en tareas complejas.',
    howToUse: 'Escribe la secuencia en tu espacio de trabajo. Visualízala como un rayo de luz azul entrando en tu mente.',
  },
  {
    id: 'emprendimiento',
    code: '5148941271',
    name: 'Emprendimiento Exitoso',
    category: 'trabajo',
    description: 'Potencia el espíritu emprendedor y atrae el éxito para nuevos proyectos y negocios.',
    howToUse: 'Escribe la secuencia en tu plan de negocios o visualízala al pensar en tu emprendimiento.',
  },
  {
    id: 'memoria',
    code: '5893148',
    name: 'Mejora de la Memoria',
    category: 'trabajo',
    description: 'Fortalece la memoria y la capacidad de retención de información.',
    howToUse: 'Antes de estudiar, repite la secuencia 3 veces tocando tu frente con el dedo índice.',
  },
  {
    id: 'oratoria',
    code: '41859148',
    name: 'Oratoria y Expresión',
    category: 'trabajo',
    description: 'Mejora la capacidad de hablar en público y expresar ideas con claridad y confianza.',
    howToUse: 'Antes de presentaciones, visualiza la secuencia en tu garganta como luz azul cielo. Respira profundo.',
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
  {
    id: 'ansiedad',
    code: '5148919',
    name: 'Alivio de la Ansiedad',
    category: 'sanacion',
    description: 'Calma los estados de ansiedad y nerviosismo. Restaura la tranquilidad mental y emocional.',
    howToUse: 'Cuando sientas ansiedad, respira profundo y visualiza la secuencia en color azul celeste calmando tu mente.',
  },
  {
    id: 'trauma',
    code: '914891428',
    name: 'Sanación de Traumas',
    category: 'sanacion',
    description: 'Ayuda a procesar y liberar traumas del pasado, permitiendo la sanación profunda del alma.',
    howToUse: 'En meditación, visualiza la secuencia como luz violeta entrando en las memorias dolorosas y transformándolas.',
  },
  {
    id: 'duelo',
    code: '5148912891',
    name: 'Sanación del Duelo',
    category: 'sanacion',
    description: 'Acompaña el proceso de duelo por la pérdida de seres queridos. Trae consuelo y paz.',
    howToUse: 'Visualiza a tu ser querido rodeado de luz mientras repites la secuencia. Envía amor y permite soltar.',
  },
  {
    id: 'estres',
    code: '5482148',
    name: 'Liberación del Estrés',
    category: 'sanacion',
    description: 'Disuelve el estrés acumulado y restaura el equilibrio del sistema nervioso.',
    howToUse: 'Visualiza la secuencia como una ola de agua fresca que recorre todo tu cuerpo, llevándose toda tensión.',
  },
  {
    id: 'alegria',
    code: '5148918712',
    name: 'Activación de la Alegría',
    category: 'sanacion',
    description: 'Activa la alegría interior y reconecta con la capacidad de disfrutar la vida.',
    howToUse: 'Sonríe mientras repites la secuencia. Visualiza luz amarilla dorada expandiéndose desde tu corazón.',
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
