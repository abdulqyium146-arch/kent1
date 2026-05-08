import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'
import OrganizationSchema from '@/components/seo/OrganizationSchema'
import NAPBlock from '@/components/ui/NAPBlock'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

// SEO: Viewport + theme-color — amber matches brand, shows in browser chrome and
// Android status bar. Matching theme_color in manifest.ts is required for install prompts.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f59e0b' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

// SEO: Base metadata — title template ensures every page gets "| RoofVue Kent" suffix,
// metadataBase enables absolute URL resolution for OG images and canonical tags
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://citywideroofing.info').replace(/\/$/, '')

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'RoofVue | Independent Roof Surveys Kent',
    template: '%s | RoofVue',
  },
  description:
    'RoofVue provides independent, unbiased roof surveys across Kent. Residential surveys, drone inspections, home buyer reports, commercial assessments and insurance reports. From £149.',
  keywords: [
    'independent roof survey Kent',
    'roof survey Kent',
    'home buyer roof report Kent',
    'commercial roof survey Kent',
    'insurance roof assessment Kent',
    'drone roof inspection Kent',
    'landlord roof inspection Kent',
    'roof condition report Kent',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'RoofVue',
    images: [{ url: '/images/roofvue-og.jpg', width: 1200, height: 630, alt: 'RoofVue — Independent Roof Surveys Kent' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  // SEO: Explicit icon declarations for all sizes — ensures Google finds and displays
  // the favicon in SERPs. Without these, Google may show a generic globe icon.
  icons: {
    icon: [
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/images/favicon.ico',
    apple: [
      { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/icon.svg', color: '#f59e0b' },
    ],
  },
}

// SEO: WebSite JSON-LD with SearchAction — enables Google Sitelinks search box
// in branded SERP listings, increasing brand SERP real-estate
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'RoofVue',
  url: SITE_URL,
  description: 'Independent, unbiased roof surveys for homeowners, buyers, landlords and businesses across Kent.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/locations/{search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        {/* SEO: LocalBusiness schema on every page — core local SEO signal */}
        <LocalBusinessSchema pageUrl="/" />
        {/* SEO: Organization schema — establishes entity authority with knowsAbout + hasCredential */}
        <OrganizationSchema />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-brand-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        {/* SEO: NAPBlock in footer — microdata NAP reinforces JSON-LD with a second signal */}
        <div className="bg-slate-900 border-t border-slate-800 py-6 px-4">
          <div className="max-w-7xl mx-auto">
            <NAPBlock
              showAddress
              showHours
              className="[&_p]:text-slate-400 [&_a]:text-brand-400 [&_.font-semibold]:text-white"
            />
          </div>
        </div>
      </body>
    </html>
  )
}
