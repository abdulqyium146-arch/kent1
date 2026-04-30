'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BUSINESS } from '@/lib/schema'

const services = [
  { label: 'Roof Inspection', href: '/roof-inspection-kent' },
  { label: 'Roof Survey', href: '/roof-survey-kent' },
  { label: 'Leak Detection', href: '/roof-leak-detection-kent' },
  { label: 'Drone Inspection', href: '/drone-roof-inspection-kent' },
  { label: 'Inspection Costs', href: '/roof-inspection-cost-kent' },
  { label: 'Commercial', href: '/commercial-roof-inspection-kent' },
  { label: 'Residential', href: '/residential-roof-inspection-kent' },
  { label: 'Gutter Inspection', href: '/gutter-inspection-kent' },
  { label: 'Storm Damage', href: '/storm-damage-roof-inspection-kent' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
      {/* Top bar */}
      <div className="bg-brand-700 text-white text-sm py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          <span className="hidden sm:block text-blue-200 text-xs">
            Serving Kent, Canterbury, Maidstone, Ashford &amp; Dartford
          </span>
          <a
            href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 font-semibold hover:text-accent-400 transition-colors ml-auto"
            aria-label={`Call us on ${BUSINESS.phone}`}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-9 h-9 bg-brand-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </div>
          <div className="leading-none">
            <div className="font-heading font-bold text-slate-900 text-base">Kent Roof</div>
            <div className="text-xs text-slate-500 font-medium">Inspections</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="relative group">
            <button
              className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors py-2"
              aria-expanded={servicesOpen}
            >
              Services
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors">About</Link>
          <Link href="/blog" className="text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors">Blog</Link>
          <Link
            href="/contact"
            className="btn-primary text-sm px-5 py-2.5"
          >
            Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">Services</p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {s.label}
              </Link>
            ))}
            <hr className="my-3 border-slate-100" />
            <Link href="/about" className="block px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-brand-50" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/blog" className="block px-3 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-brand-50" onClick={() => setMobileOpen(false)}>Blog</Link>
            <div className="pt-3">
              <Link href="/contact" className="btn-primary w-full justify-center" onClick={() => setMobileOpen(false)}>
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
