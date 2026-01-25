import { Check, Clock, MessageCircle, Star, Calendar, Users, Sparkles, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SEOHead from '@/components/SEOHead';

const WHATSAPP_NUMBER = '5493537608355';

const services = [
  {
    id: 'carta-natal',
    title: 'Carta Natal Completa',
    subtitle: 'Consulta Evolutiva',
    emoji: '💫',
    price: 30,
    delivery: 'PDF en 48-72 horas + Sesión por videollamada a coordinar',
    includes: 'Análisis escrito (20-25 páginas PDF) + Sesión virtual de 45 minutos',
    features: [
      'Sol, Luna y Ascendente (tu esencia y propósito)',
      'Planetas en signos y casas (talentos y desafíos)',
      'Aspectos mayores y menores',
      'Nodos lunares (karma y evolución)',
      'Quirón (herida sanadora)',
      'Enfoque en: Vocación, Relaciones, Dones naturales, Amor',
    ],
    hasExtra: true,
    extraText: 'Tránsitos Actuales (+$10 USD): Cómo los planetas actuales están activando tu carta natal y qué oportunidades traen',
    idealFor: null,
    isRecommended: false,
  },
  {
    id: 'revolucion-solar',
    title: 'Revolución Solar',
    subtitle: 'Tu Año Personal',
    emoji: '🎂',
    price: 50,
    delivery: 'PDF en 48-72 horas + Sesión por videollamada a coordinar',
    includes: 'Análisis escrito (15-20 páginas PDF) + Sesión virtual de 45 minutos',
    features: [
      'Temas centrales del año (desde tu cumpleaños hasta el próximo)',
      'Casas activadas (áreas de vida en foco)',
      'Planetas destacados (energías dominantes)',
      'Períodos clave y fechas importantes',
      'Consejos para aprovechar tu año al máximo',
    ],
    hasExtra: false,
    extraText: null,
    idealFor: 'Planificar tu año, tomar decisiones importantes, entender ciclos personales',
    isRecommended: false,
  },
  {
    id: 'sinastria',
    title: 'Sinastría de Pareja',
    subtitle: 'Compatibilidad Evolutiva',
    emoji: '💕',
    price: 70,
    delivery: 'PDF en 48-72 horas + Sesión por videollamada a coordinar',
    includes: 'Análisis escrito (20-25 páginas PDF) + Sesión virtual de 45 minutos',
    features: [
      'Compatibilidad elemental (fuego, tierra, aire, agua)',
      'Aspectos interplanetarios (cómo interactúan sus energías)',
      'Áreas de armonía natural',
      'Puntos de tensión y crecimiento',
      'Propósito evolutivo de la relación',
      'Venus y Marte (amor y deseo)',
      'Casa 7 y Descendente (tipo de pareja que buscas)',
    ],
    hasExtra: false,
    extraText: null,
    idealFor: 'Parejas, vínculos importantes, entender dinámicas relacionales',
    isRecommended: false,
  },
  {
    id: 'integral-360',
    title: 'Astrología + Numerología',
    subtitle: 'Consulta Integral 360°',
    emoji: '✨',
    price: 50,
    delivery: 'PDF en 72-96 horas + Sesión por videollamada a coordinar',
    includes: 'Análisis escrito (30-35 páginas PDF) + Sesión virtual de 45 minutos',
    features: [
      'Carta natal completa (astrológica)',
      'Número de Vida (propósito)',
      'Número de Destino (camino)',
      'Número del Alma (motivaciones)',
      'Número de Personalidad (máscara social)',
      'Año Personal 2026',
      'Integración astro-numérica (visión 360° de tu ser)',
      'Ciclos personales actuales',
    ],
    hasExtra: false,
    extraText: null,
    idealFor: 'Autoconocimiento profundo, momentos de transformación, decisiones de vida',
    isRecommended: true,
  },
];

const steps = [
  {
    icon: '📋',
    title: 'Elige tu servicio',
    description: 'Revisa las opciones y decide cuál se adapta mejor a tu momento de vida',
  },
  {
    icon: '💬',
    title: 'Contacta por WhatsApp',
    description: 'Envíame tus datos de nacimiento y coordinamos el pago',
  },
  {
    icon: '📧',
    title: 'Recibe tu análisis',
    description: 'PDF profesional + sesión de videollamada personalizada',
  },
];

const faqs = [
  {
    question: '¿Qué es la Astrología Evolutiva Kármica?',
    answer: 'Es un enfoque que ve la carta natal como un mapa de tu evolución del alma. Me centro en tu propósito de vida, tus dones naturales, el karma que vienes a trabajar y las relaciones como maestros. No hago predicciones fatalistas, sino que te muestro las energías disponibles para tu crecimiento.',
  },
  {
    question: '¿Qué información necesito proporcionar?',
    answer: 'Fecha de nacimiento completa (día/mes/año), hora exacta de nacimiento (lo más precisa posible), y ciudad de nacimiento. Para Sinastría, necesito los datos de ambas personas.',
  },
  {
    question: '¿Cómo es la sesión de videollamada?',
    answer: 'Es una sesión de 45 minutos por Google Meet o Zoom donde profundizamos en tu informe, resolvemos dudas y trabajamos áreas específicas que te interesen. Puedes grabarla para revisarla después.',
  },
  {
    question: '¿Qué pasa si no sé mi hora de nacimiento?',
    answer: 'Podemos hacer una lectura sin hora exacta, aunque perderemos información sobre Ascendente y Casas. Te recomiendo buscarla en tu acta de nacimiento o preguntar a familiares.',
  },
  {
    question: '¿Los informes son automáticos o personalizados?',
    answer: '100% personalizados y escritos por mí. Cada informe es artesanal, analizo tu carta manualmente y escribo interpretaciones específicas para tu configuración única.',
  },
];

const testimonials = [
  {
    name: 'María G.',
    service: 'Carta Natal Completa',
    quote: 'Increíble la precisión del análisis. Me ayudó a entender patrones que venía repitiendo toda mi vida. La sesión fue muy clarificadora.',
    zodiac: 'Escorpio ♏',
  },
  {
    name: 'Carlos M.',
    service: 'Sinastría de Pareja',
    quote: 'Nos ayudó a entender nuestras diferencias como oportunidades de crecimiento. Ahora nos comunicamos mucho mejor.',
    zodiac: 'Leo ♌',
  },
  {
    name: 'Ana L.',
    service: 'Consulta Integral 360°',
    quote: 'Una visión completa de mi ser. La combinación de astrología y numerología me dio claridad sobre mi propósito de vida.',
    zodiac: 'Piscis ♓',
  },
  {
    name: 'Lucía R.',
    service: 'Revolución Solar',
    quote: 'Justo lo que necesitaba para planificar mi año. Las fechas clave que me dio fueron muy acertadas.',
    zodiac: 'Aries ♈',
  },
];

const specializations = ['Vocación', 'Relaciones', 'Dones', 'Propósito de Vida', 'Amor'];

const Consultas = () => {
  const handleWhatsApp = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    const message = encodeURIComponent(
      `¡Hola! 🌟 Me interesa el servicio "${service?.title} - ${service?.subtitle}" ($${service?.price} USD). ` +
      `Llegué desde la web Sabiduría Cuántica. ¿Podrías darme más información?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handleGeneralContact = () => {
    const message = encodeURIComponent(
      `¡Hola! 🌟 Llegué desde la web Sabiduría Cuántica y me gustaría conocer más sobre tus servicios de consultas personalizadas.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <>
      <SEOHead 
        title="Servicios de Astrología y Numerología Evolutiva | Sabiduría Cuántica"
        description="Consultas personalizadas de astrología evolutiva kármica. Carta Natal, Revolución Solar, Sinastría y más. Enfoque en vocación, relaciones y propósito de vida."
      />
      
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center py-12 md:py-20">
          <div className="text-6xl md:text-7xl float-animation mb-6">🔮</div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Servicios de Astrología y Numerología Evolutiva
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Consultas personalizadas con enfoque en tu propósito de vida, vocación y relaciones
          </p>
          
          {/* Badge de enfoque */}
          <div className="inline-flex flex-col items-center gap-4 p-6 rounded-2xl bg-primary/10 border border-primary/20">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌟</span>
              <span className="font-display text-lg font-semibold text-foreground">
                Enfoque: Astrología Evolutiva Kármica
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">Especialización en:</span>
              {specializations.map((item) => (
                <Badge key={item} variant="secondary" className="bg-secondary/80">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className={`glass-card relative flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                service.isRecommended ? 'ring-2 ring-primary' : ''
              }`}
            >
              {service.isRecommended && (
                <Badge className="absolute -top-3 right-4 bg-primary text-primary-foreground shadow-lg">
                  ⭐ RECOMENDADO
                </Badge>
              )}
              
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <span className="text-5xl">{service.emoji}</span>
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                </div>
              </div>
              
              {/* Precio destacado */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-primary">${service.price}</span>
                <span className="text-muted-foreground">USD</span>
                {service.isRecommended && (
                  <Badge variant="outline" className="ml-2 text-xs">
                    Mejor inversión
                  </Badge>
                )}
              </div>
              
              {/* Qué incluye */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>{service.includes}</span>
              </div>
              
              {/* Entrega */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Clock className="w-4 h-4 text-primary" />
                <span>{service.delivery}</span>
              </div>
              
              {/* Lista de características */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  📋 Incluye:
                </p>
                <ul className="space-y-2 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Extra opcional */}
              {service.hasExtra && service.extraText && (
                <div className="p-3 rounded-lg bg-secondary/50 border border-primary/20 mb-4">
                  <p className="text-sm">
                    <span className="font-semibold">➕ Extra opcional:</span>{' '}
                    <span className="text-muted-foreground">{service.extraText}</span>
                  </p>
                </div>
              )}
              
              {/* Ideal para */}
              {service.idealFor && (
                <p className="text-sm text-muted-foreground italic mb-4">
                  <span className="font-medium">Ideal para:</span> {service.idealFor}
                </p>
              )}
              
              {/* Botón CTA */}
              <Button 
                onClick={() => handleWhatsApp(service.id)}
                className="w-full mt-auto gap-2"
                size="lg"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Consulta
              </Button>
            </div>
          ))}
        </section>

        {/* Cómo funciona */}
        <section className="py-16">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
              💡 ¿Cómo funciona?
            </h2>
            <p className="text-muted-foreground">Proceso simple en 3 pasos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="glass-card text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-3">
                  {index + 1}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section className="py-16">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
              <HelpCircle className="w-8 h-8 text-primary" />
              Preguntas Frecuentes
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glass-card mb-3 border-none">
                  <AccordionTrigger className="px-6 hover:no-underline">
                    <span className="text-left font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-16">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
              💬 Lo que dicen mis consultantes
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-lg font-bold text-primary">
                    {testimonial.name[0]}
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.service}</p>
                  </div>
                  <span className="text-xl">{testimonial.zodiac.split(' ')[1]}</span>
                </div>
                <p className="text-muted-foreground text-sm italic">"{testimonial.quote}"</p>
                <p className="text-xs text-primary mt-3">{testimonial.zodiac}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center py-12 mb-8">
          <div className="glass-card max-w-2xl mx-auto p-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿Listo para descubrir tu mapa estelar?
            </h2>
            <p className="text-muted-foreground mb-6">
              Escríbeme y conversemos sobre cuál es el servicio ideal para ti según 
              tu momento de vida y lo que necesitas explorar.
            </p>
            <Button 
              onClick={handleGeneralContact}
              size="lg"
              className="gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Contactar por WhatsApp
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Consultas;
