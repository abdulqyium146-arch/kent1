import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import FAQSchema from '@/components/seo/FAQSchema'
import { roofvueServices } from '@/lib/services'
import { BUSINESS } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Roof Survey Prices Kent | RoofVue — Transparent Pricing',
  description:
    'Transparent, fixed pricing for independent roof surveys across Kent. Residential surveys from £149, home buyer reports from £249, commercial surveys from £349. No hidden costs.',
  alternates: { canonical: '/pricing' },
}

const pricingFaqs = [
  {
    question: 'Are your prices fixed or do they vary?',
    answer: 'The prices shown are starting prices. Final cost depends on property size, complexity and access requirements. We always provide a fixed quote before booking so there are no surprises.',
  },
  {
    question: 'What does a roof survey include for the price?',
    answer: 'Every survey includes a full inspection of all accessible roof areas, HD photographic evidence, a graded condition report, and specific recommendations. Drone inspection is included on all residential and home buyer surveys. The exact inclusions are listed on each service page.',
  },
  {
    question: 'Do you offer portfolio discounts?',
    answer: 'Yes. Landlords and commercial property owners with multiple properties can apply for portfolio pricing. Contact us to discuss requirements and we will provide a tailored quote.',
  },
  {
    question: 'How do I pay?',
    answer: 'We accept bank transfer, card payment and cheque. Payment is typically due on receipt of report, not upfront.',
  },
  {
    question: 'Is there a call-out fee?',
    answer: 'No. The price quoted is the total price for the survey and report. There are no call-out fees or hidden additions.',
  },
]

export default function PricingPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Pricing', url: '/pricing' },
      ]} />
      <FAQSchema faqs={pricingFaqs} />

      {/* Hero */}
      <section className="gradient-hero text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="badge bg-accent-500/20 text-accent-300 mb-6">Transparent pricing</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            Honest Surveys.{' '}
            <span className="text-accent-400">Honest Prices.</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            No hidden charges. No upselling. Fixed quotes before you book. All surveys include a full HD report delivered within 48 hours.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our survey pricing</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Starting prices shown. All surveys include a full PDF report. <Link href="/contact" className="text-accent-600 hover:underline font-medium">Contact us</Link> for a fixed quote on your property.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roofvueServices.map((service, i) => (
              <div
                key={service.slug}
                className={`rounded-2xl border p-7 flex flex-col ${
                  i === 2
                    ? 'border-accent-500 bg-brand-900 text-white ring-2 ring-accent-500 ring-offset-2'
                    : 'border-slate-200 bg-white'
                }`}
              >
                {i === 2 && (
                  <div className="badge bg-accent-500 text-white mb-4 self-start">Most popular</div>
                )}
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className={`text-xl font-bold mb-2 ${i === 2 ? 'text-white' : 'text-slate-900'}`}>
                  {service.name}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 flex-1 ${i === 2 ? 'text-slate-300' : 'text-slate-500'}`}>
                  {service.tagline}
                </p>
                <div className="mb-6">
                  <div className={`text-4xl font-bold ${i === 2 ? 'text-accent-400' : 'text-brand-900'}`}>
                    {service.price}
                  </div>
                  <div className={`text-xs mt-1 ${i === 2 ? 'text-slate-400' : 'text-slate-400'}`}>
                    {service.duration}
                  </div>
                </div>
                <ul className="space-y-2 mb-7">
                  {service.whatIsIncluded.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${i === 2 ? 'text-accent-400' : 'text-green-500'}`} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className={`text-xs leading-relaxed ${i === 2 ? 'text-slate-300' : 'text-slate-600'}`}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className={i === 2 ? 'btn-primary w-full justify-center' : 'btn-outline-dark w-full justify-center text-sm py-3'}
                >
                  View full details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's always included */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">What every survey includes</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Regardless of which service you choose, every RoofVue survey comes with the same commitment: a thorough, independent assessment and a clear, actionable report.
              </p>
              <ul className="space-y-4">
                {[
                  'Full inspection of all accessible roof areas and elevations',
                  'High-resolution photographic evidence of every finding',
                  'Condition grading (1–5 scale) for each roof section',
                  'Prioritised recommendations with urgency ratings',
                  'Professional PDF report delivered within 48 hours',
                  'Follow-up support if you have questions about the report',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-900 rounded-3xl p-10 text-white">
              <h3 className="text-xl font-bold text-white mb-6">Get a fixed quote</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                Tell us your address and service needed — we&apos;ll provide a fixed price before you commit to anything. No obligation.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <svg className="w-4 h-4 text-accent-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Quote provided within a few hours
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <svg className="w-4 h-4 text-accent-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  No obligation to book
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <svg className="w-4 h-4 text-accent-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Fixed price — no surprises
                </div>
              </div>
              <Link href="/contact" className="btn-primary w-full justify-center mb-4">
                Get a Fixed Quote
              </Link>
              <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} className="w-full flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-accent-400 transition-colors py-2">
                Or call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio pricing */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge-amber mb-4">Landlords &amp; portfolio owners</div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Managing multiple properties?</h2>
          <p className="text-slate-500 mb-8 max-w-xl mx-auto leading-relaxed">
            Portfolio pricing is available for landlords, property management companies and commercial operators with multiple Kent properties. Contact us to discuss a tailored package.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-4">Enquire About Portfolio Pricing</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Pricing questions</h2>
          <div className="space-y-4">
            {pricingFaqs.map((faq) => (
              <details key={faq.question} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-slate-900">
                  {faq.question}
                  <svg className="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
