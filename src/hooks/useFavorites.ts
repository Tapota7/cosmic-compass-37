import { useState, useEffect, useCallback } from 'react';

export type FavoriteType = 'signo' | 'planeta' | 'casa' | 'aspecto' | 'numero';

interface FavoriteItem {
  id: string;
  type: FavoriteType;
  name: string;
  symbol: string;
  addedAt: number;
}

const STORAGE_KEY = 'sabiduria-favoritos';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch {
        setFavorites([]);
      }
    }
  }, []);

  const saveFavorites = useCallback((items: FavoriteItem[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    setFavorites(items);
  }, []);

  const addFavorite = useCallback((item: Omit<FavoriteItem, 'addedAt'>) => {
    const newFavorite: FavoriteItem = { ...item, addedAt: Date.now() };
    const updated = [...favorites.filter(f => !(f.id === item.id && f.type === item.type)), newFavorite];
    saveFavorites(updated);
  }, [favorites, saveFavorites]);

  const removeFavorite = useCallback((id: string, type: FavoriteType) => {
    const updated = favorites.filter(f => !(f.id === id && f.type === type));
    saveFavorites(updated);
  }, [favorites, saveFavorites]);

  const isFavorite = useCallback((id: string, type: FavoriteType) => {
    return favorites.some(f => f.id === id && f.type === type);
  }, [favorites]);

  const toggleFavorite = useCallback((item: Omit<FavoriteItem, 'addedAt'>) => {
    if (isFavorite(item.id, item.type)) {
      removeFavorite(item.id, item.type);
    } else {
      addFavorite(item);
    }
  }, [isFavorite, removeFavorite, addFavorite]);

  const getFavoritesByType = useCallback((type: FavoriteType) => {
    return favorites.filter(f => f.type === type);
  }, [favorites]);

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    getFavoritesByType,
  };
};
