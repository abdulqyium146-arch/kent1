import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav'
import ServiceCard from '@/components/ui/ServiceCard'
import TrustBadges from '@/components/ui/TrustBadges'
import NAPBlock from '@/components/ui/NAPBlock'
import CTABanner from '@/components/ui/CTABanner'
import { kentLocations, getLocationBySlug, getNearbyLocations } from '@/lib/locations'
import { roofvueServices } from '@/lib/services'
import { getLocationFAQs } from '@/lib/faq-data'
import {
  generateLocationTitle,
  generateLocationMetaDescription,
  getBreadcrumbs,
} from '@/lib/seo-utils'

// SEO: generateStaticParams tells Next.js to pre-render all 54 location pages at
// build time — zero server latency on first load and full Googlebot cache coverage.
export function generateStaticParams() {
  return kentLocations.map((l) => ({ location: l.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { location: string }
}): Promise<Metadata> {
  const location = getLocationBySlug(params.location)
  if (!location) return {}

  const title = generateLocationTitle(location)
  const description = generateLocationMetaDescription(location)
  const canonicalUrl = `https://roofvue.co.uk/locations/${location.slug}`

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
    },
  }
}

export default function LocationPage({ params }: { params: { location: string } }) {
  const location = getLocationBySlug(params.location)
  if (!location) notFound()

  const faqs = getLocationFAQs(location.slug, location.name)
  const nearbyLocations = getNearbyLocations(location.slug, 5)
  const breadcrumbs = getBreadcrumbs(`/locations/${location.slug}`)

  // SEO: Unique intro built from real town data (landmarks + propertyTypes + description)
  // — prevents thin-content penalties across 54 pages
  const [propertyType1, propertyType2] = location.propertyTypes
  const [landmark1, landmark2] = location.landmarks

  return (
    <>
      <LocalBusinessSchema
        overrideGeo={{ lat: location.lat, lng: location.lng }}
        overrideLocation={location.name}
        pageUrl={`https://roofvue.co.uk/locations/${location.slug}`}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="bg-slate-50 border-b border-slate-200 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <BreadcrumbNav items={breadcrumbs} />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 bg-gradient-to-br from-brand-900 to-brand-700 text-white">
        <div className="max-w-7xl mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            {location.region} · {location.postcodePrefix}
          </div>
          {/* SEO: H1 = [Service] + [Town] + Kent — the exact target keyword for this page */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Drone Roof Survey in {location.name}, Kent
          </h1>
          <p className="text-brand-100 text-lg leading-relaxed max-w-2xl">
            Professional CAA-licensed drone roof inspections in {location.name}. No ladders, no
            scaffolding — just a detailed aerial survey and a PDF report within 48 hours.
          </p>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4 text-slate-600 leading-relaxed">
              {/* SEO: Unique per-town intro using landmarks and propertyTypes */}
              <p>
                RoofVue provides professional drone roof surveys in {location.name}, Kent. Whether
                you own a{' '}
                <strong className="text-slate-800">{propertyType1}</strong> near{' '}
                <strong className="text-slate-800">{landmark1}</strong> or a{' '}
                <strong className="text-slate-800">{propertyType2}</strong> in the{' '}
                {location.postcodePrefix} area, our CAA-licensed pilots can inspect your roof
                safely without scaffolding.
              </p>
              <p>
                {location.description} Our Maidstone-based team is well-placed to cover{' '}
                {location.name} and all surrounding {location.postcodePrefix} postcodes, typically
                scheduling surveys within 3–5 working days of booking.
              </p>
              <p>
                All surveys are conducted by CAA-licensed drone pilots and include a professionally
                formatted PDF report with HD annotated imagery, delivered to your inbox within 48
                hours of the survey. We also identify the nearby{' '}
                <strong className="text-slate-800">{landmark2}</strong> area as a common reference
                point when coordinating access for {location.name} properties.
              </p>
              <p>
                Whether you are a homeowner, home buyer, landlord or property manager in{' '}
                {location.name}, we have a service designed for your needs. Browse the options
                below or{' '}
                <Link href="/contact" className="text-brand-600 hover:underline font-medium">
                  contact us directly
                </Link>{' '}
                for a same-day quote.
              </p>
            </div>
            <div>
              <TrustBadges />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services in this town ─────────────────────────────────────────── */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            Our Services in {location.name}
          </h2>
          <p className="text-slate-500 mb-8">
            All four RoofVue services are available in {location.name} and across the{' '}
            {location.postcodePrefix} postcode area.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {roofvueServices.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                locationSlug={location.slug}
                showPrice
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why RoofVue in this town ──────────────────────────────────────── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Why {location.name} Homeowners Choose RoofVue
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'No scaffolding costs',
                body: `Scaffold erection in ${location.name} can cost £800–£2,000 before any survey work begins. Our drone surveys deliver a more detailed inspection for a fraction of that cost.`,
              },
              {
                title: 'CAA-licensed pilots',
                body: `Every RoofVue pilot operating in ${location.name} holds a CAA Flyer ID and Operator ID. We comply fully with UK drone regulations on every survey.`,
              },
              {
                title: 'Local Kent expertise',
                body: `Based in Maidstone, we understand the specific property types and roofing challenges in ${location.name} and across the ${location.region} area.`,
              },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <h3 className="font-semibold text-slate-900 mb-2">✓ {item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            Common Questions About Roof Surveys in {location.name}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-slate-200 rounded-xl bg-white overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-semibold text-slate-900">
                  {faq.question}
                  <span className="text-brand-600 text-xl flex-shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SEO: Nearby locations section = internal linking hub for PageRank flow */}
      {nearbyLocations.length > 0 && (
        <section className="py-14 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl font-bold text-slate-900 mb-5">
              Areas Near {location.name} We Also Cover
            </h2>
            <div className="flex flex-wrap gap-3">
              {nearbyLocations.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/locations/${nearby.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-200 text-sm text-brand-700 hover:bg-brand-50 hover:border-brand-300 transition-colors font-medium"
                >
                  {nearby.name}
                  <span className="text-slate-400 text-xs">{nearby.postcodePrefix}</span>
                </Link>
              ))}
              <Link
                href="/locations"
                className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-slate-100 text-sm text-slate-600 hover:bg-slate-200 transition-colors font-medium"
              >
                View all Kent locations →
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-10 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <NAPBlock showAddress showHours />
        </div>
      </section>

      <section className="px-4 pb-16 pt-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <CTABanner
            heading={`Book Your Roof Survey in ${location.name} Today`}
            subtext={`CAA-licensed · No scaffolding · 48hr PDF report · Covering ${location.name} & all ${location.postcodePrefix} postcodes`}
            primaryLabel="Book a Survey"
            primaryHref="/contact"
            secondaryLabel="View all Services"
            secondaryHref="/services"
          />
        </div>
      </section>
    </>
  )
}
