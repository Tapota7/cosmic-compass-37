import { useState } from 'react';
import { transits2026, yearSummary } from '@/data/transits2026';

const Transits2026 = () => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const currentMonth = selectedMonth ? transits2026.find(m => m.id === selectedMonth) : null;

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl font-bold gradient-text mb-4">Tránsitos y Aspectos 2026</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Predicciones astrológicas mensuales</p>
      </div>

      {/* Year Summary */}
      <section className="glass-card mb-8">
        <h2 className="font-display text-2xl font-semibold mb-4">{yearSummary.title}</h2>
        <p className="text-muted-foreground mb-6">{yearSummary.summary}</p>
        <h3 className="font-semibold mb-3 text-primary">Temas Mayores del Año</h3>
        <ul className="space-y-2">
          {yearSummary.majorThemes.map((theme, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary">✦</span>{theme}
            </li>
          ))}
        </ul>
      </section>

      {/* Timeline */}
      <div className="glass-card mb-8 overflow-x-auto">
        <div className="flex gap-2 min-w-max p-2">
          {transits2026.map((month) => (
            <button
              key={month.id}
              onClick={() => setSelectedMonth(month.id === selectedMonth ? null : month.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedMonth === month.id ? 'bg-primary text-primary-foreground' : 'bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground'}`}
            >
              {month.month}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Month or All Months */}
      {currentMonth ? (
        <div className="glass-card animate-fade-in">
          <h2 className="font-display text-2xl font-semibold mb-2">{currentMonth.month} 2026</h2>
          <p className="text-primary mb-4">{currentMonth.title}</p>
          <p className="text-muted-foreground mb-6">{currentMonth.summary}</p>
          
          <h3 className="font-semibold mb-3">Tránsitos</h3>
          <div className="space-y-3 mb-6">
            {currentMonth.transits.map((transit, i) => (
              <div key={i} className="p-3 rounded-lg bg-secondary/30">
                <p className="text-sm text-primary">{transit.date}</p>
                <p className="font-medium">{transit.title}</p>
                <p className="text-sm text-muted-foreground">{transit.description}</p>
              </div>
            ))}
          </div>

          {currentMonth.retrogrades.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-destructive">⟲ Retrogradaciones</h3>
              <ul>{currentMonth.retrogrades.map((r, i) => <li key={i} className="text-sm text-muted-foreground">• {r}</li>)}</ul>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Áreas Afectadas</h3>
              <div className="flex flex-wrap gap-2">{currentMonth.areasAffected.map((a, i) => <span key={i} className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">{a}</span>)}</div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Consejo</h3>
              <p className="text-sm text-muted-foreground">{currentMonth.advice}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transits2026.map((month) => (
            <button key={month.id} onClick={() => setSelectedMonth(month.id)} className="glass-card text-left hover:border-primary/50">
              <h3 className="font-display text-xl font-semibold mb-1">{month.month} 2026</h3>
              <p className="text-primary text-sm mb-2">{month.title}</p>
              <p className="text-xs text-muted-foreground line-clamp-2">{month.summary}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Transits2026;
