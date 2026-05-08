import Link from 'next/link'
import Image from 'next/image'
import { BUSINESS } from '@/lib/schema'

const WHATSAPP_URL = 'https://wa.me/443335675656?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20a%20roof%20survey%20in%20Kent.'

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/Roofvue',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/roofvue/',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: WHATSAPP_URL,
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
]

const services = [
  { label: 'Residential Roof Survey', href: '/services/residential-roof-survey' },
  { label: 'Drone Roof Inspection', href: '/services/drone-roof-inspection' },
  { label: 'Home Buyer Roof Report', href: '/services/home-buyer-roof-report' },
  { label: 'Commercial Roof Survey', href: '/services/commercial-roof-survey' },
  { label: 'Insurance Roof Assessment', href: '/services/insurance-roof-assessment' },
  { label: 'Landlord Roof Inspection', href: '/services/landlord-roof-inspection' },
]

const company = [
  { label: 'About RoofVue', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Areas We Cover', href: '/locations' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const blog = [
  { label: 'Roof Survey Before Buying a House', href: '/blog/roof-survey-before-buying-house' },
  { label: 'How to Check a Roof for Leaks', href: '/blog/how-to-check-roof-for-leaks' },
  { label: 'Roof Inspection Costs in Kent', href: '/blog/roof-inspection-cost-kent' },
  { label: 'Benefits of Drone Roof Inspections', href: '/blog/benefits-drone-roof-inspections' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-slate-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5" aria-label="RoofVue home">
              <Image
                src="/images/logo.webp"
                alt="RoofVue logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
                loading="lazy"
              />
              <div className="leading-none">
                <div className="font-bold text-white text-lg font-heading">RoofVue</div>
                <div className="text-xs text-slate-400 mt-0.5">Independent Roof Surveys</div>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Independent, unbiased roof surveys for homeowners, buyers, landlords and businesses across Kent. No repairs agenda — just honest expert advice.
            </p>
            <address className="not-italic space-y-3 text-sm">
              <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-slate-300 hover:text-accent-400 transition-colors group">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors flex-shrink-0">
                  <svg className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                </span>
                <span className="font-medium">{BUSINESS.phone}</span>
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-slate-300 hover:text-accent-400 transition-colors group">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors flex-shrink-0">
                  <svg className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </span>
                {BUSINESS.email}
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </span>
                <span className="text-sm">{BUSINESS.address.city}, {BUSINESS.address.region}</span>
              </div>
            </address>
            <div className="mt-6">
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-3">Follow Us</p>
              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all ${
                      s.label === 'WhatsApp'
                        ? 'bg-[#25D366]/10 border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 hover:border-[#25D366]/60'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Survey Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-slate-400 hover:text-accent-400 transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-accent-400 transition-colors flex-shrink-0" aria-hidden="true" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5 mb-8">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-slate-400 hover:text-accent-400 transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-accent-400 transition-colors flex-shrink-0" aria-hidden="true" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Roofing Guides</h3>
            <ul className="space-y-2.5">
              {blog.map((b) => (
                <li key={b.href}>
                  <Link href={b.href} className="text-sm text-slate-400 hover:text-accent-400 transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-accent-400 transition-colors flex-shrink-0" aria-hidden="true" />
                    {b.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Book a Survey</h3>
            <p className="text-sm text-slate-400 mb-5 leading-relaxed">
              Independent roof surveys across Kent. Fast turnaround, honest advice, no sales agenda.
            </p>
            <Link href="/contact" className="btn-primary w-full justify-center mb-4 text-sm">
              Book Your Survey
            </Link>
            <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-700 text-slate-300 hover:border-accent-500 hover:text-accent-400 text-sm font-medium transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              {BUSINESS.phone}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 hover:border-[#25D366]/60 text-sm font-medium transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <div className="mt-6 space-y-2">
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-3">Coverage Highlights</p>
              <div className="flex flex-wrap gap-1.5">
                {BUSINESS.areaServed.map((area) => (
                  <span key={area} className="text-xs bg-white/5 text-slate-400 px-2.5 py-1 rounded-full border border-slate-800">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} RoofVue. All rights reserved. Registered in England &amp; Wales.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" aria-hidden="true" />
              Fully Insured
            </span>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <span>Independent &amp; Unbiased</span>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <span>Established {BUSINESS.foundingYear}</span>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                    s.label === 'WhatsApp'
                      ? 'text-[#25D366]/60 hover:text-[#25D366]'
                      : 'text-slate-600 hover:text-slate-400'
                  }`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
