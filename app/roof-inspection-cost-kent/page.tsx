import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import { faqSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Roof Inspection Cost Kent 2024 | Honest Pricing Guide',
  description:
    'How much does a roof inspection cost in Kent? Honest, transparent pricing from £99 to £350. No hidden extras. Compare inspection types and get a free fixed-price quote.',
  alternates: { canonical: '/roof-inspection-cost-kent' },
}

const faqs = [
  {
    question: 'What is the average cost of a roof inspection in Kent?',
    answer:
      'The average cost of a standard roof inspection in Kent is between £149 and £225 for a typical residential property. This includes a written photographic report. Drone inspections are typically £199. Full structural surveys for pre-purchase or insurance purposes cost from £299.',
  },
  {
    question: 'Are there any hidden costs?',
    answer:
      'No. The price we quote is the price you pay. We do not add VAT surcharges after the fact, mileage fees within our standard service area, or extra charges for the written report. The quote you receive is all-inclusive.',
  },
  {
    question: 'Why is there a range of prices for roof inspections?',
    answer:
      'Price varies primarily with property size and roof complexity. A small mid-terrace with a simple pitched roof takes half the time of a large detached with multiple levels, dormers, flat extensions and complex flashings. The price reflects the time and level of detail required.',
  },
  {
    question: 'Is a roof inspection worth the money?',
    answer:
      'Almost always yes. Roof repairs in Kent range from £200 for a minor tile fix to £8,000–£15,000+ for a full re-roof. Catching issues early — or identifying them before purchasing a property — is invariably cheaper than dealing with them after the damage has progressed.',
  },
  {
    question: 'Can I get a discount for multiple properties?',
    answer:
      'Yes. If you are a landlord, property manager or developer with multiple properties to inspect, we offer reduced per-property rates. Contact us to discuss your requirements.',
  },
]

export default function RoofInspectionCostKent() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Roof Inspection Cost Kent', 'Transparent pricing for roof inspections, surveys and drone assessments across Kent.', '/roof-inspection-cost-kent')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <Hero
        badge="Transparent pricing · Fixed fees · Free quotes"
        headline="How Much Does a Roof Inspection Cost in Kent?"
        subheadline="Straight answers on pricing — no vague ranges, no hidden extras. Here is exactly what you will pay for each type of inspection, and why."
        ctaPrimary={{ label: 'Get Your Fixed Quote', href: '/contact' }}
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Roof Inspection Prices in Kent</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            We publish our prices because we believe you should know what something costs before you book. Every price below includes the inspection, all travel within our standard Kent service area, and the written photographic report.
          </p>

          <div className="space-y-4">
            {[
              {
                type: 'Standard Roof Inspection',
                prices: [
                  ['Flat / Studio', 'From £99'],
                  ['Terraced / Mid-terrace', 'From £149'],
                  ['Semi-detached', 'From £165'],
                  ['Detached house', 'From £195'],
                  ['Large detached / complex', 'From £225'],
                  ['Bungalow', 'From £149'],
                ],
                includes: 'Visual inspection of all roof elements, loft space check, written photographic report (delivered within 24 hours), priority-rated recommendations.',
                color: 'bg-blue-50 border-blue-200',
              },
              {
                type: 'Drone Roof Inspection',
                prices: [
                  ['All residential properties', 'From £199'],
                  ['Combined drone + loft check', 'From £249'],
                ],
                includes: '4K aerial photography, annotated photo set, written condition report (same-day delivery in most cases).',
                color: 'bg-purple-50 border-purple-200',
              },
              {
                type: 'Roof Survey (Formal)',
                prices: [
                  ['Pre-purchase survey', 'From £299'],
                  ['Insurance / planning survey', 'From £349'],
                ],
                includes: 'Formal structured report suitable for solicitors, mortgage lenders and insurers. Typically 12–20 pages with full defect schedule and cost estimate ranges.',
                color: 'bg-green-50 border-green-200',
              },
              {
                type: 'Specialist Services',
                prices: [
                  ['Leak detection (thermal)', 'From £175'],
                  ['Gutter inspection', 'From £99'],
                  ['Storm damage assessment', 'From £149'],
                  ['Commercial inspection', 'POA'],
                ],
                includes: 'Each includes a written report appropriate to the service type.',
                color: 'bg-orange-50 border-orange-200',
              },
            ].map((section) => (
              <div key={section.type} className={`rounded-2xl p-7 border ${section.color}`}>
                <h3 className="font-bold text-slate-900 text-xl mb-4">{section.type}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {section.prices.map(([label, price]) => (
                    <div key={label} className="flex justify-between items-center bg-white rounded-xl px-5 py-3 border border-slate-100">
                      <span className="text-sm text-slate-700 font-medium">{label}</span>
                      <span className="font-bold text-brand-700">{price}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{section.includes}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-400 mt-6 text-center">All prices include VAT. No travel surcharges within our Kent service area. Prices correct as of 2024.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What Affects the Cost of a Roof Inspection?</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Roof inspection pricing is not arbitrary. Here is what actually drives the cost:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { factor: 'Property Size', impact: 'Larger roofs take longer to inspect thoroughly. A four-bedroom detached might have twice the roof area of a two-bedroom terrace.' },
              { factor: 'Roof Complexity', impact: 'A simple single-pitch is straightforward. Multiple slopes, dormers, skylights, flat extensions and chimney stacks each add inspection time.' },
              { factor: 'Access Requirements', impact: 'Ground-level and loft access is included. If scaffolding is required for any element, this would be quoted separately — though it is rarely needed.' },
              { factor: 'Type of Report', impact: 'A standard inspection report is sufficient for most purposes. A formal survey (for a lender, insurer or solicitor) takes longer to produce and costs more.' },
              { factor: 'Urgency', impact: 'Standard pricing applies for bookings within our normal schedule. Genuinely urgent same-day inspections — where available — are priced at the same rate.' },
              { factor: 'Property Age', impact: 'Older properties, particularly pre-1920 stock common in Canterbury and Maidstone, often have more complex features to assess. We price accordingly.' },
            ].map((item) => (
              <div key={item.factor} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-1">{item.factor}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Is a Roof Inspection Worth the Cost?</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            This is the question we get asked most often — and the honest answer is that in almost every case, yes. Consider the context:
          </p>
          <div className="bg-brand-50 rounded-2xl p-7 border border-brand-100">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { cost: '£149–£299', label: 'Inspection cost' },
                { cost: '£500–£2,000', label: 'Minor roof repairs (caught early)' },
                { cost: '£8,000–£18,000', label: 'Full re-roof (caught late)' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-2xl font-bold text-brand-700 mb-1">{item.cost}</div>
                  <div className="text-sm text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-6">
            A roof inspection is not an expense — it is information. Information that lets you plan and budget, negotiate a purchase price, or make an insurance claim with the right evidence. The cost of not knowing is almost always higher.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Get a Fixed-Price Quote</Link>
            <Link href="/roof-inspection-kent" className="btn-secondary">See What We Inspect</Link>
          </div>
        </div>
      </section>

      <FAQ items={faqs} heading="Roof Inspection Cost FAQs" />
      <CTABanner heading="Get Your Exact Quote Today" body="Tell us about your property and we will give you a fixed price — no surprises, no hidden costs. Quotes within 2 hours, Mon–Sat." />
    </>
  )
}
