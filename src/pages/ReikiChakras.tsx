import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import BackButton from '@/components/BackButton';
import { chakrasReiki } from '@/data/reiki';

const ReikiChakras = () => {
  const getChakraColorClass = (color: string) => {
    const colors: Record<string, string> = {
      'Rojo': 'from-red-500/30 to-red-500/10 border-red-500/30',
      'Naranja': 'from-orange-500/30 to-orange-500/10 border-orange-500/30',
      'Amarillo': 'from-yellow-500/30 to-yellow-500/10 border-yellow-500/30',
      'Verde': 'from-green-500/30 to-green-500/10 border-green-500/30',
      'Azul': 'from-blue-500/30 to-blue-500/10 border-blue-500/30',
      'Índigo': 'from-indigo-500/30 to-indigo-500/10 border-indigo-500/30',
      'Violeta': 'from-purple-500/30 to-purple-500/10 border-purple-500/30',
    };
    return colors[color] || 'from-primary/30 to-primary/10 border-primary/30';
  };

  return (
    <>
      <SEOHead
        title="Los 7 Chakras y Reiki - Centros Energéticos"
        description="Los 7 chakras y su relación con Reiki: Raíz, Sacro, Plexo Solar, Corazón, Garganta, Tercer Ojo y Corona. Cómo equilibrarlos con energía Reiki."
        keywords="chakras reiki, 7 chakras, muladhara, svadhisthana, manipura, anahata, vishuddha, ajna, sahasrara, equilibrio chakras"
      />

      <div className="container mx-auto px-4">
        <BackButton fallbackPath="/reiki" label="Volver a Reiki" />

        {/* Hero Section */}
        <section className="text-center py-12 md:py-16">
          <div className="text-7xl md:text-8xl float-animation mb-6">🌈</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
            Los 7 Chakras y Reiki
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Los centros energéticos del cuerpo que el Reiki ayuda a equilibrar, 
            limpiar y armonizar para una salud integral.
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <div className="glass-card max-w-4xl mx-auto">
            <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <span>💫</span> Los Chakras y la Energía
            </h2>
            <p className="text-muted-foreground mb-4">
              Los chakras son centros de energía sutil ubicados a lo largo de la columna vertebral. 
              La palabra "chakra" proviene del sánscrito y significa "rueda" o "disco", describiendo 
              el movimiento giratorio de estos vórtices energéticos.
            </p>
            <p className="text-muted-foreground">
              En Reiki, trabajamos con los chakras para identificar bloqueos energéticos y restablecer 
              el flujo natural del ki (energía vital). Cuando los chakras están equilibrados, 
              experimentamos salud física, claridad mental y bienestar emocional.
            </p>
          </div>
        </section>

        {/* Chakras Vertical Display */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto space-y-6">
            {[...chakrasReiki].reverse().map((chakra, index) => (
              <Link 
                key={chakra.id}
                to={`/reiki/chakras/${chakra.id}`}
                className={`glass-card border-l-4 ${getChakraColorClass(chakra.color).split(' ')[2]} block hover:bg-secondary/50 transition-colors group`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Chakra Symbol */}
                  <div className="flex items-center gap-4 md:w-1/4">
                    <div 
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${getChakraColorClass(chakra.color).split(' ').slice(0, 2).join(' ')} flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      ◉
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{chakra.name}</h3>
                      <p className="text-sm text-primary/80">{chakra.sanskritName}</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="md:w-3/4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-secondary text-xs">
                        🎨 {chakra.color}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-secondary text-xs">
                        📍 {chakra.location}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-secondary text-xs">
                        🌀 {chakra.element}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {chakra.reikiConnection}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Signos afines:</span>
                        {chakra.balancingSigns.map((sign) => (
                          <span 
                            key={sign}
                            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                          >
                            {sign}
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Ver más →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Balance */}
        <section className="mb-16">
          <div className="glass-card max-w-4xl mx-auto">
            <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <span>⚖️</span> Equilibrar Chakras con Reiki
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-3">Técnica Básica</h3>
                <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                  <li>Centra tu energía y activa el Reiki</li>
                  <li>Escanea el cuerpo para detectar desequilibrios</li>
                  <li>Coloca las manos sobre cada chakra, comenzando por la raíz</li>
                  <li>Visualiza el color correspondiente brillando con intensidad</li>
                  <li>Permanece 3-5 minutos en cada centro energético</li>
                  <li>Sella con Cho Ku Rei al finalizar</li>
                </ol>
              </div>
              <div>
                <h3 className="font-medium mb-3">Señales de Desequilibrio</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Bloqueo:</strong> Sensación fría, vacía o "estancada"</li>
                  <li>• <strong>Exceso:</strong> Calor intenso, pulsación fuerte</li>
                  <li>• <strong>Déficit:</strong> Poca o ninguna sensación energética</li>
                  <li>• <strong>Equilibrio:</strong> Calor suave, flujo armónico</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Chakra Map */}
        <section className="mb-16">
          <div className="glass-card max-w-4xl mx-auto text-center">
            <h2 className="font-display text-xl font-semibold mb-6">
              Mapa de Chakras
            </h2>
            <div className="flex justify-center">
              <div className="flex flex-col items-center gap-2">
                {[...chakrasReiki].reverse().map((chakra) => (
                  <div 
                    key={chakra.id}
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${getChakraColorClass(chakra.color).split(' ').slice(0, 2).join(' ')} flex items-center justify-center text-sm`}
                    title={chakra.name}
                  >
                    ◉
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Corona → Tercer Ojo → Garganta → Corazón → Plexo Solar → Sacro → Raíz
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReikiChakras;
