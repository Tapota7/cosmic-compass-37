-- Crear enum para roles
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Crear tabla user_roles
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE (user_id, role)
);

-- Habilitar RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Función para verificar roles (evita recursión RLS)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Políticas RLS para user_roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Crear tabla blog_articles
CREATE TABLE public.blog_articles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    category TEXT NOT NULL,
    author TEXT NOT NULL DEFAULT 'Sabiduría Cuántica',
    reading_time INTEGER NOT NULL DEFAULT 5,
    featured BOOLEAN DEFAULT FALSE,
    published BOOLEAN DEFAULT TRUE,
    published_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    created_by UUID REFERENCES auth.users(id)
);

-- Habilitar RLS
ALTER TABLE public.blog_articles ENABLE ROW LEVEL SECURITY;

-- Trigger para updated_at
CREATE TRIGGER update_blog_articles_updated_at
BEFORE UPDATE ON public.blog_articles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Políticas RLS para blog_articles
CREATE POLICY "Anyone can read published articles"
ON public.blog_articles
FOR SELECT
USING (published = true);

CREATE POLICY "Admins can read all articles"
ON public.blog_articles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can create articles"
ON public.blog_articles
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update articles"
ON public.blog_articles
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete articles"
ON public.blog_articles
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Insertar artículos existentes
INSERT INTO public.blog_articles (slug, title, excerpt, content, category, author, reading_time, featured, published, published_at) VALUES
('como-leer-tu-carta-natal', 'Cómo Leer tu Carta Natal: Guía Completa para Principiantes', 'Descubre los secretos de tu carta natal y aprende a interpretar los planetas, casas y aspectos que definen tu personalidad y destino.', E'Tu carta natal es un mapa del cielo en el momento exacto de tu nacimiento. Este mapa cósmico revela información profunda sobre tu personalidad, talentos, desafíos y el propósito de tu vida.\n\n## ¿Qué es una Carta Natal?\n\nUna carta natal, también conocida como carta astral o mapa natal, es una representación gráfica de las posiciones de los planetas, el Sol y la Luna en el momento de tu nacimiento. Esta configuración única actúa como una huella digital cósmica que te define.\n\n## Los Elementos Fundamentales\n\n### 1. Los Planetas\nCada planeta representa una energía específica:\n- **Sol**: Tu esencia, ego y vitalidad\n- **Luna**: Emociones, intuición y mundo interior\n- **Mercurio**: Comunicación y pensamiento\n- **Venus**: Amor, belleza y valores\n- **Marte**: Acción, pasión y energía\n\n### 2. Los Signos Zodiacales\nLos signos modifican la expresión de los planetas. Por ejemplo, Venus en Aries expresa el amor de forma apasionada e impulsiva, mientras que Venus en Tauro lo hace de manera sensual y estable.\n\n### 3. Las Casas Astrológicas\nLas 12 casas representan diferentes áreas de tu vida:\n- Casa 1: Identidad y apariencia\n- Casa 7: Relaciones y asociaciones\n- Casa 10: Carrera y reputación pública\n\n### 4. Los Aspectos\nLos aspectos son ángulos entre planetas que crean dinámicas específicas:\n- **Conjunción (0°)**: Fusión de energías\n- **Trígono (120°)**: Armonía y fluidez\n- **Cuadratura (90°)**: Tensión y crecimiento\n\n## Cómo Empezar a Leer tu Carta\n\n1. **Identifica tu Sol, Luna y Ascendente**: Esta trinidad forma la base de tu personalidad\n2. **Observa los planetas personales**: Sol, Luna, Mercurio, Venus y Marte\n3. **Analiza las casas ocupadas**: ¿Dónde se concentra la energía?\n4. **Estudia los aspectos mayores**: Conjunciones, oposiciones, trígonos y cuadraturas\n\n## Conclusión\n\nLeer tu carta natal es un viaje de autoconocimiento. Cada elemento añade una capa de comprensión sobre quién eres y hacia dónde te diriges. La práctica constante y el estudio te permitirán descubrir los mensajes que el cosmos tiene para ti.', 'astrologia', 'Sabiduría Cuántica', 8, true, true, '2024-01-15'),

('numeros-maestros-11-22-33', 'Números Maestros 11, 22 y 33: Su Significado Profundo en Numerología', 'Los números maestros poseen una vibración especial. Aprende qué significa tener un 11, 22 o 33 en tu carta numerológica.', E'En numerología, los números maestros son considerados portales de energía superior. Si tienes un 11, 22 o 33 en posiciones clave de tu carta numerológica, posees un potencial especial para el crecimiento espiritual.\n\n## ¿Por Qué Son Especiales?\n\nA diferencia de otros números que se reducen a un solo dígito, los números maestros conservan su forma dual porque contienen una vibración amplificada. Son números de alto voltaje que traen tanto grandes oportunidades como desafíos intensos.\n\n## El Número Maestro 11\n\n### Características\nEl 11 es el número de la **intuición iluminada**:\n- Alta sensibilidad psíquica\n- Capacidad de inspirar a otros\n- Conexión con dimensiones superiores\n- Visión y creatividad excepcionales\n\n### Desafíos\n- Ansiedad y nerviosismo\n- Dificultad para materializar ideas\n- Hipersensibilidad emocional\n\n### Misión\nCanalizar la inspiración divina para elevar la consciencia colectiva.\n\n## El Número Maestro 22\n\n### Características\nEl 22 es el **Constructor Maestro**:\n- Capacidad de manifestar grandes proyectos\n- Visión práctica y espiritual combinadas\n- Liderazgo natural\n- Habilidad para crear sistemas duraderos\n\n### Desafíos\n- Presión por lograr grandes cosas\n- Tendencia al exceso de trabajo\n- Frustración cuando los resultados tardan\n\n### Misión\nConstruir estructuras que beneficien a la humanidad a largo plazo.\n\n## El Número Maestro 33\n\n### Características\nEl 33 es el **Maestro Sanador**:\n- Amor incondicional\n- Capacidad de curación emocional\n- Servicio desinteresado\n- Sabiduría compasiva\n\n### Desafíos\n- Tendencia al sacrificio excesivo\n- Dificultad para establecer límites\n- Carga emocional de otros\n\n### Misión\nSer un canal de amor y sanación para elevar la vibración del planeta.\n\n## Cómo Trabajar con tu Número Maestro\n\n1. **Acepta tu sensibilidad** como un don, no una debilidad\n2. **Medita regularmente** para canalizar la energía\n3. **Encuentra equilibrio** entre lo espiritual y lo material\n4. **Sirve a otros** desde un lugar de plenitud, no de vacío\n\n## Conclusión\n\nLos números maestros son una bendición y una responsabilidad. Si tienes uno en tu carta, estás llamado a vivir una vida de propósito elevado.', 'numerologia', 'Sabiduría Cuántica', 7, true, true, '2024-01-20'),

('luna-nueva-rituales-manifestacion', 'Luna Nueva: Rituales y Prácticas para Manifestar tus Deseos', 'Aprovecha la energía de la luna nueva para sembrar intenciones y comenzar nuevos ciclos con estos rituales efectivos.', E'La luna nueva marca el inicio de un nuevo ciclo lunar y es el momento perfecto para sembrar intenciones, establecer metas y comenzar proyectos. En esta fase, la luna está oculta, simbolizando el potencial infinito de lo que aún no ha nacido.\n\n## La Energía de la Luna Nueva\n\nDurante la luna nueva, la energía está orientada hacia:\n- **Introspección**: Momento ideal para reflexionar\n- **Planificación**: Establecer objetivos claros\n- **Siembra**: Plantar semillas de intención\n- **Renovación**: Dejar ir lo viejo y dar la bienvenida a lo nuevo\n\n## Preparación para el Ritual\n\n### Materiales Sugeridos\n- Velas blancas o del color asociado a tu intención\n- Papel y bolígrafo\n- Cristales (cuarzo claro, piedra luna)\n- Incienso o salvia para limpiar\n- Un espacio tranquilo\n\n### Limpieza del Espacio\n1. Abre las ventanas para renovar el aire\n2. Quema salvia o palo santo\n3. Visualiza luz blanca llenando el espacio\n4. Establece la intención de crear un espacio sagrado\n\n## Ritual de Luna Nueva Paso a Paso\n\n### Paso 1: Centramiento\nSiéntate cómodamente y realiza 10 respiraciones profundas. Conecta con tu interior y con la energía de la luna nueva.\n\n### Paso 2: Reflexión\nEscribe en tu papel:\n- ¿Qué quiero crear en este nuevo ciclo?\n- ¿Qué aspectos de mi vida necesitan renovación?\n- ¿Qué estoy dispuesto/a a soltar?\n\n### Paso 3: Escritura de Intenciones\nEscribe tus intenciones en tiempo presente, como si ya fueran realidad:\n- \"Estoy en paz con mi cuerpo\"\n- \"Atraigo abundancia a mi vida\"\n- \"Mis relaciones son armoniosas\"\n\n### Paso 4: Visualización\nCierra los ojos y visualiza cada intención manifestada. Siente las emociones asociadas con ese logro.\n\n### Paso 5: Cierre\nAgradece a la luna nueva por su energía. Guarda tus intenciones en un lugar especial o bajo tu almohada.\n\n## Prácticas Adicionales\n\n- **Baño ritual**: Añade sal marina y aceites esenciales\n- **Meditación guiada**: Conecta con la energía lunar\n- **Diario de luna**: Registra tus intenciones cada luna nueva\n\n## Seguimiento del Ciclo\n\nRevisa tus intenciones en cada fase lunar:\n- **Cuarto creciente**: Toma acción\n- **Luna llena**: Celebra logros\n- **Cuarto menguante**: Suelta obstáculos\n\n## Conclusión\n\nLa luna nueva es tu aliada cósmica para la manifestación. Aprovecha esta energía mensual para alinearte con tus sueños y crear la vida que deseas.', 'transitos', 'Sabiduría Cuántica', 6, false, true, '2024-01-25'),

('compatibilidad-signos-amor', 'Compatibilidad entre Signos: Guía Completa para el Amor', 'Descubre qué signos son más compatibles contigo en el amor y cómo mejorar tus relaciones según la astrología.', E'La compatibilidad astrológica va más allá del signo solar. Sin embargo, entender cómo interactúan los elementos y modalidades puede darte pistas valiosas sobre tus relaciones.\n\n## Los Elementos y el Amor\n\n### Fuego (Aries, Leo, Sagitario)\nApasionados, entusiastas y directos en el amor.\n- **Con Fuego**: Intenso pero puede haber luchas de ego\n- **Con Aire**: Excelente combinación, se estimulan mutuamente\n- **Con Tierra**: Desafiante, diferentes ritmos\n- **Con Agua**: Vapor intenso, puede ser transformador\n\n### Tierra (Tauro, Virgo, Capricornio)\nEstables, sensuales y comprometidos.\n- **Con Tierra**: Sólido y duradero\n- **Con Agua**: Nutritivo y profundo\n- **Con Fuego**: Necesita paciencia mutua\n- **Con Aire**: Diferentes prioridades\n\n### Aire (Géminis, Libra, Acuario)\nIntelectuales, comunicativos y sociales.\n- **Con Aire**: Estimulante pero puede faltar profundidad emocional\n- **Con Fuego**: Dinámico y emocionante\n- **Con Agua**: Desafiante, diferentes lenguajes\n- **Con Tierra**: Complementario si hay respeto\n\n### Agua (Cáncer, Escorpio, Piscis)\nEmocionales, intuitivos y profundos.\n- **Con Agua**: Conexión profunda, riesgo de ahogarse en emociones\n- **Con Tierra**: Estabilidad emocional\n- **Con Fuego**: Pasional pero volátil\n- **Con Aire**: Necesita mucha comprensión\n\n## Las Mejores Combinaciones\n\n### Parejas de Alto Potencial\n1. **Aries + Leo**: Pasión y admiración mutua\n2. **Tauro + Cáncer**: Seguridad y nutrición emocional\n3. **Géminis + Libra**: Comunicación y armonía\n4. **Virgo + Capricornio**: Metas compartidas y respeto\n5. **Escorpio + Piscis**: Conexión emocional profunda\n\n### Parejas Desafiantes pero Transformadoras\n1. **Aries + Capricornio**: Diferentes estilos de liderazgo\n2. **Tauro + Acuario**: Tradición vs innovación\n3. **Leo + Escorpio**: Poder e intensidad\n\n## Más Allá del Sol\n\nPara una compatibilidad real, considera:\n- **Luna**: Compatibilidad emocional\n- **Venus**: Estilo de amor\n- **Marte**: Atracción física y deseo\n- **Ascendente**: Primera impresión\n\n## Consejos para Cualquier Combinación\n\n1. **Comunicación**: El puente entre diferencias\n2. **Respeto**: Valorar las cualidades del otro\n3. **Crecimiento**: Ver los desafíos como oportunidades\n4. **Equilibrio**: Dar y recibir por igual\n\n## Conclusión\n\nLa astrología es una guía, no un destino. Cualquier combinación puede funcionar con amor, respeto y voluntad de crecer juntos.', 'astrologia', 'Sabiduría Cuántica', 9, true, true, '2024-02-01'),

('numerologia-calcula-ano-personal-2026', 'Cómo Calcular tu Año Personal 2026 en Numerología', 'Aprende a calcular tu año personal para 2026 y descubre qué energías te acompañarán durante todo el año.', E'El año personal en numerología revela la energía predominante que influirá en tu vida durante un año calendario específico. Conocer tu año personal te permite alinearte con las oportunidades y prepararte para los desafíos.\n\n## Cómo Calcular tu Año Personal\n\n### Fórmula\nSuma el día y mes de tu nacimiento + el año actual, luego reduce a un solo dígito.\n\n### Ejemplo para 2026\nSi naciste el 15 de marzo:\n- Día: 1 + 5 = 6\n- Mes: 0 + 3 = 3\n- Año 2026: 2 + 0 + 2 + 6 = 10 → 1 + 0 = 1\n- Total: 6 + 3 + 1 = 10 → 1 + 0 = **1**\n\nEsta persona estaría en un **Año Personal 1** en 2026.\n\n## Significado de Cada Año Personal\n\n### Año Personal 1: Nuevos Comienzos\n- Iniciar proyectos\n- Independencia\n- Liderazgo\n- Plantar semillas para el futuro\n\n### Año Personal 2: Cooperación\n- Paciencia\n- Relaciones\n- Diplomacia\n- Espera y colaboración\n\n### Año Personal 3: Expresión Creativa\n- Comunicación\n- Alegría\n- Socialización\n- Proyectos artísticos\n\n### Año Personal 4: Construcción\n- Trabajo duro\n- Fundamentos\n- Organización\n- Disciplina\n\n### Año Personal 5: Cambio\n- Libertad\n- Aventura\n- Transformación\n- Flexibilidad\n\n### Año Personal 6: Responsabilidad\n- Familia\n- Hogar\n- Servicio\n- Amor\n\n### Año Personal 7: Introspección\n- Espiritualidad\n- Estudio\n- Reflexión\n- Soledad productiva\n\n### Año Personal 8: Poder y Abundancia\n- Éxito material\n- Reconocimiento\n- Karma financiero\n- Autoridad\n\n### Año Personal 9: Culminación\n- Finales\n- Liberación\n- Humanitarismo\n- Preparación para nuevo ciclo\n\n## Cómo Usar Esta Información\n\n1. **Planifica** según la energía del año\n2. **Fluye** con los temas naturales\n3. **Evita** forzar energías contrarias\n4. **Aprovecha** las oportunidades alineadas\n\n## El Ciclo de 9 Años\n\nRecuerda que los años personales siguen un ciclo de 9 años:\n- Años 1-3: Siembra y crecimiento\n- Años 4-6: Desarrollo y responsabilidad\n- Años 7-9: Maduración y cosecha\n\n## Conclusión\n\nConocer tu año personal te da una ventaja estratégica. Úsalo como brújula para tomar decisiones alineadas con el flujo cósmico de tu vida.', 'numerologia', 'Sabiduría Cuántica', 6, false, true, '2024-02-10');