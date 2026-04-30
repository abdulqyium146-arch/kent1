import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { localBusinessSchema, BUSINESS } from '@/lib/schema'

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

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: 'Kent Roof Inspections | Professional Roof Survey & Leak Detection',
    template: '%s | Kent Roof Inspections',
  },
  description:
    'Expert roof inspections, roof surveys and roof leak detection across Kent. Serving Canterbury, Maidstone, Ashford & Dartford. Fully insured, RICS affiliated. Free quotes.',
  keywords: [
    'roof inspection Kent',
    'roof survey Kent',
    'roof leak detection Kent',
    'drone roof inspection Kent',
    'roof inspection Canterbury',
    'roof inspection Maidstone',
    'roof inspection Ashford',
    'roof inspection Dartford',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: BUSINESS.name,
    images: [{ url: '/images/kent-roof-inspections-og.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: { canonical: BUSINESS.url },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
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
      </body>
    </html>
  )
}
