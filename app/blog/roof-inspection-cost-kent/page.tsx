import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import { articleSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'How Much Does a Roof Inspection Cost in Kent? (2024 Guide)',
  description:
    'Honest, up-to-date roof inspection costs in Kent. Standard inspections from £149, drone surveys from £199, pre-purchase surveys from £299. What affects the price and what to watch out for.',
  alternates: { canonical: '/blog/roof-inspection-cost-kent' },
}

const faqs = [
  {
    question: 'What is the cheapest roof inspection in Kent?',
    answer: 'A gutter or flat-roof inspection for a small property can start from around £99. A standard residential inspection for a terraced or semi-detached house starts from £149. Be cautious of prices significantly below this — a thorough inspection that produces a written report takes time.',
  },
  {
    question: 'Do I have to pay for a quote before booking?',
    answer: 'No. We provide free, fixed-price quotes with no obligation. You only pay once you confirm the booking.',
  },
  {
    question: 'Is a roof inspection tax-deductible for landlords?',
    answer: 'In most cases, yes. Roof inspection costs for rental properties are typically allowable as a maintenance expense for income tax purposes. Consult your accountant for specific advice.',
  },
]

export default function BlogRoofInspectionCost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema('How Much Does a Roof Inspection Cost in Kent?', 'Honest pricing guide for roof inspections across Kent — from standard checks to drone surveys and pre-purchase reports.', '/blog/roof-inspection-cost-kent', '2024-03-12')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <article className="max-w-3xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full">Costs &amp; Pricing</span>
            <time dateTime="2024-03-12" className="text-xs text-slate-400">12 March 2024</time>
            <span className="text-xs text-slate-400">· 6 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">How Much Does a Roof Inspection Cost in Kent? (2024 Guide)</h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            If you are trying to find out what a roof inspection will cost in Kent and keep getting vague answers, this guide is for you. We are going to give you actual numbers, explain why prices vary, and tell you what to watch out for.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate prose-lg max-w-none">

          <h2>Quick Answer: Roof Inspection Prices in Kent</h2>
          <p>
            The typical range for a standard residential roof inspection in Kent is <strong>£149 to £225</strong> for most houses. This includes a written photographic report. Here is a more detailed breakdown:
          </p>

          <div className="not-prose overflow-x-auto rounded-xl border border-slate-200 shadow-sm my-6">
            <table className="w-full text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="text-left px-5 py-4 font-medium">Service</th>
                  <th className="text-left px-5 py-4 font-medium">Typical Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ['Standard inspection (terraced)', '£149–£165'],
                  ['Standard inspection (semi-detached)', '£165–£185'],
                  ['Standard inspection (detached)', '£195–£225'],
                  ['Drone roof inspection', '£199–£249'],
                  ['Pre-purchase roof survey', '£299–£399'],
                  ['Roof leak detection', '£175–£225'],
                  ['Gutter inspection', '£99–£149'],
                  ['Storm damage assessment', '£149–£195'],
                  ['Commercial roof inspection', 'POA'],
                ].map(([s, p]) => (
                  <tr key={s} className="even:bg-slate-50">
                    <td className="px-5 py-3.5 text-slate-700">{s}</td>
                    <td className="px-5 py-3.5 font-semibold text-brand-700">{p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>What Does a Roof Inspection Include for That Price?</h2>
          <p>
            A good roof inspection — one that actually justifies the cost — should include the following:
          </p>
          <ul>
            <li><strong>External inspection</strong> of all roof elements: tiles or slates, ridge, hips, valleys, flashings, chimneys, soffits and gutters.</li>
            <li><strong>Internal inspection</strong> of the loft space: checking for water staining, daylight ingress, structural condition and insulation state.</li>
            <li><strong>Written report</strong> delivered within 24 hours, with photographic evidence and a priority-rated schedule of findings.</li>
          </ul>
          <p>
            If an inspector does not offer a written report — or charges extra for it — that is a red flag. A verbal opinion is not something you can share with a solicitor, insurer or future buyer.
          </p>

          <h2>Why Do Roof Inspection Prices Vary?</h2>
          <p>
            Prices vary for legitimate reasons — and for some less legitimate ones. The legitimate factors:
          </p>
          <ul>
            <li><strong>Property size:</strong> A four-bedroom detached house in Sevenoaks takes twice as long to inspect as a two-bedroom terrace in Canterbury.</li>
            <li><strong>Roof complexity:</strong> Multiple slopes, dormers, skylights, chimney stacks, flat extensions — each adds time and therefore cost.</li>
            <li><strong>Type of report:</strong> A standard condition report is less involved than a formal survey for mortgage or planning purposes.</li>
            <li><strong>Inspector qualifications:</strong> A RICS-affiliated surveyor with professional indemnity insurance costs more to employ than a handyman with a ladder — and produces a better, more defensible report.</li>
          </ul>

          <h2>Should You Be Worried About Very Cheap Roof Inspections?</h2>
          <p>
            Yes, to some extent. A roof inspection that costs £50–£75 is likely to be a quick look from a roofer — probably with a verbal summary and a quote attached. That is not necessarily useless, but it is not the same as a specialist inspection with a documented report.
          </p>
          <p>
            The problem is that a cheap &ldquo;inspection&rdquo; performed by someone who also does repairs creates an obvious commercial incentive. The more repairs they recommend, the more work they potentially win. A specialist inspection service — one that does not do repairs — removes that conflict entirely.
          </p>

          <h2>Is a Roof Inspection Worth the Money?</h2>
          <p>
            Almost always. Consider what you are buying the information for:
          </p>
          <ul>
            <li><strong>Before buying a house:</strong> If an inspection reveals roof issues worth £5,000 to fix, and you use that to renegotiate the price or require remediation — you have paid £149 to save £5,000. That is a straightforward return.</li>
            <li><strong>After a leak:</strong> The cost of finding the source of a leak correctly the first time is far lower than the cost of multiple failed repair attempts.</li>
            <li><strong>Routine maintenance:</strong> Catching a failing flashing early costs a few hundred pounds to repair. Left for three years, it can rot roof timbers and require thousands of pounds of structural work.</li>
          </ul>

          <h2>How to Get an Accurate Quote for Your Kent Property</h2>
          <p>
            To get an accurate quote, you will typically need to provide:
          </p>
          <ul>
            <li>The property address or postcode</li>
            <li>The type of property (terraced, semi, detached, bungalow)</li>
            <li>Approximate number of bedrooms (as a size indicator)</li>
            <li>Any specific concerns — leak, storm damage, pre-purchase</li>
          </ul>
          <p>
            With this information, a reputable inspector should be able to give you a fixed price within a couple of hours.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
          {faqs.map((f) => (
            <div key={f.question} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">{f.question}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>

        {/* Internal links */}
        <div className="mt-12 bg-brand-50 rounded-2xl p-7 border border-brand-100">
          <h2 className="text-xl font-bold text-slate-900 mb-5">Related Reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/roof-inspection-cost-kent" className="block text-sm text-brand-700 hover:underline font-medium">Full Cost Breakdown Page →</Link>
            <Link href="/roof-inspection-kent" className="block text-sm text-brand-700 hover:underline font-medium">What We Inspect →</Link>
            <Link href="/contact" className="block text-sm text-brand-700 hover:underline font-medium">Get a Fixed Quote →</Link>
          </div>
        </div>
      </article>

      <CTABanner heading="Ready for a Fixed-Price Quote?" body="Tell us about your property and we will respond within 2 hours with a price — no obligation." variant="light" />
    </>
  )
}
