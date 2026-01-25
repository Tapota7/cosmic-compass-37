import { useParams, Link } from 'react-router-dom';
import { Clock, Calendar, User, ArrowLeft, ChevronRight } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import ShareButtons from '@/components/ShareButtons';
import BackButton from '@/components/BackButton';
import { getArticleBySlug, getCategoryById, getRelatedArticles } from '@/data/blogArticles';
import NotFound from './NotFound';

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <NotFound />;
  }

  const category = getCategoryById(article.category);
  const relatedArticles = getRelatedArticles(article.slug, article.category, 3);
  const formattedDate = format(parseISO(article.publishedAt), "d 'de' MMMM, yyyy", { locale: es });

  // Convert markdown-like content to HTML paragraphs
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let listType: 'ul' | 'ol' | null = null;

    const flushList = () => {
      if (currentList.length > 0 && listType) {
        const ListTag = listType;
        elements.push(
          <ListTag key={elements.length} className={listType === 'ul' ? 'list-disc pl-6 mb-4 space-y-1' : 'list-decimal pl-6 mb-4 space-y-1'}>
            {currentList.map((item, i) => (
              <li key={i} className="text-muted-foreground">{item}</li>
            ))}
          </ListTag>
        );
        currentList = [];
        listType = null;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      if (!trimmedLine) {
        flushList();
        return;
      }

      // H2
      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl font-display font-bold mt-8 mb-4 text-foreground">
            {trimmedLine.replace('## ', '')}
          </h2>
        );
        return;
      }

      // H3
      if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl font-display font-semibold mt-6 mb-3 text-foreground">
            {trimmedLine.replace('### ', '')}
          </h3>
        );
        return;
      }

      // Unordered list
      if (trimmedLine.startsWith('- ')) {
        if (listType !== 'ul') {
          flushList();
          listType = 'ul';
        }
        currentList.push(trimmedLine.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '$1'));
        return;
      }

      // Numbered list
      if (/^\d+\.\s/.test(trimmedLine)) {
        if (listType !== 'ol') {
          flushList();
          listType = 'ol';
        }
        currentList.push(trimmedLine.replace(/^\d+\.\s/, '').replace(/\*\*(.*?)\*\*/g, '$1'));
        return;
      }

      // Regular paragraph
      flushList();
      const formattedLine = trimmedLine
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>');
      
      elements.push(
        <p 
          key={index} 
          className="text-muted-foreground mb-4 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formattedLine }}
        />
      );
    });

    flushList();
    return elements;
  };

  return (
    <>
      <SEOHead
        title={article.title}
        description={article.excerpt}
        keywords={`${category?.name}, ${article.title}, astrología, numerología`}
        type="article"
      />

      <div className="container mx-auto px-4 py-8">
        <BackButton fallbackPath="/blog" label="Volver al Blog" />

        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Link to={`/blog/categoria/${category?.id}`}>
                <Badge variant="secondary" className="hover:bg-secondary/80 transition-colors">
                  {category?.emoji} {category?.name}
                </Badge>
              </Link>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.readingTime} min de lectura
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {article.author}
              </span>
            </div>

            {/* Hero Image */}
            <div className={`aspect-video rounded-xl bg-gradient-to-br ${category?.gradient || 'from-primary/20 to-purple-900/30'} flex items-center justify-center mb-8`}>
              <span className="text-8xl opacity-50">{category?.emoji}</span>
            </div>
          </header>

          {/* Content */}
          <div className="prose-custom mb-12">
            {renderContent(article.content)}
          </div>

          {/* Share */}
          <div className="border-t border-b border-border py-6 mb-12">
            <p className="text-sm text-muted-foreground mb-3">Compartir este artículo:</p>
            <ShareButtons 
              title={article.title} 
              text={article.excerpt}
            />
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section>
              <h2 className="text-2xl font-display font-bold mb-6">Artículos relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedArticles.map(related => {
                  const relatedCategory = getCategoryById(related.category);
                  return (
                    <Link
                      key={related.slug}
                      to={`/blog/${related.slug}`}
                      className="glass-card p-4 hover:border-primary/50 transition-all group"
                    >
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {relatedCategory?.emoji} {relatedCategory?.name}
                      </Badge>
                      <h3 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                        <Clock className="w-3 h-3" />
                        {related.readingTime} min
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </article>
      </div>
    </>
  );
};

export default BlogArticle;
