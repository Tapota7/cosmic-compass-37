export interface Planet {
  id: string;
  name: string;
  symbol: string;
  keywords: string[];
  psychologicalFunction: string;
  positiveExpression: string[];
  shadowExpression: string[];
  inNatalChart: string;
  orbitalPeriod: string;
  ruledSigns: string[];
}

export const planets: Planet[] = [
  {
    id: 'sol',
    name: 'Sol',
    symbol: '☉',
    keywords: ['Identidad', 'Ego', 'Vitalidad', 'Propósito', 'Padre'],
    psychologicalFunction: 'El Sol representa el núcleo de tu ser, tu esencia más fundamental. Es la fuerza vital que te impulsa, tu sentido de propósito y la persona en la que te estás convirtiendo conscientemente. Simboliza al padre, la autoridad interna y la capacidad de brillar con luz propia. En la psique, es el centro integrador alrededor del cual giran todos los demás aspectos de la personalidad, el héroe de tu propia historia de vida.',
    positiveExpression: [
      'Vitalidad radiante y energía abundante',
      'Sentido claro de identidad y propósito',
      'Creatividad que fluye naturalmente',
      'Liderazgo desde la autenticidad',
      'Generosidad que nace de la abundancia interna',
      'Confianza en uno mismo bien fundamentada'
    ],
    shadowExpression: [
      'Ego inflado y arrogancia',
      'Necesidad excesiva de atención y admiración',
      'Dominación sobre otros',
      'Identidad dependiente de logros externos',
      'Dificultad para reconocer las propias sombras'
    ],
    inNatalChart: 'La posición del Sol por signo muestra cómo expresas tu esencia, qué energía estás desarrollando en esta vida. Por casa, indica el área de vida donde buscas brillar y encontrar propósito. Los aspectos al Sol revelan cómo tu identidad central interactúa con otras partes de tu psique.',
    orbitalPeriod: '1 año (aparente desde la Tierra)',
    ruledSigns: ['Leo']
  },
  {
    id: 'luna',
    name: 'Luna',
    symbol: '☽',
    keywords: ['Emociones', 'Madre', 'Hogar', 'Instintos', 'Pasado'],
    psychologicalFunction: 'La Luna representa tu mundo emocional interno, los patrones inconscientes heredados de la infancia y la relación con la madre. Es tu necesidad de seguridad emocional, cómo nutres y buscas ser nutrido. Gobierna los instintos, las reacciones automáticas y la memoria emocional. En la psique, es el receptáculo donde guardamos todo lo que hemos sentido, el hogar interior al que regresamos cuando el mundo exterior abruma.',
    positiveExpression: [
      'Inteligencia emocional desarrollada',
      'Capacidad de nutrir y cuidar',
      'Conexión profunda con la intuición',
      'Hogar como santuario emocional',
      'Memoria emocional que enriquece',
      'Receptividad y empatía natural'
    ],
    shadowExpression: [
      'Dependencia emocional y apego al pasado',
      'Cambios de humor impredecibles',
      'Reactividad emocional excesiva',
      'Manipulación a través de la vulnerabilidad',
      'Incapacidad de soltar el pasado'
    ],
    inNatalChart: 'La Luna por signo muestra cómo experimentas y expresas las emociones, qué te hace sentir seguro. Por casa, indica dónde buscas comodidad emocional y pertenencia. Los aspectos a la Luna revelan cómo tus necesidades emocionales interactúan con otras dimensiones de tu ser.',
    orbitalPeriod: '28 días',
    ruledSigns: ['Cáncer']
  },
  {
    id: 'mercurio',
    name: 'Mercurio',
    symbol: '☿',
    keywords: ['Comunicación', 'Pensamiento', 'Aprendizaje', 'Comercio', 'Movilidad'],
    psychologicalFunction: 'Mercurio representa la mente racional, la capacidad de pensar, aprender y comunicar. Es el mensajero que traduce las experiencias en palabras y conceptos comprensibles. Gobierna los procesos cognitivos, el habla, la escritura y todo intercambio de información. En la psique, es el mediador entre diferentes partes de ti mismo y entre tú y el mundo exterior.',
    positiveExpression: [
      'Mente ágil y curiosa',
      'Comunicación clara y efectiva',
      'Capacidad de aprendizaje continuo',
      'Versatilidad mental y adaptabilidad',
      'Ingenio y sentido del humor',
      'Habilidad para conectar ideas dispares'
    ],
    shadowExpression: [
      'Superficialidad y dispersión mental',
      'Manipulación a través de las palabras',
      'Racionalización excesiva de las emociones',
      'Nerviosismo y ansiedad mental',
      'Mentira y engaño'
    ],
    inNatalChart: 'Mercurio por signo muestra tu estilo de pensamiento y comunicación. Por casa, indica las áreas de vida donde aplicas tu intelecto. Los aspectos a Mercurio revelan cómo tu mente interactúa con otras funciones psíquicas.',
    orbitalPeriod: '88 días',
    ruledSigns: ['Géminis', 'Virgo']
  },
  {
    id: 'venus',
    name: 'Venus',
    symbol: '♀',
    keywords: ['Amor', 'Belleza', 'Valores', 'Placer', 'Armonía'],
    psychologicalFunction: 'Venus representa el principio del amor, la atracción y la belleza. Gobierna lo que valoramos, cómo amamos y buscamos ser amados, y nuestra relación con el placer y la estética. Es la capacidad de crear armonía, de apreciar la belleza y de conectar afectivamente con otros. En la psique, Venus es el imán que atrae aquello que resuena con nuestros valores más profundos.',
    positiveExpression: [
      'Capacidad de amar y ser amado',
      'Apreciación de la belleza en todas sus formas',
      'Valores claros y coherentes',
      'Armonía en las relaciones',
      'Diplomacia y gracia social',
      'Disfrute sano de los placeres de la vida'
    ],
    shadowExpression: [
      'Vanidad y superficialidad',
      'Dependencia de la aprobación externa',
      'Indulgencia excesiva en placeres',
      'Pasividad en las relaciones',
      'Evitación del conflicto a costa de la autenticidad'
    ],
    inNatalChart: 'Venus por signo muestra cómo amas y qué valoras estéticamente. Por casa, indica dónde buscas armonía y placer. Los aspectos a Venus revelan cómo tu capacidad de amar interactúa con otras partes de tu psique.',
    orbitalPeriod: '225 días',
    ruledSigns: ['Tauro', 'Libra']
  },
  {
    id: 'marte',
    name: 'Marte',
    symbol: '♂',
    keywords: ['Acción', 'Deseo', 'Energía', 'Conflicto', 'Valentía'],
    psychologicalFunction: 'Marte representa la energía de acción, el impulso de deseo y la capacidad de afirmarse en el mundo. Es la fuerza que te impulsa a perseguir lo que quieres, a defenderte y a competir. Gobierna la sexualidad activa, la agresión y el coraje. En la psique, Marte es el guerrero que lucha por lo que valoras, la energía que transforma los deseos en realidad.',
    positiveExpression: [
      'Coraje para actuar y defender',
      'Energía vital abundante',
      'Capacidad de iniciar y completar proyectos',
      'Asertividad saludable',
      'Pasión dirigida constructivamente',
      'Sexualidad sana y vital'
    ],
    shadowExpression: [
      'Agresividad destructiva',
      'Impulsividad que causa daño',
      'Conflicto innecesario',
      'Crueldad y violencia',
      'Impaciencia que sabotea logros'
    ],
    inNatalChart: 'Marte por signo muestra cómo actúas y peleas por lo que deseas. Por casa, indica dónde inviertes tu energía y buscas conquistas. Los aspectos a Marte revelan cómo tu energía de acción interactúa con otras funciones psíquicas.',
    orbitalPeriod: '687 días (casi 2 años)',
    ruledSigns: ['Aries', 'Escorpio (regente tradicional)']
  },
  {
    id: 'jupiter',
    name: 'Júpiter',
    symbol: '♃',
    keywords: ['Expansión', 'Sabiduría', 'Abundancia', 'Fe', 'Viajes'],
    psychologicalFunction: 'Júpiter representa el principio de expansión, crecimiento y búsqueda de significado. Es el maestro interior que busca comprender el panorama completo, encontrar propósito y experimentar la abundancia de la vida. Gobierna la fe, el optimismo, la generosidad y la capacidad de ver oportunidades donde otros ven obstáculos. En la psique, Júpiter es la función que busca trascender los límites y conectar con algo mayor.',
    positiveExpression: [
      'Optimismo genuino y fe en la vida',
      'Sabiduría que integra conocimiento y experiencia',
      'Generosidad que fluye naturalmente',
      'Capacidad de ver el significado mayor',
      'Abundancia material y espiritual',
      'Entusiasmo que inspira a otros'
    ],
    shadowExpression: [
      'Exceso en todo (comida, gastos, promesas)',
      'Arrogancia y sensación de superioridad',
      'Promesas que no se cumplen',
      'Fanatismo religioso o ideológico',
      'Negligencia de los detalles prácticos'
    ],
    inNatalChart: 'Júpiter por signo muestra cómo buscas crecer y encontrar significado. Por casa, indica dónde experimentas expansión y buena fortuna. Los aspectos a Júpiter revelan cómo tu búsqueda de significado interactúa con otras partes de tu ser.',
    orbitalPeriod: '12 años',
    ruledSigns: ['Sagitario', 'Piscis (regente tradicional)']
  },
  {
    id: 'saturno',
    name: 'Saturno',
    symbol: '♄',
    keywords: ['Estructura', 'Límites', 'Responsabilidad', 'Tiempo', 'Maestría'],
    psychologicalFunction: 'Saturno representa el principio de limitación, estructura y maduración. Es el maestro severo que enseña a través de la experiencia, el tiempo y las consecuencias. Gobierna la responsabilidad, la disciplina, la autoridad interna y la capacidad de construir estructuras duraderas. En la psique, Saturno es la función que dice "no" para que puedas decir "sí" a lo que realmente importa.',
    positiveExpression: [
      'Disciplina que sostiene los logros',
      'Responsabilidad madura',
      'Paciencia para procesos largos',
      'Autoridad bien ganada',
      'Estructuras que perduran',
      'Sabiduría nacida de la experiencia'
    ],
    shadowExpression: [
      'Rigidez y miedo al cambio',
      'Pesimismo crónico',
      'Represión excesiva',
      'Frialdad emocional',
      'Tiranía sobre sí mismo y otros'
    ],
    inNatalChart: 'Saturno por signo muestra dónde necesitas desarrollar madurez y estructura. Por casa, indica el área de vida donde enfrentas tus mayores lecciones y responsabilidades. Los aspectos a Saturno revelan cómo tus límites interactúan con otras funciones psíquicas.',
    orbitalPeriod: '29.5 años',
    ruledSigns: ['Capricornio', 'Acuario (regente tradicional)']
  },
  {
    id: 'urano',
    name: 'Urano',
    symbol: '♅',
    keywords: ['Revolución', 'Innovación', 'Libertad', 'Originalidad', 'Despertar'],
    psychologicalFunction: 'Urano representa el principio de revolución, innovación y liberación de lo obsoleto. Es el despertador cósmico que irrumpe con insights repentinos y cambios inesperados. Gobierna la originalidad, la independencia mental, la tecnología y todo lo que rompe con lo establecido. En la psique, Urano es la función que se rebela contra las limitaciones para abrir paso a lo nuevo.',
    positiveExpression: [
      'Pensamiento original e innovador',
      'Libertad de espíritu auténtica',
      'Intuición que trasciende la lógica',
      'Capacidad de reinvención',
      'Visión futurista',
      'Aceptación de la diversidad'
    ],
    shadowExpression: [
      'Rebeldía sin causa',
      'Excentricidad alienante',
      'Inestabilidad crónica',
      'Despego emocional excesivo',
      'Destrucción de lo valioso junto con lo obsoleto'
    ],
    inNatalChart: 'Urano por signo marca la generación y cómo esa generación busca innovar. Por casa, indica dónde experimentas cambios repentinos y buscas libertad. Los aspectos a Urano revelan cómo tu necesidad de revolución interactúa con otras partes de ti.',
    orbitalPeriod: '84 años',
    ruledSigns: ['Acuario']
  },
  {
    id: 'neptuno',
    name: 'Neptuno',
    symbol: '♆',
    keywords: ['Espiritualidad', 'Sueños', 'Ilusión', 'Compasión', 'Trascendencia'],
    psychologicalFunction: 'Neptuno representa el principio de disolución, trascendencia y conexión con lo infinito. Es el portal hacia los reinos espirituales, los sueños y la imaginación sin límites. Gobierna la compasión universal, la creatividad inspirada, los estados alterados y todo lo que trasciende las barreras del ego. En la psique, Neptuno es la función que busca fusionarse con algo mayor, disolviendo los límites entre el yo y el no-yo.',
    positiveExpression: [
      'Espiritualidad genuina y profunda',
      'Compasión que abraza a todos los seres',
      'Creatividad inspirada por lo divino',
      'Intuición mística',
      'Capacidad de trascender el ego',
      'Amor incondicional'
    ],
    shadowExpression: [
      'Escapismo y adicciones',
      'Confusión y autoengaño',
      'Víctima de manipuladores',
      'Ilusiones que evitan la realidad',
      'Disolución de límites necesarios'
    ],
    inNatalChart: 'Neptuno por signo marca la generación y sus ideales espirituales colectivos. Por casa, indica dónde buscas trascendencia pero también dónde puedes confundirte. Los aspectos a Neptuno revelan cómo tu espiritualidad interactúa con otras funciones psíquicas.',
    orbitalPeriod: '165 años',
    ruledSigns: ['Piscis']
  },
  {
    id: 'pluton',
    name: 'Plutón',
    symbol: '♇',
    keywords: ['Transformación', 'Poder', 'Muerte', 'Renacimiento', 'Inconsciente'],
    psychologicalFunction: 'Plutón representa el principio de muerte, transformación y renacimiento. Es el señor del inframundo psíquico, guardián de todo lo reprimido, rechazado y enterrado. Gobierna el poder en sus formas más intensas, la sexualidad como fuerza transformadora, y los procesos de destrucción que preceden a la regeneración. En la psique, Plutón es la función que destruye lo obsoleto para que lo nuevo pueda nacer.',
    positiveExpression: [
      'Poder transformador consciente',
      'Capacidad de renacer de las crisis',
      'Profundidad psicológica',
      'Magnetismo personal',
      'Integración de la sombra',
      'Sexualidad como fuerza transformadora'
    ],
    shadowExpression: [
      'Obsesión y compulsión',
      'Manipulación y control',
      'Destrucción por la destrucción misma',
      'Abuso de poder',
      'Incapacidad de soltar'
    ],
    inNatalChart: 'Plutón por signo marca la generación y los temas colectivos de transformación. Por casa, indica dónde experimentas los procesos más intensos de muerte y renacimiento. Los aspectos a Plutón revelan cómo tu poder transformador interactúa con otras partes de tu ser.',
    orbitalPeriod: '248 años',
    ruledSigns: ['Escorpio']
  },
  {
    id: 'nodo-norte',
    name: 'Nodo Norte',
    symbol: '☊',
    keywords: ['Destino', 'Evolución', 'Propósito', 'Crecimiento', 'Futuro'],
    psychologicalFunction: 'El Nodo Norte representa la dirección evolutiva del alma, el camino de crecimiento que estamos llamados a recorrer en esta vida. No es un planeta sino un punto matemático donde la órbita lunar cruza la eclíptica, pero su significado es profundo. Señala las cualidades, experiencias y áreas de vida hacia las cuales debemos movernos para evolucionar, aunque hacerlo nos resulte incómodo porque son territorios desconocidos.',
    positiveExpression: [
      'Alineación con el propósito del alma',
      'Crecimiento más allá de la zona de confort',
      'Desarrollo de nuevas capacidades',
      'Sentido de dirección en la vida',
      'Evolución consciente'
    ],
    shadowExpression: [
      'Evitación del camino de crecimiento',
      'Quedarse en patrones conocidos pero estancantes',
      'Miedo al cambio necesario',
      'Negación del propósito evolutivo'
    ],
    inNatalChart: 'El Nodo Norte por signo muestra las cualidades que necesitas desarrollar. Por casa, indica el área de vida donde encontrarás tu mayor crecimiento. Los aspectos al Nodo revelan los recursos y desafíos en tu camino evolutivo.',
    orbitalPeriod: '18.6 años (ciclo nodal)',
    ruledSigns: []
  },
  {
    id: 'quiron',
    name: 'Quirón',
    symbol: '⚷',
    keywords: ['Herida', 'Sanación', 'Maestro', 'Puente', 'Vulnerabilidad'],
    psychologicalFunction: 'Quirón, el "sanador herido", representa nuestras heridas más profundas y la sabiduría que surge de ellas. Simboliza el dolor que no se cura completamente pero que, al abrazar, nos convierte en sanadores de otros. Es el puente entre lo personal y lo transpersonal, entre Saturno (límites conocidos) y Urano (liberación). En la psique, Quirón es la función que transforma el sufrimiento en compasión y la vulnerabilidad en don.',
    positiveExpression: [
      'Sabiduría nacida del sufrimiento',
      'Capacidad de sanar a otros desde la experiencia',
      'Integración de la vulnerabilidad',
      'Puente entre dimensiones de la experiencia',
      'Compasión profunda por el dolor ajeno'
    ],
    shadowExpression: [
      'Identificación con la herida',
      'Victimismo crónico',
      'Incapacidad de sanar a pesar del conocimiento',
      'Proyección de la herida en otros',
      'Vergüenza por la vulnerabilidad'
    ],
    inNatalChart: 'Quirón por signo muestra la naturaleza de tu herida central. Por casa, indica el área de vida donde experimentas esa herida y donde tienes potencial sanador. Los aspectos a Quirón revelan cómo tu herida interactúa con otras partes de tu psique.',
    orbitalPeriod: '50-51 años',
    ruledSigns: []
  },
  {
    id: 'lilith',
    name: 'Lilith (Luna Negra)',
    symbol: '⚸',
    keywords: ['Sombra femenina', 'Instinto', 'Rebeldía', 'Sexualidad primaria', 'Lo reprimido'],
    psychologicalFunction: 'Lilith, también conocida como la Luna Negra, representa el punto de la órbita lunar más alejado de la Tierra. Simboliza la sombra femenina, los aspectos de nuestra naturaleza instintiva que han sido reprimidos, rechazados o demonizados por la cultura. Es la fuerza salvaje e indomable, la sexualidad primaria, el rechazo a someterse. En la psique, Lilith representa aquello que nos negamos a domesticar, nuestra naturaleza más auténtica y primigenia que exige ser reconocida.',
    positiveExpression: [
      'Autenticidad radical sin disculpas',
      'Sexualidad integrada y empoderada',
      'Independencia feroz del espíritu',
      'Conexión con la sabiduría instintiva',
      'Poder personal no domesticado',
      'Rechazo de roles limitantes'
    ],
    shadowExpression: [
      'Destructividad hacia uno mismo o relaciones',
      'Sexualidad compulsiva o reprimida',
      'Resentimiento y venganza',
      'Aislamiento por rechazo a compromisos',
      'Manipulación desde las sombras'
    ],
    inNatalChart: 'Lilith por signo muestra cómo expresas (o reprimes) tu naturaleza más salvaje. Por casa, indica el área de vida donde enfrentas temas de poder, sexualidad y autenticidad. Los aspectos a Lilith revelan cómo tu sombra interactúa con otras funciones psíquicas.',
    orbitalPeriod: '9 años (ciclo de Lilith)',
    ruledSigns: []
  },
  {
    id: 'nodo-sur',
    name: 'Nodo Sur',
    symbol: '☋',
    keywords: ['Karma', 'Pasado', 'Zona de confort', 'Talentos innatos', 'Patrones'],
    psychologicalFunction: 'El Nodo Sur representa el equipaje kármico que traemos de vidas pasadas (en la visión tradicional) o los patrones profundamente arraigados desde la infancia y el linaje familiar. Es nuestra zona de confort, donde naturalmente gravitamos porque es familiar. Aunque contiene talentos y habilidades innatas, quedarse demasiado en el Nodo Sur impide el crecimiento evolutivo hacia el Nodo Norte. En la psique, representa los patrones automáticos que debemos trascender.',
    positiveExpression: [
      'Talentos y habilidades innatas desarrollados',
      'Sabiduría acumulada de experiencias pasadas',
      'Base sólida desde la cual crecer',
      'Recursos internos disponibles',
      'Comprensión profunda de ciertos temas'
    ],
    shadowExpression: [
      'Apego excesivo a lo conocido',
      'Repetición de patrones limitantes',
      'Estancamiento en la zona de confort',
      'Miedo a explorar lo nuevo',
      'Dependencia de habilidades que ya no sirven al crecimiento'
    ],
    inNatalChart: 'El Nodo Sur por signo muestra las cualidades que dominas pero de las cuales debes liberarte parcialmente. Por casa, indica el área de vida donde tiendes a refugiarte. Los aspectos al Nodo Sur revelan qué funciones psíquicas te mantienen atado al pasado.',
    orbitalPeriod: '18.6 años (ciclo nodal)',
    ruledSigns: []
  }
];

export const getPlanetById = (id: string): Planet | undefined => {
  return planets.find(planet => planet.id === id);
};
