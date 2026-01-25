export interface BlogCategory {
  id: string;
  name: string;
  emoji: string;
  description: string;
  gradient: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image?: string;
  author: string;
  publishedAt: string;
  readingTime: number;
  featured?: boolean;
}

export const blogCategories: BlogCategory[] = [
  {
    id: 'astrologia',
    name: 'Astrología',
    emoji: '⭐',
    description: 'Artículos sobre signos, planetas, casas y aspectos astrológicos',
    gradient: 'from-indigo-500/30 to-purple-900/40',
  },
  {
    id: 'numerologia',
    name: 'Numerología',
    emoji: '🔢',
    description: 'El poder de los números y su significado en tu vida',
    gradient: 'from-amber-500/30 to-orange-900/40',
  },
  {
    id: 'transitos',
    name: 'Tránsitos y Predicciones',
    emoji: '🌙',
    description: 'Movimientos planetarios y sus efectos en el presente',
    gradient: 'from-blue-500/30 to-cyan-900/40',
  },
  {
    id: 'autoconocimiento',
    name: 'Autoconocimiento',
    emoji: '🧘',
    description: 'Herramientas para el desarrollo personal y espiritual',
    gradient: 'from-pink-500/30 to-rose-900/40',
  },
  {
    id: 'tutoriales',
    name: 'Tutoriales',
    emoji: '📚',
    description: 'Guías paso a paso para aprender astrología y numerología',
    gradient: 'from-emerald-500/30 to-teal-900/40',
  },
];

export const blogArticles: BlogArticle[] = [
  {
    slug: 'como-leer-tu-carta-natal-guia-principiantes',
    title: 'Cómo leer tu Carta Natal: Guía para principiantes',
    excerpt: 'Descubre los elementos fundamentales de tu carta natal y aprende a interpretar tu Sol, Luna, Ascendente y los planetas en signos y casas.',
    content: `
## ¿Qué es una Carta Natal?

La carta natal, también conocida como carta astral o mapa natal, es una fotografía del cielo en el momento exacto de tu nacimiento. Es tu huella cósmica única, un mapa que revela tus talentos, desafíos, propósito de vida y potenciales.

## Los Tres Pilares: Sol, Luna y Ascendente

### El Sol ☀️
Tu Sol representa tu esencia, tu identidad central y lo que vienes a brillar en esta vida. Es la energía que te da vitalidad y propósito.

- **En signos de Fuego** (Aries, Leo, Sagitario): Expresión directa, entusiasta y creativa
- **En signos de Tierra** (Tauro, Virgo, Capricornio): Expresión práctica, estable y productiva
- **En signos de Aire** (Géminis, Libra, Acuario): Expresión mental, social y comunicativa
- **En signos de Agua** (Cáncer, Escorpio, Piscis): Expresión emocional, intuitiva y profunda

### La Luna 🌙
Tu Luna representa tu mundo emocional, tus necesidades de seguridad, cómo te nutres y cuidas de ti mismo. Es tu niño interior.

La casa donde está tu Luna indica el área de vida donde buscas seguridad emocional y dónde necesitas sentirte "en casa".

### El Ascendente ⬆️
Tu Ascendente es la máscara que muestras al mundo, cómo te perciben los demás al conocerte. También indica el tipo de experiencias que atraes y tu enfoque general hacia la vida.

## Los Planetas Personales

Además de Sol y Luna, los planetas personales nos dan información crucial:

- **Mercurio**: Tu mente, comunicación y forma de aprender
- **Venus**: Tus valores, amor, dinero y estética
- **Marte**: Tu energía, acción, deseo y cómo persigues objetivos

## Las 12 Casas

Las casas dividen la carta en 12 áreas de vida:

1. **Casa 1**: Identidad y apariencia
2. **Casa 2**: Recursos y valores
3. **Casa 3**: Comunicación y hermanos
4. **Casa 4**: Hogar y familia
5. **Casa 5**: Creatividad y romance
6. **Casa 6**: Trabajo y salud
7. **Casa 7**: Relaciones y asociaciones
8. **Casa 8**: Transformación y recursos compartidos
9. **Casa 9**: Filosofía y viajes
10. **Casa 10**: Carrera y reputación
11. **Casa 11**: Amigos y metas
12. **Casa 12**: Espiritualidad e inconsciente

## Primeros Pasos para Leer tu Carta

1. **Identifica tu Sol, Luna y Ascendente** - Los tres pilares
2. **Observa en qué casas están** - Áreas de vida activadas
3. **Busca patrones elementales** - ¿Predomina fuego, tierra, aire o agua?
4. **Nota los aspectos mayores** - Conjunciones, oposiciones, trígonos, cuadraturas
5. **Lee los nodos lunares** - Tu camino evolutivo

## Conclusión

Leer tu carta natal es un viaje de autoconocimiento que dura toda la vida. Cada capa que descubres te acerca más a comprender tu propósito y potencial único. ¡Disfruta la exploración!
    `,
    category: 'tutoriales',
    author: 'Sabiduría Cuántica',
    publishedAt: '2026-01-20',
    readingTime: 12,
    featured: true,
  },
  {
    slug: 'numeros-maestros-11-22-33-explicados',
    title: 'Los Números Maestros: 11, 22 y 33 explicados',
    excerpt: 'Los números maestros son portales de alta vibración espiritual. Descubre su significado profundo y cómo influyen en tu camino de vida.',
    content: `
## ¿Qué son los Números Maestros?

En numerología, los números maestros son aquellos que no se reducen a un solo dígito: 11, 22 y 33. Estos números vibran en una frecuencia más alta y representan un mayor potencial espiritual, pero también mayores desafíos.

## El Número 11: El Iluminador

### Vibración
El 11 es el número de la intuición, la iluminación espiritual y la conexión con dimensiones superiores. Es conocido como "el canal" porque actúa como puente entre lo material y lo espiritual.

### Características
- **Altamente intuitivo** - Percepciones más allá de lo racional
- **Visionario** - Capacidad de ver más allá de lo evidente
- **Sensible** - Gran receptividad emocional y energética
- **Inspirador** - Talento para motivar a otros

### Desafíos
- Ansiedad y nerviosismo por la hipersensibilidad
- Dificultad para "aterrizar" ideas en la realidad
- Tendencia a la indecisión

### Misión de Vida
Inspirar y elevar la consciencia colectiva a través de la creatividad, la enseñanza espiritual o el arte.

## El Número 22: El Constructor Maestro

### Vibración
El 22 es el número del constructor maestro, capaz de materializar grandes visiones en la realidad. Combina la intuición del 11 con la practicidad del 4.

### Características
- **Visionario práctico** - Sueña en grande y ejecuta
- **Liderazgo natural** - Capacidad de organizar grandes proyectos
- **Diplomático** - Habilidad para unir personas y recursos
- **Perfeccionista** - Alto estándar de excelencia

### Desafíos
- Presión por el alto potencial
- Frustración si no logra materializar su visión
- Tendencia al workaholismo

### Misión de Vida
Crear proyectos, organizaciones o legados que beneficien a la humanidad a gran escala.

## El Número 33: El Maestro Sanador

### Vibración
El 33 es el número del amor incondicional y la sanación. Es el más raro y elevado de los números maestros, combinando la inspiración del 11 con la manifestación del 22.

### Características
- **Compasivo** - Amor profundo por todos los seres
- **Sanador nato** - Don para aliviar el sufrimiento
- **Altruista** - Servicio desinteresado a los demás
- **Sabio** - Comprensión profunda de las leyes universales

### Desafíos
- Tendencia al sacrificio excesivo
- Dificultad para poner límites
- Cargar con el dolor ajeno

### Misión de Vida
Sanar, enseñar y elevar a otros a través del amor incondicional y el servicio.

## ¿Cómo Saber si Tienes un Número Maestro?

Puedes tener números maestros en diferentes posiciones de tu perfil numerológico:

- **Número de Vida** (suma de fecha de nacimiento)
- **Número de Destino** (suma de nombre completo)
- **Número del Alma** (suma de vocales del nombre)

Si al calcular obtienes 11, 22 o 33, no lo reduzcas. Ese es tu número maestro.

## Vivir con un Número Maestro

Tener un número maestro es un privilegio y una responsabilidad. La clave es:

1. **Honrar tu sensibilidad** sin dejarte abrumar
2. **Aterrizar tus visiones** paso a paso
3. **Servir desde el amor** sin olvidarte de ti mismo
4. **Confiar en tu camino** aunque sea diferente

Recuerda: los números maestros también pueden vivirse en su octava baja (11→2, 22→4, 33→6) cuando no estás alineado con su potencial superior.
    `,
    category: 'numerologia',
    author: 'Sabiduría Cuántica',
    publishedAt: '2026-01-18',
    readingTime: 8,
  },
  {
    slug: 'transitos-saturno-lecciones-crecimiento',
    title: 'Tránsitos de Saturno: Lecciones y Crecimiento',
    excerpt: 'Saturno es el gran maestro del zodiaco. Aprende cómo sus tránsitos te enseñan disciplina, madurez y te ayudan a construir bases sólidas.',
    content: `
## Saturno: El Gran Maestro

Saturno, conocido como el "Señor del Karma" o el "Gran Maléfico" en la astrología tradicional, es en realidad nuestro mayor maestro. Sus tránsitos nos confrontan con la realidad, nos exigen madurez y nos ayudan a construir estructuras sólidas y duraderas.

## El Ciclo de Saturno

Saturno tarda aproximadamente 29.5 años en dar la vuelta completa al zodiaco. Esto significa que:

- **A los ~29 años**: Primer Retorno de Saturno
- **A los ~58 años**: Segundo Retorno de Saturno
- **A los ~87 años**: Tercer Retorno de Saturno

### El Primer Retorno de Saturno (27-30 años)

Este es el tránsito más famoso y transformador. Marca la transición de la juventud a la verdadera adultez.

**Temas que trae:**
- Cuestionamiento de la carrera y dirección de vida
- Evaluación de relaciones: ¿construyen o limitan?
- Confrontación con responsabilidades evitadas
- Llamado a definir tu propia autoridad

**Cómo navegarlo:**
1. Acepta que es tiempo de madurar
2. Suelta lo que ya no te sirve
3. Comprométete con metas a largo plazo
4. Construye disciplina y rutinas

## Saturno por las Casas

### Saturno en Casa 1
Tiempo de redefinir tu identidad. Puedes sentirte más serio o cargar más responsabilidades sobre ti mismo.

### Saturno en Casa 2
Lecciones sobre dinero, recursos y autoestima. Puede haber restricciones financieras que te enseñan a valorar lo esencial.

### Saturno en Casa 4
Temas familiares y del hogar salen a la superficie. Posibles responsabilidades con padres o necesidad de establecer raíces.

### Saturno en Casa 7
Las relaciones son puestas a prueba. Compromisos serios o finales de relaciones que no tienen base sólida.

### Saturno en Casa 10
Tu carrera y reputación están bajo escrutinio. Tiempo de asumir más responsabilidad profesional o cambiar de dirección.

## Saturno en Aspecto a Planetas Natales

### Saturno conjunción Sol
Momento de definir quién eres realmente. Puede sentirse pesado, pero construye autenticidad.

### Saturno conjunción Luna
Emociones intensas sobre seguridad y familia. Tiempo de madurar emocionalmente.

### Saturno cuadratura Venus
Relaciones y finanzas bajo presión. Se revela lo que es real vs. ilusión.

### Saturno oposición Marte
Frustración con la acción y los deseos. Aprender a canalizar la energía de forma madura.

## Claves para Transitar a Saturno

1. **No resistas**: Lo que resistes, persiste. Acepta las lecciones.
2. **Trabaja duro**: Saturno recompensa el esfuerzo sostenido.
3. **Sé paciente**: Los resultados llegan con el tiempo.
4. **Asume responsabilidad**: Deja de culpar a otros.
5. **Construye estructura**: Rutinas, disciplina, orden.

## El Regalo de Saturno

Aunque sus tránsitos pueden sentirse duros, Saturno nos deja regalos duraderos:

- **Madurez** y sabiduría ganada
- **Logros** basados en esfuerzo real
- **Estructuras** que sostienen tu vida
- **Autoridad** sobre ti mismo
- **Respeto** por tus límites y los de otros

Recuerda: después de todo tránsito de Saturno, sales más fuerte, más sabio y más alineado con tu verdadero camino.
    `,
    category: 'transitos',
    author: 'Sabiduría Cuántica',
    publishedAt: '2026-01-15',
    readingTime: 10,
  },
  {
    slug: 'numerologia-calcula-ano-personal-2026',
    title: 'Numerología: Calcula tu Año Personal 2026',
    excerpt: 'Tu Año Personal revela las energías y oportunidades que te acompañarán durante el año. Aprende a calcularlo y descubre qué te espera en 2026.',
    content: `
## ¿Qué es el Año Personal?

El Año Personal es un ciclo numerológico de 9 años que indica las energías predominantes y los temas principales que vivirás durante ese período. Cada año tiene una vibración diferente que influye en tus experiencias.

## Cómo Calcular tu Año Personal 2026

La fórmula es simple:

**Día de nacimiento + Mes de nacimiento + Año actual (2026) = Año Personal**

### Ejemplo:
Si naciste el 15 de marzo:
- Día: 1 + 5 = 6
- Mes: 0 + 3 = 3
- Año 2026: 2 + 0 + 2 + 6 = 10 → 1 + 0 = 1
- Total: 6 + 3 + 1 = 10 → 1 + 0 = **Año Personal 1**

## Significado de Cada Año Personal

### Año Personal 1: Nuevos Comienzos 🌱
Es tiempo de iniciar. Nuevos proyectos, nuevas direcciones. La energía favorece la independencia y tomar la iniciativa. Planta semillas para el futuro.

**Palabras clave**: Inicio, independencia, liderazgo, valentía

### Año Personal 2: Cooperación y Paciencia 🤝
Año para cultivar relaciones, colaborar y tener paciencia. Los resultados del año 1 necesitan tiempo. Desarrolla diplomacia y sensibilidad.

**Palabras clave**: Asociación, equilibrio, receptividad, detalles

### Año Personal 3: Expresión Creativa 🎨
Año de alegría, creatividad y expresión. Socializa, comunica, crea. Es tiempo de disfrutar y compartir tus talentos con el mundo.

**Palabras clave**: Creatividad, comunicación, alegría, expansión social

### Año Personal 4: Construcción y Trabajo 🔨
Año para construir bases sólidas. Trabajo duro, disciplina, organización. No es glamoroso, pero es esencial para tu futuro.

**Palabras clave**: Estructura, esfuerzo, estabilidad, fundamentos

### Año Personal 5: Cambio y Libertad 🦋
Año dinámico lleno de cambios, viajes y nuevas experiencias. Abraza la libertad pero evita la dispersión. Aventura y transformación.

**Palabras clave**: Cambio, libertad, aventura, versatilidad

### Año Personal 6: Amor y Responsabilidad 💕
Año centrado en familia, hogar y relaciones. Responsabilidades aumentan pero también el amor. Matrimonios, nacimientos, cuidado de otros.

**Palabras clave**: Familia, amor, servicio, armonía del hogar

### Año Personal 7: Introspección y Sabiduría 🔮
Año para ir hacia adentro. Estudio, meditación, reflexión profunda. Menos acción externa, más desarrollo interno. Busca respuestas espirituales.

**Palabras clave**: Introspección, espiritualidad, análisis, soledad productiva

### Año Personal 8: Poder y Abundancia 💰
Año de cosecha material y reconocimiento. Negocios, finanzas, éxito profesional. El karma (bueno o malo) se manifiesta. Asume tu poder.

**Palabras clave**: Abundancia, autoridad, logros, karma material

### Año Personal 9: Culminación y Liberación 🌅
Año de cierre. Termina ciclos, suelta lo viejo, perdona. Es preparación para el nuevo ciclo que viene. Servicio humanitario destacado.

**Palabras clave**: Culminación, liberación, perdón, servicio

## Tu Año Personal Comienza en tu Cumpleaños

Un detalle importante: tu Año Personal no empieza el 1 de enero, sino en tu cumpleaños. Entre enero y tu cumpleaños, aún estás en la energía del año anterior.

## Cómo Aprovechar tu Año Personal

1. **Identifica tu número** usando la fórmula
2. **Lee la descripción** y reflexiona cómo aplica a tu vida
3. **Alinea tus acciones** con la energía del año
4. **Respeta el ciclo**: cada año tiene su propósito
5. **No fuerces**: si es año 7, no esperes resultados de año 8

## Reflexión Final

El Año Personal es una guía, no un destino fijo. Conocer tu ciclo te ayuda a fluir con las energías en lugar de resistirlas. ¿Cuál es tu Año Personal 2026?
    `,
    category: 'numerologia',
    author: 'Sabiduría Cuántica',
    publishedAt: '2026-01-10',
    readingTime: 6,
    featured: true,
  },
  {
    slug: 'luna-llena-vs-luna-nueva-cuando-manifestar',
    title: 'Luna Llena vs Luna Nueva: ¿Cuándo manifestar?',
    excerpt: 'Las fases lunares tienen energías diferentes para manifestar. Descubre cuándo es mejor iniciar proyectos y cuándo soltar lo que ya no sirve.',
    content: `
## El Poder de la Luna

La Luna ha sido venerada en todas las culturas como símbolo de los ciclos, las emociones y lo femenino. En astrología, la Luna representa nuestro mundo emocional, nuestras necesidades y nuestra intuición.

Cada fase lunar tiene una energía diferente que podemos aprovechar para manifestar, crear y transformar nuestra vida.

## Las Cuatro Fases Principales

### 🌑 Luna Nueva
**Energía**: Comienzos, semillas, intenciones

La Luna Nueva ocurre cuando Sol y Luna están en el mismo signo (conjunción). Es el momento de mayor oscuridad lunar, pero también de mayor potencial.

**Ideal para**:
- Establecer intenciones y metas
- Comenzar nuevos proyectos
- Plantar "semillas" metafóricas
- Iniciar hábitos
- Meditar sobre lo que deseas crear

**Ritual sugerido**:
Escribe tus intenciones en papel. Sé específico/a. Léelas en voz alta bajo la Luna Nueva (o en tu espacio sagrado) y guárdalas hasta la Luna Llena.

### 🌓 Cuarto Creciente
**Energía**: Acción, decisiones, construcción

Una semana después de Luna Nueva, la Luna está en cuadratura con el Sol. Es momento de actuar sobre tus intenciones.

**Ideal para**:
- Tomar decisiones
- Superar obstáculos
- Actuar con determinación
- Ajustar planes según sea necesario

### 🌕 Luna Llena
**Energía**: Culminación, revelación, liberación

Sol y Luna están en signos opuestos (oposición). Es el momento de mayor luz lunar, cuando todo se ilumina.

**Ideal para**:
- Ver los resultados de lo sembrado en Luna Nueva
- Celebrar logros
- Liberar lo que ya no sirve
- Rituales de soltar y perdonar
- Cargar cristales y herramientas

**Ritual sugerido**:
Escribe en papel lo que deseas liberar. Quémalo de forma segura, visualizando cómo esas energías se transforman. Agradece las lecciones.

### 🌗 Cuarto Menguante
**Energía**: Reflexión, limpieza, preparación

Una semana después de Luna Llena. Es tiempo de soltar, limpiar y preparar espacio para el nuevo ciclo.

**Ideal para**:
- Limpiar espacios físicos
- Terminar proyectos pendientes
- Reflexionar sobre el ciclo
- Descansar y restaurar energía

## ¿Cuándo Manifestar?

### Para ATRAER (Luna Nueva a Luna Llena)
Durante la fase creciente, la energía apoya el crecimiento y la atracción. Es el mejor momento para:
- Manifestar abundancia
- Atraer amor
- Iniciar negocios
- Buscar empleo
- Comenzar relaciones

### Para SOLTAR (Luna Llena a Luna Nueva)
Durante la fase menguante, la energía apoya la liberación. Es el mejor momento para:
- Terminar relaciones tóxicas
- Dejar malos hábitos
- Perdonar y soltar resentimientos
- Limpiar y purificar
- Cerrar ciclos

## El Signo de la Luna Importa

La energía de cada Luna Nueva/Llena está teñida por el signo donde ocurre:

- **Aries**: Nuevos comienzos valientes
- **Tauro**: Abundancia y estabilidad
- **Géminis**: Comunicación y aprendizaje
- **Cáncer**: Hogar y emociones
- **Leo**: Creatividad y expresión
- **Virgo**: Salud y organización
- **Libra**: Relaciones y equilibrio
- **Escorpio**: Transformación profunda
- **Sagitario**: Expansión y aventura
- **Capricornio**: Metas y estructura
- **Acuario**: Innovación y comunidad
- **Piscis**: Espiritualidad e intuición

## Consejos para Trabajar con la Luna

1. **Lleva un diario lunar**: Anota cómo te sientes en cada fase
2. **Conecta con tu cuerpo**: Las fases afectan energía física
3. **Sé paciente**: Los ciclos lunares son de 28-29 días
4. **Confía en el proceso**: No todo se manifiesta inmediatamente
5. **Personaliza**: Observa qué funciona para TI

## Conclusión

La Luna es una aliada poderosa en tu camino de manifestación. Al alinear tus acciones con sus ciclos, fluyes con la energía natural en lugar de resistirla. ¡Que la Luna ilumine tu camino!
    `,
    category: 'astrologia',
    author: 'Sabiduría Cuántica',
    publishedAt: '2026-01-08',
    readingTime: 7,
  },
];

export const getCategoryById = (id: string): BlogCategory | undefined => {
  return blogCategories.find(cat => cat.id === id);
};

export const getArticlesByCategory = (categoryId: string): BlogArticle[] => {
  return blogArticles.filter(article => article.category === categoryId);
};

export const getArticleBySlug = (slug: string): BlogArticle | undefined => {
  return blogArticles.find(article => article.slug === slug);
};

export const getFeaturedArticles = (): BlogArticle[] => {
  return blogArticles.filter(article => article.featured);
};

export const getRelatedArticles = (currentSlug: string, category: string, limit: number = 3): BlogArticle[] => {
  return blogArticles
    .filter(article => article.slug !== currentSlug && article.category === category)
    .slice(0, limit);
};
