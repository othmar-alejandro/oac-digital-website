import { WithContext, LocalBusiness } from 'schema-dts';

const localBusinessSchema: WithContext<LocalBusiness> = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://oac-digital.com/#business',
  name: 'OAC Digital',
  legalName: 'OAC Digital LLC',
  description: 'OAC Digital is a digital marketing agency specializing in web design, SEO, and content creation.',
  url: 'https://oac-digital.com',
  telephone: '(786) 615-1828',
  email: 'contact@oac-digital.com',
  image: 'https://oac-digital.com/logo.png',
  logo: 'https://oac-digital.com/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main St',
    addressLocality: 'Miami',
    addressRegion: 'FL',
    postalCode: '33101',
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
    },
  ],
  priceRange: '$$',
  areaServed: ['Miami', 'Fort Lauderdale', 'West Palm Beach'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '100',
  },
  foundingDate: '2024',
  founder: {
    '@type': 'Person',
    name: 'Othmar Camilo',
  },
};

export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
