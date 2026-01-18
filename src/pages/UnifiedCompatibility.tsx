import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, AlertTriangle, Lightbulb, Download, Calculator, Star } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import ShareButtons from '@/components/ShareButtons';
import AuthRequired from '@/components/AuthRequired';
import BirthDatePicker from '@/components/BirthDatePicker';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { calculateCompatibility, zodiacSignsList, getLevelInfo } from '@/data/compatibility';
import { calculateLifePath } from '@/data/numerology';
import { calculateNumerologyCompatibility, getLevelInfo as getNumerologyLevelInfo } from '@/data/numerologyCompatibility';
import { generateAstroCompatibilityPDF } from '@/utils/generateAstroCompatibilityPDF';
import { generateCompatibilityPDF } from '@/utils/generateCompatibilityPDF';
import { useToast } from '@/hooks/use-toast';
import { useCalculationHistory } from '@/hooks/useCalculationHistory';
import { useAuth } from '@/contexts/AuthContext';

const AstroCompatibilityTab = () => {
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
    <div className="space-y-6">
      {/* Calculator */}
      <div className="glass-card">
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
          <Star className="w-5 h-5" />
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
              <ShareButtons
                title={`Compatibilidad ${sign1Data.name} + ${sign2Data.name}`}
                text={`${result.score}% de compatibilidad. ${result.summary}`}
                className="justify-center"
              />
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
  );
};

const NumerologyCompatibilityTab = () => {
  const [person1, setPerson1] = useState({ name: '', birthDate: '' });
  const [person2, setPerson2] = useState({ name: '', birthDate: '' });
  const [result, setResult] = useState<ReturnType<typeof calculateNumerologyCompatibility> | null>(null);
  const [lifePathNumbers, setLifePathNumbers] = useState<{ lp1: number; lp2: number } | null>(null);
  const { saveCalculation } = useCalculationHistory();
  const { user } = useAuth();

  const handleCalculate = () => {
    if (!person1.name || !person1.birthDate || !person2.name || !person2.birthDate) return;
    
    const [y1, m1, d1] = person1.birthDate.split('-').map(Number);
    const [y2, m2, d2] = person2.birthDate.split('-').map(Number);
    
    const lp1 = calculateLifePath(d1, m1, y1);
    const lp2 = calculateLifePath(d2, m2, y2);
    
    setLifePathNumbers({ lp1, lp2 });
    const calcResult = calculateNumerologyCompatibility(lp1, lp2, person1.name, person2.name);
    setResult(calcResult);
    
    if (user) {
      saveCalculation(
        'compatibilidad_numerologica',
        { person1, person2, lp1, lp2 },
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

  return (
    <div className="space-y-6">
      {/* Calculator */}
      <div className="glass-card">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Person 1 */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">1</span>
              Primera Persona
            </h3>
            <div>
              <label className="block text-sm font-medium mb-2">Nombre</label>
              <input
                type="text"
                value={person1.name}
                onChange={(e) => setPerson1({ ...person1, name: e.target.value })}
                placeholder="Nombre"
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Fecha de Nacimiento</label>
              <BirthDatePicker 
                value={person1.birthDate} 
                onChange={(date) => setPerson1({ ...person1, birthDate: date })} 
              />
            </div>
          </div>

          {/* Person 2 */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent-foreground">2</span>
              Segunda Persona
            </h3>
            <div>
              <label className="block text-sm font-medium mb-2">Nombre</label>
              <input
                type="text"
                value={person2.name}
                onChange={(e) => setPerson2({ ...person2, name: e.target.value })}
                placeholder="Nombre"
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Fecha de Nacimiento</label>
              <BirthDatePicker 
                value={person2.birthDate} 
                onChange={(date) => setPerson2({ ...person2, birthDate: date })} 
              />
            </div>
          </div>
        </div>
        
        <button
          onClick={handleCalculate}
          disabled={!person1.name || !person1.birthDate || !person2.name || !person2.birthDate}
          className="w-full mt-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all pulse-glow flex items-center justify-center gap-2"
        >
          <Calculator className="w-5 h-5" />
          Calcular Compatibilidad
        </button>
      </div>

      {/* Results */}
      {result && lifePathNumbers && (
        <div className="space-y-6 animate-fade-in">
          {/* Score Card */}
          <div className="glass-card text-center">
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="text-center">
                <div className="number-circle text-3xl font-bold text-primary-foreground mb-2">{lifePathNumbers.lp1}</div>
                <p className="text-sm text-muted-foreground">{person1.name}</p>
              </div>
              <Heart className="w-10 h-10 text-primary fill-primary animate-pulse" />
              <div className="text-center">
                <div className="number-circle text-3xl font-bold text-primary-foreground mb-2">{lifePathNumbers.lp2}</div>
                <p className="text-sm text-muted-foreground">{person2.name}</p>
              </div>
            </div>
            
            <div className={`text-6xl font-bold mb-2 ${getScoreColor(result.score)}`}>
              {result.score}%
            </div>
            
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 ${getNumerologyLevelInfo(result.level).color}`}>
              <span>{getNumerologyLevelInfo(result.level).emoji}</span>
              <span className="font-medium">Compatibilidad {getNumerologyLevelInfo(result.level).label}</span>
            </div>
            
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              {result.summary}
            </p>

            <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => generateCompatibilityPDF({
                  person1: { name: person1.name, lifePath: lifePathNumbers.lp1 },
                  person2: { name: person2.name, lifePath: lifePathNumbers.lp2 },
                  score: result.score,
                  level: result.level,
                  summary: result.summary,
                  strengths: result.strengths,
                  challenges: result.challenges,
                  advice: result.advice
                })}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Download className="w-4 h-4" />
                Descargar PDF
              </button>
              <ShareButtons
                title={`Compatibilidad ${person1.name} + ${person2.name}`}
                text={`${result.score}% de compatibilidad numerológica. ${result.summary}`}
                className="justify-center"
              />
            </div>
          </div>

          {/* Strengths */}
          {result.strengths.length > 0 && (
            <div className="glass-card">
              <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-green-400" />
                Fortalezas de la Conexión
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

          {/* Links to number meanings */}
          <div className="glass-card text-center">
            <p className="text-muted-foreground mb-4">¿Quieres conocer más sobre estos números?</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to={`/numeros/${lifePathNumbers.lp1}`}
                className="px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
              >
                Significado del {lifePathNumbers.lp1}
              </Link>
              {lifePathNumbers.lp1 !== lifePathNumbers.lp2 && (
                <Link
                  to={`/numeros/${lifePathNumbers.lp2}`}
                  className="px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                >
                  Significado del {lifePathNumbers.lp2}
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const UnifiedCompatibilityContent = () => {
  return (
    <>
      <SEOHead
        title="Compatibilidad - Astrológica y Numerológica"
        description="Calcula la compatibilidad astrológica entre signos del zodíaco o la compatibilidad numerológica entre números de vida. Descubre cómo se complementan las energías."
        keywords="compatibilidad, astrología, numerología, signos, números de vida, parejas"
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4 float-animation">💕</div>
          <h1 className="font-display text-4xl font-bold gradient-text mb-4">
            Compatibilidad
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre la conexión entre dos personas usando astrología o numerología
          </p>
        </div>

        <Tabs defaultValue="astro" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 h-auto p-1 bg-secondary/50 rounded-lg">
            <TabsTrigger 
              value="astro" 
              className="py-3 px-4 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md transition-all"
            >
              Compatibilidad Astrológica
            </TabsTrigger>
            <TabsTrigger 
              value="numero"
              className="py-3 px-4 text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md transition-all"
            >
              Compatibilidad Numerológica
            </TabsTrigger>
          </TabsList>

          <TabsContent value="astro">
            <AstroCompatibilityTab />
          </TabsContent>

          <TabsContent value="numero">
            <NumerologyCompatibilityTab />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

const UnifiedCompatibility = () => {
  return (
    <AuthRequired message="Inicia sesión para calcular compatibilidad">
      <UnifiedCompatibilityContent />
    </AuthRequired>
  );
};

export default UnifiedCompatibility;
