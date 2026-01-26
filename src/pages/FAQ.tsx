import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, MessageCircle, ArrowLeft } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const WHATSAPP_NUMBER = '5493537608355';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  icon: string;
  items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    id: 'servicios',
    title: 'Sobre los Servicios',
    icon: '📊',
    items: [
      {
        question: '¿Qué información necesito proporcionar para una consulta?',
        answer: 'Necesitamos tu nombre completo, fecha de nacimiento exacta (día/mes/año), hora de nacimiento (lo más precisa posible), y ciudad de nacimiento. Para Sinastría, necesitamos los datos de ambas personas.',
      },
      {
        question: '¿Cuánto tiempo tarda la entrega?',
        answer: 'Cartas natales y Sinastría: 48-72 horas. Revolución Solar: 48-72 horas. Consulta Integral 360°: 72-96 horas. Luego coordinamos la sesión de videollamada de 45 minutos.',
      },
      {
        question: '¿Cómo es la sesión de videollamada?',
        answer: 'Es una sesión privada de 45 minutos por Google Meet o Zoom donde profundizamos en tu informe, resolvemos dudas y trabajamos áreas específicas de tu interés. Puedes grabarla para revisarla después.',
      },
      {
        question: '¿Puedo hacer preguntas después de recibir mi informe?',
        answer: 'Sí, la sesión de videollamada de 45 minutos está incluida para resolver todas tus dudas. Además, puedes escribirme por WhatsApp si tienes consultas posteriores.',
      },
      {
        question: '¿Los informes son automáticos o personalizados?',
        answer: '100% personalizados. Cada informe es artesanal, analizo tu carta manualmente y escribo interpretaciones específicas para tu configuración única. No uso software de generación automática.',
      },
    ],
  },
  {
    id: 'pagos',
    title: 'Pagos y Métodos',
    icon: '💳',
    items: [
      {
        question: '¿Qué métodos de pago aceptan?',
        answer: 'Aceptamos transferencia bancaria (Argentina), MercadoPago, PayPal, y criptomonedas (USDT).',
      },
      {
        question: '¿Emiten factura?',
        answer: 'Sí, enviamos comprobante digital con cada pago.',
      },
      {
        question: '¿Hay descuentos por múltiples consultas?',
        answer: 'Sí, ofrecemos 15% de descuento si contratas una segunda consulta en el mismo año.',
      },
      {
        question: '¿Puedo pagar en cuotas?',
        answer: 'Sí, a través de MercadoPago (solo Argentina) puedes pagar en cuotas.',
      },
    ],
  },
  {
    id: 'astrologia',
    title: 'Sobre Astrología y Numerología',
    icon: '🔮',
    items: [
      {
        question: '¿Qué es la Astrología Evolutiva Kármica?',
        answer: 'Es un enfoque que ve tu carta natal como un mapa de evolución del alma. Me centro en tu propósito de vida, dones naturales, el karma que vienes a trabajar y las relaciones como maestros espirituales. No hago predicciones fatalistas, sino que te muestro las energías disponibles para tu crecimiento consciente.',
      },
      {
        question: '¿Necesito creer en astrología para beneficiarme?',
        answer: 'No es necesario "creer". La astrología es una herramienta de autoconocimiento simbólico que funciona como mapa de tu psique. Muchos clientes escépticos han encontrado valor en las lecturas.',
      },
      {
        question: '¿La hora de nacimiento es realmente importante?',
        answer: 'Sí, determina tu Ascendente y la posición de las Casas, fundamentales para una lectura precisa. Sin hora, puedes hacer la lectura pero perdemos información valiosa.',
      },
      {
        question: '¿Qué pasa si no sé mi hora de nacimiento?',
        answer: 'Podemos hacer una lectura sin hora exacta, aunque perderemos información sobre Ascendente y Casas. Te recomiendo buscarla en tu acta de nacimiento o preguntar a familiares.',
      },
      {
        question: '¿Qué diferencia hay entre Astrología y Numerología?',
        answer: 'La Astrología trabaja con planetas, signos y casas. La Numerología con números y vibración. Son complementarias: la astrología muestra el "cómo" y la numerología el "qué" de tu propósito.',
      },
    ],
  },
  {
    id: 'otros',
    title: 'Otros',
    icon: '📅',
    items: [
      {
        question: '¿Hacen consultas presenciales?',
        answer: 'Por el momento solo ofrecemos consultas online por videollamada, lo que nos permite atender a personas de cualquier parte del mundo.',
      },
      {
        question: '¿Puedo compartir mi informe con otras personas?',
        answer: 'Los informes son personales y confidenciales, pero puedes compartirlos con quien desees. Son tuyos.',
      },
      {
        question: '¿Ofrecen consultas para empresas o equipos?',
        answer: 'Sí, hacemos cartas natales corporativas y análisis de equipos. Escríbeme por WhatsApp para más información.',
      },
    ],
  },
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return faqCategories;

    const query = searchQuery.toLowerCase();
    return faqCategories
      .map(category => ({
        ...category,
        items: category.items.filter(
          item =>
            item.question.toLowerCase().includes(query) ||
            item.answer.toLowerCase().includes(query)
        ),
      }))
      .filter(category => category.items.length > 0);
  }, [searchQuery]);

  const totalQuestions = faqCategories.reduce((acc, cat) => acc + cat.items.length, 0);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      '¡Hola! 👋 Tengo una pregunta que no encontré en las FAQ. ¿Podrías ayudarme?'
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <>
      <SEOHead
        title="Preguntas Frecuentes"
        description="Encuentra respuestas a las dudas más comunes sobre nuestros servicios de astrología evolutiva kármica y numerología. Información sobre consultas, pagos y más."
        keywords="preguntas frecuentes, FAQ, astrología, numerología, carta natal, consultas, dudas"
      />

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Back Button */}
        <Link
          to="/consultas"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a Servicios
        </Link>

        {/* Hero */}
        <section className="text-center mb-10">
          <div className="text-5xl mb-4">❓</div>
          <h1 className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuentra respuestas a las dudas más comunes sobre nuestros servicios
            y la astrología evolutiva
          </p>
          <Badge variant="secondary" className="mt-4">
            {totalQuestions} preguntas respondidas
          </Badge>
        </section>

        {/* Buscador */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar una pregunta..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg bg-secondary/30 border-primary/20 focus:border-primary"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-sm text-muted-foreground mt-2 text-center">
              {filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0)} resultados encontrados
            </p>
          )}
        </div>

        {/* Categorías con Acordeones */}
        <div className="max-w-3xl mx-auto space-y-8">
          {filteredCategories.map((category, categoryIndex) => (
            <section key={category.id}>
              {/* Título de categoría */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="font-display text-xl font-bold text-foreground">
                  {category.title}
                </h2>
                <Badge variant="outline" className="ml-auto">
                  {category.items.length} {category.items.length === 1 ? 'pregunta' : 'preguntas'}
                </Badge>
              </div>

              {/* Acordeón de preguntas */}
              <Accordion
                type="single"
                collapsible
                defaultValue={categoryIndex === 0 && !searchQuery ? 'item-0' : undefined}
                className="space-y-3"
              >
                {category.items.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-secondary/30 rounded-xl border border-primary/10 overflow-hidden"
                  >
                    <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-secondary/50 transition-colors text-left">
                      <span className="font-medium pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-4 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}
        </div>

        {/* Sin resultados */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <span className="text-5xl mb-4 block">🔍</span>
            <h3 className="font-display text-xl font-semibold mb-2">
              No encontramos resultados
            </h3>
            <p className="text-muted-foreground mb-6">
              Intenta con otras palabras o contáctanos directamente
            </p>
            <Button onClick={() => setSearchQuery('')} variant="outline">
              Limpiar búsqueda
            </Button>
          </div>
        )}

        {/* CTA Final */}
        <section className="text-center py-12 mt-8">
          <div className="bg-secondary/30 border border-primary/20 rounded-2xl max-w-xl mx-auto p-8">
            <span className="text-4xl mb-4 block">💬</span>
            <h3 className="font-display text-xl font-bold mb-3">
              ¿No encontraste tu respuesta?
            </h3>
            <p className="text-muted-foreground mb-6">
              Escríbeme por WhatsApp y responderé todas tus dudas personalmente.
            </p>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400"
            >
              <MessageCircle className="w-5 h-5" />
              Escríbenos por WhatsApp
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;
