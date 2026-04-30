import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import { articleSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'How to Check Your Roof for Leaks | Kent Homeowner\'s Guide',
  description:
    'A practical guide to checking your roof for leaks — what to look for in the loft, from the garden, and on your walls. When to call a professional. Written by Kent roof inspectors.',
  alternates: { canonical: '/blog/how-to-check-roof-for-leaks' },
}

const faqs = [
  {
    question: 'Why does the damp patch appear in a different place to the actual leak?',
    answer: 'Water follows the path of least resistance — it enters the roof at one point and travels along rafters, battens and insulation before dripping somewhere else entirely. The visible patch can be several metres from the actual entry point. This is why professional leak detection uses thermal imaging and systematic moisture testing rather than just looking above the stain.',
  },
  {
    question: 'Can a roof leak appear without rain?',
    answer: 'Yes. Condensation in the loft can cause dripping and damp patches that look identical to a roof leak. It is particularly common in lofts with poor ventilation and a lot of insulation. A professional inspection can distinguish between condensation and true water ingress.',
  },
  {
    question: 'My loft looks fine but I have damp inside — what else could it be?',
    answer: 'Damp inside the house is not always a roof issue. It could be a gutter overflowing (check for staining on the wall below the gutter), a plumbing leak in the roof space (check water tanks and pipes), condensation in the wall cavity, or rising damp from the ground. A thorough inspection should rule each of these in or out.',
  },
]

export default function BlogHowToCheckRoofLeaks() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema('How to Check Your Roof for Leaks', 'A practical homeowner\'s guide to identifying roof leaks — what to look for from the loft, garden and walls.', '/blog/how-to-check-roof-for-leaks', '2024-02-28')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <article className="max-w-3xl mx-auto px-4 py-16">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full">DIY Advice</span>
            <time dateTime="2024-02-28" className="text-xs text-slate-400">28 February 2024</time>
            <span className="text-xs text-slate-400">· 8 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">How to Check Your Roof for Leaks: A Kent Homeowner&apos;s Guide</h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            You have noticed a damp patch on a bedroom ceiling or a musty smell coming from the loft. Before you call anyone, there are several safe checks you can do yourself. Here is exactly what to look for — and when to stop and call a professional.
          </p>
        </div>

        <div className="prose prose-slate prose-lg max-w-none">

          <h2>Start in the Loft — Not on the Roof</h2>
          <p>
            The safest and most informative place to start is inside your loft. On a dry day, go up there with a good torch and look for the following:
          </p>

          <h3>What to look for in the loft:</h3>
          <ul>
            <li><strong>Water staining on rafters or boarding:</strong> Brown, tide-mark staining on the wood tells you water has been getting in, even if it is not currently wet. Follow the staining upward — the highest point of the stain is closer to the entry point than the lowest.</li>
            <li><strong>Wet or compressed insulation:</strong> Mineral wool insulation that has got wet will look compressed or discoloured. It loses its insulating value when wet and should be replaced.</li>
            <li><strong>Daylight:</strong> Switch off the torch on a bright day and look for any light coming through the roof covering. Any daylight is a defect, full stop.</li>
            <li><strong>Mould or green staining:</strong> Persistent mould on rafters or the back of sarking boards indicates long-term moisture — whether from a leak or condensation.</li>
            <li><strong>Felt condition:</strong> If you can see the roofing felt (the layer below the tiles), check whether it sags between rafters. Some sag is normal. Tears, holes, or completely degraded felt needs attention.</li>
          </ul>

          <div className="not-prose bg-amber-50 border border-amber-200 rounded-2xl p-6 my-6">
            <h3 className="font-semibold text-amber-900 mb-2">Important: Loft Safety</h3>
            <p className="text-sm text-amber-800 leading-relaxed">
              In most lofts, the only safe place to stand is on the joists — do not step onto the insulation or the boarding between joists. A moment of inattention can put a foot through the ceiling below. Use a torch, move carefully, and do not lean on water tanks or pipes.
            </p>
          </div>

          <h2>Check from Ground Level and the Garden</h2>
          <p>
            You do not need to go on your roof to spot many common defects. With binoculars or a decent camera zoom, scan these areas from the ground:
          </p>
          <ul>
            <li><strong>Ridge tiles:</strong> Look along the ridge line from end to end. Any gaps, displaced tiles or crumbling mortar between ridge tiles is a common leak source.</li>
            <li><strong>Flashing at chimneys:</strong> The lead or zinc flashing where the chimney meets the roof slope is one of the most vulnerable points on any roof. Look for obvious gaps or flashing that has pulled away from the chimney face.</li>
            <li><strong>Individual tile condition:</strong> Slipped, cracked, broken or missing tiles are usually visible from the ground. A single broken tile during winter can allow enough water in to cause significant internal damage.</li>
            <li><strong>Valley condition:</strong> The junctions where two roof slopes meet. Look for debris blockages or visible deterioration.</li>
            <li><strong>Gutters:</strong> Look for plants growing in the gutters (common on older properties), sections that have pulled away from the fascia, and — during rain — water overflowing over the front rather than down the downpipe.</li>
          </ul>

          <h2>Check Your Walls for Clues</h2>
          <p>
            Damp inside the house does not always mean a roof leak. The pattern of damp on your walls and ceilings tells you a lot:
          </p>
          <ul>
            <li><strong>Ceiling stain below the ridge:</strong> Likely to be a ridge or flashing failure.</li>
            <li><strong>Staining on a chimney breast wall:</strong> Almost certainly the chimney flashing or pointing — a very common issue in Kent properties.</li>
            <li><strong>Damp running down a wall below gutter level:</strong> Overflowing or cracked gutters, not a roof problem per se.</li>
            <li><strong>Damp at eaves level (top of walls):</strong> Could be soffit or fascia failure, or water blowing back under the eaves in high winds.</li>
            <li><strong>Damp appearing during heavy rain only:</strong> Points to active water ingress — a leak rather than condensation.</li>
            <li><strong>Damp present regardless of rain:</strong> More likely condensation, rising damp or a plumbing issue.</li>
          </ul>

          <h2>What You Should NOT Do</h2>
          <p>
            Please do not climb onto your roof. This is how people get seriously hurt. Even if you are comfortable on a ladder, a domestic roof — particularly one that is wet or has loose tiles — is a very different environment. The consequences of a slip are severe. Leave the on-roof assessment to professionals with the right equipment and training.
          </p>

          <h2>When to Call a Professional</h2>
          <p>
            You should call a specialist roof inspector (not just a roofer) in the following situations:
          </p>
          <ul>
            <li>You have found evidence of water ingress in the loft but cannot identify the source</li>
            <li>A roofer has already carried out a repair and the leak is still there</li>
            <li>You are buying a house and want to know the true state of the roof</li>
            <li>A storm has come through and you want to document any damage for insurance</li>
            <li>Your roof is over 15 years old and has not been inspected recently</li>
          </ul>
          <p>
            A specialist will use thermal imaging and moisture meters to identify the exact entry point — not just patch what is visible on the surface. In the long run, this approach is both more effective and cheaper than repeated repair attempts on the wrong area.
          </p>

        </div>

        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Common Questions</h2>
          {faqs.map((f) => (
            <div key={f.question} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">{f.question}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-brand-50 rounded-2xl p-7 border border-brand-100">
          <h2 className="text-xl font-bold text-slate-900 mb-5">Related Services &amp; Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/roof-leak-detection-kent" className="block text-sm text-brand-700 hover:underline font-medium">Roof Leak Detection Kent →</Link>
            <Link href="/roof-inspection-kent" className="block text-sm text-brand-700 hover:underline font-medium">Full Roof Inspection →</Link>
            <Link href="/blog/roof-inspection-cost-kent" className="block text-sm text-brand-700 hover:underline font-medium">What Does It Cost? →</Link>
          </div>
        </div>
      </article>

      <CTABanner heading="Think You Have a Roof Leak?" body="We find the exact source using thermal imaging — not guesswork. Same-day appointments available across Kent." />
    </>
  )
}
