import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getMessages } from '@/i18n';
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from '@/components/seo/StructuredData';

// Industry configurations
const industries = {
  'healthcare': {
    name: 'Healthcare',
    title: 'Healthcare Digital Marketing',
    description: 'Specialized digital marketing and web design services for healthcare providers, medical practices, and health organizations.',
    challenges: [
      'HIPAA compliance requirements',
      'Building patient trust online',
      'Complex medical terminology',
      'Regulatory compliance'
    ],
    solutions: [
      { name: 'HIPAA-Compliant Websites', description: 'Secure, compliant web solutions for healthcare providers' },
      { name: 'Medical SEO', description: 'Healthcare-focused search engine optimization' },
      { name: 'Patient Portal Integration', description: 'Seamless patient management systems' },
      { name: 'Telemedicine Solutions', description: 'AI-enhanced virtual consultation platforms' }
    ],
    faqs: [
      {
        question: 'Is our healthcare website HIPAA compliant?',
        answer: 'Yes, all our healthcare websites are built with HIPAA compliance in mind, including secure forms, encrypted data transmission, and proper privacy policies.'
      },
      {
        question: 'How do you handle medical content SEO?',
        answer: 'We follow Google E-A-T guidelines and work with medical professionals to ensure accurate, authoritative content that ranks well while maintaining medical accuracy.'
      }
    ]
  },
  'real-estate': {
    name: 'Real Estate',
    title: 'Real Estate Digital Marketing',
    description: 'Comprehensive digital marketing solutions for real estate agents, brokers, and property management companies.',
    challenges: [
      'High competition in local markets',
      'Lead generation and nurturing',
      'Property showcase optimization',
      'Market trend communication'
    ],
    solutions: [
      { name: 'IDX Website Integration', description: 'MLS-connected property search websites' },
      { name: 'Real Estate SEO', description: 'Local search optimization for property-related keywords' },
      { name: 'Virtual Tour Integration', description: '360° property tours and AI-enhanced viewing experiences' },
      { name: 'Lead Management Systems', description: 'CRM integration and automated lead nurturing' }
    ],
    faqs: [
      {
        question: 'Can you integrate MLS listings into our website?',
        answer: 'Yes, we provide IDX integration that allows your website to display live MLS listings with advanced search and filtering capabilities.'
      },
      {
        question: 'How do you generate leads for real estate websites?',
        answer: 'We use a combination of local SEO, targeted advertising, optimized landing pages, and AI chatbots to capture and qualify leads effectively.'
      }
    ]
  },
  'legal': {
    name: 'Legal Services',
    title: 'Legal Practice Digital Marketing',
    description: 'Professional digital marketing and web design services for law firms and legal professionals.',
    challenges: [
      'Legal advertising compliance',
      'Building credibility and trust',
      'Complex legal terminology',
      'Client confidentiality requirements'
    ],
    solutions: [
      { name: 'Attorney Website Design', description: 'Professional, trustworthy websites for legal practices' },
      { name: 'Legal SEO', description: 'Practice area and location-based search optimization' },
      { name: 'Case Study Marketing', description: 'Compliant success story presentation' },
      { name: 'Client Portal Systems', description: 'Secure client communication and document sharing' }
    ],
    faqs: [
      {
        question: 'How do you ensure legal advertising compliance?',
        answer: 'We stay current with bar association advertising rules and ensure all marketing materials meet professional conduct standards for legal advertising.'
      },
      {
        question: 'Can you help with lawyer directory listings?',
        answer: 'Yes, we manage profiles on major legal directories like Avvo, Martindale-Hubbell, and local bar association directories to improve your online presence.'
      }
    ]
  },
  'restaurants': {
    name: 'Restaurants',
    title: 'Restaurant Digital Marketing',
    description: 'Digital marketing solutions designed specifically for restaurants, cafes, and food service businesses.',
    challenges: [
      'Online ordering integration',
      'Local competition',
      'Social media food photography',
      'Review management'
    ],
    solutions: [
      { name: 'Restaurant Website Design', description: 'Mobile-optimized sites with online ordering capabilities' },
      { name: 'Local Restaurant SEO', description: 'Google My Business optimization and local search ranking' },
      { name: 'Food Photography & Social Media', description: 'Professional food photography and social media management' },
      { name: 'Online Ordering Systems', description: 'Integrated ordering and delivery platform solutions' }
    ],
    faqs: [
      {
        question: 'Do you provide online ordering integration?',
        answer: 'Yes, we integrate popular online ordering systems like DoorDash, Uber Eats, and custom ordering solutions directly into your website.'
      },
      {
        question: 'How do you help manage restaurant reviews?',
        answer: 'We provide review monitoring, response management, and strategies to encourage positive reviews while addressing negative feedback professionally.'
      }
    ]
  },
  'retail': {
    name: 'Retail',
    title: 'Retail Digital Marketing',
    description: 'E-commerce and digital marketing solutions for retail businesses and online stores.',
    challenges: [
      'E-commerce optimization',
      'Inventory management integration',
      'Multi-channel selling',
      'Customer retention'
    ],
    solutions: [
      { name: 'E-commerce Website Development', description: 'Custom online stores with advanced shopping features' },
      { name: 'Product SEO Optimization', description: 'Product page optimization for better search visibility' },
      { name: 'Inventory Management Integration', description: 'Real-time inventory syncing across platforms' },
      { name: 'Customer Retention Programs', description: 'Email marketing and loyalty program implementation' }
    ],
    faqs: [
      {
        question: 'Which e-commerce platforms do you work with?',
        answer: 'We work with Shopify, WooCommerce, Magento, and can build custom e-commerce solutions depending on your specific needs and requirements.'
      },
      {
        question: 'How do you handle product catalog management?',
        answer: 'We provide automated product feed management, bulk product uploads, and integration with inventory management systems for seamless catalog updates.'
      }
    ]
  },
  'automotive': {
    name: 'Automotive',
    title: 'Automotive Digital Marketing',
    description: 'Digital marketing and web solutions for car dealerships, auto repair shops, and automotive service providers.',
    challenges: [
      'Vehicle inventory display',
      'Service appointment booking',
      'Local competition',
      'Seasonal demand fluctuations'
    ],
    solutions: [
      { name: 'Automotive Website Design', description: 'Vehicle showcase websites with advanced search functionality' },
      { name: 'Service Appointment Systems', description: 'Online booking and service scheduling platforms' },
      { name: 'Inventory Management', description: 'Real-time vehicle inventory display and management' },
      { name: 'Local Automotive SEO', description: 'Location-based optimization for automotive searches' }
    ],
    faqs: [
      {
        question: 'Can you integrate vehicle inventory feeds?',
        answer: 'Yes, we can connect your website to various inventory management systems and display real-time vehicle availability with detailed specifications and photos.'
      },
      {
        question: 'How do you help automotive businesses with local SEO?',
        answer: 'We optimize for location-based searches like "car dealer near me" or "auto repair [city]" and manage Google My Business profiles with service areas and hours.'
      }
    ]
  }
};

interface PageProps {
  params: {
    locale: string;
    industry: string;
  };
}

export async function generateStaticParams() {
  const industryKeys = Object.keys(industries);
  const locales = ['en', 'es'];

  const params = [];

  for (const locale of locales) {
    for (const industry of industryKeys) {
      params.push({ locale, industry });
    }
  }

  return params;
}

export async function generateMetadata({ params: { locale, industry } }: PageProps): Promise<Metadata> {
  const industryConfig = industries[industry as keyof typeof industries];

  if (!industryConfig) {
    return { title: 'Industry Not Found' };
  }

  const title = `${industryConfig.title} Services | OAC Digital`;
  const description = `${industryConfig.description} Specialized solutions for ${industryConfig.name.toLowerCase()} businesses in South Florida.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://oac-digital.com/${locale}/industries/${industry}`,
      type: 'website',
      locale: locale === 'es' ? 'es_US' : 'en_US',
    },
    alternates: {
      canonical: `https://oac-digital.com/${locale}/industries/${industry}`,
      languages: {
        'en': `https://oac-digital.com/en/industries/${industry}`,
        'es': `https://oac-digital.com/es/industries/${industry}`,
      }
    }
  };
}

export default async function IndustryPage({ params: { locale, industry } }: PageProps) {
  setRequestLocale(locale);

  const industryConfig = industries[industry as keyof typeof industries];

  if (!industryConfig) {
    notFound();
  }

  const messages = await getMessages(locale);

  // Breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: `https://oac-digital.com/${locale}` },
    { name: 'Industries', url: `https://oac-digital.com/${locale}/industries` },
    { name: industryConfig.name, url: `https://oac-digital.com/${locale}/industries/${industry}` }
  ];

  return (
    <>
      {/* Structured Data */}
      <ServiceSchema
        service={{
          name: industryConfig.title,
          description: industryConfig.description,
          serviceType: 'DigitalMarketingService',
          provider: 'OAC Digital Innovations',
          offers: industryConfig.solutions
        }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={industryConfig.faqs} />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {industryConfig.title} Services
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-4xl mx-auto">
            {industryConfig.description}
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

        {/* Industry Challenges */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            {industryConfig.name} Industry Challenges We Solve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryConfig.challenges.map((challenge, index) => (
              <div key={index} className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="font-medium text-red-800">{challenge}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our {industryConfig.name} Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {industryConfig.solutions.map((solution, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border">
                <h3 className="text-xl font-semibold mb-3">{solution.name}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose OAC Digital for {industryConfig.name}?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry Expertise</h3>
              <p className="text-gray-600">
                Deep understanding of {industryConfig.name.toLowerCase()} industry challenges and opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Enhanced Solutions</h3>
              <p className="text-gray-600">
                Cutting-edge AI technology tailored for {industryConfig.name.toLowerCase()} businesses.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Track record of success with {industryConfig.name.toLowerCase()} clients across South Florida.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {industryConfig.faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow border">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your {industryConfig.name} Business?
          </h2>
          <p className="text-xl mb-6">
            Let&apos;s discuss how OAC Digital can help your {industryConfig.name.toLowerCase()} business thrive online.
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