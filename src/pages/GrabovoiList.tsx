import { useState } from 'react';
import { Link } from 'react-router-dom';
import { grabovoiCategories, getGrabovoiByCategory, searchGrabovoi } from '@/data/grabovoi';
import SEOHead from '@/components/SEOHead';
import { Search } from 'lucide-react';

const GrabovoiList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const searchResults = searchQuery ? searchGrabovoi(searchQuery) : null;

  return (
    <>
      <SEOHead
        title="Números de Grabovoi - Secuencias de Sanación"
        description="Descubre los números de Grabovoi para sanación, abundancia, amor y protección. Secuencias numéricas sagradas para transformar tu realidad."
        keywords="Grabovoi, números sagrados, secuencias numéricas, sanación, abundancia, protección"
      />
      
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4 float-animation">💫</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
            Números de Grabovoi
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Secuencias numéricas sagradas creadas por Grigori Grabovoi para la sanación, 
            manifestación y transformación de la realidad a través de la concentración mental.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por nombre, código o categoría..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        {/* How to Use Section */}
        <section className="glass-card mb-12">
          <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
            <span>📖</span> ¿Cómo usar los números de Grabovoi?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2">
              <h3 className="font-semibold text-primary">1. Visualización</h3>
              <p className="text-muted-foreground">
                Cierra los ojos y visualiza cada número de la secuencia, uno por uno, 
                rodeados de luz blanca o del color asociado a tu intención.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-primary">2. Repetición</h3>
              <p className="text-muted-foreground">
                Repite la secuencia en voz alta o mentalmente mientras te concentras 
                en tu objetivo. La repetición refuerza la energía del código.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-primary">3. Escritura</h3>
              <p className="text-muted-foreground">
                Escribe la secuencia en papel, en tu cuerpo o en objetos significativos. 
                Colócala donde puedas verla frecuentemente.
              </p>
            </div>
          </div>
        </section>

        {/* Search Results */}
        {searchResults && (
          <section className="mb-12">
            <h2 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
              <span>🔍</span> Resultados de búsqueda ({searchResults.length})
            </h2>
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResults.map((num) => (
                  <Link
                    key={num.id}
                    to={`/grabovoi/${num.id}`}
                    className="glass-card group cursor-pointer hover:border-primary/50"
                  >
                    <div className="text-2xl font-mono font-bold text-primary mb-2 group-hover:scale-105 transition-transform">
                      {num.code}
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-1">{num.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{num.description}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-8">
                No se encontraron resultados para "{searchQuery}"
              </p>
            )}
          </section>
        )}

        {/* Categories */}
        {!searchResults && grabovoiCategories.map((category) => {
          const numbers = getGrabovoiByCategory(category.id);
          return (
            <section key={category.id} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.emoji}</span>
                <h2 className="font-display text-2xl font-semibold">{category.name}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {numbers.map((num) => (
                  <Link
                    key={num.id}
                    to={`/grabovoi/${num.id}`}
                    className={`glass-card group cursor-pointer hover:border-${category.color}-500/50 transition-all`}
                  >
                    <div className={`text-2xl font-mono font-bold text-${category.color}-400 mb-2 group-hover:scale-105 transition-transform`}>
                      {num.code}
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-1">{num.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{num.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {/* Disclaimer */}
        <section className="glass-card text-center text-sm text-muted-foreground mb-8">
          <p>
            <strong>Nota:</strong> Los números de Grabovoi son herramientas de concentración mental y meditación. 
            No reemplazan tratamientos médicos profesionales. Consulta siempre a un especialista de salud 
            para cualquier condición médica.
          </p>
        </section>
      </div>
    </>
  );
};

export default GrabovoiList;
