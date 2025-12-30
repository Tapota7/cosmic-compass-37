import { Link } from 'react-router-dom';
import { zodiacSigns, Element } from '@/data/zodiacSigns';

const elementColors: Record<Element, string> = {
  'Fuego': 'element-fire',
  'Tierra': 'element-earth',
  'Aire': 'element-air',
  'Agua': 'element-water',
};

const ZodiacList = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl font-bold gradient-text mb-4">
          Signos del Zodíaco
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explora los 12 arquetipos del zodíaco, desde Aries hasta Piscis
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {zodiacSigns.map((sign) => (
          <Link
            key={sign.id}
            to={`/signos/${sign.id}`}
            className="glass-card group text-center"
          >
            <div className={`text-5xl mb-3 float-animation ${elementColors[sign.element]}`}>
              {sign.symbol}
            </div>
            <h2 className="font-display text-xl font-semibold mb-1">
              {sign.name}
            </h2>
            <p className="text-sm text-muted-foreground mb-2">{sign.dates}</p>
            <div className="flex justify-center gap-2">
              <span className={`text-xs px-2 py-1 rounded-full bg-${sign.element.toLowerCase()}/20 ${elementColors[sign.element]}`}>
                {sign.element}
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                {sign.modality}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ZodiacList;
