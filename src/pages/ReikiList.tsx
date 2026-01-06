import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { reikiSymbols, reikiPrinciples, reikiLevels, chakrasReiki, handPositions, reikiHistory } from '@/data/reiki';

const ReikiList = () => {
  return (
    <>
      <SEOHead
        title="Reiki - Sanación Energética Universal"
        description="Aprende sobre Reiki: símbolos sagrados, los 5 principios, posiciones de manos, chakras y niveles. Guía completa de sanación energética."
        keywords="reiki, sanación energética, chakras, símbolos reiki, cho ku rei, sei he ki, meditación, energía universal"
      />

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center py-12 md:py-16">
          <div className="text-7xl md:text-8xl float-animation mb-6">✋</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
            Reiki
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            El arte japonés de la sanación a través de la imposición de manos.
            Canaliza la energía universal para equilibrar cuerpo, mente y espíritu.
          </p>
        </section>

        {/* What is Reiki */}
        <section className="mb-16">
          <div className="glass-card max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-semibold mb-4 flex items-center gap-2">
              <span>🌟</span> ¿Qué es Reiki?
            </h2>
            <p className="text-muted-foreground mb-4">
              Reiki (霊気) significa "energía vital universal" en japonés. <strong>Rei</strong> se traduce como "universal" o "espiritual", 
              mientras que <strong>Ki</strong> es la energía vital que fluye a través de todos los seres vivos.
            </p>
            <p className="text-muted-foreground mb-4">
              {reikiHistory.description}
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="px-4 py-2 rounded-lg bg-primary/10 text-sm">
                <span className="font-medium">Fundador:</span> {reikiHistory.founder}
              </div>
              <div className="px-4 py-2 rounded-lg bg-primary/10 text-sm">
                <span className="font-medium">Año:</span> {reikiHistory.foundingYear}
              </div>
              <div className="px-4 py-2 rounded-lg bg-primary/10 text-sm">
                <span className="font-medium">Origen:</span> {reikiHistory.origin}
              </div>
            </div>
          </div>
        </section>

        {/* 5 Principles */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center mb-8">
            🙏 Los 5 Principios de Reiki
          </h2>
          <div className="grid gap-4 max-w-4xl mx-auto">
            {reikiPrinciples.map((principle, index) => (
              <div key={principle.id} className="glass-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm text-primary/80 font-medium mb-1">{principle.japanese}</p>
                    <h3 className="font-display text-lg font-semibold mb-2">{principle.spanish}</h3>
                    <p className="text-muted-foreground text-sm">{principle.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Symbols */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center mb-2">
            🔯 Símbolos Sagrados
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Los símbolos de Reiki son llaves que desbloquean diferentes aspectos de la energía universal
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reikiSymbols.map((symbol) => (
              <Link
                key={symbol.id}
                to={`/reiki/${symbol.id}`}
                className="glass-card group cursor-pointer hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">🔮</span>
                  <div>
                    <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                      {symbol.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{symbol.japaneseName}</p>
                  </div>
                </div>
                <p className="text-primary/80 text-sm font-medium mb-2">"{symbol.meaning}"</p>
                <p className="text-muted-foreground text-sm line-clamp-3">{symbol.description}</p>
                <div className="mt-3">
                  <span className="inline-block px-2 py-1 rounded-full bg-secondary text-xs">
                    Nivel {symbol.level}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Levels */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center mb-2">
            📚 Niveles de Reiki
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            El camino del Reiki se divide en niveles progresivos de aprendizaje y maestría
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {reikiLevels.map((level, index) => (
              <div key={level.id} className="glass-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{level.name}</h3>
                    <p className="text-sm text-muted-foreground">{level.japaneseName}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{level.description}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-2">Qué aprenderás:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {level.whatYouLearn.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chakras */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center mb-2">
            🌈 Los 7 Chakras
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Centros energéticos del cuerpo que el Reiki ayuda a equilibrar y armonizar
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {chakrasReiki.map((chakra) => (
              <div key={chakra.id} className="glass-card text-center">
                <div 
                  className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl"
                  style={{ 
                    backgroundColor: chakra.color === 'Rojo' ? 'rgba(239,68,68,0.2)' :
                                    chakra.color === 'Naranja' ? 'rgba(249,115,22,0.2)' :
                                    chakra.color === 'Amarillo' ? 'rgba(234,179,8,0.2)' :
                                    chakra.color === 'Verde' ? 'rgba(34,197,94,0.2)' :
                                    chakra.color === 'Azul' ? 'rgba(59,130,246,0.2)' :
                                    chakra.color === 'Índigo' ? 'rgba(99,102,241,0.2)' :
                                    'rgba(168,85,247,0.2)'
                  }}
                >
                  ◉
                </div>
                <h3 className="font-display font-semibold mb-1">{chakra.name}</h3>
                <p className="text-sm text-primary/80 mb-2">{chakra.sanskritName}</p>
                <p className="text-xs text-muted-foreground mb-2">{chakra.location}</p>
                <div className="flex justify-center gap-2 text-xs">
                  <span className="px-2 py-1 rounded-full bg-secondary">{chakra.color}</span>
                  <span className="px-2 py-1 rounded-full bg-secondary">{chakra.element}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hand Positions Summary */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center mb-2">
            🤲 Posiciones de Manos
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Las {handPositions.length} posiciones tradicionales para la autosanación con Reiki
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {handPositions.map((position, index) => (
              <div key={position.id} className="glass-card">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-medium">{position.name}</h3>
                    <p className="text-xs text-muted-foreground">{position.area}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{position.description}</p>
                <p className="text-xs text-primary">⏱ {position.duration}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-8">
          <div className="glass-card max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Aviso:</strong> El Reiki es una práctica complementaria de bienestar y no sustituye 
              el diagnóstico o tratamiento médico profesional. Siempre consulta con profesionales de la 
              salud para cualquier condición médica.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReikiList;
