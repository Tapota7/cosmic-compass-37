import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, AlertTriangle, Lightbulb, Download } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import ShareButtons from '@/components/ShareButtons';
import { calculateCompatibility, zodiacSignsList, getLevelInfo } from '@/data/compatibility';
import { generateAstroCompatibilityPDF } from '@/utils/generateAstroCompatibilityPDF';
import { useToast } from '@/hooks/use-toast';
import { useCalculationHistory } from '@/hooks/useCalculationHistory';
import { useAuth } from '@/contexts/AuthContext';

const Compatibility = () => {
  const [sign1, setSign1] = useState('');
  const [sign2, setSign2] = useState('');
  const [result, setResult] = useState<ReturnType<typeof calculateCompatibility> | null>(null);
  const { toast } = useToast();
  const { saveCalculation } = useCalculationHistory();
  const { user } = useAuth();

  const handleCalculate = () => {
    if (!sign1 || !sign2) return;
    const calcResult = calculateCompatibility(sign1, sign2);
    setResult(calcResult);
    
    // Save to cloud if logged in
    if (user) {
      saveCalculation(
        'compatibilidad_astrologica',
        { sign1, sign2 },
        JSON.parse(JSON.stringify(calcResult))
      );
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-400';
    if (score >= 70) return 'text-emerald-400';
    if (score >= 55) return 'text-yellow-400';
    if (score >= 40) return 'text-orange-400';
    return 'text-red-400';
  };

  const handleDownloadPDF = () => {
    if (!result || !sign1Data || !sign2Data) return;
    
    generateAstroCompatibilityPDF({
      sign1: { name: sign1Data.name, symbol: sign1Data.symbol },
      sign2: { name: sign2Data.name, symbol: sign2Data.symbol },
      score: result.score,
      level: result.level,
      summary: result.summary,
      strengths: result.strengths,
      challenges: result.challenges,
      advice: result.advice,
    });
    
    toast({
      title: 'PDF descargado',
      description: 'Tu análisis de compatibilidad ha sido descargado',
    });
  };

  const sign1Data = zodiacSignsList.find(s => s.id === sign1);
  const sign2Data = zodiacSignsList.find(s => s.id === sign2);

  return (
    <>
      <SEOHead
        title="Compatibilidad entre Signos"
        description="Descubre la compatibilidad amorosa y amistad entre los 12 signos del zodíaco. Calcula tu compatibilidad astral con tu pareja, amigo o familiar."
        keywords="compatibilidad signos, zodíaco parejas, astrología amor, compatibilidad amorosa, signos compatibles"
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/signos" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
          ← Volver a signos
        </Link>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4 float-animation">💕</div>
          <h1 className="font-display text-4xl font-bold gradient-text mb-4">
            Compatibilidad entre Signos
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo se complementan las energías de dos signos zodiacales
          </p>
        </div>

        {/* Calculator */}
        <div className="glass-card mb-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Primer Signo</label>
              <select
                value={sign1}
                onChange={(e) => setSign1(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors"
              >
                <option value="">Selecciona un signo</option>
                {zodiacSignsList.map((sign) => (
                  <option key={sign.id} value={sign.id}>
                    {sign.symbol} {sign.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Segundo Signo</label>
              <select
                value={sign2}
                onChange={(e) => setSign2(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors"
              >
                <option value="">Selecciona un signo</option>
                {zodiacSignsList.map((sign) => (
                  <option key={sign.id} value={sign.id}>
                    {sign.symbol} {sign.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <button
            onClick={handleCalculate}
            disabled={!sign1 || !sign2}
            className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all pulse-glow flex items-center justify-center gap-2"
          >
            <Heart className="w-5 h-5" />
            Calcular Compatibilidad
          </button>
        </div>

        {/* Results */}
        {result && sign1Data && sign2Data && (
          <div className="space-y-6 animate-fade-in">
            {/* Score Card */}
            <div className="glass-card text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="text-5xl">{sign1Data.symbol}</div>
                <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
                <div className="text-5xl">{sign2Data.symbol}</div>
              </div>
              
              <h2 className="font-display text-2xl mb-2">
                {sign1Data.name} + {sign2Data.name}
              </h2>
              
              <div className={`text-6xl font-bold mb-2 ${getScoreColor(result.score)}`}>
                {result.score}%
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50">
                <span>{getLevelInfo(result.level).emoji}</span>
                <span className="font-medium">Compatibilidad {getLevelInfo(result.level).label}</span>
              </div>
              
              <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
                {result.summary}
              </p>

              <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleDownloadPDF}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Descargar PDF
                </button>
                <div className="flex flex-col items-center">
                  <p className="text-sm text-muted-foreground mb-2">Comparte este resultado:</p>
                  <ShareButtons
                    title={`Compatibilidad ${sign1Data.name} + ${sign2Data.name}`}
                    text={`${result.score}% de compatibilidad. ${result.summary}`}
                    className="justify-center"
                  />
                </div>
              </div>
            </div>

            {/* Strengths */}
            {result.strengths.length > 0 && (
              <div className="glass-card">
                <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-green-400" />
                  Fortalezas de la Relación
                </h3>
                <ul className="space-y-2">
                  {result.strengths.map((strength, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-green-400 mt-1">✓</span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges */}
            {result.challenges.length > 0 && (
              <div className="glass-card">
                <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-400" />
                  Desafíos a Trabajar
                </h3>
                <ul className="space-y-2">
                  {result.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-orange-400 mt-1">!</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Advice */}
            <div className="glass-card bg-primary/5 border-primary/20">
              <h3 className="font-display text-xl font-semibold mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                Consejo para esta Unión
              </h3>
              <p className="text-muted-foreground">{result.advice}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Compatibility;
