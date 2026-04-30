import type { MetadataRoute } from 'next'
import { BUSINESS } from '@/lib/schema'

const base = BUSINESS.url

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,                                             lastModified: now, changeFrequency: 'weekly',  priority: 1.0  },
    { url: `${base}/roof-inspection-kent`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/roof-survey-kent`,                       lastModified: now, changeFrequency: 'monthly', priority: 0.9  },
    { url: `${base}/roof-leak-detection-kent`,               lastModified: now, changeFrequency: 'monthly', priority: 0.9  },
    { url: `${base}/drone-roof-inspection-kent`,             lastModified: now, changeFrequency: 'monthly', priority: 0.9  },
    { url: `${base}/roof-inspection-cost-kent`,              lastModified: now, changeFrequency: 'monthly', priority: 0.9  },
    { url: `${base}/commercial-roof-inspection-kent`,        lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/residential-roof-inspection-kent`,       lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/gutter-inspection-kent`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.8  },
    { url: `${base}/storm-damage-roof-inspection-kent`,      lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/about`,                                  lastModified: now, changeFrequency: 'yearly',  priority: 0.7  },
    { url: `${base}/contact`,                                lastModified: now, changeFrequency: 'yearly',  priority: 0.8  },
    { url: `${base}/blog`,                                   lastModified: now, changeFrequency: 'weekly',  priority: 0.75 },
    { url: `${base}/blog/roof-inspection-cost-kent`,         lastModified: now, changeFrequency: 'monthly', priority: 0.7  },
    { url: `${base}/blog/how-to-check-roof-for-leaks`,       lastModified: now, changeFrequency: 'monthly', priority: 0.7  },
    { url: `${base}/blog/roof-survey-before-buying-house`,   lastModified: now, changeFrequency: 'monthly', priority: 0.7  },
    { url: `${base}/blog/benefits-drone-roof-inspections`,   lastModified: now, changeFrequency: 'monthly', priority: 0.7  },
  ]

  return staticRoutes
}
