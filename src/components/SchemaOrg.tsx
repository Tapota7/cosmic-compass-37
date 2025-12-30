import { Helmet } from 'react-helmet-async';

interface SchemaOrgProps {
  type: 'WebSite' | 'Article' | 'FAQPage' | 'HowTo';
  name?: string;
  description?: string;
  url?: string;
  faq?: { question: string; answer: string }[];
}

export const SchemaOrg = ({ type, name, description, url, faq }: SchemaOrgProps) => {
  const baseUrl = 'https://sabiduria-cuantica.lovable.app';

  const getSchema = () => {
    switch (type) {
      case 'WebSite':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: name || 'Sabiduría Cuántica',
          description: description || 'Portal de astrología y numerología',
          url: url || baseUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${baseUrl}/buscar?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Sabiduría Cuántica',
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/favicon.ico`,
            },
          },
        };

      case 'Article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: name,
          description: description,
          url: url,
          publisher: {
            '@type': 'Organization',
            name: 'Sabiduría Cuántica',
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
          },
        };

      case 'FAQPage':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq?.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        };

      case 'HowTo':
        return {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: name,
          description: description,
          url: url,
        };

      default:
        return null;
    }
  };

  const schema = getSchema();

  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Specific schema for zodiac signs
export const ZodiacSignSchema = ({ 
  name, 
  symbol, 
  element, 
  dates,
  description 
}: { 
  name: string; 
  symbol: string; 
  element: string;
  dates: string;
  description: string;
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${name} (${symbol}) - Signo del Zodíaco`,
    description: description,
    articleSection: 'Astrología',
    keywords: `${name}, zodíaco, ${element}, astrología, horóscopo, ${dates}`,
    publisher: {
      '@type': 'Organization',
      name: 'Sabiduría Cuántica',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Specific schema for numerology numbers
export const NumerologySchema = ({ 
  number, 
  name,
  description 
}: { 
  number: number; 
  name: string;
  description: string;
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Número ${number} en Numerología - ${name}`,
    description: description,
    articleSection: 'Numerología',
    keywords: `número ${number}, numerología, significado, ${name}`,
    publisher: {
      '@type': 'Organization',
      name: 'Sabiduría Cuántica',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
