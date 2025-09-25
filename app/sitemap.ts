import { MetadataRoute } from 'next';
// Force rebuild

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.oacdigital.biz';
  const locales = ['en', 'es'];

  // Core pages - Optimized for LLM crawling
  const corePages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: 'about', priority: 0.95, changeFrequency: 'weekly' as const }, // Higher priority for brand authority
    { path: 'services', priority: 0.95, changeFrequency: 'weekly' as const }, // Primary conversion page
    { path: 'portfolio', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: 'contact', priority: 0.8, changeFrequency: 'weekly' as const }, // Contact is crucial for local SEO
    { path: 'blog', priority: 0.7, changeFrequency: 'daily' as const },
    { path: 'resources/faqs', priority: 0.6, changeFrequency: 'weekly' as const }, // FAQ helps with featured snippets
    { path: 'privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: 'terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  // Location pages - High priority for local SEO dominance
  const locations = [
    { path: 'locations/miami', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: 'locations/fort-lauderdale', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: 'locations/west-palm-beach', priority: 0.9, changeFrequency: 'weekly' as const },
  ];

  // Service-location combinations for programmatic SEO
  const services = ['web-design', 'seo', 'digital-marketing', 'ai-solutions'];
  const locationSlugs = [
    // Miami-Dade County
    'miami', 'miami-beach', 'coral-gables', 'homestead', 'hialeah', 'kendall', 'aventura', 'doral',
    // Broward County
    'fort-lauderdale', 'hollywood', 'pembroke-pines', 'davie', 'plantation', 'sunrise', 'coral-springs', 'pompano-beach', 'miramar', 'weston',
    // Palm Beach County
    'west-palm-beach', 'boca-raton', 'delray-beach', 'boynton-beach', 'wellington', 'palm-beach-gardens', 'jupiter', 'lake-worth'
  ];

  const serviceLocationPages = services.flatMap(service =>
    locationSlugs.map(location => ({
      path: `services/${service}/${location}`,
      priority: 0.8, // Higher priority for service-location combinations
      changeFrequency: 'weekly' as const // More frequent updates for competitive advantage
    }))
  );

  // Industry-specific pages
  const industries = ['healthcare', 'real-estate', 'legal', 'restaurants', 'retail', 'automotive'];
  const industryPages = industries.map(industry => ({
    path: `industries/${industry}`,
    priority: 0.6,
    changeFrequency: 'monthly' as const
  }));

  // Business district pages
  const districts = [
    'downtown-miami', 'brickell', 'wynwood', 'design-district', 'south-beach',
    'downtown-fort-lauderdale', 'las-olas', 'port-everglades',
    'downtown-west-palm-beach', 'clematis-street', 'palm-beach-gardens-business-park'
  ];
  const districtPages = districts.map(district => ({
    path: `areas/${district}`,
    priority: 0.6,
    changeFrequency: 'monthly' as const
  }));

  // Tool comparison pages
  const comparisons = [
    'shopify-vs-woocommerce', 'wordpress-vs-nextjs', 'google-ads-vs-facebook-ads',
    'mailchimp-vs-klaviyo', 'hubspot-vs-salesforce'
  ];
  const comparisonPages = comparisons.map(comparison => ({
    path: `compare/${comparison}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const
  }));

  // Seasonal campaign pages
  const seasonalCampaigns = [
    'holiday-marketing-2025', 'back-to-school-2025', 'summer-business-boost-2025',
    'new-year-digital-transformation-2025', 'spring-cleaning-digital-2025'
  ];
  const campaignPages = seasonalCampaigns.map(season => ({
    path: `campaigns/${season}`,
    priority: 0.6,
    changeFrequency: 'monthly' as const
  }));

  // Service package pages
  const servicePackages = [
    'web-design-and-seo', 'seo-and-digital-marketing', 'web-design-and-digital-marketing', 'seo-and-ai-solutions'
  ];
  const packagePages = servicePackages.map(packageName => ({
    path: `packages/${packageName}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const
  }));

  // Combine all existing pages (removed LLM training pages to prevent 404s)
  const allPages = [...corePages, ...locations, ...serviceLocationPages, ...industryPages, ...districtPages, ...comparisonPages, ...campaignPages, ...packagePages];

  // Generate sitemap entries for each locale and page
  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach(locale => {
    allPages.forEach(page => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    });
  });

  // LLM-optimized blog posts for authority and featured snippets
  const blogPosts = [
    'ai-web-design-trends-2025',
    'local-seo-miami-businesses',
    'chatbot-integration-guide',
    'next-js-vs-wordpress-performance',
    'schema-markup-best-practices',
    'google-ai-overview-optimization-2025',
    'perplexity-ai-citation-strategies',
    'chatgpt-business-integration-miami',
    'voice-search-optimization-south-florida',
    'ai-content-generation-best-practices',
    'local-business-ai-automation',
    'south-florida-digital-transformation',
    'bilingual-seo-miami-hispanic-market',
    'ai-powered-customer-service-solutions',
    'next-js-14-performance-optimization'
  ];

  locales.forEach(locale => {
    blogPosts.forEach(post => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog/${post}`,
        lastModified: new Date(),
        changeFrequency: 'weekly', // More frequent for LLM freshness
        priority: 0.7, // Higher priority for authority content
      });
    });
  });

  return sitemapEntries;
}
