import { useState } from 'react';
import { Link } from 'react-router-dom';
import { aspects, calculateAspect } from '@/data/aspects';

const AspectsList = () => {
  const [deg1, setDeg1] = useState('');
  const [deg2, setDeg2] = useState('');
  const [calcResult, setCalcResult] = useState<ReturnType<typeof calculateAspect> | null>(null);

  const handleCalc = () => {
    const d1 = parseFloat(deg1);
    const d2 = parseFloat(deg2);
    if (!isNaN(d1) && !isNaN(d2)) {
      setCalcResult(calculateAspect(d1, d2));
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl font-bold gradient-text mb-4">Aspectos Astrológicos</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Las relaciones angulares entre planetas</p>
      </div>

      {/* Calculator */}
      <div className="glass-card mb-12 max-w-xl mx-auto">
        <h2 className="font-display text-xl font-semibold mb-4 text-center">Calculadora de Aspectos</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm mb-2">Grado Planeta 1 (0-360°)</label>
            <input type="number" min="0" max="360" value={deg1} onChange={(e) => setDeg1(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none" placeholder="0°" />
          </div>
          <div>
            <label className="block text-sm mb-2">Grado Planeta 2 (0-360°)</label>
            <input type="number" min="0" max="360" value={deg2} onChange={(e) => setDeg2(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none" placeholder="0°" />
          </div>
        </div>
        <button onClick={handleCalc} className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all">Calcular Aspecto</button>
        {calcResult && (
          <div className="mt-4 p-4 rounded-lg bg-secondary/50 text-center">
            {calcResult.aspect ? (
              <>
                <div className="text-3xl mb-2">{calcResult.aspect.symbol}</div>
                <p className="font-semibold text-primary">{calcResult.aspect.name}</p>
                <p className="text-sm text-muted-foreground">Diferencia: {calcResult.exactAngle.toFixed(1)}° | Orbe: {calcResult.orb}°</p>
              </>
            ) : (
              <p className="text-muted-foreground">No se forma aspecto mayor (diferencia: {calcResult.exactAngle.toFixed(1)}°)</p>
            )}
          </div>
        )}
      </div>

      {/* Aspects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {aspects.map((aspect) => (
          <Link key={aspect.id} to={`/aspectos/${aspect.id}`} className="glass-card group text-center">
            <div className="text-4xl mb-3 glow">{aspect.symbol}</div>
            <h2 className="font-display text-lg font-semibold mb-1">{aspect.name}</h2>
            <p className="text-sm text-primary mb-1">{aspect.angle}°</p>
            <span className={`text-xs px-2 py-1 rounded-full ${aspect.type === 'armónico' ? 'bg-element-earth/20 text-element-earth' : aspect.type === 'dinámico' ? 'bg-element-fire/20 text-element-fire' : 'bg-secondary text-muted-foreground'}`}>
              {aspect.type}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AspectsList;
