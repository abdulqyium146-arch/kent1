import type { Metadata } from 'next'
import Link from 'next/link'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import TrustBadges from '@/components/ui/TrustBadges'
import LocationGrid from '@/components/ui/LocationGrid'
import ServiceCard from '@/components/ui/ServiceCard'
import CTABanner from '@/components/ui/CTABanner'
import NAPBlock from '@/components/ui/NAPBlock'
import { roofvueServices } from '@/lib/services'
import { getHomepageFAQs } from '@/lib/faq-data'

// SEO: Unique homepage title targets the primary head-term for the whole site.
// "No Ladders" and "48hr Reports" are the two strongest conversion USPs.
export const metadata: Metadata = {
  title: 'Drone Roof Surveys Kent | No Ladders, 48hr Reports | RoofVue',
  description:
    'Professional drone roof surveys across Kent. Safe aerial inspections in Maidstone, Canterbury, Folkestone & 50+ Kent towns. CAA-licensed pilots. PDF report in 48hrs.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Drone Roof Surveys Kent | No Ladders, 48hr Reports | RoofVue',
    description:
      'Professional drone roof surveys across Kent. CAA-licensed pilots. No scaffolding needed. PDF report within 48hrs.',
    url: '/',
  },
}

const howItWorksSteps = [
  {
    number: '01',
    title: 'Book Online',
    description:
      'Fill in our quick contact form or call us directly. Tell us your address and which service you need. We will confirm your appointment within a few hours.',
  },
  {
    number: '02',
    title: 'We Fly Your Roof',
    description:
      'Our CAA-licensed drone pilot arrives at the agreed time and conducts a thorough aerial survey of your roof — no scaffolding, no ladders, no disruption.',
  },
  {
    number: '03',
    title: 'Receive Your Report',
    description:
      'Within 48 hours you receive a professionally formatted PDF report with HD imagery, annotated findings, and prioritised repair recommendations.',
  },
]

const whyRoofVue = [
  {
    title: 'Safer than traditional surveys',
    description:
      'No one climbs on your roof. Our drones access every elevation safely from ground level, eliminating the risk of damage to tiles or gutters during inspection.',
  },
  {
    title: 'Faster turnaround',
    description:
      'From booking to report in as little as 48 hours. No waiting weeks for a scaffold erection. Perfect for time-sensitive purchases and insurance claims.',
  },
  {
    title: 'More cost-effective',
    description:
      'Scaffold erection alone can cost £800–£2,000 in Kent. Our drone surveys deliver a better inspection at a fraction of that cost, starting from just £149.',
  },
  {
    title: 'More detailed imagery',
    description:
      'HD drone cameras capture close-up detail of flashings, ridge tiles and chimney stacks that is simply impossible to achieve from the ground or even a ladder.',
  },
]

export default function HomePage() {
  const faqs = getHomepageFAQs()

  return (
    <>
      {/* SEO: Page-level schemas supplement the global layout schemas */}
      <LocalBusinessSchema pageUrl="/" />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }]} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="text-green-400">●</span>
              CAA-Licensed Pilots · Covering All of Kent
            </div>
            {/* SEO: H1 includes primary keyword "Drone Roof Surveys" + county "Kent" */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Drone Roof Surveys{' '}
              <span className="text-accent-400">Across Kent</span>
            </h1>
            <p className="speakable-intro text-xl text-brand-100 mb-8 leading-relaxed">
              CAA-licensed drone inspections — no ladders, no scaffolding. Covering all of Kent
              from Maidstone to Canterbury, Folkestone to Dartford. PDF report within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-bold text-lg transition-colors shadow-cta"
              >
                Book a Survey
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-white/40 hover:bg-white/10 text-white font-semibold text-lg transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Badges ──────────────────────────────────────────────────── */}
      <section className="py-10 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            {/* SEO: H2 includes "Kent Roof Survey Services" — secondary keyword cluster */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Our Kent Roof Survey Services
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Four specialist services for every situation — from buying a home to managing a
              rental portfolio across Kent.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {roofvueServices.map((service) => (
              <ServiceCard key={service.slug} service={service} showPrice />
            ))}
          </div>
        </div>
      </section>

      {/* ── Kent Coverage ─────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            {/* SEO: H2 "Covering Every Corner of Kent" + nearby town links = local SEO authority */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Covering Every Corner of Kent
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              From the Medway towns to the Romney Marsh, from the Thanet coast to the Weald — we
              cover every town and village across all Kent postcodes.
            </p>
          </div>
          <LocationGrid groupByRegion />
          <p className="text-center mt-6 text-slate-500 text-sm">
            Don&apos;t see your town?{' '}
            <Link href="/contact" className="text-brand-600 hover:underline font-medium">
              Get in touch
            </Link>{' '}
            — we cover all of Kent.
          </p>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              How Our Kent Drone Surveys Work
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Three simple steps from booking to report.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-6xl font-black text-brand-100 mb-3 leading-none">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why RoofVue ───────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Why Kent Homeowners Choose RoofVue
            </h2>
            <p className="text-brand-200 text-lg max-w-2xl mx-auto">
              Drone surveys vs traditional scaffold-based inspections — there is simply no
              comparison for speed, safety and value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyRoofVue.map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-xl bg-white/10 border border-white/10">
                <div className="text-accent-400 text-2xl font-bold mt-0.5">✓</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-brand-200 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Common Questions About Roof Surveys in Kent
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-slate-200 rounded-xl bg-white overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none font-semibold text-slate-900">
                  {faq.question}
                  <span className="text-brand-600 text-xl flex-shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
              </details>
            ))}
          </div>
          <p className="text-center mt-6">
            <Link href="/faq" className="text-brand-600 hover:underline font-medium">
              View all frequently asked questions →
            </Link>
          </p>
        </div>
      </section>

      {/* ── NAP + Final CTA ───────────────────────────────────────────────── */}
      <section className="py-10 px-4 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <NAPBlock showAddress showHours />
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <CTABanner
            heading="Ready to Book Your Roof Survey in Kent?"
            subtext="CAA-licensed pilots, no scaffolding needed, PDF report within 48 hours. Covering all of Kent from £149."
            primaryLabel="Book a Survey"
            primaryHref="/contact"
            secondaryLabel="View Services"
            secondaryHref="/services"
          />
        </div>
      </section>
    </>
  )
}
