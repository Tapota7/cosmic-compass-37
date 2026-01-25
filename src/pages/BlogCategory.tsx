import { useParams, Link } from 'react-router-dom';
import { Clock, BookOpen, ArrowLeft } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { Badge } from '@/components/ui/badge';
import SEOHead from '@/components/SEOHead';
import BackButton from '@/components/BackButton';
import { getCategoryById, getArticlesByCategory, blogCategories } from '@/data/blogArticles';
import NotFound from './NotFound';

const BlogCategory = () => {
  const { id } = useParams<{ id: string }>();
  const category = id ? getCategoryById(id) : undefined;

  if (!category) {
    return <NotFound />;
  }

  const articles = getArticlesByCategory(category.id).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <>
      <SEOHead
        title={`${category.name} - Blog`}
        description={category.description}
        keywords={`${category.name}, blog, artículos, astrología, numerología`}
      />

      <div className="container mx-auto px-4 py-8">
        <BackButton fallbackPath="/blog" label="Volver al Blog" />

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-4">
            <span className="text-4xl">{category.emoji}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {category.name}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>

        {/* Other Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Link to="/blog">
            <Badge variant="outline" className="hover:bg-secondary transition-colors cursor-pointer">
              Todas las categorías
            </Badge>
          </Link>
          {blogCategories
            .filter(cat => cat.id !== category.id)
            .map(cat => (
              <Link key={cat.id} to={`/blog/categoria/${cat.id}`}>
                <Badge variant="outline" className="hover:bg-secondary transition-colors cursor-pointer">
                  {cat.emoji} {cat.name}
                </Badge>
              </Link>
            ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(article => {
            const formattedDate = format(parseISO(article.publishedAt), "d 'de' MMMM, yyyy", { locale: es });

            return (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group"
              >
                <article className="glass-card overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className={`relative aspect-video bg-gradient-to-br ${category.gradient}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-50">{category.emoji}</span>
                    </div>
                    {article.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-primary">⭐ Destacado</Badge>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h2 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                      <span>{formattedDate}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readingTime} min
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* Empty State */}
        {articles.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No hay artículos en esta categoría aún.</p>
            <Link to="/blog" className="text-primary hover:underline mt-2 inline-block">
              Ver todos los artículos
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogCategory;
