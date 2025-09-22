import { WithContext, Organization } from 'schema-dts';

const organizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.oacdigital.biz/#organization',
  name: 'OAC Digital Innovations',
  legalName: 'OAC Digital Innovations LLC',
  alternateName: ['OAC Digital', 'OAC Digital Miami', 'OAC Digital South Florida'],
  description: 'Premier AI-enhanced digital marketing agency in South Florida. We specialize in custom web development, SEO optimization, AI chatbot integration, and digital transformation solutions. Serving Miami-Dade, Broward, and Palm Beach counties with 30-60% faster delivery than industry standards.',
  url: 'https://www.oacdigital.biz',
  logo: 'https://www.oacdigital.biz/logo.png',
  image: 'https://www.oacdigital.biz/logo.png',
  telephone: '(305) 340-5282',
  email: 'contact@oac-digital.com',
  foundingDate: '2023',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: '5-10'
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Miami',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'Florida',
      '@id': 'https://en.wikipedia.org/wiki/Florida'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'South Florida'
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
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI-Enhanced Digital Solutions',
    description: 'Comprehensive digital marketing and development services powered by artificial intelligence',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI-Enhanced Web Design & Development',
          description: 'Custom website development using Next.js, React, and AI integration',
          category: 'Web Development'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Search Engine Optimization (SEO)',
          description: 'Local SEO, technical SEO, and AI-optimized content strategies',
          category: 'Digital Marketing'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Chatbot Integration',
          description: 'Custom AI chatbot development for customer service automation',
          category: 'AI Solutions'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Marketing Strategy',
          description: 'Comprehensive digital marketing campaigns and automation',
          category: 'Digital Marketing'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SaaS Development',
          description: 'Custom software as a service development and deployment',
          category: 'Software Development'
        }
      }
    ]
  },
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning Integration',
    'Next.js Development',
    'React Development',
    'Search Engine Optimization',
    'Local SEO',
    'Digital Marketing',
    'Chatbot Development',
    'E-commerce Solutions',
    'Progressive Web Apps',
    'Content Management Systems',
    'API Development',
    'Cloud Infrastructure',
    'Database Optimization',
    'Bilingual Website Development',
    'Spanish Language SEO',
    'Miami Business Market',
    'South Florida Digital Trends'
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Google Analytics Certified',
      credentialCategory: 'Digital Marketing'
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Google Ads Certified',
      credentialCategory: 'Digital Advertising'
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Next.js Certified Developer',
      credentialCategory: 'Web Development'
    }
  ],
  founder: {
    '@type': 'Person',
    name: 'Othmar Casilla',
    jobTitle: 'Founder & CEO',
    knowsAbout: [
      'AI Integration',
      'Web Development',
      'Digital Marketing Strategy',
      'Business Automation'
    ]
  },
  employee: [
    {
      '@type': 'Person',
      name: 'Othmar Casilla',
      jobTitle: 'Founder & CEO'
    }
  ],
  sameAs: [
    'https://www.linkedin.com/company/oac-digital-innovations',
    'https://www.facebook.com/oacdigitalinnovations',
    'https://twitter.com/oacdigital',
    'https://www.instagram.com/oacdigitalinnovations',
    'https://www.youtube.com/@oacdigitalinnovations'
  ],
  slogan: 'Intelligent business accelerators that deliver immediate value',
  award: [
    'Top Digital Agency South Florida 2024',
    'Best AI Integration Services Miami 2024'
  ],
  // Note: AggregateRating intentionally omitted to avoid duplicate ratings with LocalBusinessSchema
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Maria Rodriguez'
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      },
      reviewBody: 'OAC Digital transformed our business with their AI-enhanced website. The results were immediate and impressive.',
      datePublished: '2024-03-15'
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Carlos Martinez'
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      },
      reviewBody: 'Exceptional service and faster delivery than promised. Their bilingual approach helped us reach the Hispanic market.',
      datePublished: '2024-02-28'
    }
  ],
  memberOf: [
    {
      '@type': 'Organization',
      name: 'Miami Chamber of Commerce'
    },
    {
      '@type': 'Organization',
      name: 'South Florida Technology Alliance'
    }
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      name: 'Free AI Consultation',
      description: 'Complimentary 30-minute consultation on AI integration for businesses',
      price: '0',
      priceCurrency: 'USD'
    }
  ]
};

export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}