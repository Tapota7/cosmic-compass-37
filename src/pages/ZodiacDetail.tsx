import { useParams, Link } from 'react-router-dom';
import { getSignById, Element } from '@/data/zodiacSigns';

const elementColors: Record<Element, string> = {
  'Fuego': 'element-fire',
  'Tierra': 'element-earth',
  'Aire': 'element-air',
  'Agua': 'element-water',
};

const ZodiacDetail = () => {
  const { id } = useParams<{ id: string }>();
  const sign = getSignById(id || '');

  if (!sign) {
    return (
      <div className="container mx-auto px-4 text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Signo no encontrado</h1>
        <Link to="/signos" className="text-primary hover:underline">← Volver a signos</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <Link to="/signos" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
        ← Volver a signos
      </Link>

      {/* Header */}
      <header className="glass-card text-center mb-8">
        <div className={`text-7xl mb-4 float-animation ${elementColors[sign.element]}`}>
          {sign.symbol}
        </div>
        <h1 className="font-display text-4xl font-bold mb-2">{sign.name}</h1>
        <p className="text-muted-foreground mb-4">{sign.dates}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <span className={`px-3 py-1 rounded-full bg-secondary ${elementColors[sign.element]}`}>
            {sign.element}
          </span>
          <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
            {sign.modality}
          </span>
          <span className="px-3 py-1 rounded-full bg-primary/20 text-primary">
            {sign.rulingPlanetSymbol} {sign.rulingPlanet}
          </span>
        </div>
      </header>

      {/* Archetype */}
      <section className="glass-card mb-6">
        <h2 className="font-display text-2xl font-semibold mb-4 flex items-center gap-2">
          <span>🎭</span> Arquetipo: {sign.archetype.title}
        </h2>
        <p className="text-muted-foreground leading-relaxed">{sign.archetype.description}</p>
      </section>

      {/* Positive Qualities */}
      <section className="glass-card mb-6">
        <h2 className="font-display text-2xl font-semibold mb-4 flex items-center gap-2">
          <span>✨</span> Cualidades Positivas
        </h2>
        <div className="grid gap-4">
          {sign.positiveQualities.map((quality, i) => (
            <div key={i} className="p-4 rounded-lg bg-secondary/30">
              <h3 className="font-semibold text-primary mb-1">{quality.title}</h3>
              <p className="text-sm text-muted-foreground">{quality.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shadow Aspects */}
      <section className="glass-card mb-6">
        <h2 className="font-display text-2xl font-semibold mb-4 flex items-center gap-2">
          <span>🌑</span> Aspectos Sombra
        </h2>
        <div className="grid gap-4">
          {sign.shadowAspects.map((shadow, i) => (
            <div key={i} className="p-4 rounded-lg bg-secondary/30">
              <h3 className="font-semibold text-destructive mb-1">{shadow.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{shadow.description}</p>
              <p className="text-sm text-primary">✨ Transformación: {shadow.transformation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mythology */}
      <section className="glass-card mb-6">
        <h2 className="font-display text-2xl font-semibold mb-4 flex items-center gap-2">
          <span>📜</span> Mitología
        </h2>
        <p className="text-muted-foreground leading-relaxed">{sign.mythology}</p>
      </section>

      {/* Element & Modality */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <section className="glass-card">
          <h2 className="font-display text-xl font-semibold mb-3 flex items-center gap-2">
            <span>🔥</span> El Elemento {sign.element}
          </h2>
          <p className="text-sm text-muted-foreground">{sign.elementDescription}</p>
        </section>
        <section className="glass-card">
          <h2 className="font-display text-xl font-semibold mb-3 flex items-center gap-2">
            <span>⚡</span> Modalidad {sign.modality}
          </h2>
          <p className="text-sm text-muted-foreground">{sign.modalityDescription}</p>
        </section>
      </div>

      {/* Ruling Planet */}
      <section className="glass-card">
        <h2 className="font-display text-2xl font-semibold mb-4 flex items-center gap-2">
          <span>{sign.rulingPlanetSymbol}</span> Planeta Regente: {sign.rulingPlanet}
        </h2>
        <p className="text-muted-foreground leading-relaxed">{sign.rulingPlanetDescription}</p>
      </section>
    </div>
  );
};

export default ZodiacDetail;
