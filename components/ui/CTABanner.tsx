import Link from 'next/link'

interface CTABannerProps {
  heading: string
  subtext?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  variant?: 'default' | 'dark'
}

export default function CTABanner({
  heading,
  subtext,
  primaryLabel = 'Book Online — Instant Confirmation',
  primaryHref = 'https://calendly.com/roofvue',
  secondaryLabel,
  secondaryHref,
  variant = 'default',
}: CTABannerProps) {
  const bg =
    variant === 'dark'
      ? 'bg-brand-900 text-white'
      : 'bg-gradient-to-r from-brand-600 to-brand-700 text-white'

  const isExternal = primaryHref.startsWith('http')

  return (
    <section className={`rounded-2xl p-8 md:p-12 ${bg}`}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{heading}</h2>
        {subtext && <p className="text-brand-100 mb-6 text-lg">{subtext}</p>}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {isExternal ? (
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-semibold transition-colors shadow-cta"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {primaryLabel}
            </a>
          ) : (
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-brand-700 font-semibold hover:bg-brand-50 transition-colors shadow-cta"
            >
              {primaryLabel}
            </Link>
          )}
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
