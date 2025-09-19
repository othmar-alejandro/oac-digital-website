import { WithContext, Service } from 'schema-dts';

interface ServiceSchemaProps {
  pageUrl: string;
  serviceName: string;
  serviceDescription: string;
  serviceCategory: string;
}

export default function ServiceSchema({ pageUrl, serviceName, serviceDescription, serviceCategory }: ServiceSchemaProps) {
  const serviceSchema: WithContext<Service> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: serviceName,
    description: serviceDescription,
    serviceType: serviceCategory,
    url: pageUrl,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.oacdigital.biz/#business',
      name: 'OAC Digital Innovations',
      url: 'https://www.oacdigital.biz',
      telephone: '(305) 340-5282',
      email: 'contact@oac-digital.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Miami',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
      sameAs: [
        'https://www.linkedin.com/company/oac-digital-innovations',
        'https://www.facebook.com/oacdigitalinnovations'
      ]
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Miami',
        '@id': 'https://en.wikipedia.org/wiki/Miami'
      },
      {
        '@type': 'City',
        name: 'Fort Lauderdale',
        '@id': 'https://en.wikipedia.org/wiki/Fort_Lauderdale,_Florida'
      },
      {
        '@type': 'City',
        name: 'West Palm Beach',
        '@id': 'https://en.wikipedia.org/wiki/West_Palm_Beach,_Florida'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Miami-Dade County'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Broward County'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Palm Beach County'
      }
    ],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: 'Contact for pricing',
      availability: 'https://schema.org/InStock',
      validFrom: '2023-01-01',
      priceValidUntil: '2025-12-31',
      seller: {
        '@type': 'LocalBusiness',
        name: 'OAC Digital Innovations',
        url: 'https://www.oacdigital.biz'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '89',
      bestRating: '5',
      worstRating: '1'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${serviceName} - AI-Enhanced Solutions`,
      description: `Professional ${serviceName} services with AI integration and modern technology stack`
    },
    additionalType: [
      'https://schema.org/ProfessionalService',
      'https://schema.org/DigitalService'
    ],
    category: serviceCategory,
    audience: {
      '@type': 'Audience',
      audienceType: 'Business',
      geographicArea: {
        '@type': 'AdministrativeArea',
        name: 'South Florida'
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}
