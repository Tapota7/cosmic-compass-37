import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export type FavoriteType = 'signo' | 'planeta' | 'casa' | 'aspecto' | 'numero' | 'grabovoi' | 'reiki';

interface FavoriteItem {
  id: string;
  item_id: string;
  item_type: FavoriteType;
  item_name: string;
  item_symbol: string;
  created_at: string;
}

export const useFavoritesCloud = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = useCallback(async () => {
    if (!user) {
      setFavorites([]);
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from('favorites')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setFavorites(data as FavoriteItem[]);
    }
    setLoading(false);
  }, [user]);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  const addFavorite = useCallback(async (item: { id: string; type: FavoriteType; name: string; symbol: string }) => {
    if (!user) return;

    const { error } = await supabase
      .from('favorites')
      .insert({
        user_id: user.id,
        item_id: item.id,
        item_type: item.type,
        item_name: item.name,
        item_symbol: item.symbol,
      });

    if (!error) {
      await fetchFavorites();
    }
  }, [user, fetchFavorites]);

  const removeFavorite = useCallback(async (itemId: string, itemType: FavoriteType) => {
    if (!user) return;

    const { error } = await supabase
      .from('favorites')
      .delete()
      .eq('user_id', user.id)
      .eq('item_id', itemId)
      .eq('item_type', itemType);

    if (!error) {
      await fetchFavorites();
    }
  }, [user, fetchFavorites]);

  const isFavorite = useCallback((itemId: string, itemType: FavoriteType) => {
    return favorites.some(f => f.item_id === itemId && f.item_type === itemType);
  }, [favorites]);

  const toggleFavorite = useCallback(async (item: { id: string; type: FavoriteType; name: string; symbol: string }) => {
    if (isFavorite(item.id, item.type)) {
      await removeFavorite(item.id, item.type);
    } else {
      await addFavorite(item);
    }
  }, [isFavorite, removeFavorite, addFavorite]);

  const getFavoritesByType = useCallback((type: FavoriteType) => {
    return favorites.filter(f => f.item_type === type);
  }, [favorites]);

  return {
    favorites,
    loading,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    getFavoritesByType,
    refetch: fetchFavorites,
  };
};
