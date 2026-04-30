import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import { faqSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Roof Leak Detection Kent | Find the Source of Any Leak',
  description:
    'Struggling to find where your roof is leaking? We use thermal imaging and moisture meters to locate the exact source. Serving all of Kent. Same-day appointments available.',
  alternates: { canonical: '/roof-leak-detection-kent' },
}

const faqs = [
  {
    question: 'Why can\'t I find where my roof is leaking?',
    answer:
      'Water travels. It enters the roof at one point but often appears inside the property somewhere completely different — sometimes several metres away. This is why leak detection requires systematic investigation rather than just looking directly above the damp patch.',
  },
  {
    question: 'What technology do you use to find roof leaks?',
    answer:
      'We use a combination of thermal imaging cameras (which identify temperature differentials caused by moisture), handheld moisture meters, visual inspection with close-up photography, and where necessary a controlled water test. This multi-method approach means we almost always find the source on the first visit.',
  },
  {
    question: 'How quickly can you find the leak?',
    answer:
      'In most cases we identify the source on the initial visit, typically within 60 to 90 minutes. You then receive a written report confirming the source, the likely cause, and what needs to be done to fix it.',
  },
  {
    question: 'Can you fix the leak as well as find it?',
    answer:
      'We are inspection specialists, not repair contractors. We tell you exactly what needs fixing and why. You then choose your own roofer — or we can recommend reputable local contractors in your area of Kent.',
  },
  {
    question: 'I have a flat roof that keeps leaking. Can you help?',
    answer:
      'Yes. Flat roofs are particularly tricky because the entry point and the visible leak can be far apart, and the roofing membrane can delaminate internally without obvious surface damage. We use thermal imaging specifically for this — it reveals moisture trapped within the build-up.',
  },
  {
    question: 'The leak only happens when it rains heavily. Can you still find it?',
    answer:
      'Yes. Even when the roof appears dry, thermal imaging and moisture meters can detect residual moisture in the structure. In some cases, we carry out a controlled water test to replicate the conditions — safely and without causing further damage.',
  },
]

export default function RoofLeakDetectionKent() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Roof Leak Detection Kent', 'Professional roof leak detection using thermal imaging and moisture meters across Kent.', '/roof-leak-detection-kent')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <Hero
        badge="Thermal imaging · Moisture meters · Same-day available"
        headline="We Find Roof Leaks Other Inspectors Miss"
        subheadline="Damp patches on ceilings, wet loft insulation, or water running down walls — we track down exactly where it is coming from. No guesswork, no stripping out, no unnecessary damage."
        ctaPrimary={{ label: 'Book Leak Detection', href: '/contact' }}
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Roof Leaks Are So Difficult to Find</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            The frustrating thing about a roof leak is that the water you see inside your home is almost never directly below the entry point. Water enters through a defect — a cracked tile, a failed flashing, a blocked valley — and then travels along rafters, battens and insulation before dripping somewhere completely different.
          </p>
          <p className="text-slate-600 leading-relaxed mb-5">
            This is why homeowners across Kent — in Canterbury, Maidstone, Ashford and Dartford — call us after a roofer has patched a roof twice and the leak is still there. The roofer fixed what they could see. We find where it is actually coming from.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mt-6">
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
              </svg>
              <div>
                <h3 className="font-semibold text-amber-900 mb-1">Act Quickly</h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  A small leak that goes untreated causes disproportionate damage over time — wet rot in roof timbers, mould in insulation, stained ceilings. The sooner you identify the source, the cheaper the repair will be.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">How We Find Your Roof Leak</h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">A systematic approach that gets to the answer quickly.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Thermal Imaging Survey',
                icon: '🌡️',
                description: 'Thermal imaging cameras detect temperature differences caused by moisture in the roof structure. Wet areas retain heat differently to dry areas — even when the leak is not active at the time of inspection. This is particularly effective on flat roofs and felt-covered extensions.',
              },
              {
                title: 'Moisture Meter Analysis',
                icon: '📊',
                description: 'We take systematic moisture readings across the loft space and roof structure. This allows us to map where moisture is concentrated and trace the direction of travel — essential for pinpointing the entry point.',
              },
              {
                title: 'Close-Up Visual Inspection',
                icon: '🔍',
                description: 'Using inspection cameras and close-up photography at roof level, we examine flashings, joints and junctions that are often invisible from ground level but where the vast majority of leaks originate.',
              },
              {
                title: 'Controlled Water Testing',
                icon: '💧',
                description: 'Where required, we conduct a controlled water test — systematically applying water to different sections of the roof and monitoring the response inside. This replicates rain conditions without causing further damage.',
              },
            ].map((method) => (
              <div key={method.title} className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm">
                <div className="text-3xl mb-3" aria-hidden="true">{method.icon}</div>
                <h3 className="font-semibold text-slate-900 text-xl mb-3">{method.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Common Causes of Roof Leaks in Kent</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            After inspecting thousands of properties across Kent, these are the defects that cause the vast majority of roof leaks:
          </p>
          <div className="space-y-3">
            {[
              { cause: 'Failed lead flashing', detail: 'Around chimneys, dormers and abutments. Lead expands and contracts with temperature — over time the joints open and allow water in.' },
              { cause: 'Cracked or slipped tiles', detail: 'A single displaced tile creates an unprotected gap. In storms, this is the most common cause of sudden leaks.' },
              { cause: 'Blocked or cracked valleys', detail: 'Valleys collect water from two slopes. If they block or the liner cracks, water backs up and enters the roof structure.' },
              { cause: 'Failed roof felt', detail: 'Particularly in older properties. Once the underlayer degrades, any small defect in the tile covering allows water through.' },
              { cause: 'Chimney pointing failure', detail: 'Cement mortar in Kent\'s climate deteriorates over 20–30 years. Water enters through hairline cracks and appears on chimney breast walls inside.' },
              { cause: 'Ridge and hip repointing failure', detail: 'Traditional mortar ridge tiles crack and loosen. Water runs straight down into the roof at the apex.' },
              { cause: 'Flat roof membrane failure', detail: 'Blistering, punctures and perished seams in felt, rubber or fibreglass flat roofs are a common source of leaks in extensions and garages.' },
            ].map((item) => (
              <div key={item.cause} className="flex gap-4 bg-slate-50 rounded-xl p-5 border border-slate-100">
                <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-0.5">{item.cause}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.detail}</p>
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
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">Roof Inspection</h3>
              <p className="text-sm text-slate-500 mt-1">Full condition assessment with written report.</p>
            </Link>
            <Link href="/drone-roof-inspection-kent" className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-brand-200 transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">Drone Inspection</h3>
              <p className="text-sm text-slate-500 mt-1">Aerial photography to identify defects safely.</p>
            </Link>
            <Link href="/blog/how-to-check-roof-for-leaks" className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-brand-200 transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">Leak Checking Guide</h3>
              <p className="text-sm text-slate-500 mt-1">What you can check yourself before calling us.</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQ items={faqs} heading="Leak Detection FAQs" />
      <CTABanner heading="Got a Leak? Let Us Find It." body="Same-day appointments available across Kent. We identify the exact source, give you a written report, and tell you exactly what needs fixing." />
    </>
  )
}
