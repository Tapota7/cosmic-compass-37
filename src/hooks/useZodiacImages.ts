import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ZodiacImage {
  id: string;
  sign_id: string;
  image_url: string | null;
  prompt: string | null;
  created_at: string;
  updated_at: string;
}

export const useZodiacImages = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: images, isLoading } = useQuery({
    queryKey: ['zodiac-images'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('zodiac_images')
        .select('*');
      
      if (error) throw error;
      return data as ZodiacImage[];
    },
  });

  const getImageForSign = (signId: string): string | null => {
    const image = images?.find(img => img.sign_id === signId);
    return image?.image_url || null;
  };

  const generateImage = useMutation({
    mutationFn: async ({ signId, signName, element, prompt }: { 
      signId: string; 
      signName: string; 
      element: string;
      prompt?: string;
    }) => {
      const { data, error } = await supabase.functions.invoke('generate-zodiac-image', {
        body: { signId, signName, element, prompt }
      });
      
      if (error) throw error;
      if (data.error) throw new Error(data.error);
      
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['zodiac-images'] });
      toast({
        title: "Imagen generada",
        description: "La imagen se ha generado y guardado correctamente.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error al generar imagen",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const uploadImage = useMutation({
    mutationFn: async ({ signId, file }: { signId: string; file: File }) => {
      const fileName = `${signId}-${Date.now()}.${file.name.split('.').pop()}`;
      
      const { error: uploadError } = await supabase.storage
        .from('zodiac-images')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from('zodiac-images')
        .getPublicUrl(fileName);

      const { error: dbError } = await supabase
        .from('zodiac_images')
        .upsert({
          sign_id: signId,
          image_url: urlData.publicUrl,
          prompt: null,
          updated_at: new Date().toISOString()
        }, { onConflict: 'sign_id' });

      if (dbError) throw dbError;

      return urlData.publicUrl;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['zodiac-images'] });
      toast({
        title: "Imagen subida",
        description: "La imagen se ha guardado correctamente.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error al subir imagen",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const deleteImage = useMutation({
    mutationFn: async (signId: string) => {
      const image = images?.find(img => img.sign_id === signId);
      
      if (image?.image_url) {
        // Extract filename from URL
        const url = new URL(image.image_url);
        const pathParts = url.pathname.split('/');
        const fileName = pathParts[pathParts.length - 1];
        
        await supabase.storage
          .from('zodiac-images')
          .remove([fileName]);
      }

      const { error } = await supabase
        .from('zodiac_images')
        .delete()
        .eq('sign_id', signId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['zodiac-images'] });
      toast({
        title: "Imagen eliminada",
        description: "La imagen se ha eliminado correctamente.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error al eliminar imagen",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return {
    images,
    isLoading,
    getImageForSign,
    generateImage,
    uploadImage,
    deleteImage,
  };
};
