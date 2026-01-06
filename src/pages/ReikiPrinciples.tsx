import SEOHead from '@/components/SEOHead';
import BackButton from '@/components/BackButton';
import { reikiPrinciples } from '@/data/reiki';

const ReikiPrinciples = () => {
  return (
    <>
      <SEOHead
        title="Los 5 Principios de Reiki - Gokai"
        description="Los 5 principios de Reiki (Gokai): Solo por hoy no te enojes, no te preocupes, sé agradecido, trabaja honestamente, sé amable. Filosofía de vida Reiki."
        keywords="principios reiki, gokai, solo por hoy, filosofía reiki, meditación, mindfulness"
      />

      <div className="container mx-auto px-4">
        <BackButton fallbackPath="/reiki" label="Volver a Reiki" />

        {/* Hero Section */}
        <section className="text-center py-12 md:py-16">
          <div className="text-7xl md:text-8xl float-animation mb-6">🙏</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
            Los 5 Principios de Reiki
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            El Gokai: los pilares filosóficos que guían la vida del practicante de Reiki.
            "Solo por hoy" nos invita a vivir conscientemente el presente.
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <div className="glass-card max-w-4xl mx-auto">
            <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <span>📜</span> Sobre los Principios
            </h2>
            <p className="text-muted-foreground mb-4">
              Los cinco principios de Reiki, conocidos como <strong>Gokai</strong> (五戒) en japonés, 
              fueron establecidos por Mikao Usui como guía ética y espiritual para los practicantes. 
              Más que reglas, son invitaciones a cultivar una forma de vida consciente y equilibrada.
            </p>
            <p className="text-muted-foreground mb-4">
              La frase <strong>"Solo por hoy"</strong> (Kyo dake wa) que precede cada principio 
              es fundamental: nos libera de la presión de la perfección permanente y nos ancla 
              en el único momento que realmente podemos influir: el presente.
            </p>
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <p className="text-center text-sm italic">
                "El secreto para atraer felicidad, la medicina milagrosa para todas las enfermedades..."
                <br />
                <span className="text-muted-foreground">— Inscripción en la tumba de Mikao Usui</span>
              </p>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto space-y-6">
            {reikiPrinciples.map((principle, index) => (
              <div key={principle.id} className="glass-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-primary font-bold text-xl shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-primary/80 font-medium mb-1 italic">
                      {principle.japanese}
                    </p>
                    <h3 className="font-display text-xl font-semibold mb-3">
                      {principle.spanish}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.explanation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Practice */}
        <section className="mb-16">
          <div className="glass-card max-w-4xl mx-auto">
            <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <span>🧘</span> Cómo Practicar los Principios
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Recitación matutina:</strong> Comienza cada día recitando los cinco 
                principios en voz alta o mentalmente, preferiblemente en posición de Gassho 
                (manos unidas frente al corazón).
              </p>
              <p>
                <strong>Meditación:</strong> Dedica unos minutos a meditar sobre un principio 
                específico que necesites trabajar ese día. Visualiza cómo aplicarlo en situaciones 
                concretas de tu vida.
              </p>
              <p>
                <strong>Reflexión nocturna:</strong> Antes de dormir, revisa cómo viviste los 
                principios durante el día. Sin juzgarte, observa dónde puedes mejorar mañana.
              </p>
              <p>
                <strong>Práctica continua:</strong> Durante el día, cuando enfrentes desafíos, 
                recuerda el principio relevante. "Solo por hoy, no me enojaré" puede ser un 
                ancla poderosa en momentos difíciles.
              </p>
            </div>
          </div>
        </section>

        {/* Japanese Text */}
        <section className="mb-16">
          <div className="glass-card max-w-4xl mx-auto text-center">
            <h2 className="font-display text-xl font-semibold mb-6">
              Los Principios en Japonés
            </h2>
            <div className="p-6 rounded-lg bg-secondary/30 space-y-3">
              <p className="text-lg">招福の秘法 万病の霊薬</p>
              <p className="text-sm text-muted-foreground mb-4">
                (El secreto para atraer felicidad, la medicina milagrosa)
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>今日だけは (Kyo dake wa) - Solo por hoy</p>
                <p>怒るな (Okoru na) - No te enojes</p>
                <p>心配すな (Shinpai suna) - No te preocupes</p>
                <p>感謝して (Kansha shite) - Sé agradecido</p>
                <p>業をはげめ (Gyo wo hageme) - Trabaja honestamente</p>
                <p>人に親切に (Hito ni shinsetsu ni) - Sé amable con todos</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReikiPrinciples;
