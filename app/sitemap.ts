import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://oac-digital.com';
  const locales = ['en', 'es'];

  // Core pages
  const corePages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: 'about', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: 'services', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: 'portfolio', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: 'contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: 'blog', priority: 0.6, changeFrequency: 'daily' as const },
    { path: 'resources/faqs', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: 'privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: 'terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  // Location pages
  const locations = [
    { path: 'locations/miami', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'locations/fort-lauderdale', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'locations/west-palm-beach', priority: 0.8, changeFrequency: 'monthly' as const },
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
      priority: 0.7,
      changeFrequency: 'monthly' as const
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
  const campaignPages = seasonalCampaigns.map(campaign => ({
    path: `campaigns/${campaign}`,
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

  // Combine all pages
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

  // Add blog post examples (these would be dynamically generated in a real implementation)
  const blogPosts = [
    'ai-web-design-trends-2025',
    'local-seo-miami-businesses',
    'chatbot-integration-guide',
    'next-js-vs-wordpress-performance',
    'schema-markup-best-practices'
  ];

  locales.forEach(locale => {
    blogPosts.forEach(post => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog/${post}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  });

  return sitemapEntries;
}
