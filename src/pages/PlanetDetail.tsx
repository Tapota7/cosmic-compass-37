import { useParams, Link } from 'react-router-dom';
import { getPlanetById } from '@/data/planets';
import BackButton from '@/components/BackButton';
import FavoriteButton from '@/components/FavoriteButton';
import SEOHead from '@/components/SEOHead';

const PlanetDetail = () => {
  const { id } = useParams<{ id: string }>();
  const planet = getPlanetById(id || '');

  if (!planet) {
    return (
      <div className="container mx-auto px-4 text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Planeta no encontrado</h1>
        <Link to="/planetas" className="text-primary hover:underline">← Volver a planetas</Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${planet.name} - Planeta Astrológico`}
        description={`${planet.psychologicalFunction}. Período orbital: ${planet.orbitalPeriod}.`}
        keywords={`${planet.name}, planetas, astrología, carta natal`}
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <BackButton fallbackPath="/planetas" label="Volver a planetas" />
        <header className="glass-card text-center mb-8 relative">
          <div className="absolute top-4 right-4">
            <FavoriteButton id={planet.id} type="planeta" name={planet.name} symbol={planet.symbol} />
          </div>
          <div className="text-7xl mb-4 glow float-animation">{planet.symbol}</div>
          <h1 className="font-display text-4xl font-bold mb-2">{planet.name}</h1>
          <p className="text-muted-foreground">Período orbital: {planet.orbitalPeriod}</p>
          {planet.ruledSigns.length > 0 && (
            <p className="text-primary mt-2">Rige: {planet.ruledSigns.join(', ')}</p>
          )}
        </header>
        <section className="glass-card mb-6">
          <h2 className="font-display text-2xl font-semibold mb-4">Función Psicológica</h2>
          <p className="text-muted-foreground leading-relaxed">{planet.psychologicalFunction}</p>
        </section>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <section className="glass-card">
            <h2 className="font-display text-xl font-semibold mb-3 text-primary">✨ Expresión Positiva</h2>
            <ul className="space-y-2">{planet.positiveExpression.map((p, i) => <li key={i} className="text-sm text-muted-foreground">• {p}</li>)}</ul>
          </section>
          <section className="glass-card">
            <h2 className="font-display text-xl font-semibold mb-3 text-destructive">🌑 Expresión Sombra</h2>
            <ul className="space-y-2">{planet.shadowExpression.map((s, i) => <li key={i} className="text-sm text-muted-foreground">• {s}</li>)}</ul>
          </section>
        </div>
        <section className="glass-card">
          <h2 className="font-display text-2xl font-semibold mb-4">En la Carta Natal</h2>
          <p className="text-muted-foreground leading-relaxed">{planet.inNatalChart}</p>
        </section>
      </div>
    </>
  );
};

export default PlanetDetail;
