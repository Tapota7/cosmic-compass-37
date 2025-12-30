import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BarChart3, TrendingUp, Hash, Heart, RefreshCw, Sparkles, Calendar, Star, Calculator } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import BackButton from '@/components/BackButton';
import { useAuth } from '@/contexts/AuthContext';
import { useCalculationHistory, CalculationHistoryItem } from '@/hooks/useCalculationHistory';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { getHistory, loading } = useCalculationHistory();
  const [history, setHistory] = useState<CalculationHistoryItem[]>([]);

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

  const loadHistory = async () => {
    const data = await getHistory();
    setHistory(data);
  };

  // Calculate statistics
  const stats = useMemo(() => {
    const typeCounts = {
      numerologia: 0,
      compatibilidad_astrologica: 0,
      compatibilidad_numerologica: 0,
      ciclos_personales: 0,
    };

    const lifePathCounts: Record<number, number> = {};
    const zodiacCounts: Record<string, number> = {};
    const monthlyActivity: Record<string, number> = {};

    history.forEach((item) => {
      // Count by type
      if (item.calculation_type in typeCounts) {
        typeCounts[item.calculation_type as keyof typeof typeCounts]++;
      }

      // Extract life path numbers from numerology calculations
      if (item.calculation_type === 'numerologia') {
        const result = item.result_data as any;
        if (result?.lifePath) {
          lifePathCounts[result.lifePath] = (lifePathCounts[result.lifePath] || 0) + 1;
        }
      }

      // Extract zodiac signs from astrological compatibility
      if (item.calculation_type === 'compatibilidad_astrologica') {
        const input = item.input_data as any;
        if (input?.sign1) {
          zodiacCounts[input.sign1] = (zodiacCounts[input.sign1] || 0) + 1;
        }
        if (input?.sign2) {
          zodiacCounts[input.sign2] = (zodiacCounts[input.sign2] || 0) + 1;
        }
      }

      // Extract numerological compatibility life paths
      if (item.calculation_type === 'compatibilidad_numerologica') {
        const input = item.input_data as any;
        if (input?.lp1) {
          lifePathCounts[input.lp1] = (lifePathCounts[input.lp1] || 0) + 1;
        }
        if (input?.lp2) {
          lifePathCounts[input.lp2] = (lifePathCounts[input.lp2] || 0) + 1;
        }
      }

      // Monthly activity
      const month = new Date(item.created_at).toLocaleDateString('es-ES', { month: 'short', year: '2-digit' });
      monthlyActivity[month] = (monthlyActivity[month] || 0) + 1;
    });

    // Find most frequent life path
    const mostFrequentLifePath = Object.entries(lifePathCounts)
      .sort((a, b) => b[1] - a[1])[0];

    // Find most frequent zodiac
    const mostFrequentZodiac = Object.entries(zodiacCounts)
      .sort((a, b) => b[1] - a[1])[0];

    return {
      total: history.length,
      typeCounts,
      lifePathCounts,
      zodiacCounts,
      monthlyActivity,
      mostFrequentLifePath,
      mostFrequentZodiac,
    };
  }, [history]);

  const typeChartData = [
    { name: 'Numerología', value: stats.typeCounts.numerologia, fill: 'hsl(var(--chart-1))' },
    { name: 'Astral', value: stats.typeCounts.compatibilidad_astrologica, fill: 'hsl(var(--chart-2))' },
    { name: 'Numérica', value: stats.typeCounts.compatibilidad_numerologica, fill: 'hsl(var(--chart-3))' },
    { name: 'Ciclos', value: stats.typeCounts.ciclos_personales, fill: 'hsl(var(--chart-4))' },
  ].filter(d => d.value > 0);

  const lifePathChartData = Object.entries(stats.lifePathCounts)
    .map(([num, count]) => ({ number: num, count }))
    .sort((a, b) => parseInt(a.number) - parseInt(b.number));

  const monthlyChartData = Object.entries(stats.monthlyActivity)
    .slice(-6)
    .map(([month, count]) => ({ month, count }));

  const chartConfig = {
    count: { label: 'Cálculos', color: 'hsl(var(--primary))' },
    value: { label: 'Total', color: 'hsl(var(--chart-1))' },
  };

  const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))'];

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl float-animation mb-4">📊</div>
          <p className="text-muted-foreground">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title="Mi Dashboard - Estadísticas Personales"
        description="Visualiza tus estadísticas de numerología y astrología. Descubre tus números más frecuentes y patrones de uso."
        keywords="dashboard, estadísticas, numerología, astrología, análisis personal"
      />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <BackButton fallbackPath="/" label="Volver al inicio" />

        <div className="text-center mb-8">
          <div className="text-6xl mb-4 float-animation">📊</div>
          <h1 className="font-display text-4xl font-bold gradient-text mb-4">
            Mi Dashboard
          </h1>
          <p className="text-muted-foreground">
            Estadísticas y análisis de tus cálculos personales
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="text-4xl mb-4 animate-spin">⏳</div>
            <p className="text-muted-foreground">Cargando estadísticas...</p>
          </div>
        ) : stats.total === 0 ? (
          <div className="glass-card text-center py-12">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="font-display text-xl font-semibold mb-2">
              Sin datos todavía
            </h3>
            <p className="text-muted-foreground mb-6">
              Realiza tus primeros cálculos para ver estadísticas aquí
            </p>
            <Link
              to="/calculadora"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
            >
              <Calculator className="w-5 h-5" />
              Ir a la Calculadora
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="glass-card border-0">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{stats.total}</p>
                      <p className="text-sm text-muted-foreground">Total cálculos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-0">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Hash className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{stats.typeCounts.numerologia}</p>
                      <p className="text-sm text-muted-foreground">Numerología</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-0">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">
                        {stats.typeCounts.compatibilidad_astrologica + stats.typeCounts.compatibilidad_numerologica}
                      </p>
                      <p className="text-sm text-muted-foreground">Compatibilidad</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-0">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <RefreshCw className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{stats.typeCounts.ciclos_personales}</p>
                      <p className="text-sm text-muted-foreground">Ciclos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Insights */}
            <div className="grid md:grid-cols-2 gap-6">
              {stats.mostFrequentLifePath && (
                <Card className="glass-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Star className="w-5 h-5 text-primary" />
                      Tu Número Favorito
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="number-circle text-3xl font-bold text-primary-foreground">
                        {stats.mostFrequentLifePath[0]}
                      </div>
                      <div>
                        <p className="font-medium">Número de vida más calculado</p>
                        <p className="text-sm text-muted-foreground">
                          Aparece en {stats.mostFrequentLifePath[1]} {stats.mostFrequentLifePath[1] === 1 ? 'cálculo' : 'cálculos'}
                        </p>
                      </div>
                    </div>
                    <Link
                      to={`/numeros/${stats.mostFrequentLifePath[0]}`}
                      className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:underline"
                    >
                      Ver significado del número {stats.mostFrequentLifePath[0]} →
                    </Link>
                  </CardContent>
                </Card>
              )}

              {stats.mostFrequentZodiac && (
                <Card className="glass-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Sparkles className="w-5 h-5 text-yellow-400" />
                      Tu Signo Más Consultado
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-yellow-500/20 flex items-center justify-center text-2xl">
                        ♈
                      </div>
                      <div>
                        <p className="font-medium capitalize">{stats.mostFrequentZodiac[0]}</p>
                        <p className="text-sm text-muted-foreground">
                          Aparece en {stats.mostFrequentZodiac[1]} {stats.mostFrequentZodiac[1] === 1 ? 'consulta' : 'consultas'}
                        </p>
                      </div>
                    </div>
                    <Link
                      to={`/signos/${stats.mostFrequentZodiac[0]}`}
                      className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:underline"
                    >
                      Ver información de {stats.mostFrequentZodiac[0]} →
                    </Link>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Charts */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Type Distribution */}
              {typeChartData.length > 0 && (
                <Card className="glass-card border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">Distribución por Tipo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={typeChartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {typeChartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                    <div className="flex flex-wrap gap-3 mt-4 justify-center">
                      {typeChartData.map((entry, index) => (
                        <div key={entry.name} className="flex items-center gap-2 text-sm">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                          />
                          <span className="text-muted-foreground">{entry.name}: {entry.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Life Path Distribution */}
              {lifePathChartData.length > 0 && (
                <Card className="glass-card border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">Números de Vida Calculados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={lifePathChartData}>
                          <XAxis dataKey="number" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                          <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Monthly Activity */}
            {monthlyChartData.length > 1 && (
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    Actividad Mensual
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyChartData}>
                        <XAxis dataKey="month" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                        <YAxis tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="count" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            )}

            {/* Quick Links */}
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="text-lg">Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Link
                    to="/calculadora"
                    className="flex items-center gap-3 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <Calculator className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-medium">Nuevo Cálculo</p>
                      <p className="text-sm text-muted-foreground">Ir a calculadora</p>
                    </div>
                  </Link>
                  <Link
                    to="/historial"
                    className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <Calendar className="w-6 h-6 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Ver Historial</p>
                      <p className="text-sm text-muted-foreground">{stats.total} cálculos</p>
                    </div>
                  </Link>
                  <Link
                    to="/favoritos"
                    className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <Star className="w-6 h-6 text-yellow-400" />
                    <div>
                      <p className="font-medium">Mis Favoritos</p>
                      <p className="text-sm text-muted-foreground">Ver guardados</p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
