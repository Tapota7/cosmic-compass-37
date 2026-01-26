import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Pencil, Trash2, Eye, EyeOff, Star, StarOff, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useBlogArticles, useDeleteBlogArticle, useUpdateBlogArticle } from '@/hooks/useBlogArticles';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import BackButton from '@/components/BackButton';
import SEOHead from '@/components/SEOHead';

const blogCategories: Record<string, { name: string; emoji: string }> = {
  astrologia: { name: 'Astrología', emoji: '✨' },
  numerologia: { name: 'Numerología', emoji: '🔢' },
  transitos: { name: 'Tránsitos', emoji: '🌙' },
  tutoriales: { name: 'Tutoriales', emoji: '📚' },
};

const BlogAdmin = () => {
  const [filterCategory, setFilterCategory] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('');
  
  const { data: articles, isLoading } = useBlogArticles(false);
  const deleteArticle = useDeleteBlogArticle();
  const updateArticle = useUpdateBlogArticle();

  const filteredArticles = articles?.filter(article => {
    if (filterCategory && article.category !== filterCategory) return false;
    if (filterStatus === 'published' && !article.published) return false;
    if (filterStatus === 'draft' && article.published) return false;
    return true;
  });

  const handleDelete = async (id: string) => {
    try {
      await deleteArticle.mutateAsync(id);
      toast.success('Artículo eliminado');
    } catch (error) {
      toast.error('Error al eliminar el artículo');
    }
  };

  const togglePublished = async (id: string, currentStatus: boolean) => {
    try {
      await updateArticle.mutateAsync({ id, published: !currentStatus });
      toast.success(currentStatus ? 'Artículo despublicado' : 'Artículo publicado');
    } catch (error) {
      toast.error('Error al actualizar el estado');
    }
  };

  const toggleFeatured = async (id: string, currentStatus: boolean) => {
    try {
      await updateArticle.mutateAsync({ id, featured: !currentStatus });
      toast.success(currentStatus ? 'Destacado removido' : 'Artículo destacado');
    } catch (error) {
      toast.error('Error al actualizar');
    }
  };

  return (
    <>
      <SEOHead 
        title="Admin - Blog" 
        description="Panel de administración del blog"
      />
      
      <div className="container mx-auto px-4 py-8">
        <BackButton fallbackPath="/dashboard" label="Volver al Dashboard" />
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold">Administrar Blog</h1>
            <p className="text-muted-foreground">Gestiona los artículos del blog</p>
          </div>
          
          <Link to="/admin/blog/nuevo">
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Nuevo Artículo
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-3 py-2 rounded-lg bg-secondary/50 border border-border text-sm"
          >
            <option value="">Todas las categorías</option>
            {Object.entries(blogCategories).map(([id, cat]) => (
              <option key={id} value={id}>{cat.emoji} {cat.name}</option>
            ))}
          </select>
          
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 rounded-lg bg-secondary/50 border border-border text-sm"
          >
            <option value="">Todos los estados</option>
            <option value="published">Publicados</option>
            <option value="draft">Borradores</option>
          </select>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : filteredArticles && filteredArticles.length > 0 ? (
          <div className="glass-card overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Título</TableHead>
                  <TableHead className="hidden md:table-cell">Categoría</TableHead>
                  <TableHead className="hidden sm:table-cell">Estado</TableHead>
                  <TableHead className="hidden lg:table-cell">Fecha</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredArticles.map((article) => {
                  const category = blogCategories[article.category];
                  return (
                    <TableRow key={article.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {article.featured && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
                          <span className="font-medium line-clamp-1">{article.title}</span>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Badge variant="secondary">
                          {category?.emoji} {category?.name || article.category}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge variant={article.published ? 'default' : 'outline'}>
                          {article.published ? 'Publicado' : 'Borrador'}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden lg:table-cell text-muted-foreground text-sm">
                        {format(new Date(article.published_at), "d MMM yyyy", { locale: es })}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleFeatured(article.id, article.featured)}
                            title={article.featured ? 'Quitar destacado' : 'Destacar'}
                          >
                            {article.featured ? (
                              <StarOff className="w-4 h-4" />
                            ) : (
                              <Star className="w-4 h-4" />
                            )}
                          </Button>
                          
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => togglePublished(article.id, article.published)}
                            title={article.published ? 'Despublicar' : 'Publicar'}
                          >
                            {article.published ? (
                              <EyeOff className="w-4 h-4" />
                            ) : (
                              <Eye className="w-4 h-4" />
                            )}
                          </Button>
                          
                          <Link to={`/admin/blog/editar/${article.id}`}>
                            <Button variant="ghost" size="icon" title="Editar">
                              <Pencil className="w-4 h-4" />
                            </Button>
                          </Link>
                          
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="ghost" size="icon" title="Eliminar">
                                <Trash2 className="w-4 h-4 text-destructive" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>¿Eliminar artículo?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Esta acción no se puede deshacer. El artículo "{article.title}" será eliminado permanentemente.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => handleDelete(article.id)}
                                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                >
                                  Eliminar
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No hay artículos</p>
            <Link to="/admin/blog/nuevo">
              <Button>Crear primer artículo</Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogAdmin;
