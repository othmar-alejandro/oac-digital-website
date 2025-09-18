import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getMessages } from '@/i18n';
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from '@/components/seo/StructuredData';

// Seasonal campaign configurations
const campaigns = {
  'holiday-marketing-2025': {
    title: 'Holiday Marketing Campaigns 2025',
    subtitle: 'Black Friday, Cyber Monday & Christmas Marketing',
    description: 'Comprehensive holiday marketing strategies for Black Friday, Cyber Monday, and Christmas 2025. Boost your sales during the most profitable season.',
    season: 'Holiday Season',
    timeframe: 'November - December 2025',
    keyDates: [
      { event: 'Black Friday', date: 'November 28, 2025' },
      { event: 'Cyber Monday', date: 'December 1, 2025' },
      { event: 'Christmas Day', date: 'December 25, 2025' },
      { event: 'New Year\'s Day', date: 'January 1, 2026' }
    ],
    strategies: [
      {
        name: 'Early Bird Email Campaigns',
        description: 'Start building anticipation 6 weeks before Black Friday with teaser campaigns.',
        timeline: 'Mid-October',
        expectedROI: '200-400%'
      },
      {
        name: 'Flash Sale Landing Pages',
        description: 'Create urgency with countdown timers and limited-time offers.',
        timeline: 'Black Friday Weekend',
        expectedROI: '300-600%'
      },
      {
        name: 'Retargeting Campaigns',
        description: 'Re-engage website visitors who didn\'t convert during initial promotions.',
        timeline: 'Throughout December',
        expectedROI: '150-300%'
      },
      {
        name: 'Gift Guide Content',
        description: 'SEO-optimized gift guides targeting holiday shoppers.',
        timeline: 'November - December',
        expectedROI: '100-250%'
      }
    ],
    industries: ['Retail', 'E-commerce', 'Restaurants', 'Beauty', 'Electronics'],
    tips: [
      'Start planning 3 months in advance',
      'Create mobile-optimized landing pages',
      'Use countdown timers to create urgency',
      'Implement abandoned cart recovery',
      'Optimize for voice search queries'
    ],
    faqs: [
      {
        question: 'When should I start my holiday marketing campaigns?',
        answer: 'Start planning in September and launch awareness campaigns by mid-October. This gives you enough time to build anticipation and capture early shoppers.'
      },
      {
        question: 'What\'s the average ROI for holiday marketing campaigns?',
        answer: 'Well-executed holiday campaigns typically see 200-500% ROI, with email marketing and retargeting being the highest performers during this season.'
      },
      {
        question: 'Should I focus more on Black Friday or Christmas marketing?',
        answer: 'Both are important, but Black Friday/Cyber Monday focus on deals and urgency, while Christmas marketing emphasizes gifting and emotions. Plan distinct strategies for each.'
      }
    ]
  },
  'back-to-school-2025': {
    title: 'Back to School Marketing 2025',
    subtitle: 'August - September Marketing Campaigns',
    description: 'Strategic back-to-school marketing campaigns for businesses targeting students, parents, and educational institutions.',
    season: 'Back to School',
    timeframe: 'July - September 2025',
    keyDates: [
      { event: 'School Supply Shopping Peak', date: 'Mid-July 2025' },
      { event: 'First Day of School (K-12)', date: 'August 18-25, 2025' },
      { event: 'College Move-in Week', date: 'August 20-27, 2025' },
      { event: 'Labor Day Weekend', date: 'August 30 - September 1, 2025' }
    ],
    strategies: [
      {
        name: 'Student Discount Campaigns',
        description: 'Offer special pricing for students with verification systems.',
        timeline: 'July - August',
        expectedROI: '150-300%'
      },
      {
        name: 'Parent-Focused Content Marketing',
        description: 'Create helpful content around school preparation and organization.',
        timeline: 'June - August',
        expectedROI: '100-200%'
      },
      {
        name: 'School Partnership Programs',
        description: 'Partner with local schools for sponsored content and events.',
        timeline: 'Year-round with August focus',
        expectedROI: '200-400%'
      },
      {
        name: 'Dorm Room Essentials Bundles',
        description: 'Create product bundles specifically for college students.',
        timeline: 'July - August',
        expectedROI: '250-450%'
      }
    ],
    industries: ['Education', 'Retail', 'Technology', 'Clothing', 'Restaurants'],
    tips: [
      'Target both students and parents with different messaging',
      'Leverage social media platforms popular with students',
      'Create shareable content for social media',
      'Offer flexible payment options',
      'Partner with local educational institutions'
    ],
    faqs: [
      {
        question: 'What age groups should I target for back-to-school campaigns?',
        answer: 'Focus on three main segments: elementary/middle school parents (ages 25-45), high school students (ages 14-18), and college students (ages 18-24). Each requires different messaging and channels.'
      },
      {
        question: 'Which marketing channels work best for back-to-school campaigns?',
        answer: 'Social media (Instagram, TikTok), email marketing to parents, Google Ads for school supplies, and partnerships with educational institutions perform best during this season.'
      },
      {
        question: 'How early should I start back-to-school marketing?',
        answer: 'Begin awareness campaigns in early July and ramp up through August. Many parents start shopping 4-6 weeks before school starts.'
      }
    ]
  },
  'summer-business-boost-2025': {
    title: 'Summer Business Boost 2025',
    subtitle: 'June - August Marketing Strategies',
    description: 'Maximize your business growth during summer months with targeted campaigns for tourism, outdoor activities, and seasonal services.',
    season: 'Summer',
    timeframe: 'June - August 2025',
    keyDates: [
      { event: 'Memorial Day Weekend', date: 'May 26, 2025' },
      { event: 'Summer Solstice', date: 'June 21, 2025' },
      { event: 'Independence Day', date: 'July 4, 2025' },
      { event: 'Labor Day Weekend', date: 'August 30 - September 1, 2025' }
    ],
    strategies: [
      {
        name: 'Tourism & Travel Campaigns',
        description: 'Target visitors and locals looking for summer activities and experiences.',
        timeline: 'May - August',
        expectedROI: '200-500%'
      },
      {
        name: 'Outdoor Event Marketing',
        description: 'Promote summer events, festivals, and outdoor activities.',
        timeline: 'June - August',
        expectedROI: '150-350%'
      },
      {
        name: 'Seasonal Service Promotions',
        description: 'Highlight summer-specific services like pool cleaning, landscaping, AC repair.',
        timeline: 'April - September',
        expectedROI: '300-600%'
      },
      {
        name: 'Social Media Beach/Summer Content',
        description: 'Create engaging summer-themed content for social media engagement.',
        timeline: 'June - August',
        expectedROI: '100-250%'
      }
    ],
    industries: ['Tourism', 'Hospitality', 'Restaurants', 'Outdoor Services', 'Entertainment'],
    tips: [
      'Leverage local summer events and festivals',
      'Create Instagram-worthy summer content',
      'Target both locals and tourists',
      'Optimize for mobile as people are more active outdoors',
      'Partner with complementary summer businesses'
    ],
    faqs: [
      {
        question: 'How can I attract tourists to my local business during summer?',
        answer: 'Focus on local SEO, Google My Business optimization, travel website listings, and partnerships with hotels and tourist attractions. Highlight unique local experiences and convenience factors.'
      },
      {
        question: 'What summer marketing works best in South Florida?',
        answer: 'In South Florida, focus on indoor activities (AC is crucial), water-related services, tourist attractions, and events that work in hot weather. Hurricane season preparation is also relevant.'
      },
      {
        question: 'Should I pause other marketing during summer campaigns?',
        answer: 'No, integrate summer themes into your existing marketing while maintaining your core messages. Summer campaigns should complement, not replace, your year-round marketing efforts.'
      }
    ]
  },
  'new-year-digital-transformation-2025': {
    title: 'New Year Digital Transformation 2025',
    subtitle: 'January - March Business Growth Campaigns',
    description: 'Capitalize on New Year motivation with digital transformation campaigns targeting business improvement and growth resolutions.',
    season: 'New Year',
    timeframe: 'January - March 2025',
    keyDates: [
      { event: 'New Year\'s Day', date: 'January 1, 2025' },
      { event: 'MLK Day', date: 'January 20, 2025' },
      { event: 'Presidents Day', date: 'February 17, 2025' },
      { event: 'Spring Equinox', date: 'March 20, 2025' }
    ],
    strategies: [
      {
        name: 'Digital Transformation Consulting',
        description: 'Help businesses modernize their digital presence and processes.',
        timeline: 'January - March',
        expectedROI: '400-800%'
      },
      {
        name: 'Website Redesign Promotions',
        description: 'Offer special pricing for complete website overhauls.',
        timeline: 'January - February',
        expectedROI: '300-600%'
      },
      {
        name: 'SEO Audit & Improvement Packages',
        description: 'Comprehensive SEO audits with improvement roadmaps.',
        timeline: 'January - March',
        expectedROI: '250-500%'
      },
      {
        name: 'Social Media Strategy Overhauls',
        description: 'Complete social media strategy and content planning.',
        timeline: 'January - February',
        expectedROI: '200-400%'
      }
    ],
    industries: ['All Industries', 'Professional Services', 'Small Business', 'E-commerce', 'Healthcare'],
    tips: [
      'Target business owners making resolutions',
      'Emphasize fresh starts and new opportunities',
      'Offer comprehensive packages vs. piecemeal services',
      'Include training and education components',
      'Create urgency with limited-time new year pricing'
    ],
    faqs: [
      {
        question: 'Why do businesses invest more in digital marketing in January?',
        answer: 'January represents fresh starts, new budgets, and goal-setting. Businesses are motivated to improve their operations and often have renewed marketing budgets after the previous year-end.'
      },
      {
        question: 'What digital transformation services are most in demand?',
        answer: 'Website redesigns, SEO improvements, social media strategy overhauls, and marketing automation implementation see the highest demand during new year campaigns.'
      },
      {
        question: 'How long should new year campaigns run?',
        answer: 'Start in late December, peak in January, and maintain momentum through February. March can focus on implementation and results from earlier initiatives.'
      }
    ]
  },
  'spring-cleaning-digital-2025': {
    title: 'Spring Digital Cleaning 2025',
    subtitle: 'March - May Website & Marketing Refresh',
    description: 'Spring cleaning campaigns focused on refreshing digital presence, updating content, and optimizing marketing performance.',
    season: 'Spring',
    timeframe: 'March - May 2025',
    keyDates: [
      { event: 'Spring Equinox', date: 'March 20, 2025' },
      { event: 'Easter Sunday', date: 'April 20, 2025' },
      { event: 'Mother\'s Day', date: 'May 11, 2025' },
      { event: 'Memorial Day', date: 'May 26, 2025' }
    ],
    strategies: [
      {
        name: 'Website Performance Audits',
        description: 'Comprehensive site speed, SEO, and user experience audits.',
        timeline: 'March - April',
        expectedROI: '300-500%'
      },
      {
        name: 'Content Refresh Campaigns',
        description: 'Update outdated content, add new blog posts, refresh images.',
        timeline: 'March - May',
        expectedROI: '200-400%'
      },
      {
        name: 'Social Media Profile Updates',
        description: 'Refresh all social media profiles with current branding and info.',
        timeline: 'March - April',
        expectedROI: '150-300%'
      },
      {
        name: 'Email List Cleaning & Re-engagement',
        description: 'Clean inactive subscribers and re-engage lapsed customers.',
        timeline: 'April - May',
        expectedROI: '250-450%'
      }
    ],
    industries: ['All Industries', 'Professional Services', 'Retail', 'Home Services', 'Healthcare'],
    tips: [
      'Audit all digital touchpoints systematically',
      'Focus on mobile optimization improvements',
      'Update copyright dates and contact information',
      'Refresh photography with current, high-quality images',
      'Review and update all business listings'
    ],
    faqs: [
      {
        question: 'What should be included in a spring digital cleaning?',
        answer: 'Website performance audit, content updates, social media refresh, email list cleaning, business listing updates, and security updates. Focus on improving user experience and accuracy.'
      },
      {
        question: 'How often should businesses do digital spring cleaning?',
        answer: 'Major cleanings should happen annually in spring, with quarterly mini-audits throughout the year. Critical elements like security and performance should be monitored continuously.'
      },
      {
        question: 'What\'s the ROI of digital spring cleaning campaigns?',
        answer: 'Businesses typically see 20-40% improvements in website performance, search rankings, and user engagement after comprehensive digital cleaning, leading to increased conversions and sales.'
      }
    ]
  }
};

interface PageProps {
  params: {
    locale: string;
    season: string;
  };
}

export async function generateStaticParams() {
  const campaignKeys = Object.keys(campaigns);
  const locales = ['en', 'es'];

  const params = [];

  for (const locale of locales) {
    for (const season of campaignKeys) {
      params.push({ locale, season });
    }
  }

  return params;
}

export async function generateMetadata({ params: { locale, season } }: PageProps): Promise<Metadata> {
  const campaignConfig = campaigns[season as keyof typeof campaigns];

  if (!campaignConfig) {
    return { title: 'Campaign Not Found' };
  }

  const title = `${campaignConfig.title} | OAC Digital`;
  const description = campaignConfig.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://oac-digital.com/${locale}/campaigns/${season}`,
      type: 'article',
      locale: locale === 'es' ? 'es_US' : 'en_US',
    },
    alternates: {
      canonical: `https://oac-digital.com/${locale}/campaigns/${season}`,
      languages: {
        'en': `https://oac-digital.com/en/campaigns/${season}`,
        'es': `https://oac-digital.com/es/campaigns/${season}`,
      }
    }
  };
}

export default async function CampaignPage({ params: { locale, season } }: PageProps) {
  setRequestLocale(locale);

  const campaignConfig = campaigns[season as keyof typeof campaigns];

  if (!campaignConfig) {
    notFound();
  }

  const messages = await getMessages(locale);

  // Breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: `https://oac-digital.com/${locale}` },
    { name: 'Campaigns', url: `https://oac-digital.com/${locale}/campaigns` },
    { name: campaignConfig.title, url: `https://oac-digital.com/${locale}/campaigns/${season}` }
  ];

  return (
    <>
      {/* Structured Data */}
      <ServiceSchema
        service={{
          name: campaignConfig.title,
          description: campaignConfig.description,
          serviceType: 'MarketingService',
          provider: 'OAC Digital Innovations'
        }}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={campaignConfig.faqs} />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {campaignConfig.title}
          </h1>
          <p className="text-xl text-blue-600 mb-2">
            {campaignConfig.subtitle}
          </p>
          <p className="text-lg text-gray-600 mb-6 max-w-4xl mx-auto">
            {campaignConfig.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${locale}/contact`}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Start Your Campaign
            </a>
            <a
              href={`tel:+13053405282`}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Call (305) 340-5282
            </a>
          </div>
        </div>

        {/* Campaign Overview */}
        <div className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Season</h3>
              <p className="text-blue-600 font-medium">{campaignConfig.season}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Timeframe</h3>
              <p className="text-blue-600 font-medium">{campaignConfig.timeframe}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Target Industries</h3>
              <p className="text-blue-600 font-medium">{campaignConfig.industries.join(', ')}</p>
            </div>
          </div>
        </div>

        {/* Key Dates */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Important Dates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {campaignConfig.keyDates.map((date, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow border text-center">
                <h3 className="font-semibold text-lg">{date.event}</h3>
                <p className="text-blue-600">{date.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing Strategies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Marketing Strategies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {campaignConfig.strategies.map((strategy, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border">
                <h3 className="text-xl font-semibold mb-3">{strategy.name}</h3>
                <p className="text-gray-600 mb-4">{strategy.description}</p>
                <div className="flex justify-between text-sm">
                  <span><strong>Timeline:</strong> {strategy.timeline}</span>
                  <span className="text-green-600"><strong>ROI:</strong> {strategy.expectedROI}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tips */}
        <div className="mb-12 bg-yellow-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Pro Tips for Success</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {campaignConfig.tips.map((tip, index) => (
              <div key={index} className="flex items-start bg-white p-4 rounded-lg">
                <span className="text-yellow-500 text-xl mr-3">💡</span>
                <span className="text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {campaignConfig.faqs.map((faq, index) => (
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
            Ready to Launch Your {campaignConfig.season} Campaign?
          </h2>
          <p className="text-xl mb-6">
            Let OAC Digital create a custom {campaignConfig.season.toLowerCase()} marketing strategy that drives results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${locale}/contact`}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Get Your Custom Strategy
            </a>
            <a
              href={`/${locale}/portfolio`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              View Our Success Stories
            </a>
          </div>
        </div>
      </div>
    </>
  );
}