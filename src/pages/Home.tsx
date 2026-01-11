import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Sparkles, Star, MessageCircle } from 'lucide-react';

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

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
          {/* Stars Animation */}
          <div className="stars-container absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="star absolute rounded-full bg-primary/60"
                style={{
                  width: Math.random() * 3 + 1 + 'px',
                  height: Math.random() * 3 + 1 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animationDelay: Math.random() * 5 + 's',
                  animationDuration: Math.random() * 3 + 4 + 's',
                }}
              />
            ))}
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="text-7xl md:text-8xl mb-8 float-animation">🌌</div>
          
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
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              <Link to="/numerologia">
                <Star className="mr-2 h-5 w-5" />
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
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
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
