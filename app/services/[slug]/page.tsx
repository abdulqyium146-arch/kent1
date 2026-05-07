import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ServiceSchema from '@/components/seo/ServiceSchema'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav'
import NAPBlock from '@/components/ui/NAPBlock'
import CTABanner from '@/components/ui/CTABanner'
import { kentLocations } from '@/lib/locations'
import { roofvueServices, getServiceBySlug } from '@/lib/services'
import { getServiceFAQs } from '@/lib/faq-data'
import { getBreadcrumbs } from '@/lib/seo-utils'

export function generateStaticParams() {
  return roofvueServices.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}

  // SEO: Unique title per service — "[service.name] Kent | RoofVue Drone Roof Inspections"
  return {
    title: `${service.name} Kent | RoofVue Drone Roof Inspections`,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} Kent | RoofVue`,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
    },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const faqs = getServiceFAQs(service.slug)
  const breadcrumbs = getBreadcrumbs(`/services/${service.slug}`)

  return (
    <>
      <ServiceSchema service={service} />
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
            {service.price} · {service.duration}
          </div>
          {/* SEO: H1 = "[service.name] in Kent" — primary keyword for this service page */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{service.name} in Kent</h1>
          <p className="speakable-intro text-brand-100 text-xl max-w-2xl leading-relaxed">{service.tagline}</p>
        </div>
      </section>

      {/* ── Full description ──────────────────────────────────────────────── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4 text-slate-600 leading-relaxed">
              {service.fullDescription.split('\n\n').map((para, i) => (
                <p key={i}>{para.trim()}</p>
              ))}
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-6 p-6 rounded-xl border border-brand-200 bg-brand-50">
                <h2 className="font-bold text-slate-900 text-lg mb-4">At a Glance</h2>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-slate-500 font-medium">Price</dt>
                    <dd className="speakable-price text-2xl font-bold text-slate-900">{service.price}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 font-medium">Duration</dt>
                    <dd className="text-slate-800">{service.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 font-medium">What you receive</dt>
                    <dd className="text-slate-800">{service.deliverable}</dd>
                  </div>
                </dl>
                <Link
                  href="/contact"
                  className="mt-5 w-full inline-flex items-center justify-center px-5 py-3 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold transition-colors"
                >
                  Book in Kent Today
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
                What&apos;s Included
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
              <h2 className="text-2xl font-bold text-slate-900 mb-5">Key Benefits</h2>
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
          <h2 className="text-xl font-bold text-slate-900 mb-4">Who Is This Service For?</h2>
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
            Frequently Asked Questions — {service.name} in Kent
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

      {/* SEO: Location grid links all 54 Kent towns to their location+service page —
          the most important internal linking widget for distributing equity to leaf pages */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Book This Service in Your Kent Town
          </h2>
          <p className="text-slate-500 mb-8">
            Select your town below to see {service.name} information specific to your area.
          </p>
          {/* Each town links to /locations/[slug]/[serviceSlug] */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            <LocationGridWithService serviceSlug={service.slug} />
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
            heading={`Ready to Book Your ${service.name} in Kent?`}
            subtext={`${service.price} · ${service.duration} · ${service.deliverable}`}
            primaryLabel="Book in Kent Today"
            primaryHref="/contact"
            secondaryLabel="View All Locations"
            secondaryHref="/locations"
          />
        </div>
      </section>
    </>
  )
}

// Renders all 54 Kent towns linking to /locations/[slug]/[serviceSlug]
function LocationGridWithService({ serviceSlug }: { serviceSlug: string }) {
  return (
    <>
      {kentLocations.map((loc) => (
        <Link
          key={loc.slug}
          href={`/locations/${loc.slug}/${serviceSlug}`}
          className="group flex flex-col p-3 rounded-lg border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors"
        >
          <span className="text-sm font-medium text-slate-800 group-hover:text-brand-700">
            {loc.name}
          </span>
          <span className="text-xs text-slate-400 mt-0.5">{loc.postcodePrefix}</span>
        </Link>
      ))}
    </>
  )
}
