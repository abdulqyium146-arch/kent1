import type { KentLocation } from '@/lib/locations'

interface ItemListSchemaProps {
  locations: KentLocation[]
}

// SEO: ItemList JSON-LD on the /locations hub page — tells Google this page
// is an index of location-specific service pages, reinforcing site architecture.
export default function ItemListSchema({ locations }: ItemListSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Drone Roof Survey Locations in Kent',
    description: 'All Kent towns covered by RoofVue drone roof survey services',
    numberOfItems: locations.length,
    itemListElement: locations.map((loc, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `Drone Roof Survey in ${loc.name}, Kent`,
      url: `https://roofvue.co.uk/locations/${loc.slug}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
