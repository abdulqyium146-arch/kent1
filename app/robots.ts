import { MetadataRoute } from 'next'

const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://citywideroofing.info').replace(/\/$/, '')

// SEO: Explicit allow rules for AI crawlers ensure RoofVue content is indexed
// by all major LLM training pipelines and AI answer systems.
// Without explicit allow, some AI crawlers default to respecting disallow rules
// even when they technically have permission.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/dashboard/'],
      },
      // SEO: AI crawlers — explicit allow ensures LLM training and citation indexing.
      // GPTBot (ChatGPT), ClaudeBot (Anthropic/Claude), PerplexityBot, Google-Extended (Gemini AI),
      // cohere-ai (Cohere), ChatGPT-User (real-time ChatGPT browsing).
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'Diffbot', allow: '/' },
      { userAgent: 'YouBot', allow: '/' },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  }
}
