import { Link } from 'react-router-dom';
import { planets } from '@/data/planets';

const PlanetsList = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl font-bold gradient-text mb-4">Planetas</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Los cuerpos celestes y sus funciones psicológicas</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {planets.map((planet) => (
          <Link key={planet.id} to={`/planetas/${planet.id}`} className="glass-card group text-center">
            <div className="text-5xl mb-3 glow">{planet.symbol}</div>
            <h2 className="font-display text-xl font-semibold mb-2">{planet.name}</h2>
            <p className="text-xs text-muted-foreground">{planet.keywords.slice(0, 3).join(' • ')}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PlanetsList;
