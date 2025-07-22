import { WithContext, LocalBusiness } from 'schema-dts';

interface LocationSpecificSchemaProps {
  pageUrl: string;
  locationName: string;
  nearbyAreas: string[];
  serviceName: string;
  serviceCategory: string;
}

export default function LocationSpecificSchema({
  pageUrl,
  locationName,
  nearbyAreas,
  serviceName,
  serviceCategory,
}: LocationSpecificSchemaProps) {
  const locationBusinessSchema: WithContext<LocalBusiness> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${pageUrl}#location-business`,
    name: `OAC Digital - ${locationName}`,
    description: `Digital marketing services in ${locationName}, FL`,
    url: pageUrl,
    areaServed: [locationName, ...nearbyAreas],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${locationName} Services`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `${locationName} ${serviceName}`,
            serviceType: serviceCategory,
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(locationBusinessSchema) }}
    />
  );
}
