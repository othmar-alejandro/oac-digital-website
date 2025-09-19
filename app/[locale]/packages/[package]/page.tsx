import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getMessages } from '@/i18n';
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from '@/components/seo/StructuredData';

// Service package configurations
const servicePackages = {
  'web-design-and-seo': {
    title: 'Web Design and SEO Services',
    service1: 'Web Design',
    service2: 'SEO',
    description: 'Complete web design and SEO package that creates beautiful, search-engine optimized websites that rank high and convert visitors into customers.',
    benefits: [
      'SEO-optimized site architecture from day one',
      'Faster time to market with integrated approach',
      'Better user experience and search rankings',
      'Cost savings compared to separate services',
      'Consistent branding and messaging across all elements'
    ],
    process: [
      {
        step: 1,
        title: 'SEO-First Design Planning',
        description: 'We start with keyword research and competitor analysis to inform the site structure and design.',
        duration: '1-2 weeks'
      },
      {
        step: 2,
        title: 'Optimized Design & Development',
        description: 'Create responsive designs with built-in SEO best practices, fast loading times, and mobile optimization.',
        duration: '3-4 weeks'
      },
      {
        step: 3,
        title: 'Content Integration & On-Page SEO',
        description: 'Integrate optimized content, meta tags, schema markup, and internal linking structure.',
        duration: '1-2 weeks'
      },
      {
        step: 4,
        title: 'Launch & Ongoing Optimization',
        description: 'Launch the site with proper analytics setup and begin ongoing SEO monitoring and improvements.',
        duration: 'Ongoing'
      }
    ],
    pricing: {
      starting: '$3,499',
      includes: ['Custom responsive design', 'Technical SEO setup', 'Content optimization', '6 months SEO monitoring']
    },
    faqs: [
      {
        question: 'Why combine web design and SEO services?',
        answer: 'Combining services ensures your website is built with SEO in mind from the ground up, resulting in better search rankings, faster implementation, and cost savings compared to retrofitting SEO later.'
      },
      {
        question: 'How long does it take to see SEO results?',
        answer: 'While the website launches within 6-8 weeks, SEO results typically begin showing within 3-4 months, with significant improvements visible after 6 months of consistent optimization.'
      },
      {
        question: 'Do you provide ongoing SEO after the website launches?',
        answer: 'Yes, our packages include 6 months of SEO monitoring and optimization. We also offer ongoing SEO maintenance plans to ensure continued growth and performance.'
      }
    ]
  },
  'seo-and-digital-marketing': {
    title: 'SEO and Digital Marketing Services',
    service1: 'SEO',
    service2: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategy combining organic SEO growth with paid advertising for maximum online visibility and lead generation.',
    benefits: [
      'Multi-channel approach for broader reach',
      'Shared keyword insights across SEO and PPC',
      'Improved overall ROI through coordinated campaigns',
      'Comprehensive analytics and reporting',
      'Faster market penetration and growth'
    ],
    process: [
      {
        step: 1,
        title: 'Market Research & Strategy',
        description: 'Analyze your market, competitors, and audience to create an integrated SEO and marketing strategy.',
        duration: '1 week'
      },
      {
        step: 2,
        title: 'SEO Foundation & Campaign Setup',
        description: 'Implement technical SEO improvements while setting up advertising campaigns and social media strategy.',
        duration: '2-3 weeks'
      },
      {
        step: 3,
        title: 'Content Marketing & Link Building',
        description: 'Create valuable content that supports both SEO and marketing goals while building authority.',
        duration: 'Ongoing'
      },
      {
        step: 4,
        title: 'Optimization & Scaling',
        description: 'Continuously optimize both SEO and marketing campaigns based on performance data.',
        duration: 'Ongoing'
      }
    ],
    pricing: {
      starting: '$2,499/month',
      includes: ['Complete SEO management', 'Google Ads campaigns', 'Social media marketing', 'Monthly reporting']
    },
    faqs: [
      {
        question: 'How do SEO and digital marketing work together?',
        answer: 'SEO provides long-term organic growth while digital marketing delivers immediate visibility. Together, they create a comprehensive online presence that captures customers at all stages of the buying journey.'
      },
      {
        question: 'What\'s the typical ROI for combined SEO and marketing?',
        answer: 'Businesses typically see 300-500% ROI within 6-12 months when SEO and digital marketing are properly coordinated, with some clients achieving even higher returns.'
      },
      {
        question: 'Can you adjust the budget split between SEO and advertising?',
        answer: 'Absolutely! We customize the budget allocation based on your goals, industry, and what\'s working best. The strategy evolves as we gather performance data.'
      }
    ]
  },
  'web-design-and-digital-marketing': {
    title: 'Web Design and Digital Marketing Services',
    service1: 'Web Design',
    service2: 'Digital Marketing',
    description: 'Complete digital presence solution featuring conversion-optimized web design paired with strategic digital marketing campaigns to drive traffic and sales.',
    benefits: [
      'Conversion-focused design optimized for marketing campaigns',
      'Consistent brand messaging across all touchpoints',
      'Landing pages designed for specific marketing campaigns',
      'Integrated analytics and tracking setup',
      'Faster campaign deployment and optimization'
    ],
    process: [
      {
        step: 1,
        title: 'Brand & Marketing Strategy',
        description: 'Develop comprehensive brand strategy and marketing plan that informs website design and campaign approach.',
        duration: '1-2 weeks'
      },
      {
        step: 2,
        title: 'Conversion-Optimized Design',
        description: 'Create website design focused on converting visitors from marketing campaigns into leads and customers.',
        duration: '3-4 weeks'
      },
      {
        step: 3,
        title: 'Marketing Campaign Launch',
        description: 'Launch targeted marketing campaigns driving traffic to optimized landing pages and website.',
        duration: '1 week'
      },
      {
        step: 4,
        title: 'Performance Tracking & Optimization',
        description: 'Monitor website and campaign performance, making continuous improvements to increase conversions.',
        duration: 'Ongoing'
      }
    ],
    pricing: {
      starting: '$4,999',
      includes: ['Custom website design', '3 months marketing campaigns', 'Analytics setup', 'Performance reporting']
    },
    faqs: [
      {
        question: 'How does marketing-focused web design differ from regular design?',
        answer: 'Marketing-focused design prioritizes conversion elements, clear call-to-actions, landing page optimization, and seamless integration with advertising campaigns to maximize ROI.'
      },
      {
        question: 'What marketing channels do you include?',
        answer: 'We typically include Google Ads, social media advertising, email marketing, and content marketing. The specific mix depends on your target audience and goals.'
      },
      {
        question: 'How quickly can we start seeing results?',
        answer: 'Website launches in 6-8 weeks, marketing campaigns can start immediately after launch, and you typically see initial results within 2-4 weeks of campaign launch.'
      }
    ]
  },
  'seo-and-ai-solutions': {
    title: 'SEO and AI Solutions',
    service1: 'SEO',
    service2: 'AI Solutions',
    description: 'Advanced SEO strategy enhanced with AI-powered tools for content creation, keyword research, and automated optimization to dominate search rankings.',
    benefits: [
      'AI-powered content creation at scale',
      'Advanced keyword research and competitor analysis',
      'Automated technical SEO monitoring',
      'Predictive SEO insights and recommendations',
      'Faster content production and optimization'
    ],
    process: [
      {
        step: 1,
        title: 'AI-Powered SEO Audit',
        description: 'Use AI tools to conduct comprehensive site analysis and identify optimization opportunities.',
        duration: '1 week'
      },
      {
        step: 2,
        title: 'Automated Content Strategy',
        description: 'Implement AI content generation system for blogs, meta descriptions, and page optimization.',
        duration: '2 weeks'
      },
      {
        step: 3,
        title: 'Technical SEO Automation',
        description: 'Set up AI monitoring for technical issues, site speed, and search performance.',
        duration: '1 week'
      },
      {
        step: 4,
        title: 'Continuous AI Optimization',
        description: 'Ongoing AI-driven optimization based on search trends and performance data.',
        duration: 'Ongoing'
      }
    ],
    pricing: {
      starting: '$1,999/month',
      includes: ['AI-powered SEO tools', 'Automated content creation', 'Technical monitoring', 'Monthly AI insights report']
    },
    faqs: [
      {
        question: 'How does AI improve SEO results?',
        answer: 'AI accelerates keyword research, automates content creation, provides predictive insights, and continuously monitors performance to make real-time optimizations that would be impossible manually.'
      },
      {
        question: 'Will AI-generated content hurt my SEO?',
        answer: 'No, when properly implemented, AI content is high-quality, original, and optimized for search engines. We ensure all content meets Google\'s quality guidelines and adds genuine value.'
      },
      {
        question: 'What AI tools do you use for SEO?',
        answer: 'We use a combination of custom AI solutions and leading platforms for content generation, keyword research, technical monitoring, and performance analysis, all integrated into a comprehensive SEO strategy.'
      }
    ]
  }
};

interface PageProps {
  params: {
    locale: string;
    package: string;
  };
}

export async function generateStaticParams() {
  const packageKeys = Object.keys(servicePackages);
  const locales = ['en', 'es'];

  const params = [];

  for (const locale of locales) {
    for (const packageKey of packageKeys) {
      params.push({ locale, package: packageKey });
    }
  }

  return params;
}

export async function generateMetadata({ params: { locale, package: packageKey } }: PageProps): Promise<Metadata> {
  const packageConfig = servicePackages[packageKey as keyof typeof servicePackages];

  if (!packageConfig) {
    return { title: 'Service Package Not Found' };
  }

  const title = `${packageConfig.title} | OAC Digital`;
  const description = packageConfig.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://oac-digital.com/${locale}/packages/${packageKey}`,
      type: 'website',
      locale: locale === 'es' ? 'es_US' : 'en_US',
    },
    alternates: {
      canonical: `https://oac-digital.com/${locale}/packages/${packageKey}`,
      languages: {
        'en': `https://oac-digital.com/en/packages/${packageKey}`,
        'es': `https://oac-digital.com/es/packages/${packageKey}`,
      }
    }
  };
}

export default async function ServicePackagePage({ params: { locale, package: packageKey } }: PageProps) {
  setRequestLocale(locale);

  const packageConfig = servicePackages[packageKey as keyof typeof servicePackages];

  if (!packageConfig) {
    notFound();
  }

  const messages = await getMessages(locale);

  // Breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: `https://oac-digital.com/${locale}` },
    { name: 'Packages', url: `https://oac-digital.com/${locale}/packages` },
    { name: packageConfig.title, url: `https://oac-digital.com/${locale}/packages/${packageKey}` }
  ];

  return (
    <>
      {/* Structured Data */}
      <ServiceSchema
        service={{
          name: packageConfig.title,
          description: packageConfig.description,
          serviceType: 'DigitalMarketingService',
          provider: 'OAC Digital Innovations',
          offers: [{
            name: packageConfig.title,
            description: packageConfig.description,
            price: packageConfig.pricing.starting,
            priceCurrency: 'USD'
          }]
        }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={packageConfig.faqs} />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {packageConfig.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-4xl mx-auto">
            {packageConfig.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${locale}/contact`}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Get Started Today
            </a>
            <a
              href={`tel:+13053405282`}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Call (305) 340-5282
            </a>
          </div>
        </div>

        {/* Pricing Highlight */}
        <div className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Complete Package Starting at {packageConfig.pricing.starting}</h2>
          <p className="text-lg text-gray-700 mb-4">Includes: {packageConfig.pricing.includes.join(', ')}</p>
          <p className="text-sm text-gray-600">Save up to 40% compared to purchasing services separately</p>
        </div>

        {/* Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Combine {packageConfig.service1} and {packageConfig.service2}?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packageConfig.benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-green-600 text-xl">✓</span>
                </div>
                <p className="font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Process</h2>
          <div className="space-y-6">
            {packageConfig.process.map((step, index) => (
              <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow border">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-blue-600 font-bold">{step.step}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  <span className="text-sm text-blue-600 font-medium">Duration: {step.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Comparison */}
        <div className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">
            Combined Services vs. Separate Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-4">✅ Combined Package</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Integrated strategy from day one</li>
                <li>• Better coordination and results</li>
                <li>• Cost savings up to 40%</li>
                <li>• Faster implementation timeline</li>
                <li>• Single point of contact</li>
                <li>• Consistent branding and messaging</li>
              </ul>
            </div>
            <div className="bg-red-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-800 mb-4">❌ Separate Services</h3>
              <ul className="space-y-2 text-red-700">
                <li>• Potential strategy conflicts</li>
                <li>• Higher overall costs</li>
                <li>• Longer timeline to see results</li>
                <li>• Multiple vendors to manage</li>
                <li>• Inconsistent execution</li>
                <li>• Missed optimization opportunities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {packageConfig.faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow border">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-6">
            Get started with our {packageConfig.service1} and {packageConfig.service2} package today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${locale}/contact`}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Get Your Free Consultation
            </a>
            <a
              href={`/${locale}/portfolio`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </>
  );
}