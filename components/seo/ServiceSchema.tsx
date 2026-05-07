import type { RoofVueService } from '@/lib/services'

interface ServiceSchemaProps {
  service: RoofVueService
  locationName?: string
}

// SEO: Service JSON-LD — adds structured service data to service pages,
// helping Google understand the specific service offering and price range.
export default function ServiceSchema({ service, locationName }: ServiceSchemaProps) {
  const areaServed = locationName
    ? {
        '@type': 'City',
        name: locationName,
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Kent',
          containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
        },
      }
    : {
        '@type': 'AdministrativeArea',
        name: 'Kent',
        containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
      }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: locationName ? `${service.name} in ${locationName}` : `${service.name} in Kent`,
    description: service.tagline,
    serviceType: service.schemaServiceType,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://citywideroofing.info').replace(/\/$/, '')}/#business`,
      name: 'RoofVue',
    },
    areaServed,
    offers: {
      '@type': 'Offer',
      price: service.price.replace('from £', ''),
      priceCurrency: 'GBP',
      description: service.price,
      availability: 'https://schema.org/InStock',
    },
    termsOfService: `${(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://citywideroofing.info').replace(/\/$/, '')}/terms`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
