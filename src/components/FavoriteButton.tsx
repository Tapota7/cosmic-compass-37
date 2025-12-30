import { Heart, Loader2 } from 'lucide-react';
import { useFavoritesCloud, FavoriteType } from '@/hooks/useFavoritesCloud';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface FavoriteButtonProps {
  id: string;
  type: FavoriteType;
  name: string;
  symbol: string;
  className?: string;
}

const FavoriteButton = ({ id, type, name, symbol, className }: FavoriteButtonProps) => {
  const { user, loading: authLoading } = useAuth();
  const { isFavorite, toggleFavorite, loading } = useFavoritesCloud();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const isActive = isFavorite(id, type);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) {
      toast({
        title: 'Inicia sesión',
        description: 'Necesitas una cuenta para guardar favoritos',
      });
      navigate('/auth');
      return;
    }
    
    await toggleFavorite({ id, type, name, symbol });
    
    toast({
      title: isActive ? 'Eliminado de favoritos' : 'Agregado a favoritos',
      description: isActive ? `${name} eliminado` : `${name} guardado`,
    });
  };

  if (authLoading || loading) {
    return (
      <button
        disabled
        className={cn(
          'p-2 rounded-full bg-secondary/50 text-muted-foreground',
          className
        )}
      >
        <Loader2 className="w-5 h-5 animate-spin" />
      </button>
    );
  }

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
