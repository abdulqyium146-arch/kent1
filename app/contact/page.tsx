import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { BUSINESS } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Book a Roof Survey Kent | RoofVue — Contact Us',
  description:
    'Book an independent roof survey with RoofVue across Kent. Call or fill in the form — we respond within 2 hours. Fixed quotes, no obligation. Surveys from £149.',
  alternates: { canonical: '/contact' },
}

const contactReasons = [
  { icon: '📋', label: 'Book a survey', desc: 'Request a specific service and we\'ll confirm availability and price.' },
  { icon: '💬', label: 'Get a quote', desc: 'Tell us your address and we\'ll provide a fixed price — no obligation.' },
  { icon: '❓', label: 'Ask a question', desc: 'Not sure which service you need? We\'ll help you decide.' },
  { icon: '🔄', label: 'Report query', desc: 'Questions about an existing report? We\'re here to help.' },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="badge bg-accent-500/20 text-accent-300 mb-6">Get in touch</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Book your independent roof survey
          </h1>
          <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
            Available 24/7. Fixed quotes before you book. No call centres — you speak to us directly.
          </p>
        </div>
      </section>

      {/* Main section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left: contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact details</h2>
                <div className="space-y-5">
                  <a
                    href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
                    className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 hover:border-accent-400 bg-white hover:shadow-card transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-brand-900 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500 transition-colors">
                      <svg className="w-5 h-5 text-accent-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm mb-0.5">Phone</div>
                      <div className="text-accent-600 font-bold text-lg">{BUSINESS.phone}</div>
                      <div className="text-xs text-slate-400 mt-1">Available 24/7</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 hover:border-accent-400 bg-white hover:shadow-card transition-all group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-brand-900 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-500 transition-colors">
                      <svg className="w-5 h-5 text-accent-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm mb-0.5">Email</div>
                      <div className="text-accent-600 font-medium">{BUSINESS.email}</div>
                      <div className="text-xs text-slate-400 mt-1">We respond within 2 hours</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 bg-white">
                    <div className="w-11 h-11 rounded-xl bg-brand-900 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm mb-0.5">Base location</div>
                      <div className="text-slate-700 font-medium">{BUSINESS.address.city}, {BUSINESS.address.region}</div>
                      <div className="text-xs text-slate-400 mt-1">Covering all of Kent &amp; surrounding areas</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why contact us */}
              <div>
                <h3 className="font-bold text-slate-900 mb-4">How can we help?</h3>
                <div className="space-y-3">
                  {contactReasons.map((r) => (
                    <div key={r.label} className="flex gap-3">
                      <span className="text-xl flex-shrink-0">{r.icon}</span>
                      <div>
                        <p className="font-medium text-slate-900 text-sm">{r.label}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{r.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust signals */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4 text-sm">Why book with RoofVue?</h3>
                <ul className="space-y-2.5">
                  {[
                    'Completely independent — no repairs agenda',
                    'Fixed price quoted before you book',
                    'Full HD report within 48 hours',
                    'Covering all 54+ Kent towns',
                    'Same-day surveys often available',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a message</h2>
                <p className="text-slate-500 text-sm mb-8">
                  Fill in the form and we&apos;ll get back to you within 2 hours with availability and pricing.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
