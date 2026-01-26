import { useState } from 'react';
import { planets } from '@/data/planets';
import { usePlanetImages } from '@/hooks/usePlanetImages';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles, Upload, Trash2, Image as ImageIcon } from 'lucide-react';
import BackButton from '@/components/BackButton';
import SEOHead from '@/components/SEOHead';

const PlanetImagesAdmin = () => {
  const { images, isLoading, getImageForPlanet, generateImage, uploadImage, deleteImage } = usePlanetImages();
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const [customPrompt, setCustomPrompt] = useState('');
  const [uploadingPlanet, setUploadingPlanet] = useState<string | null>(null);

  const handleGenerateImage = async (planetId: string) => {
    const planet = planets.find(p => p.id === planetId);
    if (!planet) return;

    await generateImage.mutateAsync({
      planetId: planet.id,
      planetName: planet.name,
      planetSymbol: planet.symbol,
      prompt: customPrompt || undefined
    });
    setCustomPrompt('');
    setSelectedPlanet(null);
  };

  const handleFileUpload = async (planetId: string, file: File) => {
    if (!file.type.startsWith('image/')) {
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      return;
    }
    setUploadingPlanet(planetId);
    await uploadImage.mutateAsync({ planetId, file });
    setUploadingPlanet(null);
  };

  const handleDeleteImage = async (planetId: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta imagen?')) {
      await deleteImage.mutateAsync(planetId);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title="Admin - Imágenes de Planetas"
        description="Panel de administración de imágenes de planetas"
      />
      
      <div className="container mx-auto px-4 py-8">
        <BackButton fallbackPath="/admin/blog" label="Volver al admin" />
        
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold gradient-text mb-2">
            Imágenes de Planetas
          </h1>
          <p className="text-muted-foreground">
            Genera imágenes con IA o sube tus propias imágenes para cada planeta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {planets.map((planet) => {
            const imageUrl = getImageForPlanet(planet.id);
            const isGenerating = generateImage.isPending && selectedPlanet === planet.id;
            const isUploading = uploadingPlanet === planet.id;
            const isDeleting = deleteImage.isPending;

            return (
              <Card key={planet.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">{planet.symbol}</span>
                    <span>{planet.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Image Preview */}
                  <div className="aspect-square rounded-lg overflow-hidden bg-secondary/20 flex items-center justify-center">
                    {imageUrl ? (
                      <img 
                        src={imageUrl} 
                        alt={planet.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center text-muted-foreground">
                        <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">Sin imagen</p>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="space-y-3">
                    {/* Generate with AI */}
                    {selectedPlanet === planet.id ? (
                      <div className="space-y-2">
                        <Label htmlFor={`prompt-${planet.id}`}>Prompt personalizado (opcional)</Label>
                        <Textarea
                          id={`prompt-${planet.id}`}
                          value={customPrompt}
                          onChange={(e) => setCustomPrompt(e.target.value)}
                          placeholder={`${planet.name}, celestial body, mystical cosmic art...`}
                          rows={3}
                        />
                        <div className="flex gap-2">
                          <Button
                            onClick={() => handleGenerateImage(planet.id)}
                            disabled={isGenerating}
                            className="flex-1"
                          >
                            {isGenerating ? (
                              <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Generando...
                              </>
                            ) : (
                              <>
                                <Sparkles className="w-4 h-4 mr-2" />
                                Generar
                              </>
                            )}
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => {
                              setSelectedPlanet(null);
                              setCustomPrompt('');
                            }}
                          >
                            Cancelar
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => setSelectedPlanet(planet.id)}
                        disabled={isGenerating || isUploading}
                      >
                        <Sparkles className="w-4 h-4 mr-2" />
                        Generar con IA
                      </Button>
                    )}

                    {/* Upload manually */}
                    <div>
                      <Input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        id={`upload-${planet.id}`}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileUpload(planet.id, file);
                        }}
                      />
                      <Button
                        variant="secondary"
                        className="w-full"
                        onClick={() => document.getElementById(`upload-${planet.id}`)?.click()}
                        disabled={isGenerating || isUploading}
                      >
                        {isUploading ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Subiendo...
                          </>
                        ) : (
                          <>
                            <Upload className="w-4 h-4 mr-2" />
                            Subir imagen
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Delete */}
                    {imageUrl && (
                      <Button
                        variant="destructive"
                        className="w-full"
                        onClick={() => handleDeleteImage(planet.id)}
                        disabled={isDeleting || isGenerating || isUploading}
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Eliminar imagen
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PlanetImagesAdmin;
