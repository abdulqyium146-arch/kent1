import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import TrustSignals from '@/components/TrustSignals'
import Testimonials from '@/components/Testimonials'
import ProcessSteps from '@/components/ProcessSteps'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import { faqSchema, BUSINESS } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Kent Roof Inspections | Professional Roof Survey & Leak Detection',
  description:
    'Expert roof inspections across Kent. Same-day appointments available in Canterbury, Maidstone, Ashford & Dartford. Fully insured, RICS affiliated. Free no-obligation quotes.',
  alternates: { canonical: '/' },
}

const services = [
  {
    title: 'Roof Inspection',
    description: 'A comprehensive visual and close-up assessment of your roof covering, structure, flashing and gutters — with a written photographic report.',
    href: '/roof-inspection-kent',
    price: '£149',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    ),
  },
  {
    title: 'Roof Survey',
    description: 'A detailed structural survey suitable for home purchases, mortgage applications, insurance claims or planning applications.',
    href: '/roof-survey-kent',
    price: '£299',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
      </svg>
    ),
  },
  {
    title: 'Roof Leak Detection',
    description: 'We track down exactly where a leak is coming from using thermal imaging and moisture meters — no guesswork, no unnecessary stripping.',
    href: '/roof-leak-detection-kent',
    price: '£175',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2c-5.33 4-8 7.41-8 10a8 8 0 0016 0c0-2.59-2.67-6-8-10zm0 16c-3.31 0-6-2.69-6-6 0-1.63 1.17-3.8 3.53-6.27A13.97 13.97 0 0112 4.33c1.52 1.29 2.88 2.69 3.94 4.03.45.57.84 1.13 1.16 1.67.58.98.9 1.93.9 2.97 0 3.31-2.69 6-6 6z"/>
      </svg>
    ),
  },
  {
    title: 'Drone Roof Inspection',
    description: 'A safe, fast aerial inspection using high-resolution drone photography. No scaffolding, no access equipment — ideal for complex or high roofs.',
    href: '/drone-roof-inspection-kent',
    price: '£199',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 7c0-1.1-.9-2-2-2h-3V3H8v2H5C3.9 5 3 5.9 3 7v1h18V7zm-9 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-8c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/>
      </svg>
    ),
  },
  {
    title: 'Inspection Cost Guide',
    description: 'Transparent pricing with no hidden extras. Find out exactly what a roof inspection in Kent should cost before you book.',
    href: '/roof-inspection-cost-kent',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    ),
  },
  {
    title: 'Commercial Roof Inspection',
    description: 'Flat roof, felt, EPDM, or built-up systems — we inspect commercial properties to protect your investment and satisfy insurance requirements.',
    href: '/commercial-roof-inspection-kent',
    price: 'POA',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
      </svg>
    ),
  },
  {
    title: 'Gutter Inspection',
    description: 'Blocked or damaged gutters are one of the most common causes of damp and water ingress. We inspect, clear and report on gutter condition.',
    href: '/gutter-inspection-kent',
    price: '£99',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.66 11.2c-.23-.3-.51-.56-.77-.82-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32-2.59 2.08-3.61 5.75-2.39 8.9.04.1.08.2.08.33 0 .22-.15.42-.35.5-.23.1-.47.04-.66-.12a.58.58 0 01-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5.14.6.41 1.2.71 1.73 1.08 1.73 2.95 2.97 4.96 3.22 2.14.27 4.43-.12 6.01-1.6 1.74-1.63 2.35-4.14 1.69-6.12zm-9.2 6.7c.19-.07.37-.16.52-.3.36-.37.36-.96 0-1.32-.33-.33-.85-.4-1.25-.19-.35.18-.56.55-.5.93.07.48.52.84 1.01.83.07 0 .15-.03.22-.06zm2.5 1.4c.36-.39.36-1.01-.01-1.4-.3-.32-.79-.4-1.18-.21-.34.18-.57.53-.54.93.04.48.44.87.93.87.3 0 .6-.11.8-.32v.13z"/>
      </svg>
    ),
  },
  {
    title: 'Storm Damage Assessment',
    description: 'After storms hit Kent, quick action matters. We provide rapid assessments with reports formatted for insurance claims.',
    href: '/storm-damage-roof-inspection-kent',
    price: '£149',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.07 4.93l-1.41 1.41A8.014 8.014 0 0120 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-3.86 2.74-7.09 6.4-7.84L9 6.27A10 10 0 002 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07zM13 1h-2v10h2V1z"/>
      </svg>
    ),
  },
]

const steps = [
  {
    number: '1',
    title: 'Get in Touch',
    description: 'Call us or fill in the form. Tell us about your property and what you need. We\'ll give you a fixed price upfront — no surprises.',
  },
  {
    number: '2',
    title: 'We Book You In',
    description: 'We confirm a date and time that suits you. Same-day and next-day slots are often available across Kent.',
  },
  {
    number: '3',
    title: 'Inspection Day',
    description: 'Our inspector arrives on time, carries out a thorough assessment, and answers any questions you have there and then.',
  },
  {
    number: '4',
    title: 'Receive Your Report',
    description: 'You get a clear, photographic report within 24 hours — with a prioritised list of findings and honest recommendations.',
  },
]

const homepageFaqs = [
  {
    question: 'How much does a roof inspection cost in Kent?',
    answer:
      'A standard roof inspection in Kent typically costs between £149 and £299, depending on the size and type of property. Drone inspections start from £199. We always give you a fixed price before we arrive — see our full cost guide for details.',
  },
  {
    question: 'How long does a roof inspection take?',
    answer:
      'For a typical semi-detached or terraced house, expect around 60 to 90 minutes on site. Larger detached properties, bungalows or commercial buildings may take 2 to 3 hours. You will receive your written report within 24 hours of the visit.',
  },
  {
    question: 'Do I need a roof inspection before buying a house in Kent?',
    answer:
      'Yes, strongly recommended. A standard homebuyer survey rarely covers the roof in detail, and roof repairs can run into thousands of pounds. Our pre-purchase inspection gives you a clear picture of what you are buying before you exchange contracts.',
  },
  {
    question: 'Can you inspect a roof without scaffolding or ladders?',
    answer:
      'For many inspections we use drone photography, binoculars and close-up access at eaves level. Where closer access is needed, we use safe roof ladders. Scaffolding is rarely needed for a standard inspection.',
  },
  {
    question: 'What areas do you cover across Kent?',
    answer:
      'We cover the whole of Kent, including Canterbury, Maidstone, Ashford, Dartford, Folkestone, Dover, Tonbridge, Sevenoaks, Sittingbourne, Thanet and surrounding villages. We aim to have an inspector with you within one to two working days.',
  },
  {
    question: 'What does your inspection report include?',
    answer:
      'Every report includes high-resolution photographs, a condition rating for each element of the roof, a clear description of any defects found, and a priority-rated list of recommended actions — split into urgent, medium-term and advisory items.',
  },
  {
    question: 'Are you able to help with insurance claims after storm damage?',
    answer:
      'Yes. We provide storm damage assessment reports specifically formatted for insurance claims. These detail pre-existing condition versus storm-caused damage, which insurers require before processing a claim.',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homepageFaqs)) }}
      />

      {/* Hero */}
      <Hero
        badge="Same-day inspections available"
        headline="Roof Inspections You Can Actually Trust"
        subheadline="Professional roof surveys, leak detection and drone inspections across Kent. Clear reports, honest advice, and a fixed price before we arrive. Serving homeowners and businesses in Canterbury, Maidstone, Ashford and Dartford."
        ctaPrimary={{ label: 'Book an Inspection', href: '/contact' }}
      />

      {/* Problem section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">When Do You Actually Need a Roof Inspection?</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Most people do not think about their roof until something goes wrong. Here are the situations where getting an expert up there can save you a lot of money and stress.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: '🏡',
                title: 'Buying a House',
                description:
                  'Your solicitor\'s survey skims over the roof. A specialist inspection tells you exactly what you are inheriting — before you sign on the dotted line.',
              },
              {
                emoji: '💧',
                title: 'You Have a Leak',
                description:
                  'Damp patches on ceilings, water marks on walls, or a musty loft. We find the exact source — even when it\'s not directly above the stain.',
              },
              {
                emoji: '🌩️',
                title: 'After a Storm',
                description:
                  'Kent takes a battering from coastal storms. Slipped slates, damaged flashing and blocked gutters often only become visible after bad weather.',
              },
              {
                emoji: '🔧',
                title: 'Routine Maintenance',
                description:
                  'If your roof is over 10 years old, a check every 2–3 years catches small problems before they become expensive ones.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="text-3xl mb-3" aria-hidden="true">{item.emoji}</div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Our Roof Inspection Services</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              From a quick residential check to a full commercial survey — every service comes with a written report and honest recommendations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-10 px-4 bg-accent-500">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-xl">Free quotes, no obligation.</p>
            <p className="text-orange-100 text-sm mt-1">We respond within 2 hours, Mon–Sat. No call centres.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-accent-600 font-semibold px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors shadow-sm">
              Get a Free Quote
            </Link>
            <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <TrustSignals />

      {/* Local trust */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
                Built in Kent, for Kent Homeowners
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                We are not a national franchise that happens to cover your postcode. Kent Roof Inspections started in Maidstone in 2009, and the vast majority of our work is in the towns and villages we know well — from the Victorian terraces of Canterbury and Folkestone to the newer estates around Ashford and Dartford.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                Kent&apos;s coastal and semi-coastal climate means roofs here work harder than most. Salt-laden air accelerates the weathering of mortar, flashing and felt. The heavy rainfall that Kent sees in autumn and winter puts particular pressure on gutters and drainage. We understand the specific defects that show up in Kent properties and what they cost to fix.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                When you book with us, you get a local inspector who has seen the same types of property in your area, knows the local roofing contractors, and can give you a realistic picture of both the problem and the solution.
              </p>
              <div className="flex flex-wrap gap-3">
                {BUSINESS.areaServed.map((area) => (
                  <span key={area} className="bg-brand-50 text-brand-700 text-sm font-medium px-4 py-1.5 rounded-full border border-brand-100">
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-xl mb-6">At a Glance</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '15+', label: 'Years in Kent' },
                  { value: '4,200+', label: 'Roofs inspected' },
                  { value: '4.9/5', label: 'Average rating' },
                  { value: '< 2hrs', label: 'Quote response' },
                  { value: '24hrs', label: 'Report turnaround' },
                  { value: '11+', label: 'Towns covered' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-brand-700 mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSteps steps={steps} />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ items={homepageFaqs} />

      {/* Blog teasers */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Roofing Guides &amp; Advice</h2>
              <p className="text-slate-500">Plain-English answers to the questions we get asked most.</p>
            </div>
            <Link href="/blog" className="text-brand-600 font-medium hover:underline text-sm">View all articles →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'How Much Does a Roof Inspection Cost in Kent?',
                href: '/blog/roof-inspection-cost-kent',
                category: 'Costs',
                excerpt: 'A realistic guide to what you should expect to pay — and why prices vary.',
              },
              {
                title: 'How to Check Your Roof for Leaks',
                href: '/blog/how-to-check-roof-for-leaks',
                category: 'DIY Guide',
                excerpt: 'What to look for from the loft and ground level — before calling a professional.',
              },
              {
                title: 'Do You Need a Roof Survey Before Buying a House?',
                href: '/blog/roof-survey-before-buying-house',
                category: 'Buying Guide',
                excerpt: 'The standard homebuyer report is not enough. Here is why.',
              },
              {
                title: 'Benefits of Drone Roof Inspections',
                href: '/blog/benefits-drone-roof-inspections',
                category: 'Technology',
                excerpt: 'Why more homeowners and landlords are choosing drones over scaffolding.',
              },
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group bg-slate-50 rounded-2xl border border-slate-100 p-6 hover:border-brand-200 hover:shadow-md transition-all"
              >
                <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full">{article.category}</span>
                <h3 className="font-semibold text-slate-900 mt-3 mb-2 group-hover:text-brand-700 transition-colors leading-snug">{article.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{article.excerpt}</p>
                <div className="mt-4 text-brand-600 text-sm font-medium flex items-center gap-1">
                  Read guide
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        heading="Got a Roof Concern? Let&apos;s Take a Look."
        body="Book a professional roof inspection across Kent. We will give you a straight answer on what needs doing — and what can wait. No scare tactics, no upselling."
      />
    </>
  )
}
