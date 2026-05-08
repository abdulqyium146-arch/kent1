import { MetadataRoute } from 'next'
import { kentLocations } from '@/lib/locations'
import { roofvueServices } from '@/lib/services'

// SEO: Pull site URL from env so the same codebase works on any domain.
// Set NEXT_PUBLIC_SITE_URL in Vercel → Settings → Environment Variables.
const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://citywideroofing.info').replace(/\/$/, '')

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // ── Core pages (8) ──────────────────────────────────────────────────────────
  const corePages: MetadataRoute.Sitemap = [
    { url: SITE + '/',           lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: SITE + '/services',   lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: SITE + '/locations',  lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: SITE + '/pricing',    lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: SITE + '/about',      lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: SITE + '/contact',    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: SITE + '/faq',        lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: SITE + '/blog',       lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
  ]

  // ── Service pages (4) ────────────────────────────────────────────────────────
  const servicePages: MetadataRoute.Sitemap = roofvueServices.map((s) => ({
    url: SITE + '/services/' + s.slug,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  // ── Kent location hub pages (54) ─────────────────────────────────────────────
  const locationPages: MetadataRoute.Sitemap = kentLocations.map((l) => ({
    url: SITE + '/locations/' + l.slug,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  // ── Kent location × service pages (54 × 4 = 216) ────────────────────────────
  const locationServicePages: MetadataRoute.Sitemap = kentLocations.flatMap((l) =>
    roofvueServices.map((s) => ({
      url: SITE + '/locations/' + l.slug + '/' + s.slug,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  )

  // ── Blog posts (4) ───────────────────────────────────────────────────────────
  const blogPosts: MetadataRoute.Sitemap = [
    {
      url: SITE + '/blog/roof-survey-before-buying-a-house',
      lastModified: new Date('2024-11-12'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: SITE + '/blog/how-to-spot-roof-damage',
      lastModified: new Date('2024-10-28'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: SITE + '/blog/landlord-roof-maintenance-guide',
      lastModified: new Date('2024-10-05'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: SITE + '/blog/flat-roof-inspection-guide',
      lastModified: new Date('2024-09-18'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]

  // Total: 8 + 6 + 54 + 324 + 4 = 396 URLs
  return [...corePages, ...servicePages, ...locationPages, ...locationServicePages, ...blogPosts]
}
