import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://oac-digital.com';

  // Assuming 'en' as the default locale, you might want to generate sitemaps for all locales
  const locale = 'en';

  const pages = [
    '',
    'about',
    'blog',
    'contact',
    'portfolio',
    'privacy-policy',
    'resources/faqs',
    'services',
    'terms-of-service',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${baseUrl}/${locale}/${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly', // Default change frequency
    priority: page === '' ? 1.0 : 0.8, // Higher priority for the homepage
  }));

  return sitemapEntries;
}
