import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav'
import ServiceCard from '@/components/ui/ServiceCard'
import CTABanner from '@/components/ui/CTABanner'
import NAPBlock from '@/components/ui/NAPBlock'
import { roofvueServices } from '@/lib/services'
import { getBreadcrumbs } from '@/lib/seo-utils'

// SEO: Services hub page — receives PageRank from homepage and distributes
// it to all 4 service pages via ServiceCard links
export const metadata: Metadata = {
  title: 'Drone Roof Survey Services in Kent | RoofVue',
  description:
    'Four specialist drone roof survey services for Kent homeowners, buyers and landlords. From £149 — Drone Roof Survey, Condition Reports, Pre-Purchase Surveys and Landlord Inspections.',
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesPage() {
  const breadcrumbs = getBreadcrumbs('/services')

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="bg-slate-50 border-b border-slate-200 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <BreadcrumbNav items={breadcrumbs} />
        </div>
      </div>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Drone Roof Survey Services in Kent — RoofVue
          </h1>
          <p className="text-lg text-slate-500 max-w-3xl mb-12 leading-relaxed">
            RoofVue offers four specialist drone roof survey services across all of Kent. Every
            service uses CAA-licensed pilots, requires no scaffolding, and delivers a
            professionally formatted PDF report within 48 hours. Choose the service that matches
            your situation below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roofvueServices.map((service) => (
              <div key={service.slug} className="p-6 rounded-xl border border-slate-200 bg-slate-50">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2 className="text-xl font-bold text-slate-900">{service.name}</h2>
                  <span className="text-sm font-semibold text-brand-600 whitespace-nowrap bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">{service.tagline}</p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Ideal for
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.targetAudience.map((a) => (
                      <span
                        key={a}
                        className="text-xs bg-white border border-slate-200 text-slate-600 px-3 py-1 rounded-full capitalize"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
                <ServiceCard service={service} showPrice={false} />
              </div>
            ))}
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
            heading="Not Sure Which Service You Need?"
            subtext="Contact us and we will recommend the right survey for your situation — no obligation."
            primaryLabel="Get in Touch"
            primaryHref="/contact"
          />
        </div>
      </section>
    </>
  )
}
