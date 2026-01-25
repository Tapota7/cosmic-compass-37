import { useState } from 'react';
import { zodiacSigns } from '@/data/zodiacSigns';
import { useZodiacImages } from '@/hooks/useZodiacImages';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles, Upload, Trash2, Image as ImageIcon } from 'lucide-react';
import BackButton from '@/components/BackButton';

const ZodiacImagesAdmin = () => {
  const { images, isLoading, getImageForSign, generateImage, uploadImage, deleteImage } = useZodiacImages();
  const [selectedSign, setSelectedSign] = useState<string | null>(null);
  const [customPrompt, setCustomPrompt] = useState('');
  const [uploadingSign, setUploadingSign] = useState<string | null>(null);

  const handleGenerateImage = async (signId: string) => {
    const sign = zodiacSigns.find(s => s.id === signId);
    if (!sign) return;

    await generateImage.mutateAsync({
      signId: sign.id,
      signName: sign.name,
      element: sign.element,
      prompt: customPrompt || undefined
    });
    setCustomPrompt('');
    setSelectedSign(null);
  };

  const handleFileUpload = async (signId: string, file: File) => {
    if (!file.type.startsWith('image/')) {
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      return;
    }
    setUploadingSign(signId);
    await uploadImage.mutateAsync({ signId, file });
    setUploadingSign(null);
  };

  const handleDeleteImage = async (signId: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta imagen?')) {
      await deleteImage.mutateAsync(signId);
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
    <div className="container mx-auto px-4 py-8">
      <BackButton fallbackPath="/admin/blog" label="Volver al admin" />
      
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold gradient-text mb-2">
          Imágenes de Signos Zodiacales
        </h1>
        <p className="text-muted-foreground">
          Genera imágenes con IA o sube tus propias imágenes para cada signo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {zodiacSigns.map((sign) => {
          const imageUrl = getImageForSign(sign.id);
          const isGenerating = generateImage.isPending && selectedSign === sign.id;
          const isUploading = uploadingSign === sign.id;
          const isDeleting = deleteImage.isPending;

          return (
            <Card key={sign.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">{sign.symbol}</span>
                  <span>{sign.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Image Preview */}
                <div className="aspect-square rounded-lg overflow-hidden bg-secondary/20 flex items-center justify-center">
                  {imageUrl ? (
                    <img 
                      src={imageUrl} 
                      alt={sign.name}
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
                  {selectedSign === sign.id ? (
                    <div className="space-y-2">
                      <Label htmlFor={`prompt-${sign.id}`}>Prompt personalizado (opcional)</Label>
                      <Textarea
                        id={`prompt-${sign.id}`}
                        value={customPrompt}
                        onChange={(e) => setCustomPrompt(e.target.value)}
                        placeholder={`${sign.name}, ${sign.element} element, mystical cosmic art...`}
                        rows={3}
                      />
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleGenerateImage(sign.id)}
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
                            setSelectedSign(null);
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
                      onClick={() => setSelectedSign(sign.id)}
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
                      id={`upload-${sign.id}`}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload(sign.id, file);
                      }}
                    />
                    <Button
                      variant="secondary"
                      className="w-full"
                      onClick={() => document.getElementById(`upload-${sign.id}`)?.click()}
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
                      onClick={() => handleDeleteImage(sign.id)}
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
  );
};

export default ZodiacImagesAdmin;
