import { useState } from 'react';
import { transits2026, yearSummary } from '@/data/transits2026';

const Transits2026 = () => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'eclipses' | 'ingresos' | 'superlunas' | 'estaciones'>('eclipses');
  const currentMonth = selectedMonth ? transits2026.find(m => m.id === selectedMonth) : null;

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl font-bold gradient-text mb-4">Tránsitos y Aspectos 2026</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Predicciones astrológicas mensuales detalladas</p>
      </div>

      {/* Year Summary */}
      <section className="glass-card mb-8">
        <h2 className="font-display text-2xl font-semibold mb-4">{yearSummary.title}</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">{yearSummary.summary}</p>
        
        {/* Keyword */}
        <div className="p-4 rounded-xl bg-primary/10 border border-primary/30 mb-6">
          <p className="text-sm text-primary mb-1">🔑 Palabra Clave Anual</p>
          <p className="text-2xl font-bold text-primary">{yearSummary.keyword}</p>
          <p className="text-sm text-muted-foreground mt-2">{yearSummary.keywordDescription}</p>
        </div>

        <h3 className="font-semibold mb-3 text-primary">Temas Mayores del Año</h3>
        <ul className="space-y-2 mb-6">
          {yearSummary.majorThemes.map((theme, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary">✦</span>{theme}
            </li>
          ))}
        </ul>

        {/* Tabs for different event types */}
        <div className="border-t border-border/50 pt-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { id: 'eclipses', label: '🌑 Eclipses', count: yearSummary.eclipses.length },
              { id: 'ingresos', label: '🪐 Ingresos', count: yearSummary.planetaryIngresses.length },
              { id: 'superlunas', label: '🌕 Superlunas', count: yearSummary.supermoons.length },
              { id: 'estaciones', label: '🌍 Estaciones', count: yearSummary.solsticesEquinoxes.length }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          {activeTab === 'eclipses' && (
            <div className="grid sm:grid-cols-2 gap-3 animate-fade-in">
              {yearSummary.eclipses.map((eclipse, i) => (
                <div key={i} className={`p-3 rounded-lg ${eclipse.isMainEvent ? 'bg-primary/20 border border-primary/50' : 'bg-secondary/30'}`}>
                  <p className="text-sm text-primary">{eclipse.date}</p>
                  <p className="font-medium">{eclipse.type}</p>
                  <p className="text-sm text-muted-foreground">{eclipse.sign}</p>
                  {eclipse.isMainEvent && <span className="text-xs text-primary mt-1 block">⭐ EVENTO DEL AÑO</span>}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'ingresos' && (
            <div className="grid sm:grid-cols-2 gap-3 animate-fade-in">
              {yearSummary.planetaryIngresses.map((ingress, i) => (
                <div key={i} className="p-3 rounded-lg bg-secondary/30">
                  <p className="text-sm text-primary">{ingress.date}</p>
                  <p className="font-medium">{ingress.planet} → {ingress.sign}</p>
                  <p className="text-sm text-muted-foreground">{ingress.duration}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'superlunas' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 animate-fade-in">
              {yearSummary.supermoons.map((moon, i) => (
                <div key={i} className="p-3 rounded-lg bg-secondary/30">
                  <p className="text-sm text-primary">{moon.date}</p>
                  <p className="font-medium">Luna {moon.type}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'estaciones' && (
            <div className="grid sm:grid-cols-2 gap-3 animate-fade-in">
              {yearSummary.solsticesEquinoxes.map((event, i) => (
                <div key={i} className="p-3 rounded-lg bg-secondary/30">
                  <p className="text-sm text-primary">{event.date}</p>
                  <p className="font-medium">{event.name}</p>
                  <p className="text-sm text-muted-foreground">{event.hemisphere}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Rare Event */}
        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30">
          <p className="text-sm text-primary mb-1">✨ Evento Raro del Año</p>
          <p className="font-semibold text-lg">{yearSummary.rareEvent.title}</p>
          <p className="text-sm text-muted-foreground">{yearSummary.rareEvent.date} - {yearSummary.rareEvent.description}</p>
        </div>
      </section>

      {/* Timeline */}
      <div className="glass-card mb-8 overflow-x-auto">
        <div className="flex gap-2 min-w-max p-2">
          {transits2026.map((month) => (
            <button
              key={month.id}
              onClick={() => setSelectedMonth(month.id === selectedMonth ? null : month.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                selectedMonth === month.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              <span>{month.emoji}</span>
              <span>{month.month}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Month or All Months */}
      {currentMonth ? (
        <div className="glass-card animate-fade-in">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{currentMonth.emoji}</span>
            <div>
              <h2 className="font-display text-2xl font-semibold">{currentMonth.month} 2026</h2>
              <p className="text-primary">{currentMonth.title}</p>
            </div>
          </div>
          
          <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm mb-4">
            {currentMonth.themeCentral}
          </div>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">{currentMonth.summary}</p>
          
          {/* Special Events */}
          {currentMonth.specialEvents && currentMonth.specialEvents.length > 0 && (
            <div className="mb-6">
              {currentMonth.specialEvents.map((event, i) => (
                <div key={i} className="p-4 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 mb-3">
                  <p className="font-semibold flex items-center gap-2">
                    <span>{event.type === 'eclipse' ? '🌑' : event.type === 'historic' ? '🌟' : '✨'}</span> {event.title}
                  </p>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
              ))}
            </div>
          )}
          
          <h3 className="font-semibold mb-3">Efemérides Principales</h3>
          <div className="space-y-3 mb-6">
            {currentMonth.transits.map((transit, i) => (
              <div key={i} className={`p-3 rounded-lg ${transit.isSpecial ? 'bg-primary/20 border border-primary/40' : 'bg-secondary/30'}`}>
                <p className="text-sm text-primary">{transit.date}</p>
                <p className="font-medium">{transit.title}</p>
                <p className="text-sm text-muted-foreground">{transit.description}</p>
              </div>
            ))}
          </div>

          {currentMonth.retrogrades.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-destructive">⟲ Retrogradaciones Activas</h3>
              <ul className="space-y-1">
                {currentMonth.retrogrades.map((r, i) => (
                  <li key={i} className="text-sm text-muted-foreground">• {r}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Áreas Afectadas</h3>
              <div className="flex flex-wrap gap-2">
                {currentMonth.areasAffected.map((a, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">{a}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">💡 Consejo del Mes</h3>
              <p className="text-sm text-muted-foreground">{currentMonth.advice}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transits2026.map((month) => (
            <button 
              key={month.id} 
              onClick={() => setSelectedMonth(month.id)} 
              className="glass-card text-left hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl group-hover:scale-110 transition-transform">{month.emoji}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold">{month.month} 2026</h3>
                  <p className="text-primary text-sm">{month.title}</p>
                </div>
              </div>
              <div className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs mb-2">
                {month.themeCentral}
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">{month.summary}</p>
              {month.specialEvents && month.specialEvents.length > 0 && (
                <p className="text-xs text-primary mt-2">✨ {month.specialEvents.length} evento{month.specialEvents.length > 1 ? 's' : ''} especial{month.specialEvents.length > 1 ? 'es' : ''}</p>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Transits2026;
