import { Link } from 'react-router-dom';
import { ArrowLeft, User, Calendar, MapPin, GitBranch } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { reikiHistory, reikiLevels } from '@/data/reiki';

const ReikiHistory = () => {
  return (
    <>
      <SEOHead
        title="Historia del Reiki - Orígenes y Linaje"
        description="Descubre la historia del Reiki, desde Mikao Usui hasta la actualidad. Conoce los orígenes, el linaje y la evolución de esta antigua técnica de sanación."
        keywords="historia reiki, mikao usui, orígenes reiki, linaje reiki, hawayo takata"
      />

      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          to="/reiki/niveles"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Explorar Niveles de Reiki
        </Link>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4 float-animation">📜</div>
          <h1 className="font-display text-4xl font-bold gradient-text mb-4">
            Historia del Reiki
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            El camino de la energía universal a través del tiempo
          </p>
        </div>

        {/* Founder Section */}
        <div className="glass-card mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <User className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold">{reikiHistory.founder}</h2>
              <p className="text-muted-foreground">Fundador del Sistema Usui Reiki Ryoho</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Año de Fundación</p>
                <p className="font-semibold">{reikiHistory.foundingYear}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">País de Origen</p>
                <p className="font-semibold">{reikiHistory.origin}</p>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {reikiHistory.description}
          </p>
        </div>

        {/* Lineage Section */}
        <div className="glass-card mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <GitBranch className="w-6 h-6 text-accent-foreground" />
            </div>
            <h2 className="font-display text-2xl font-semibold">Linaje del Reiki</h2>
          </div>

          <div className="relative">
            {reikiHistory.lineage.map((person, index) => (
              <div key={index} className="flex items-start gap-4 mb-4 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary shrink-0" />
                  {index < reikiHistory.lineage.length - 1 && (
                    <div className="w-0.5 h-12 bg-primary/30" />
                  )}
                </div>
                <div className="pt-0">
                  <p className="font-medium">{person}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Evolution Section */}
        <div className="glass-card mb-8">
          <h2 className="font-display text-2xl font-semibold mb-6">Evolución del Sistema</h2>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-secondary/30 border-l-4 border-primary">
              <h3 className="font-semibold mb-2">1922 - El Despertar</h3>
              <p className="text-sm text-muted-foreground">
                Mikao Usui experimenta el satori (iluminación) en el Monte Kurama después de 21 días de meditación y ayuno. Recibe la capacidad de canalizar la energía universal.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-secondary/30 border-l-4 border-primary/70">
              <h3 className="font-semibold mb-2">1926 - Transición</h3>
              <p className="text-sm text-muted-foreground">
                Usui fallece habiendo iniciado a más de 2,000 estudiantes y 16 maestros. Su legado continúa a través de Chujiro Hayashi.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-secondary/30 border-l-4 border-primary/50">
              <h3 className="font-semibold mb-2">1937 - Llegada a Occidente</h3>
              <p className="text-sm text-muted-foreground">
                Hawayo Takata, una mujer japonesa-americana, aprende Reiki de Hayashi en Japón y eventualmente lo introduce en Hawái y el resto de Estados Unidos.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-secondary/30 border-l-4 border-primary/30">
              <h3 className="font-semibold mb-2">1980 - Expansión Global</h3>
              <p className="text-sm text-muted-foreground">
                Tras el fallecimiento de Takata, sus 22 maestros inician la expansión mundial del Reiki, creando diversas ramas y adaptaciones del sistema original.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-secondary/30 border-l-4 border-accent">
              <h3 className="font-semibold mb-2">Actualidad</h3>
              <p className="text-sm text-muted-foreground">
                El Reiki se practica en todo el mundo, integrado en hospitales, centros de bienestar y prácticas terapéuticas. Millones de personas han sido iniciadas en sus diferentes niveles.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="glass-card text-center">
          <h3 className="font-display text-lg font-semibold mb-4">Continúa Explorando</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/reiki/niveles"
              className="px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
            >
              Los 4 Niveles
            </Link>
            <Link
              to="/reiki/principios"
              className="px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
            >
              5 Principios
            </Link>
            <Link
              to="/reiki/simbolos"
              className="px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
            >
              Símbolos Sagrados
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReikiHistory;
