import { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Eye, Save, Upload, X, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCreateBlogArticle, useUpdateBlogArticle, uploadBlogImage, deleteBlogImage } from '@/hooks/useBlogArticles';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import BackButton from '@/components/BackButton';
import SEOHead from '@/components/SEOHead';

const blogCategories = [
  { id: 'astrologia', name: 'Astrología', emoji: '✨' },
  { id: 'numerologia', name: 'Numerología', emoji: '🔢' },
  { id: 'transitos', name: 'Tránsitos', emoji: '🌙' },
  { id: 'tutoriales', name: 'Tutoriales', emoji: '📚' },
  { id: 'reiki', name: 'Reiki', emoji: '🙏' },
];

const articleSchema = z.object({
  title: z.string().min(5, 'El título debe tener al menos 5 caracteres').max(200),
  slug: z.string().min(3, 'El slug debe tener al menos 3 caracteres').max(200)
    .regex(/^[a-z0-9-]+$/, 'Solo minúsculas, números y guiones'),
  excerpt: z.string().min(20, 'El extracto debe tener al menos 20 caracteres').max(500),
  content: z.string().min(100, 'El contenido debe tener al menos 100 caracteres'),
  category: z.string().min(1, 'Selecciona una categoría'),
  author: z.string().min(2, 'Ingresa el nombre del autor').max(100),
  reading_time: z.number().min(1).max(60),
  featured: z.boolean(),
  published: z.boolean(),
});

type ArticleFormValues = z.infer<typeof articleSchema>;

const BlogEditor = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(!!id);
  const [previewContent, setPreviewContent] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const createArticle = useCreateBlogArticle();
  const updateArticle = useUpdateBlogArticle();

  const form = useForm<ArticleFormValues>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      category: '',
      author: 'Sabiduría Cuántica',
      reading_time: 5,
      featured: false,
      published: false,
    },
  });

  // Load article if editing
  useEffect(() => {
    if (id) {
      const loadArticle = async () => {
        const { data, error } = await supabase
          .from('blog_articles')
          .select('*')
          .eq('id', id)
          .single();
        
        if (error) {
          toast.error('Error al cargar el artículo');
          navigate('/admin/blog');
          return;
        }
        
        if (data) {
          form.reset({
            title: data.title,
            slug: data.slug,
            excerpt: data.excerpt,
            content: data.content,
            category: data.category,
            author: data.author,
            reading_time: data.reading_time,
            featured: data.featured ?? false,
            published: data.published ?? false,
          });
          setPreviewContent(data.content);
          setImageUrl(data.image_url);
        }
        setIsLoading(false);
      };
      loadArticle();
    }
  }, [id, form, navigate]);

  // Auto-generate slug from title
  const watchTitle = form.watch('title');
  useEffect(() => {
    if (!id && watchTitle) {
      const slug = watchTitle
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .slice(0, 100);
      form.setValue('slug', slug);
    }
  }, [watchTitle, id, form]);

  // Update preview
  const watchContent = form.watch('content');
  useEffect(() => {
    setPreviewContent(watchContent);
  }, [watchContent]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('Solo se permiten imágenes');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('La imagen no puede superar 5MB');
      return;
    }

    setIsUploadingImage(true);
    try {
      const url = await uploadBlogImage(file);
      setImageUrl(url);
      toast.success('Imagen subida correctamente');
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Error al subir la imagen');
    } finally {
      setIsUploadingImage(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemoveImage = async () => {
    if (imageUrl) {
      try {
        await deleteBlogImage(imageUrl);
        setImageUrl(null);
        toast.success('Imagen eliminada');
      } catch (error) {
        console.error('Error deleting image:', error);
        toast.error('Error al eliminar la imagen');
      }
    }
  };

  const onSubmit = async (values: ArticleFormValues) => {
    try {
      if (id) {
        await updateArticle.mutateAsync({ id, ...values, image_url: imageUrl });
        toast.success('Artículo actualizado');
      } else {
        const newArticle = {
          slug: values.slug,
          title: values.title,
          excerpt: values.excerpt,
          content: values.content,
          category: values.category,
          author: values.author,
          reading_time: values.reading_time,
          featured: values.featured,
          published: values.published,
          created_by: user?.id || null,
          published_at: new Date().toISOString(),
          image_url: imageUrl,
        };
        await createArticle.mutateAsync(newArticle);
        toast.success('Artículo creado');
      }
      navigate('/admin/blog');
    } catch (error: any) {
      if (error.code === '23505') {
        toast.error('Ya existe un artículo con ese slug');
      } else {
        toast.error('Error al guardar el artículo');
      }
    }
  };

  // Simple markdown preview renderer
  const renderPreview = (content: string) => {
    return content
      .split('\n')
      .map((line, i) => {
        if (line.startsWith('## ')) {
          return <h2 key={i} className="text-xl font-bold mt-6 mb-3">{line.replace('## ', '')}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={i} className="text-lg font-semibold mt-4 mb-2">{line.replace('### ', '')}</h3>;
        }
        if (line.startsWith('- ')) {
          return <li key={i} className="ml-6 text-muted-foreground">{line.replace('- ', '')}</li>;
        }
        if (line.trim() === '') return <br key={i} />;
        return <p key={i} className="mb-3 text-muted-foreground">{line}</p>;
      });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title={id ? 'Editar Artículo' : 'Nuevo Artículo'} 
        description="Editor de artículos del blog"
      />
      
      <div className="container mx-auto px-4 py-8">
        <BackButton fallbackPath="/admin/blog" label="Volver al listado" />
        
        <h1 className="text-3xl font-display font-bold mb-8">
          {id ? 'Editar Artículo' : 'Nuevo Artículo'}
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Título</FormLabel>
                      <FormControl>
                        <Input placeholder="Título del artículo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Slug (URL)</FormLabel>
                      <FormControl>
                        <Input placeholder="url-del-articulo" {...field} />
                      </FormControl>
                      <FormDescription>
                        /blog/{field.value || 'url-del-articulo'}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="excerpt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Extracto</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Breve descripción del artículo (aparece en la lista)" 
                          rows={3}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Tabs defaultValue="editor">
                  <TabsList>
                    <TabsTrigger value="editor">Editor</TabsTrigger>
                    <TabsTrigger value="preview" className="gap-2">
                      <Eye className="w-4 h-4" />
                      Vista previa
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="editor">
                    <FormField
                      control={form.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contenido</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Escribe el contenido usando Markdown:&#10;## Para títulos&#10;### Para subtítulos&#10;- Para listas&#10;**texto** para negrita"
                              rows={20}
                              className="font-mono text-sm"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TabsContent>
                  
                  <TabsContent value="preview">
                    <div className="glass-card p-6 min-h-[400px] prose-custom">
                      {previewContent ? renderPreview(previewContent) : (
                        <p className="text-muted-foreground italic">El contenido aparecerá aquí...</p>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Featured Image */}
                <div className="glass-card p-6 space-y-4">
                  <h3 className="font-semibold flex items-center gap-2">
                    <ImageIcon className="w-4 h-4" />
                    Imagen destacada
                  </h3>
                  
                  {imageUrl ? (
                    <div className="relative">
                      <img 
                        src={imageUrl} 
                        alt="Imagen destacada" 
                        className="w-full aspect-video object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="absolute top-2 right-2 p-1.5 bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90 transition-colors"
                        aria-label="Eliminar imagen"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div 
                      className="border-2 border-dashed border-border rounded-lg aspect-video flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-primary/50 transition-colors"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      {isUploadingImage ? (
                        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
                      ) : (
                        <>
                          <Upload className="w-8 h-8 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground text-center px-4">
                            Haz clic para subir una imagen
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Máximo 5MB
                          </p>
                        </>
                      )}
                    </div>
                  )}
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  
                  {!imageUrl && (
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full gap-2"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={isUploadingImage}
                    >
                      {isUploadingImage ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Upload className="w-4 h-4" />
                      )}
                      Subir imagen
                    </Button>
                  )}
                </div>
                <div className="glass-card p-6 space-y-6">
                  <h3 className="font-semibold">Configuración</h3>
                  
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Categoría</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona categoría" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {blogCategories.map(cat => (
                              <SelectItem key={cat.id} value={cat.id}>
                                {cat.emoji} {cat.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="author"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Autor</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="reading_time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tiempo de lectura (min)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min={1} 
                            max={60}
                            {...field}
                            onChange={e => field.onChange(parseInt(e.target.value) || 5)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-4 pt-4 border-t border-border">
                    <FormField
                      control={form.control}
                      name="featured"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between">
                          <div>
                            <FormLabel>Destacado</FormLabel>
                            <FormDescription>Mostrar en sección destacada</FormDescription>
                          </div>
                          <FormControl>
                            <Switch checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="published"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between">
                          <div>
                            <FormLabel>Publicado</FormLabel>
                            <FormDescription>Visible para todos</FormDescription>
                          </div>
                          <FormControl>
                            <Switch checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    type="submit" 
                    className="flex-1 gap-2"
                    disabled={createArticle.isPending || updateArticle.isPending}
                  >
                    {(createArticle.isPending || updateArticle.isPending) ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Save className="w-4 h-4" />
                    )}
                    {id ? 'Guardar cambios' : 'Crear artículo'}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default BlogEditor;
