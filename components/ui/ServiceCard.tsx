import Link from 'next/link'
import type { RoofVueService } from '@/lib/services'

interface ServiceCardProps {
  service: RoofVueService
  locationSlug?: string
  showPrice?: boolean
}

// SEO: ServiceCard links to either /services/[slug] or /locations/[loc]/[service]
// depending on context — ensures all 216 location-service combo pages are linked from
// their respective parent pages, distributing crawl budget efficiently.
export default function ServiceCard({
  service,
  locationSlug,
  showPrice = true,
}: ServiceCardProps) {
  const href = locationSlug
    ? `/locations/${locationSlug}/${service.slug}`
    : `/services/${service.slug}`

  return (
    <Link
      href={href}
      className="group flex flex-col p-5 rounded-xl border border-slate-200 hover:border-brand-500 hover:shadow-cta bg-white transition-all"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-base font-semibold text-slate-900 group-hover:text-brand-700">
          {service.name}
        </h3>
        {showPrice && (
          <span className="text-sm font-medium text-brand-600 whitespace-nowrap">
            {service.price}
          </span>
        )}
      </div>
      <p className="text-sm text-slate-500 mb-3 flex-1">{service.tagline}</p>
      <span className="text-sm font-medium text-brand-600 group-hover:text-brand-700 flex items-center gap-1">
        Learn more
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  )
}
