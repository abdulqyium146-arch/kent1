import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { BUSINESS } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Contact Kent Roof Inspections | Book an Inspection or Free Quote',
  description:
    'Get in touch with Kent Roof Inspections. Book a roof inspection, request a free quote, or ask a question. We respond within 2 hours Mon–Sat. Covering all of Kent.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100">
            Free quotes within 2 hours. Same-day inspections often available. No call centres.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Details</h2>
                <div className="space-y-5">
                  <a
                    href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
                    className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200 hover:border-brand-200 transition-all group"
                  >
                    <div className="w-11 h-11 bg-brand-100 text-brand-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-200 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Call Us</div>
                      <div className="text-brand-700 font-bold text-lg">{BUSINESS.phone}</div>
                      <div className="text-xs text-slate-400">Mon–Fri: 7:30am–6pm · Sat: 8am–2pm</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200 hover:border-brand-200 transition-all group"
                  >
                    <div className="w-11 h-11 bg-brand-100 text-brand-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-200 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Email</div>
                      <div className="text-brand-700 font-medium">{BUSINESS.email}</div>
                      <div className="text-xs text-slate-400">We reply within 2 hours (Mon–Sat)</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="w-11 h-11 bg-brand-100 text-brand-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Address</div>
                      <address className="text-slate-600 text-sm not-italic leading-relaxed">
                        {BUSINESS.address.street}<br />
                        {BUSINESS.address.city}<br />
                        {BUSINESS.address.region}, {BUSINESS.address.postcode}
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              {/* Areas */}
              <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
                <h3 className="font-semibold text-slate-900 mb-3">Areas We Cover</h3>
                <div className="flex flex-wrap gap-2">
                  {BUSINESS.areaServed.map((area) => (
                    <span key={area} className="text-xs bg-white text-brand-700 font-medium px-3 py-1 rounded-full border border-brand-200">
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-3">No travel surcharges within our standard Kent service area.</p>
              </div>

              {/* Trust */}
              <div className="space-y-3">
                {[
                  '✓ Free, no-obligation quotes',
                  '✓ Fixed prices — no hidden extras',
                  '✓ Response within 2 hours (Mon–Sat)',
                  '✓ Same-day inspections often available',
                  '✓ Written report within 24 hours',
                  '✓ Fully insured (£5m public liability)',
                ].map((t) => (
                  <p key={t} className="text-sm text-slate-700">{t}</p>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Request a Quote or Inspection</h2>
              <p className="text-slate-500 mb-8">Tell us about your property and we will get back to you within 2 hours with a fixed price.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-72 bg-slate-200 flex items-center justify-center text-slate-500 text-sm">
            <div className="text-center">
              <svg className="w-10 h-10 text-slate-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <p className="font-medium">Maidstone, Kent ME14 1BW</p>
              <p className="text-xs text-slate-400 mt-1">Serving all of Kent</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
