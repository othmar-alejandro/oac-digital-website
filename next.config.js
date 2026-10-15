const withNextIntl = require('next-intl/plugin')(
  './i18n.ts' // Path to your i18n configuration file
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['oac-digital.com', 'www.oacdigital.biz'],
  },
  // Placeholder and cut pages. Redirects, not 404s, so old links and indexed URLs land somewhere relevant.
  // Without a locale in the path the redirect runs before the locale middleware, so those get their own rule.
  async redirects() {
    const L = '/:locale(en|es)';
    const to = (from, dest) => [
      { source: `${L}${from}`, destination: `/:locale${dest}`, permanent: true },
      { source: from, destination: dest || '/', permanent: true },
    ];
    return [
      // Old portfolio entries had no real page behind them; send them to the Work index.
      { source: `${L}/portfolio/:slug(ai-podcast-creator|ai-crm-dashboard|general-contractor-website)`, destination: '/:locale/portfolio', permanent: true },
      ...to('/compare/:path*', '/services'),
      ...to('/packages/:path*', '/services'),
      ...to('/campaigns/:path*', ''),
      // The blog had no articles, only placeholders.
      ...to('/blog', '/services'),
      ...to('/blog/:path*', '/services'),
    ];
  },
  webpack: (config, { dev, isServer }) => {
    // Fix for webpack module resolution issues
    config.resolve.fallback = {
      ...config.resolve.fallback,
    };

    return config;
  },
};

module.exports = withNextIntl(nextConfig); // Use the variable from require()
