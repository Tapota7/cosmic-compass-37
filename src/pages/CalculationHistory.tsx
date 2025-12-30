import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Calendar, Hash, Heart, RefreshCw, Sparkles } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import BackButton from '@/components/BackButton';
import { useAuth } from '@/contexts/AuthContext';
import { useCalculationHistory, CalculationHistoryItem } from '@/hooks/useCalculationHistory';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type FilterType = 'all' | 'numerologia' | 'compatibilidad_astrologica' | 'compatibilidad_numerologica' | 'ciclos_personales';

const CalculationHistory = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { getHistory, deleteCalculation, loading } = useCalculationHistory();
  const { toast } = useToast();
  const [history, setHistory] = useState<CalculationHistoryItem[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');

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

  const handleDelete = async (id: string) => {
    const success = await deleteCalculation(id);
    if (success) {
      setHistory(prev => prev.filter(item => item.id !== id));
      toast({
        title: "Cálculo eliminado",
        description: "El registro ha sido eliminado de tu historial.",
      });
    } else {
      toast({
        title: "Error",
        description: "No se pudo eliminar el cálculo.",
        variant: "destructive",
      });
    }
  };

  const getTypeInfo = (type: string) => {
    switch (type) {
      case 'numerologia':
        return { label: 'Numerología', emoji: '🔢', icon: Hash, color: 'bg-purple-500/20 text-purple-300' };
      case 'compatibilidad_astrologica':
        return { label: 'Compatibilidad Astrológica', emoji: '💫', icon: Sparkles, color: 'bg-yellow-500/20 text-yellow-300' };
      case 'compatibilidad_numerologica':
        return { label: 'Compatibilidad Numerológica', emoji: '💕', icon: Heart, color: 'bg-pink-500/20 text-pink-300' };
      case 'ciclos_personales':
        return { label: 'Ciclos Personales', emoji: '🔄', icon: RefreshCw, color: 'bg-blue-500/20 text-blue-300' };
      default:
        return { label: type, emoji: '📊', icon: Hash, color: 'bg-gray-500/20 text-gray-300' };
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const renderInputSummary = (type: string, inputData: any) => {
    switch (type) {
      case 'numerologia':
        return (
          <div className="text-sm text-muted-foreground">
            <p><span className="text-foreground">Nombre:</span> {inputData.name}</p>
            <p><span className="text-foreground">Fecha:</span> {inputData.birthDate}</p>
          </div>
        );
      case 'compatibilidad_astrologica':
        return (
          <div className="text-sm text-muted-foreground">
            <p><span className="text-foreground">Signos:</span> {inputData.sign1} ♥ {inputData.sign2}</p>
          </div>
        );
      case 'compatibilidad_numerologica':
        return (
          <div className="text-sm text-muted-foreground">
            <p><span className="text-foreground">Personas:</span> {inputData.person1?.name} y {inputData.person2?.name}</p>
          </div>
        );
      case 'ciclos_personales':
        return (
          <div className="text-sm text-muted-foreground">
            <p><span className="text-foreground">Fecha de nacimiento:</span> {inputData.birthDate}</p>
          </div>
        );
      default:
        return null;
    }
  };

  const renderResultSummary = (type: string, resultData: any) => {
    switch (type) {
      case 'numerologia':
        return (
          <div className="flex flex-wrap gap-2 mt-2">
            {resultData.lifePath && (
              <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                Camino de vida: {resultData.lifePath}
              </span>
            )}
            {resultData.destiny && (
              <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                Destino: {resultData.destiny}
              </span>
            )}
          </div>
        );
      case 'compatibilidad_astrologica':
      case 'compatibilidad_numerologica':
        return (
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
              Puntuación: {resultData.score}%
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
              {resultData.level}
            </span>
          </div>
        );
      case 'ciclos_personales':
        return (
          <div className="flex flex-wrap gap-2 mt-2">
            {resultData.personalYear && (
              <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-300">
                Año: {resultData.personalYear.number}
              </span>
            )}
            {resultData.personalMonth && (
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
                Mes: {resultData.personalMonth.number}
              </span>
            )}
            {resultData.personalDay && (
              <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
                Día: {resultData.personalDay.number}
              </span>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  const filteredHistory = filter === 'all' 
    ? history 
    : history.filter(item => item.calculation_type === filter);

  const counts = {
    all: history.length,
    numerologia: history.filter(h => h.calculation_type === 'numerologia').length,
    compatibilidad_astrologica: history.filter(h => h.calculation_type === 'compatibilidad_astrologica').length,
    compatibilidad_numerologica: history.filter(h => h.calculation_type === 'compatibilidad_numerologica').length,
    ciclos_personales: history.filter(h => h.calculation_type === 'ciclos_personales').length,
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl float-animation mb-4">📜</div>
          <p className="text-muted-foreground">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title="Mi Historial de Cálculos - Numerología y Astrología"
        description="Revisa todos tus cálculos anteriores de numerología, compatibilidad astrológica y ciclos personales."
        keywords="historial, cálculos, numerología, astrología, compatibilidad"
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <BackButton fallbackPath="/" label="Volver al inicio" />

        <div className="text-center mb-8">
          <div className="text-6xl mb-4 float-animation">📜</div>
          <h1 className="font-display text-4xl font-bold gradient-text mb-4">
            Mi Historial
          </h1>
          <p className="text-muted-foreground">
            Todos tus cálculos guardados en un solo lugar
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-8" onValueChange={(v) => setFilter(v as FilterType)}>
          <TabsList className="w-full flex-wrap h-auto gap-2 bg-secondary/30 p-2">
            <TabsTrigger value="all" className="flex-1 min-w-[100px]">
              Todos ({counts.all})
            </TabsTrigger>
            <TabsTrigger value="numerologia" className="flex-1 min-w-[100px]">
              🔢 Numerología ({counts.numerologia})
            </TabsTrigger>
            <TabsTrigger value="compatibilidad_astrologica" className="flex-1 min-w-[100px]">
              💫 Astral ({counts.compatibilidad_astrologica})
            </TabsTrigger>
            <TabsTrigger value="compatibilidad_numerologica" className="flex-1 min-w-[100px]">
              💕 Numérica ({counts.compatibilidad_numerologica})
            </TabsTrigger>
            <TabsTrigger value="ciclos_personales" className="flex-1 min-w-[100px]">
              🔄 Ciclos ({counts.ciclos_personales})
            </TabsTrigger>
          </TabsList>

          <TabsContent value={filter} className="mt-6">
            {loading ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4 animate-spin">⏳</div>
                <p className="text-muted-foreground">Cargando historial...</p>
              </div>
            ) : filteredHistory.length === 0 ? (
              <div className="glass-card text-center py-12">
                <div className="text-6xl mb-4">📭</div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  No hay cálculos guardados
                </h3>
                <p className="text-muted-foreground mb-4">
                  {filter === 'all' 
                    ? 'Realiza tu primer cálculo para verlo aquí' 
                    : `No tienes cálculos de ${getTypeInfo(filter).label.toLowerCase()}`}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredHistory.map((item) => {
                  const typeInfo = getTypeInfo(item.calculation_type);
                  const IconComponent = typeInfo.icon;
                  
                  return (
                    <div 
                      key={item.id} 
                      className="glass-card hover:border-primary/30 transition-all group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${typeInfo.color}`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-display font-semibold">
                                {typeInfo.label}
                              </h3>
                              <span className="text-lg">{typeInfo.emoji}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                              <Calendar className="w-3 h-3" />
                              {formatDate(item.created_at)}
                            </div>
                            <div className="mt-3">
                              {renderInputSummary(item.calculation_type, item.input_data)}
                              {renderResultSummary(item.calculation_type, item.result_data)}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors opacity-0 group-hover:opacity-100"
                          title="Eliminar"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default CalculationHistory;
