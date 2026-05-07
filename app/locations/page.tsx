import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ItemListSchema from '@/components/seo/ItemListSchema'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav'
import LocationGrid from '@/components/ui/LocationGrid'
import NAPBlock from '@/components/ui/NAPBlock'
import CTABanner from '@/components/ui/CTABanner'
import { kentLocations } from '@/lib/locations'
import { getBreadcrumbs } from '@/lib/seo-utils'

// SEO: Locations hub is the cornerstone page for the entire location architecture.
// It links to all 54 Kent town pages and receives links from the homepage.
export const metadata: Metadata = {
  title: 'Drone Roof Surveys Across Kent | All Areas Covered | RoofVue',
  description:
    'RoofVue covers every town in Kent. Professional drone roof surveys in Maidstone, Canterbury, Folkestone, Dover, Tunbridge Wells and 50+ more Kent locations.',
  alternates: {
    canonical: '/locations',
  },
  openGraph: {
    title: 'Drone Roof Surveys Across Kent | All Areas Covered | RoofVue',
    description:
      'RoofVue covers every town in Kent. Drone roof surveys from £149 with 48hr PDF reports.',
    url: '/locations',
  },
}

export default function LocationsPage() {
  const breadcrumbs = getBreadcrumbs('/locations')

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      {/* SEO: ItemList schema for hub page — signals to Google this page is an index
          of location-specific service pages, boosting crawl priority for all children */}
      <ItemListSchema locations={kentLocations} />

      <div className="bg-slate-50 border-b border-slate-200 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <BreadcrumbNav items={breadcrumbs} />
        </div>
      </div>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* SEO: H1 includes both "Drone Roof Surveys" and "Kent" */}
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Drone Roof Surveys Across Kent
          </h1>

          <div className="prose prose-slate max-w-3xl mb-10">
            <p className="text-lg text-slate-600 leading-relaxed">
              RoofVue provides professional drone roof surveys across the entire county of Kent —
              from the Medway towns and North Kent Thames corridor through Maidstone and the
              Weald, east to Canterbury and the Thanet coast, south to Folkestone, Hythe and the
              Romney Marsh. Whether your property is in a busy market town or a quiet rural
              village, our CAA-licensed pilots can inspect your roof safely without any scaffolding.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              We cover all Kent postcodes — ME, CT, TN, DA and BR — and operate from our
              Maidstone base, meaning we can reach any corner of Kent efficiently. Every survey
              results in a professionally formatted HD PDF report delivered within 48 hours. Choose
              your town below to find out more about our drone roof survey services in your area.
            </p>
          </div>

          {/* SEO: All 54 Kent town links grouped by region — powers internal link equity */}
          <LocationGrid groupByRegion />

          <div className="mt-10 p-6 rounded-xl bg-slate-50 border border-slate-200">
            <p className="text-slate-700">
              <strong>Don&apos;t see your town?</strong> We cover all of Kent, including smaller
              villages and rural parishes not listed above.{' '}
              <a href="/contact" className="text-brand-600 hover:underline font-medium">
                Get in touch
              </a>{' '}
              and we will confirm coverage for your exact postcode.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <NAPBlock showAddress showHours />
        </div>
      </section>

      <section className="px-4 pb-16 pt-4">
        <div className="max-w-7xl mx-auto">
          <CTABanner
            heading="Ready to Book Your Kent Roof Survey?"
            subtext="CAA-licensed pilots · No scaffolding · 48hr PDF report · All Kent postcodes covered"
            primaryLabel="Book a Survey"
            primaryHref="/contact"
            secondaryLabel="View Services"
            secondaryHref="/services"
          />
        </div>
      </section>
    </>
  )
}
