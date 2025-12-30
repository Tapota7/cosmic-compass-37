import { useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Json } from '@/integrations/supabase/types';

type CalculationType = 'numerologia' | 'compatibilidad_astrologica' | 'compatibilidad_numerologica' | 'ciclos_personales';

export const useCalculationHistory = () => {
  const { user } = useAuth();

  const saveCalculation = useCallback(async (
    type: CalculationType,
    inputData: Json,
    resultData: Json
  ) => {
    if (!user) return;

    await supabase
      .from('calculation_history')
      .insert([{
        user_id: user.id,
        calculation_type: type,
        input_data: inputData,
        result_data: resultData,
      }]);
  }, [user]);

  return { saveCalculation };
};
