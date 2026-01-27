import { memo } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Using public folder to avoid bundler size limits (original image is 2.8MB)
const sobreMiImage = '/images/sobre-mi-damian.png';

const specialties = [
  { emoji: '🌙', label: 'Astrólogo Evolutivo' },
  { emoji: '🔢', label: 'Numerólogo' },
  { emoji: '✨', label: 'Acompañante de Transformación' },
];

const AboutMeSection = memo(() => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          {/* Image Column - 40% */}
          <div className="lg:col-span-2 flex justify-center">
            <img 
              src={sobreMiImage}
              alt="Damián - Fundador de Sabiduría Cuántica"
              className="w-full max-w-[400px] object-cover rounded-2xl 
                         shadow-[0_0_40px_hsl(var(--primary)/0.3)]
                         hover:shadow-[0_0_60px_hsl(var(--primary)/0.5)]
                         transition-shadow duration-500"
            />
          </div>
          
          {/* Text Column - 60% */}
          <div className="lg:col-span-3 space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              El Alma Detrás de <span className="gradient-text">Sabiduría Cuántica</span>
            </h2>
            
            <p className="text-xl font-semibold text-primary">
              Soy Damián, y no siempre creí en esto.
            </p>
            
            {/* First narrative block */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hasta los 27 años era completamente escéptico con la astrología y lo esotérico. 
                Hasta que llegó mi Retorno de Saturno, y con él, lo que Carl Jung llamó 
                "La Noche Oscura del Alma": años de crisis profunda donde tuve que enfrentarme 
                a mis sombras, integrar mis traumas y reconstruirme desde cero.
              </p>
              <p>
                En esa búsqueda desesperada por encontrar respuestas, comencé a investigar 
                todo lo que caía en mis manos. Cada libro, cada práctica, cada enseñanza 
                transformaba mi perspectiva sobre la realidad. Y entonces llegó la astrología a mi vida.
              </p>
            </div>
            
            {/* Highlighted Quote */}
            <blockquote className="text-xl md:text-2xl font-bold italic text-foreground my-8 pl-4 border-l-4 border-primary">
              "Una carta natal que sin conocerme, me conocía completamente."
            </blockquote>
            
            {/* Second narrative block */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Una herramienta que entendía mi esencia, mis patrones, mis dones y desafíos 
                como nadie nunca lo había hecho. Fue mi mapa de regreso a mí mismo.
              </p>
              <p>
                Desde entonces, hace 9 años que investigo, estudio y practico estas herramientas 
                ancestrales. Lo que comenzó como una búsqueda personal se convirtió en mi vocación: 
                acompañar procesos de transformación profunda.
              </p>
              <p>
                Hoy, mi misión es simple pero profunda: ayudar a quienes están pasando por lo que 
                yo pasé. Ser el guía que yo necesité en mi propio Retorno de Saturno, en mi propia crisis. 
                Porque creo que cada persona que busca respuestas merece encontrar las herramientas 
                que la conecten con su verdad más profunda.
              </p>
              <p className="text-primary font-medium">
                Si estás aquí, es porque algo resuena en ti.
                <br />
                Déjame acompañarte en tu camino de regreso a casa.
              </p>
            </div>
            
            {/* Signature */}
            <div className="pt-4">
              <p className="font-semibold text-foreground text-lg">— Damián</p>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Bell Ville, Córdoba, Argentina
              </p>
            </div>
            
            {/* Specialty Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              {specialties.map((specialty) => (
                <Badge 
                  key={specialty.label}
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 px-3 py-1.5 text-sm"
                >
                  <span className="mr-1.5">{specialty.emoji}</span>
                  {specialty.label}
                </Badge>
              ))}
            </div>
            
            {/* Experience Line */}
            <p className="text-sm text-muted-foreground">
              9 años de experiencia en Astrología Kármica, Numerología y Biodecodificación
            </p>
            
            {/* CTA Button */}
            <Button 
              asChild 
              size="lg" 
              className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              <Link to="/consultas">
                <Sparkles className="mr-2 h-5 w-5" />
                Reservar mi Consulta
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutMeSection.displayName = 'AboutMeSection';

export default AboutMeSection;
