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
      name: 'OAC Digital',
      url: 'https://oac-digital.com',
      telephone: '(305) 340-5282',
    },
    areaServed: ['Miami', 'Fort Lauderdale', 'West Palm Beach'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: 'Contact for pricing',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '50',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}
