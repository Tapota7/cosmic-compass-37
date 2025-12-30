import { useState, useEffect, useCallback } from 'react';

interface NumerologyResult {
  id: string;
  name: string;
  birthDate: string;
  lifePath: number;
  destiny: number;
  soul: number;
  personality: number;
  personalYear: number;
  calculatedAt: number;
}

const STORAGE_KEY = 'sabiduria-numerologia-historial';
const MAX_HISTORY = 10;

export const useNumerologyHistory = () => {
  const [history, setHistory] = useState<NumerologyResult[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setHistory(JSON.parse(stored));
      } catch {
        setHistory([]);
      }
    }
  }, []);

  const saveHistory = useCallback((items: NumerologyResult[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    setHistory(items);
  }, []);

  const addToHistory = useCallback((result: Omit<NumerologyResult, 'id' | 'calculatedAt'>) => {
    const newResult: NumerologyResult = {
      ...result,
      id: `${result.name}-${Date.now()}`,
      calculatedAt: Date.now(),
    };
    const updated = [newResult, ...history.filter(h => h.name !== result.name || h.birthDate !== result.birthDate)].slice(0, MAX_HISTORY);
    saveHistory(updated);
    return newResult;
  }, [history, saveHistory]);

  const removeFromHistory = useCallback((id: string) => {
    const updated = history.filter(h => h.id !== id);
    saveHistory(updated);
  }, [history, saveHistory]);

  const clearHistory = useCallback(() => {
    saveHistory([]);
  }, [saveHistory]);

  return {
    history,
    addToHistory,
    removeFromHistory,
    clearHistory,
  };
};
