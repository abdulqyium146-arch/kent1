/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    remotePatterns: [],
  },

  async headers() {
    return [
      {
        // SEO: Security headers improve trust signals and protect user data
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)',
          },
          // SEO: HSTS forces HTTPS — required for Google's "secure" ranking signal
          // max-age=63072000 = 2 years (HSTS preload list minimum is 1 year)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
      {
        // SEO: Immutable cache on hashed Next.js assets = perfect Lighthouse caching score
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  async redirects() {
    // SEO: 301 redirects from old generic location pages preserve any existing link equity
    // and prevent duplicate content issues. All old city pages redirect to /locations hub.
    const oldCityPages = [
      'london',
      'manchester',
      'birmingham',
      'leeds',
      'liverpool',
      'sheffield',
      'bristol',
      'edinburgh',
      'cardiff',
      'nottingham',
    ]

    return oldCityPages.map((city) => ({
      source: `/locations/${city}`,
      destination: '/locations',
      permanent: true,
    }))
  },
}

module.exports = nextConfig
