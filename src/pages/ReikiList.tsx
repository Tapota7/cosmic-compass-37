import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { reikiHistory } from '@/data/reiki';

const reikiSections = [
  {
    path: '/reiki/simbolos',
    emoji: '🔯',
    title: 'Símbolos Sagrados',
    description: 'Cho Ku Rei, Sei He Ki, Hon Sha Ze Sho Nen, Dai Ko Myo y Raku. Las llaves que desbloquean la energía universal.',
  },
  {
    path: '/reiki/principios',
    emoji: '🙏',
    title: 'Los 5 Principios',
    description: 'El Gokai: la filosofía de vida del practicante de Reiki. Solo por hoy...',
  },
  {
    path: '/reiki/posiciones',
    emoji: '🤲',
    title: 'Posiciones de Manos',
    description: 'Las 12 posiciones tradicionales para la autosanación y el tratamiento a otros.',
  },
  {
    path: '/reiki/niveles',
    emoji: '📚',
    title: 'Niveles de Reiki',
    description: 'Shoden, Okuden, Shinpiden y Maestría. El camino progresivo del practicante.',
  },
  {
    path: '/reiki/chakras',
    emoji: '🌈',
    title: 'Los 7 Chakras',
    description: 'Centros energéticos del cuerpo y cómo equilibrarlos con Reiki.',
  },
];

const ReikiList = () => {
  return (
    <>
      <SEOHead
        title="Reiki - Sanación Energética Universal"
        description="Aprende sobre Reiki: símbolos sagrados, los 5 principios, posiciones de manos, chakras y niveles. Guía completa de sanación energética."
        keywords="reiki, sanación energética, chakras, símbolos reiki, cho ku rei, sei he ki, meditación, energía universal"
      />

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center py-12 md:py-16">
          <div className="text-7xl md:text-8xl float-animation mb-6">✋</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
            Reiki
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            El arte japonés de la sanación a través de la imposición de manos.
            Canaliza la energía universal para equilibrar cuerpo, mente y espíritu.
          </p>
        </section>

        {/* What is Reiki */}
        <section className="mb-16">
          <div className="glass-card max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-semibold mb-4 flex items-center gap-2">
              <span>🌟</span> ¿Qué es Reiki?
            </h2>
            <p className="text-muted-foreground mb-4">
              Reiki (霊気) significa "energía vital universal" en japonés. <strong>Rei</strong> se traduce como "universal" o "espiritual", 
              mientras que <strong>Ki</strong> es la energía vital que fluye a través de todos los seres vivos.
            </p>
            <p className="text-muted-foreground mb-4">
              {reikiHistory.description}
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="px-4 py-2 rounded-lg bg-primary/10 text-sm">
                <span className="font-medium">Fundador:</span> {reikiHistory.founder}
              </div>
              <div className="px-4 py-2 rounded-lg bg-primary/10 text-sm">
                <span className="font-medium">Año:</span> {reikiHistory.foundingYear}
              </div>
              <div className="px-4 py-2 rounded-lg bg-primary/10 text-sm">
                <span className="font-medium">Origen:</span> {reikiHistory.origin}
              </div>
            </div>
          </div>
        </section>

        {/* Sections Grid */}
        <section className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-center mb-8">
            Explora los Temas de Reiki
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reikiSections.map((section) => (
              <Link
                key={section.path}
                to={section.path}
                className="glass-card group cursor-pointer hover:border-primary/50 transition-all hover:scale-[1.02]"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {section.emoji}
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {section.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {section.description}
                </p>
                <div className="mt-4 text-primary text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Explorar →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <div className="glass-card max-w-4xl mx-auto">
            <h2 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
              <span>💫</span> Beneficios del Reiki
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground text-sm">Reduce el estrés y promueve la relajación profunda</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground text-sm">Acelera los procesos naturales de sanación del cuerpo</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground text-sm">Equilibra las emociones y calma la mente</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground text-sm">Mejora el sueño y aumenta la vitalidad</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground text-sm">Fortalece el sistema inmunológico</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground text-sm">Ayuda a liberar bloqueos emocionales y energéticos</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground text-sm">Promueve el crecimiento espiritual y la autoconciencia</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground text-sm">Complementa otros tratamientos médicos y terapéuticos</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-8">
          <div className="glass-card max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Aviso:</strong> El Reiki es una práctica complementaria de bienestar y no sustituye 
              el diagnóstico o tratamiento médico profesional. Siempre consulta con profesionales de la 
              salud para cualquier condición médica.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReikiList;
