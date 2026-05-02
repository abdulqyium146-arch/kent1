import Link from 'next/link'
import NAPBlock from '@/components/ui/NAPBlock'

// SEO: Next.js automatically returns HTTP 404 status — do NOT add noindex meta here.
// The page deliberately links to popular Kent towns + services to retain crawl value.
export default function NotFound() {
  const popularTowns = [
    { name: 'Maidstone', slug: 'maidstone' },
    { name: 'Canterbury', slug: 'canterbury' },
    { name: 'Folkestone', slug: 'folkestone' },
    { name: 'Dover', slug: 'dover' },
    { name: 'Tunbridge Wells', slug: 'tunbridge-wells' },
    { name: 'Ashford', slug: 'ashford' },
  ]

  const services = [
    { name: 'Drone Roof Survey', slug: 'roof-survey' },
    { name: 'Roof Condition Report', slug: 'roof-condition-report' },
    { name: 'Pre-Purchase Survey', slug: 'pre-purchase-roof-survey' },
    { name: 'Landlord Inspection', slug: 'landlord-roof-inspection' },
  ]

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-brand-600"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </div>

        <h1 className="text-5xl font-bold text-slate-900 mb-3">404</h1>
        <h2 className="text-2xl font-semibold text-slate-700 mb-3">Page Not Found</h2>
        <p className="text-slate-500 leading-relaxed mb-4">
          Looking for roof survey services in Kent? This page doesn&apos;t exist, but we cover
          54+ towns across Kent. Try one of the links below.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors"
          >
            Back to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
            Popular Kent Locations
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {popularTowns.map((town) => (
              <Link
                key={town.slug}
                href={`/locations/${town.slug}`}
                className="bg-slate-50 text-brand-700 hover:bg-brand-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors"
              >
                {town.name}
              </Link>
            ))}
          </div>
          <p className="mt-3 text-center">
            <Link href="/locations" className="text-brand-600 hover:underline text-sm font-medium">
              View all 54 Kent locations →
            </Link>
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
            Our Services
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-slate-50 text-brand-700 hover:bg-brand-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>

        <NAPBlock showAddress={false} showHours={false} className="justify-center text-center" />
      </div>
    </section>
  )
}
