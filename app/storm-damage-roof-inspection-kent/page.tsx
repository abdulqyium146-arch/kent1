import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import { faqSchema, serviceSchema, BUSINESS } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Storm Damage Roof Inspection Kent | Same-Day Assessment',
  description:
    'Same-day storm damage roof inspections across Kent. Insurance-grade reports for Canterbury, Maidstone, Ashford & Dartford homeowners. Slipped tiles, broken flashings, gutter damage.',
  alternates: { canonical: '/storm-damage-roof-inspection-kent' },
}

const faqs = [
  {
    question: 'How quickly can you carry out a storm damage inspection?',
    answer:
      'We keep emergency appointment slots for post-storm situations. In most cases we can be at your property the same day or the following morning. We prioritise properties with active water ingress.',
  },
  {
    question: 'Will the inspection report be accepted by my insurance company?',
    answer:
      'Yes. Our storm damage reports are formatted specifically for insurance claims. They clearly distinguish between storm-caused damage and pre-existing wear, include annotated photographs, and provide the documentation that loss adjusters require to process a claim.',
  },
  {
    question: 'What storm damage should I look for on my roof?',
    answer:
      'From the ground and garden: displaced or missing tiles, slipped slates, debris on the roof, visible gaps in the ridge or hip, damaged flashing at chimneys, gutters pulled away from fascias. From inside: new damp patches, water entry in the loft, daylight visible through the roof.',
  },
  {
    question: 'Should I try to cover the roof myself after storm damage?',
    answer:
      'Only if you can do so safely from the ground, such as placing a tarpaulin using a pole. Never climb onto a damaged or wet roof without professional training and equipment. We can arrange emergency temporary covering as part of our service if water ingress is active.',
  },
  {
    question: 'My insurer wants a report before sending a loss adjuster. Can you help?',
    answer:
      'Yes — this is one of the most common requests we receive after storm events in Kent. We produce a pre-adjuster report that documents the damage comprehensively and speeds up the claims process.',
  },
  {
    question: 'Kent was hit by a named storm — are you very busy?',
    answer:
      'After major storm events we do experience high demand. We operate a priority system for properties with active leaks, and we are transparent about waiting times. If your property is weathertight (no active water entry), we will schedule you as soon as possible.',
  },
]

export default function StormDamageRoofInspectionKent() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Storm Damage Roof Inspection Kent', 'Emergency storm damage roof assessment with insurance-grade reports across Kent.', '/storm-damage-roof-inspection-kent')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <section className="bg-red-700 text-white py-3 px-4 text-center text-sm font-medium">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 bg-red-300 rounded-full animate-pulse" aria-hidden="true" />
          Storm emergency? Call us now on <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} className="underline font-bold">{BUSINESS.phone}</a>
        </span>
      </section>

      <Hero
        badge="Same-day urgent response · Insurance-grade reports"
        headline="Storm Damage Roof Inspection in Kent"
        subheadline="Kent takes a battering from Channel storms. If your roof has been damaged, fast action prevents a bad situation from getting worse. We carry out urgent inspections and produce the documentation your insurer needs."
        ctaPrimary={{ label: 'Book Emergency Inspection', href: '/contact' }}
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Act Quickly After Storm Damage</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            Kent sits in the path of Atlantic and Channel weather systems that can bring 60–80mph gusts. Named storms — like those that regularly cause significant damage across the South East — often leave behind a trail of displaced tiles, damaged flashings and blocked gutters that are not always obvious from the ground.
          </p>
          <p className="text-slate-600 leading-relaxed mb-5">
            The problem is that a small amount of storm damage gets dramatically worse if left. A single displaced tile in January, left until February, can allow enough water into the roof structure to wet insulation, stain ceilings, cause wet rot in battens and rafters, and result in a repair bill several times what it would have been if caught early.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
              </svg>
              Important: Do Not Delay Reporting to Your Insurer
            </h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              Most home insurance policies require storm damage to be reported promptly. Delayed reporting can complicate your claim — particularly if the damage worsens in the meantime. Our report documents the condition at the time of inspection, which protects your claim regardless of what happens next.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: 'Slipped & Missing Tiles', desc: 'The most common storm damage in Kent. Wind uplift dislodges individual tiles or slates, exposing the roof felt or boarding beneath.' },
              { title: 'Damaged Flashing', desc: 'Lead and zinc flashings around chimneys, dormers and abutments are particularly vulnerable to high winds — they can be lifted, bent or torn away.' },
              { title: 'Ridge Tile Displacement', desc: 'Ridge tiles sit at the apex of the roof with only mortar to hold them. Wind can loosen or remove them entirely — they can fall and cause significant damage or injury.' },
              { title: 'Blocked & Damaged Gutters', desc: 'Storm debris — branches, leaves, tile fragments — blocks gutters instantly. High winds can also rip sections of guttering away from their fixings.' },
              { title: 'Chimney Damage', desc: 'Chimney stacks are the most exposed part of any roof. Pots can be overturned, flaunching can crack, and lead flashings can lift in gale-force conditions.' },
              { title: 'Flat Roof Membrane Damage', desc: 'Extensions and garage roofs are vulnerable to wind uplift, particularly at edges and corners where the membrane is stressed.' },
            ].map((item) => (
              <div key={item.title} className="bg-red-50 rounded-xl p-5 border border-red-100">
                <h3 className="font-semibold text-slate-900 mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What Our Storm Damage Report Includes</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Our storm damage reports are specifically formatted for insurance purposes — they give your insurer exactly what they need.
          </p>
          <div className="space-y-3">
            {[
              { title: 'Pre-Storm Condition Assessment', body: 'Where visible evidence allows, we distinguish between damage that pre-dates the storm event and damage caused by it. Insurers require this distinction.' },
              { title: 'Storm Damage Catalogue', body: 'Each piece of storm damage is documented with photographs, measurements and a precise location reference.' },
              { title: 'Cause and Effect Analysis', body: 'We explain the likely sequence of events — how wind or water caused each type of damage — which supports your claim.' },
              { title: 'Immediate Risk Assessment', body: 'We identify any elements that pose an immediate safety risk — loose ridge tiles, overhanging chimney sections — and flag these separately.' },
              { title: 'Remedial Works Schedule', body: 'A clear schedule of works required, with priority ratings. This helps your insurer understand the scope of the claim.' },
              { title: 'Cost Estimate Range', body: 'Indicative cost ranges for the remedial works, based on current Kent contractor pricing.' },
            ].map((item, i) => (
              <div key={item.title} className="flex gap-4 bg-white rounded-xl p-5 border border-slate-200">
                <div className="w-7 h-7 bg-brand-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-0.5 text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.body}</p>
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
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">Drone Survey</h3>
              <p className="text-sm text-slate-500 mt-1">Fast aerial overview of damage after a storm.</p>
            </Link>
            <Link href="/roof-leak-detection-kent" className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-brand-200 transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">Leak Detection</h3>
              <p className="text-sm text-slate-500 mt-1">If the storm has caused water to enter your home.</p>
            </Link>
            <Link href="/contact" className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-brand-200 transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">Emergency Contact</h3>
              <p className="text-sm text-slate-500 mt-1">Call us directly for urgent same-day response.</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQ items={faqs} heading="Storm Damage FAQs" />
      <CTABanner heading="Storm Hit Your Roof? We Can Help Today." body="Same-day inspections available across Kent. Insurance-grade reports. Call now or submit your details and we will call you back within the hour." variant="dark" />
    </>
  )
}
