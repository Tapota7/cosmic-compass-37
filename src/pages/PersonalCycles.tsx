import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Sun, Moon, Sparkles, TrendingUp, Download } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import ShareButtons from '@/components/ShareButtons';
import BackButton from '@/components/BackButton';
import AuthRequired from '@/components/AuthRequired';
import { calculateAllCycles, CycleInfo } from '@/data/personalCycles';
import { generateCyclesPDF } from '@/utils/generateCyclesPDF';
import { useCalculationHistory } from '@/hooks/useCalculationHistory';
import { useAuth } from '@/contexts/AuthContext';

const PersonalCyclesContent = () => {
  const [birthDate, setBirthDate] = useState('');
  const [cycles, setCycles] = useState<ReturnType<typeof calculateAllCycles> | null>(null);
  const { saveCalculation } = useCalculationHistory();
  const { user } = useAuth();

  const handleCalculate = () => {
    if (!birthDate) return;
    const [, month, day] = birthDate.split('-').map(Number);
    const calculatedCycles = calculateAllCycles(day, month);
    setCycles(calculatedCycles);

    // Save to history if user is logged in
    if (user) {
      saveCalculation(
        'ciclos_personales',
        JSON.parse(JSON.stringify({ birthDate })),
        JSON.parse(JSON.stringify({
          personalYear: calculatedCycles.personalYear,
          personalMonth: calculatedCycles.personalMonth,
          personalDay: calculatedCycles.personalDay,
        }))
      );
    }
  };

  const renderCycleCard = (
    title: string,
    emoji: React.ReactNode,
    period: string,
    number: number,
    info: CycleInfo,
    color: string
  ) => (
    <div className="glass-card">
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
          {emoji}
        </div>
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{period}</p>
        </div>
        <div className="number-circle text-2xl font-bold text-primary-foreground">{number}</div>
      </div>
      
      <div className="mb-4">
        <h4 className="font-semibold text-primary mb-1">{info.name}</h4>
        <p className="text-sm text-muted-foreground">{info.theme}</p>
      </div>
      
      <p className="text-muted-foreground mb-4">{info.energy}</p>
      
      <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 mb-4">
        <p className="text-sm">
          <span className="font-medium text-primary">Consejo: </span>
          <span className="text-muted-foreground">{info.advice}</span>
        </p>
      </div>
      
      <div>
        <h5 className="text-sm font-medium mb-2 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-green-400" />
          Actividades favorecidas:
        </h5>
        <div className="flex flex-wrap gap-2">
          {info.activities.map((activity, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-muted-foreground">
              {activity}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const shareText = cycles
    ? `Mis ciclos personales: Año ${cycles.personalYear.number} (${cycles.personalYear.info.name}), Mes ${cycles.personalMonth.number}, Día ${cycles.personalDay.number}`
    : '';

  return (
    <>
      <SEOHead
        title="Ciclos Personales - Año, Mes y Día Personal"
        description="Descubre tus ciclos personales numerológicos: año personal, mes personal y día personal. Conoce la energía que te acompaña en cada momento."
        keywords="ciclos personales, año personal, mes personal, día personal, numerología ciclos"
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <BackButton fallbackPath="/calculadora" label="Volver a calculadora" />

        <div className="text-center mb-12">
          <div className="text-6xl mb-4 float-animation">🔄</div>
          <h1 className="font-display text-4xl font-bold gradient-text mb-4">
            Ciclos Personales
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre la energía de tu año, mes y día personal para navegar la vida con más consciencia
          </p>
        </div>

        {/* Calculator */}
        <div className="glass-card mb-8">
          <h2 className="font-display text-lg font-semibold mb-4">Ingresa tu fecha de nacimiento</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors"
            />
            <button
              onClick={handleCalculate}
              disabled={!birthDate}
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Calcular Ciclos
            </button>
          </div>
        </div>

        {/* Results */}
        {cycles && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h2 className="font-display text-xl font-semibold">Tus Ciclos Actuales</h2>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => generateCyclesPDF({
                    birthDate,
                    personalYear: cycles.personalYear,
                    personalMonth: cycles.personalMonth,
                    personalDay: cycles.personalDay
                  })}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  Descargar PDF
                </button>
                <ShareButtons title="Mis Ciclos Personales" text={shareText} />
              </div>
            </div>

            {/* Year */}
            {renderCycleCard(
              'Año Personal',
              <Sun className="w-6 h-6 text-yellow-300" />,
              cycles.personalYear.period,
              cycles.personalYear.number,
              cycles.personalYear.info,
              'bg-yellow-500/20'
            )}

            {/* Month */}
            {renderCycleCard(
              'Mes Personal',
              <Moon className="w-6 h-6 text-blue-300" />,
              cycles.personalMonth.period,
              cycles.personalMonth.number,
              cycles.personalMonth.info,
              'bg-blue-500/20'
            )}

            {/* Day */}
            {renderCycleCard(
              'Día Personal',
              <Sparkles className="w-6 h-6 text-purple-300" />,
              cycles.personalDay.period,
              cycles.personalDay.number,
              cycles.personalDay.info,
              'bg-purple-500/20'
            )}

            {/* Info */}
            <div className="glass-card bg-secondary/30">
              <h3 className="font-display text-lg font-semibold mb-3">¿Cómo funcionan los ciclos?</h3>
              <div className="space-y-3 text-muted-foreground text-sm">
                <p>
                  <strong className="text-foreground">Año Personal:</strong> Define el tema principal de tu año. Comienza en tu cumpleaños y marca las grandes lecciones y oportunidades del año.
                </p>
                <p>
                  <strong className="text-foreground">Mes Personal:</strong> Refina la energía del año con un enfoque mensual. Te ayuda a planificar actividades y decisiones menores.
                </p>
                <p>
                  <strong className="text-foreground">Día Personal:</strong> La energía más inmediata. Útil para elegir qué tipo de actividades priorizar cada día.
                </p>
              </div>
            </div>

            {/* Link to number meanings */}
            <div className="text-center">
              <p className="text-muted-foreground mb-4">¿Quieres profundizar en el significado de estos números?</p>
              <Link
                to="/numeros"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
              >
                Ver todos los números →
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const PersonalCycles = () => {
  return (
    <AuthRequired message="Inicia sesión para calcular tus ciclos personales">
      <PersonalCyclesContent />
    </AuthRequired>
  );
};

export default PersonalCycles;
