import { Link } from 'react-router-dom';
import { houses } from '@/data/houses';

const HousesList = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl font-bold gradient-text mb-4">Casas Astrológicas</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Las 12 casas representan diferentes áreas de la vida</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {houses.map((house) => (
          <Link key={house.id} to={`/casas/${house.id}`} className="glass-card group text-center">
            <div className="text-4xl mb-3">{house.symbol}</div>
            <h2 className="font-display text-xl font-semibold mb-1">Casa {house.number}</h2>
            <p className="text-sm text-primary mb-2">{house.name}</p>
            <p className="text-xs text-muted-foreground">{house.keywords.slice(0, 3).join(' • ')}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HousesList;
