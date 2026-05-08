'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BUSINESS } from '@/lib/schema'

const navServices = [
  { label: 'Residential Roof Survey', href: '/services/residential-roof-survey', desc: 'Expert home roof assessments' },
  { label: 'Drone Roof Inspection', href: '/services/drone-roof-inspection', desc: 'Aerial surveys, no scaffolding' },
  { label: 'Home Buyer Roof Report', href: '/services/home-buyer-roof-report', desc: 'Know before you buy' },
  { label: 'Commercial Roof Survey', href: '/services/commercial-roof-survey', desc: 'Offices, retail, industrial' },
  { label: 'Insurance Roof Assessment', href: '/services/insurance-roof-assessment', desc: 'Claims and dispute evidence' },
  { label: 'Landlord Roof Inspection', href: '/services/landlord-roof-inspection', desc: 'Compliance-ready reports' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100">
      {/* Trust bar */}
      <div className="bg-brand-900 text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          <div className="hidden sm:flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" aria-hidden="true" />
              Independent &amp; Unbiased
            </span>
            <span className="text-slate-600" aria-hidden="true">|</span>
            <span>Covering All of Kent</span>
            <span className="text-slate-600" aria-hidden="true">|</span>
            <span>Reports Within 48 Hours</span>
          </div>
          <a
            href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 font-semibold text-white hover:text-accent-400 transition-colors ml-auto"
            aria-label={`Call RoofVue on ${BUSINESS.phone}`}
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
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
          <div className="w-9 h-9 bg-brand-900 rounded-xl flex items-center justify-center group-hover:bg-brand-700 transition-colors">
            <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </div>
          <div className="leading-none">
            <div className="font-heading font-bold text-brand-900 text-lg tracking-tight">RoofVue</div>
            <div className="text-xs text-slate-400 font-medium">Independent Roof Surveys</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Services dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-brand-900 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <svg className="w-4 h-4 text-slate-400 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-hover border border-slate-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <p className="px-4 pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Our Services</p>
              {navServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex flex-col px-4 py-2.5 hover:bg-slate-50 transition-colors group/item"
                >
                  <span className="text-sm font-medium text-slate-800 group-hover/item:text-brand-900">{s.label}</span>
                  <span className="text-xs text-slate-400 mt-0.5">{s.desc}</span>
                </Link>
              ))}
              <div className="mt-2 mx-4 pt-3 border-t border-slate-100">
                <Link href="/services" className="text-sm font-medium text-accent-600 hover:text-accent-700 flex items-center gap-1">
                  View all services →
                </Link>
              </div>
            </div>
          </div>

          <Link href="/locations" className="text-sm font-medium text-slate-700 hover:text-brand-900 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors">
            Areas We Cover
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-slate-700 hover:text-brand-900 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-sm font-medium text-slate-700 hover:text-brand-900 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors">
            About
          </Link>
          <Link href="/blog" className="text-sm font-medium text-slate-700 hover:text-brand-900 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors">
            Blog
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
            className="text-sm font-semibold text-brand-900 hover:text-accent-600 transition-colors"
          >
            {BUSINESS.phone}
          </a>
          <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
            Book a Survey
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
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
            {navServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-900 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {s.label}
              </Link>
            ))}
            <hr className="my-3 border-slate-100" />
            <Link href="/locations" className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={() => setMobileOpen(false)}>Areas We Cover</Link>
            <Link href="/pricing" className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={() => setMobileOpen(false)}>Pricing</Link>
            <Link href="/about" className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/blog" className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/faq" className="block px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={() => setMobileOpen(false)}>FAQ</Link>
            <div className="pt-3 space-y-2">
              <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border-2 border-brand-900 text-brand-900 font-semibold text-sm hover:bg-brand-900 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                {BUSINESS.phone}
              </a>
              <Link href="/contact" className="btn-primary w-full justify-center" onClick={() => setMobileOpen(false)}>
                Book a Survey
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
