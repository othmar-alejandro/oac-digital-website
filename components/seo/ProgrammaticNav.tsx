import Link from 'next/link';

interface ProgrammaticNavProps {
  locale: string;
  currentPath?: string;
}

export function ProgrammaticNav({ locale, currentPath }: ProgrammaticNavProps) {
  const locations = [
    'miami', 'miami-beach', 'coral-gables', 'boca-raton', 'fort-lauderdale',
    'hollywood', 'west-palm-beach', 'jupiter', 'delray-beach'
  ];

  const services = [
    { slug: 'web-design', name: 'Web Design' },
    { slug: 'seo', name: 'SEO' },
    { slug: 'digital-marketing', name: 'Digital Marketing' },
    { slug: 'ai-solutions', name: 'AI Solutions' }
  ];

  const districts = [
    { slug: 'brickell', name: 'Brickell' },
    { slug: 'wynwood', name: 'Wynwood' },
    { slug: 'downtown-miami', name: 'Downtown Miami' },
    { slug: 'south-beach', name: 'South Beach' },
    { slug: 'las-olas', name: 'Las Olas' }
  ];

  const industries = [
    { slug: 'healthcare', name: 'Healthcare' },
    { slug: 'real-estate', name: 'Real Estate' },
    { slug: 'legal', name: 'Legal Services' },
    { slug: 'restaurants', name: 'Restaurants' },
    { slug: 'retail', name: 'Retail' }
  ];

  const comparisons = [
    { slug: 'shopify-vs-woocommerce', name: 'Shopify vs WooCommerce' },
    { slug: 'wordpress-vs-nextjs', name: 'WordPress vs Next.js' },
    { slug: 'google-ads-vs-facebook-ads', name: 'Google Ads vs Facebook Ads' }
  ];

  const packages = [
    { slug: 'web-design-and-seo', name: 'Web Design + SEO' },
    { slug: 'seo-and-digital-marketing', name: 'SEO + Marketing' }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Our Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Popular Locations */}
          <div>
            <h3 className="text-xl font-semibold mb-4">🌴 Popular Locations</h3>
            <div className="space-y-2">
              {locations.slice(0, 6).map((location) => (
                <Link
                  key={location}
                  href={`/${locale}/services/web-design/${location}`}
                  className="block text-blue-600 hover:text-blue-800 capitalize"
                >
                  Web Design {location.replace('-', ' ')}
                </Link>
              ))}
            </div>
          </div>

          {/* Business Districts */}
          <div>
            <h3 className="text-xl font-semibold mb-4">🏢 Business Districts</h3>
            <div className="space-y-2">
              {districts.map((district) => (
                <Link
                  key={district.slug}
                  href={`/${locale}/areas/${district.slug}`}
                  className="block text-blue-600 hover:text-blue-800"
                >
                  {district.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xl font-semibold mb-4">🏭 Industries</h3>
            <div className="space-y-2">
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/${locale}/industries/${industry.slug}`}
                  className="block text-blue-600 hover:text-blue-800"
                >
                  {industry.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Tool Comparisons */}
          <div>
            <h3 className="text-xl font-semibold mb-4">🔄 Tool Comparisons</h3>
            <div className="space-y-2">
              {comparisons.map((comparison) => (
                <Link
                  key={comparison.slug}
                  href={`/${locale}/compare/${comparison.slug}`}
                  className="block text-blue-600 hover:text-blue-800"
                >
                  {comparison.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Service Packages */}
          <div>
            <h3 className="text-xl font-semibold mb-4">📦 Service Packages</h3>
            <div className="space-y-2">
              {packages.map((pkg) => (
                <Link
                  key={pkg.slug}
                  href={`/${locale}/packages/${pkg.slug}`}
                  className="block text-blue-600 hover:text-blue-800"
                >
                  {pkg.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Service Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">⚡ Quick Links</h3>
            <div className="space-y-2">
              <Link
                href={`/${locale}/services/seo/miami`}
                className="block text-blue-600 hover:text-blue-800"
              >
                Miami SEO Services
              </Link>
              <Link
                href={`/${locale}/services/web-design/fort-lauderdale`}
                className="block text-blue-600 hover:text-blue-800"
              >
                Fort Lauderdale Web Design
              </Link>
              <Link
                href={`/${locale}/campaigns/holiday-marketing-2025`}
                className="block text-blue-600 hover:text-blue-800"
              >
                Holiday Marketing 2025
              </Link>
              <Link
                href={`/${locale}/areas/brickell`}
                className="block text-blue-600 hover:text-blue-800"
              >
                Brickell Business Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Location-specific internal linking component
interface LocationLinksProps {
  currentLocation: string;
  locale: string;
  service?: string;
}

export function LocationLinks({ currentLocation, locale, service = 'web-design' }: LocationLinksProps) {
  const nearbyLocations = {
    'miami': ['miami-beach', 'coral-gables', 'brickell', 'downtown-miami'],
    'fort-lauderdale': ['hollywood', 'plantation', 'davie', 'pompano-beach'],
    'west-palm-beach': ['boca-raton', 'delray-beach', 'boynton-beach', 'wellington'],
    'boca-raton': ['delray-beach', 'west-palm-beach', 'boynton-beach'],
    'hollywood': ['fort-lauderdale', 'pembroke-pines', 'davie'],
  };

  const nearby = nearbyLocations[currentLocation as keyof typeof nearbyLocations] || [];

  if (nearby.length === 0) return null;

  return (
    <div className="mt-8 p-6 bg-blue-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Nearby Areas We Serve:</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {nearby.map((location) => (
          <Link
            key={location}
            href={`/${locale}/services/${service}/${location}`}
            className="text-blue-600 hover:text-blue-800 text-sm capitalize"
          >
            {location.replace('-', ' ')}
          </Link>
        ))}
      </div>
    </div>
  );
}

// Service cross-linking component
interface ServiceLinksProps {
  currentService: string;
  location: string;
  locale: string;
}

export function ServiceLinks({ currentService, location, locale }: ServiceLinksProps) {
  const allServices = [
    { slug: 'web-design', name: 'Web Design' },
    { slug: 'seo', name: 'SEO' },
    { slug: 'digital-marketing', name: 'Digital Marketing' },
    { slug: 'ai-solutions', name: 'AI Solutions' }
  ];

  const otherServices = allServices.filter(service => service.slug !== currentService);

  return (
    <div className="mt-8 p-6 bg-green-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Other Services in {location.replace('-', ' ')}:</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {otherServices.map((service) => (
          <Link
            key={service.slug}
            href={`/${locale}/services/${service.slug}/${location}`}
            className="text-green-600 hover:text-green-800 font-medium"
          >
            {service.name}
          </Link>
        ))}
      </div>
    </div>
  );
}