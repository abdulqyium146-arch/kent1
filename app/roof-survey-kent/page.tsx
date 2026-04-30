import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import { faqSchema, serviceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Roof Survey Kent | Pre-Purchase & Structural Surveys from £299',
  description:
    'Detailed roof surveys for home buyers, insurers and planning applications across Kent. RICS-affiliated surveyors. Reports accepted by mortgage lenders. Canterbury, Maidstone, Ashford.',
  alternates: { canonical: '/roof-survey-kent' },
}

const faqs = [
  {
    question: 'What is the difference between a roof inspection and a roof survey?',
    answer:
      'A roof inspection is a condition assessment — it tells you what is wrong and what to do about it. A roof survey is a more formal, structured document used in legal or financial contexts: buying a property, making an insurance claim, or applying for planning permission. Our surveys follow RICS guidance and include a more detailed structural assessment.',
  },
  {
    question: 'Do I really need a specialist roof survey when buying a house in Kent?',
    answer:
      'Yes, if the property has any age to it. The standard homebuyer survey your surveyor produces covers the whole property — they are not specialists, and the roof section is typically brief. A specialist survey gives you a thorough assessment of the one part of a house that can cost the most to put right.',
  },
  {
    question: 'Will a mortgage lender accept your survey report?',
    answer:
      'Our detailed survey reports are accepted by most mortgage lenders as supporting documentation. If your lender has specific requirements, let us know and we can tailor the format accordingly.',
  },
  {
    question: 'How quickly can you carry out a pre-purchase survey in Kent?',
    answer:
      'We typically carry out pre-purchase surveys within two to four working days of booking. We understand that property transactions have timelines and we aim to fit around yours.',
  },
  {
    question: 'What does the survey report actually look like?',
    answer:
      'The report is a structured document with a property overview, element-by-element condition ratings (using a traffic light system), annotated photographs, a defect schedule, and a cost estimate range for any remedial works. Typically 12–20 pages.',
  },
  {
    question: 'Can you carry out a survey on a listed building in Kent?',
    answer:
      'Yes. Kent has a significant number of listed buildings, and we have experience surveying period properties — from medieval timber-framed farmhouses to Georgian town houses. We understand the restrictions around materials and methods that apply to listed buildings.',
  },
]

export default function RoofSurveyKent() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema('Roof Survey Kent', 'Detailed structural roof surveys for home buyers, insurers and planning applications across Kent.', '/roof-survey-kent')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <Hero
        badge="RICS-affiliated · Accepted by lenders · 12–20 page reports"
        headline="Roof Surveys in Kent You Can Actually Use"
        subheadline="Buying a house? Dealing with an insurer? Need a structural report? Our detailed roof surveys give you the documentation you need — clearly written, professionally produced, and delivered fast."
        ctaPrimary={{ label: 'Request a Survey', href: '/contact' }}
        ctaSecondary={{ label: 'See Pricing', href: '/roof-inspection-cost-kent' }}
      />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">When Do You Need a Roof Survey?</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            A roof survey is different from a standard inspection. It is a formal, structured assessment designed to satisfy a third party — whether that is a mortgage lender, insurance company, solicitor or local planning authority.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {[
              {
                title: 'Pre-Purchase Survey',
                description: 'Before exchanging contracts, know exactly what you are buying. We assess the full roof structure and produce a report you can use to renegotiate the price or require the vendor to carry out repairs.',
              },
              {
                title: 'Insurance Claim Support',
                description: 'After storm damage or a leak, your insurer needs documentation. We produce reports that clearly separate storm-caused damage from pre-existing wear — exactly what adjusters need.',
              },
              {
                title: 'Planning Application',
                description: 'Extensions, conversions and alterations often require a structural roof report as part of the planning submission. We provide this in the format required by Kent planning authorities.',
              },
              {
                title: 'Landlord & Leasehold',
                description: 'Leaseholders have specific rights regarding roof maintenance. We survey shared roofs and produce condition reports that satisfy the requirements for service charge disputes or major works notices.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">What Our Roof Survey Report Includes</h2>
          <div className="space-y-4">
            {[
              { num: '01', title: 'Property Overview', body: 'Age, construction type, roof form, previous work identified. This gives context for everything that follows.' },
              { num: '02', title: 'Element-by-Element Assessment', body: 'Every component rated using our traffic-light condition system: Good / Requires Monitoring / Requires Attention / Urgent Action.' },
              { num: '03', title: 'Annotated Photography', body: 'High-resolution photographs with annotations pointing to specific defects. You will know exactly where each problem is.' },
              { num: '04', title: 'Defect Schedule', body: 'A complete list of every defect found, with a description of the issue, the likely cause, and the risk if left unaddressed.' },
              { num: '05', title: 'Cost Estimate Ranges', body: 'We do not quote for works — but we provide indicative cost ranges based on current Kent contractor pricing, so you know what budget to plan for.' },
              { num: '06', title: 'Priority Action Plan', body: 'A clear summary of what to do now, what to monitor, and what can wait — in plain English with no jargon.' },
            ].map((item) => (
              <div key={item.num} className="flex gap-5 bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-brand-200 font-heading flex-shrink-0 w-10">{item.num}</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Roof Surveys Across Kent</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            We carry out pre-purchase and structural surveys throughout Kent — from properties in central Canterbury and Maidstone to rural farmhouses in the Weald and coastal homes in Folkestone and Whitstable. Our surveyors are familiar with the property types that dominate the Kent market: Victorian and Edwardian terraces, interwar semis, post-war local authority stock, and a wide range of period detached properties.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            If you are in the process of buying a property and need a survey carried out quickly — we understand. We keep slots available specifically for pre-purchase surveys and can often accommodate you within two working days of receiving the address.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/roof-inspection-kent" className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-brand-200 transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">Roof Inspection</h3>
              <p className="text-sm text-slate-500 mt-1">Need a condition check rather than a formal survey?</p>
            </Link>
            <Link href="/roof-leak-detection-kent" className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-brand-200 transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">Leak Detection</h3>
              <p className="text-sm text-slate-500 mt-1">We track down the exact source of any water ingress.</p>
            </Link>
            <Link href="/blog/roof-survey-before-buying-house" className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-brand-200 transition-all">
              <h3 className="font-semibold text-slate-900 group-hover:text-brand-700">Buying Guide</h3>
              <p className="text-sm text-slate-500 mt-1">Do you really need a survey before buying? Read our guide.</p>
            </Link>
          </div>
        </div>
      </section>

      <FAQ items={faqs} heading="Roof Survey FAQs" />
      <CTABanner heading="Need a Roof Survey in Kent?" body="We produce clear, professionally formatted reports that lenders, insurers and solicitors accept. Get in touch today for a fixed-price quote." />
    </>
  )
}
