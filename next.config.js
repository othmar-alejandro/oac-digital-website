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
  // Old portfolio entries had no real page behind them; send them to the Work index.
  async redirects() {
    return [
      { source: '/:locale(en|es)/portfolio/:slug(ai-podcast-creator|ai-crm-dashboard|general-contractor-website)', destination: '/:locale/portfolio', permanent: true },
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
