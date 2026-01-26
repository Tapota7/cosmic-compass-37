import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface PlanetImage {
  id: string;
  planet_id: string;
  image_url: string | null;
  prompt: string | null;
  created_at: string;
  updated_at: string;
}

export const usePlanetImages = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: images, isLoading } = useQuery({
    queryKey: ['planet-images'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('planet_images')
        .select('*');
      
      if (error) throw error;
      return data as PlanetImage[];
    },
  });

  const getImageForPlanet = (planetId: string): string | null => {
    const image = images?.find(img => img.planet_id === planetId);
    return image?.image_url || null;
  };

  const generateImage = useMutation({
    mutationFn: async ({ planetId, planetName, planetSymbol, prompt }: { 
      planetId: string; 
      planetName: string; 
      planetSymbol: string;
      prompt?: string;
    }) => {
      const { data, error } = await supabase.functions.invoke('generate-planet-image', {
        body: { planetId, planetName, planetSymbol, prompt }
      });
      
      if (error) throw error;
      if (data.error) throw new Error(data.error);
      
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['planet-images'] });
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
    mutationFn: async ({ planetId, file }: { planetId: string; file: File }) => {
      const fileName = `${planetId}-${Date.now()}.${file.name.split('.').pop()}`;
      
      const { error: uploadError } = await supabase.storage
        .from('planet-images')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from('planet-images')
        .getPublicUrl(fileName);

      const { error: dbError } = await supabase
        .from('planet_images')
        .upsert({
          planet_id: planetId,
          image_url: urlData.publicUrl,
          prompt: null,
          updated_at: new Date().toISOString()
        }, { onConflict: 'planet_id' });

      if (dbError) throw dbError;

      return urlData.publicUrl;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['planet-images'] });
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
    mutationFn: async (planetId: string) => {
      const image = images?.find(img => img.planet_id === planetId);
      
      if (image?.image_url) {
        const url = new URL(image.image_url);
        const pathParts = url.pathname.split('/');
        const fileName = pathParts[pathParts.length - 1];
        
        await supabase.storage
          .from('planet-images')
          .remove([fileName]);
      }

      const { error } = await supabase
        .from('planet_images')
        .delete()
        .eq('planet_id', planetId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['planet-images'] });
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
    getImageForPlanet,
    generateImage,
    uploadImage,
    deleteImage,
  };
};
