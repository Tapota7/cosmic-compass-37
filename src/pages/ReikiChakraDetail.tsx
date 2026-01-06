import { useParams, Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import BackButton from '@/components/BackButton';
import FavoriteButton from '@/components/FavoriteButton';
import { getChakraById, chakrasReiki } from '@/data/reiki';
import { getChakraDetailById } from '@/data/chakraDetails';

const ReikiChakraDetail = () => {
  const { id } = useParams<{ id: string }>();
  const chakra = getChakraById(id || '');
  const details = getChakraDetailById(id || '');

  if (!chakra || !details) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-muted-foreground">Chakra no encontrado.</p>
        <Link to="/reiki/chakras" className="text-primary hover:underline mt-4 inline-block">
          Volver a Chakras
        </Link>
      </div>
    );
  }

  const getChakraColorClass = (color: string) => {
    const colors: Record<string, string> = {
      'Rojo': 'from-red-500 to-red-600',
      'Naranja': 'from-orange-500 to-orange-600',
      'Amarillo': 'from-yellow-500 to-yellow-600',
      'Verde': 'from-green-500 to-green-600',
      'Azul': 'from-blue-500 to-blue-600',
      'Índigo': 'from-indigo-500 to-indigo-600',
      'Violeta/Blanco': 'from-purple-500 to-purple-600',
    };
    return colors[color] || 'from-primary to-primary';
  };

  const getChakraBgClass = (color: string) => {
    const colors: Record<string, string> = {
      'Rojo': 'bg-red-500/10 border-red-500/30',
      'Naranja': 'bg-orange-500/10 border-orange-500/30',
      'Amarillo': 'bg-yellow-500/10 border-yellow-500/30',
      'Verde': 'bg-green-500/10 border-green-500/30',
      'Azul': 'bg-blue-500/10 border-blue-500/30',
      'Índigo': 'bg-indigo-500/10 border-indigo-500/30',
      'Violeta/Blanco': 'bg-purple-500/10 border-purple-500/30',
    };
    return colors[color] || 'bg-primary/10 border-primary/30';
  };

  // Find adjacent chakras for navigation
  const currentIndex = chakrasReiki.findIndex(c => c.id === chakra.id);
  const prevChakra = currentIndex > 0 ? chakrasReiki[currentIndex - 1] : null;
  const nextChakra = currentIndex < chakrasReiki.length - 1 ? chakrasReiki[currentIndex + 1] : null;

  return (
    <>
      <SEOHead
        title={`${chakra.name} (${chakra.sanskritName}) - Meditaciones y Ejercicios`}
        description={`Guía completa del ${chakra.name}: meditaciones, ejercicios de equilibrado, cristales, aceites esenciales y más para armonizar este centro energético.`}
        keywords={`${chakra.name}, ${chakra.sanskritName}, chakra ${chakra.color.toLowerCase()}, meditación chakra, ejercicios chakra, equilibrar chakras`}
      />

      <div className="container mx-auto px-4">
        <BackButton fallbackPath="/reiki/chakras" label="Volver a Chakras" />

        {/* Hero Section */}
        <section className="text-center py-8 md:py-12">
          <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br ${getChakraColorClass(chakra.color)} flex items-center justify-center text-5xl md:text-6xl mx-auto mb-6 float-animation`}>
            ◉
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold gradient-text mb-2">
            {chakra.name}
          </h1>
          <p className="text-xl md:text-2xl text-primary/80 mb-4">{chakra.sanskritName}</p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <span className={`px-4 py-2 rounded-full ${getChakraBgClass(chakra.color)} border`}>
              🎨 {chakra.color}
            </span>
            <span className={`px-4 py-2 rounded-full ${getChakraBgClass(chakra.color)} border`}>
              📍 {chakra.location}
            </span>
            <span className={`px-4 py-2 rounded-full ${getChakraBgClass(chakra.color)} border`}>
              🌀 {chakra.element}
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className={`px-4 py-2 rounded-full ${getChakraBgClass(chakra.color)} border`}>
              🕉️ Mantra: {details.mantra}
            </span>
            <span className={`px-4 py-2 rounded-full ${getChakraBgClass(chakra.color)} border`}>
              🎵 Nota: {details.note}
            </span>
          </div>

          <FavoriteButton
            type="reiki"
            id={`chakra-${chakra.id}`}
            name={`Chakra: ${chakra.name}`}
            symbol="◉"
          />
        </section>

        {/* Reiki Connection */}
        <section className="mb-10">
          <div className="glass-card max-w-4xl mx-auto">
            <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <span>✋</span> Conexión con Reiki
            </h2>
            <p className="text-muted-foreground">{chakra.reikiConnection}</p>
          </div>
        </section>

        {/* Symptoms */}
        <section className="mb-10">
          <h2 className="font-display text-2xl font-semibold mb-6 text-center">Estados del Chakra</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="glass-card border-l-4 border-green-500">
              <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2 text-green-500">
                <span>✅</span> Equilibrado
              </h3>
              <ul className="space-y-2">
                {details.symptoms.balanced.map((symptom, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-green-500 shrink-0">•</span>
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card border-l-4 border-blue-500">
              <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2 text-blue-500">
                <span>🔒</span> Bloqueado
              </h3>
              <ul className="space-y-2">
                {details.symptoms.blocked.map((symptom, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-blue-500 shrink-0">•</span>
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card border-l-4 border-orange-500">
              <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2 text-orange-500">
                <span>⚡</span> Hiperactivo
              </h3>
              <ul className="space-y-2">
                {details.symptoms.overactive.map((symptom, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-orange-500 shrink-0">•</span>
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Affirmations */}
        <section className="mb-10">
          <div className={`glass-card max-w-4xl mx-auto border-2 ${getChakraBgClass(chakra.color).split(' ')[1]}`}>
            <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <span>💬</span> Afirmaciones
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {details.affirmations.map((affirmation, index) => (
                <p key={index} className="text-muted-foreground italic text-center p-3 bg-secondary/30 rounded-lg">
                  "{affirmation}"
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Meditation */}
        <section className="mb-10">
          <div className="glass-card max-w-4xl mx-auto">
            <h2 className="font-display text-xl font-semibold mb-2 flex items-center gap-2">
              <span>🧘</span> {details.meditation.title}
            </h2>
            <p className="text-sm text-muted-foreground mb-6">Duración: {details.meditation.duration}</p>
            
            <ol className="space-y-4">
              {details.meditation.steps.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className={`w-8 h-8 rounded-full bg-gradient-to-br ${getChakraColorClass(chakra.color)} flex items-center justify-center text-sm font-semibold text-white shrink-0`}>
                    {index + 1}
                  </span>
                  <p className="text-muted-foreground pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Exercises */}
        <section className="mb-10">
          <h2 className="font-display text-2xl font-semibold mb-6 text-center">Ejercicios de Equilibrado</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {details.exercises.map((exercise, index) => (
              <div key={index} className="glass-card">
                <h3 className="font-display text-lg font-semibold mb-2">{exercise.name}</h3>
                <p className="text-xs text-primary/80 mb-3">⏱️ {exercise.duration}</p>
                <p className="text-sm text-muted-foreground">{exercise.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Support Tools */}
        <section className="mb-10">
          <h2 className="font-display text-2xl font-semibold mb-6 text-center">Herramientas de Apoyo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="glass-card">
              <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <span>💎</span> Cristales
              </h3>
              <ul className="space-y-2">
                {details.crystals.map((crystal, index) => (
                  <li key={index} className="text-sm text-muted-foreground">• {crystal}</li>
                ))}
              </ul>
            </div>

            <div className="glass-card">
              <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <span>🌿</span> Aceites Esenciales
              </h3>
              <ul className="space-y-2">
                {details.essentialOils.map((oil, index) => (
                  <li key={index} className="text-sm text-muted-foreground">• {oil}</li>
                ))}
              </ul>
            </div>

            <div className="glass-card">
              <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <span>🍎</span> Alimentos
              </h3>
              <ul className="space-y-2">
                {details.foods.map((food, index) => (
                  <li key={index} className="text-sm text-muted-foreground">• {food}</li>
                ))}
              </ul>
            </div>

            <div className="glass-card">
              <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <span>🧘‍♀️</span> Posturas de Yoga
              </h3>
              <ul className="space-y-2">
                {details.yogaPoses.map((pose, index) => (
                  <li key={index} className="text-sm text-muted-foreground">• {pose}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Balancing Signs */}
        <section className="mb-10">
          <div className="glass-card max-w-4xl mx-auto text-center">
            <h2 className="font-display text-xl font-semibold mb-4">Signos Astrológicos Afines</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {chakra.balancingSigns.map((sign) => (
                <Link
                  key={sign}
                  to={`/signos/${sign.toLowerCase()}`}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  {sign}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation between chakras */}
        <section className="mb-10">
          <div className="flex justify-between max-w-4xl mx-auto">
            {prevChakra ? (
              <Link
                to={`/reiki/chakras/${prevChakra.id}`}
                className="glass-card flex items-center gap-3 hover:bg-secondary/50 transition-colors"
              >
                <span className="text-2xl">←</span>
                <div>
                  <p className="text-xs text-muted-foreground">Anterior</p>
                  <p className="font-medium">{prevChakra.name}</p>
                </div>
              </Link>
            ) : <div />}

            {nextChakra ? (
              <Link
                to={`/reiki/chakras/${nextChakra.id}`}
                className="glass-card flex items-center gap-3 hover:bg-secondary/50 transition-colors text-right"
              >
                <div>
                  <p className="text-xs text-muted-foreground">Siguiente</p>
                  <p className="font-medium">{nextChakra.name}</p>
                </div>
                <span className="text-2xl">→</span>
              </Link>
            ) : <div />}
          </div>
        </section>
      </div>
    </>
  );
};

export default ReikiChakraDetail;
