import Script from 'next/script';

interface StructuredDataProps {
  type: 'Organization' | 'LocalBusiness' | 'WebPage' | 'Service' | 'FAQPage' | 'Article' | 'BreadcrumbList';
  data: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <Script
      id={`structured-data-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}

// Organization Schema Component
export function OrganizationSchema() {
  const organizationData = {
    '@id': 'https://oac-digital.com/#organization',
    name: 'OAC Digital Innovations',
    legalName: 'OAC Digital Innovations LLC',
    url: 'https://oac-digital.com',
    logo: 'https://oac-digital.com/images/logo-oac.png',
    description: 'OAC Digital is a leading digital marketing agency specializing in AI-enhanced web design, SEO, and custom digital solutions for businesses in South Florida.',
    foundingDate: '2023',
    founders: [{
      '@type': 'Person',
      name: 'Othmar Casilla',
    }],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Miami',
      addressRegion: 'FL',
      addressCountry: 'US',
      areaServed: ['Miami-Dade County', 'Broward County', 'Palm Beach County']
    },
    contactPoint: [{
      '@type': 'ContactPoint',
      telephone: '+1-305-340-5282',
      contactType: 'customer service',
      email: 'contact@oac-digital.com',
      availableLanguage: ['English', 'Spanish']
    }],
    sameAs: [
      'https://www.linkedin.com/company/oac-digital',
      'https://www.facebook.com/oacdigital',
      'https://twitter.com/oacdigital'
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 26.1224,
        longitude: -80.1373
      },
      geoRadius: '100000' // 100km radius
    }
  };

  return <StructuredData type="Organization" data={organizationData} />;
}

// Local Business Schema Component
interface LocalBusinessSchemaProps {
  location: {
    name: string;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
    zipCode?: string;
  };
}

export function LocalBusinessSchema({ location }: LocalBusinessSchemaProps) {
  const businessData = {
    '@id': `https://oac-digital.com/#business-${location.city.toLowerCase()}`,
    name: `OAC Digital - ${location.city}`,
    description: `Professional digital marketing and web design services in ${location.city}, ${location.state}. Specializing in AI-enhanced solutions for local businesses.`,
    url: `https://oac-digital.com/en/locations/${location.city.toLowerCase().replace(' ', '-')}`,
    telephone: '+1-305-340-5282',
    email: 'contact@oac-digital.com',
    image: 'https://oac-digital.com/images/logo-oac.png',
    logo: 'https://oac-digital.com/images/logo-oac.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.zipCode,
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.latitude,
      longitude: location.longitude
    },
    openingHours: ['Mo-Fr 09:00-17:00'],
    priceRange: '$$',
    areaServed: `${location.city}, ${location.state}`,
    parentOrganization: {
      '@id': 'https://oac-digital.com/#organization'
    }
  };

  return <StructuredData type="LocalBusiness" data={businessData} />;
}

// Service Schema Component
interface ServiceSchemaProps {
  service: {
    name: string;
    description: string;
    serviceType: string;
    provider: string;
    areaServed?: string;
    offers?: {
      name: string;
      description: string;
      price?: string;
      priceCurrency?: string;
    }[];
  };
}

export function ServiceSchema({ service }: ServiceSchemaProps) {
  const serviceData = {
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    provider: {
      '@type': 'Organization',
      '@id': 'https://oac-digital.com/#organization'
    },
    areaServed: service.areaServed || 'Miami-Dade County, Broward County, Palm Beach County',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.name} Services`,
      itemListElement: service.offers?.map((offer, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: offer.name,
          description: offer.description
        },
        price: offer.price,
        priceCurrency: offer.priceCurrency || 'USD'
      })) || []
    }
  };

  return <StructuredData type="Service" data={serviceData} />;
}

// FAQ Schema Component
interface FAQSchemaProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const faqData = {
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return <StructuredData type="FAQPage" data={faqData} />;
}

// Article Schema Component
interface ArticleSchemaProps {
  article: {
    headline: string;
    description: string;
    author: string;
    datePublished: string;
    dateModified?: string;
    image?: string;
    url: string;
  };
}

export function ArticleSchema({ article }: ArticleSchemaProps) {
  const articleData = {
    headline: article.headline,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@id': 'https://oac-digital.com/#organization'
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    mainEntityOfPage: article.url,
    image: article.image || 'https://oac-digital.com/images/logo-oac.png',
    url: article.url
  };

  return <StructuredData type="Article" data={articleData} />;
}

// Breadcrumb Schema Component
interface BreadcrumbSchemaProps {
  items: {
    name: string;
    url: string;
  }[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbData = {
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  return <StructuredData type="BreadcrumbList" data={breadcrumbData} />;
}