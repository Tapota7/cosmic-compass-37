import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { zodiacSigns } from '@/data/zodiacSigns';
import { houses } from '@/data/houses';
import { planets } from '@/data/planets';
import { aspects } from '@/data/aspects';

interface SearchResult {
  id: string;
  title: string;
  type: string;
  emoji: string;
  description: string;
  path: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const results = useMemo<SearchResult[]>(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    const items: SearchResult[] = [];

    zodiacSigns.forEach(sign => {
      if (
        sign.name.toLowerCase().includes(q) ||
        sign.element.toLowerCase().includes(q) ||
        sign.keywords.some(k => k.toLowerCase().includes(q))
      ) {
        items.push({
          id: sign.id,
          title: sign.name,
          type: 'Signo',
          emoji: sign.symbol,
          description: `${sign.element} • ${sign.dates}`,
          path: `/signos/${sign.id}`
        });
      }
    });

    houses.forEach(house => {
      if (
        house.name.toLowerCase().includes(q) ||
        house.keywords.some(k => k.toLowerCase().includes(q))
      ) {
        items.push({
          id: house.id,
          title: `Casa ${house.number}`,
          type: 'Casa',
          emoji: house.symbol,
          description: house.name,
          path: `/casas/${house.id}`
        });
      }
    });

    planets.forEach(planet => {
      if (
        planet.name.toLowerCase().includes(q) ||
        planet.keywords.some(k => k.toLowerCase().includes(q))
      ) {
        items.push({
          id: planet.id,
          title: planet.name,
          type: 'Planeta',
          emoji: planet.symbol,
          description: planet.keywords.slice(0, 3).join(', '),
          path: `/planetas/${planet.id}`
        });
      }
    });

    aspects.forEach(aspect => {
      if (
        aspect.name.toLowerCase().includes(q) ||
        aspect.keywords.some(k => k.toLowerCase().includes(q))
      ) {
        items.push({
          id: aspect.id,
          title: aspect.name,
          type: 'Aspecto',
          emoji: aspect.symbol,
          description: `${aspect.angle}° • ${aspect.type}`,
          path: `/aspectos/${aspect.id}`
        });
      }
    });

    return items.slice(0, 10);
  }, [query]);

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-xl glass-card p-0 overflow-hidden animate-fade-in">
        <div className="p-4 border-b border-border/50">
          <div className="flex items-center gap-3">
            <span className="text-xl">🔍</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar signos, casas, planetas..."
              className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
              autoFocus
            />
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Esc
            </button>
          </div>
        </div>

        {results.length > 0 && (
          <div className="max-h-80 overflow-y-auto">
            {results.map((result) => (
              <button
                key={`${result.type}-${result.id}`}
                onClick={() => handleSelect(result.path)}
                className="w-full p-4 flex items-center gap-4 hover:bg-secondary/50 transition-colors text-left border-b border-border/30 last:border-b-0"
              >
                <span className="text-2xl">{result.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">{result.title}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                      {result.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{result.description}</p>
                </div>
              </button>
            ))}
          </div>
        )}

        {query && results.length === 0 && (
          <div className="p-8 text-center text-muted-foreground">
            <span className="text-3xl block mb-2">🔭</span>
            <p>No se encontraron resultados para "{query}"</p>
          </div>
        )}

        {!query && (
          <div className="p-8 text-center text-muted-foreground">
            <p>Escribe para buscar en todo el contenido</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
