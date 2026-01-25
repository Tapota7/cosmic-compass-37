import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SEOHead from '@/components/SEOHead';
import { blogArticles, blogCategories, getCategoryById } from '@/data/blogArticles';

const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredArticles = activeCategory
    ? blogArticles.filter(article => article.category === activeCategory)
    : blogArticles;

  const sortedArticles = [...filteredArticles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <>
      <SEOHead
        title="Blog - Exploración Cósmica"
        description="Artículos, guías y reflexiones sobre astrología, numerología y autoconocimiento. Aprende a leer tu carta natal, calcular tu año personal y más."
        keywords="blog astrología, artículos numerología, guías carta natal, tránsitos planetarios, autoconocimiento espiritual"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Exploración Cósmica
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Artículos, guías y reflexiones sobre astrología, numerología y el camino del autoconocimiento
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Button
            variant={activeCategory === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory(null)}
            className="rounded-full"
          >
            Todos
          </Button>
          {blogCategories.map(category => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className="rounded-full"
            >
              {category.emoji} {category.name}
            </Button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedArticles.map(article => {
            const category = getCategoryById(article.category);
            const formattedDate = format(parseISO(article.publishedAt), "d 'de' MMMM, yyyy", { locale: es });

            return (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group"
              >
                <article className="glass-card overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className={`relative aspect-video bg-gradient-to-br ${category?.gradient || 'from-primary/20 to-purple-900/30'}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-50">{category?.emoji}</span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        {category?.emoji} {category?.name}
                      </Badge>
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
        {sortedArticles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No hay artículos en esta categoría aún.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogList;
