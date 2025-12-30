export type Element = 'Fuego' | 'Tierra' | 'Aire' | 'Agua';
export type Modality = 'Cardinal' | 'Fijo' | 'Mutable';

export interface ZodiacSign {
  id: string;
  name: string;
  symbol: string;
  dates: string;
  element: Element;
  modality: Modality;
  rulingPlanet: string;
  rulingPlanetSymbol: string;
  keywords: string[];
  archetype: {
    title: string;
    description: string;
  };
  positiveQualities: { title: string; description: string }[];
  shadowAspects: { title: string; description: string; transformation: string }[];
  mythology: string;
  elementDescription: string;
  modalityDescription: string;
  rulingPlanetDescription: string;
}

export const zodiacSigns: ZodiacSign[] = [
  {
    id: 'aries',
    name: 'Aries',
    symbol: '♈',
    dates: '21 marzo - 19 abril',
    element: 'Fuego',
    modality: 'Cardinal',
    rulingPlanet: 'Marte',
    rulingPlanetSymbol: '♂',
    keywords: ['Pionero', 'Valiente', 'Impulsivo', 'Líder', 'Guerrero'],
    archetype: {
      title: 'El Guerrero Pionero',
      description: 'Aries representa el nacimiento del yo, el primer impulso de existencia individual que surge del océano cósmico de Piscis. Es la chispa primordial de la vida, el grito del recién nacido que anuncia su llegada al mundo. El arquetipo ariano encarna al guerrero interior, aquel que se atreve a iniciar nuevos caminos sin importar los obstáculos. Esta energía es pura acción, la fuerza vital que impulsa a conquistar nuevos territorios, tanto externos como internos. Aries nos enseña el valor de la autenticidad, de ser fieles a nuestros impulsos más genuinos y de enfrentar la vida con coraje inquebrantable.'
    },
    positiveQualities: [
      { title: 'Liderazgo Natural', description: 'Capacidad innata para tomar la iniciativa y guiar a otros hacia nuevos horizontes con entusiasmo contagioso.' },
      { title: 'Valentía Inquebrantable', description: 'Coraje para enfrentar desafíos que otros evitan, convirtiendo obstáculos en oportunidades de crecimiento.' },
      { title: 'Energía Vital Abundante', description: 'Vitalidad inagotable que inspira acción y movimiento, capaz de iniciar múltiples proyectos simultáneamente.' },
      { title: 'Honestidad Directa', description: 'Transparencia en la comunicación, expresando verdades sin rodeos ni manipulaciones.' },
      { title: 'Espíritu Aventurero', description: 'Amor por lo nuevo y desconocido, siempre dispuesto a explorar territorios inexplorados.' },
      { title: 'Independencia Feroz', description: 'Autonomía para tomar decisiones propias sin depender de la aprobación externa.' }
    ],
    shadowAspects: [
      { title: 'Impulsividad', description: 'Tendencia a actuar sin pensar en las consecuencias.', transformation: 'Cultivar la pausa reflexiva antes de actuar, integrando la sabiduría con el impulso.' },
      { title: 'Impaciencia', description: 'Frustración ante procesos lentos o que requieren espera.', transformation: 'Desarrollar tolerancia comprendiendo que cada cosa tiene su tiempo divino.' },
      { title: 'Agresividad', description: 'La energía guerrera puede volverse destructiva cuando no se canaliza.', transformation: 'Dirigir la fuerza marciana hacia causas constructivas y la autodefensa legítima.' },
      { title: 'Egocentrismo', description: 'Dificultad para considerar las necesidades de otros.', transformation: 'Expandir la conciencia del yo para incluir al nosotros sin perder la identidad.' },
      { title: 'Falta de Perseverancia', description: 'Abandono de proyectos cuando pierden novedad.', transformation: 'Aprender que la verdadera conquista incluye sostener lo iniciado hasta su maduración.' }
    ],
    mythology: 'En la mitología griega, Aries está asociado con el Vellocino de Oro y el carnero Crisómalo, enviado por Néfele para salvar a sus hijos Frixo y Hele del sacrificio. Este carnero alado de lana dorada llevó a los niños volando sobre el mar, aunque Hele cayó en el estrecho que desde entonces lleva su nombre (Helesponto). Frixo llegó a la Cólquide, donde sacrificó al carnero en honor a Zeus y colgó el vellocino en un árbol sagrado custodiado por un dragón que nunca dormía. Este vellocino se convirtió en el objetivo de Jasón y los Argonautas, simbolizando la búsqueda del tesoro más preciado: la realización del potencial heroico. El carnero que se sacrifica representa la nobleza del espíritu ariano, dispuesto a dar todo por proteger lo que ama.',
    elementDescription: 'El Fuego en Aries se manifiesta como la primera llama, el chispazo inicial que enciende la existencia. Es fuego de acción, no de contemplación; fuego que impulsa hacia adelante sin detenerse a considerar el combustible restante. Esta expresión ígnea es la más pura y directa de los tres signos de Fuego, representando la energía vital en su estado más primordial.',
    modalityDescription: 'Como signo Cardinal, Aries inicia el ciclo zodiacal y cada nueva estación (primavera en el hemisferio norte). Esta cualidad cardinal otorga la capacidad de comenzar, de dar el primer paso cuando otros dudan. Es la energía del amanecer, del primer día, del momento exacto en que la intención se convierte en acción.',
    rulingPlanetDescription: 'Marte, el guerrero celestial, infunde a Aries con su energía combativa y su impulso de conquista. Esta influencia marciana otorga la determinación para perseguir objetivos, la fortaleza física y mental para enfrentar adversidades, y el fuego interno que convierte los deseos en realidades tangibles. Marte enseña que la verdadera victoria es sobre uno mismo.'
  },
  {
    id: 'tauro',
    name: 'Tauro',
    symbol: '♉',
    dates: '20 abril - 20 mayo',
    element: 'Tierra',
    modality: 'Fijo',
    rulingPlanet: 'Venus',
    rulingPlanetSymbol: '♀',
    keywords: ['Estable', 'Sensual', 'Persistente', 'Terrenal', 'Leal'],
    archetype: {
      title: 'El Constructor Sensual',
      description: 'Tauro representa la manifestación material del espíritu, el momento en que la energía primordial de Aries toma forma concreta. Es el arquitecto del zodíaco, quien construye estructuras duraderas sobre cimientos sólidos. El arquetipo taurino encarna la conexión profunda con el mundo físico: los placeres del cuerpo, la belleza de la naturaleza, la seguridad del hogar. Esta energía nos enseña a valorar lo que tenemos, a cultivar paciencia mientras nuestras semillas florecen, y a encontrar lo sagrado en lo cotidiano. Tauro nos recuerda que somos seres encarnados, y que honrar el cuerpo es honrar el templo del alma.'
    },
    positiveQualities: [
      { title: 'Estabilidad Inquebrantable', description: 'Capacidad para mantener la calma y proporcionar un ancla segura en tiempos de turbulencia.' },
      { title: 'Sensualidad Consciente', description: 'Apreciación profunda de los placeres físicos: comida, arte, música, tacto y belleza.' },
      { title: 'Lealtad Profunda', description: 'Fidelidad incondicional hacia seres queridos, una vez que se establece el vínculo.' },
      { title: 'Paciencia Cultivada', description: 'Capacidad para esperar el momento adecuado, entendiendo que las cosas buenas toman tiempo.' },
      { title: 'Sentido Práctico', description: 'Habilidad para convertir ideas abstractas en realidades tangibles y funcionales.' },
      { title: 'Conexión con la Naturaleza', description: 'Afinidad instintiva con el mundo natural, los ciclos de la tierra y la agricultura.' }
    ],
    shadowAspects: [
      { title: 'Terquedad', description: 'Resistencia excesiva al cambio, incluso cuando es beneficioso.', transformation: 'Reconocer que la verdadera seguridad incluye la adaptabilidad fluida.' },
      { title: 'Materialismo', description: 'Apego excesivo a posesiones y comodidades físicas.', transformation: 'Cultivar la abundancia interior que no depende de lo externo.' },
      { title: 'Posesividad', description: 'Tendencia a tratar a personas y cosas como propiedades.', transformation: 'Aprender que el amor verdadero libera en lugar de aprisionar.' },
      { title: 'Pereza', description: 'La búsqueda del confort puede llevar a la inacción.', transformation: 'Canalizar el amor por el placer hacia la creación activa de belleza.' },
      { title: 'Inflexibilidad', description: 'Dificultad para considerar perspectivas diferentes a la propia.', transformation: 'Expandir la mente manteniendo los pies en la tierra.' }
    ],
    mythology: 'En la mitología griega, Tauro está vinculado con el mito de Zeus y Europa. El rey de los dioses se transformó en un magnífico toro blanco para seducir a la princesa fenicia Europa. Cautivada por la belleza y mansedumbre del animal, Europa montó sobre su lomo, momento en que Zeus la llevó a través del mar hasta Creta, donde se reveló como dios. De esta unión nacieron Minos, Radamantis y Sarpedón. El toro también representa al Minotauro, criatura nacida de la unión entre Pasífae y un toro sagrado, simbolizando la naturaleza instintiva que debe ser integrada. Estas historias hablan del poder transformador del deseo y la necesidad de honrar tanto la naturaleza divina como la animal.',
    elementDescription: 'La Tierra en Tauro se expresa como suelo fértil, rico en nutrientes, listo para recibir semillas y hacerlas crecer. Es tierra cultivada, productiva, que da frutos tangibles. Esta manifestación terrestre valora la permanencia, la solidez y la materialización de los sueños en formas que pueden tocarse, olerse y saborearse.',
    modalityDescription: 'La cualidad Fija de Tauro otorga la capacidad de mantener, sostener y preservar lo que otros han iniciado. Es la energía de la consolidación, del arraigo profundo que permite a las raíces extenderse. Esta fijeza proporciona resistencia y durabilidad, aunque puede convertirse en rigidez si no se equilibra con flexibilidad.',
    rulingPlanetDescription: 'Venus, diosa del amor y la belleza, infunde a Tauro con su apreciación por las artes, la armonía y los placeres refinados. Esta influencia venusina otorga el ojo estético, el amor por la comodidad y la capacidad de crear ambientes de paz y belleza. Venus enseña que el amor propio es la base de todo amor genuino.'
  },
  {
    id: 'geminis',
    name: 'Géminis',
    symbol: '♊',
    dates: '21 mayo - 20 junio',
    element: 'Aire',
    modality: 'Mutable',
    rulingPlanet: 'Mercurio',
    rulingPlanetSymbol: '☿',
    keywords: ['Comunicador', 'Curioso', 'Versátil', 'Dual', 'Ingenioso'],
    archetype: {
      title: 'El Mensajero Dual',
      description: 'Géminis representa la primera expresión del intelecto, el despertar de la mente que busca nombrar y comprender el mundo. Es el eterno estudiante y comunicador, el puente entre mundos diversos. El arquetipo geminiano encarna la curiosidad insaciable, la capacidad de ver múltiples perspectivas simultáneamente y el don de traducir lo complejo en accesible. Los Gemelos nos enseñan que la verdad tiene muchas caras, que la adaptabilidad es una forma de inteligencia, y que el intercambio de ideas es tan vital como el aire que respiramos. En su dualidad reside la comprensión de que somos seres multidimensionales.'
    },
    positiveQualities: [
      { title: 'Versatilidad Mental', description: 'Capacidad para moverse fluidamente entre temas, ideas y perspectivas diferentes.' },
      { title: 'Comunicación Brillante', description: 'Don natural para expresar ideas de manera clara, ingeniosa y cautivadora.' },
      { title: 'Curiosidad Infinita', description: 'Sed inagotable de conocimiento que impulsa el aprendizaje continuo.' },
      { title: 'Adaptabilidad Social', description: 'Habilidad para conectar con personas de diversos orígenes y personalidades.' },
      { title: 'Ingenio Rápido', description: 'Mente ágil que encuentra soluciones creativas y respuestas ingeniosas.' },
      { title: 'Juventud Eterna', description: 'Espíritu joven que mantiene viva la capacidad de asombrarse.' }
    ],
    shadowAspects: [
      { title: 'Superficialidad', description: 'Tendencia a rozar la superficie sin profundizar verdaderamente.', transformation: 'Cultivar la paciencia para explorar las profundidades de un tema.' },
      { title: 'Inconsistencia', description: 'Dificultad para mantener compromisos y opiniones estables.', transformation: 'Desarrollar un centro interno que permanezca mientras las ideas fluyen.' },
      { title: 'Nerviosismo', description: 'La mente hiperactiva puede generar ansiedad y dispersión.', transformation: 'Practicar la quietud mental sin perder la vivacidad intelectual.' },
      { title: 'Manipulación verbal', description: 'El don de la palabra puede usarse para engañar.', transformation: 'Alinear la comunicación con la verdad y la integridad.' },
      { title: 'Dualidad conflictiva', description: 'Las dos naturalezas pueden entrar en guerra interna.', transformation: 'Integrar los opuestos reconociendo que son partes del mismo ser.' }
    ],
    mythology: 'En la mitología griega, Géminis representa a los gemelos Cástor y Pólux, los Dióscuros. Cástor era mortal, hijo del rey Tindáreo, mientras que Pólux era inmortal, hijo de Zeus. Los hermanos eran inseparables, célebres guerreros y participantes en la expedición de los Argonautas. Cuando Cástor murió en batalla, Pólux pidió a Zeus compartir su inmortalidad. Zeus los colocó juntos en el cielo como la constelación de Géminis, permitiéndoles alternar entre el Olimpo y el Hades. Esta historia ilustra el amor fraternal, la dualidad entre lo mortal e inmortal, y la capacidad de existir en múltiples reinos simultáneamente.',
    elementDescription: 'El Aire en Géminis se manifiesta como brisa inquieta que viaja de aquí para allá, transportando semillas de ideas, aromas de experiencias y susurros de historias. Es aire de intercambio, de comunicación, de conexión mental. Esta expresión aérea es ligera, rápida y siempre en movimiento.',
    modalityDescription: 'La cualidad Mutable de Géminis otorga la flexibilidad suprema, la capacidad de cambiar de forma según las circunstancias lo requieran. Es la energía de la transición, del puente entre estados. Esta mutabilidad permite la adaptación instantánea, aunque puede dificultar el arraigo.',
    rulingPlanetDescription: 'Mercurio, el mensajero alado de los dioses, infunde a Géminis con velocidad mental, habilidad comunicativa y capacidad de conectar mundos diversos. Esta influencia mercurial otorga el don de la palabra, el comercio de ideas y la capacidad de traducir lo complejo. Mercurio enseña que la información es poder cuando se comparte sabiamente.'
  },
  {
    id: 'cancer',
    name: 'Cáncer',
    symbol: '♋',
    dates: '21 junio - 22 julio',
    element: 'Agua',
    modality: 'Cardinal',
    rulingPlanet: 'Luna',
    rulingPlanetSymbol: '☽',
    keywords: ['Protector', 'Emocional', 'Intuitivo', 'Hogareño', 'Maternal'],
    archetype: {
      title: 'La Madre Nutricia',
      description: 'Cáncer representa el principio maternal del cosmos, el útero cósmico donde se gesta la vida emocional. Es el guardián del hogar, el protector de la familia y el custodio de las memorias ancestrales. El arquetipo canceriano encarna el amor incondicional, la nutrición del alma y la seguridad emocional que todos necesitamos para florecer. El Cangrejo nos enseña la importancia de las raíces, de honrar nuestro linaje y de crear espacios sagrados donde el corazón pueda descansar. En su caparazón protector encontramos el recordatorio de que la vulnerabilidad requiere límites saludables.'
    },
    positiveQualities: [
      { title: 'Intuición Profunda', description: 'Capacidad de percibir las corrientes emocionales sutiles y las necesidades no expresadas.' },
      { title: 'Nutrición Emocional', description: 'Don natural para cuidar, alimentar y hacer sentir seguros a los demás.' },
      { title: 'Memoria Emocional', description: 'Conexión profunda con el pasado, las tradiciones y la historia familiar.' },
      { title: 'Protección Feroz', description: 'Disposición a defender a los seres queridos con tenacidad inquebrantable.' },
      { title: 'Creatividad Sensible', description: 'Imaginación rica que se nutre de las profundidades emocionales.' },
      { title: 'Lealtad Familiar', description: 'Devoción profunda hacia el hogar y los lazos de sangre.' }
    ],
    shadowAspects: [
      { title: 'Apego al Pasado', description: 'Dificultad para soltar heridas, resentimientos y memorias dolorosas.', transformation: 'Honrar el pasado sin permitir que dicte el presente.' },
      { title: 'Sobreprotección', description: 'El cuidado puede volverse asfixiante y limitante para otros.', transformation: 'Confiar en la capacidad de los demás para manejar sus propios desafíos.' },
      { title: 'Manipulación Emocional', description: 'Uso de la vulnerabilidad como herramienta de control.', transformation: 'Expresar necesidades directamente sin recurrir a tácticas indirectas.' },
      { title: 'Cambios de Humor', description: 'Las mareas emocionales pueden crear inestabilidad.', transformation: 'Desarrollar un centro interno que permanezca estable en la tormenta.' },
      { title: 'Victimismo', description: 'Tendencia a refugiarse en el rol de víctima.', transformation: 'Reclamar el poder personal sin negar la vulnerabilidad legítima.' }
    ],
    mythology: 'En la mitología griega, el cangrejo Carcinos fue enviado por Hera para distraer a Heracles durante su batalla contra la Hidra de Lerna. Aunque el cangrejo fue aplastado por el héroe, Hera lo honró colocándolo entre las estrellas. Esta historia aparentemente menor revela verdades profundas: incluso los seres pequeños pueden participar en grandes batallas, la lealtad es recordada aunque la misión falle, y hay nobleza en proteger lo que amamos aunque nos cueste la vida. El cangrejo también conecta con la Madre primordial del océano, de donde toda vida emergió.',
    elementDescription: 'El Agua en Cáncer se manifiesta como el mar primordial, la matriz de donde surge toda vida. Es agua nutritiva, protectora, que sostiene y alimenta. Esta expresión acuática es profundamente emocional, conectada con los ciclos lunares y las mareas del sentimiento. El agua canceriana recuerda todo y guarda los secretos del linaje.',
    modalityDescription: 'La cualidad Cardinal de Cáncer se expresa como el impulso de crear seguridad, de iniciar un hogar, de fundar una familia. Es la energía del solsticio de verano, el momento de máxima luz donde el corazón busca expandirse. Esta cardinalidad emocional inicia movimientos desde el sentimiento.',
    rulingPlanetDescription: 'La Luna, luminaria de la noche, infunde a Cáncer con su naturaleza cíclica, su conexión con lo femenino y su dominio sobre las mareas emocionales. Esta influencia lunar otorga intuición, sensibilidad y la capacidad de nutrir. La Luna enseña que la receptividad es tan poderosa como la acción.'
  },
  {
    id: 'leo',
    name: 'Leo',
    symbol: '♌',
    dates: '23 julio - 22 agosto',
    element: 'Fuego',
    modality: 'Fijo',
    rulingPlanet: 'Sol',
    rulingPlanetSymbol: '☉',
    keywords: ['Regio', 'Generoso', 'Creativo', 'Orgulloso', 'Radiante'],
    archetype: {
      title: 'El Rey Radiante',
      description: 'Leo representa el esplendor del yo individualizado, la expresión máxima del corazón creativo. Es el rey o reina que ocupa el trono con dignidad natural, irradiando luz y calidez a su reino. El arquetipo leonino encarna la nobleza del espíritu, la generosidad del corazón magnánimo y el coraje de brillar sin disculpas. El León nos enseña que cada uno de nosotros tiene un centro solar, una luz única que el mundo necesita ver. En su realeza encontramos el recordatorio de que la verdadera autoridad surge del amor propio y la autenticidad, no de la dominación.'
    },
    positiveQualities: [
      { title: 'Generosidad Regia', description: 'Corazón grande que comparte abundantemente tiempo, recursos y afecto.' },
      { title: 'Creatividad Ardiente', description: 'Impulso artístico que busca expresar la belleza interior en formas externas.' },
      { title: 'Liderazgo Carismático', description: 'Presencia magnética que inspira y motiva a otros naturalmente.' },
      { title: 'Lealtad Noble', description: 'Fidelidad inquebrantable hacia quienes ganan su corazón.' },
      { title: 'Coraje Luminoso', description: 'Valentía para defender lo correcto y proteger a los vulnerables.' },
      { title: 'Alegría Contagiosa', description: 'Capacidad de llenar espacios con calidez y celebración de la vida.' }
    ],
    shadowAspects: [
      { title: 'Orgullo Excesivo', description: 'La dignidad puede convertirse en arrogancia y soberbia.', transformation: 'Cultivar la humildad que reconoce la luz en todos los seres.' },
      { title: 'Necesidad de Admiración', description: 'Dependencia del aplauso externo para sentirse valioso.', transformation: 'Desarrollar autovalidación que no requiere audiencia.' },
      { title: 'Dramatismo', description: 'Tendencia a magnificar situaciones buscando atención.', transformation: 'Canalizar la teatralidad hacia expresión artística constructiva.' },
      { title: 'Autoritarismo', description: 'El liderazgo puede volverse tiranía cuando el ego domina.', transformation: 'Liderar desde el servicio al bien común, no desde el poder personal.' },
      { title: 'Inflexibilidad', description: 'Dificultad para admitir errores o cambiar de posición.', transformation: 'Reconocer que la verdadera fortaleza incluye la vulnerabilidad.' }
    ],
    mythology: 'En la mitología griega, Leo representa al León de Nemea, la primera de las doce labores de Heracles. Esta bestia invulnerable, cuya piel no podía ser penetrada por armas, aterrorizaba la región de Nemea. Heracles finalmente lo venció estrangulándolo con sus propias manos y luego vistió su piel como armadura, volviéndose él mismo invulnerable. Zeus colocó al león entre las estrellas. Esta historia simboliza la conquista del ego, la transformación de la fuerza bruta en poder sagrado, y cómo al integrar nuestra naturaleza salvaje nos vestimos de su poder.',
    elementDescription: 'El Fuego en Leo es el fuego del sol, constante, sostenido, que da vida a todo lo que toca. Es fuego de corazón, de expresión creativa, de amor ardiente. Esta manifestación ígnea es la más estable de los signos de fuego, brillando con intensidad permanente desde el centro.',
    modalityDescription: 'La cualidad Fija de Leo otorga constancia, determinación y la capacidad de mantener la llama ardiendo indefinidamente. Es la energía del verano pleno, cuando el sol reina supremo. Esta fijeza proporciona estabilidad al fuego creativo, permitiendo proyectos a largo plazo.',
    rulingPlanetDescription: 'El Sol, centro de nuestro sistema solar, infunde a Leo con su naturaleza radiante, vital y creativa. Esta influencia solar otorga identidad fuerte, voluntad de brillar y el impulso de crear. El Sol enseña que cada ser es el centro de su propio universo y tiene derecho a existir plenamente.'
  },
  {
    id: 'virgo',
    name: 'Virgo',
    symbol: '♍',
    dates: '23 agosto - 22 septiembre',
    element: 'Tierra',
    modality: 'Mutable',
    rulingPlanet: 'Mercurio',
    rulingPlanetSymbol: '☿',
    keywords: ['Analítico', 'Servicial', 'Perfeccionista', 'Práctico', 'Sanador'],
    archetype: {
      title: 'La Sacerdotisa Sanadora',
      description: 'Virgo representa el principio del discernimiento sagrado, la capacidad de separar lo esencial de lo superfluo. Es la guardiana de los misterios de la cosecha, quien sabe que el trigo debe separarse de la paja. El arquetipo virginiano encarna el servicio devoto, la purificación del ser y la maestría en los detalles que componen el todo. La Virgen nos enseña que lo divino se encuentra en lo mundano bien hecho, que el cuidado del cuerpo es práctica espiritual, y que la humildad verdadera surge de reconocer nuestra participación en algo mayor. En su meticulosidad encontramos la devoción.'
    },
    positiveQualities: [
      { title: 'Análisis Profundo', description: 'Capacidad para examinar situaciones con precisión y encontrar soluciones prácticas.' },
      { title: 'Servicio Devoto', description: 'Disposición genuina para ayudar y mejorar la vida de otros.' },
      { title: 'Atención al Detalle', description: 'Percepción aguda que nota lo que otros pasan por alto.' },
      { title: 'Integridad Práctica', description: 'Coherencia entre valores y acciones en la vida cotidiana.' },
      { title: 'Capacidad Sanadora', description: 'Afinidad natural con la salud, la nutrición y las artes curativas.' },
      { title: 'Humildad Genuina', description: 'Capacidad de trabajar sin necesidad de reconocimiento público.' }
    ],
    shadowAspects: [
      { title: 'Perfeccionismo Paralizante', description: 'La búsqueda de la perfección impide completar o disfrutar.', transformation: 'Abrazar la belleza de lo imperfecto mientras se aspira a mejorar.' },
      { title: 'Crítica Excesiva', description: 'El ojo analítico puede volverse despiadado consigo y con otros.', transformation: 'Equilibrar el discernimiento con compasión y aceptación.' },
      { title: 'Ansiedad por el Orden', description: 'Necesidad obsesiva de control sobre cada detalle.', transformation: 'Confiar en el orden inherente del caos y la vida.' },
      { title: 'Autosacrificio', description: 'El servicio puede llevar al agotamiento y la negación de necesidades propias.', transformation: 'Servir desde la plenitud, no desde el vaciamiento.' },
      { title: 'Hipocondría', description: 'Preocupación excesiva por la salud y los síntomas.', transformation: 'Cultivar confianza en la sabiduría natural del cuerpo.' }
    ],
    mythology: 'En la mitología, Virgo está asociada con múltiples figuras divinas: Deméter, diosa de la cosecha, o su hija Perséfone, cuyo descenso al inframundo marca las estaciones. También se vincula con Astraea, la diosa de la justicia y la inocencia, última de los inmortales en abandonar la Tierra durante la Edad de Hierro, prometiendo regresar cuando la humanidad recobre su pureza. La espiga de trigo que sostiene Virgo (la estrella Espica) simboliza la cosecha del trabajo bien hecho, la nutrición del cuerpo y el alma, y los ciclos de muerte y renacimiento que sustentan la vida.',
    elementDescription: 'La Tierra en Virgo se manifiesta como suelo cultivado con precisión, donde cada semilla tiene su lugar exacto. Es tierra organizada, productiva, orientada a la utilidad. Esta expresión terrestre valora la eficiencia, el buen funcionamiento de los sistemas y la traducción del orden celestial en orden material.',
    modalityDescription: 'La cualidad Mutable de Virgo otorga adaptabilidad mental, capacidad de ajustar métodos según la situación y flexibilidad en el servicio. Es la energía del final del verano, preparando la transición hacia el otoño. Esta mutabilidad permite refinar continuamente los procesos.',
    rulingPlanetDescription: 'Mercurio, en su expresión virguiana, se manifiesta como la mente analítica, el pensamiento ordenado y la comunicación precisa. A diferencia de Mercurio en Géminis (disperso y curioso), aquí es enfocado y práctico. Esta influencia otorga capacidad de síntesis y discriminación inteligente.'
  },
  {
    id: 'libra',
    name: 'Libra',
    symbol: '♎',
    dates: '23 septiembre - 22 octubre',
    element: 'Aire',
    modality: 'Cardinal',
    rulingPlanet: 'Venus',
    rulingPlanetSymbol: '♀',
    keywords: ['Equilibrado', 'Diplomático', 'Estético', 'Relacional', 'Justo'],
    archetype: {
      title: 'El Diplomático Armonizador',
      description: 'Libra representa el principio de relación consciente, el momento en que el yo reconoce al otro como su espejo. Es el guardián del equilibrio, el arquitecto de la armonía entre fuerzas opuestas. El arquetipo libriano encarna la búsqueda de justicia, la apreciación de la belleza y el arte de la diplomacia. La Balanza nos enseña que la verdad suele estar en el punto medio, que las relaciones son nuestros mayores maestros, y que la paz requiere negociación activa. En su búsqueda de equilibrio encontramos el recordatorio de que los opuestos se necesitan mutuamente.'
    },
    positiveQualities: [
      { title: 'Diplomacia Elegante', description: 'Capacidad para mediar conflictos y encontrar soluciones que beneficien a todos.' },
      { title: 'Sentido Estético Refinado', description: 'Apreciación profunda de la belleza en todas sus formas.' },
      { title: 'Justicia Imparcial', description: 'Deseo genuino de equidad y trato justo para todos.' },
      { title: 'Gracia Social', description: 'Elegancia natural en las interacciones y habilidad para conectar.' },
      { title: 'Pensamiento Equilibrado', description: 'Capacidad de considerar múltiples perspectivas antes de juzgar.' },
      { title: 'Cooperación Genuina', description: 'Disposición para trabajar en equipo y compartir el mérito.' }
    ],
    shadowAspects: [
      { title: 'Indecisión Crónica', description: 'La consideración de todas las opciones puede paralizar la elección.', transformation: 'Desarrollar confianza en la intuición y capacidad de decidir.' },
      { title: 'Dependencia Relacional', description: 'Dificultad para estar solo o definirse sin un otro.', transformation: 'Cultivar una relación sólida consigo mismo.' },
      { title: 'Evitación del Conflicto', description: 'La búsqueda de paz puede llevar a reprimir verdades incómodas.', transformation: 'Reconocer que el conflicto honesto puede fortalecer las relaciones.' },
      { title: 'Superficialidad', description: 'El énfasis en la forma puede descuidar la sustancia.', transformation: 'Integrar belleza externa con profundidad interna.' },
      { title: 'Complacencia', description: 'Tendencia a decir lo que otros quieren oír.', transformation: 'Cultivar autenticidad incluso cuando sea impopular.' }
    ],
    mythology: 'En la mitología, Libra se asocia con la diosa Astrea (también vinculada a Virgo), quien sostenía la balanza de la justicia. Themis, titánide de la ley divina y el orden, también portaba esta balanza. La constelación era originalmente las pinzas de Escorpio, pero los romanos la separaron para honrar el equinoccio de otoño, momento de perfecto equilibrio entre día y noche. La balanza simboliza el karma, donde cada acción encuentra su contrapeso exacto, y la necesidad de equilibrar lo material con lo espiritual.',
    elementDescription: 'El Aire en Libra se manifiesta como brisa suave que conecta, que media entre temperaturas extremas y crea ambientes agradables. Es aire social, relacional, que transporta conversaciones y facilita encuentros. Esta expresión aérea busca el punto de equilibrio en todo intercambio.',
    modalityDescription: 'La cualidad Cardinal de Libra se expresa como el impulso de iniciar relaciones, de crear alianzas, de comenzar proyectos colaborativos. Es la energía del equinoccio de otoño, momento de balance perfecto. Esta cardinalidad relacional inicia desde la conexión con otros.',
    rulingPlanetDescription: 'Venus, en su expresión libriana, se manifiesta como el amor por la armonía, la belleza del diseño equilibrado y la atracción entre polaridades. A diferencia de Venus en Tauro (sensual y material), aquí es estética y relacional. Venus enseña que la belleza surge del equilibrio.'
  },
  {
    id: 'escorpio',
    name: 'Escorpio',
    symbol: '♏',
    dates: '23 octubre - 21 noviembre',
    element: 'Agua',
    modality: 'Fijo',
    rulingPlanet: 'Plutón',
    rulingPlanetSymbol: '♇',
    keywords: ['Intenso', 'Transformador', 'Profundo', 'Magnético', 'Poderoso'],
    archetype: {
      title: 'El Alquimista de las Sombras',
      description: 'Escorpio representa el misterio de la muerte y la regeneración, el descenso al inframundo donde lo viejo se descompone para nutrir lo nuevo. Es el guardián de los secretos, el maestro de la transformación que conoce el poder que yace en las profundidades. El arquetipo escorpiano encarna la intensidad emocional, la capacidad de renacer de las cenizas y la valentía de enfrentar las verdades más oscuras. El Escorpión nos enseña que la verdadera sanación requiere tocar las heridas, que el poder real surge de abrazar nuestra sombra, y que la muerte de lo viejo es el nacimiento de lo nuevo.'
    },
    positiveQualities: [
      { title: 'Intensidad Apasionada', description: 'Capacidad de sumergirse completamente en experiencias y relaciones.' },
      { title: 'Poder Transformador', description: 'Habilidad para catalizar cambios profundos en sí mismo y otros.' },
      { title: 'Intuición Penetrante', description: 'Percepción que atraviesa las máscaras y toca la verdad oculta.' },
      { title: 'Lealtad Absoluta', description: 'Fidelidad inquebrantable una vez que se otorga la confianza.' },
      { title: 'Resiliencia Fenomenal', description: 'Capacidad de renacer de las crisis más devastadoras.' },
      { title: 'Magnetismo Personal', description: 'Presencia carismática que atrae e intriga profundamente.' }
    ],
    shadowAspects: [
      { title: 'Obsesión', description: 'La intensidad puede convertirse en fijación malsana.', transformation: 'Canalizar la pasión hacia propósitos evolutivos.' },
      { title: 'Manipulación', description: 'El conocimiento de las debilidades ajenas puede usarse para controlar.', transformation: 'Usar el poder para empoderar a otros, no para dominarlos.' },
      { title: 'Resentimiento', description: 'Dificultad extrema para perdonar traiciones reales o percibidas.', transformation: 'Soltar el veneno del rencor que envenena al que lo guarda.' },
      { title: 'Celos Posesivos', description: 'Miedo a la pérdida que genera conductas controladoras.', transformation: 'Cultivar seguridad interna que no depende de poseer al otro.' },
      { title: 'Autodestrucción', description: 'El poder transformador puede volverse contra uno mismo.', transformation: 'Dirigir la energía de muerte hacia lo que realmente debe morir.' }
    ],
    mythology: 'En la mitología griega, el escorpión fue enviado por Gea o Artemisa para matar a Orión, el gran cazador que había amenazado con exterminar a todos los animales de la tierra. Orión y el Escorpión fueron colocados en lados opuestos del cielo, de modo que cuando uno sale, el otro se pone. Esta historia habla del karma, de las consecuencias de la arrogancia, y de cómo las fuerzas de la naturaleza eventualmente equilibran los excesos. El escorpión también se asocia con el ave fénix, símbolo de muerte y renacimiento.',
    elementDescription: 'El Agua en Escorpio se manifiesta como las profundidades oceánicas, las corrientes subterráneas y las aguas estancadas donde fermenta la transformación. Es agua que penetra, que disuelve, que purifica a través de la intensidad. Esta expresión acuática conoce los secretos que yacen en el fondo.',
    modalityDescription: 'La cualidad Fija de Escorpio otorga la capacidad de sostener intensidad, de mantener el enfoque en procesos de transformación que otros abandonarían. Es la energía del otoño profundo, cuando la muerte prepara el terreno para el renacimiento. Esta fijeza emocional puede mover montañas.',
    rulingPlanetDescription: 'Plutón, señor del inframundo, infunde a Escorpio con poder transformador, conexión con el inconsciente colectivo y dominio sobre los ciclos de muerte-renacimiento. Esta influencia plutoniana otorga la capacidad de destruir lo obsoleto y regenerar desde las cenizas. Plutón enseña que el verdadero poder es poder sobre uno mismo.'
  },
  {
    id: 'sagitario',
    name: 'Sagitario',
    symbol: '♐',
    dates: '22 noviembre - 21 diciembre',
    element: 'Fuego',
    modality: 'Mutable',
    rulingPlanet: 'Júpiter',
    rulingPlanetSymbol: '♃',
    keywords: ['Aventurero', 'Filosófico', 'Optimista', 'Expansivo', 'Libre'],
    archetype: {
      title: 'El Arquero Filósofo',
      description: 'Sagitario representa la búsqueda de significado, la expansión de horizontes y el viaje hacia la verdad última. Es el explorador incansable que dispara sus flechas hacia el cielo, preguntándose qué hay más allá del horizonte conocido. El arquetipo sagitariano encarna el optimismo inquebrantable, la sed de conocimiento y la fe en que el universo es benevolente. El Centauro nos enseña que el viaje es tan importante como el destino, que la sabiduría se encuentra tanto en las universidades como en los caminos, y que la libertad es el prerequisito de la evolución espiritual.'
    },
    positiveQualities: [
      { title: 'Optimismo Inspirador', description: 'Fe genuina en que las cosas mejorarán y los sueños se realizarán.' },
      { title: 'Amor por el Conocimiento', description: 'Sed insaciable de aprender, comprender y expandir horizontes mentales.' },
      { title: 'Espíritu Aventurero', description: 'Disposición a explorar territorios físicos, mentales y espirituales desconocidos.' },
      { title: 'Honestidad Directa', description: 'Compromiso con la verdad, aunque a veces resulte incómoda.' },
      { title: 'Generosidad Abundante', description: 'Disposición a compartir recursos, conocimientos y oportunidades.' },
      { title: 'Visión Expandida', description: 'Capacidad de ver el panorama completo y pensar en grande.' }
    ],
    shadowAspects: [
      { title: 'Exceso en Todo', description: 'La expansión sin límites puede llevar a la sobreindulgencia.', transformation: 'Cultivar moderación sin perder el entusiasmo.' },
      { title: 'Falta de Compromiso', description: 'El amor por la libertad puede impedir profundizar.', transformation: 'Reconocer que el compromiso puede ser liberador.' },
      { title: 'Dogmatismo', description: 'La búsqueda de verdad puede convertirse en imposición de creencias.', transformation: 'Mantener mente abierta mientras se sostienen convicciones.' },
      { title: 'Imprudencia', description: 'El optimismo puede ignorar riesgos reales.', transformation: 'Equilibrar la fe con la precaución práctica.' },
      { title: 'Insensibilidad', description: 'La honestidad puede volverse brusquedad hiriente.', transformation: 'Expresar verdades con compasión y tacto.' }
    ],
    mythology: 'En la mitología griega, Sagitario representa al centauro Quirón, el sanador herido, maestro de héroes como Aquiles, Jasón y Asclepio. A diferencia de otros centauros violentos, Quirón era sabio, civilizado y versado en medicina, música y profecía. Herido accidentalmente por una flecha de Heracles envenenada con sangre de la Hidra, Quirón sufrió eternamente por ser inmortal. Finalmente, intercambió su inmortalidad por la liberación de Prometeo. Zeus lo colocó entre las estrellas. Su historia enseña que nuestras heridas pueden convertirse en fuente de sanación para otros.',
    elementDescription: 'El Fuego en Sagitario se manifiesta como llama que se eleva hacia el cielo, buscando expandirse infinitamente. Es fuego de inspiración, de entusiasmo, de visión. Esta expresión ígnea es la más espiritual de los signos de fuego, ardiendo con el deseo de comprender los misterios del universo.',
    modalityDescription: 'La cualidad Mutable de Sagitario otorga la flexibilidad para adaptar las creencias cuando nueva información lo requiere, y la capacidad de moverse entre culturas y filosofías diversas. Es la energía del final del otoño, preparando la transición hacia el invierno reflexivo.',
    rulingPlanetDescription: 'Júpiter, el mayor de los planetas y rey del Olimpo, infunde a Sagitario con su naturaleza expansiva, benevolente y filosófica. Esta influencia jupiteriana otorga buena fortuna, sabiduría y la capacidad de ver oportunidades donde otros ven obstáculos. Júpiter enseña que el universo es abundante.'
  },
  {
    id: 'capricornio',
    name: 'Capricornio',
    symbol: '♑',
    dates: '22 diciembre - 19 enero',
    element: 'Tierra',
    modality: 'Cardinal',
    rulingPlanet: 'Saturno',
    rulingPlanetSymbol: '♄',
    keywords: ['Ambicioso', 'Disciplinado', 'Responsable', 'Tradicional', 'Perseverante'],
    archetype: {
      title: 'El Arquitecto del Tiempo',
      description: 'Capricornio representa la maestría sobre la materia y el tiempo, el ascenso paciente hacia las cumbres más altas. Es el arquitecto que construye estructuras destinadas a perdurar generaciones, el anciano sabio que ha aprendido a través de la experiencia. El arquetipo capricorniano encarna la disciplina, la responsabilidad y el compromiso con la excelencia que trasciende lo inmediato. La Cabra nos enseña que los logros duraderos requieren paciencia, que la autoridad verdadera se gana con integridad, y que las limitaciones pueden ser los cimientos de la grandeza.'
    },
    positiveQualities: [
      { title: 'Disciplina Inquebrantable', description: 'Capacidad para mantener el esfuerzo constante hacia metas a largo plazo.' },
      { title: 'Responsabilidad Madura', description: 'Disposición para asumir deberes y cumplirlos íntegramente.' },
      { title: 'Ambición Constructiva', description: 'Impulso de construir, lograr y dejar un legado significativo.' },
      { title: 'Integridad Sólida', description: 'Coherencia entre palabra y acción, valores y conducta.' },
      { title: 'Sabiduría Práctica', description: 'Conocimiento nacido de la experiencia aplicado con prudencia.' },
      { title: 'Resiliencia Silenciosa', description: 'Capacidad de soportar dificultades sin quejarse ni rendirse.' }
    ],
    shadowAspects: [
      { title: 'Rigidez Excesiva', description: 'La estructura puede convertirse en prisión.', transformation: 'Mantener los cimientos mientras se permite flexibilidad en las formas.' },
      { title: 'Materialismo Frío', description: 'El enfoque en logros externos puede descuidar lo emocional.', transformation: 'Incluir el bienestar emocional como parte del éxito.' },
      { title: 'Pesimismo', description: 'La cautela puede volverse expectativa negativa crónica.', transformation: 'Equilibrar el realismo con la esperanza.' },
      { title: 'Adicción al Trabajo', description: 'El deber puede consumir todo el espacio vital.', transformation: 'Reconocer que el descanso es parte de la productividad.' },
      { title: 'Autoritarismo', description: 'La experiencia puede convertirse en imposición.', transformation: 'Guiar con sabiduría en lugar de controlar con poder.' }
    ],
    mythology: 'En la mitología griega, Capricornio se asocia con Pan, el dios de los pastores, la naturaleza salvaje y la música rústica. Cuando Tifón atacó a los dioses del Olimpo, Pan se lanzó al río Nilo para escapar, transformando la mitad inferior de su cuerpo en pez mientras la superior permanecía como cabra. Zeus inmortalizó esta forma híbrida en las estrellas. Pan también se vincula con Amaltea, la cabra (o ninfa con forma de cabra) que amamantó a Zeus en su infancia. El cuerno de Amaltea se convirtió en la cornucopia, símbolo de abundancia ganada con trabajo.',
    elementDescription: 'La Tierra en Capricornio se manifiesta como roca de montaña, mineral cristalizado por el tiempo, cimiento sobre el cual se construyen civilizaciones. Es tierra que ha sido presionada hasta convertirse en diamante. Esta expresión terrestre valora la permanencia, la estructura y la solidez probada por el tiempo.',
    modalityDescription: 'La cualidad Cardinal de Capricornio se expresa como el impulso de iniciar empresas duraderas, de fundar instituciones, de comenzar el ascenso hacia cumbres ambiciosas. Es la energía del solsticio de invierno, el renacimiento de la luz desde la oscuridad más profunda.',
    rulingPlanetDescription: 'Saturno, señor del tiempo y las limitaciones, infunde a Capricornio con su naturaleza disciplinaria, estructurante y madura. Esta influencia saturnina otorga respeto por la tradición, paciencia para los procesos largos y la capacidad de convertir obstáculos en escalones. Saturno enseña que las limitaciones son el cincel que esculpe al maestro.'
  },
  {
    id: 'acuario',
    name: 'Acuario',
    symbol: '♒',
    dates: '20 enero - 18 febrero',
    element: 'Aire',
    modality: 'Fijo',
    rulingPlanet: 'Urano',
    rulingPlanetSymbol: '♅',
    keywords: ['Innovador', 'Humanitario', 'Original', 'Independiente', 'Visionario'],
    archetype: {
      title: 'El Revolucionario Visionario',
      description: 'Acuario representa la conciencia colectiva evolucionada, la visión de lo que la humanidad puede llegar a ser. Es el portador de agua celestial que derrama ideas innovadoras sobre la tierra reseca de la convención. El arquetipo acuariano encarna la originalidad, el pensamiento independiente y el compromiso con el progreso de la humanidad. El Aguador nos enseña que la verdadera libertad es mental, que el futuro se construye desafiando lo establecido, y que pertenecemos a la familia humana global más allá de tribus y fronteras.'
    },
    positiveQualities: [
      { title: 'Visión Futurista', description: 'Capacidad de imaginar y trabajar hacia un futuro mejor para todos.' },
      { title: 'Originalidad Auténtica', description: 'Pensamiento independiente que no teme ser diferente.' },
      { title: 'Conciencia Humanitaria', description: 'Compromiso genuino con el bienestar de la humanidad y causas sociales.' },
      { title: 'Mente Abierta', description: 'Receptividad a ideas nuevas, personas diferentes y posibilidades inexploradas.' },
      { title: 'Amistad Universal', description: 'Capacidad de conectar con diversos grupos y crear redes de cooperación.' },
      { title: 'Ingenio Inventivo', description: 'Habilidad para encontrar soluciones únicas a problemas complejos.' }
    ],
    shadowAspects: [
      { title: 'Distanciamiento Emocional', description: 'La objetividad puede convertirse en frialdad.', transformation: 'Incluir el corazón en la ecuación del cambio social.' },
      { title: 'Rebeldía Sin Causa', description: 'Oposición a lo establecido simplemente por ser establecido.', transformation: 'Rebelarse con propósito constructivo.' },
      { title: 'Excentricidad Alienante', description: 'La diferencia puede convertirse en aislamiento.', transformation: 'Ser único mientras se mantiene la conexión humana.' },
      { title: 'Rigidez Ideológica', description: 'Paradójicamente, la mente abierta puede cerrarse a otras perspectivas.', transformation: 'Aplicar la apertura mental a las propias ideas.' },
      { title: 'Desapego Excesivo', description: 'El enfoque en lo colectivo puede descuidar lo íntimo.', transformation: 'Equilibrar lo universal con lo personal.' }
    ],
    mythology: 'En la mitología griega, Acuario se asocia con Ganímedes, el joven troyano de extraordinaria belleza que Zeus raptó para servir como copero de los dioses en el Olimpo. Ganímedes vertía el néctar y la ambrosía, bebidas de la inmortalidad. Zeus lo compensó colocándolo entre las estrellas. Esta historia simboliza la elevación del ser humano excepcional a los reinos divinos, el servicio a lo superior, y la distribución de bendiciones celestiales a la humanidad. El agua que vierte no es H2O, sino conocimiento, ideas y conciencia.',
    elementDescription: 'El Aire en Acuario se manifiesta como viento de cambio, corriente eléctrica de ideas, atmósfera de la mente colectiva. Es aire que conecta a todos, que transporta las ondas de radio y las señales digitales. Esta expresión aérea piensa en términos de sistemas, redes y humanidad global.',
    modalityDescription: 'La cualidad Fija de Acuario otorga la persistencia para mantener visiones a largo plazo, la determinación para sostener ideales contra la oposición. Es la energía del invierno profundo, cuando la luz debe ser creada desde el interior. Esta fijeza mental puede sostener revoluciones.',
    rulingPlanetDescription: 'Urano, el despertador cósmico, infunde a Acuario con su naturaleza revolucionaria, inventiva e impredecible. Esta influencia uraniana otorga insights repentinos, atracción por la tecnología y el impulso de liberar. Urano enseña que el cambio, aunque disruptivo, es el mecanismo de la evolución.'
  },
  {
    id: 'piscis',
    name: 'Piscis',
    symbol: '♓',
    dates: '19 febrero - 20 marzo',
    element: 'Agua',
    modality: 'Mutable',
    rulingPlanet: 'Neptuno',
    rulingPlanetSymbol: '♆',
    keywords: ['Intuitivo', 'Compasivo', 'Artístico', 'Espiritual', 'Soñador'],
    archetype: {
      title: 'El Místico Visionario',
      description: 'Piscis representa la disolución del yo separado en el océano de la conciencia universal, el retorno al útero cósmico de donde todo emerge y a donde todo regresa. Es el soñador que camina entre mundos, el místico que percibe la unidad subyacente tras las formas. El arquetipo pisciano encarna la compasión infinita, la sensibilidad artística y la conexión con dimensiones invisibles. Los Peces nos enseñan que la realidad es más amplia que lo que los sentidos perciben, que el servicio desinteresado es el camino hacia la trascendencia, y que en la rendición encontramos la liberación.'
    },
    positiveQualities: [
      { title: 'Compasión Universal', description: 'Empatía profunda que siente el sufrimiento de todos los seres.' },
      { title: 'Intuición Mística', description: 'Percepción directa de verdades que trascienden la lógica.' },
      { title: 'Creatividad Ilimitada', description: 'Imaginación que accede a fuentes de inspiración infinitas.' },
      { title: 'Adaptabilidad Fluida', description: 'Capacidad de fusionarse con diferentes ambientes y personas.' },
      { title: 'Espiritualidad Natural', description: 'Conexión innata con lo trascendente y lo sagrado.' },
      { title: 'Servicio Desinteresado', description: 'Disposición a sacrificar el confort personal por el bien de otros.' }
    ],
    shadowAspects: [
      { title: 'Escapismo', description: 'Tendencia a huir de la realidad hacia fantasías, sustancias o ilusiones.', transformation: 'Traer lo visionario a la tierra en lugar de escapar de ella.' },
      { title: 'Victimismo', description: 'Identificación con el sufrimiento que puede convertirse en identidad.', transformation: 'Usar la sensibilidad para sanar, no para sufrir.' },
      { title: 'Límites Difusos', description: 'Dificultad para distinguir dónde termina uno y empieza el otro.', transformation: 'Desarrollar límites saludables mientras se mantiene la empatía.' },
      { title: 'Ilusión', description: 'Tendencia a ver lo que se quiere ver en lugar de lo que es.', transformation: 'Cultivar discernimiento sin perder la visión.' },
      { title: 'Autosabotaje', description: 'Patrones inconscientes que impiden la realización.', transformation: 'Iluminar el inconsciente con conciencia amorosa.' }
    ],
    mythology: 'En la mitología griega, Piscis representa a Afrodita y su hijo Eros, quienes se transformaron en peces y se ataron con una cuerda para no perderse mientras escapaban del monstruo Tifón a través del río Éufrates. Esta imagen de dos peces nadando en direcciones opuestas pero unidos simboliza la dualidad pisciana: el alma dividida entre lo espiritual y lo material, la tentación de nadar hacia arriba (trascendencia) o hacia abajo (inmersión en lo sensorial). La cuerda representa el hilo que mantiene la conexión entre estos reinos.',
    elementDescription: 'El Agua en Piscis se manifiesta como el océano primordial, sin fronteras definidas, conteniendo todas las formas de vida en potencia. Es agua de disolución, de sueño, de memoria ancestral. Esta expresión acuática no distingue entre yo y otro, disolviendo las barreras que separan.',
    modalityDescription: 'La cualidad Mutable de Piscis otorga la capacidad suprema de adaptación, de fluir como el agua que toma la forma de cualquier recipiente. Es la energía del final del invierno, preparando la disolución que permitirá el nuevo nacimiento de Aries. Esta mutabilidad puede ser tanto flexibilidad como falta de forma.',
    rulingPlanetDescription: 'Neptuno, dios de los mares, infunde a Piscis con su naturaleza disolvent, imaginativa y trascendente. Esta influencia neptuniana otorga sensibilidad artística, percepción extrasensorial y el anhelo de fusión con lo divino. Neptuno enseña que lo visible es solo una pequeña parte de la realidad, y que el amor incondicional es el océano donde todos somos uno.'
  }
];

export const getSignByElement = (element: Element): ZodiacSign[] => {
  return zodiacSigns.filter(sign => sign.element === element);
};

export const getSignByModality = (modality: Modality): ZodiacSign[] => {
  return zodiacSigns.filter(sign => sign.modality === modality);
};

export const getSignById = (id: string): ZodiacSign | undefined => {
  return zodiacSigns.find(sign => sign.id === id);
};
