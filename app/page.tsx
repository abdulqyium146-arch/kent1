import type { Metadata } from 'next'
import Link from 'next/link'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import TrustBadges from '@/components/ui/TrustBadges'
import LocationGrid from '@/components/ui/LocationGrid'
import ServiceCard from '@/components/ui/ServiceCard'
import { roofvueServices } from '@/lib/services'
import { getHomepageFAQs } from '@/lib/faq-data'
import { BUSINESS } from '@/lib/schema'
import InstagramReel from '@/components/ui/InstagramReel'

export const metadata: Metadata = {
  title: 'Independent Roof Surveys Kent | RoofVue — Unbiased Expert Assessments',
  description:
    'RoofVue provides independent, unbiased roof surveys across Kent. Residential surveys, drone inspections, home buyer reports, commercial assessments and insurance reports. From £149. PDF report in 48hrs.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Independent Roof Surveys Kent | RoofVue',
    description: 'Independent, unbiased roof surveys for homeowners, buyers and businesses across Kent. No repairs agenda — just honest expert advice. From £149.',
    url: '/',
  },
}

const processSteps = [
  {
    number: '01',
    title: 'Book Online or by Phone',
    description: 'Tell us your address and which service you need. We confirm your appointment — often within hours. Surveys available across all Kent postcodes.',
  },
  {
    number: '02',
    title: 'Expert Inspection',
    description: 'Our qualified surveyor arrives and conducts a thorough assessment — combining drone aerial imagery with close ground-level inspection for a complete picture.',
  },
  {
    number: '03',
    title: 'Clear Report Delivered',
    description: 'Within 48 hours you receive a professionally formatted PDF report: HD imagery, graded findings, honest recommendations, and a clear action list.',
  },
]

const whyIndependent = [
  {
    title: 'No repair teams. No sales agenda.',
    description: 'RoofVue does not do repairs. We have no financial incentive to recommend more work than your roof needs. Our only interest is accuracy.',
  },
  {
    title: 'Qualified surveyors, not roofers',
    description: 'Our assessments are carried out by trained roof survey professionals — not contractors looking for their next job.',
  },
  {
    title: 'Evidence-based reporting',
    description: 'Every finding is backed by high-resolution photographic evidence, so you can see exactly what we saw and make informed decisions.',
  },
  {
    title: 'Useful across every situation',
    description: 'Buying a home, managing a rental, dealing with an insurer, planning maintenance — our reports are built for real decisions.',
  },
]

const testimonials = [
  {
    quote: 'Found serious issues with the roof that the estate agent\'s survey had completely missed. Saved us from buying a property needing £12,000 of repairs we didn\'t know about.',
    author: 'Sarah T.',
    location: 'Canterbury',
    service: 'Home Buyer Roof Report',
    rating: 5,
  },
  {
    quote: 'Completely independent — they found a few minor issues and told me honestly that the roof was in decent shape overall. No pressure, no upselling. Exactly what I needed.',
    author: 'Mark H.',
    location: 'Maidstone',
    service: 'Residential Roof Survey',
    rating: 5,
  },
  {
    quote: 'Used RoofVue for three of my rental properties. The compliance reports have been excellent — clearly written, properly referenced, and exactly what my insurer needed.',
    author: 'David W.',
    location: 'Folkestone',
    service: 'Landlord Roof Inspection',
    rating: 5,
  },
]

const stats = [
  { value: '4,800+', label: 'Surveys completed' },
  { value: '10+', label: 'Years serving Kent' },
  { value: '4.9/5', label: 'Customer rating' },
  { value: '48hrs', label: 'Report turnaround' },
]

export default function HomePage() {
  const faqs = getHomepageFAQs()

  return (
    <>
      <LocalBusinessSchema pageUrl="/" />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }]} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative gradient-hero text-white py-24 px-4 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 bg-accent-500/15 border border-accent-500/30 rounded-full px-4 py-2 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" aria-hidden="true" />
              <span className="text-accent-300">Independent · Unbiased · Expert</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Roof Surveys You Can{' '}
              <span className="text-accent-400">Actually Trust</span>
            </h1>
            <p className="speakable-intro text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              RoofVue provides independent, expert roof assessments across Kent — for homeowners, buyers, landlords and businesses. No repair agenda. No upselling. Just honest, evidence-based advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Book a Survey
              </Link>
              <Link href="/services" className="btn-outline text-base px-8 py-4">
                Our Services
              </Link>
            </div>
            {/* Social proof strip */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-1.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
                <span className="text-slate-300 text-sm ml-1 font-medium">4.9/5</span>
              </div>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-400 text-sm">4,800+ surveys completed</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-400 text-sm">Covering all of Kent</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Badges ─────────────────────────────────────────────── */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* ── Why Independent Matters ──────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge-amber mb-4">Why it matters</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 leading-tight">
                The difference an independent survey makes
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Most people ask a roofer to assess their roof. But roofers are in the business of doing repairs — not neutral assessments. RoofVue exists because homeowners deserve an honest second opinion.
              </p>
              <div className="space-y-5">
                {whyIndependent.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/about" className="btn-outline-dark text-sm px-6 py-3">
                  Learn about our approach →
                </Link>
              </div>
            </div>
            {/* Stats panel */}
            <div className="bg-brand-900 rounded-3xl p-10 text-white">
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-8">RoofVue by the numbers</p>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-4xl font-bold text-accent-400 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-slate-300 text-sm leading-relaxed">
                  &ldquo;We started in Maidstone with one aim: give Kent property owners an honest, expert view of their roof. That has not changed.&rdquo;
                </p>
                <p className="text-slate-500 text-xs mt-3">— RoofVue founding team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge-amber mb-4">Our services</div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Expert surveys for every situation
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Six specialist services — from a straightforward home check to insurance assessments and commercial surveys. All independent, all expert.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roofvueServices.map((service) => (
              <ServiceCard key={service.slug} service={service} showPrice variant="featured" />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/pricing" className="btn-outline-dark text-sm px-7 py-3">
              View full pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge-slate mb-4">Simple process</div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              From booking to report in 48 hours
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Three straightforward steps. No fuss, no delays, no surprises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div key={step.number} className="relative">
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-slate-100 z-0" aria-hidden="true" />
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-brand-900 flex items-center justify-center mb-5">
                    <span className="text-accent-400 font-bold text-xl">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Customer reviews
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What our clients say
            </h2>
            <div className="flex items-center justify-center gap-2">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
              <span className="text-slate-300 ml-2 font-medium">4.9/5 from 200+ reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 transition-colors">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-slate-300 text-sm leading-relaxed mb-5">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white text-sm">{t.author}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{t.location} · {t.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Instagram Reel / E-E-A-T Social Proof ───────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Context copy — explains the evidence before they watch */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833ab4]/10 via-[#fd1d1d]/10 to-[#fcb045]/10 border border-[#fd1d1d]/20 rounded-full px-4 py-1.5 text-sm font-semibold text-[#833ab4] mb-5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                @roofvue on Instagram
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
                See a Real Survey<br className="hidden md:block" /> in Action
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                This is what an independent RoofVue drone roof survey actually looks like. No repair
                crew waiting in the van — just our CAA-licensed pilot, a drone, and an honest
                assessment of what your roof needs.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Drone captures every angle, including areas invisible from ground level',
                  'Surveyor annotates defects live — no guesswork, no hidden damage',
                  'Full HD PDF report in your inbox within 48 hours',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-slate-700 text-sm">
                    <span className="w-5 h-5 rounded-full bg-accent-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-accent-600 text-xs font-bold">✓</span>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="https://www.instagram.com/roofvue/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#833ab4] hover:underline"
              >
                Follow @roofvue for more survey footage →
              </a>
            </div>

            {/* Embed */}
            <div className="flex justify-center">
              <InstagramReel />
            </div>
          </div>
        </div>
      </section>

      {/* ── Kent Coverage ────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge-slate mb-4">Coverage</div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Covering Every Corner of Kent
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              From the Medway towns to the Romney Marsh, from the Thanet coast to the Weald — we cover all 54 Kent towns and every postcode.
            </p>
          </div>
          <LocationGrid groupByRegion />
          <p className="text-center mt-6 text-slate-400 text-sm">
            Don&apos;t see your town?{' '}
            <Link href="/contact" className="text-accent-600 hover:text-accent-700 font-medium hover:underline">
              Get in touch
            </Link>{' '}
            — we cover all of Kent and surrounding areas.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge-amber mb-4">Common questions</div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently asked questions</h2>
            <p className="text-slate-500">Everything you need to know about booking a roof survey with RoofVue.</p>
          </div>
          <div className="space-y-4">
            {faqs.slice(0, 6).map((faq) => (
              <details key={faq.question} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-slate-900 hover:text-brand-900 transition-colors">
                  <span className="speakable-answer">{faq.question}</span>
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
          <div className="text-center mt-8">
            <Link href="/faq" className="btn-outline-dark text-sm px-6 py-3">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="py-20 px-4 gradient-hero text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Ready for an honest view of your roof?
          </h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Book an independent survey today. Reports from £149, delivered within 48 hours. No repairs agenda — just the facts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Book a Survey
            </Link>
            <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} className="btn-outline text-base px-8 py-4">
              Call {BUSINESS.phone}
            </a>
          </div>
          <p className="text-slate-400 text-sm mt-6">Available 24/7 · All of Kent covered</p>
        </div>
      </section>
    </>
  )
}
