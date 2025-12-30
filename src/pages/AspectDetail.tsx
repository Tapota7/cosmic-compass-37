import { useParams, Link } from 'react-router-dom';
import { getAspectById } from '@/data/aspects';
import BackButton from '@/components/BackButton';

const AspectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const aspect = getAspectById(id || '');

  if (!aspect) {
    return (
      <div className="container mx-auto px-4 text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Aspecto no encontrado</h1>
        <Link to="/aspectos" className="text-primary hover:underline">← Volver a aspectos</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <BackButton fallbackPath="/aspectos" label="Volver a aspectos" />
      <header className="glass-card text-center mb-8">
        <div className="text-7xl mb-4 glow">{aspect.symbol}</div>
        <h1 className="font-display text-4xl font-bold mb-2">{aspect.name}</h1>
        <div className="flex justify-center gap-4 text-muted-foreground">
          <span>{aspect.angle}°</span>
          <span>Orbe: ±{aspect.orb}°</span>
          <span className={`px-3 py-1 rounded-full ${aspect.type === 'armónico' ? 'bg-element-earth/20 text-element-earth' : aspect.type === 'dinámico' ? 'bg-element-fire/20 text-element-fire' : 'bg-secondary'}`}>{aspect.type}</span>
        </div>
      </header>
      <section className="glass-card mb-6">
        <h2 className="font-display text-2xl font-semibold mb-4">Significado</h2>
        <p className="text-muted-foreground leading-relaxed">{aspect.meaning}</p>
      </section>
      <section className="glass-card mb-6">
        <h2 className="font-display text-2xl font-semibold mb-4">Manifestación</h2>
        <p className="text-muted-foreground leading-relaxed">{aspect.manifestation}</p>
      </section>
      <div className="grid md:grid-cols-2 gap-6">
        <section className="glass-card">
          <h2 className="font-display text-xl font-semibold mb-3 text-destructive">Desafíos</h2>
          <p className="text-sm text-muted-foreground">{aspect.challenges}</p>
        </section>
        <section className="glass-card">
          <h2 className="font-display text-xl font-semibold mb-3 text-primary">Oportunidades</h2>
          <p className="text-sm text-muted-foreground">{aspect.opportunities}</p>
        </section>
      </div>
    </div>
  );
};

export default AspectDetail;
