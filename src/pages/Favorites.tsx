import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, Trash2, Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useFavoritesCloud, FavoriteType } from '@/hooks/useFavoritesCloud';
import SEOHead from '@/components/SEOHead';
import BackButton from '@/components/BackButton';
import { useToast } from '@/hooks/use-toast';

const typeLabels: Record<FavoriteType, { label: string; path: string; emoji: string }> = {
  signo: { label: 'Signos', path: '/signos', emoji: '♈' },
  planeta: { label: 'Planetas', path: '/planetas', emoji: '🪐' },
  casa: { label: 'Casas', path: '/casas', emoji: '🏠' },
  aspecto: { label: 'Aspectos', path: '/aspectos', emoji: '⚝' },
  numero: { label: 'Números', path: '/numeros', emoji: '🔢' },
};

const Favorites = () => {
  const { user, loading: authLoading } = useAuth();
  const { favorites, loading, removeFavorite } = useFavoritesCloud();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  const handleRemove = async (itemId: string, itemType: FavoriteType, itemName: string) => {
    await removeFavorite(itemId, itemType);
    toast({
      title: 'Eliminado de favoritos',
      description: `${itemName} ha sido eliminado`,
    });
  };

  // Group favorites by type
  const groupedFavorites = favorites.reduce((acc, fav) => {
    const type = fav.item_type as FavoriteType;
    if (!acc[type]) acc[type] = [];
    acc[type].push(fav);
    return acc;
  }, {} as Record<FavoriteType, typeof favorites>);

  const hasAnyFavorites = favorites.length > 0;

  return (
    <>
      <SEOHead
        title="Mis Favoritos"
        description="Tu colección personal de signos, planetas, casas, aspectos y números guardados."
        keywords="favoritos, astrología personal, numerología personal"
      />
      
      <div className="container mx-auto px-4 max-w-4xl">
        <BackButton />

        <div className="text-center mb-12">
          <div className="text-6xl mb-4 float-animation">⭐</div>
          <h1 className="font-display text-4xl font-bold gradient-text mb-4">
            Mis Favoritos
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tu colección personal del cosmos
          </p>
        </div>

        {!hasAnyFavorites ? (
          <div className="glass-card text-center py-12">
            <Star className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <h2 className="font-display text-xl mb-2">Aún no tienes favoritos</h2>
            <p className="text-muted-foreground mb-6">
              Explora el cosmos y guarda tus signos, planetas y números preferidos
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/signos" className="px-4 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors">
                Explorar Signos
              </Link>
              <Link to="/planetas" className="px-4 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors">
                Explorar Planetas
              </Link>
              <Link to="/numeros" className="px-4 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors">
                Explorar Números
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {(Object.keys(typeLabels) as FavoriteType[]).map((type) => {
              const items = groupedFavorites[type];
              if (!items || items.length === 0) return null;

              const typeInfo = typeLabels[type];

              return (
                <div key={type} className="glass-card">
                  <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                    <span>{typeInfo.emoji}</span>
                    {typeInfo.label}
                    <span className="text-sm font-normal text-muted-foreground">
                      ({items.length})
                    </span>
                  </h2>
                  
                  <div className="grid gap-3">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                      >
                        <Link
                          to={`${typeInfo.path}/${item.item_id}`}
                          className="flex items-center gap-3 flex-1"
                        >
                          <span className="text-2xl">{item.item_symbol}</span>
                          <span className="font-medium">{item.item_name}</span>
                        </Link>
                        
                        <button
                          onClick={() => handleRemove(item.item_id, item.item_type as FavoriteType, item.item_name)}
                          className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                          title="Eliminar de favoritos"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Favorites;
