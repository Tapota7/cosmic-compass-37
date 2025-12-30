import { Link } from 'react-router-dom';

const sections = [
  { path: '/signos', emoji: '♈', title: 'Signos del Zodíaco', description: '12 signos con arquetipos, mitología y cualidades profundas' },
  { path: '/casas', emoji: '🏠', title: 'Casas Astrológicas', description: '12 casas y las áreas de vida que gobiernan' },
  { path: '/planetas', emoji: '☉', title: 'Planetas', description: 'Sol, Luna y planetas con sus funciones psicológicas' },
  { path: '/numerologia', emoji: '🔢', title: 'Numerología', description: 'Calcula tus 5 números principales del destino' },
  { path: '/aspectos', emoji: '△', title: 'Aspectos Astrológicos', description: 'Conjunciones, trígonos, cuadraturas y más' },
  { path: '/transitos-2026', emoji: '📅', title: 'Tránsitos 2026', description: 'Predicciones mensuales y eventos mayores del año' },
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
            className="glass-card group cursor-pointer"
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
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Home;
