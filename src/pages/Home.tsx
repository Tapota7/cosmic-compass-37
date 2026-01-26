import { useMemo, memo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Sparkles, Star, MessageCircle } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import logoHero from '@/assets/logo-hero.png';

const benefits = [
  {
    icon: Zap,
    emoji: '⚡',
    title: 'Interpretación Profunda',
    description: 'Análisis de 5 números principales con significado espiritual',
  },
  {
    icon: Sparkles,
    emoji: '🔮',
    title: 'Predicciones 2026',
    description: 'Descubre tus ciclos personales y energías del año',
  },
  {
    icon: MessageCircle,
    emoji: '💫',
    title: 'Consultas Personalizadas',
    description: 'Asesoría 1-a-1 con experto en astrología y numerología',
  },
];

const steps = [
  {
    number: 1,
    emoji: '📋',
    title: 'Elige tu servicio',
    bullets: [
      'Selecciona el tipo de consulta que mejor se adapte a tus necesidades',
      'Revisa los detalles y precios en nuestra página de Servicios',
    ],
  },
  {
    number: 2,
    emoji: '💬',
    title: 'Envía tus datos',
    bullets: [
      'Contáctanos por WhatsApp con tus datos de nacimiento',
      'Realiza el pago mediante tu método preferido',
      'Recibirás confirmación inmediata',
    ],
  },
  {
    number: 3,
    emoji: '✨',
    title: 'Recibe tu informe',
    bullets: [
      'Tu análisis personalizado llegará en 48-72 horas',
      'Formato PDF profesional de alta calidad',
      'Incluye sesión de seguimiento gratuita',
    ],
  },
];

const testimonials = [
  {
    name: 'María García',
    zodiac: 'Escorpio ♏',
    quote: 'La consulta de carta natal me ayudó a entender patrones que repetía en mis relaciones. ¡Increíble la precisión!',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Carlos Mendoza',
    zodiac: 'Leo ♌',
    quote: 'Los ciclos personales me prepararon para un año de grandes cambios. Ahora tomo decisiones con más claridad.',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Ana Lucía Torres',
    zodiac: 'Piscis ♓',
    quote: 'La sinastría con mi pareja nos dio herramientas para comunicarnos mejor. 100% recomendado.',
    avatar: 'https://i.pravatar.cc/150?img=45',
  },
];

// Pre-generate stars data to avoid recalculation on each render
const generateStars = () => {
  return [...Array(30)].map((_, i) => ({
    key: i,
    size: Math.random() * 2 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 4,
  }));
};

// Memoized star component
const StarField = memo(() => {
  const stars = useMemo(() => generateStars(), []);
  
  return (
    <div className="stars-container absolute inset-0">
      {stars.map((star) => (
        <div
          key={star.key}
          className="star absolute rounded-full bg-primary/60"
          style={{
            width: star.size + 'px',
            height: star.size + 'px',
            top: star.top + '%',
            left: star.left + '%',
            animationDelay: star.delay + 's',
            animationDuration: star.duration + 's',
          }}
        />
      ))}
    </div>
  );
});

StarField.displayName = 'StarField';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
          {/* Stars Animation - Memoized */}
          <StarField />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-8 float-animation">
            <img 
              src={logoHero} 
              alt="Sabiduría Cuántica Logo" 
              className="w-36 h-36 md:w-[200px] md:h-[200px] mx-auto object-contain drop-shadow-[0_0_25px_hsl(var(--primary)/0.6)] hover:drop-shadow-[0_0_35px_hsl(var(--primary)/0.8)] transition-all duration-500"
            />
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Descubre tu Propósito</span>
            <br />
            <span className="text-foreground">Cósmico</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Tu carta numerológica te revela quién eres realmente y hacia dónde vas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_100%] animate-gradient-x hover:shadow-2xl hover:shadow-primary/40 text-primary-foreground text-xl px-10 py-7 rounded-full shadow-xl shadow-primary/30 transition-all duration-300 hover:scale-110"
            >
              <Link to="/calculadora">
                <span className="text-2xl mr-2">🔢</span>
                Calcular mi Numerología AHORA
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 rounded-full border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <Link to="/consultas">
                Ver Consultas Premium
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            ¿Por qué <span className="gradient-text">Sabiduría Cuántica</span>?
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            Herramientas ancestrales combinadas con interpretación moderna para tu crecimiento espiritual
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="glass-card border-primary/10 hover:border-primary/30 transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.emoji}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            ¿Cómo <span className="gradient-text">funciona</span>?
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            Proceso simple en 3 pasos
          </p>

          <div className="relative">
            {/* Connection Line (desktop only) */}
            <div className="hidden md:block absolute top-20 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {steps.map((step, index) => (
                <Card
                  key={index}
                  className="glass-card border-primary/10 hover:border-primary/30 transition-all duration-300 group relative"
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg shadow-primary/30">
                      {step.number}
                    </div>
                  </div>

                  <CardContent className="p-8 pt-10 text-center">
                    {/* Animated Emoji */}
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {step.emoji}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                      {step.title}
                    </h3>

                    {/* Bullet Points */}
                    <ul className="text-left space-y-2">
                      {step.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              <Link to="/consultas">
                <Sparkles className="mr-2 h-5 w-5" />
                Comenzar ahora
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            Lo que dicen <span className="gradient-text">nuestros clientes</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            Historias reales de transformación y autoconocimiento
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="glass-card border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <OptimizedImage 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      wrapperClassName="w-14 h-14 rounded-full"
                      className="w-full h-full object-cover border-2 border-primary/30 rounded-full"
                      fallbackEmoji="👤"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-primary">{testimonial.zodiac}</p>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground italic">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-6xl mb-6">✨</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              ¿Listo para tu <span className="gradient-text">transformación</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Da el primer paso hacia el autoconocimiento profundo y descubre tu verdadero potencial
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                <Link to="/consultas">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Reservar Consulta
                </Link>
              </Button>
              
              <p className="text-sm text-muted-foreground">
                desde <span className="text-primary font-bold text-lg">$30 USD</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
