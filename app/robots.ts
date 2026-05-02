import { MetadataRoute } from 'next'

// SEO: robots.ts blocks crawl of internal/admin paths that would waste crawl budget
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/dashboard/'],
      },
    ],
    sitemap: 'https://roofvue.co.uk/sitemap.xml',
    host: 'https://roofvue.co.uk',
  }
}
