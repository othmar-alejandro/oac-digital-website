const withNextIntl = require('next-intl/plugin')(
  './i18n.ts' // Path to your i18n configuration file
);

/** @type {import('next').NextConfig} */
const nextConfig = {
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
    domains: ['oac-digital.com'],
  },
};

module.exports = withNextIntl(nextConfig); // Use the variable from require()
