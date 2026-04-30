import Link from 'next/link'
import { BUSINESS } from '@/lib/schema'

interface HeroProps {
  headline: string
  subheadline: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  badge?: string
  showTrustBar?: boolean
}

const trustItems = [
  { icon: '✓', text: 'Fully Insured' },
  { icon: '✓', text: 'RICS Affiliated' },
  { icon: '✓', text: '15+ Years Experience' },
  { icon: '✓', text: 'Same-Day Available' },
]

export default function Hero({
  headline,
  subheadline,
  ctaPrimary = { label: 'Book an Inspection', href: '/contact' },
  ctaSecondary,
  badge,
  showTrustBar = true,
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" aria-hidden="true" />
              {badge}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance mb-6 leading-tight">
            {headline}
          </h1>

          <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
            {subheadline}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link href={ctaPrimary.href} className="btn-primary text-base px-8 py-4 shadow-cta">
              {ctaPrimary.label}
            </Link>
            {ctaSecondary ? (
              <Link href={ctaSecondary.href} className="btn-outline text-base px-8 py-4">
                {ctaSecondary.label}
              </Link>
            ) : (
              <a
                href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
                className="btn-outline text-base px-8 py-4"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                Call {BUSINESS.phone}
              </a>
            )}
          </div>

          {showTrustBar && (
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {trustItems.map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-blue-100">
                  <span className="text-accent-400 font-bold">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
