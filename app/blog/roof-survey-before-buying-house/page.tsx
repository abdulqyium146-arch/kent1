import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import { articleSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Do You Need a Roof Survey Before Buying a House in the UK?',
  description:
    'The homebuyer survey is not enough. A specialist roof survey before buying can save thousands. Here\'s why — and when you should commission one in Kent.',
  alternates: { canonical: '/blog/roof-survey-before-buying-house' },
}

const faqs = [
  {
    question: 'Can I ask the vendor to fix the roof before completion?',
    answer: 'Yes. If a roof survey identifies significant defects, you have several options: ask the vendor to carry out repairs before completion, request a price reduction to reflect the cost of works, or withdraw from the purchase. The earlier you commission the survey in the purchase process, the more time you have to negotiate.',
  },
  {
    question: 'Does a Level 3 (Building Survey) cover the roof adequately?',
    answer: 'A Level 3 survey is more thorough than a Level 2 Homebuyer Report, but it is still a generalist survey. The surveyor assesses the whole property in a single visit. For high-value properties, older properties or any property where roof condition is a concern, a specialist roof survey adds a level of detail that a generalist cannot match.',
  },
  {
    question: 'How far in advance should I book a pre-purchase roof survey?',
    answer: 'As soon as your offer is accepted. The survey can typically be carried out within 2–4 working days of booking. The earlier you have the results, the more time you have to factor them into your purchase decision and any price negotiations.',
  },
]

export default function BlogRoofSurveyBeforeBuying() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema('Do You Need a Roof Survey Before Buying a House in the UK?', 'Why specialist roof surveys matter for home buyers — and when to commission one before exchanging contracts.', '/blog/roof-survey-before-buying-house', '2024-02-14')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <article className="max-w-3xl mx-auto px-4 py-16">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full">Buying a Property</span>
            <time dateTime="2024-02-14" className="text-xs text-slate-400">14 February 2024</time>
            <span className="text-xs text-slate-400">· 7 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">Do You Need a Roof Survey Before Buying a House in the UK?</h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            The short answer is: probably yes, if the property has any age to it. Here is why the standard homebuyer survey does not tell you enough about the roof — and what a specialist survey adds.
          </p>
        </div>

        <div className="prose prose-slate prose-lg max-w-none">

          <h2>What Does the Standard Homebuyer Survey Say About the Roof?</h2>
          <p>
            When you commission a homebuyer survey (now formally called a Level 2 Home Survey under RICS standards), the surveyor visits the property and produces a condition report covering the whole building. The roof section typically notes the type of covering, whether there are any obvious defects visible from ground level, and whether access to the loft was obtained.
          </p>
          <p>
            What it does not include: close-up inspection of flashings, detailed assessment of ridge and valley conditions, systematic moisture testing, or thermal imaging. The surveyor is a generalist covering the whole property in a few hours — they cannot give the roof the focused attention it deserves.
          </p>
          <p>
            The result is often a section that reads something like: <em>&ldquo;The roof covering appeared satisfactory from ground level. Loft space inspected and no major defects noted. Further specialist investigation recommended if concerns arise.&rdquo;</em> Which tells you almost nothing useful.
          </p>

          <h2>Why Does the Roof Matter So Much?</h2>
          <p>
            The roof is the most expensive single element of a house to replace or significantly repair. A full re-roof on a standard three-bedroom house in Kent currently costs between £8,000 and £18,000 depending on the covering type, size and access requirements. Even partial re-roofing or major repairs to flashings and chimney stacks can run to £2,000–£6,000.
          </p>
          <p>
            These are costs that the purchase price typically does not account for — unless someone has identified them beforehand. The vendor almost certainly knows whether there have been roof issues. The estate agent is not going to raise it. Your solicitor has no way of knowing. The generalist surveyor has seen a lot of property in a short time and has not got close enough to the roof to be confident.
          </p>
          <p>
            A specialist roof survey costs from £299. If it identifies £5,000 of remedial works, you can use that to renegotiate the purchase price by at least that amount. Or you walk away, having spent £299 rather than buying a problem.
          </p>

          <h2>When You Almost Certainly Need a Specialist Survey</h2>
          <ul>
            <li><strong>The property was built before 1970.</strong> Older roofs use materials that have finite lifespans — natural Welsh slate is long-lasting, but plain clay tiles from the Victorian era can be at end-of-life. Lead flashings age and develop splits. Felt underlays degrade. The older the property, the more important the specialist assessment.</li>
            <li><strong>The homebuyer report flags anything.</strong> If the Level 2 survey mentions &ldquo;further investigation recommended&rdquo; in relation to the roof — commission that investigation before you exchange, not after.</li>
            <li><strong>There are chimneys.</strong> Chimneys are responsible for a significant proportion of roof-related leaks, particularly in period properties. They require detailed inspection of the flashing, the pointing, the pots and the stack structure.</li>
            <li><strong>The property has a flat roof area.</strong> Flat roofs on extensions, garages and bay windows have shorter lifespans than pitched roofs and are more likely to be at or near end-of-life when you buy. This applies widely in Kent, where 1960s–1980s construction with flat-roofed extensions is very common.</li>
            <li><strong>The property has had previous roof works.</strong> &ldquo;Recent re-roof&rdquo; in the estate agent particulars sounds reassuring, but it may have been done cheaply or incorrectly. A specialist survey checks whether recent work was done to a proper standard.</li>
          </ul>

          <h2>What a Pre-Purchase Roof Survey Gives You</h2>
          <p>
            Our pre-purchase survey produces a formal report — typically 12–20 pages — that covers:
          </p>
          <ul>
            <li>Element-by-element condition assessment with traffic-light ratings</li>
            <li>Photographic evidence of all defects identified</li>
            <li>Explanation of the likely cause of each defect</li>
            <li>Priority rating: urgent / medium-term / advisory</li>
            <li>Cost estimate ranges for remedial works (in current Kent contractor pricing)</li>
            <li>A clear summary of the overall roof condition and expected maintenance costs</li>
          </ul>
          <p>
            This gives you negotiating material, a maintenance plan, and — if you proceed with the purchase — a baseline against which to measure future condition.
          </p>

          <h2>What About Kent Properties Specifically?</h2>
          <p>
            Kent&apos;s housing stock is heavily weighted towards older properties. Canterbury, Maidstone, Folkestone and Whitstable in particular have very high proportions of Victorian and Edwardian terraces. The Weald has large quantities of period farmhouses and cottages. Even the post-war stock in Ashford, Dartford and Sittingbourne is now 40–70 years old — old enough for roofing materials to be approaching or past their expected lifespan.
          </p>
          <p>
            Kent&apos;s climate also means roofs work harder. The combination of coastal wind exposure, significant annual rainfall and cold winters puts particular stress on mortar pointing, lead flashings and bituminous felt — the three materials most likely to fail on an older property.
          </p>
          <p>
            If you are buying in Kent and the property has any age to it, we would strongly recommend a specialist survey before you exchange contracts.
          </p>

        </div>

        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">FAQs</h2>
          {faqs.map((f) => (
            <div key={f.question} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">{f.question}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-brand-50 rounded-2xl p-7 border border-brand-100">
          <h2 className="text-xl font-bold text-slate-900 mb-5">Related Reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/roof-survey-kent" className="block text-sm text-brand-700 hover:underline font-medium">Roof Survey Service →</Link>
            <Link href="/roof-inspection-cost-kent" className="block text-sm text-brand-700 hover:underline font-medium">Survey Costs →</Link>
            <Link href="/contact" className="block text-sm text-brand-700 hover:underline font-medium">Book a Pre-Purchase Survey →</Link>
          </div>
        </div>
      </article>

      <CTABanner heading="Buying a House in Kent?" body="Book a specialist pre-purchase roof survey before you exchange contracts. Reports within 24 hours, fast turnaround to fit your timeline." variant="dark" />
    </>
  )
}
