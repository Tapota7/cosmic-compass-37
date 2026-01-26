import { useState } from 'react';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { calculateLifePath, calculateDestiny, calculateSoul, calculatePersonality, calculatePersonalYear, getNumerologyNumber } from '@/data/numerology';
import { useNumerologyHistory } from '@/hooks/useNumerologyHistory';
import { useCalculationHistory } from '@/hooks/useCalculationHistory';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import SEOHead from '@/components/SEOHead';
import ShareButtons from '@/components/ShareButtons';
import BirthDatePicker from '@/components/BirthDatePicker';
import SuccessModal from '@/components/SuccessModal';
import { generateNumerologyPDF } from '@/utils/generateNumerologyPDF';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { History, Trash2, Download, Heart, RotateCcw, Mail, Loader2, CheckCircle, Lock, LogIn } from 'lucide-react';

const CALC_COUNT_KEY = 'numerology_calc_count';
const MAX_FREE_CALCS = 1;

const Numerology = () => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [results, setResults] = useState<{ lifePath: number; destiny: number; soul: number; personality: number; personalYear: number } | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  
  // Email capture states
  const [email, setEmail] = useState('');
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  
  const { history, addToHistory, removeFromHistory, clearHistory } = useNumerologyHistory();
  const { saveCalculation } = useCalculationHistory();
  const { user } = useAuth();

  const checkCalculationLimit = (): boolean => {
    if (user) return true; // Logged in users get unlimited
    
    const count = parseInt(localStorage.getItem(CALC_COUNT_KEY) || '0');
    if (count >= MAX_FREE_CALCS) {
      setShowAuthModal(true);
      return false;
    }
    return true;
  };

  const incrementCalculationCount = () => {
    if (!user) {
      const count = parseInt(localStorage.getItem(CALC_COUNT_KEY) || '0');
      localStorage.setItem(CALC_COUNT_KEY, String(count + 1));
    }
  };

  const handleCalculate = () => {
    if (!name.trim() || !birthDate) return;
    
    if (!checkCalculationLimit()) return;
    
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
    setEmailSent(false);
    setEmail('');
    addToHistory({ name, birthDate, ...calculatedResults });
    
    incrementCalculationCount();
    
    // Save to cloud if logged in
    if (user) {
      saveCalculation(
        'numerologia',
        { name, birthDate },
        calculatedResults
      );
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !results) return;

    const emailValidation = z.string().trim().email().max(255).safeParse(email);
    if (!emailValidation.success) {
      toast({
        title: "Email inválido",
        description: "Por favor ingresa un email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsEmailLoading(true);

    try {
      const { error } = await supabase.functions.invoke('send-numerology-pdf', {
        body: {
          email: emailValidation.data,
          name: name,
          calculationData: {
            fullName: name,
            birthDate,
            ...results,
          },
        },
      });

      if (error) throw error;

      setEmailSent(true);
      setShowSuccessModal(true);
      toast({
        title: "¡Email enviado!",
        description: "Revisa tu bandeja de entrada.",
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error al enviar",
        description: "Intenta de nuevo más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsEmailLoading(false);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
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
    setEmailSent(false);
    setEmail('');
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
          {!user && (
            <p className="text-sm text-primary/80 mb-4">
              ✨ 1 cálculo gratuito • Regístrate para cálculos ilimitados
            </p>
          )}
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
              <BirthDatePicker value={birthDate} onChange={setBirthDate} />
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

            {/* Optional Email Capture Section */}
            {emailSent ? (
              <div className="glass-card mt-8 text-center py-8 border-primary/30">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-display text-xl font-semibold text-primary">
                  ¡Resultados enviados!
                </h3>
                <p className="text-muted-foreground mt-2">
                  Revisa tu bandeja de entrada en <span className="text-foreground font-medium">{email}</span>
                </p>
              </div>
            ) : (
              <div className="glass-card mt-8 border-primary/30">
                <div className="text-center mb-6">
                  <span className="text-3xl mb-2 block">💌</span>
                  <h3 className="font-display text-xl font-semibold">
                    ¿Quieres guardar estos resultados?
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    No es necesario proporcionar email para ver tus resultados. Es 100% opcional.
                  </p>
                </div>

                <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
                  <div className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="tu@email.com (opcional)"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        disabled={isEmailLoading}
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={!email.trim() || isEmailLoading}
                    >
                      {isEmailLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Mail className="w-4 h-4 mr-2" />
                          Enviar resultados a mi email
                        </>
                      )}
                    </Button>
                  </div>
                </form>

                {/* Benefits */}
                <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-sm font-medium text-primary mb-2">
                    Beneficios de proporcionar tu email:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✅ Recibirás tus resultados por correo</li>
                    <li>✅ Te avisaremos de nuevos artículos</li>
                    <li>✅ Descuentos exclusivos en consultas</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Success Modal */}
        <SuccessModal
          isOpen={showSuccessModal}
          onClose={handleSuccessClose}
        />

        {/* Auth Required Modal */}
        <Dialog open={showAuthModal} onOpenChange={setShowAuthModal}>
          <DialogContent className="sm:max-w-md">
            <div className="text-center py-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-xl font-bold mb-2">
                ¡Has usado tu cálculo gratuito!
              </h2>
              <p className="text-muted-foreground mb-6">
                Regístrate gratis para obtener cálculos ilimitados, historial guardado y más beneficios.
              </p>
              <div className="flex flex-col gap-3">
                <Button asChild className="w-full">
                  <Link to="/auth">
                    <LogIn className="w-4 h-4 mr-2" />
                    Crear Cuenta Gratis
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/auth?mode=login">Ya tengo cuenta</Link>
                </Button>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="text-sm font-medium mb-3">Beneficios de registrarte:</h3>
                <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                  <div className="p-2 rounded-lg bg-secondary/30">
                    <span className="text-lg mb-1 block">♾️</span>
                    Cálculos ilimitados
                  </div>
                  <div className="p-2 rounded-lg bg-secondary/30">
                    <span className="text-lg mb-1 block">📜</span>
                    Historial guardado
                  </div>
                  <div className="p-2 rounded-lg bg-secondary/30">
                    <span className="text-lg mb-1 block">⭐</span>
                    Favoritos
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Numerology;
