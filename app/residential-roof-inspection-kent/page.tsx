import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import Testimonials from '@/components/Testimonials'
import { faqSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Residential Roof Inspection Kent | Home Surveys from £149',
  description:
    'Professional residential roof inspections for homeowners across Kent. Fixed prices, 24hr reports, same-day availability. Serving Canterbury, Maidstone, Ashford & Dartford.',
  alternates: { canonical: '/residential-roof-inspection-kent' },
}

const faqs = [
  {
    question: 'How often should I have my home\'s roof inspected?',
    answer:
      'For most homes in Kent, we recommend an inspection every 3–5 years as routine maintenance. For properties over 20 years old, or after any significant storm event, every 2–3 years is more appropriate. After the storms that regularly track across Kent from the Channel, an annual check of the ridge and flashings is sensible.',
  },
  {
    question: 'What type of roof covering do most Kent homes have?',
    answer:
      'The majority of Kent\'s housing stock uses clay plain tiles on older properties and concrete interlocking tiles on those built from the 1970s onwards. Slate — both natural Welsh and artificial — is common in period properties, particularly in Canterbury, Maidstone town centre and Folkestone. Each material has different maintenance requirements and typical lifespans.',
  },
  {
    question: 'Do you inspect bungalows?',
    answer:
      'Yes — and bungalows are often easier to inspect thoroughly because the roof is lower and the loft space is more accessible. Bungalows in Kent are also common, particularly in coastal areas, and tend to have lower-pitch roofs that retain more moisture.',
  },
  {
    question: 'My roof is new — do I still need an inspection?',
    answer:
      'A new roof should not need inspection for the first 5–10 years if it was installed correctly. However, if you did not commission the work yourself — for example, if you bought a property with a recently replaced roof — it is worth having it checked to confirm it was installed to a proper standard.',
  },
  {
    question: 'Can you spot signs of structural movement in the roof?',
    answer:
      'Yes. We check for sagging, spreading and deflection in the roof structure where visible from the loft space and exterior. While we are not structural engineers, we flag significant movement for further specialist assessment.',
  },
]

export default function ResidentialRoofInspectionKent() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Residential Roof Inspection Kent', 'Professional roof inspections for homeowners across Kent.', '/residential-roof-inspection-kent')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <Hero
        badge="Homeowner specialists · Fixed prices · Honest advice"
        headline="Residential Roof Inspections in Kent"
        subheadline="Whether you are worried about a leak, buying a new home, or just overdue a check — we give you a clear picture of your roof's condition with a written report and straight advice. No scare tactics."
        ctaPrimary={{ label: 'Book Your Inspection', href: '/contact' }}
        ctaSecondary={{ label: 'See Pricing', href: '/roof-inspection-cost-kent' }}
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What We Check on Your Home&apos;s Roof</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Our residential inspection covers every accessible part of your roof — and we explain what we find in plain English, not technical jargon. Here is what we assess on a typical Kent home:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { area: 'Roof Tiles & Slates', what: 'Condition, alignment, breakage, slippage and general life expectancy. We note whether re-laying or replacement is likely to be needed within the next 5–10 years.' },
              { area: 'Ridge & Hip Tiles', what: 'Mortar bedding or dry-fix security. Loose ridge tiles are one of the most common — and most dangerous — defects we find.' },
              { area: 'Chimney Stacks', what: 'Pointing condition, flashing security, pot condition and general structure. A crumbling chimney in a Kent winter can cause significant internal damage.' },
              { area: 'Lead & Flashing', what: 'Around dormers, abutments, valleys and parapet walls. Failed flashing is responsible for more than half of all residential leaks we investigate.' },
              { area: 'Fascias & Soffits', what: 'Condition, gaps, ventilation adequacy and signs of pest entry. We check uPVC as well as original timber.' },
              { area: 'Gutters & Downpipes', what: 'Blockages, joints, fall and alignment. Overflowing gutters are a leading cause of wall damp that is often misdiagnosed as rising damp.' },
              { area: 'Loft Space', what: 'Evidence of water ingress, daylight penetration, condensation, timber condition and insulation state. The loft tells you things the exterior does not.' },
              { area: 'Flat Roof Areas', what: 'If your property has a flat-roofed extension, bay or garage, we inspect this separately — it has different materials and different failure modes.' },
            ].map((item) => (
              <div key={item.area} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-brand-600 rounded-full" aria-hidden="true" />
                  {item.area}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-brand-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Serving Homeowners Across Kent</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            Our residential inspectors understand the housing stock across Kent — because we have been inspecting it for over 15 years. Kent has an unusually diverse mix of property types: medieval timber frame in the countryside, Georgian town houses in Maidstone and Canterbury, Victorian and Edwardian terraces throughout the market towns, large quantities of interwar semi-detached, post-war local authority and private build, and a significant amount of more recent development around Ashford, Dartford and Sittingbourne.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Each era and each property type has characteristic defects — and we know what they are. When we inspect a 1930s semi in Maidstone, we know to check the verge details. When we inspect a Victorian terrace in Canterbury, we know to look closely at the chimney flashings and the valley condition. This local knowledge saves time and means you get a more thorough, accurate report.
          </p>
        </div>
      </section>

      <Testimonials />

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/roof-survey-kent" className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-brand-200 transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">Roof Survey</h3>
              <p className="text-sm text-slate-500 mt-1">Buying a house? Need a formal survey report?</p>
            </Link>
            <Link href="/gutter-inspection-kent" className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-brand-200 transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">Gutter Inspection</h3>
              <p className="text-sm text-slate-500 mt-1">Blocked gutters and downpipes checked.</p>
            </Link>
            <Link href="/blog/how-to-check-roof-for-leaks" className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-brand-200 transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">Self-Check Guide</h3>
              <p className="text-sm text-slate-500 mt-1">What you can safely check yourself first.</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQ items={faqs} heading="Residential Roof Inspection FAQs" />
      <CTABanner heading="Book Your Residential Roof Inspection" body="Fixed prices, honest advice, 24-hour report. We serve homeowners across all of Kent — book online or call us directly." />
    </>
  )
}
