import Link from 'next/link'
import type { RoofVueService } from '@/lib/services'

interface ServiceCardProps {
  service: RoofVueService
  locationSlug?: string
  showPrice?: boolean
  variant?: 'default' | 'featured'
}

export default function ServiceCard({
  service,
  locationSlug,
  showPrice = true,
  variant = 'default',
}: ServiceCardProps) {
  const href = locationSlug
    ? `/locations/${locationSlug}/${service.slug}`
    : `/services/${service.slug}`

  if (variant === 'featured') {
    return (
      <Link
        href={href}
        className="group flex flex-col p-7 rounded-2xl border border-slate-200 hover:border-accent-500 bg-white hover:shadow-hover transition-all duration-300"
      >
        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-2xl mb-5 group-hover:bg-accent-500/10 transition-colors">
          {service.icon}
        </div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-900 leading-snug">
            {service.name}
          </h3>
          {showPrice && (
            <span className="text-sm font-semibold text-accent-600 whitespace-nowrap bg-accent-500/10 px-2.5 py-1 rounded-lg">
              {service.price}
            </span>
          )}
        </div>
        <p className="text-sm text-slate-500 mb-5 flex-1 leading-relaxed">{service.tagline}</p>
        <span className="text-sm font-semibold text-accent-600 group-hover:text-accent-700 flex items-center gap-1.5 transition-colors">
          View service details
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className="group flex flex-col p-5 rounded-xl border border-slate-200 hover:border-accent-400 hover:shadow-card bg-white transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-2.5">
          <span className="text-lg">{service.icon}</span>
          <h3 className="text-sm font-semibold text-slate-900 group-hover:text-brand-900">
            {service.name}
          </h3>
        </div>
        {showPrice && (
          <span className="text-xs font-semibold text-accent-700 whitespace-nowrap">
            {service.price}
          </span>
        )}
      </div>
      <p className="text-xs text-slate-500 mb-3 flex-1 leading-relaxed">{service.tagline}</p>
      <span className="text-xs font-semibold text-accent-600 group-hover:text-accent-700 flex items-center gap-1 transition-colors">
        Learn more
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  )
}
