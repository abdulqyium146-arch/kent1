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
  return {
    title,
    description,
    alternates: { canonical: `/locations/${location.slug}` },
    openGraph: {
      title,
      description,
      url: `/locations/${location.slug}`,
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
        pageUrl={`/locations/${location.slug}`}
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
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            {location.region} · {location.postcodePrefix} · Independent Surveys
          </div>
          {/* SEO: H1 = [Service] + [Town] + Kent — the exact target keyword for this page */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Independent Roof Survey in {location.name}, Kent
          </h1>
          <p className="speakable-intro text-brand-100 text-lg leading-relaxed max-w-2xl">
            RoofVue provides independent, unbiased roof surveys in {location.name} — residential,
            drone, home buyer, commercial, insurance and landlord. No repair teams, no sales agenda.
            PDF report within 48 hours.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-accent-500/20 text-accent-300 border border-accent-500/30 px-3 py-1 rounded-full text-sm font-medium">
              Completely Independent
            </span>
            <span className="bg-white/10 text-white/80 border border-white/20 px-3 py-1 rounded-full text-sm">
              From £149
            </span>
            <span className="bg-white/10 text-white/80 border border-white/20 px-3 py-1 rounded-full text-sm">
              Report in 48 Hours
            </span>
          </div>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4 text-slate-600 leading-relaxed">
              {/* SEO: Unique per-town intro using landmarks and propertyTypes */}
              <p>
                RoofVue provides independent roof surveys in {location.name}, Kent. Whether you own
                a <strong className="text-slate-800">{propertyType1}</strong> near{' '}
                <strong className="text-slate-800">{landmark1}</strong> or a{' '}
                <strong className="text-slate-800">{propertyType2}</strong> in the{' '}
                {location.postcodePrefix} area, our surveyors deliver an honest, unbiased assessment
                with no conflict of interest — we have no repair teams and no contractor affiliates.
              </p>
              <p>
                {location.description} Our Maidstone base gives us excellent coverage across all of{' '}
                {location.region}, typically allowing us to schedule surveys in {location.name}
                within 3–5 working days of booking.
              </p>
              <p>
                Every survey includes a professionally formatted PDF report delivered to your inbox
                within 48 hours. For properties near{' '}
                <strong className="text-slate-800">{landmark2}</strong> and across the{' '}
                {location.postcodePrefix} postcode area, we use a combination of drone aerial
                inspection and ground-level assessment to give you a complete picture.
              </p>
              <p>
                Whether you are a homeowner, home buyer, landlord or commercial property owner in{' '}
                {location.name}, we have an independent survey service designed for your needs.
                Browse the options below or{' '}
                <Link href="/contact" className="text-accent-600 hover:underline font-medium">
                  contact us
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
            All six RoofVue services are available in {location.name} and across the{' '}
            {location.postcodePrefix} postcode area.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                title: 'Genuinely independent',
                body: `RoofVue has no repair teams and no contractor affiliates in ${location.name}. Our surveyors are paid to assess — not to sell repairs. You get an honest opinion every time.`,
              },
              {
                title: 'CAA-licensed drone pilots',
                body: `Every RoofVue pilot operating in ${location.name} holds a CAA Flyer ID and Operator ID. Drone inspection eliminates scaffolding costs and gives you full aerial coverage of your roof.`,
              },
              {
                title: 'Local Kent expertise',
                body: `Based in Maidstone, we understand the property types and roofing challenges in ${location.name} and across the ${location.region} area. We typically schedule within 3–5 working days.`,
              },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl border border-slate-200 bg-white">
                <div className="w-8 h-8 rounded-lg bg-accent-500/10 flex items-center justify-center mb-3">
                  <span className="text-accent-600 font-bold text-sm">✓</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
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
                  <span className="text-accent-500 text-xl flex-shrink-0 group-open:rotate-45 transition-transform">
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
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors font-medium"
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
