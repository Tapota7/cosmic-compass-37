import { useState } from 'react';
import { Link } from 'react-router-dom';
import { calculateLifePath, calculateDestiny, calculateSoul, calculatePersonality, calculatePersonalYear, getNumerologyNumber } from '@/data/numerology';
import { useNumerologyHistory } from '@/hooks/useNumerologyHistory';
import SEOHead from '@/components/SEOHead';
import ShareButtons from '@/components/ShareButtons';
import { generateNumerologyPDF } from '@/utils/generateNumerologyPDF';
import { History, Trash2, Download, Heart, RotateCcw } from 'lucide-react';

const Numerology = () => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [results, setResults] = useState<{ lifePath: number; destiny: number; soul: number; personality: number; personalYear: number } | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const { history, addToHistory, removeFromHistory, clearHistory } = useNumerologyHistory();

  const handleCalculate = () => {
    if (!name.trim() || !birthDate) return;
    const [year, month, day] = birthDate.split('-').map(Number);
    const currentYear = new Date().getFullYear();
    const calculatedResults = {
      lifePath: calculateLifePath(day, month, year),
      destiny: calculateDestiny(name),
      soul: calculateSoul(name),
      personality: calculatePersonality(name),
      personalYear: calculatePersonalYear(day, month, currentYear),
    };
    setResults(calculatedResults);
    addToHistory({ name, birthDate, ...calculatedResults });
  };

  const loadFromHistory = (item: typeof history[0]) => {
    setName(item.name);
    setBirthDate(item.birthDate);
    setResults({
      lifePath: item.lifePath,
      destiny: item.destiny,
      soul: item.soul,
      personality: item.personality,
      personalYear: item.personalYear,
    });
    setShowHistory(false);
  };

  const renderResult = (num: number, title: string, emoji: string) => {
    const data = getNumerologyNumber(num);
    if (!data) return null;
    return (
      <div className="glass-card">
        <div className="flex items-center gap-4 mb-4">
          <div className="number-circle text-2xl font-bold text-primary-foreground">{num}</div>
          <div>
            <h3 className="font-display text-xl font-semibold">{title}</h3>
            <p className="text-primary">{data.name}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {data.keywords.map((k, i) => <span key={i} className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">{k}</span>)}
        </div>
        <p className="text-sm text-muted-foreground mb-4">{data.meaning}</p>
        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
          <p className="text-sm"><span className="text-destructive font-medium">Sombra:</span> <span className="text-muted-foreground">{data.shadow}</span></p>
        </div>
      </div>
    );
  };

  const shareText = results ? `Mis números: Vida ${results.lifePath}, Destino ${results.destiny}, Alma ${results.soul}, Personalidad ${results.personality}, Año Personal ${results.personalYear}` : '';

  return (
    <>
      <SEOHead
        title="Calculadora de Numerología"
        description="Calcula tus 5 números principales del destino: Número de Vida, Destino, Alma, Personalidad y Año Personal. Descubre tu camino numerológico."
        keywords="numerología, número de vida, número destino, calcular numerología, numerología gratis"
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/numeros" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
          ← Volver a números
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl font-bold gradient-text mb-4">Calculadora de Numerología</h1>
          <p className="text-muted-foreground mb-4">Descubre tus 5 números principales del destino</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/compatibilidad-numerologica" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-500/20 text-pink-400 hover:bg-pink-500/30 transition-colors text-sm">
              <Heart className="w-4 h-4" />
              Compatibilidad
            </Link>
            <Link to="/ciclos-personales" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors text-sm">
              <RotateCcw className="w-4 h-4" />
              Ciclos Personales
            </Link>
          </div>
        </div>

        <div className="glass-card mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-lg font-semibold">Ingresa tus datos</h2>
            {history.length > 0 && (
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <History className="w-4 h-4" />
                Historial ({history.length})
              </button>
            )}
          </div>

          {showHistory && history.length > 0 && (
            <div className="mb-6 p-4 rounded-lg bg-secondary/30 border border-border">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Cálculos recientes</span>
                <button onClick={clearHistory} className="text-xs text-destructive hover:underline">
                  Limpiar todo
                </button>
              </div>
              <div className="space-y-2">
                {history.slice(0, 5).map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-2 rounded bg-secondary/50">
                    <button onClick={() => loadFromHistory(item)} className="text-left flex-1 hover:text-primary transition-colors">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs text-muted-foreground ml-2">{item.birthDate}</span>
                    </button>
                    <button onClick={() => removeFromHistory(item.id)} className="p-1 text-muted-foreground hover:text-destructive">
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nombre Completo</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre completo" className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Fecha de Nacimiento</label>
              <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors" />
            </div>
          </div>
          <button onClick={handleCalculate} disabled={!name.trim() || !birthDate} className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all pulse-glow">
            🔢 Calcular Números
          </button>
        </div>

        {results && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h2 className="font-display text-xl font-semibold">Resultados para {name}</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => generateNumerologyPDF({ name, birthDate, ...results })}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Descargar PDF
                </button>
                <ShareButtons title={`Numerología de ${name}`} text={shareText} />
              </div>
            </div>
            <div className="grid gap-6">
              {renderResult(results.lifePath, 'Número de Vida', '🌟')}
              {renderResult(results.destiny, 'Número de Destino', '🎯')}
              {renderResult(results.soul, 'Número del Alma', '💫')}
              {renderResult(results.personality, 'Número de Personalidad', '🎭')}
              {renderResult(results.personalYear, 'Año Personal', '📅')}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Numerology;
