import { useParams, Link } from 'react-router-dom';
import { getSignById, Element } from '@/data/zodiacSigns';
import { useZodiacImages } from '@/hooks/useZodiacImages';
import SEOHead from '@/components/SEOHead';
import FavoriteButton from '@/components/FavoriteButton';
import ShareButtons from '@/components/ShareButtons';
import BackButton from '@/components/BackButton';

const elementColors: Record<Element, string> = {
  'Fuego': 'element-fire',
  'Tierra': 'element-earth',
  'Aire': 'element-air',
  'Agua': 'element-water',
};

const ZodiacDetail = () => {
  const { id } = useParams<{ id: string }>();
  const sign = getSignById(id || '');
  const { getImageForSign } = useZodiacImages();
  const imageUrl = sign ? getImageForSign(sign.id) : null;

  if (!sign) {
    return (
      <div className="container mx-auto px-4 text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Signo no encontrado</h1>
        <Link to="/signos" className="text-primary hover:underline">← Volver a signos</Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${sign.name} - Signo Zodiacal`}
        description={`${sign.archetype.title}. ${sign.dates}. Elemento ${sign.element}, regido por ${sign.rulingPlanet}. Descubre las cualidades, sombras y mitología de ${sign.name}.`}
        keywords={`${sign.name}, ${sign.element}, ${sign.modality}, ${sign.rulingPlanet}, zodíaco, astrología, horóscopo`}
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <BackButton fallbackPath="/signos" label="Volver a signos" />

        {/* Header */}
        <header className="glass-card text-center mb-8 relative">
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <FavoriteButton id={sign.id} type="signo" name={sign.name} symbol={sign.symbol} />
          </div>
          
          {imageUrl ? (
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/30">
              <img 
                src={imageUrl} 
                alt={sign.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className={`text-7xl mb-4 float-animation ${elementColors[sign.element]}`}>
              {sign.symbol}
            </div>
          )}
          <h1 className="font-display text-4xl font-bold mb-2">{sign.name}</h1>
          <p className="text-muted-foreground mb-4">{sign.dates}</p>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
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
          
          <ShareButtons
            title={`${sign.name} - ${sign.archetype.title}`}
            text={`Descubre todo sobre ${sign.name}: ${sign.keywords.join(', ')}`}
            className="justify-center"
          />
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

        {/* Compatibility Link */}
        <div className="mt-8 text-center">
          <Link 
            to="/compatibilidad" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
          >
            💕 Calcular compatibilidad con otro signo
          </Link>
        </div>
      </div>
    </>
  );
};

export default ZodiacDetail;
