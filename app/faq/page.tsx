import type { Metadata } from 'next'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav'
import CTABanner from '@/components/ui/CTABanner'
import { getGlobalFAQs } from '@/lib/faq-data'
import { getBreadcrumbs } from '@/lib/seo-utils'

// SEO: FAQ page targets informational search intent — captures users researching
// before booking, building brand authority. All answers naturally mention Kent.
export const metadata: Metadata = {
  title: 'Roof Survey FAQs Kent | RoofVue Drone Inspections',
  description:
    'Answers to common questions about drone roof surveys in Kent. RoofVue covers all Kent towns — no scaffolding, CAA-licensed, 48hr reports.',
  alternates: {
    canonical: '/faq',
  },
}

export default function FAQPage() {
  const faqs = getGlobalFAQs()
  const breadcrumbs = getBreadcrumbs('/faq')

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="bg-slate-50 border-b border-slate-200 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <BreadcrumbNav items={breadcrumbs} />
        </div>
      </div>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Frequently Asked Questions — Drone Roof Surveys in Kent
          </h1>
          <p className="text-lg text-slate-500 mb-10">
            Everything you need to know about RoofVue&apos;s drone roof survey services across
            Kent. Can&apos;t find your answer?{' '}
            <a href="/contact" className="text-brand-600 hover:underline">
              Get in touch
            </a>
            .
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm"
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

      <section className="px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          <CTABanner
            heading="Ready to Book Your Drone Roof Survey in Kent?"
            subtext="CAA-licensed pilots · No scaffolding · PDF report within 48hrs · Covering all of Kent"
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
