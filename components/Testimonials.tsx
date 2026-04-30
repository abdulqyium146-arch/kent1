const reviews = [
  {
    name: 'Sarah M.',
    location: 'Canterbury',
    rating: 5,
    text: "I spotted a damp patch on my bedroom ceiling after the storms in January. Called Kent Roof Inspections on a Thursday morning and they were up on the roof by Friday afternoon. Turned out to be two cracked ridge tiles — fixed within the week. Brilliant service.",
    property: 'Victorian terrace',
  },
  {
    name: 'James R.',
    location: 'Maidstone',
    rating: 5,
    text: "Used them before exchanging contracts on a 1930s semi. The survey report was thorough — far more detailed than the basic homebuyer report my solicitor recommended. They found issues that would have cost thousands to fix and I renegotiated the price. Money very well spent.",
    property: 'Pre-purchase survey',
  },
  {
    name: 'Patricia L.',
    location: 'Ashford',
    rating: 5,
    text: "I was worried about my flat roof after a prolonged cold snap. The drone inspection meant no scaffolding or ladders — they were done in under an hour and emailed me a full photo report the same day. Very professional, very efficient.",
    property: 'Bungalow',
  },
  {
    name: 'David K.',
    location: 'Dartford',
    rating: 5,
    text: "We manage a small commercial unit in Dartford and have used Kent Roof Inspections for our annual checks for three years. Consistent, punctual, and the reports hold up for insurance purposes. Exactly what we need.",
    property: 'Commercial unit',
  },
  {
    name: 'Helen F.',
    location: 'Sevenoaks',
    rating: 5,
    text: "The team explained everything clearly — what was urgent, what could wait, and what was fine. I didn't feel pressured to do unnecessary work. Honest and straightforward.",
    property: 'Detached house',
  },
  {
    name: 'Tom B.',
    location: 'Folkestone',
    rating: 5,
    text: "After Storm Babet came through, half the street needed roof checks. These guys were incredibly busy but still managed to fit us in within two days. Identified two slipped slates before they turned into a leak. Highly recommend.",
    property: 'End-terrace',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-amber-400' : 'text-slate-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">What Our Customers Say</h2>
          <p className="text-slate-500 text-lg">Real reviews from homeowners and businesses across Kent.</p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <Stars count={5} />
            <span className="font-semibold text-slate-700">4.9/5</span>
            <span className="text-slate-400 text-sm">from 140+ verified reviews</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <article key={r.name} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col gap-4">
              <Stars count={r.rating} />
              <blockquote className="text-slate-700 text-sm leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <footer className="flex items-center justify-between pt-2 border-t border-slate-200">
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{r.name}</div>
                  <div className="text-xs text-slate-400">{r.location}, Kent</div>
                </div>
                <span className="text-xs text-brand-600 font-medium bg-brand-50 px-3 py-1 rounded-full">{r.property}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
