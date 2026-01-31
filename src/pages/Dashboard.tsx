import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sun, Moon, Hash, Sparkles, History, Zap, 
  Heart, Calculator, Orbit, GraduationCap, 
  ChevronRight, User, ArrowRight
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { useAuth } from '@/contexts/AuthContext';
import { useCalculationHistory, CalculationHistoryItem } from '@/hooks/useCalculationHistory';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { calculateCosmicClimate, getZodiacSymbol, CosmicClimate } from '@/utils/cosmicClimate';
import { cn } from '@/lib/utils';

const CALCULATION_TYPE_INFO: Record<string, { icon: string; label: string; color: string }> = {
  numerologia: { icon: '🔢', label: 'Numerología', color: 'text-purple-400' },
  compatibilidad_astrologica: { icon: '💕', label: 'Compatibilidad Astral', color: 'text-pink-400' },
  compatibilidad_numerologica: { icon: '💫', label: 'Compatibilidad Numérica', color: 'text-blue-400' },
  ciclos_personales: { icon: '🔄', label: 'Ciclos Personales', color: 'text-green-400' },
};

const QUICK_ACTIONS = [
  { 
    to: '/compatibilidad', 
    icon: Heart, 
    label: 'Analizar Sinastría', 
    emoji: '💕',
    gradient: 'from-pink-500/20 to-rose-500/20'
  },
  { 
    to: '/calculadora', 
    icon: Calculator, 
    label: 'Mi Numerología', 
    emoji: '🔢',
    gradient: 'from-purple-500/20 to-violet-500/20'
  },
  { 
    to: '/transitos-2026', 
    icon: Orbit, 
    label: 'Tránsitos 2026', 
    emoji: '🪐',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  { 
    to: '/grabovoi', 
    icon: Sparkles, 
    label: 'Códigos Grabovoi', 
    emoji: '✨',
    gradient: 'from-amber-500/20 to-yellow-500/20'
  },
];

const Dashboard = () => {
  const { user, profile, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { getHistory, loading: historyLoading } = useCalculationHistory();
  const [history, setHistory] = useState<CalculationHistoryItem[]>([]);
  const [cosmicClimate, setCosmicClimate] = useState<CosmicClimate | null>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      loadHistory();
    }
  }, [user]);

  useEffect(() => {
    // Calculate cosmic climate when profile is available
    const birthDate = profile?.birth_date ? new Date(profile.birth_date) : null;
    const climate = calculateCosmicClimate(birthDate);
    setCosmicClimate(climate);
  }, [profile]);

  const loadHistory = async () => {
    const data = await getHistory();
    setHistory(data.slice(0, 3)); // Only last 3
  };

  const userName = profile?.full_name?.split(' ')[0] || user?.email?.split('@')[0] || 'Viajero';
  const hasProfile = profile?.birth_date && profile?.zodiac_sign;

  // Loading state with skeletons
  if (authLoading) {
    return (
      <div className="container mx-auto px-4 max-w-4xl py-8">
        <div className="space-y-8">
          {/* Header Skeleton */}
          <div className="text-center space-y-4">
            <Skeleton className="h-6 w-48 mx-auto" />
            <Skeleton className="h-12 w-72 mx-auto" />
            <Skeleton className="h-4 w-64 mx-auto" />
          </div>
          
          {/* Esencia Vital Skeleton */}
          <div className="flex justify-center gap-6">
            <Skeleton className="h-28 w-28 rounded-full" />
            <Skeleton className="h-28 w-28 rounded-full" />
            <Skeleton className="h-28 w-28 rounded-full" />
          </div>
          
          {/* Cosmic Climate Skeleton */}
          <Skeleton className="h-48 w-full rounded-xl" />
          
          {/* Quick Actions Skeleton */}
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="h-24 rounded-xl" />
            <Skeleton className="h-24 rounded-xl" />
            <Skeleton className="h-24 rounded-xl" />
            <Skeleton className="h-24 rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title="Mi Dashboard - Tu Frecuencia Cuántica"
        description="Descubre tu frecuencia cuántica personal del día, basada en tu numerología y los tránsitos cósmicos."
        keywords="dashboard, frecuencia cuántica, numerología personal, astrología diaria"
      />
      
      <div className="container mx-auto px-4 max-w-4xl py-6 space-y-8">
        
        {/* Header de Bienvenida */}
        <header className="text-center space-y-3">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-primary drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
            Bienvenido de vuelta
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-foreground">Hola, </span>
            <span className="gradient-text">{userName}</span>
          </h1>
          {cosmicClimate && (
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">Tu vibración hoy es:</p>
              <p className="text-xl md:text-2xl font-bold animate-gradient-text">
                {cosmicClimate.combinedVibration}
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  {cosmicClimate.dayFocus.icon} {cosmicClimate.dayFocus.name}
                </span>
                <span className="text-border">|</span>
                <span className="flex items-center gap-1">
                  {cosmicClimate.moonVibe.icon} Luna en {cosmicClimate.moonVibe.sign}
                </span>
              </div>
            </div>
          )}
        </header>

        {/* Widget: Esencia Vital */}
        <section>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
            Tu Esencia Vital
          </h2>
          
          {hasProfile ? (
            <div className="flex justify-center gap-4 md:gap-8">
              {/* Signo Solar */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/5 backdrop-blur-md border-2 border-primary/30 flex items-center justify-center hover:border-primary/60 hover:scale-105 transition-all duration-300">
                  <span className="text-3xl md:text-4xl drop-shadow-[0_0_8px_rgba(167,139,250,0.6)]">
                    {getZodiacSymbol(profile?.zodiac_sign || '')}
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium capitalize">{profile?.zodiac_sign || 'Solar'}</p>
                <p className="text-xs text-muted-foreground">Signo Solar</p>
              </div>

              {/* Luna (Placeholder - could be extended) */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/5 backdrop-blur-md border-2 border-blue-500/30 flex items-center justify-center hover:border-blue-500/60 hover:scale-105 transition-all duration-300">
                  <Moon className="w-8 h-8 md:w-10 md:h-10 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
                </div>
                <p className="mt-2 text-sm font-medium">
                  {cosmicClimate?.moonVibe.symbol || '🌙'}
                </p>
                <p className="text-xs text-muted-foreground">Luna Actual</p>
              </div>

              {/* Número de Vida */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/5 backdrop-blur-md border-2 border-purple-500/30 flex items-center justify-center hover:border-purple-500/60 hover:scale-105 transition-all duration-300">
                  <span className="text-3xl md:text-4xl font-bold text-primary drop-shadow-[0_0_8px_rgba(167,139,250,0.6)]">
                    {profile?.life_path_number || '?'}
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium">Número {profile?.life_path_number || '—'}</p>
                <p className="text-xs text-muted-foreground">Misión de Vida</p>
              </div>
            </div>
          ) : (
            <Card className="bg-white/5 backdrop-blur-md border border-white/10">
              <CardContent className="py-8 text-center">
                <User className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="font-semibold mb-2">Completa tu Perfil</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Añade tu fecha de nacimiento y signo solar para desbloquear predicciones personalizadas.
                </p>
                <Link
                  to="/perfil"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  Completar Perfil
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Widget: Frecuencia Cuántica del Día */}
        {cosmicClimate && (
          <section>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
              Tu Frecuencia Cuántica de Hoy
            </h2>
            
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden">
              <CardContent className="p-6">
                <p className="text-foreground/90 leading-relaxed text-center italic">
                  "{cosmicClimate.combinedMessage}"
                </p>
                
                <div className="flex flex-wrap items-center justify-center gap-4 mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-lg">{cosmicClimate.dayFocus.icon}</span>
                    <span className="text-muted-foreground">Enfoque:</span>
                    <span className="font-medium">{cosmicClimate.dayFocus.name.replace('Día de ', '')}</span>
                  </div>
                  <div className="hidden sm:block text-border">|</div>
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className={cn(
                      "w-4 h-4",
                      cosmicClimate.energyLevel === 'alta' ? 'text-amber-400' :
                      cosmicClimate.energyLevel === 'media' ? 'text-blue-400' : 'text-slate-400'
                    )} />
                    <span className="text-muted-foreground">Energía:</span>
                    <span className="font-medium capitalize">{cosmicClimate.energyLevel}</span>
                  </div>
                  <div className="hidden sm:block text-border">|</div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-lg">{cosmicClimate.moonVibe.symbol}</span>
                    <span className="text-muted-foreground">Luna:</span>
                    <span className="font-medium">{cosmicClimate.moonVibe.sign}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Quick Actions Grid */}
        <section>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
            Acciones Rápidas
          </h2>
          
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {QUICK_ACTIONS.map((action) => (
              <Link
                key={action.to}
                to={action.to}
                className={cn(
                  "group relative p-4 md:p-6 rounded-xl",
                  "bg-white/5 backdrop-blur-md border border-white/10",
                  "hover:border-primary/30 hover:bg-white/10",
                  "transition-all duration-300 hover:scale-[1.02]"
                )}
              >
                <div className={cn(
                  "absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity",
                  action.gradient
                )} />
                <div className="relative flex flex-col items-center text-center gap-2">
                  <span className="text-2xl md:text-3xl">{action.emoji}</span>
                  <span className="text-sm md:text-base font-medium">{action.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Historial Reciente */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <History className="w-5 h-5 text-muted-foreground" />
              Historial Reciente
            </h2>
            <Link 
              to="/historial"
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              Ver todo
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          {historyLoading ? (
            <div className="grid gap-3 md:grid-cols-3">
              <Skeleton className="h-20 rounded-xl" />
              <Skeleton className="h-20 rounded-xl" />
              <Skeleton className="h-20 rounded-xl" />
            </div>
          ) : history.length > 0 ? (
            <div className="grid gap-3 md:grid-cols-3">
              {history.map((item) => {
                const typeInfo = CALCULATION_TYPE_INFO[item.calculation_type] || {
                  icon: '📊',
                  label: 'Cálculo',
                  color: 'text-muted-foreground'
                };
                const date = new Date(item.created_at).toLocaleDateString('es-ES', {
                  day: 'numeric',
                  month: 'short'
                });
                
                return (
                  <Card 
                    key={item.id}
                    className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <CardContent className="p-4 flex items-center gap-3">
                      <span className="text-2xl">{typeInfo.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className={cn("font-medium text-sm truncate", typeInfo.color)}>
                          {typeInfo.label}
                        </p>
                        <p className="text-xs text-muted-foreground">{date}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <Card className="bg-white/5 backdrop-blur-md border border-white/10">
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground text-sm">
                  Aún no tienes cálculos. ¡Empieza con la calculadora!
                </p>
                <Link
                  to="/calculadora"
                  className="inline-flex items-center gap-2 mt-4 text-primary hover:underline text-sm"
                >
                  <Calculator className="w-4 h-4" />
                  Ir a la Calculadora
                </Link>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Banner de Conversión (Skool) */}
        <section>
          <Card className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/20 border border-primary/20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
            <CardContent className="relative p-6 md:p-8 text-center">
              <GraduationCap className="w-12 h-12 mx-auto text-primary drop-shadow-[0_0_12px_rgba(167,139,250,0.6)] mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                ¿Listo para dominar tu destino?
              </h3>
              <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                La Academia de Sabiduría Cuántica se está preparando. Sé de los primeros en acceder.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 border border-primary/30 text-primary font-medium">
                <Sparkles className="w-4 h-4" />
                Próximamente acceso exclusivo
              </div>
            </CardContent>
          </Card>
        </section>

      </div>
    </>
  );
};

export default Dashboard;
