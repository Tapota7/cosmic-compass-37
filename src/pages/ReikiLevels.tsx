import SEOHead from '@/components/SEOHead';
import BackButton from '@/components/BackButton';
import { reikiLevels } from '@/data/reiki';

const ReikiLevels = () => {
  const levelEmojis = ['🌱', '🌿', '🌳', '👑'];

  return (
    <>
      <SEOHead
        title="Niveles de Reiki - Shoden, Okuden, Shinpiden, Maestría"
        description="Los 4 niveles de Reiki: Nivel I Shoden, Nivel II Okuden, Nivel III Shinpiden y Maestría. Qué aprenderás y los beneficios de cada nivel."
        keywords="niveles reiki, shoden, okuden, shinpiden, maestría reiki, iniciación reiki, formación reiki"
      />

      <div className="container mx-auto px-4">
        <BackButton fallbackPath="/reiki" label="Volver a Reiki" />

        {/* Hero Section */}
        <section className="text-center py-12 md:py-16">
          <div className="text-7xl md:text-8xl float-animation mb-6">📚</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
            Niveles de Reiki
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            El camino del Reiki se divide en niveles progresivos, cada uno expandiendo 
            tus capacidades de canalización y comprensión de la energía universal.
          </p>
        </section>

        {/* Path Overview */}
        <section className="mb-12">
          <div className="glass-card max-w-4xl mx-auto">
            <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <span>🛤️</span> El Camino del Reiki
            </h2>
            <p className="text-muted-foreground mb-4">
              Cada nivel de Reiki representa una expansión de la consciencia y las capacidades 
              del practicante. Las iniciaciones (o sintonizaciones) abren progresivamente el 
              canal energético, permitiendo canalizar frecuencias cada vez más elevadas.
            </p>
            <div className="flex items-center justify-center gap-2 mt-6 overflow-x-auto pb-4">
              {reikiLevels.map((level, index) => (
                <div key={level.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl mb-1">{levelEmojis[index]}</span>
                    <span className="text-xs text-center whitespace-nowrap">{level.japaneseName}</span>
                  </div>
                  {index < reikiLevels.length - 1 && (
                    <span className="text-primary mx-2">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Levels Detail */}
        <section className="mb-16">
          <div className="space-y-8 max-w-5xl mx-auto">
            {reikiLevels.map((level, index) => (
              <div key={level.id} className="glass-card">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Level Header */}
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-3xl">
                        {levelEmojis[index]}
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-semibold">{level.name}</h3>
                        <p className="text-sm text-primary/80">{level.japaneseName}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {level.description}
                    </p>
                  </div>

                  {/* What You Learn */}
                  <div className="md:w-1/3">
                    <h4 className="font-medium text-primary mb-3 flex items-center gap-2">
                      <span>📖</span> Qué Aprenderás
                    </h4>
                    <ul className="space-y-2">
                      {level.whatYouLearn.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="md:w-1/3">
                    <h4 className="font-medium text-primary mb-3 flex items-center gap-2">
                      <span>✨</span> Beneficios
                    </h4>
                    <ul className="space-y-2">
                      {level.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <div className="glass-card max-w-4xl mx-auto">
            <h2 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
              <span>❓</span> Preguntas Frecuentes
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">¿Cuánto tiempo hay entre niveles?</h3>
                <p className="text-muted-foreground text-sm">
                  Se recomienda un mínimo de 3-6 meses de práctica entre el Nivel I y II, 
                  y al menos un año antes de avanzar al Nivel III. La Maestría requiere 
                  varios años de experiencia y dedicación.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">¿Necesito tomar todos los niveles?</h3>
                <p className="text-muted-foreground text-sm">
                  No. El Nivel I es suficiente para la autosanación y tratamiento a familiares. 
                  Cada nivel adicional expande tus capacidades, pero no es obligatorio avanzar.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">¿Cómo elijo un Maestro de Reiki?</h3>
                <p className="text-muted-foreground text-sm">
                  Busca alguien con quien sientas conexión, que tenga un linaje claro, 
                  y que enseñe de manera ética. Confía en tu intuición y no tengas prisa.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReikiLevels;
