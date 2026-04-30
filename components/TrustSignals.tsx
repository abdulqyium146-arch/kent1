const signals = [
  {
    title: 'Fully Insured',
    description: 'Public liability and professional indemnity insurance as standard — you are always protected.',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
      </svg>
    ),
  },
  {
    title: 'RICS Affiliated',
    description: 'Our surveyors hold recognised professional qualifications. Our reports are accepted by mortgage lenders.',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
      </svg>
    ),
  },
  {
    title: '15+ Years Experience',
    description: 'Over a decade inspecting roofs across Kent — from period cottages in Canterbury to modern estates in Ashford.',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
      </svg>
    ),
  },
  {
    title: 'Detailed Written Reports',
    description: 'Every inspection comes with a clear, photographic report — no jargon, with a priority-rated list of findings.',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
      </svg>
    ),
  },
  {
    title: 'Same-Day Availability',
    description: 'We keep daily slots free for urgent inspections — if you have a leak or storm damage, we can often be there the same day.',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 2.05V2c0-1.1-.9-2-2-2s-2 .9-2 2v.05C4.64 2.52 2 5.85 2 9.87V12l-1.79 3.59A1 1 0 001.12 17H22.88a1 1 0 00.91-1.41L22 12V9.87C22 5.85 19.36 2.52 13 2.05zM11 22c1.1 0 2-.9 2-2H9c0 1.1.9 2 2 2z"/>
      </svg>
    ),
  },
  {
    title: 'No Hidden Costs',
    description: 'The price we quote is the price you pay. We will always tell you upfront what an inspection will cost — no surprises.',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
      </svg>
    ),
  },
]

export default function TrustSignals() {
  return (
    <section className="py-16 px-4 bg-brand-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Why Homeowners Choose Us</h2>
          <p className="text-slate-500 text-lg">We have built our reputation on honesty, thoroughness, and turning up when we say we will.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {signals.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-6 border border-brand-100 shadow-sm flex gap-4">
              <div className="w-12 h-12 bg-brand-100 text-brand-700 rounded-xl flex items-center justify-center flex-shrink-0">
                {s.icon}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
