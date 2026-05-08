import type { Metadata } from 'next'
import Link from 'next/link'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav'
import { getGlobalFAQs } from '@/lib/faq-data'
import { getBreadcrumbs } from '@/lib/seo-utils'
import { BUSINESS } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Roof Survey FAQs Kent | RoofVue — Common Questions Answered',
  description:
    'Answers to common questions about independent roof surveys in Kent. RoofVue covers all Kent towns — honest assessments, 48hr reports, no repair agenda.',
  alternates: { canonical: '/faq' },
}

export default function FAQPage() {
  const faqs = getGlobalFAQs()
  const breadcrumbs = getBreadcrumbs('/faq')

  return (
    <>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="bg-slate-50 border-b border-slate-200 py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <BreadcrumbNav items={breadcrumbs} />
        </div>
      </div>

      <section className="gradient-hero text-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="badge bg-accent-500/20 text-accent-300 mb-6">Common questions</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight text-balance">
            Frequently Asked Questions About{' '}
            <span className="text-accent-400">Independent Roof Surveys</span>
          </h1>
          <p className="text-white/80 text-lg leading-relaxed">
            Everything you need to know about roof surveys with RoofVue. Can&apos;t find your answer?{' '}
            <Link href="/contact" className="text-accent-400 hover:text-accent-300 underline font-medium">Get in touch.</Link>
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-slate-900 hover:text-brand-900 transition-colors">
                  <span className="speakable-answer">{faq.question}</span>
                  <svg className="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-slate-600 leading-relaxed text-sm border-t border-slate-200 pt-4">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 gradient-hero text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still have a question?</h2>
          <p className="text-slate-300 mb-8">
            Call us or fill in the contact form — we respond within 2 hours, Mon–Sat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary px-7 py-3">Contact Us</Link>
            <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} className="btn-outline px-7 py-3">
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
