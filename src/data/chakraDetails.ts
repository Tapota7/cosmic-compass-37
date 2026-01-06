export interface ChakraDetail {
  mantra: string;
  note: string;
  affirmations: string[];
  symptoms: {
    balanced: string[];
    blocked: string[];
    overactive: string[];
  };
  meditation: {
    title: string;
    duration: string;
    steps: string[];
  };
  exercises: {
    name: string;
    description: string;
    duration: string;
  }[];
  crystals: string[];
  essentialOils: string[];
  foods: string[];
  yogaPoses: string[];
}

export const chakraDetails: Record<string, ChakraDetail> = {
  muladhara: {
    mantra: 'LAM',
    note: 'Do (C)',
    affirmations: [
      'Estoy seguro/a y protegido/a',
      'Tengo derecho a estar aquí',
      'La Tierra me sostiene y me nutre',
      'Mis necesidades básicas siempre están cubiertas',
      'Estoy enraizado/a en el momento presente'
    ],
    symptoms: {
      balanced: [
        'Sensación de seguridad y estabilidad',
        'Buena energía física y vitalidad',
        'Capacidad de manifestar abundancia',
        'Conexión profunda con la naturaleza',
        'Confianza en el flujo de la vida'
      ],
      blocked: [
        'Miedo constante y ansiedad',
        'Problemas financieros recurrentes',
        'Sensación de no pertenecer',
        'Fatiga crónica y falta de energía',
        'Problemas con piernas, pies o columna'
      ],
      overactive: [
        'Obsesión con la seguridad material',
        'Avaricia y acumulación excesiva',
        'Rigidez mental y resistencia al cambio',
        'Agresividad y necesidad de control',
        'Sobrepeso o problemas digestivos'
      ]
    },
    meditation: {
      title: 'Meditación de Enraizamiento',
      duration: '15-20 minutos',
      steps: [
        'Siéntate cómodamente con los pies firmes en el suelo',
        'Cierra los ojos y respira profundamente tres veces',
        'Visualiza raíces rojas creciendo desde tu base hacia la Tierra',
        'Siente cómo las raíces penetran profundamente, anclándote',
        'Con cada inhalación, absorbe energía roja de la Tierra',
        'Repite el mantra "LAM" 7 veces en voz baja',
        'Visualiza una esfera roja brillante en la base de tu columna',
        'Siente la seguridad y estabilidad fluyendo hacia ti',
        'Agradece a la Tierra por su soporte constante',
        'Abre los ojos lentamente, manteniendo la sensación de arraigo'
      ]
    },
    exercises: [
      {
        name: 'Caminar descalzo',
        description: 'Camina descalzo/a sobre tierra, pasto o arena. Siente cada paso conectándote con la Tierra. Visualiza raíces creciendo desde tus pies.',
        duration: '10-15 minutos'
      },
      {
        name: 'Golpeo de pies',
        description: 'De pie, golpea suavemente el suelo alternando los pies mientras respiras profundamente. Esto activa la energía del chakra raíz.',
        duration: '3-5 minutos'
      },
      {
        name: 'Sentadillas conscientes',
        description: 'Realiza sentadillas lentas y conscientes, visualizando energía roja subiendo desde la Tierra con cada movimiento.',
        duration: '5 minutos, 10-15 repeticiones'
      }
    ],
    crystals: ['Jaspe rojo', 'Obsidiana negra', 'Hematita', 'Granate', 'Turmalina negra'],
    essentialOils: ['Pachulí', 'Cedro', 'Vetiver', 'Sándalo', 'Mirra'],
    foods: ['Remolacha', 'Tomates', 'Fresas', 'Carnes rojas', 'Proteínas', 'Raíces'],
    yogaPoses: ['Tadasana (Postura de la Montaña)', 'Virabhadrasana I (Guerrero I)', 'Malasana (Sentadilla)', 'Balasana (Postura del Niño)']
  },
  svadhisthana: {
    mantra: 'VAM',
    note: 'Re (D)',
    affirmations: [
      'Merezco experimentar placer y alegría',
      'Mis emociones fluyen libremente',
      'Abrazo mi creatividad y sensualidad',
      'Estoy abierto/a a nuevas experiencias',
      'Me permito sentir profundamente'
    ],
    symptoms: {
      balanced: [
        'Creatividad fluida y abundante',
        'Sexualidad sana y placentera',
        'Equilibrio emocional',
        'Capacidad de experimentar placer sin culpa',
        'Relaciones íntimas satisfactorias'
      ],
      blocked: [
        'Represión emocional y sexual',
        'Falta de creatividad o inspiración',
        'Culpa relacionada con el placer',
        'Problemas reproductivos o urinarios',
        'Incapacidad de conectar íntimamente'
      ],
      overactive: [
        'Adicciones emocionales o sexuales',
        'Dependencia emocional',
        'Emociones descontroladas',
        'Manipulación a través del sexo o emociones',
        'Obsesión con el placer'
      ]
    },
    meditation: {
      title: 'Meditación del Flujo del Agua',
      duration: '15-20 minutos',
      steps: [
        'Acuéstate cómodamente o siéntate cerca del agua si es posible',
        'Coloca las manos sobre tu vientre bajo',
        'Visualiza un lago naranja sereno en tu zona sacra',
        'Observa cómo pequeñas olas se forman y fluyen suavemente',
        'Con cada inhalación, el lago brilla más intensamente',
        'Repite el mantra "VAM" 7 veces, sintiendo vibrar el abdomen',
        'Permite que cualquier emoción bloqueada se libere en el agua',
        'Visualiza la creatividad como peces dorados nadando en el lago',
        'Siente gratitud por tu capacidad de sentir y crear',
        'Termina con tres respiraciones profundas'
      ]
    },
    exercises: [
      {
        name: 'Danza libre',
        description: 'Pon música que te mueva y deja que tu cuerpo baile libremente, especialmente moviendo las caderas en círculos.',
        duration: '10-15 minutos'
      },
      {
        name: 'Baño ritual',
        description: 'Toma un baño con sales de naranja, visualizando el agua limpiando y energizando tu chakra sacro.',
        duration: '20-30 minutos'
      },
      {
        name: 'Círculos de cadera',
        description: 'De pie, realiza círculos amplios con las caderas en ambas direcciones mientras respiras conscientemente.',
        duration: '5 minutos'
      }
    ],
    crystals: ['Cornalina', 'Ámbar', 'Piedra luna', 'Ópalo de fuego', 'Calcita naranja'],
    essentialOils: ['Naranja dulce', 'Ylang ylang', 'Sándalo', 'Jazmín', 'Neroli'],
    foods: ['Naranjas', 'Zanahorias', 'Mangos', 'Calabaza', 'Almendras', 'Miel'],
    yogaPoses: ['Baddha Konasana (Mariposa)', 'Eka Pada Rajakapotasana (Paloma)', 'Supta Baddha Konasana', 'Ananda Balasana (Bebé Feliz)']
  },
  manipura: {
    mantra: 'RAM',
    note: 'Mi (E)',
    affirmations: [
      'Soy fuerte, capaz y poderoso/a',
      'Tengo el poder de crear mi realidad',
      'Honro mi verdad interior',
      'Merezco éxito y abundancia',
      'Confío en mis decisiones'
    ],
    symptoms: {
      balanced: [
        'Confianza y autoestima saludables',
        'Capacidad de tomar decisiones claras',
        'Buena digestión y metabolismo',
        'Determinación y fuerza de voluntad',
        'Liderazgo natural sin necesidad de control'
      ],
      blocked: [
        'Baja autoestima y autodesvalorización',
        'Dificultad para tomar decisiones',
        'Problemas digestivos crónicos',
        'Sensación de impotencia',
        'Falta de propósito o dirección'
      ],
      overactive: [
        'Necesidad excesiva de control',
        'Ira y agresividad frecuentes',
        'Perfeccionismo extremo',
        'Adicción al trabajo',
        'Problemas de hígado o estómago'
      ]
    },
    meditation: {
      title: 'Meditación del Sol Interior',
      duration: '15-20 minutos',
      steps: [
        'Siéntate erguido/a con las manos sobre el plexo solar',
        'Visualiza un sol dorado-amarillo brillando en tu estómago',
        'Con cada inhalación, el sol crece y brilla más intensamente',
        'Siente el calor y la energía expandiéndose por tu cuerpo',
        'Repite el mantra "RAM" 7 veces con fuerza desde el abdomen',
        'Visualiza rayos de luz dorada irradiando desde tu centro',
        'Afirma: "Yo soy poder. Yo soy luz. Yo soy capaz."',
        'Siente la confianza y determinación llenando cada célula',
        'Visualiza logros pasados que te hicieron sentir fuerte',
        'Cierra imaginando el sol permaneciendo brillante en tu interior'
      ]
    },
    exercises: [
      {
        name: 'Respiración de fuego',
        description: 'Inhala profundamente y exhala rápidamente por la nariz, contrayendo el abdomen. Empieza con 30 segundos y aumenta gradualmente.',
        duration: '1-3 minutos'
      },
      {
        name: 'Plancha',
        description: 'Mantén la posición de plancha mientras visualizas energía amarilla fortaleciéndote. Respira profundamente.',
        duration: '30 segundos - 2 minutos'
      },
      {
        name: 'Tomar el sol',
        description: 'Exponerte al sol de la mañana en la zona del plexo solar, visualizando absorber energía solar directamente.',
        duration: '10-15 minutos'
      }
    ],
    crystals: ['Citrino', 'Ojo de tigre', 'Pirita', 'Ámbar', 'Topacio amarillo'],
    essentialOils: ['Limón', 'Jengibre', 'Manzanilla', 'Bergamota', 'Romero'],
    foods: ['Plátanos', 'Piña', 'Maíz', 'Granos enteros', 'Jengibre', 'Cúrcuma'],
    yogaPoses: ['Navasana (Barco)', 'Ustrasana (Camello)', 'Phalakasana (Plancha)', 'Dhanurasana (Arco)']
  },
  anahata: {
    mantra: 'YAM',
    note: 'Fa (F)',
    affirmations: [
      'Me amo y acepto completamente',
      'Doy y recibo amor libremente',
      'Perdono y libero el pasado',
      'Mi corazón está abierto a la compasión',
      'Soy digno/a de amor incondicional'
    ],
    symptoms: {
      balanced: [
        'Amor incondicional hacia uno mismo y otros',
        'Capacidad de perdonar genuinamente',
        'Relaciones armoniosas y equilibradas',
        'Compasión sin agotamiento',
        'Corazón físico saludable'
      ],
      blocked: [
        'Incapacidad de perdonar o soltar',
        'Miedo a la intimidad emocional',
        'Sentimientos de soledad o aislamiento',
        'Problemas cardíacos o pulmonares',
        'Dificultad para dar o recibir amor'
      ],
      overactive: [
        'Codependencia emocional',
        'Sacrificio excesivo por otros',
        'Falta de límites saludables',
        'Celos y posesividad',
        'Dar para manipular o recibir'
      ]
    },
    meditation: {
      title: 'Meditación del Corazón Radiante',
      duration: '20 minutos',
      steps: [
        'Siéntate cómodamente con la espalda recta',
        'Coloca ambas manos sobre tu corazón',
        'Respira lentamente, sintiendo el latido bajo tus manos',
        'Visualiza una luz verde esmeralda brillando en tu pecho',
        'Con cada latido, la luz se expande como ondas de amor',
        'Repite el mantra "YAM" 7 veces suavemente',
        'Piensa en alguien que amas y envíale luz verde',
        'Ahora envía esa misma luz hacia ti mismo/a',
        'Visualiza la luz conectándote con todos los seres',
        'Afirma: "Mi corazón es infinito. Doy y recibo amor."',
        'Si hay dolor, permítele disolverse en la luz verde',
        'Termina con gratitud por tu capacidad de amar'
      ]
    },
    exercises: [
      {
        name: 'Abrazo de 20 segundos',
        description: 'Abraza a alguien (o a ti mismo) durante al menos 20 segundos. Esto libera oxitocina y abre el chakra corazón.',
        duration: '20-30 segundos'
      },
      {
        name: 'Carta de perdón',
        description: 'Escribe una carta de perdón (a otros o a ti mismo). No necesitas enviarla, solo escribirla libera el corazón.',
        duration: '15-30 minutos'
      },
      {
        name: 'Respiración de corazón abierto',
        description: 'Inhala expandiendo el pecho, abre los brazos. Exhala llevando las manos al corazón. Repite sintiendo gratitud.',
        duration: '5-10 minutos'
      }
    ],
    crystals: ['Cuarzo rosa', 'Jade verde', 'Malaquita', 'Aventurina verde', 'Rodocrosita'],
    essentialOils: ['Rosa', 'Geranio', 'Melisa', 'Eucalipto', 'Menta'],
    foods: ['Espinacas', 'Brócoli', 'Aguacate', 'Kiwi', 'Té verde', 'Cacao puro'],
    yogaPoses: ['Ustrasana (Camello)', 'Bhujangasana (Cobra)', 'Matsyasana (Pez)', 'Anahatasana (Corazón derretido)']
  },
  vishuddha: {
    mantra: 'HAM',
    note: 'Sol (G)',
    affirmations: [
      'Mi voz importa y merece ser escuchada',
      'Expreso mi verdad con amor y claridad',
      'Escucho activamente a los demás',
      'Mis palabras crean mi realidad',
      'Comunico mis necesidades con facilidad'
    ],
    symptoms: {
      balanced: [
        'Comunicación clara y auténtica',
        'Capacidad de escuchar profundamente',
        'Expresión creativa fluida',
        'Voz fuerte y resonante',
        'Tiroides y garganta saludables'
      ],
      blocked: [
        'Miedo a hablar o expresarse',
        'Dificultad para decir la verdad',
        'Problemas de garganta frecuentes',
        'Sensación de nudo en la garganta',
        'Incapacidad de escuchar a otros'
      ],
      overactive: [
        'Hablar excesivamente o interrumpir',
        'Crítica constante hacia otros',
        'Chisme y comunicación negativa',
        'Dificultad para escuchar',
        'Uso manipulativo de las palabras'
      ]
    },
    meditation: {
      title: 'Meditación de la Verdad Interior',
      duration: '15-20 minutos',
      steps: [
        'Siéntate con el cuello relajado y la cabeza erguida',
        'Coloca suavemente las manos en la garganta',
        'Visualiza una esfera de luz azul cielo en tu garganta',
        'Con cada inhalación, la luz se intensifica',
        'Repite el mantra "HAM" 7 veces, sintiendo vibrar la garganta',
        'Visualiza palabras de luz azul saliendo de tu boca',
        'Afirma: "Hablo mi verdad con amor y claridad"',
        'Imagina conversaciones pasadas sanándose con luz azul',
        'Visualiza tu voz llegando al mundo con impacto positivo',
        'Termina tarareando suavemente, sintiendo la vibración'
      ]
    },
    exercises: [
      {
        name: 'Canto o tarareo',
        description: 'Canta tu canción favorita o tararea escalas. Esto activa y desbloquea el chakra de la garganta naturalmente.',
        duration: '10-15 minutos'
      },
      {
        name: 'Journaling de verdad',
        description: 'Escribe libremente sobre algo que no has podido expresar. No censures nada. Luego puedes quemarlo o guardarlo.',
        duration: '15-20 minutos'
      },
      {
        name: 'León rugiente',
        description: 'Inhala profundamente, abre grande la boca, saca la lengua y exhala con un "AAAHH" fuerte. Libera tensión acumulada.',
        duration: '3-5 repeticiones'
      }
    ],
    crystals: ['Aguamarina', 'Lapislázuli', 'Turquesa', 'Sodalita', 'Celestita'],
    essentialOils: ['Menta', 'Eucalipto', 'Manzanilla azul', 'Ciprés', 'Salvia'],
    foods: ['Arándanos', 'Moras', 'Ciruelas', 'Algas marinas', 'Miel', 'Limón'],
    yogaPoses: ['Sarvangasana (Vela)', 'Halasana (Arado)', 'Matsyasana (Pez)', 'Simhasana (León)']
  },
  ajna: {
    mantra: 'OM / AUM',
    note: 'La (A)',
    affirmations: [
      'Confío en mi intuición y sabiduría interior',
      'Veo claramente la verdad en todas las situaciones',
      'Estoy conectado/a con la guía universal',
      'Mi mente está clara y enfocada',
      'Recibo mensajes del universo con facilidad'
    ],
    symptoms: {
      balanced: [
        'Intuición clara y confiable',
        'Visión tanto del panorama general como de detalles',
        'Sueños vívidos y significativos',
        'Capacidad de visualización fuerte',
        'Conexión con la guía interior'
      ],
      blocked: [
        'Falta de claridad o confusión mental',
        'Dificultad para recordar sueños',
        'Ignorar la intuición',
        'Dolores de cabeza frecuentes',
        'Problemas de visión o sinusales'
      ],
      overactive: [
        'Fantasías excesivas desconectadas de la realidad',
        'Alucinaciones o delirios',
        'Dificultad para concentrarse',
        'Pesadillas frecuentes',
        'Sensación de abrumamiento psíquico'
      ]
    },
    meditation: {
      title: 'Meditación del Ojo Interior',
      duration: '15-20 minutos',
      steps: [
        'Siéntate en meditación con los ojos cerrados',
        'Lleva suavemente tu atención al espacio entre las cejas',
        'Visualiza un ojo índigo profundo abriéndose lentamente',
        'Inhala energía hacia este punto, exhala expandiendo la visión',
        'Repite el mantra "OM" 7 veces lenta y profundamente',
        'Pregunta: "¿Qué necesito ver claramente ahora?"',
        'Permanece en silencio receptivo, sin forzar respuestas',
        'Observa cualquier imagen, color o sensación que surja',
        'Visualiza el tercer ojo como un faro de luz índigo',
        'Afirma: "Veo la verdad. Confío en mi visión interior."',
        'Regresa lentamente, manteniendo la conexión intuitiva'
      ]
    },
    exercises: [
      {
        name: 'Gazing (contemplación)',
        description: 'Mira fijamente una vela o punto durante 1-3 minutos sin parpadear. Luego cierra los ojos y observa la imagen interna.',
        duration: '5-10 minutos'
      },
      {
        name: 'Diario de sueños',
        description: 'Cada mañana, antes de levantarte, escribe cualquier sueño que recuerdes. Esto fortalece la conexión con el tercer ojo.',
        duration: '5-10 minutos al despertar'
      },
      {
        name: 'Visualización guiada',
        description: 'Practica visualizar escenas detalladas con los ojos cerrados: lugares, objetos, colores. Esto desarrolla el ojo interior.',
        duration: '10-15 minutos'
      }
    ],
    crystals: ['Amatista', 'Lapislázuli', 'Fluorita', 'Azurita', 'Labradorita'],
    essentialOils: ['Lavanda', 'Incienso', 'Sándalo', 'Clary sage', 'Romero'],
    foods: ['Uvas moradas', 'Arándanos', 'Berenjena', 'Chocolate negro', 'Vino tinto (moderado)', 'Omega-3'],
    yogaPoses: ['Balasana (Niño) con frente en el suelo', 'Padmasana (Loto)', 'Makarasana (Cocodrilo)', 'Sirsasana (Parada de cabeza)']
  },
  sahasrara: {
    mantra: 'Silencio / OM',
    note: 'Si (B)',
    affirmations: [
      'Soy uno/a con la energía universal',
      'Estoy conectado/a con la fuente divina',
      'La sabiduría infinita fluye a través de mí',
      'Confío en el plan divino de mi vida',
      'Soy un ser espiritual teniendo una experiencia humana'
    ],
    symptoms: {
      balanced: [
        'Sentido de propósito y conexión espiritual',
        'Experiencias de paz y unidad profundas',
        'Sabiduría y comprensión más allá del intelecto',
        'Sentido de gratitud y asombro por la vida',
        'Conexión con algo más grande que uno mismo'
      ],
      blocked: [
        'Sensación de desconexión o vacío existencial',
        'Escepticismo extremo hacia lo espiritual',
        'Falta de propósito o significado',
        'Sensación de separación de otros y el universo',
        'Depresión existencial o nihilismo'
      ],
      overactive: [
        'Desconexión de la realidad terrenal',
        'Obsesión espiritual que evita responsabilidades',
        'Sentirse "superior" espiritualmente',
        'Incapacidad de funcionar en el mundo material',
        'Disociación o "escapismo espiritual"'
      ]
    },
    meditation: {
      title: 'Meditación de la Luz Divina',
      duration: '20-30 minutos',
      steps: [
        'Siéntate en silencio completo, idealmente al amanecer',
        'Visualiza una flor de loto de mil pétalos en tu coronilla',
        'Los pétalos son violeta y blanco, brillando suavemente',
        'Imagina un rayo de luz blanca pura descendiendo desde arriba',
        'La luz entra por tu corona y llena todo tu ser',
        'No uses mantra vocal; simplemente observa el silencio interior',
        'Si pensamientos surgen, déjalos pasar como nubes',
        'Siente cómo te disuelves en la luz, perdiendo límites',
        'Permanece en este estado de unidad el tiempo que desees',
        'Afirma: "Yo soy luz. Yo soy amor. Yo soy uno con todo."',
        'Regresa lentamente, trayendo la paz contigo',
        'Antes de abrir los ojos, siente gratitud profunda'
      ]
    },
    exercises: [
      {
        name: 'Meditación silenciosa',
        description: 'Simplemente siéntate en silencio sin técnica, mantra o visualización. Solo sé consciente del ser.',
        duration: '20-30 minutos'
      },
      {
        name: 'Oración o devoción',
        description: 'Practica cualquier forma de oración o devoción que resuene contigo, conectándote con lo sagrado.',
        duration: '10-20 minutos'
      },
      {
        name: 'Contemplación de la muerte',
        description: 'Reflexiona sobre la impermanencia de la vida. Esto no es morboso, sino liberador, conectándote con lo eterno.',
        duration: '10-15 minutos'
      }
    ],
    crystals: ['Cuarzo transparente', 'Amatista', 'Selenita', 'Diamante Herkimer', 'Howlita'],
    essentialOils: ['Incienso', 'Loto', 'Rosa', 'Mirra', 'Flor de azahar'],
    foods: ['Ayuno consciente', 'Agua pura', 'Luz solar', 'Alimentos ligeros y puros'],
    yogaPoses: ['Savasana (Cadáver)', 'Sirsasana (Parada de cabeza)', 'Padmasana (Loto)', 'Meditación sentada']
  }
};

export const getChakraDetailById = (id: string): ChakraDetail | undefined => {
  return chakraDetails[id];
};
