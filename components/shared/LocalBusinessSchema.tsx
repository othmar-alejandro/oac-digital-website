import { WithContext, LocalBusiness } from 'schema-dts';

const localBusinessSchema: WithContext<LocalBusiness> = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.oacdigital.biz/#business',
  name: 'OAC Digital Innovations',
  legalName: 'OAC Digital Innovations LLC',
  alternateName: ['OAC Digital', 'OAC Digital Miami', 'OAC Digital South Florida'],
  description: 'Premier AI-enhanced digital marketing agency in South Florida specializing in custom web development, SEO optimization, AI chatbot integration, and digital transformation solutions. Serving Miami-Dade, Broward, and Palm Beach counties with 30-60% faster delivery than industry standards.',
  url: 'https://www.oacdigital.biz',
  telephone: '(305) 340-5282',
  email: 'contact@oac-digital.com',
  image: 'https://www.oacdigital.biz/logo.png',
  logo: 'https://www.oacdigital.biz/logo.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Miami',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.7617,
    longitude: -80.1918,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
      validFrom: '2023-01-01',
    },
  ],
  priceRange: '$$-$$$',
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1'
  },
  foundingDate: '2023',
  founder: {
    '@type': 'Person',
    name: 'Othmar Casilla',
    jobTitle: 'Founder & CEO'
  },
  knowsAbout: [
    'AI-Enhanced Web Development',
    'Search Engine Optimization',
    'Digital Marketing Strategy',
    'AI Chatbot Integration',
    'Local SEO Optimization',
    'SaaS Development',
    'E-commerce Solutions',
    'Content Creation & Automation',
    'Next.js Development',
    'Bilingual Website Development'
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 26.1224,
      longitude: -80.1373
    },
    geoRadius: '150000'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI-Enhanced Digital Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI-Enhanced Web Design & Development',
          description: 'Custom website development with AI integration and modern frameworks'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Search Engine Optimization (SEO)',
          description: 'Comprehensive SEO services including local SEO and AI optimization'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Chatbot Integration',
          description: 'Custom AI chatbot development and integration for customer service automation'
        }
      }
    ]
  },
  sameAs: [
    'https://www.linkedin.com/company/oac-digital-innovations',
    'https://www.facebook.com/oacdigitalinnovations',
    'https://twitter.com/oacdigital',
    'https://www.instagram.com/oacdigitalinnovations'
  ]
};

export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
