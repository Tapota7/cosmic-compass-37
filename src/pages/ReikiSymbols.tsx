import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import BackButton from '@/components/BackButton';
import { reikiSymbols } from '@/data/reiki';

const ReikiSymbols = () => {
  return (
    <>
      <SEOHead
        title="Símbolos Sagrados de Reiki - Cho Ku Rei, Sei He Ki, Hon Sha Ze Sho Nen"
        description="Conoce los símbolos sagrados de Reiki: Cho Ku Rei, Sei He Ki, Hon Sha Ze Sho Nen, Dai Ko Myo y Raku. Su significado, usos y cómo trazarlos."
        keywords="símbolos reiki, cho ku rei, sei he ki, hon sha ze sho nen, dai ko myo, raku, símbolos sagrados"
      />

      <div className="container mx-auto px-4">
        <BackButton fallbackPath="/reiki" label="Volver a Reiki" />

        {/* Hero Section */}
        <section className="text-center py-12 md:py-16">
          <div className="text-7xl md:text-8xl float-animation mb-6">🔯</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
            Símbolos Sagrados de Reiki
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Las llaves que desbloquean diferentes aspectos de la energía universal.
            Cada símbolo tiene un propósito específico en la práctica de Reiki.
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <div className="glass-card max-w-4xl mx-auto">
            <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <span>✨</span> Sobre los Símbolos
            </h2>
            <p className="text-muted-foreground mb-4">
              Los símbolos de Reiki son herramientas sagradas transmitidas de maestro a estudiante 
              durante las iniciaciones. Actúan como "llaves" que abren diferentes frecuencias de 
              la energía universal, permitiendo al practicante dirigir el Reiki de maneras específicas.
            </p>
            <p className="text-muted-foreground">
              Cada símbolo tiene un nombre en japonés que funciona como mantra, y una forma visual 
              que se traza mental o físicamente para activar su energía. La combinación del mantra 
              y el símbolo visual crea una poderosa herramienta de sanación.
            </p>
          </div>
        </section>

        {/* Symbols Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reikiSymbols.map((symbol) => (
              <Link
                key={symbol.id}
                to={`/reiki/${symbol.id}`}
                className="glass-card group cursor-pointer hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-2xl">
                    🔮
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                      {symbol.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{symbol.japaneseName}</p>
                  </div>
                </div>
                
                <p className="text-primary/80 text-sm font-medium mb-3 italic">
                  "{symbol.meaning}"
                </p>
                
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {symbol.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium">
                    Nivel {symbol.level}
                  </span>
                  <span className="text-primary text-sm group-hover:translate-x-1 transition-transform">
                    Ver más →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Levels Summary */}
        <section className="mb-16">
          <div className="glass-card max-w-4xl mx-auto">
            <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <span>📚</span> Símbolos por Nivel
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                <h3 className="font-medium mb-2">Nivel II</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Cho Ku Rei (Poder)</li>
                  <li>• Sei He Ki (Mental)</li>
                  <li>• Hon Sha Ze Sho Nen (Distancia)</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                <h3 className="font-medium mb-2">Nivel III</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Dai Ko Myo (Maestro)</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                <h3 className="font-medium mb-2">Maestría</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Raku (Finalización)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReikiSymbols;
