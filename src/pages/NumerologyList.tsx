import { Link } from 'react-router-dom';
import { getBasicNumbers, getMasterNumbers, getKarmicNumbers } from '@/data/numerology';
import SEOHead from '@/components/SEOHead';

const NumerologyList = () => {
  const basicNumbers = getBasicNumbers();
  const masterNumbers = getMasterNumbers();
  const karmicNumbers = getKarmicNumbers();

  return (
    <>
      <SEOHead
        title="Números de Numerología - Básicos, Maestros y Kármicos"
        description="Explora todos los números de la numerología: del 1 al 9, los números maestros 11, 22 y 33, y los números kármicos 13, 14, 16 y 19. Descubre su significado profundo."
        keywords="numerología, números maestros, números kármicos, significado números, 11 22 33"
      />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4 float-animation">🔢</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
            Números de la Numerología
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explora el significado profundo de cada número: los básicos, los poderosos números maestros 
            y los transformadores números kármicos.
          </p>
          <Link 
            to="/calculadora" 
            className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary/80 transition-colors"
          >
            🧮 Ir a la calculadora de numerología →
          </Link>
        </div>

        {/* Números Básicos */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">✨</span>
            <h2 className="font-display text-2xl font-semibold">Números Básicos (1-9)</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Los números fundamentales que representan las energías arquetípicas de la existencia.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {basicNumbers.map((num) => (
              <Link
                key={num.number}
                to={`/numeros/${num.number}`}
                className="glass-card group cursor-pointer hover:border-primary/50"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="number-circle text-2xl font-bold text-primary-foreground group-hover:scale-110 transition-transform">
                    {num.number}
                  </div>
                  <h3 className="font-display text-lg font-semibold">{num.name}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {num.keywords.slice(0, 3).map((k, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                      {k}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {num.meaning.substring(0, 100)}...
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Números Maestros */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">👑</span>
            <h2 className="font-display text-2xl font-semibold">Números Maestros</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Números de vibración superior que traen grandes dones y responsabilidades espirituales.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {masterNumbers.map((num) => (
              <Link
                key={num.number}
                to={`/numeros/${num.number}`}
                className="glass-card group cursor-pointer border-2 border-amber-500/30 hover:border-amber-500/60 bg-gradient-to-br from-amber-500/5 to-transparent"
              >
                <div className="absolute top-2 right-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-amber-500/20 text-amber-400 font-medium">
                    Maestro
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/30">
                    {num.number}
                  </div>
                  <h3 className="font-display text-lg font-semibold">{num.name}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {num.keywords.slice(0, 3).map((k, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400">
                      {k}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {num.meaning.substring(0, 100)}...
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Números Kármicos */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🔥</span>
            <h2 className="font-display text-2xl font-semibold">Números Kármicos</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Números que indican lecciones pendientes de vidas pasadas y oportunidades de sanación profunda.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {karmicNumbers.map((num) => (
              <Link
                key={num.number}
                to={`/numeros/${num.number}`}
                className="glass-card group cursor-pointer border-2 border-rose-500/30 hover:border-rose-500/60 bg-gradient-to-br from-rose-500/5 to-transparent"
              >
                <div className="absolute top-2 right-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-rose-500/20 text-rose-400 font-medium">
                    Kármico
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center text-xl font-bold text-white group-hover:scale-110 transition-transform shadow-lg shadow-rose-500/30">
                      {num.number}
                    </div>
                    <span className="text-muted-foreground">→</span>
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-lg font-bold">
                      {num.reducedTo}
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-semibold">{num.name}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {num.keywords.slice(0, 3).map((k, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400">
                      {k}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {num.karmicLesson}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA a calculadora */}
        <section className="text-center py-12">
          <div className="glass-card max-w-xl mx-auto">
            <div className="text-4xl mb-4">🧮</div>
            <h3 className="font-display text-xl font-semibold mb-2">
              Descubre tus números personales
            </h3>
            <p className="text-muted-foreground mb-6">
              Calcula tu número de vida, destino, alma, personalidad y año personal.
            </p>
            <Link
              to="/calculadora"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Ir a la Calculadora
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default NumerologyList;
