import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ServiceSchema from '@/components/seo/ServiceSchema'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav'
import NAPBlock from '@/components/ui/NAPBlock'
import { kentLocations } from '@/lib/locations'
import { roofvueServices, getServiceBySlug } from '@/lib/services'
import { getServiceFAQs } from '@/lib/faq-data'
import { getBreadcrumbs } from '@/lib/seo-utils'
import { BUSINESS } from '@/lib/schema'

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

  return {
    title: `${service.name} Kent | RoofVue — Independent Roof Surveys`,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} Kent | RoofVue`,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
    },
  }
}

function LocationGridWithService({ serviceSlug }: { serviceSlug: string }) {
  return (
    <>
      {kentLocations.map((loc) => (
        <Link
          key={loc.slug}
          href={`/locations/${loc.slug}/${serviceSlug}`}
          className="text-xs font-medium text-slate-600 hover:text-accent-600 hover:bg-accent-500/5 px-3 py-2 rounded-lg border border-slate-200 hover:border-accent-300 transition-all text-center"
        >
          {loc.name}
        </Link>
      ))}
    </>
  )
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

      <div className="bg-slate-50 border-b border-slate-200 py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <BreadcrumbNav items={breadcrumbs} />
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="gradient-hero text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2.5 bg-accent-500/20 border border-accent-500/40 rounded-full px-4 py-2 text-sm font-semibold mb-6">
            <span className="text-accent-300">{service.icon}</span>
            <span className="text-accent-300">{service.price} · {service.duration}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight text-balance max-w-3xl">
            <span className="text-accent-400">{service.name}</span>{' '}
            in Kent
          </h1>
          <p className="speakable-intro text-white/80 text-xl max-w-2xl leading-relaxed">
            {service.tagline}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">Book This Service</Link>
            <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} className="btn-outline">
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2 space-y-5 text-slate-600 leading-relaxed">
              {service.fullDescription.split('\n\n').map((para, i) => (
                <p key={i} className="text-base leading-7">{para.trim()}</p>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden">
                <div className="bg-brand-900 p-6">
                  <h2 className="font-bold text-white text-lg mb-1">At a Glance</h2>
                  <p className="text-slate-400 text-sm">{service.name} in Kent</p>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Starting price</dt>
                    <dd className="speakable-price text-3xl font-bold text-brand-900">{service.price}</dd>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Time on site</dt>
                    <dd className="text-slate-800 font-medium text-sm">{service.duration}</dd>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">What you receive</dt>
                    <dd className="text-slate-700 text-sm leading-relaxed">{service.deliverable}</dd>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Suitable for</dt>
                    <dd className="flex flex-wrap gap-1.5">
                      {service.targetAudience.map((a) => (
                        <span key={a} className="badge-slate capitalize">{a}</span>
                      ))}
                    </dd>
                  </div>
                  <Link href="/contact" className="btn-primary w-full justify-center mt-2">
                    Book in Kent Today
                  </Link>
                  <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} className="w-full flex items-center justify-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-900 transition-colors py-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                    </svg>
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's included + Benefits ───────────────────────────────── */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What&apos;s included</h2>
              <ul className="space-y-4">
                {service.whatIsIncluded.map((item) => (
                  <li key={item} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Key benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-700 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      {faqs.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Common questions about {service.name} in Kent
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-slate-900 hover:text-brand-900 transition-colors">
                    {faq.question}
                    <svg className="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-6 pb-5 text-slate-600 leading-relaxed text-sm border-t border-slate-200 pt-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Book in your Kent town ───────────────────────────────────── */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            Book {service.name} in Your Kent Town
          </h2>
          <p className="text-slate-500 mb-7 text-sm">
            Select your nearest town for local information and booking.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2">
            <LocationGridWithService serviceSlug={service.slug} />
          </div>
        </div>
      </section>

      {/* ── NAP + CTA ────────────────────────────────────────────────── */}
      <section className="py-12 px-4 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <NAPBlock showAddress showHours />
        </div>
      </section>

      <section className="py-16 px-4 gradient-hero text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to book your {service.name}?
          </h2>
          <p className="text-slate-300 mb-8">
            {service.price} · {service.duration} · {service.deliverable}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary px-8 py-4">Book in Kent Today</Link>
            <Link href="/locations" className="btn-outline px-8 py-4">View All Locations</Link>
          </div>
        </div>
      </section>
    </>
  )
}
