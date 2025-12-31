import { useParams, Link } from 'react-router-dom';
import { getGrabovoiById, getCategoryById, grabovoiNumbers } from '@/data/grabovoi';
import SEOHead from '@/components/SEOHead';
import BackButton from '@/components/BackButton';
import FavoriteButton from '@/components/FavoriteButton';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const GrabovoiDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [copied, setCopied] = useState(false);
  
  const number = getGrabovoiById(id || '');
  const category = number ? getCategoryById(number.category) : null;

  if (!number || !category) {
    return (
      <div className="container mx-auto px-4 text-center py-20">
        <div className="text-6xl mb-4">❓</div>
        <h1 className="text-2xl font-bold mb-4">Secuencia no encontrada</h1>
        <Link to="/grabovoi" className="text-primary hover:underline">
          ← Volver a Números de Grabovoi
        </Link>
      </div>
    );
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(number.code);
      setCopied(true);
      toast({
        title: "¡Copiado!",
        description: `Secuencia ${number.code} copiada al portapapeles`,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "No se pudo copiar la secuencia",
        variant: "destructive",
      });
    }
  };

  // Get related numbers from same category
  const relatedNumbers = grabovoiNumbers
    .filter(n => n.category === number.category && n.id !== number.id)
    .slice(0, 3);

  return (
    <>
      <SEOHead
        title={`${number.name} - ${number.code} | Números de Grabovoi`}
        description={number.description}
        keywords={`Grabovoi, ${number.name}, ${number.code}, ${category.name}, secuencia numérica`}
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <BackButton fallbackPath="/grabovoi" label="Números de Grabovoi" />
        <div className="glass-card mb-8">
          {/* Category Badge */}
          <div className="flex items-center justify-between mb-6">
            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${category.color}-500/20 text-${category.color}-400`}>
              <span>{category.emoji}</span>
              <span className="text-sm font-medium">{category.name}</span>
            </span>
            <FavoriteButton
              id={number.id}
              type="grabovoi"
              name={number.name}
              symbol={number.code}
            />
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-6">
            {number.name}
          </h1>

          {/* Code Display */}
          <div className="relative bg-secondary/50 rounded-xl p-8 mb-8 text-center">
            <div className={`text-4xl md:text-6xl font-mono font-bold text-${category.color}-400 tracking-wider mb-4`}>
              {number.code}
            </div>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar secuencia</span>
                </>
              )}
            </button>
          </div>

          {/* Description */}
          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold mb-3 flex items-center gap-2">
              <span>📜</span> Descripción
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {number.description}
            </p>
          </section>

          {/* How to Use */}
          <section className="bg-primary/5 rounded-xl p-6">
            <h2 className="font-display text-xl font-semibold mb-3 flex items-center gap-2">
              <span>✨</span> Cómo usar esta secuencia
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {number.howToUse}
            </p>
          </section>
        </div>

        {/* Tips Section */}
        <div className="glass-card mb-8">
          <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
            <span>💡</span> Consejos adicionales
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Practica en un lugar tranquilo, libre de distracciones.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Mantén una intención clara y positiva durante toda la práctica.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Puedes escribir la secuencia en un vaso de agua y beberla para potenciar el efecto.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>La constancia es clave: practica diariamente para mejores resultados.</span>
            </li>
          </ul>
        </div>

        {/* Related Numbers */}
        {relatedNumbers.length > 0 && (
          <section className="mb-8">
            <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <span>🔗</span> Secuencias relacionadas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedNumbers.map((num) => (
                <Link
                  key={num.id}
                  to={`/grabovoi/${num.id}`}
                  className="glass-card group cursor-pointer hover:border-primary/50"
                >
                  <div className={`text-xl font-mono font-bold text-${category.color}-400 mb-2`}>
                    {num.code}
                  </div>
                  <h3 className="font-semibold">{num.name}</h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default GrabovoiDetail;
