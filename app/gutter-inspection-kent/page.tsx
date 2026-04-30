import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import { faqSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Gutter Inspection Kent | Gutter Survey & Clearance from £99',
  description:
    'Professional gutter inspection and clearance across Kent. Blocked gutters cause damp, wall damage and foundation problems. Book a gutter survey in Canterbury, Maidstone, Ashford.',
  alternates: { canonical: '/gutter-inspection-kent' },
}

const faqs = [
  {
    question: 'How do I know if my gutters need inspecting?',
    answer:
      'Common signs include water overflowing at the sides during rain, visible plant growth in gutters, damp patches on exterior walls beneath the gutter line, staining on renders or brickwork, and water marks inside the house near the eaves. If it has been more than 2 years since your gutters were checked, it is worth booking an inspection.',
  },
  {
    question: 'Do you clear gutters as well as inspect them?',
    answer:
      'Our inspection includes clearing any debris identified during the inspection. If your gutters require more extensive clearing or there is significant blockage in downpipes, we will advise on this and can arrange a separate clearing visit if required.',
  },
  {
    question: 'How often should gutters be inspected in Kent?',
    answer:
      'We recommend annual inspection for most properties, ideally in late autumn after the leaves have fallen. Properties near trees, or in areas with heavy leaf fall, may benefit from twice-yearly clearing. Kent\'s autumn and winter rainfall makes good gutter function particularly important.',
  },
  {
    question: 'Can blocked gutters really cause damp inside?',
    answer:
      'Yes, and this is frequently misdiagnosed. When gutters overflow, water runs down the wall rather than through the downpipe. Over time, this saturates the wall and causes internal damp that appears on the inner surface. It is often mistakenly treated as rising damp — which is far more expensive to fix.',
  },
  {
    question: 'Do you inspect cast iron gutters on period properties?',
    answer:
      'Yes. Cast iron guttering is common on Victorian and Edwardian properties in Canterbury, Maidstone and Folkestone. We check for corrosion, joint failure, missing brackets and cracking. Cast iron can last a very long time with proper maintenance — we will tell you what needs doing rather than recommending unnecessary replacement.',
  },
]

export default function GutterInspectionKent() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Gutter Inspection Kent', 'Professional gutter inspection, survey and clearance service across Kent.', '/gutter-inspection-kent')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <Hero
        badge="Including clearance · Annual checks · From £99"
        headline="Gutter Inspection & Survey in Kent"
        subheadline="Blocked or damaged gutters are one of the most overlooked — and most damaging — roof problems. We inspect, report and advise on your guttering system across Kent, with clearance included."
        ctaPrimary={{ label: 'Book a Gutter Inspection', href: '/contact' }}
        ctaSecondary={{ label: 'Roof Inspection Too', href: '/roof-inspection-kent' }}
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Gutters Matter More Than You Think</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            Gutters and downpipes are the least glamorous part of your roof — but they carry an enormous amount of water away from your property every year. In Kent, annual rainfall combined with autumn leaf fall means gutters work hard. When they fail, the consequences are far more serious than a bit of overflow.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Water overflowing from a blocked gutter runs down the wall, saturating brickwork and render. Over time, this causes internal dampness, deterioration of pointing and render, and in severe cases, damage to foundations. We regularly find that homeowners who believe they have rising damp actually have a gutter problem — which is much cheaper to fix.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: 'What We Check', items: ['Gutter condition and section integrity', 'Joints and unions for leaks', 'Fall and alignment (standing water)', 'Bracket security', 'Downpipe condition and flow', 'Outlet condition and discharge point', 'Soakaway function (where applicable)'] },
              { title: 'What We Look For', items: ['Blockages from leaves and debris', 'Vegetation growth (moss, weeds)', 'Corrosion in cast iron systems', 'Cracks and splits in uPVC', 'Poorly aligned or re-done repairs', 'Insufficient falls causing standing water', 'Missing or broken sections'] },
            ].map((col) => (
              <div key={col.title} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-3">{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-1.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Gutter Inspection Across Kent</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            We carry out gutter inspections on all property types across Kent — from Victorian terraces in Canterbury and Maidstone with original cast iron rainwater goods, to modern estates around Ashford and Dartford with uPVC systems, and everything in between.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Kent&apos;s urban and semi-rural mix means gutters are often partially blocked by a combination of road grit, moss, leaf fall from hedgerows and tile debris. An annual inspection keeps this under control and prevents the gradual damage that blocked gutters cause to walls and timbers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Book a Gutter Inspection</Link>
            <Link href="/roof-inspection-kent" className="btn-secondary">Add a Roof Inspection</Link>
          </div>
        </div>
      </section>

      <FAQ items={faqs} heading="Gutter Inspection FAQs" />
      <CTABanner heading="Keep Your Gutters Working This Winter" body="Book a gutter inspection before the wet season hits. We serve all of Kent — fixed prices, same-day availability, and a written report you can keep." variant="dark" />
    </>
  )
}
