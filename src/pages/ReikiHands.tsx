import SEOHead from '@/components/SEOHead';
import BackButton from '@/components/BackButton';
import { handPositions } from '@/data/reiki';

const ReikiHands = () => {
  // Group positions by area
  const positionsByArea = handPositions.reduce((acc, position) => {
    const area = position.area;
    if (!acc[area]) acc[area] = [];
    acc[area].push(position);
    return acc;
  }, {} as Record<string, typeof handPositions>);

  const areaEmojis: Record<string, string> = {
    'Cabeza': '🧠',
    'Cuello': '🗣️',
    'Pecho': '💚',
    'Abdomen Superior': '☀️',
    'Abdomen': '🔥',
    'Pelvis': '🌱',
    'Espalda Alta': '💪',
    'Espalda': '❤️',
    'Espalda Baja': '💧',
    'Base de la Columna': '🌍',
  };

  return (
    <>
      <SEOHead
        title="Posiciones de Manos Reiki - 12 Posiciones para Autosanación"
        description="Las 12 posiciones tradicionales de manos para autosanación con Reiki. Aprende dónde colocar las manos, duración y beneficios de cada posición."
        keywords="posiciones manos reiki, autosanación reiki, tratamiento reiki, imposición de manos, sanación energética"
      />

      <div className="container mx-auto px-4">
        <BackButton fallbackPath="/reiki" label="Volver a Reiki" />

        {/* Hero Section */}
        <section className="text-center py-12 md:py-16">
          <div className="text-7xl md:text-8xl float-animation mb-6">🤲</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
            Posiciones de Manos
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Las {handPositions.length} posiciones tradicionales para canalizar 
            la energía Reiki durante la autosanación y el tratamiento a otros.
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <div className="glass-card max-w-4xl mx-auto">
            <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <span>✋</span> Sobre las Posiciones
            </h2>
            <p className="text-muted-foreground mb-4">
              Las posiciones de manos en Reiki son una guía para dirigir la energía universal 
              hacia diferentes áreas del cuerpo. Cada posición corresponde a chakras, órganos 
              y sistemas energéticos específicos.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 text-center">
                <div className="text-2xl mb-2">⏱</div>
                <p className="font-medium text-sm">Duración</p>
                <p className="text-muted-foreground text-xs">3-5 minutos por posición</p>
              </div>
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 text-center">
                <div className="text-2xl mb-2">🔄</div>
                <p className="font-medium text-sm">Sesión Completa</p>
                <p className="text-muted-foreground text-xs">45-60 minutos total</p>
              </div>
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 text-center">
                <div className="text-2xl mb-2">🧘</div>
                <p className="font-medium text-sm">Frecuencia</p>
                <p className="text-muted-foreground text-xs">Diaria para autosanación</p>
              </div>
            </div>
          </div>
        </section>

        {/* Positions by Area */}
        {Object.entries(positionsByArea).map(([area, positions]) => (
          <section key={area} className="mb-12">
            <h2 className="font-display text-2xl font-semibold mb-6 flex items-center gap-2">
              <span>{areaEmojis[area] || '✋'}</span> {area}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {positions.map((position, index) => {
                const globalIndex = handPositions.findIndex(p => p.id === position.id) + 1;
                return (
                  <div key={position.id} className="glass-card">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-primary font-bold">
                        {globalIndex}
                      </span>
                      <div>
                        <h3 className="font-display font-semibold">{position.name}</h3>
                        <p className="text-xs text-primary/70">⏱ {position.duration}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {position.description}
                    </p>
                    
                    <div>
                      <p className="text-xs font-medium text-primary mb-2">Beneficios:</p>
                      <div className="flex flex-wrap gap-1">
                        {position.benefits.map((benefit, i) => (
                          <span 
                            key={i} 
                            className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        {/* Tips */}
        <section className="mb-16">
          <div className="glass-card max-w-4xl mx-auto">
            <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <span>💡</span> Consejos para la Práctica
            </h2>
            <div className="space-y-4 text-muted-foreground text-sm">
              <p>
                <strong>Preparación:</strong> Busca un lugar tranquilo, lávate las manos, 
                y toma unas respiraciones profundas antes de comenzar.
              </p>
              <p>
                <strong>Intención:</strong> Establece una intención clara antes de iniciar. 
                Puede ser sanación general o trabajar un tema específico.
              </p>
              <p>
                <strong>Manos relajadas:</strong> Mantén las manos relajadas y ligeramente 
                curvadas. No es necesario presionar, solo apoyar suavemente.
              </p>
              <p>
                <strong>Sigue tu intuición:</strong> Si sientes que una posición necesita 
                más tiempo, permanece ahí. Tu cuerpo sabe lo que necesita.
              </p>
              <p>
                <strong>Cierre:</strong> Al terminar, agradece a la energía Reiki y toma 
                un momento para integrarte antes de levantarte.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReikiHands;
