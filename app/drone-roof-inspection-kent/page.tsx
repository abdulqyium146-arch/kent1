import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import { faqSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Drone Roof Inspection Kent | Aerial Survey from £199',
  description:
    'CAA-licensed drone roof inspections across Kent. No scaffolding, no ladders — high-resolution aerial photography with same-day report. Canterbury, Maidstone, Ashford, Dartford.',
  alternates: { canonical: '/drone-roof-inspection-kent' },
}

const faqs = [
  {
    question: 'Is a drone roof inspection as thorough as a traditional inspection?',
    answer:
      'For assessing the visible roof covering — tiles, slates, ridge, flashing — a drone provides clearer close-up imagery than a person on a ladder in many cases. However, drone inspections do not include a loft space check or physical tactile assessment of materials. For a complete picture, we often recommend combining a drone flight with a loft space check.',
  },
  {
    question: 'Are your drone pilots CAA licensed?',
    answer:
      'Yes. All of our drone operators hold a GVC (General Visual Line of Sight Certificate) under UK CAA regulations. We carry full public liability insurance that covers drone operations.',
  },
  {
    question: 'Can a drone fly in all weather conditions?',
    answer:
      'We do not fly in high winds, rain or very low light. If the weather on your booked day is unsuitable, we reschedule at no charge. Kent\'s weather is changeable — we usually give you a 48-hour heads-up if conditions look problematic.',
  },
  {
    question: 'How high will the drone fly above my property?',
    answer:
      'We operate within safe distances from structures, typically 5–15 metres from roof level, which produces high-resolution imagery that shows individual tile condition, flashing gaps and mortar detail clearly.',
  },
  {
    question: 'Will a drone inspection disturb my neighbours?',
    answer:
      'Modern inspection drones are quiet — much quieter than you might expect. We operate within CAA regulations which include maintaining safe distances from third-party property. Most inspections are completed without neighbours even noticing.',
  },
  {
    question: 'What format are the drone images and report in?',
    answer:
      'You receive high-resolution JPEG photographs, annotated to highlight any defects, along with a written condition report in PDF format — typically within a few hours of the inspection.',
  },
]

export default function DroneRoofInspectionKent() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Drone Roof Inspection Kent', 'CAA-licensed drone roof inspection service with aerial photography and written report across Kent.', '/drone-roof-inspection-kent')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <Hero
        badge="CAA licensed · No scaffolding · Same-day report"
        headline="Drone Roof Inspection in Kent"
        subheadline="High-resolution aerial photography of your entire roof. No scaffolding, no access equipment, no disturbance — just clear close-up imagery and a written report, often within hours."
        ctaPrimary={{ label: 'Book a Drone Inspection', href: '/contact' }}
        ctaSecondary={{ label: 'View Pricing', href: '/roof-inspection-cost-kent' }}
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why More Kent Homeowners Are Choosing Drone Inspections</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            A drone inspection offers something that traditional inspections cannot always match — a complete, high-resolution view of the entire roof surface in a single session, with no need for scaffolding, cherry pickers or high ladders. For tall properties, complex rooflines or older buildings where access equipment might cause further damage, it is often the best option available.
          </p>
          <p className="text-slate-600 leading-relaxed mb-5">
            Across Kent — from tall Victorian villas in Canterbury to modern apartment blocks in Dartford — we carry out drone inspections that would previously have required half a day of scaffold erection and hundreds of pounds in access costs. Instead, we arrive, fly, and have you a report the same day.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
            {[
              { stat: '4K', label: 'Resolution imagery' },
              { stat: '< 1hr', label: 'Typical flight time' },
              { stat: 'Same day', label: 'Report delivery' },
            ].map((item) => (
              <div key={item.label} className="bg-brand-50 rounded-2xl p-6 border border-brand-100 text-center">
                <div className="text-3xl font-bold text-brand-700 mb-1">{item.stat}</div>
                <div className="text-sm text-slate-500 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">When Is a Drone Inspection the Right Choice?</h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">Drone inspections are not always the answer — but in these situations, they are often the best one.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Tall or Complex Properties', desc: 'Three-storey houses, steep pitches, properties with multiple roof levels or difficult access. A drone gets a clear view without any risk.' },
              { title: 'Flat Roof Inspections', desc: 'Walking on a flat roof risks puncturing the membrane. A drone gives you a complete aerial view without any physical contact with the surface.' },
              { title: 'Post-Storm Damage Assessment', desc: 'After a storm, you want to know immediately what has happened. A drone can survey a roof in under an hour and identify damage to send to your insurer.' },
              { title: 'Historic or Listed Buildings', desc: 'Where access equipment might cause damage to period features or sensitive structures, aerial inspection removes that risk entirely.' },
              { title: 'Landlord Annual Checks', desc: 'For rental properties and HMOs, a quick aerial check each year catches minor issues before tenants report a leak.' },
              { title: 'Pre-Scaffolding Scoping', desc: 'Before erecting scaffolding for any major works, a drone flight identifies exactly what the scaffold needs to reach — saving money and planning time.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What Your Drone Inspection Includes</h2>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Pre-flight assessment', body: 'We check weather, airspace restrictions and any nearby hazards before the inspection day.' },
              { step: '2', title: 'Full aerial survey', body: 'Systematic flight covering all elevations and roof sections, with close-up passes at key areas — ridge, flashings, valleys, chimneys.' },
              { step: '3', title: 'High-resolution imagery', body: 'Hundreds of images captured, reviewed and curated to the most relevant views of your roof.' },
              { step: '4', title: 'Annotated photograph set', body: 'Defects and points of interest are highlighted directly on the photographs with explanatory notes.' },
              { step: '5', title: 'Written condition report', body: 'A clear PDF report with condition overview, defect schedule and recommended actions — delivered the same day in most cases.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 bg-slate-50 rounded-xl p-5 border border-slate-100">
                <div className="w-8 h-8 bg-brand-600 text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-0.5">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.body}</p>
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
            <Link href="/roof-inspection-kent" className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-brand-200 transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">Traditional Inspection</h3>
              <p className="text-sm text-slate-500 mt-1">Includes loft space and physical assessment.</p>
            </Link>
            <Link href="/storm-damage-roof-inspection-kent" className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-brand-200 transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">Storm Damage Assessment</h3>
              <p className="text-sm text-slate-500 mt-1">Rapid post-storm drone survey for insurance.</p>
            </Link>
            <Link href="/blog/benefits-drone-roof-inspections" className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-brand-200 transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">Drone Guide</h3>
              <p className="text-sm text-slate-500 mt-1">Full guide to drone inspection benefits.</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQ items={faqs} heading="Drone Inspection FAQs" />
      <CTABanner heading="Book a Drone Roof Inspection in Kent" body="No scaffolding, no disruption. CAA-licensed pilots, 4K imagery and a written report — often on the same day. Free fixed-price quote." />
    </>
  )
}
