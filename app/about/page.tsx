import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import { BUSINESS } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About Kent Roof Inspections | Local Experts Since 2009',
  description:
    'Meet the team behind Kent Roof Inspections. Local experts serving homeowners and businesses across Kent since 2009. RICS affiliated, fully insured, honest advice.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Kent Roof Inspections</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            We started in Maidstone in 2009 with one van and a simple aim: to give Kent homeowners an honest, expert opinion on their roof. Fifteen years on, that aim has not changed.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Kent Roof Inspections was founded in 2009 by James Hartley, a qualified building surveyor who spent a decade working in the construction industry and became increasingly frustrated by the lack of specialist roofing expertise available to homeowners at a fair price.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                The problem James kept seeing was simple: homeowners were calling roofers to diagnose roof problems, and roofers — quite reasonably — were in the business of doing repairs, not neutral assessments. Homeowners were often advised to do more work than they needed, or given quotes for the wrong repairs because the actual source of a problem had not been properly identified.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                Kent Roof Inspections was set up to fill that gap. We are not roofers — we do not do repairs. We inspect, assess, document and advise. Our only interest is in giving you an accurate picture of your roof&apos;s condition and telling you what, if anything, needs doing.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Fifteen years later, we have inspected over 4,200 properties across Kent and built a reputation based on thoroughness, honesty and turning up when we say we will. Our team has grown to six inspectors covering the county from Dartford in the north-west to Folkestone and Dover in the south-east.
              </p>
            </div>
            <div className="space-y-5">
              <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <h3 className="font-bold text-brand-900 text-xl mb-4">By the Numbers</h3>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { val: '2009', label: 'Founded' },
                    { val: '4,200+', label: 'Properties inspected' },
                    { val: '6', label: 'Qualified inspectors' },
                    { val: '4.9/5', label: 'Average rating' },
                    { val: '24hrs', label: 'Report turnaround' },
                    { val: '15+', label: 'Years in Kent' },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-2xl font-bold text-brand-700">{s.val}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-3">Our Credentials</h3>
                <ul className="space-y-2">
                  {[
                    'RICS affiliated surveyors',
                    'Public liability insurance: £5 million',
                    'Professional indemnity insurance',
                    'CAA-licensed drone operators (GVC)',
                    'Thermal imaging qualified',
                    'Members of the Roof Consultants Institute',
                  ].map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-slate-700">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What Makes Us Different</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: 'We Are Inspectors, Not Roofers',
                body: 'This is fundamental. We have no commercial interest in recommending repairs. We tell you what we find — and sometimes that means telling you your roof is fine and no work is needed. We believe that is worth hearing too.',
              },
              {
                title: 'We Know Kent',
                body: 'Our inspectors live and work in Kent. We know the different property types, the local weather patterns, the materials commonly used in different eras of construction, and what defects show up most commonly in different parts of the county.',
              },
              {
                title: 'Written Reports as Standard',
                body: 'Every inspection produces a written, photographic report — not a verbal opinion over the phone, not a one-line email. A document you can read, share with your solicitor or insurer, and keep for reference.',
              },
              {
                title: 'Fixed Prices, No Surprises',
                body: 'We quote a fixed price before we arrive. That price covers the inspection, the travel, and the report. We do not add call-out fees or extra charges for producing the report.',
              },
              {
                title: 'Fast Turnaround',
                body: 'Reports are delivered within 24 hours of the inspection — often the same evening. When you are in the middle of a property purchase or an insurance claim, speed matters.',
              },
              {
                title: 'Honest About Uncertainty',
                body: 'If there is something we cannot assess without further investigation — because it is concealed, or because we would need equipment we did not bring — we say so. We do not guess and present guesses as findings.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-5">We Cover All of Kent</h2>
          <p className="text-slate-500 text-lg mb-8">
            From Dartford and Gravesham in the north to Folkestone, Dover and the coastal towns in the south. Every postcode in the county.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {BUSINESS.areaServed.map((area) => (
              <span key={area} className="bg-brand-50 text-brand-700 text-sm font-medium px-5 py-2 rounded-full border border-brand-100">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:border-brand-200 transition-all group">
              <div className="w-12 h-12 bg-brand-100 text-brand-700 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-200 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
              </div>
              <div className="font-semibold text-slate-900 mb-1">Phone</div>
              <div className="text-brand-700 font-medium">{BUSINESS.phone}</div>
              <div className="text-xs text-slate-400 mt-1">Mon–Fri 7:30–18:00, Sat 8:00–14:00</div>
            </a>
            <a href={`mailto:${BUSINESS.email}`} className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:border-brand-200 transition-all group">
              <div className="w-12 h-12 bg-brand-100 text-brand-700 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-200 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="font-semibold text-slate-900 mb-1">Email</div>
              <div className="text-brand-700 font-medium break-all">{BUSINESS.email}</div>
              <div className="text-xs text-slate-400 mt-1">Response within 2 hours</div>
            </a>
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-brand-100 text-brand-700 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="font-semibold text-slate-900 mb-1">Address</div>
              <div className="text-slate-600 text-sm leading-relaxed">{BUSINESS.address.street}<br />{BUSINESS.address.city}<br />{BUSINESS.address.region}, {BUSINESS.address.postcode}</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Book an Inspection or Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <CTABanner heading="Ready to Book?" body="Get a fixed-price quote for your roof inspection in Kent. No call centres, no pressure — just expert advice from someone who knows Kent roofs." variant="light" />
    </>
  )
}
