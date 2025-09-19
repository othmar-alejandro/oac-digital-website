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
  webpack: (config, { dev, isServer }) => {
    // Fix for webpack module resolution issues
    config.resolve.fallback = {
      ...config.resolve.fallback,
    };

    return config;
  },
};

module.exports = withNextIntl(nextConfig); // Use the variable from require()
