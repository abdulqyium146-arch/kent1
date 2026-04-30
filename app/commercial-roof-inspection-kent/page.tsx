import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import { faqSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Commercial Roof Inspection Kent | Business & Industrial Properties',
  description:
    'Expert commercial roof inspections across Kent for business owners, property managers and landlords. Flat roofs, industrial units, offices and retail. Insurance-grade reports.',
  alternates: { canonical: '/commercial-roof-inspection-kent' },
}

const faqs = [
  {
    question: 'What types of commercial roofs do you inspect in Kent?',
    answer:
      'We inspect all common commercial roof types: built-up felt, EPDM rubber membrane, GRP fibreglass, single-ply TPO/PVC, metal profiled sheeting, asphalt and traditional pitched roofs on commercial premises. Each system has different failure modes and we assess them accordingly.',
  },
  {
    question: 'Will the inspection disrupt our business operations?',
    answer:
      'We plan our inspections to minimise disruption. For most flat-roofed commercial premises, we can access the roof without entering the occupied areas at all. We also offer early morning and evening appointments for tenanted properties.',
  },
  {
    question: 'Do you provide reports for insurance renewals?',
    answer:
      'Yes. Many commercial insurers require evidence of roof condition as part of annual renewal or as a condition of cover for properties over a certain age. Our condition reports are formatted to satisfy these requirements.',
  },
  {
    question: 'Can you help with dilapidations at end of lease?',
    answer:
      'Yes. We carry out dilapidation surveys for both landlords and tenants at the end of commercial leases — establishing the pre-existing condition versus tenant-caused deterioration. These reports are used in negotiations and, if necessary, legal proceedings.',
  },
  {
    question: 'How do you handle large commercial or industrial roofs?',
    answer:
      'For large roof areas, we combine drone aerial photography with targeted close-up inspection of identified areas of concern. This is far more cost-effective than scaffolding the entire perimeter and produces better documentation.',
  },
]

export default function CommercialRoofInspectionKent() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Commercial Roof Inspection Kent', 'Professional commercial roof inspection for businesses and landlords across Kent.', '/commercial-roof-inspection-kent')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <Hero
        badge="Business & industrial properties · Insurance reports · Dilapidations"
        headline="Commercial Roof Inspections Across Kent"
        subheadline="Protecting your commercial property starts at the top. We provide thorough, professionally documented roof inspections for business owners, landlords and property managers across Kent."
        ctaPrimary={{ label: 'Request a Commercial Quote', href: '/contact' }}
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Commercial Roof Inspections Are Different</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            A residential roof inspection and a commercial one require different expertise. Commercial roofs — particularly flat-roofed units, industrial premises and older retail stock — use different materials, have different failure modes, and the consequences of getting it wrong are different too. A leaking commercial roof can mean stock damage, business interruption, insurance complications and potentially unsafe premises.
          </p>
          <p className="text-slate-600 leading-relaxed mb-5">
            Across Kent — from the industrial estates around Maidstone and Ashford to retail units in Canterbury and Dartford town centres — we inspect commercial properties for business owners who want to understand the condition of their asset, and for landlords who need documentation to manage their portfolio effectively.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
            {[
              { title: 'Annual Condition Reports', desc: 'A scheduled annual inspection gives you a rolling record of roof condition — invaluable for budget planning and demonstrating maintenance to insurers.' },
              { title: 'Insurance Claim Support', desc: 'Storm damage, water ingress and structural deterioration all require documented evidence. We produce reports that insurance adjusters can work with directly.' },
              { title: 'Pre-Purchase Due Diligence', desc: 'Before acquiring a commercial property, understand the roof\'s condition and the potential capital expenditure required over the next 5–10 years.' },
              { title: 'Dilapidation Surveys', desc: 'At lease end, establish clearly what condition the roof was in — whether you are the landlord protecting against tenant damage or the tenant establishing pre-existing deterioration.' },
              { title: 'Planned Maintenance Surveys', desc: 'We help property managers develop a rolling maintenance programme — identifying which elements can be repaired, which need monitoring and which need budget allocation for replacement.' },
              { title: 'Drone Roof Surveys', desc: 'For large commercial roofs, drone inspection is dramatically more cost-effective than scaffolding and produces better documentation. We cover the whole roof in a single session.' },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Commercial Roof Systems We Inspect</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { system: 'Built-Up Felt (BUR)', detail: 'Common on older commercial premises. We check layer integrity, surface condition, drainage, and ballast.' },
              { system: 'EPDM Rubber Membrane', detail: 'Excellent longevity but susceptible to punctures, seam failures and poor detailing at edges.' },
              { system: 'GRP Fibreglass', detail: 'We assess for cracking, delamination, inadequate falls and junction failures.' },
              { system: 'Single-Ply (TPO / PVC)', detail: 'Modern systems that fail at seams and penetrations. We use thermal imaging to identify issues.' },
              { system: 'Metal Profiled Sheeting', detail: 'Common in industrial units. We check fixings, laps, flashings and condensation risk.' },
              { system: 'Traditional Pitched (Commercial)', detail: 'Pubs, churches, older retail — we inspect traditional coverings on non-residential structures.' },
            ].map((item) => (
              <div key={item.system} className="flex gap-4 bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-0.5 text-sm">{item.system}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/drone-roof-inspection-kent" className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-brand-200 transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">Drone Inspection</h3>
              <p className="text-sm text-slate-500 mt-1">Cost-effective for large commercial roof areas.</p>
            </Link>
            <Link href="/roof-leak-detection-kent" className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-brand-200 transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">Leak Detection</h3>
              <p className="text-sm text-slate-500 mt-1">Thermal imaging to find leak sources quickly.</p>
            </Link>
            <Link href="/contact" className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-brand-200 transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">Get a Quote</h3>
              <p className="text-sm text-slate-500 mt-1">Commercial pricing on request — tailored to your property.</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQ items={faqs} heading="Commercial Roof Inspection FAQs" />
      <CTABanner heading="Commercial Roof Inspection in Kent" body="Whether you are a sole trader with a single unit or a landlord managing a portfolio, we provide the documentation and expertise you need. Tailored quotes for commercial properties." />
    </>
  )
}
