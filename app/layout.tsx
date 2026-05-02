import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'
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

// SEO: Viewport export — ensures proper mobile scaling which affects Core Web Vitals
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1d4ed8',
}

// SEO: Base metadata — title template ensures every page gets "| RoofVue Kent" suffix,
// metadataBase enables absolute URL resolution for OG images and canonical tags
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://citywideroofing.info').replace(/\/$/, '')

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'RoofVue | Drone Roof Surveys Kent',
    template: '%s | RoofVue Kent',
  },
  description:
    'Professional drone roof surveys across all of Kent. RoofVue covers Maidstone, Canterbury, Folkestone, Dover and 50+ Kent towns. CAA-licensed pilots. No scaffolding. PDF report in 48hrs.',
  keywords: [
    'drone roof survey Kent',
    'roof inspection Kent',
    'roof condition report Kent',
    'CAA licensed drone pilots Kent',
    'pre-purchase roof survey Kent',
    'landlord roof inspection Kent',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'RoofVue',
    images: [{ url: '/images/roofvue-og.jpg', width: 1200, height: 630, alt: 'RoofVue — Drone Roof Surveys Kent' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

// SEO: WebSite JSON-LD with SearchAction — enables Google Sitelinks search box
// in branded SERP listings, increasing brand SERP real-estate
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'RoofVue',
  url: SITE_URL,
  description: 'Professional drone roof surveys across Kent, UK',
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
        <LocalBusinessSchema pageUrl="https://roofvue.co.uk" />
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
