import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getMessages } from '@/i18n';
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';

// Service configurations
const services = {
  'web-design': {
    name: 'Web Design',
    serviceType: 'WebDesign',
    description: 'Professional web design services with AI-enhanced user experience optimization',
    offers: [
      { name: 'Custom Website Design', description: 'Tailored web design solutions for your business' },
      { name: 'Responsive Development', description: 'Mobile-first responsive web development' },
      { name: 'AI Chatbot Integration', description: 'Smart chatbots to engage your visitors' },
    ]
  },
  'seo': {
    name: 'Search Engine Optimization',
    serviceType: 'SEOService',
    description: 'Comprehensive SEO services to improve your search engine rankings and drive organic traffic',
    offers: [
      { name: 'Local SEO', description: 'Optimize your business for local search results' },
      { name: 'Technical SEO', description: 'Technical website optimization for better search performance' },
      { name: 'Content SEO', description: 'SEO-optimized content creation and strategy' },
    ]
  },
  'digital-marketing': {
    name: 'Digital Marketing',
    serviceType: 'DigitalMarketing',
    description: 'Complete digital marketing solutions to grow your online presence and generate leads',
    offers: [
      { name: 'Social Media Marketing', description: 'Strategic social media campaigns and management' },
      { name: 'Pay-Per-Click Advertising', description: 'Google Ads and social media advertising' },
      { name: 'Email Marketing', description: 'Automated email campaigns and nurture sequences' },
    ]
  },
  'ai-solutions': {
    name: 'AI Solutions',
    serviceType: 'ArtificialIntelligence',
    description: 'Custom AI solutions and automation to streamline your business operations',
    offers: [
      { name: 'AI Chatbots', description: 'Intelligent customer service automation' },
      { name: 'Process Automation', description: 'Automate repetitive business processes with AI' },
      { name: 'AI Content Generation', description: 'AI-powered content creation and optimization' },
    ]
  }
};

// Location configurations
const locations = {
  // Miami-Dade County
  'miami': {
    name: 'Miami',
    city: 'Miami',
    state: 'FL',
    latitude: 25.7617,
    longitude: -80.1918,
    zipCode: '33101',
    county: 'Miami-Dade County'
  },
  'miami-beach': {
    name: 'Miami Beach',
    city: 'Miami Beach',
    state: 'FL',
    latitude: 25.7907,
    longitude: -80.1300,
    zipCode: '33139',
    county: 'Miami-Dade County'
  },
  'coral-gables': {
    name: 'Coral Gables',
    city: 'Coral Gables',
    state: 'FL',
    latitude: 25.7213,
    longitude: -80.2683,
    zipCode: '33134',
    county: 'Miami-Dade County'
  },
  'homestead': {
    name: 'Homestead',
    city: 'Homestead',
    state: 'FL',
    latitude: 25.4687,
    longitude: -80.4776,
    zipCode: '33030',
    county: 'Miami-Dade County'
  },
  'hialeah': {
    name: 'Hialeah',
    city: 'Hialeah',
    state: 'FL',
    latitude: 25.8576,
    longitude: -80.2781,
    zipCode: '33010',
    county: 'Miami-Dade County'
  },
  'kendall': {
    name: 'Kendall',
    city: 'Kendall',
    state: 'FL',
    latitude: 25.6793,
    longitude: -80.3200,
    zipCode: '33156',
    county: 'Miami-Dade County'
  },
  'aventura': {
    name: 'Aventura',
    city: 'Aventura',
    state: 'FL',
    latitude: 25.9565,
    longitude: -80.1390,
    zipCode: '33180',
    county: 'Miami-Dade County'
  },
  'doral': {
    name: 'Doral',
    city: 'Doral',
    state: 'FL',
    latitude: 25.8195,
    longitude: -80.3553,
    zipCode: '33166',
    county: 'Miami-Dade County'
  },

  // Broward County
  'fort-lauderdale': {
    name: 'Fort Lauderdale',
    city: 'Fort Lauderdale',
    state: 'FL',
    latitude: 26.1224,
    longitude: -80.1373,
    zipCode: '33301',
    county: 'Broward County'
  },
  'hollywood': {
    name: 'Hollywood',
    city: 'Hollywood',
    state: 'FL',
    latitude: 26.0112,
    longitude: -80.1495,
    zipCode: '33019',
    county: 'Broward County'
  },
  'pembroke-pines': {
    name: 'Pembroke Pines',
    city: 'Pembroke Pines',
    state: 'FL',
    latitude: 26.0070,
    longitude: -80.2962,
    zipCode: '33028',
    county: 'Broward County'
  },
  'davie': {
    name: 'Davie',
    city: 'Davie',
    state: 'FL',
    latitude: 26.0764,
    longitude: -80.2526,
    zipCode: '33314',
    county: 'Broward County'
  },
  'plantation': {
    name: 'Plantation',
    city: 'Plantation',
    state: 'FL',
    latitude: 26.1267,
    longitude: -80.2331,
    zipCode: '33324',
    county: 'Broward County'
  },
  'sunrise': {
    name: 'Sunrise',
    city: 'Sunrise',
    state: 'FL',
    latitude: 26.1669,
    longitude: -80.2567,
    zipCode: '33322',
    county: 'Broward County'
  },
  'coral-springs': {
    name: 'Coral Springs',
    city: 'Coral Springs',
    state: 'FL',
    latitude: 26.2710,
    longitude: -80.2706,
    zipCode: '33065',
    county: 'Broward County'
  },
  'pompano-beach': {
    name: 'Pompano Beach',
    city: 'Pompano Beach',
    state: 'FL',
    latitude: 26.2379,
    longitude: -80.1248,
    zipCode: '33060',
    county: 'Broward County'
  },
  'miramar': {
    name: 'Miramar',
    city: 'Miramar',
    state: 'FL',
    latitude: 25.9873,
    longitude: -80.2322,
    zipCode: '33025',
    county: 'Broward County'
  },
  'weston': {
    name: 'Weston',
    city: 'Weston',
    state: 'FL',
    latitude: 26.1003,
    longitude: -80.3997,
    zipCode: '33326',
    county: 'Broward County'
  },

  // Palm Beach County
  'west-palm-beach': {
    name: 'West Palm Beach',
    city: 'West Palm Beach',
    state: 'FL',
    latitude: 26.7153,
    longitude: -80.0534,
    zipCode: '33401',
    county: 'Palm Beach County'
  },
  'boca-raton': {
    name: 'Boca Raton',
    city: 'Boca Raton',
    state: 'FL',
    latitude: 26.3683,
    longitude: -80.1289,
    zipCode: '33431',
    county: 'Palm Beach County'
  },
  'delray-beach': {
    name: 'Delray Beach',
    city: 'Delray Beach',
    state: 'FL',
    latitude: 26.4615,
    longitude: -80.0728,
    zipCode: '33444',
    county: 'Palm Beach County'
  },
  'boynton-beach': {
    name: 'Boynton Beach',
    city: 'Boynton Beach',
    state: 'FL',
    latitude: 26.5253,
    longitude: -80.0664,
    zipCode: '33435',
    county: 'Palm Beach County'
  },
  'wellington': {
    name: 'Wellington',
    city: 'Wellington',
    state: 'FL',
    latitude: 26.6581,
    longitude: -80.2417,
    zipCode: '33414',
    county: 'Palm Beach County'
  },
  'palm-beach-gardens': {
    name: 'Palm Beach Gardens',
    city: 'Palm Beach Gardens',
    state: 'FL',
    latitude: 26.8234,
    longitude: -80.1387,
    zipCode: '33410',
    county: 'Palm Beach County'
  },
  'jupiter': {
    name: 'Jupiter',
    city: 'Jupiter',
    state: 'FL',
    latitude: 26.9342,
    longitude: -80.0942,
    zipCode: '33458',
    county: 'Palm Beach County'
  },
  'lake-worth': {
    name: 'Lake Worth',
    city: 'Lake Worth',
    state: 'FL',
    latitude: 26.6156,
    longitude: -80.0669,
    zipCode: '33460',
    county: 'Palm Beach County'
  }
};

interface PageProps {
  params: {
    locale: string;
    service: string;
    location: string;
  };
}

export async function generateStaticParams() {
  const serviceKeys = Object.keys(services);
  const locationKeys = Object.keys(locations);
  const locales = ['en', 'es'];

  const params = [];

  for (const locale of locales) {
    for (const service of serviceKeys) {
      for (const location of locationKeys) {
        params.push({ locale, service, location });
      }
    }
  }

  return params;
}

export async function generateMetadata({ params: { locale, service, location } }: PageProps): Promise<Metadata> {
  const serviceConfig = services[service as keyof typeof services];
  const locationConfig = locations[location as keyof typeof locations];

  if (!serviceConfig || !locationConfig) {
    return { title: 'Page Not Found' };
  }

  const title = `${serviceConfig.name} Services in ${locationConfig.city}, FL | OAC Digital`;
  const description = `Professional ${serviceConfig.name.toLowerCase()} services in ${locationConfig.city}, Florida. ${serviceConfig.description} Contact OAC Digital for a free consultation.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://oac-digital.com/${locale}/services/${service}/${location}`,
      type: 'website',
      locale: locale === 'es' ? 'es_US' : 'en_US',
    },
    alternates: {
      canonical: `https://oac-digital.com/${locale}/services/${service}/${location}`,
      languages: {
        'en': `https://oac-digital.com/en/services/${service}/${location}`,
        'es': `https://oac-digital.com/es/services/${service}/${location}`,
      }
    }
  };
}

export default async function ServiceLocationPage({ params: { locale, service, location } }: PageProps) {
  setRequestLocale(locale);

  const serviceConfig = services[service as keyof typeof services];
  const locationConfig = locations[location as keyof typeof locations];

  if (!serviceConfig || !locationConfig) {
    notFound();
  }

  const messages = await getMessages(locale);

  // Breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: `https://oac-digital.com/${locale}` },
    { name: 'Services', url: `https://oac-digital.com/${locale}/services` },
    { name: serviceConfig.name, url: `https://oac-digital.com/${locale}/services/${service}` },
    { name: locationConfig.city, url: `https://oac-digital.com/${locale}/services/${service}/${location}` }
  ];

  return (
    <>
      {/* Structured Data */}
      <LocalBusinessSchema location={locationConfig} />
      <ServiceSchema
        service={{
          ...serviceConfig,
          areaServed: `${locationConfig.city}, ${locationConfig.state}`,
          provider: 'OAC Digital Innovations'
        }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {serviceConfig.name} Services in {locationConfig.city}
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            {serviceConfig.description} tailored for businesses in {locationConfig.city}, {locationConfig.state}.
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

        {/* Services Offered */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our {serviceConfig.name} Services in {locationConfig.city}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceConfig.offers.map((offer, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border">
                <h3 className="text-xl font-semibold mb-3">{offer.name}</h3>
                <p className="text-gray-600">{offer.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose OAC Digital for {serviceConfig.name} in {locationConfig.city}?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                We understand the {locationConfig.city} market and can help your business connect with local customers effectively.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">AI-Enhanced Solutions</h3>
              <p className="text-gray-600">
                Our cutting-edge AI technology ensures your {serviceConfig.name.toLowerCase()} strategy is always ahead of the competition.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Track record of successful {serviceConfig.name.toLowerCase()} campaigns for businesses throughout {locationConfig.county}.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Comprehensive Support</h3>
              <p className="text-gray-600">
                From strategy to implementation, we provide end-to-end {serviceConfig.name.toLowerCase()} services and ongoing support.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started with {serviceConfig.name} in {locationConfig.city}?
          </h2>
          <p className="text-xl mb-6">
            Contact OAC Digital today for a free consultation and discover how we can help grow your business.
          </p>
          <a
            href={`/${locale}/contact`}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block"
          >
            Get Your Free Consultation
          </a>
        </div>
      </div>
    </>
  );
}