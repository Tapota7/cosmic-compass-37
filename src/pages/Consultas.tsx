import { useState } from 'react';
import { ExternalLink, Copy, Check, FileText, Sparkles, Users, Calendar, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';
import SEOHead from '@/components/SEOHead';

const services = [
  {
    id: 'carta-natal',
    title: 'Carta Natal Completa',
    icon: Star,
    emoji: '🌟',
    description: 'Tu mapa del cielo al momento de nacer',
    details: 'Análisis profundo de tu carta natal explorando tu Sol, Luna, Ascendente, planetas en signos y casas, aspectos principales y puntos clave de tu configuración celestial. Descubre tus talentos innatos, desafíos kármicos y propósito de vida.',
    highlights: ['Sol, Luna y Ascendente', 'Planetas en signos y casas', 'Aspectos mayores y menores', 'Nodos lunares y quirón'],
  },
  {
    id: 'carta-transitos',
    title: 'Carta Natal + Tránsitos Actuales',
    icon: Sparkles,
    emoji: '✨',
    description: 'Tu carta natal más el momento presente',
    details: 'Tu carta natal integrada con un análisis de cómo los planetas actuales están activando puntos clave de tu configuración. Ideal para entender el momento presente y cómo aprovecharlo al máximo.',
    highlights: ['Todo lo de Carta Natal', 'Tránsitos planetarios actuales', 'Activaciones y oportunidades', 'Guía para el momento presente'],
  },
  {
    id: 'revolucion-solar',
    title: 'Revolución Solar',
    icon: Calendar,
    emoji: '🎂',
    description: 'El mapa de tu nuevo año solar',
    details: 'La carta del momento exacto en que el Sol retorna a su posición natal. Descubre los temas, desafíos y oportunidades que se activan desde tu cumpleaños hasta el siguiente.',
    highlights: ['Temas del año', 'Casas activadas', 'Planetas destacados', 'Períodos clave del año'],
  },
  {
    id: 'sinastria',
    title: 'Sinastría',
    icon: Users,
    emoji: '💕',
    description: 'Compatibilidad entre dos cartas',
    details: 'Análisis profundo de la dinámica entre dos cartas natales. Explora las áreas de armonía, tensión y crecimiento conjunto. Ideal para parejas, socios o cualquier vínculo significativo.',
    highlights: ['Compatibilidad elemental', 'Aspectos interplanetarios', 'Áreas de armonía y tensión', 'Potencial de crecimiento'],
  },
  {
    id: 'astro-numerologia',
    title: 'Astrología + Numerología',
    icon: FileText,
    emoji: '🔮',
    description: 'La combinación más completa',
    details: 'Tu carta natal integrada con tu perfil numerológico completo. Número de Vida, Expresión, Alma, Personalidad y Ciclos Personales unidos a tu configuración astrológica para una visión 360° de tu ser.',
    highlights: ['Carta natal completa', 'Perfil numerológico', 'Ciclos personales', 'Integración astro-numérica'],
  },
];

const features = [
  { icon: '📄', text: 'Informe de 20-25 páginas' },
  { icon: '🔍', text: 'Análisis detallado de todos los ámbitos de la vida' },
  { icon: '✍️', text: 'Interpretación personalizada y artesanal' },
  { icon: '📱', text: 'Entrega en PDF de alta calidad' },
  { icon: '💬', text: 'Consulta de seguimiento opcional' },
];

const TIKTOK_PROFILE = 'https://www.tiktok.com/@sabiduria_cuantica?lang=es-419';

const Consultas = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const getMessage = () => {
    const serviceName = selectedService 
      ? services.find(s => s.id === selectedService)?.title 
      : 'una consulta personalizada';
    return `¡Hola! 🌟 Llegué desde la app Sabiduría Cuántica y estoy interesado/a en ${serviceName}. Me gustaría conocer más detalles sobre el informe y cómo puedo solicitarlo. ¡Gracias!`;
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(getMessage());
      setCopied(true);
      toast({
        title: '¡Mensaje copiado!',
        description: 'Ahora pégalo en el chat de TikTok',
      });
      setTimeout(() => setCopied(false), 3000);
    } catch {
      toast({
        title: 'Error al copiar',
        description: 'Intenta copiar el mensaje manualmente',
        variant: 'destructive',
      });
    }
  };

  const handleOpenTikTok = () => {
    window.open(TIKTOK_PROFILE, '_blank', 'noopener,noreferrer');
  };

  const handleRequestService = (serviceId: string) => {
    setSelectedService(serviceId);
    setIsModalOpen(true);
  };

  return (
    <>
      <SEOHead 
        title="Consultas Astrológicas Personalizadas | Sabiduría Cuántica"
        description="Obtén tu informe astrológico profesional de 20-25 páginas. Carta Natal, Tránsitos, Revolución Solar, Sinastría y más."
      />
      
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center py-12 md:py-20">
          <div className="text-6xl md:text-7xl float-animation mb-6">🔮</div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">
            Consultas Personalizadas
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Descifra tu mapa del cielo con un análisis profundo y personalizado. 
            Cada informe es elaborado artesanalmente, desglosando cada aspecto de tu carta 
            para que comprendas tu esencia cósmica.
          </p>
          
          {/* Features Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm"
              >
                <span>{feature.icon}</span>
                <span className="text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="glass-card group flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{service.emoji}</div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-foreground">
                      {service.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {service.details}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <IconComponent className="w-4 h-4 text-primary" />
                      <span className="text-foreground/80">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={() => handleRequestService(service.id)}
                  className="w-full mt-auto"
                  variant="default"
                >
                  Solicitar Consulta
                </Button>
              </div>
            );
          })}
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 mb-8">
          <div className="glass-card max-w-2xl mx-auto p-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿Tienes dudas sobre cuál elegir?
            </h2>
            <p className="text-muted-foreground mb-6">
              Escríbeme y conversemos sobre cuál es el informe ideal para ti según 
              tu momento de vida y lo que necesitas explorar.
            </p>
            <Button 
              onClick={() => {
                setSelectedService(null);
                setIsModalOpen(true);
              }}
              size="lg"
              className="gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Contactar por TikTok
            </Button>
          </div>
        </section>
      </div>

      {/* Contact Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <span className="text-2xl">📱</span>
              Solicitar Consulta
            </DialogTitle>
            <DialogDescription>
              Te contactarás conmigo por mensaje directo en TikTok
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 pt-4">
            <div className="rounded-lg bg-secondary/50 p-4 border border-border">
              <p className="text-sm text-foreground mb-3 font-medium">
                Copia este mensaje para enviarme:
              </p>
              <p className="text-sm text-muted-foreground italic mb-3">
                "{getMessage()}"
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full gap-2"
                onClick={handleCopyMessage}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    ¡Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copiar mensaje
                  </>
                )}
              </Button>
            </div>
            
            <Button 
              onClick={handleOpenTikTok}
              className="w-full gap-2"
              size="lg"
            >
              <ExternalLink className="w-5 h-5" />
              Ir a TikTok @sabiduria_cuantica
            </Button>
            
            <p className="text-xs text-center text-muted-foreground">
              Se abrirá mi perfil de TikTok. Toca el ícono de mensaje para enviarme el texto copiado.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Consultas;
