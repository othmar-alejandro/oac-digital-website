import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getMessages } from '@/i18n';
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from '@/components/seo/StructuredData';

// Tool comparison configurations
const comparisons = {
  'shopify-vs-woocommerce': {
    title: 'Shopify vs WooCommerce',
    subtitle: 'E-commerce Platform Comparison 2025',
    description: 'Comprehensive comparison of Shopify and WooCommerce for your e-commerce business. Expert analysis to help you choose the right platform.',
    tool1: {
      name: 'Shopify',
      logo: '🛍️',
      pricing: '$29-$299/month',
      pros: [
        'Easy to set up and use',
        'Built-in hosting and security',
        'Excellent app ecosystem',
        'Mobile-responsive themes',
        'Integrated payment processing'
      ],
      cons: [
        'Monthly subscription fees',
        'Transaction fees on external gateways',
        'Limited customization without coding',
        'App costs can add up'
      ],
      bestFor: 'Beginners, quick launches, businesses that prioritize ease of use'
    },
    tool2: {
      name: 'WooCommerce',
      logo: '🔧',
      pricing: 'Free (hosting costs apply)',
      pros: [
        'Completely free and open-source',
        'Unlimited customization options',
        'No transaction fees',
        'Full control over your store',
        'Extensive plugin library'
      ],
      cons: [
        'Requires technical knowledge',
        'Need to manage hosting and security',
        'Can be slower without optimization',
        'More complex setup process'
      ],
      bestFor: 'Developers, businesses needing full control, budget-conscious startups'
    },
    winner: 'Depends on your needs',
    recommendation: 'Choose Shopify for simplicity and quick launch, WooCommerce for customization and control.',
    faqs: [
      {
        question: 'Which is better for beginners: Shopify or WooCommerce?',
        answer: 'Shopify is generally better for beginners due to its user-friendly interface, built-in hosting, and comprehensive support. WooCommerce requires more technical knowledge but offers greater flexibility.'
      },
      {
        question: 'What are the hidden costs of each platform?',
        answer: 'Shopify has monthly fees, transaction fees (if not using Shopify Payments), and app costs. WooCommerce is free but requires hosting, SSL certificates, premium themes/plugins, and potentially developer costs.'
      },
      {
        question: 'Can I migrate from one platform to another later?',
        answer: 'Yes, migration is possible but can be complex. It\'s best to choose the right platform from the start. Our team can help with platform migration if needed.'
      }
    ]
  },
  'wordpress-vs-nextjs': {
    title: 'WordPress vs Next.js',
    subtitle: 'Website Development Platform Comparison',
    description: 'Detailed comparison between WordPress and Next.js for modern web development. Learn which platform suits your business needs.',
    tool1: {
      name: 'WordPress',
      logo: '📝',
      pricing: 'Free (hosting required)',
      pros: [
        'User-friendly content management',
        'Massive plugin ecosystem',
        'SEO-friendly out of the box',
        'Large community support',
        'No coding required for basic sites'
      ],
      cons: [
        'Can be slow without optimization',
        'Security vulnerabilities if not maintained',
        'Plugin conflicts possible',
        'Limited for complex applications'
      ],
      bestFor: 'Content-heavy sites, blogs, traditional business websites, non-technical users'
    },
    tool2: {
      name: 'Next.js',
      logo: '⚡',
      pricing: 'Free (development costs apply)',
      pros: [
        'Extremely fast performance',
        'Built-in SEO optimization',
        'Scalable and modern',
        'Server-side rendering',
        'Great developer experience'
      ],
      cons: [
        'Requires coding knowledge',
        'Steeper learning curve',
        'Need developer for content updates',
        'More complex deployment'
      ],
      bestFor: 'High-performance sites, web applications, tech-savvy businesses, custom functionality'
    },
    winner: 'Next.js for performance, WordPress for ease of use',
    recommendation: 'Choose WordPress for content management ease, Next.js for performance and modern features.',
    faqs: [
      {
        question: 'Is Next.js worth the extra development cost?',
        answer: 'Yes, if performance, scalability, and modern features are priorities. Next.js sites are typically 3-5x faster than WordPress and provide better user experience and SEO benefits.'
      },
      {
        question: 'Can I manage content easily with Next.js?',
        answer: 'Next.js requires a headless CMS or custom admin panel for content management. While more complex than WordPress, it offers greater flexibility and performance.'
      },
      {
        question: 'Which platform is better for SEO?',
        answer: 'Both can be excellent for SEO when properly configured. Next.js has built-in performance advantages, while WordPress has user-friendly SEO plugins. Performance often gives Next.js an edge.'
      }
    ]
  },
  'google-ads-vs-facebook-ads': {
    title: 'Google Ads vs Facebook Ads',
    subtitle: 'Digital Advertising Platform Comparison',
    description: 'Strategic comparison of Google Ads and Facebook Ads for your digital marketing campaigns. Maximize your advertising ROI.',
    tool1: {
      name: 'Google Ads',
      logo: '🔍',
      pricing: 'Pay-per-click (varies by keyword)',
      pros: [
        'High-intent traffic',
        'Immediate visibility in search results',
        'Multiple ad formats',
        'Detailed analytics',
        'Local advertising options'
      ],
      cons: [
        'Higher cost per click',
        'Competitive keywords expensive',
        'Learning curve for optimization',
        'Ad fatigue possible'
      ],
      bestFor: 'Service businesses, high-intent searches, local businesses, B2B companies'
    },
    tool2: {
      name: 'Facebook Ads',
      logo: '📱',
      pricing: 'Various pricing models available',
      pros: [
        'Precise audience targeting',
        'Visual ad formats',
        'Lower cost per click',
        'Great for brand awareness',
        'Cross-platform reach (Instagram, WhatsApp)'
      ],
      cons: [
        'Lower intent traffic',
        'Ad fatigue more common',
        'iOS 14.5 tracking limitations',
        'More complex audience setup'
      ],
      bestFor: 'E-commerce, B2C brands, visual products, brand awareness campaigns'
    },
    winner: 'Use both for optimal results',
    recommendation: 'Combine Google Ads for high-intent searches with Facebook Ads for awareness and retargeting.',
    faqs: [
      {
        question: 'Which platform gives better ROI?',
        answer: 'It depends on your business type. Google Ads typically converts better for service businesses, while Facebook Ads excel for e-commerce and brand awareness. A combined approach often yields the best results.'
      },
      {
        question: 'How much budget should I allocate to each platform?',
        answer: 'Start with 60% Google Ads, 40% Facebook Ads for most businesses. Adjust based on performance data. Service businesses may favor Google, while e-commerce might prefer Facebook.'
      },
      {
        question: 'Can I run both platforms simultaneously?',
        answer: 'Absolutely! Running both platforms allows you to capture users at different stages of the buying journey and maximize your overall reach and conversions.'
      }
    ]
  },
  'mailchimp-vs-klaviyo': {
    title: 'Mailchimp vs Klaviyo',
    subtitle: 'Email Marketing Platform Comparison',
    description: 'In-depth comparison of Mailchimp and Klaviyo for email marketing automation. Choose the best platform for your business.',
    tool1: {
      name: 'Mailchimp',
      logo: '🐵',
      pricing: 'Free - $350+/month',
      pros: [
        'User-friendly interface',
        'Free plan available',
        'Good template selection',
        'Basic automation features',
        'Integrated website builder'
      ],
      cons: [
        'Limited advanced features',
        'Expensive for large lists',
        'Basic segmentation',
        'Limited e-commerce integration'
      ],
      bestFor: 'Small businesses, beginners, basic email campaigns, budget-conscious companies'
    },
    tool2: {
      name: 'Klaviyo',
      logo: '📧',
      pricing: 'Free - $1,700+/month',
      pros: [
        'Advanced segmentation',
        'Powerful automation',
        'Excellent e-commerce integration',
        'Detailed analytics',
        'Predictive analytics'
      ],
      cons: [
        'Steeper learning curve',
        'More expensive',
        'Can be overwhelming for beginners',
        'No free plan for large lists'
      ],
      bestFor: 'E-commerce businesses, advanced marketers, data-driven campaigns, growing businesses'
    },
    winner: 'Klaviyo for e-commerce, Mailchimp for simplicity',
    recommendation: 'Choose Mailchimp for basic needs and budget constraints, Klaviyo for advanced e-commerce marketing.',
    faqs: [
      {
        question: 'Is Klaviyo worth the extra cost for small businesses?',
        answer: 'If you\'re an e-commerce business, yes. Klaviyo\'s advanced segmentation and automation can significantly increase revenue. For basic newsletters, Mailchimp may suffice.'
      },
      {
        question: 'Can I migrate from Mailchimp to Klaviyo?',
        answer: 'Yes, migration is possible and Klaviyo provides tools to help. However, you\'ll need to rebuild automations and segments. Planning the transition carefully is important.'
      },
      {
        question: 'Which platform has better deliverability?',
        answer: 'Both platforms have good deliverability rates. Klaviyo slightly edges out with more advanced deliverability features and better e-commerce integrations that improve engagement rates.'
      }
    ]
  },
  'hubspot-vs-salesforce': {
    title: 'HubSpot vs Salesforce',
    subtitle: 'CRM Platform Comparison',
    description: 'Comprehensive comparison of HubSpot and Salesforce CRM systems. Find the perfect customer relationship management solution.',
    tool1: {
      name: 'HubSpot',
      logo: '🧲',
      pricing: 'Free - $3,200+/month',
      pros: [
        'Free CRM tier available',
        'User-friendly interface',
        'All-in-one marketing suite',
        'Great for inbound marketing',
        'Excellent customer support'
      ],
      cons: [
        'Limited customization',
        'Expensive for advanced features',
        'Reporting limitations on lower tiers',
        'Can become costly as you scale'
      ],
      bestFor: 'Small to medium businesses, inbound marketing, teams wanting ease of use'
    },
    tool2: {
      name: 'Salesforce',
      logo: '☁️',
      pricing: '$25 - $300+/user/month',
      pros: [
        'Highly customizable',
        'Extensive app marketplace',
        'Advanced analytics',
        'Scales with enterprise needs',
        'Robust automation capabilities'
      ],
      cons: [
        'Steep learning curve',
        'Expensive implementation',
        'Requires admin expertise',
        'Can be overwhelming'
      ],
      bestFor: 'Large enterprises, complex sales processes, businesses needing heavy customization'
    },
    winner: 'Depends on company size and needs',
    recommendation: 'Choose HubSpot for ease of use and integrated marketing, Salesforce for enterprise-level customization.',
    faqs: [
      {
        question: 'Which CRM is better for small businesses?',
        answer: 'HubSpot is generally better for small businesses due to its free tier, ease of use, and integrated marketing tools. Salesforce can be overkill and expensive for smaller teams.'
      },
      {
        question: 'Do I need technical expertise to use these platforms?',
        answer: 'HubSpot is designed for non-technical users and is quite intuitive. Salesforce typically requires dedicated admin support or technical training for optimal use.'
      },
      {
        question: 'Can these CRMs integrate with my existing tools?',
        answer: 'Both platforms offer extensive integrations. Salesforce has more third-party apps available, while HubSpot focuses on native integrations within its ecosystem.'
      }
    ]
  }
};

interface PageProps {
  params: {
    locale: string;
    comparison: string;
  };
}

export async function generateStaticParams() {
  const comparisonKeys = Object.keys(comparisons);
  const locales = ['en', 'es'];

  const params = [];

  for (const locale of locales) {
    for (const comparison of comparisonKeys) {
      params.push({ locale, comparison });
    }
  }

  return params;
}

export async function generateMetadata({ params: { locale, comparison } }: PageProps): Promise<Metadata> {
  const comparisonConfig = comparisons[comparison as keyof typeof comparisons];

  if (!comparisonConfig) {
    return { title: 'Comparison Not Found' };
  }

  const title = `${comparisonConfig.title} - ${comparisonConfig.subtitle} | OAC Digital`;
  const description = comparisonConfig.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://oac-digital.com/${locale}/compare/${comparison}`,
      type: 'article',
      locale: locale === 'es' ? 'es_US' : 'en_US',
    },
    alternates: {
      canonical: `https://oac-digital.com/${locale}/compare/${comparison}`,
      languages: {
        'en': `https://oac-digital.com/en/compare/${comparison}`,
        'es': `https://oac-digital.com/es/compare/${comparison}`,
      }
    }
  };
}

export default async function ComparisonPage({ params: { locale, comparison } }: PageProps) {
  setRequestLocale(locale);

  const comparisonConfig = comparisons[comparison as keyof typeof comparisons];

  if (!comparisonConfig) {
    notFound();
  }

  const messages = await getMessages(locale);

  // Breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: `https://oac-digital.com/${locale}` },
    { name: 'Comparisons', url: `https://oac-digital.com/${locale}/compare` },
    { name: comparisonConfig.title, url: `https://oac-digital.com/${locale}/compare/${comparison}` }
  ];

  return (
    <>
      {/* Structured Data */}
      <ServiceSchema
        service={{
          name: `${comparisonConfig.title} Comparison Guide`,
          description: comparisonConfig.description,
          serviceType: 'ConsultingService',
          provider: 'OAC Digital Innovations'
        }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={comparisonConfig.faqs} />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {comparisonConfig.title}
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            {comparisonConfig.subtitle}
          </p>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            {comparisonConfig.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${locale}/contact`}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Get Expert Consultation
            </a>
            <a
              href={`tel:+13053405282`}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Call (305) 340-5282
            </a>
          </div>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Side-by-Side Comparison
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tool 1 */}
            <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">{comparisonConfig.tool1.logo}</div>
                <h3 className="text-2xl font-bold text-blue-600">{comparisonConfig.tool1.name}</h3>
                <p className="text-lg font-medium text-gray-600">{comparisonConfig.tool1.pricing}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-green-600 mb-3">✅ Pros</h4>
                <ul className="space-y-2">
                  {comparisonConfig.tool1.pros.map((pro, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-sm">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-red-600 mb-3">❌ Cons</h4>
                <ul className="space-y-2">
                  {comparisonConfig.tool1.cons.map((con, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-sm">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Best For:</h4>
                <p className="text-sm text-gray-700">{comparisonConfig.tool1.bestFor}</p>
              </div>
            </div>

            {/* Tool 2 */}
            <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">{comparisonConfig.tool2.logo}</div>
                <h3 className="text-2xl font-bold text-purple-600">{comparisonConfig.tool2.name}</h3>
                <p className="text-lg font-medium text-gray-600">{comparisonConfig.tool2.pricing}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-green-600 mb-3">✅ Pros</h4>
                <ul className="space-y-2">
                  {comparisonConfig.tool2.pros.map((pro, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-sm">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-red-600 mb-3">❌ Cons</h4>
                <ul className="space-y-2">
                  {comparisonConfig.tool2.cons.map((con, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-sm">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Best For:</h4>
                <p className="text-sm text-gray-700">{comparisonConfig.tool2.bestFor}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Winner & Recommendation */}
        <div className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6">
            🏆 Our Verdict
          </h2>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Winner: {comparisonConfig.winner}</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {comparisonConfig.recommendation}
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {comparisonConfig.faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow border">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Need Help Choosing? CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">
            Still Not Sure Which to Choose?
          </h2>
          <p className="text-xl mb-6">
            Our experts can help you make the right decision based on your specific business needs and goals.
          </p>
          <a
            href={`/${locale}/contact`}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block"
          >
            Get Free Expert Consultation
          </a>
        </div>
      </div>
    </>
  );
}