import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getMessages } from '@/i18n';
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';

// Business district configurations
const districts = {
  // Miami Business Districts
  'downtown-miami': {
    name: 'Downtown Miami',
    city: 'Miami',
    state: 'FL',
    latitude: 25.7743,
    longitude: -80.1937,
    county: 'Miami-Dade County',
    description: 'The heart of Miami\'s business district, home to major corporations, financial institutions, and tech startups.',
    businessTypes: ['Financial Services', 'Law Firms', 'Tech Startups', 'Real Estate'],
    landmarks: ['Bayfront Park', 'American Airlines Arena', 'Miami-Dade Cultural Center'],
    targetAudience: 'Corporate professionals, financial institutions, and tech companies'
  },
  'brickell': {
    name: 'Brickell',
    city: 'Miami',
    state: 'FL',
    latitude: 25.7663,
    longitude: -80.1917,
    county: 'Miami-Dade County',
    description: 'Miami\'s financial district, known as the "Manhattan of the South" with luxury condos and international banking.',
    businessTypes: ['International Banking', 'Investment Firms', 'Luxury Services', 'High-end Restaurants'],
    landmarks: ['Brickell City Centre', 'Four Seasons Hotel', 'Icon Brickell'],
    targetAudience: 'International businesses, luxury service providers, and financial institutions'
  },
  'wynwood': {
    name: 'Wynwood',
    city: 'Miami',
    state: 'FL',
    latitude: 25.8011,
    longitude: -80.1994,
    county: 'Miami-Dade County',
    description: 'Miami\'s arts and creative district, featuring galleries, studios, and innovative businesses.',
    businessTypes: ['Art Galleries', 'Creative Agencies', 'Breweries', 'Fashion'],
    landmarks: ['Wynwood Walls', 'Wynwood Marketplace', 'Rubell Museum'],
    targetAudience: 'Creative businesses, artists, and innovative startups'
  },
  'design-district': {
    name: 'Design District',
    city: 'Miami',
    state: 'FL',
    latitude: 25.8014,
    longitude: -80.1953,
    county: 'Miami-Dade County',
    description: 'Luxury shopping and design hub featuring high-end retail, galleries, and design showrooms.',
    businessTypes: ['Luxury Retail', 'Interior Design', 'Architecture', 'Fashion'],
    landmarks: ['Miami Design District', 'Institute of Contemporary Art', 'Jungle Plaza'],
    targetAudience: 'Luxury brands, design professionals, and high-end retailers'
  },
  'south-beach': {
    name: 'South Beach',
    city: 'Miami Beach',
    state: 'FL',
    latitude: 25.7814,
    longitude: -80.1300,
    county: 'Miami-Dade County',
    description: 'Iconic entertainment and hospitality district known for Art Deco architecture and vibrant nightlife.',
    businessTypes: ['Hotels', 'Restaurants', 'Entertainment', 'Tourism'],
    landmarks: ['Ocean Drive', 'Lincoln Road', 'Art Deco Historic District'],
    targetAudience: 'Hospitality businesses, entertainment venues, and tourism companies'
  },

  // Fort Lauderdale Business Districts
  'downtown-fort-lauderdale': {
    name: 'Downtown Fort Lauderdale',
    city: 'Fort Lauderdale',
    state: 'FL',
    latitude: 26.1224,
    longitude: -80.1373,
    county: 'Broward County',
    description: 'Fort Lauderdale\'s central business district with government offices, corporate headquarters, and professional services.',
    businessTypes: ['Government', 'Professional Services', 'Corporate Offices', 'Legal Services'],
    landmarks: ['Broward County Courthouse', 'Riverwalk', 'Las Olas Boulevard'],
    targetAudience: 'Professional service firms, government contractors, and corporate entities'
  },
  'las-olas': {
    name: 'Las Olas',
    city: 'Fort Lauderdale',
    state: 'FL',
    latitude: 26.1201,
    longitude: -80.1434,
    county: 'Broward County',
    description: 'Upscale shopping and dining district with boutiques, galleries, and waterfront dining.',
    businessTypes: ['Boutique Retail', 'Fine Dining', 'Art Galleries', 'Luxury Services'],
    landmarks: ['Las Olas Boulevard', 'Riverwalk Fort Lauderdale', 'Museum of Art'],
    targetAudience: 'Upscale retailers, fine dining establishments, and luxury service providers'
  },
  'port-everglades': {
    name: 'Port Everglades',
    city: 'Fort Lauderdale',
    state: 'FL',
    latitude: 26.0890,
    longitude: -80.1187,
    county: 'Broward County',
    description: 'Major cruise and cargo port supporting maritime, logistics, and tourism industries.',
    businessTypes: ['Shipping', 'Logistics', 'Cruise Lines', 'Maritime Services'],
    landmarks: ['Port Everglades', 'Fort Lauderdale Airport', 'Dania Beach'],
    targetAudience: 'Maritime companies, logistics providers, and cruise industry businesses'
  },

  // West Palm Beach Business Districts
  'downtown-west-palm-beach': {
    name: 'Downtown West Palm Beach',
    city: 'West Palm Beach',
    state: 'FL',
    latitude: 26.7153,
    longitude: -80.0534,
    county: 'Palm Beach County',
    description: 'Revitalized downtown area with modern offices, cultural venues, and waterfront amenities.',
    businessTypes: ['Professional Services', 'Government', 'Cultural Organizations', 'Tech Companies'],
    landmarks: ['CityPlace', 'Kravis Center', 'West Palm Beach Waterfront'],
    targetAudience: 'Professional firms, tech companies, and cultural organizations'
  },
  'clematis-street': {
    name: 'Clematis Street',
    city: 'West Palm Beach',
    state: 'FL',
    latitude: 26.7145,
    longitude: -80.0558,
    county: 'Palm Beach County',
    description: 'Entertainment and nightlife district with restaurants, bars, and event venues.',
    businessTypes: ['Restaurants', 'Entertainment', 'Event Venues', 'Retail'],
    landmarks: ['Clematis Street', 'West Palm Beach Green Market', 'Flagler Drive'],
    targetAudience: 'Entertainment venues, restaurants, and event planning businesses'
  },
  'palm-beach-gardens-business-park': {
    name: 'Palm Beach Gardens Business Park',
    city: 'Palm Beach Gardens',
    state: 'FL',
    latitude: 26.8234,
    longitude: -80.1387,
    county: 'Palm Beach County',
    description: 'Modern business park hosting corporate offices, medical facilities, and professional services.',
    businessTypes: ['Corporate Offices', 'Medical Practices', 'Professional Services', 'Technology'],
    landmarks: ['Gardens Mall', 'PGA National', 'Legacy Place'],
    targetAudience: 'Corporate headquarters, medical practices, and professional service firms'
  }
};

interface PageProps {
  params: {
    locale: string;
    district: string;
  };
}

export async function generateStaticParams() {
  const districtKeys = Object.keys(districts);
  const locales = ['en', 'es'];

  const params = [];

  for (const locale of locales) {
    for (const district of districtKeys) {
      params.push({ locale, district });
    }
  }

  return params;
}

export async function generateMetadata({ params: { locale, district } }: PageProps): Promise<Metadata> {
  const districtConfig = districts[district as keyof typeof districts];

  if (!districtConfig) {
    return { title: 'Area Not Found' };
  }

  const title = `Digital Marketing Services in ${districtConfig.name} | OAC Digital`;
  const description = `Professional digital marketing and web design services for businesses in ${districtConfig.name}, ${districtConfig.city}. ${districtConfig.description}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://oac-digital.com/${locale}/areas/${district}`,
      type: 'website',
      locale: locale === 'es' ? 'es_US' : 'en_US',
    },
    alternates: {
      canonical: `https://oac-digital.com/${locale}/areas/${district}`,
      languages: {
        'en': `https://oac-digital.com/en/areas/${district}`,
        'es': `https://oac-digital.com/es/areas/${district}`,
      }
    }
  };
}

export default async function DistrictPage({ params: { locale, district } }: PageProps) {
  setRequestLocale(locale);

  const districtConfig = districts[district as keyof typeof districts];

  if (!districtConfig) {
    notFound();
  }

  const messages = await getMessages(locale);

  // Breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: `https://oac-digital.com/${locale}` },
    { name: 'Service Areas', url: `https://oac-digital.com/${locale}/areas` },
    { name: districtConfig.name, url: `https://oac-digital.com/${locale}/areas/${district}` }
  ];

  return (
    <>
      {/* Structured Data */}
      <LocalBusinessSchema
        location={{
          name: districtConfig.name,
          city: districtConfig.city,
          state: districtConfig.state,
          latitude: districtConfig.latitude,
          longitude: districtConfig.longitude
        }}
      />
      <ServiceSchema
        service={{
          name: `Digital Marketing Services in ${districtConfig.name}`,
          description: `Comprehensive digital marketing solutions for businesses in ${districtConfig.name}`,
          serviceType: 'DigitalMarketingService',
          provider: 'OAC Digital Innovations',
          areaServed: `${districtConfig.name}, ${districtConfig.city}, ${districtConfig.state}`
        }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Digital Marketing Services in {districtConfig.name}
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-4xl mx-auto">
            {districtConfig.description} OAC Digital provides specialized digital marketing solutions
            for businesses in this vibrant {districtConfig.city} district.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${locale}/contact`}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Get Free Consultation
            </a>
            <a
              href={`tel:+13053405282`}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Call (305) 340-5282
            </a>
          </div>
        </div>

        {/* District Overview */}
        <div className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">
            About {districtConfig.name}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Business Types</h3>
              <ul className="space-y-2">
                {districtConfig.businessTypes.map((type, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {type}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Notable Landmarks</h3>
              <ul className="space-y-2">
                {districtConfig.landmarks.map((landmark, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">Target Audience</h3>
            <p className="text-gray-600">{districtConfig.targetAudience}</p>
          </div>
        </div>

        {/* Services for This District */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Services for {districtConfig.name} Businesses
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <h3 className="text-lg font-semibold mb-3">Web Design</h3>
              <p className="text-gray-600 text-sm">
                Professional websites that reflect the sophistication of {districtConfig.name} businesses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <h3 className="text-lg font-semibold mb-3">Local SEO</h3>
              <p className="text-gray-600 text-sm">
                Optimize your visibility for "{districtConfig.name}" and local area searches.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <h3 className="text-lg font-semibold mb-3">Digital Marketing</h3>
              <p className="text-gray-600 text-sm">
                Targeted campaigns reaching {districtConfig.name} professionals and visitors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <h3 className="text-lg font-semibold mb-3">AI Solutions</h3>
              <p className="text-gray-600 text-sm">
                Cutting-edge AI tools to give your {districtConfig.name} business a competitive edge.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us for This Area */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose OAC Digital for {districtConfig.name}?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Local Market Knowledge</h3>
              <p className="text-gray-600">
                Deep understanding of {districtConfig.name}'s business ecosystem and target demographics.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Rapid Deployment</h3>
              <p className="text-gray-600">
                Fast-track your digital presence with our AI-enhanced development process.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Targeted Approach</h3>
              <p className="text-gray-600">
                Customized strategies that resonate with {districtConfig.name} business professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links to Related Services */}
        <div className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            Popular Services in {districtConfig.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href={`/${locale}/services/web-design/${district}`}
              className="bg-white p-4 rounded-lg text-center hover:shadow-lg transition-all"
            >
              <h3 className="font-semibold">Web Design</h3>
              <p className="text-sm text-gray-600">in {districtConfig.name}</p>
            </a>
            <a
              href={`/${locale}/services/seo/${district}`}
              className="bg-white p-4 rounded-lg text-center hover:shadow-lg transition-all"
            >
              <h3 className="font-semibold">SEO Services</h3>
              <p className="text-sm text-gray-600">in {districtConfig.name}</p>
            </a>
            <a
              href={`/${locale}/services/digital-marketing/${district}`}
              className="bg-white p-4 rounded-lg text-center hover:shadow-lg transition-all"
            >
              <h3 className="font-semibold">Digital Marketing</h3>
              <p className="text-sm text-gray-600">in {districtConfig.name}</p>
            </a>
            <a
              href={`/${locale}/services/ai-solutions/${district}`}
              className="bg-white p-4 rounded-lg text-center hover:shadow-lg transition-all"
            >
              <h3 className="font-semibold">AI Solutions</h3>
              <p className="text-sm text-gray-600">in {districtConfig.name}</p>
            </a>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Elevate Your {districtConfig.name} Business?
          </h2>
          <p className="text-xl mb-6">
            Let's discuss how OAC Digital can help your business thrive in {districtConfig.name}.
          </p>
          <a
            href={`/${locale}/contact`}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </div>
    </>
  );
}