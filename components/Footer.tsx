import Link from 'next/link'
import { BUSINESS } from '@/lib/schema'

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
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
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
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" aria-hidden="true" />
              Fully Insured
            </span>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <span>Independent &amp; Unbiased</span>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <span>Established {BUSINESS.foundingYear}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
