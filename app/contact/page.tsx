import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import CalendlyEmbed from '@/components/ui/CalendlyEmbed'
import { BUSINESS } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Book a Roof Survey Kent | RoofVue — Book Online Instantly',
  description:
    'Book your independent roof survey online in seconds with RoofVue. Pick a date that suits you — residential, drone, home buyer, commercial. From £149. Covering all of Kent.',
  alternates: { canonical: '/contact' },
}

const contactCards = [
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
      </svg>
    ),
    label: 'Call us',
    value: BUSINESS.phone,
    sub: 'Available 24/7',
    href: `tel:${BUSINESS.phone.replace(/\s/g, '')}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: 'Message us',
    sub: 'Quick reply guaranteed',
    href: 'https://wa.me/443335675656?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20a%20roof%20survey%20in%20Kent.',
    external: true,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    label: 'Email',
    value: BUSINESS.email,
    sub: 'We reply within 2 hours',
    href: `mailto:${BUSINESS.email}`,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="gradient-hero text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="badge bg-accent-500/20 text-accent-300 mb-6">Book online — instant confirmation</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight text-balance">
            Book Your{' '}
            <span className="text-accent-400">Roof Survey</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            Pick a date and time that suits you — your booking is confirmed instantly. Fixed prices,
            completely independent, no sales agenda.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-white/10 border border-white/20 text-white/80 text-sm px-3 py-1.5 rounded-full">
              Instant confirmation
            </span>
            <span className="bg-white/10 border border-white/20 text-white/80 text-sm px-3 py-1.5 rounded-full">
              From £149
            </span>
            <span className="bg-white/10 border border-white/20 text-white/80 text-sm px-3 py-1.5 rounded-full">
              Report within 48 hours
            </span>
            <span className="bg-white/10 border border-white/20 text-white/80 text-sm px-3 py-1.5 rounded-full">
              All of Kent covered
            </span>
          </div>
        </div>
      </section>

      {/* ── Calendly booking widget ────────────────────────────────────── */}
      <section id="book" className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Choose a Date &amp; Time
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Select your preferred slot and we&apos;ll confirm your survey booking immediately.
              You&apos;ll receive a calendar invite with all the details.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-card border border-slate-200 overflow-hidden">
            <CalendlyEmbed height={700} />
          </div>
        </div>
      </section>

      {/* ── Contact alternatives ───────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Prefer to get in touch directly?</h2>
            <p className="text-slate-500">Call, WhatsApp, or email — we respond to all enquiries within 2 hours.</p>
          </div>

          {/* Contact method cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 hover:border-accent-400 bg-white hover:shadow-card transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-900 flex items-center justify-center flex-shrink-0 text-accent-400 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{card.label}</div>
                  <div className="text-accent-600 font-medium text-sm">{card.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{card.sub}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Form + trust signals */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Send a message</h3>
                <p className="text-slate-500 text-sm mb-8">
                  Questions about a service, a quote request, or anything else — we&apos;ll reply within 2 hours.
                </p>
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-brand-900 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Why book with RoofVue?</h3>
                <ul className="space-y-3">
                  {[
                    'Completely independent — no repairs agenda',
                    'Fixed price quoted before you book',
                    'Full HD report within 48 hours',
                    'Covering all 54+ Kent towns',
                    'CAA-licensed drone pilots',
                    'Established since 2014',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <span className="w-4 h-4 rounded-full bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-accent-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
                <h3 className="font-bold text-slate-900 mb-3 text-sm">Base location</h3>
                <p className="text-slate-700 text-sm font-medium">{BUSINESS.address.city}, {BUSINESS.address.region}</p>
                <p className="text-slate-400 text-xs mt-1">Covering all of Kent &amp; surrounding areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
