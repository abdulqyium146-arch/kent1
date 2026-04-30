import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import { articleSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Benefits of Drone Roof Inspections | Kent Homeowner Guide',
  description:
    'Why drone roof inspections are changing the industry — no scaffolding, better imagery, faster results. Find out if a drone survey is right for your Kent property.',
  alternates: { canonical: '/blog/benefits-drone-roof-inspections' },
}

const faqs = [
  {
    question: 'Is a drone inspection as accurate as a physical one?',
    answer:
      'For assessing the visual condition of a roof covering — tiles, slates, ridge, flashing, chimneys — a drone with a high-resolution camera often produces clearer, more complete imagery than a person on a roof ladder who can only see one section at a time. Where a drone inspection is limited is in the tactile assessment: you cannot test the firmness of mortar or check the flexibility of lead with a camera. For most condition assessments, the drone is excellent. For detailed structural surveys, we combine drone imagery with a loft space check.',
  },
  {
    question: 'Do I need to get planning permission for a drone inspection?',
    answer:
      'No. Drone flights for inspection purposes over private property are conducted under UK CAA regulations (specifically the Open and Specific categories). Our operators are GVC-certified and operate within the regulatory framework — no planning permission is required.',
  },
  {
    question: 'What happens if the weather is bad on inspection day?',
    answer:
      'We do not fly in rain, wind above 20mph or very low visibility. If conditions on your booked day are unsuitable, we reschedule at no charge and usually give you 48 hours notice when we can see the forecast is problematic.',
  },
  {
    question: 'Will the drone go over my neighbour\'s property?',
    answer:
      'We fly directly over the inspection property and aim to stay within its boundary where possible. For a typical residential property this is straightforward. In very tight urban settings — such as Canterbury or Maidstone town centre terraces — we plan the flight carefully to minimise overflight of third-party land, as required by CAA regulations.',
  },
]

export default function BlogDroneRoofInspections() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema(
              'The Real Benefits of Drone Roof Inspections',
              'How drone technology is changing roof inspections — faster, safer, better imagery, and no scaffolding costs.',
              '/blog/benefits-drone-roof-inspections',
              '2024-01-30'
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
              Technology
            </span>
            <time dateTime="2024-01-30" className="text-xs text-slate-400">
              30 January 2024
            </time>
            <span className="text-xs text-slate-400">· 5 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">
            The Real Benefits of Drone Roof Inspections
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Drone inspections are not a gimmick. For certain properties and certain situations, they are
            genuinely the better choice — faster, safer, cheaper on access costs, and often producing
            clearer imagery than a traditional inspection. Here is an honest look at what they offer
            and where they have limits.
          </p>
        </div>

        {/* Body */}
        <div className="prose prose-slate prose-lg max-w-none">

          <h2>Why Drones Changed the Way We Inspect Roofs</h2>
          <p>
            Before drones became affordable and reliable, the only way to get a close look at a roof
            was to get a person onto it — which meant a roof ladder at minimum, and scaffolding for
            anything tall or complex. Scaffolding for a single inspection visit on a large detached
            house could cost £600–£1,200. Many homeowners skipped the inspection altogether rather
            than pay that.
          </p>
          <p>
            A drone changes that calculation completely. We can survey a roof that would require a
            week of scaffolding erection in under an hour, at a fraction of the cost, without
            scaffolders, without neighbours having to move cars, without any physical risk to an
            inspector working at height.
          </p>
          <p>
            In Kent — where tall Victorian villas, steeply pitched Wealden farmhouses, and older
            commercial premises with difficult roof access are common — this matters a great deal.
          </p>

          <h2>The Practical Benefits, One by One</h2>

          <h3>1. No Scaffolding, No Access Costs</h3>
          <p>
            The headline benefit. For properties where traditional inspection would require scaffolding
            or a cherry picker, a drone removes that cost entirely. Even where a roof ladder is
            sufficient, the time saved and the safety improvement are significant.
          </p>

          <h3>2. Better Coverage of the Whole Roof</h3>
          <p>
            An inspector on a roof ladder sees the section immediately in front of them. They work
            their way across the roof in strips — but coverage can be incomplete, particularly on
            complex rooflines with multiple slopes, dormers and intersecting ridges.
          </p>
          <p>
            A drone can photograph the entire roof surface systematically — every slope, every
            junction, every elevation — producing a complete visual record in a single session.
            Defects that might be missed in a limited physical inspection are captured on camera.
          </p>

          <h3>3. Higher-Quality Imagery</h3>
          <p>
            Modern inspection drones carry cameras capable of 4K video and high-resolution stills.
            Flying 3–5 metres from a tile surface, the camera captures detail that is genuinely
            difficult to achieve from a roof ladder — including hairline cracks in tiles, the
            condition of individual mortar joints, and early-stage corrosion in lead flashings.
          </p>
          <p>
            These images are annotated and included in the report, giving you a visual record of
            your roof&apos;s condition that a written description alone cannot provide.
          </p>

          <h3>4. Dramatically Safer</h3>
          <p>
            Falls from height are one of the leading causes of fatal accidents in the construction
            and inspection sector. Removing the need for a person to work at height is not just a
            convenience — it is a meaningful safety improvement.
          </p>
          <p>
            For properties with particularly steep pitches, wet conditions, or fragile roof
            coverings (some older clay or concrete tiles can be surprisingly brittle), keeping
            people off the roof is the right call even if it is technically accessible.
          </p>

          <h3>5. Fast Results — Often Same Day</h3>
          <p>
            A drone inspection of a typical residential property takes under an hour on site. Images
            are reviewed immediately after landing. In most cases, you receive an annotated photo
            set and written condition report the same day — which matters when you are in the
            middle of a property purchase or an insurance claim.
          </p>

          <h3>6. Ideal for Post-Storm Assessment</h3>
          <p>
            After a significant storm — the kind that regularly tracks across Kent from the Channel —
            speed is important. You need to know what has happened to your roof as quickly as
            possible, both to prevent further damage and to document the situation for your insurer.
          </p>
          <p>
            A drone can survey an entire street of storm-affected properties in a morning. We use
            this to carry out rapid post-storm triage across Kent, helping homeowners understand what
            needs immediate attention and what can wait.
          </p>

          <h2>Where Drone Inspections Have Limits</h2>
          <p>
            It would be misleading to suggest drones replace all traditional inspection. Here is
            where we recommend combining drone imagery with a physical check:
          </p>
          <ul>
            <li>
              <strong>Loft space inspection:</strong> A drone cannot enter your loft. Signs of
              water ingress, structural movement and condensation inside the roof space require a
              physical visit. For a complete picture, we combine the drone flight with a loft
              space check.
            </li>
            <li>
              <strong>Tactile assessment:</strong> Pressing on mortar to test its hardness, flexing
              lead to check its condition, tapping tiles to listen for hollow sounds — none of this
              is possible with a camera. Where these checks matter, they require physical access.
            </li>
            <li>
              <strong>Weather dependency:</strong> We cannot fly in rain, high winds or very low
              light. This is a real constraint in Kent&apos;s autumn and winter.
            </li>
            <li>
              <strong>Heavily wooded sites:</strong> Trees can obstruct drone access to some roof
              sections. We plan our flights carefully, but this is occasionally a limitation.
            </li>
          </ul>

          <h2>Is a Drone Inspection Right for Your Property?</h2>
          <p>
            In our experience, drone inspections work very well for:
          </p>
          <ul>
            <li>Properties over two storeys where scaffolding would otherwise be needed</li>
            <li>Flat-roofed extensions and garages (walking on these risks membrane damage)</li>
            <li>Post-storm rapid assessment</li>
            <li>Annual landlord checks on multiple properties</li>
            <li>Initial assessment before deciding whether a full structural survey is warranted</li>
          </ul>
          <p>
            For a standard two-storey house where a roof ladder gives adequate access, a traditional
            inspection — combined with a loft check — remains the most thorough option. For anything
            larger, more complex or more difficult to access, the drone is often the better choice.
          </p>
          <p>
            When you contact us, we will ask about your property and recommend the most appropriate
            type of inspection. There is no commercial incentive to push you towards a drone
            inspection if a traditional one serves you better.
          </p>

        </div>

        {/* FAQs */}
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Drone Inspection Questions</h2>
          {faqs.map((f) => (
            <div key={f.question} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">{f.question}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>

        {/* Internal links */}
        <div className="mt-12 bg-brand-50 rounded-2xl p-7 border border-brand-100">
          <h2 className="text-xl font-bold text-slate-900 mb-5">Related Services &amp; Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/drone-roof-inspection-kent"
              className="block text-sm text-brand-700 hover:underline font-medium"
            >
              Book a Drone Inspection →
            </Link>
            <Link
              href="/storm-damage-roof-inspection-kent"
              className="block text-sm text-brand-700 hover:underline font-medium"
            >
              Storm Damage Assessment →
            </Link>
            <Link
              href="/roof-inspection-cost-kent"
              className="block text-sm text-brand-700 hover:underline font-medium"
            >
              Drone Inspection Costs →
            </Link>
          </div>
        </div>
      </article>

      <CTABanner
        heading="Book a Drone Roof Inspection in Kent"
        body="CAA-licensed pilots, 4K imagery, same-day report. No scaffolding, no disruption — just a clear view of your roof."
        variant="dark"
      />
    </>
  )
}
