import { kentLocations } from '@/lib/locations'
import type { KentLocation } from '@/lib/locations'
import type { RoofVueService } from '@/lib/services'

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://citywideroofing.info').replace(/\/$/, '')

// SEO: Single canonical URL builder — ensures no trailing-slash or protocol divergence
export function getCanonicalUrl(path: string): string {
  return `${SITE_URL}${path}`
}

export interface Breadcrumb {
  name: string
  url: string
}

// SEO: Breadcrumbs parsed from URL path — used for both JSON-LD BreadcrumbList
// and the visible nav, giving Google clear page hierarchy signals
export function getBreadcrumbs(pathname: string): Breadcrumb[] {
  const segments = pathname.replace(/^\//, '').split('/').filter(Boolean)
  const crumbs: Breadcrumb[] = [{ name: 'Home', url: '/' }]

  const labels: Record<string, string> = {
    locations: 'Locations',
    services: 'Services',
    blog: 'Blog',
    about: 'About',
    contact: 'Contact',
    faq: 'FAQ',
  }

  let accumulated = ''
  segments.forEach((seg) => {
    accumulated += '/' + seg
    // Try to resolve a friendly name from known slugs
    const loc = kentLocations.find((l) => l.slug === seg)
    const label = loc?.name ?? labels[seg] ?? toTitleCase(seg)
    crumbs.push({ name: label, url: accumulated })
  })

  return crumbs
}

function toTitleCase(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

// SEO: Unique meta descriptions for every location page — prevents duplicate content
// penalties. Naturally includes location name, county (Kent), postcode prefix, and
// nearby towns to capture long-tail postcode/town variants in search.
export function generateLocationMetaDescription(
  location: KentLocation,
  service?: RoofVueService
): string {
  const nearby = location.nearbyTowns.slice(0, 2).map((slug) => {
    const l = kentLocations.find((loc) => loc.slug === slug)
    return l?.name ?? toTitleCase(slug)
  })

  let desc: string
  if (service) {
    desc = `${service.name} in ${location.name}, Kent — RoofVue provides professional drone ${service.shortName} with no scaffolding. PDF report within 48hrs. Covering ${location.name} & nearby ${nearby.join(', ')}.`
  } else {
    desc = `Professional drone roof surveys in ${location.name}, Kent. RoofVue covers ${location.postcodePrefix} and surrounding areas. No ladders needed — safe, detailed inspection with 48hr PDF report.`
  }

  // SEO: Trim to 160 chars to avoid meta description truncation in SERPs
  return desc.length > 160 ? desc.slice(0, 157) + '...' : desc
}

// SEO: Unique title tags for every location page — include location + county + brand
export function generateLocationTitle(location: KentLocation, service?: RoofVueService): string {
  if (service) {
    return `${service.name} in ${location.name}, Kent | RoofVue`
  }
  return `Drone Roof Survey in ${location.name}, Kent | RoofVue`
}

// SEO: Full areaServed array for LocalBusiness schema — tells Google exactly which
// Kent towns are served, improving local pack eligibility for all 54 towns
export function getAreaServedSchema(): object[] {
  return kentLocations.map((loc) => ({
    '@type': 'City',
    name: loc.name,
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: 'Kent',
      containedInPlace: {
        '@type': 'Country',
        name: 'United Kingdom',
      },
    },
  }))
}
