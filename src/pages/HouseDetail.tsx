import { useParams, Link } from 'react-router-dom';
import { getHouseById } from '@/data/houses';
import BackButton from '@/components/BackButton';
import FavoriteButton from '@/components/FavoriteButton';
import SEOHead from '@/components/SEOHead';

const HouseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const house = getHouseById(id || '');

  if (!house) {
    return (
      <div className="container mx-auto px-4 text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Casa no encontrada</h1>
        <Link to="/casas" className="text-primary hover:underline">← Volver a casas</Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`Casa ${house.number} - ${house.name}`}
        description={`${house.meaning}. Áreas de vida: ${house.areasOfLife.slice(0, 3).join(', ')}.`}
        keywords={`casa ${house.number}, ${house.name}, casas astrológicas, astrología`}
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <BackButton fallbackPath="/casas" label="Volver a casas" />
        <header className="glass-card text-center mb-8 relative">
          <div className="absolute top-4 right-4">
            <FavoriteButton id={house.id} type="casa" name={`Casa ${house.number}`} symbol={house.symbol} />
          </div>
          <div className="text-6xl mb-4 float-animation">{house.symbol}</div>
          <h1 className="font-display text-4xl font-bold mb-2">Casa {house.number}</h1>
          <p className="text-xl text-primary">{house.name}</p>
        </header>
        <section className="glass-card mb-6">
          <h2 className="font-display text-2xl font-semibold mb-4">Significado</h2>
          <p className="text-muted-foreground leading-relaxed">{house.meaning}</p>
        </section>
        <section className="glass-card mb-6">
          <h2 className="font-display text-2xl font-semibold mb-4">Áreas de Vida</h2>
          <ul className="grid gap-2">{house.areasOfLife.map((area, i) => <li key={i} className="flex items-center gap-2 text-muted-foreground"><span className="text-primary">•</span>{area}</li>)}</ul>
        </section>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <section className="glass-card">
            <h2 className="font-display text-xl font-semibold mb-3 text-primary">✨ Aspectos Positivos</h2>
            <ul className="space-y-2">{house.positiveAspects.map((a, i) => <li key={i} className="text-sm text-muted-foreground">• {a}</li>)}</ul>
          </section>
          <section className="glass-card">
            <h2 className="font-display text-xl font-semibold mb-3 text-destructive">🌑 Desafíos</h2>
            <ul className="space-y-2">{house.challenges.map((c, i) => <li key={i} className="text-sm text-muted-foreground">• {c}</li>)}</ul>
          </section>
        </div>
        <section className="glass-card">
          <h2 className="font-display text-2xl font-semibold mb-4">Trabajar con esta Casa</h2>
          <p className="text-muted-foreground leading-relaxed">{house.workingWith}</p>
        </section>
      </div>
    </>
  );
};

export default HouseDetail;
