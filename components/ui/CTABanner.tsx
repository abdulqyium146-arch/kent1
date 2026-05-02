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
  primaryLabel = 'Book a Survey',
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref,
  variant = 'default',
}: CTABannerProps) {
  const bg =
    variant === 'dark'
      ? 'bg-brand-900 text-white'
      : 'bg-gradient-to-r from-brand-600 to-brand-700 text-white'

  return (
    <section className={`rounded-2xl p-8 md:p-12 ${bg}`}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{heading}</h2>
        {subtext && <p className="text-brand-100 mb-6 text-lg">{subtext}</p>}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-brand-700 font-semibold hover:bg-brand-50 transition-colors shadow-cta"
          >
            {primaryLabel}
          </Link>
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
