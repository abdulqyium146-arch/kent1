import { getAreaServedSchema } from '@/lib/seo-utils'
import { roofvueServices } from '@/lib/services'

interface LocalBusinessSchemaProps {
  overrideGeo?: { lat: number; lng: number }
  overrideLocation?: string
  pageUrl: string
}

// SEO: LocalBusiness + RoofingContractor dual @type — increases eligibility for
// local pack rich results. Placed in <head> via layout.tsx so it appears on every page.
export default function LocalBusinessSchema({
  overrideGeo,
  overrideLocation,
  pageUrl,
}: LocalBusinessSchemaProps) {
  const phone = process.env.NEXT_PUBLIC_PHONE ?? '+44 333 567 5656'
  const email = process.env.NEXT_PUBLIC_EMAIL ?? 'info@roofvue.co.uk'
  const postcode = process.env.NEXT_PUBLIC_POSTCODE ?? 'ME14 1XX'
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://citywideroofing.info').replace(/\/$/, '')

  const geo = overrideGeo ?? { lat: 51.272, lng: 0.529 }
  const addressLocality = overrideLocation ?? 'Maidstone'

  const schema = {
    '@context': 'https://schema.org',
    // SEO: Dual @type array — LocalBusiness + RoofingContractor signals service category
    '@type': ['LocalBusiness', 'RoofingContractor'],
    '@id': `${siteUrl}/#business`,
    name: 'RoofVue',
    description: 'Professional drone roof surveys and inspections across Kent, UK',
    url: siteUrl,
    telephone: phone,
    email,
    image: `${siteUrl}/images/roofvue-og.jpg`,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/images/logo.webp`,
      width: 842,
      height: 840,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality,
      addressRegion: 'Kent',
      postalCode: postcode,
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.lat,
      longitude: geo.lng,
    },
    // SEO: Full areaServed with all 54 Kent towns — tells Google every location we serve
    areaServed: getAreaServedSchema(),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Kent Drone Roof Survey Services',
      itemListElement: roofvueServices.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.tagline,
          url: `${siteUrl}/services/${s.slug}`,
        },
        price: s.price.replace('from £', ''),
        priceCurrency: 'GBP',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: s.price.replace('from £', ''),
          priceCurrency: 'GBP',
          description: s.price,
        },
      })),
    },
    priceRange: '££',
    currenciesAccepted: 'GBP',
    // SEO: sameAs with canonical URL reinforces brand entity in Knowledge Graph
    sameAs: [siteUrl],
    mainEntityOfPage: pageUrl,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
