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

// Schema for Professional Services page
interface ServiceOffer {
  name: string;
  description: string;
  price?: number;
  priceCurrency?: string;
}

interface ProfessionalServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  services: ServiceOffer[];
  areaServed?: string;
  priceRange?: string;
  faq?: { question: string; answer: string }[];
}

export const ProfessionalServiceSchema = ({
  name,
  description,
  url,
  services,
  areaServed = 'Worldwide',
  priceRange,
  faq,
}: ProfessionalServiceSchemaProps) => {
  const baseUrl = 'https://sabiduria-cuantica.lovable.app';

  const professionalServiceSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/consultas#service`,
    name: name,
    description: description,
    url: url,
    image: `${baseUrl}/favicon.jpg`,
    areaServed: areaServed,
    serviceType: ['Astrology Consultation', 'Numerology Reading', 'Spiritual Guidance'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Consulta',
      itemListElement: services.map((service, index) => {
        const offer: Record<string, unknown> = {
          '@type': 'Offer',
          '@id': `${baseUrl}/consultas#offer-${index}`,
          name: service.name,
          description: service.description,
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Sabiduría Cuántica',
          },
        };
        if (service.price) {
          offer.price = service.price;
          offer.priceCurrency = service.priceCurrency || 'USD';
        }
        return offer;
      }),
    },
    provider: {
      '@type': 'Organization',
      name: 'Sabiduría Cuántica',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/favicon.jpg`,
      },
      sameAs: [
        `https://wa.me/5493537608355`,
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
  };

  // Only add priceRange if provided
  if (priceRange) {
    professionalServiceSchema.priceRange = priceRange;
  }

  const faqSchema = faq && faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } : null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </script>
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};
