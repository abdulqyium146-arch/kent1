import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-brand-600"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </div>
        <h1 className="text-5xl font-bold text-slate-900 mb-3">404</h1>
        <h2 className="text-2xl font-semibold text-slate-700 mb-4">Page Not Found</h2>
        <p className="text-slate-500 leading-relaxed mb-8">
          The page you are looking for does not exist. It may have been moved or the URL may be
          incorrect. Try our homepage or one of our services below.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">
            Back to Homepage
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[
            { label: 'Roof Inspection', href: '/roof-inspection-kent' },
            { label: 'Roof Survey', href: '/roof-survey-kent' },
            { label: 'Leak Detection', href: '/roof-leak-detection-kent' },
            { label: 'Drone Inspection', href: '/drone-roof-inspection-kent' },
            { label: 'Storm Damage', href: '/storm-damage-roof-inspection-kent' },
            { label: 'Pricing Guide', href: '/roof-inspection-cost-kent' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="bg-slate-50 text-brand-700 hover:bg-brand-50 border border-slate-200 rounded-lg px-4 py-2.5 transition-colors font-medium"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
