import { MetadataRoute } from 'next';
import { SERVICES } from '@/lib/services';
import { USE_CASES } from '@/lib/use-cases';
import { CASE_STUDIES } from '@/lib/work';
import { VERTICALS } from '@/lib/verticals';
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
    { path: 'use-cases', priority: 0.9, changeFrequency: 'weekly' as const },
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
  const industries = Array.from(new Set([...VERTICALS.map((v) => v.slug), 'legal', 'restaurants', 'retail', 'automotive']));
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

  // Combine all existing pages (removed LLM training pages to prevent 404s)
  // Service and use case pages from the data files
  const servicePages = [...SERVICES.map((s) => s.slug), 'digital-marketing', 'ai-solutions'].map((slug) => ({ path: `services/${slug}`, priority: 0.9, changeFrequency: 'weekly' as const }));
  const workPages = CASE_STUDIES.map((c) => ({ path: `portfolio/${c.slug}`, priority: 0.8, changeFrequency: 'monthly' as const }));
  const useCasePages = USE_CASES.map((u) => ({ path: `use-cases/${u.slug}`, priority: 0.8, changeFrequency: 'monthly' as const }));

  const allPages = [...servicePages, ...useCasePages, ...workPages, ...corePages, ...locations, ...serviceLocationPages, ...industryPages, ...districtPages];

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

  return sitemapEntries;
}
