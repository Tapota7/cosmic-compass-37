import { Heart } from 'lucide-react';
import { useFavorites, FavoriteType } from '@/hooks/useFavorites';
import { cn } from '@/lib/utils';

interface FavoriteButtonProps {
  id: string;
  type: FavoriteType;
  name: string;
  symbol: string;
  className?: string;
}

const FavoriteButton = ({ id, type, name, symbol, className }: FavoriteButtonProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isActive = isFavorite(id, type);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite({ id, type, name, symbol });
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'p-2 rounded-full transition-all duration-300',
        isActive 
          ? 'bg-primary/20 text-primary' 
          : 'bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10',
        className
      )}
      aria-label={isActive ? 'Quitar de favoritos' : 'Agregar a favoritos'}
    >
      <Heart 
        className={cn('w-5 h-5 transition-all', isActive && 'fill-primary')} 
      />
    </button>
  );
};

export default FavoriteButton;
