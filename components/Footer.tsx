import Link from 'next/link'
import { BUSINESS } from '@/lib/schema'

const services = [
  { label: 'Roof Inspection Kent', href: '/roof-inspection-kent' },
  { label: 'Roof Survey Kent', href: '/roof-survey-kent' },
  { label: 'Roof Leak Detection', href: '/roof-leak-detection-kent' },
  { label: 'Drone Roof Inspection', href: '/drone-roof-inspection-kent' },
  { label: 'Inspection Costs', href: '/roof-inspection-cost-kent' },
  { label: 'Commercial Inspection', href: '/commercial-roof-inspection-kent' },
  { label: 'Residential Inspection', href: '/residential-roof-inspection-kent' },
  { label: 'Gutter Inspection', href: '/gutter-inspection-kent' },
  { label: 'Storm Damage Assessment', href: '/storm-damage-roof-inspection-kent' },
]

const blog = [
  { label: 'Roof Inspection Cost in Kent', href: '/blog/roof-inspection-cost-kent' },
  { label: 'How to Check a Roof for Leaks', href: '/blog/how-to-check-roof-for-leaks' },
  { label: 'Roof Survey Before Buying?', href: '/blog/roof-survey-before-buying-house' },
  { label: 'Benefits of Drone Inspections', href: '/blog/benefits-drone-roof-inspections' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-brand-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <div className="leading-none">
                <div className="font-bold text-white text-base">Kent Roof Inspections</div>
                <div className="text-xs text-slate-400">Professional &amp; Certified</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Trusted roof inspection specialists serving homeowners and businesses across Kent since 2009. Fully insured, RICS-affiliated surveyors.
            </p>
            <address className="not-italic space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-slate-400">{BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.region}, {BUSINESS.address.postcode}</span>
              </div>
              <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-accent-400 transition-colors">
                <svg className="w-4 h-4 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                {BUSINESS.phone}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 hover:text-accent-400 transition-colors">
                <svg className="w-4 h-4 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                {BUSINESS.email}
              </a>
            </address>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-slate-400 hover:text-accent-400 transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Roofing Guides</h3>
            <ul className="space-y-2 mb-6">
              {blog.map((b) => (
                <li key={b.href}>
                  <Link href={b.href} className="text-sm text-slate-400 hover:text-accent-400 transition-colors">
                    {b.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-slate-400 hover:text-accent-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-400 hover:text-accent-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* CTA + Areas */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Book an Inspection</h3>
            <p className="text-sm text-slate-400 mb-4">Same-day inspections available across Kent. Free no-obligation quotes.</p>
            <Link href="/contact" className="btn-primary w-full justify-center mb-6 text-sm">
              Get a Free Quote
            </Link>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Areas We Cover</h3>
            <div className="flex flex-wrap gap-2">
              {BUSINESS.areaServed.map((area) => (
                <span key={area} className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-slate-800 my-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Kent Roof Inspections. All rights reserved. Registered in England &amp; Wales.</p>
          <div className="flex items-center gap-4">
            <span>Fully Insured</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full" aria-hidden="true" />
            <span>RICS Affiliated</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full" aria-hidden="true" />
            <span>Trading since 2009</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
