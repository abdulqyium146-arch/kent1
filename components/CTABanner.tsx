import Link from 'next/link'
import { BUSINESS } from '@/lib/schema'

interface CTABannerProps {
  heading?: string
  body?: string
  variant?: 'dark' | 'accent' | 'light'
}

export default function CTABanner({
  heading = 'Ready to Book Your Roof Inspection?',
  body = 'Same-day inspections available across Kent. Get your free, no-obligation quote today — no call centres, no pressure.',
  variant = 'dark',
}: CTABannerProps) {
  const bg =
    variant === 'accent'
      ? 'bg-accent-500'
      : variant === 'light'
      ? 'bg-brand-50 border border-brand-100'
      : 'bg-brand-800'

  const textColor = variant === 'light' ? 'text-brand-900' : 'text-white'
  const subColor = variant === 'light' ? 'text-brand-700' : 'text-blue-100'

  return (
    <section className={`${bg} py-14 px-4`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-4`}>{heading}</h2>
        <p className={`text-lg ${subColor} mb-8 max-w-xl mx-auto`}>{body}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className={`btn-primary text-base px-8 py-4 ${variant === 'dark' ? 'shadow-cta' : ''}`}
          >
            Get a Free Quote
          </Link>
          <a
            href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`}
            className={`inline-flex items-center gap-2 font-semibold text-base px-8 py-4 rounded-lg transition-all border-2 ${
              variant === 'light'
                ? 'border-brand-600 text-brand-700 hover:bg-brand-600 hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-brand-800'
            }`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
