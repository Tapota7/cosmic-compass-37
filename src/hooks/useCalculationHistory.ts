import { useCallback, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Json } from '@/integrations/supabase/types';
import { 
  validateCalculationData, 
  CalculationType as ValidatedCalculationType 
} from '@/utils/calculationValidation';

type CalculationType = 'numerologia' | 'compatibilidad_astrologica' | 'compatibilidad_numerologica' | 'ciclos_personales';

export interface CalculationHistoryItem {
  id: string;
  calculation_type: CalculationType;
  input_data: Json;
  result_data: Json;
  created_at: string;
}

export const useCalculationHistory = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const saveCalculation = useCallback(async (
    type: CalculationType,
    inputData: Json,
    resultData: Json
  ) => {
    if (!user) return;

    try {
      // Validate all data before insertion
      const validated = validateCalculationData(type, inputData, resultData);

      await supabase
        .from('calculation_history')
        .insert([{
          user_id: user.id,
          calculation_type: validated.type,
          input_data: validated.inputData as Json,
          result_data: validated.resultData as Json,
        }]);
    } catch (error) {
      console.error('Validation error when saving calculation:', error);
      // Silently fail - don't save invalid data but don't break the user experience
    }
  }, [user]);

  const getHistory = useCallback(async (type?: CalculationType): Promise<CalculationHistoryItem[]> => {
    if (!user) return [];

    setLoading(true);
    try {
      let query = supabase
        .from('calculation_history')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (type) {
        query = query.eq('calculation_type', type);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching history:', error);
        return [];
      }

      return (data as CalculationHistoryItem[]) || [];
    } finally {
      setLoading(false);
    }
  }, [user]);

  const deleteCalculation = useCallback(async (id: string): Promise<boolean> => {
    if (!user) return false;

    const { error } = await supabase
      .from('calculation_history')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);

    if (error) {
      console.error('Error deleting calculation:', error);
      return false;
    }

    return true;
  }, [user]);

  return { saveCalculation, getHistory, deleteCalculation, loading };
};
