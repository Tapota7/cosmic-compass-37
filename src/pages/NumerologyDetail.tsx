import { useParams, Link } from 'react-router-dom';
import { getNumerologyNumber } from '@/data/numerology';
import SEOHead from '@/components/SEOHead';
import FavoriteButton from '@/components/FavoriteButton';
import ShareButtons from '@/components/ShareButtons';

const NumerologyDetail = () => {
  const { id } = useParams();
  const num = getNumerologyNumber(Number(id));

  if (!num) {
    return (
      <div className="container mx-auto px-4 text-center py-20">
        <div className="text-6xl mb-4">❓</div>
        <h1 className="font-display text-2xl font-bold mb-4">Número no encontrado</h1>
        <Link to="/numeros" className="text-primary hover:underline">
          ← Volver a números
        </Link>
      </div>
    );
  }

  const getTypeStyles = () => {
    if (num.isMaster) {
      return {
        badge: 'bg-amber-500/20 text-amber-400',
        badgeText: '👑 Número Maestro',
        numberBg: 'bg-gradient-to-br from-amber-500 to-amber-600 shadow-amber-500/30',
        accentColor: 'amber'
      };
    }
    if (num.isKarmic) {
      return {
        badge: 'bg-rose-500/20 text-rose-400',
        badgeText: '🔥 Número Kármico',
        numberBg: 'bg-gradient-to-br from-rose-500 to-rose-600 shadow-rose-500/30',
        accentColor: 'rose'
      };
    }
    return {
      badge: 'bg-primary/20 text-primary',
      badgeText: '✨ Número Básico',
      numberBg: 'bg-primary shadow-primary/30',
      accentColor: 'primary'
    };
  };

  const styles = getTypeStyles();

  return (
    <>
      <SEOHead
        title={`Número ${num.number} - ${num.name} | Numerología`}
        description={`Significado del número ${num.number} en numerología: ${num.name}. ${num.meaning.substring(0, 150)}...`}
        keywords={`número ${num.number}, ${num.name}, numerología, significado ${num.number}`}
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Navegación */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/numeros" 
            className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            ← Volver a números
          </Link>
          <div className="flex items-center gap-2">
            <FavoriteButton
              id={`numero-${num.number}`}
              type="numero"
              name={`${num.number} - ${num.name}`}
              symbol={String(num.number)}
            />
            <ShareButtons
              title={`Número ${num.number} - ${num.name}`}
              text={`Descubre el significado del número ${num.number} en la numerología: ${num.name}. ${num.keywords.join(', ')}.`}
            />
          </div>
        </div>

        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className={`inline-block text-xs px-3 py-1 rounded-full ${styles.badge} mb-4`}>
            {styles.badgeText}
          </span>
          
          <div className={`w-24 h-24 mx-auto rounded-full ${styles.numberBg} flex items-center justify-center text-4xl font-bold text-white mb-6 shadow-lg float-animation`}>
            {num.number}
          </div>
          
          {num.reducedTo && (
            <p className="text-muted-foreground mb-2">
              Reduce a <span className="font-bold text-foreground">{num.reducedTo}</span>
            </p>
          )}
          
          <h1 className="font-display text-3xl md:text-4xl font-bold gradient-text mb-4">
            {num.name}
          </h1>
          
          <div className="flex flex-wrap justify-center gap-2">
            {num.keywords.map((k, i) => (
              <span 
                key={i} 
                className={`text-sm px-3 py-1 rounded-full ${styles.badge}`}
              >
                {k}
              </span>
            ))}
          </div>
        </div>

        {/* Contenido */}
        <div className="space-y-8">
          {/* Significado */}
          <section className="glass-card">
            <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <span>📖</span> Significado
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {num.meaning}
            </p>
          </section>

          {/* Expresión Sombra */}
          <section className="glass-card border-destructive/20 bg-destructive/5">
            <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2 text-destructive">
              <span>🌑</span> Expresión Sombra
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {num.shadow}
            </p>
          </section>

          {/* Lección Kármica (solo para números kármicos) */}
          {num.isKarmic && num.karmicLesson && (
            <section className="glass-card border-rose-500/20 bg-rose-500/5">
              <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2 text-rose-400">
                <span>⚖️</span> Lección Kármica
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {num.karmicLesson}
              </p>
              
              {num.howToHeal && num.howToHeal.length > 0 && (
                <div className="mt-6 p-4 rounded-lg bg-background/50 border border-border">
                  <h3 className="font-display text-lg font-medium mb-4 flex items-center gap-2">
                    <span>💚</span> Cómo Sanar
                  </h3>
                  <ul className="space-y-3">
                    {num.howToHeal.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-medium shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}

          {/* Info adicional para números maestros */}
          {num.isMaster && (
            <section className="glass-card border-amber-500/20 bg-amber-500/5">
              <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2 text-amber-400">
                <span>⚡</span> Sobre los Números Maestros
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Los números maestros no se reducen porque portan una vibración especial de alto nivel espiritual. 
                Quienes tienen estos números en su carta enfrentan mayores desafíos pero también poseen un potencial 
                extraordinario para elevar la conciencia colectiva. La responsabilidad es proporcional al don recibido.
              </p>
            </section>
          )}
        </div>

        {/* Links de navegación */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link 
              to="/numeros" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              ← Ver todos los números
            </Link>
            <Link 
              to="/numerologia" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              🧮 Calcular mis números
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NumerologyDetail;
