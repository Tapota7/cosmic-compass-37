import { useParams, Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import BackButton from '@/components/BackButton';
import FavoriteButton from '@/components/FavoriteButton';
import { getReikiSymbolById, reikiSymbols } from '@/data/reiki';

const ReikiDetail = () => {
  const { id } = useParams();
  const symbol = getReikiSymbolById(id || '');

  if (!symbol) {
    return (
      <div className="container mx-auto px-4 text-center py-16">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="font-display text-2xl font-bold mb-4">Símbolo no encontrado</h1>
        <p className="text-muted-foreground mb-6">El símbolo que buscas no existe.</p>
        <Link to="/reiki" className="text-primary hover:underline">
          ← Volver a Reiki
        </Link>
      </div>
    );
  }

  const relatedSymbols = reikiSymbols
    .filter(s => s.id !== symbol.id)
    .slice(0, 3);

  return (
    <>
      <SEOHead
        title={`${symbol.name} - Símbolo de Reiki`}
        description={`${symbol.meaning}. ${symbol.description.substring(0, 150)}...`}
        keywords={`${symbol.name}, ${symbol.japaneseName}, reiki, símbolo reiki, sanación energética, nivel ${symbol.level}`}
      />

      <div className="container mx-auto px-4 max-w-4xl">
        <BackButton fallbackPath="/reiki" />

        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Nivel {symbol.level}
          </div>
          <div className="text-7xl md:text-8xl float-animation mb-6">🔮</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
            {symbol.name}
          </h1>
          <p className="text-xl text-muted-foreground mb-2">{symbol.japaneseName}</p>
          <p className="text-lg text-primary/80 italic">"{symbol.meaning}"</p>
          
          <div className="mt-6">
            <FavoriteButton
              id={symbol.id}
              type="reiki"
              name={symbol.name}
              symbol="🔮"
            />
          </div>
        </header>

        {/* Description */}
        <section className="glass-card mb-8">
          <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
            <span>📖</span> Descripción
          </h2>
          <p className="text-muted-foreground leading-relaxed">{symbol.description}</p>
        </section>

        {/* Uses */}
        <section className="glass-card mb-8">
          <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
            <span>✨</span> Usos y Aplicaciones
          </h2>
          <ul className="space-y-3">
            {symbol.uses.map((use, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm shrink-0">
                  {index + 1}
                </span>
                <span className="text-muted-foreground">{use}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Visual Description */}
        <section className="glass-card mb-8">
          <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
            <span>👁</span> Descripción Visual
          </h2>
          <p className="text-muted-foreground mb-4">{symbol.visualDescription}</p>
        </section>

        {/* How to Draw */}
        <section className="glass-card mb-8">
          <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
            <span>✏️</span> Cómo Trazarlo
          </h2>
          <ol className="space-y-3">
            {symbol.howToDraw.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-sm font-medium shrink-0">
                  {index + 1}
                </span>
                <span className="text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Practice Tips */}
        <section className="glass-card mb-8 bg-primary/5">
          <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
            <span>💡</span> Consejos de Práctica
          </h2>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Practica trazar el símbolo con la mano, visualizándolo en luz dorada o violeta.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Repite mentalmente el nombre del símbolo tres veces mientras lo trazas.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Medita con el símbolo para profundizar tu conexión con su energía.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Recuerda que los símbolos son sagrados y deben usarse con respeto e intención positiva.</span>
            </li>
          </ul>
        </section>

        {/* Related Symbols */}
        {relatedSymbols.length > 0 && (
          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold mb-4">Otros Símbolos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedSymbols.map((related) => (
                <Link
                  key={related.id}
                  to={`/reiki/${related.id}`}
                  className="glass-card text-center hover:border-primary/50 transition-all"
                >
                  <span className="text-3xl block mb-2">🔮</span>
                  <h3 className="font-medium">{related.name}</h3>
                  <p className="text-xs text-muted-foreground">Nivel {related.level}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ReikiDetail;
