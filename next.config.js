const withNextIntl = require('next-intl/plugin')(
  './i18n.ts' // Path to your i18n configuration file
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Remains removed
  images: { unoptimized: true }, // Keep images unoptimized for now if needed
  // Add other Next.js config options here if needed
};

module.exports = withNextIntl(nextConfig); // Use the variable from require()
