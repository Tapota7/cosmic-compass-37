import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, Search, X } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import SEOHead from '@/components/SEOHead';
import { blogArticles, blogCategories, getCategoryById } from '@/data/blogArticles';

const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    let articles = blogArticles;

    // Filter by category
    if (activeCategory) {
      articles = articles.filter(article => article.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      articles = articles.filter(article => 
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.content.toLowerCase().includes(query) ||
        getCategoryById(article.category)?.name.toLowerCase().includes(query)
      );
    }

    // Sort by date
    return [...articles].sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }, [activeCategory, searchQuery]);

  const clearSearch = () => {
    setSearchQuery('');
  };

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

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar artículos por título, contenido o categoría..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 py-6 text-base rounded-full bg-secondary/50 border-secondary focus:border-primary"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-secondary transition-colors"
                aria-label="Limpiar búsqueda"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-sm text-muted-foreground mt-2 text-center">
              {filteredArticles.length === 0 
                ? 'No se encontraron resultados' 
                : `${filteredArticles.length} artículo${filteredArticles.length !== 1 ? 's' : ''} encontrado${filteredArticles.length !== 1 ? 's' : ''}`
              }
            </p>
          )}
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
          {filteredArticles.map(article => {
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
        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground mb-2">
              {searchQuery 
                ? `No se encontraron artículos para "${searchQuery}"` 
                : 'No hay artículos en esta categoría aún.'
              }
            </p>
            {searchQuery && (
              <Button variant="ghost" onClick={clearSearch} className="mt-2">
                Limpiar búsqueda
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default BlogList;
