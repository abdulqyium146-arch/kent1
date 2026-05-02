import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ServiceSchema from '@/components/seo/ServiceSchema'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav'
import ServiceCard from '@/components/ui/ServiceCard'
import NAPBlock from '@/components/ui/NAPBlock'
import CTABanner from '@/components/ui/CTABanner'
import { kentLocations, getLocationBySlug, getNearbyLocations } from '@/lib/locations'
import { roofvueServices, getServiceBySlug } from '@/lib/services'
import { getLocationServiceFAQs } from '@/lib/faq-data'
import {
  generateLocationTitle,
  generateLocationMetaDescription,
  getBreadcrumbs,
} from '@/lib/seo-utils'

// SEO: 216 static params (54 towns × 4 services) — every location+service combination
// gets a pre-rendered page targeting the exact "[Service] in [Town], Kent" keyword
export function generateStaticParams() {
  return kentLocations.flatMap((l) =>
    roofvueServices.map((s) => ({ location: l.slug, service: s.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: { location: string; service: string }
}): Promise<Metadata> {
  const location = getLocationBySlug(params.location)
  const service = getServiceBySlug(params.service)
  if (!location || !service) return {}

  // SEO: Unique title and description per location+service combo — 216 unique meta pairs
  const title = generateLocationTitle(location, service)
  const description = generateLocationMetaDescription(location, service)
  const canonicalUrl = `https://roofvue.co.uk/locations/${location.slug}/${service.slug}`

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: { title, description, url: canonicalUrl },
  }
}

export default function LocationServicePage({
  params,
}: {
  params: { location: string; service: string }
}) {
  const location = getLocationBySlug(params.location)
  const service = getServiceBySlug(params.service)
  if (!location || !service) notFound()

  const faqs = getLocationServiceFAQs(location.name, service.name)
  const nearbyLocations = getNearbyLocations(location.slug, 3)
  const otherServices = roofvueServices.filter((s) => s.slug !== service.slug)
  const breadcrumbs = getBreadcrumbs(`/locations/${location.slug}/${service.slug}`)

  // SEO: Unique 180-word intro built from service + location data — prevents thin content
  const [propertyType1, propertyType2, propertyType3] = location.propertyTypes
  const [landmark1] = location.landmarks

  return (
    <>
      <LocalBusinessSchema
        overrideGeo={{ lat: location.lat, lng: location.lng }}
        overrideLocation={location.name}
        pageUrl={`https://roofvue.co.uk/locations/${location.slug}/${service.slug}`}
      />
      <ServiceSchema service={service} locationName={location.name} />
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
            {location.region} · {location.postcodePrefix} · {service.price}
          </div>
          {/* SEO: H1 = "[Service.name] in [Town], Kent" — exact match for location+service keyword */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {service.name} in {location.name}, Kent
          </h1>
          <p className="text-brand-100 text-lg max-w-2xl leading-relaxed">
            {service.tagline}. CAA-licensed drone pilots covering {location.name} and surrounding{' '}
            {location.postcodePrefix} postcodes. PDF report within 48 hours.
          </p>
        </div>
      </section>

      {/* ── Unique intro ──────────────────────────────────────────────────── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4 text-slate-600 leading-relaxed">
              <p>
                RoofVue&apos;s <strong className="text-slate-800">{service.name}</strong> service
                is available across {location.name} and all surrounding {location.postcodePrefix}{' '}
                postcodes. Whether you need to inspect a{' '}
                <strong className="text-slate-800">{propertyType1}</strong> near{' '}
                <strong className="text-slate-800">{landmark1}</strong>, a{' '}
                <strong className="text-slate-800">{propertyType2}</strong> in the town centre, or
                a{' '}
                {propertyType3 ? (
                  <>
                    <strong className="text-slate-800">{propertyType3}</strong> on the{' '}
                    {location.postcodePrefix} outskirts
                  </>
                ) : (
                  <>property in the wider {location.region} area</>
                )}
                , our CAA-licensed pilots deliver a safe, non-intrusive aerial inspection with no
                scaffolding required.
              </p>
              <p>
                {location.description} Our Maidstone base gives us excellent coverage across all
                of {location.region}, meaning we can typically schedule your{' '}
                {service.shortName} in {location.name} within 3–5 working days of booking.
              </p>
              <p>
                {service.tagline}. Every survey includes a professionally formatted PDF report
                delivered to your inbox within 48 hours, containing HD annotated imagery and
                written condition assessments for every aspect of the roof inspected.
              </p>
              <p>
                <strong className="text-slate-800">
                  {service.name} in {location.name}: {service.price}
                </strong>
                . Contact us for an exact quote tailored to your property size and roof complexity.
                The price includes all travel to {location.name}, the survey itself, and the full
                PDF report.
              </p>
            </div>

            {/* ── Price + CTA sidebar ─────────────────────────────────────── */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 p-6 rounded-xl border border-brand-200 bg-brand-50">
                <p className="text-sm font-medium text-brand-700 mb-1">{service.name}</p>
                <p className="text-3xl font-bold text-slate-900 mb-1">{service.price}</p>
                <p className="text-sm text-slate-500 mb-4">in {location.name}, Kent</p>
                <ul className="space-y-1.5 text-sm text-slate-600 mb-5">
                  <li className="flex gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    {service.duration}
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    {service.deliverable}
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    CAA-licensed drone pilots
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    No scaffolding required
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold transition-colors"
                >
                  Book in {location.name} Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's included ───────────────────────────────────────────────── */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-5">
                What&apos;s Included in Your {service.name}
              </h2>
              <ul className="space-y-3">
                {service.whatIsIncluded.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700">
                    <span className="text-brand-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-5">
                Benefits for {location.name} Property Owners
              </h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-slate-700">
                    <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who is it for ─────────────────────────────────────────────────── */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            Who Uses This Service in {location.name}?
          </h2>
          <div className="flex flex-wrap gap-3">
            {service.targetAudience.map((audience) => (
              <span
                key={audience}
                className="bg-brand-50 text-brand-700 border border-brand-200 px-4 py-2 rounded-lg text-sm font-medium capitalize"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Questions About {service.name} in {location.name}
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

      {/* SEO: Cross-links to same service in nearby towns — distributes PageRank
          to sibling location+service pages and supports crawl coverage */}
      {nearbyLocations.length > 0 && (
        <section className="py-12 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-lg font-bold text-slate-900 mb-4">
              {service.name} in Nearby Towns
            </h2>
            <div className="flex flex-wrap gap-3">
              {nearbyLocations.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/locations/${nearby.slug}/${service.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-200 text-sm text-brand-700 hover:bg-brand-50 hover:border-brand-300 transition-colors font-medium"
                >
                  {service.shortName} in {nearby.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SEO: Other services in the same town — prevents dead-end pages and
          increases average pages-per-session for users */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-bold text-slate-900 mb-5">
            Other Services in {location.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherServices.map((otherService) => (
              <ServiceCard
                key={otherService.slug}
                service={otherService}
                locationSlug={location.slug}
                showPrice
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <NAPBlock showAddress showHours />
        </div>
      </section>

      <section className="px-4 pb-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <BreadcrumbNav items={breadcrumbs} />
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <CTABanner
            heading={`Book Your ${service.name} in ${location.name} Today`}
            subtext={`${service.price} · CAA-licensed · No scaffolding · 48hr PDF report`}
            primaryLabel={`Book in ${location.name}`}
            primaryHref="/contact"
            secondaryLabel="View all Services"
            secondaryHref="/services"
          />
        </div>
      </section>
    </>
  )
}
