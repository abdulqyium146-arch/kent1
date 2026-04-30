import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import ProcessSteps from '@/components/ProcessSteps'
import { faqSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Roof Inspection Kent | Expert Surveys from £149',
  description:
    'Professional roof inspections across Kent. Written photographic reports within 24 hours. Serving Canterbury, Maidstone, Ashford & Dartford. Fully insured, fixed prices.',
  alternates: { canonical: '/roof-inspection-kent' },
}

const faqs = [
  {
    question: 'What does a roof inspection in Kent include?',
    answer:
      'Our inspection covers the roof covering (tiles, slates or felt), ridge and hip tiles, valleys, flashing and lead work, chimney stacks, soffits and fascias, gutters and downpipes. We check for structural movement where visible and assess the overall condition. You receive a detailed photographic report with priority-rated recommendations within 24 hours.',
  },
  {
    question: 'How much does a roof inspection cost in Kent?',
    answer:
      'Standard inspections for a typical terraced or semi-detached house start from £149. Detached houses and bungalows are typically £175–£225. Larger properties and commercial buildings are priced individually. See our roof inspection cost page for a full breakdown.',
  },
  {
    question: 'How long will the inspection take?',
    answer:
      'Most residential inspections take 60 to 90 minutes on site. You will receive your written report within 24 hours — often the same evening.',
  },
  {
    question: 'Do I need to be at home during the inspection?',
    answer:
      'Yes, we ask that someone is at the property. We will need access to the loft space to check for signs of water ingress, condensation and structural condition from the inside.',
  },
  {
    question: 'Can you inspect a flat roof?',
    answer:
      'Yes. We inspect all types of flat roofing including felt, EPDM rubber, fibreglass (GRP), and asphalt. Flat roofs have their own common failure points and we assess these separately from the main pitch.',
  },
  {
    question: 'Will the inspection report be accepted by my mortgage lender?',
    answer:
      'Our reports are detailed and professionally produced. For mortgage-related surveys, we recommend our full roof survey service, which follows a more formal assessment format aligned with RICS guidance.',
  },
]

const steps = [
  {
    number: '1',
    title: 'Request a Quote',
    description: 'Tell us about your property — we will give you a fixed price before confirming the booking.',
  },
  {
    number: '2',
    title: 'Arrange Access',
    description: 'We confirm a convenient date and time. Loft access is helpful — we will let you know what to expect.',
  },
  {
    number: '3',
    title: 'On-Site Inspection',
    description: 'Our inspector carries out a thorough assessment of your roof, taking photographs throughout.',
  },
  {
    number: '4',
    title: 'Written Report',
    description: 'You receive a clear, prioritised report within 24 hours — with photos, condition ratings and recommendations.',
  },
]

export default function RoofInspectionKent() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Roof Inspection Kent', 'Professional roof inspection service across Kent with written photographic report.', '/roof-inspection-kent')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <Hero
        badge="Fixed prices · Written reports · 24hr turnaround"
        headline="Professional Roof Inspection in Kent"
        subheadline="A thorough assessment of your roof's condition — from ridge tiles to gutters. You get a clear, photographic report within 24 hours and a straight answer on what needs doing."
        ctaPrimary={{ label: 'Book an Inspection', href: '/contact' }}
        ctaSecondary={{ label: 'View Pricing', href: '/roof-inspection-cost-kent' }}
      />

      {/* Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is a Roof Inspection and When Do You Need One?</h2>
          <div className="prose prose-slate prose-lg max-w-none">
            <p>
              A roof inspection is a systematic assessment of your roof&apos;s condition — every element, from the covering and ridge line to the gutters, flashing and chimney stacks. The goal is simple: to tell you exactly what state your roof is in, what needs attention, and what can be left for now.
            </p>
            <p>
              Across Kent, homeowners typically book an inspection in one of four situations: they have spotted a damp patch and want to know where it is coming from; they are buying a property and want a proper look before they commit; a storm has come through and they want to know what damage has been done; or their roof is getting on a bit and they want to catch any problems early.
            </p>
            <p>
              What makes our inspection different from a quick look from a roofer is the level of detail and what you get afterwards. Every inspection results in a written, photographic report — not a verbal opinion, not a rough quote for works. You get documentation you can keep, share with your insurer or solicitor, and compare against future inspections.
            </p>
          </div>
        </div>
      </section>

      {/* What we inspect */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">What We Check During Your Roof Inspection</h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">We cover every element systematically — nothing gets missed.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Roof Covering', detail: 'Condition of tiles or slates, checking for slippage, cracking, missing units, and deterioration of the bedding mortar.' },
              { title: 'Ridge & Hip Tiles', detail: 'Repointed or dry-fixed? We check for cracking, loose sections and failed mortar — a common failure point in Kent properties.' },
              { title: 'Flashing & Lead Work', detail: 'Around chimneys, skylights and parapet walls. Failed flashing is one of the most common causes of water ingress.' },
              { title: 'Valleys', detail: 'Where two roof slopes meet is a high-stress area. We check for blockages, corrosion and delamination.' },
              { title: 'Chimney Stacks', detail: 'Pointing, flashings, chimney pots, and the stack itself. Chimneys are particularly prone to problems in older Kent homes.' },
              { title: 'Flat Roof Areas', detail: 'If your property has a flat roof extension, garage or bay window covering, we assess this separately with appropriate checks.' },
              { title: 'Soffits & Fascias', detail: 'Condition of boards and boxes, paint or cladding, gaps that might allow birds and insects entry.' },
              { title: 'Gutters & Downpipes', detail: 'Blockages, alignment, joints, and condition. Poor guttering is a silent cause of wall and foundation damp.' },
              { title: 'Loft & Rafter Space', detail: 'Signs of water ingress, staining, daylight penetration, condensation, and structural integrity of the roof timbers.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-600 rounded-full flex-shrink-0" aria-hidden="true" />
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How Much Does a Roof Inspection Cost in Kent?</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            We believe in transparent, fixed pricing. The price we quote is the price you pay. Here is a guide to our standard inspection fees:
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-brand-700 text-white">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold">Property Type</th>
                  <th className="text-left px-6 py-4 font-semibold">Inspection Fee</th>
                  <th className="text-left px-6 py-4 font-semibold">Includes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ['Terraced / Mid-terrace house', 'From £149', 'Full inspection + written report'],
                  ['Semi-detached house', 'From £165', 'Full inspection + written report'],
                  ['Detached house', 'From £195', 'Full inspection + written report'],
                  ['Bungalow', 'From £149', 'Full inspection + written report'],
                  ['Flat / Maisonette', 'From £99', 'External + accessible areas'],
                  ['Commercial / Mixed-use', 'POA', 'Full survey report, tailored quote'],
                ].map(([type, fee, includes]) => (
                  <tr key={type} className="even:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">{type}</td>
                    <td className="px-6 py-4 font-semibold text-brand-700">{fee}</td>
                    <td className="px-6 py-4 text-slate-500">{includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-400 mt-4">All prices include VAT. Travel surcharges do not apply within our standard Kent service area.</p>
          <div className="mt-6 flex gap-4 flex-wrap">
            <Link href="/roof-inspection-cost-kent" className="btn-secondary text-sm">See Full Pricing Guide</Link>
            <Link href="/contact" className="btn-primary text-sm">Get an Exact Quote</Link>
          </div>
        </div>
      </section>

      <ProcessSteps steps={steps} heading="How Our Inspection Works" subheading="From first contact to written report — here is what to expect." />

      {/* Local relevance */}
      <section className="py-16 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Roof Inspections Across Kent</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            We carry out roof inspections across the whole of Kent — from the historic streets of Canterbury and the newer developments around Ashford to the coastal properties in Folkestone and the commuter towns of Dartford and Sevenoaks.
          </p>
          <p className="text-slate-600 leading-relaxed mb-5">
            Kent&apos;s weather is harder on roofs than many parts of the country. Coastal air accelerates the degradation of mortar pointing and lead flashing. Autumn and winter storms — particularly those tracking in from the Channel — regularly cause slipped slates and blocked gutters across Maidstone, Tonbridge and the Weald. We see these patterns repeatedly and know what to look for.
          </p>
          <p className="text-slate-600 leading-relaxed">
            If your property is a Victorian or Edwardian terrace, a 1930s semi, or a period farmhouse — types of property that are extremely common across Kent — there are specific age-related defects we check for: original plain tiles that have reached the end of their natural life, cement fillets that have cracked away from lead valleys, and lime mortar pointing that has softened and washed out over the decades.
          </p>
        </div>
      </section>

      <FAQ items={faqs} heading="Roof Inspection FAQs" />

      {/* Internal links */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/roof-leak-detection-kent" className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-brand-200 transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">Roof Leak Detection</h3>
              <p className="text-sm text-slate-500 mt-1">We find the exact source of your leak.</p>
            </Link>
            <Link href="/drone-roof-inspection-kent" className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-brand-200 transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">Drone Inspections</h3>
              <p className="text-sm text-slate-500 mt-1">No scaffolding. High-resolution aerial survey.</p>
            </Link>
            <Link href="/blog/roof-inspection-cost-kent" className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-brand-200 transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">Cost Guide</h3>
              <p className="text-sm text-slate-500 mt-1">What you should expect to pay in Kent.</p>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner heading="Ready to Book Your Roof Inspection in Kent?" body="Fixed price, same-day availability, 24-hour report turnaround. No call centres — just a local expert who knows Kent roofs." />
    </>
  )
}
