import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OAC Digital',
    short_name: 'OAC',
    description: 'OAC Digital is a digital marketing agency specializing in web design, SEO, and content creation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/images/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
