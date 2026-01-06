import { Link } from 'react-router-dom';

const sections = [
  { path: '/signos', emoji: '♈', title: 'Signos del Zodíaco', description: '12 signos con arquetipos, mitología y cualidades profundas' },
  { path: '/compatibilidad', emoji: '💕', title: 'Compatibilidad', description: 'Calcula la compatibilidad entre dos signos zodiacales' },
  { path: '/casas', emoji: '🏠', title: 'Casas Astrológicas', description: '12 casas y las áreas de vida que gobiernan' },
  { path: '/planetas', emoji: '☉', title: 'Planetas', description: 'Sol, Luna y planetas con sus funciones psicológicas' },
  { path: '/numeros', emoji: '🔢', title: 'Numerología', description: 'Explora los números básicos, maestros y kármicos' },
  { path: '/grabovoi', emoji: '💫', title: 'Números de Grabovoi', description: 'Secuencias sagradas para sanación y manifestación' },
  { path: '/reiki', emoji: '✋', title: 'Reiki', description: 'Sanación energética: símbolos, principios y posiciones de manos' },
  { path: '/aspectos', emoji: '△', title: 'Aspectos Astrológicos', description: 'Conjunciones, trígonos, cuadraturas y más' },
  { path: '/transitos-2026', emoji: '📅', title: 'Tránsitos 2026', description: 'Predicciones mensuales y eventos mayores del año' },
  { path: '/consultas', emoji: '🔮', title: 'Consultas Personalizadas', description: 'Informes astrológicos de 20-25 páginas elaborados a medida', highlight: true },
];

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24">
        <div className="text-7xl md:text-8xl float-animation mb-6">🌌</div>
        <h1 className="font-display text-4xl md:text-6xl font-bold gradient-text mb-4">
          Sabiduría Cuántica
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Explora el cosmos interior. Descubre los misterios de la astrología, 
          la numerología y el conocimiento esotérico que guía tu camino.
        </p>
      </section>

      {/* Main Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
        {sections.map((section) => (
          <Link
            key={section.path}
            to={section.path}
            className={`glass-card group cursor-pointer ${
              (section as any).highlight 
                ? 'ring-2 ring-primary/50 bg-primary/5' 
                : ''
            }`}
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {section.emoji}
            </div>
            <h2 className="font-display text-xl font-semibold text-foreground mb-2">
              {section.title}
            </h2>
            <p className="text-muted-foreground text-sm">
              {section.description}
            </p>
            {(section as any).highlight && (
              <span className="mt-3 inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                ✨ Servicio Premium
              </span>
            )}
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Home;
