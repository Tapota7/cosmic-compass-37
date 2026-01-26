import { Link } from 'react-router-dom';
import { planets } from '@/data/planets';
import { usePlanetImages } from '@/hooks/usePlanetImages';
import SEOHead from '@/components/SEOHead';

const PlanetsList = () => {
  const { getImageForPlanet, isLoading } = usePlanetImages();

  return (
    <>
      <SEOHead
        title="Planetas Astrológicos"
        description="Descubre el significado de los planetas en astrología: Sol, Luna, Mercurio, Venus, Marte, Júpiter, Saturno y más. Sus funciones psicológicas y expresiones."
        keywords="planetas astrología, significado planetas, sol luna mercurio venus marte jupiter saturno, carta natal planetas"
      />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl font-bold gradient-text mb-4">Planetas</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Los cuerpos celestes y sus funciones psicológicas</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {planets.map((planet) => {
            const imageUrl = getImageForPlanet(planet.id);
            
            return (
              <Link key={planet.id} to={`/planetas/${planet.id}`} className="glass-card group text-center overflow-hidden">
                {imageUrl ? (
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                    <img 
                      src={imageUrl} 
                      alt={planet.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="text-5xl mb-3 glow">{planet.symbol}</div>
                )}
                <h2 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{planet.name}</h2>
                <p className="text-xs text-muted-foreground">{planet.keywords.slice(0, 3).join(' • ')}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PlanetsList;
