import Link from 'next/link'
import { kentLocations, getLocationsByRegion } from '@/lib/locations'

interface LocationGridProps {
  groupByRegion?: boolean
}

// SEO: LocationGrid renders all 54 Kent towns as internal links — this is the primary
// internal linking mechanism distributing PageRank from the /locations hub to every
// location page, and from the homepage to the hub + all towns.

const REGION_ORDER = ['West Kent', 'East Kent', 'North Kent', 'South Kent', 'Medway']

export default function LocationGrid({ groupByRegion = false }: LocationGridProps) {
  if (groupByRegion) {
    const byRegion = getLocationsByRegion()
    return (
      <div className="space-y-8">
        {REGION_ORDER.map((region) => {
          const locations = byRegion[region]
          if (!locations?.length) return null
          return (
            <div key={region}>
              <h3 className="text-lg font-semibold text-slate-800 mb-3 pb-2 border-b border-slate-200">
                {region}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                {locations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="group flex flex-col p-3 rounded-lg border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors"
                  >
                    <span className="text-sm font-medium text-slate-800 group-hover:text-brand-700">
                      {loc.name}
                    </span>
                    <span className="text-xs text-slate-400 mt-0.5">{loc.postcodePrefix}</span>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
      {kentLocations.map((loc) => (
        <Link
          key={loc.slug}
          href={`/locations/${loc.slug}`}
          className="group flex flex-col p-3 rounded-lg border border-slate-200 hover:border-brand-500 hover:bg-brand-50 transition-colors"
        >
          <span className="text-sm font-medium text-slate-800 group-hover:text-brand-700">
            {loc.name}
          </span>
          <span className="text-xs text-slate-400 mt-0.5">{loc.postcodePrefix}</span>
        </Link>
      ))}
    </div>
  )
}
