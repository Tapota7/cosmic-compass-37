import { useState } from 'react';
import { calculateLifePath, calculateDestiny, calculateSoul, calculatePersonality, calculatePersonalYear, getNumerologyNumber } from '@/data/numerology';

const Numerology = () => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [results, setResults] = useState<{ lifePath: number; destiny: number; soul: number; personality: number; personalYear: number } | null>(null);

  const handleCalculate = () => {
    if (!name.trim() || !birthDate) return;
    const [year, month, day] = birthDate.split('-').map(Number);
    const currentYear = new Date().getFullYear();
    setResults({
      lifePath: calculateLifePath(day, month, year),
      destiny: calculateDestiny(name),
      soul: calculateSoul(name),
      personality: calculatePersonality(name),
      personalYear: calculatePersonalYear(day, month, currentYear),
    });
  };

  const renderResult = (num: number, title: string, emoji: string) => {
    const data = getNumerologyNumber(num);
    if (!data) return null;
    return (
      <div className="glass-card">
        <div className="flex items-center gap-4 mb-4">
          <div className="number-circle text-2xl font-bold text-primary-foreground">{num}</div>
          <div>
            <h3 className="font-display text-xl font-semibold">{title}</h3>
            <p className="text-primary">{data.name}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {data.keywords.map((k, i) => <span key={i} className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">{k}</span>)}
        </div>
        <p className="text-sm text-muted-foreground mb-4">{data.meaning}</p>
        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
          <p className="text-sm"><span className="text-destructive font-medium">Sombra:</span> <span className="text-muted-foreground">{data.shadow}</span></p>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl font-bold gradient-text mb-4">Calculadora de Numerología</h1>
        <p className="text-muted-foreground">Descubre tus 5 números principales del destino</p>
      </div>

      <div className="glass-card mb-8">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Nombre Completo</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre completo" className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Fecha de Nacimiento</label>
            <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors" />
          </div>
        </div>
        <button onClick={handleCalculate} disabled={!name.trim() || !birthDate} className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all pulse-glow">
          🔢 Calcular Números
        </button>
      </div>

      {results && (
        <div className="grid gap-6 animate-fade-in">
          {renderResult(results.lifePath, 'Número de Vida', '🌟')}
          {renderResult(results.destiny, 'Número de Destino', '🎯')}
          {renderResult(results.soul, 'Número del Alma', '💫')}
          {renderResult(results.personality, 'Número de Personalidad', '🎭')}
          {renderResult(results.personalYear, 'Año Personal', '📅')}
        </div>
      )}
    </div>
  );
};

export default Numerology;
