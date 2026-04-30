export const BUSINESS = {
  name: 'Kent Roof Inspections',
  phone: '01622 001234',
  email: 'info@kentroofing.co.uk',
  address: {
    street: '12 Mill Street',
    city: 'Maidstone',
    region: 'Kent',
    postcode: 'ME14 1BW',
    country: 'GB',
  },
  url: 'https://www.kentroofing.co.uk',
  description:
    'Professional roof inspection, roof survey and roof leak detection services across Kent, Canterbury, Maidstone, Ashford and Dartford.',
  geo: { lat: 51.2728, lng: 0.5217 },
  openingHours: ['Mo-Fr 07:30-18:00', 'Sa 08:00-14:00'],
  priceRange: '££',
  areaServed: [
    'Kent',
    'Canterbury',
    'Maidstone',
    'Ashford',
    'Dartford',
    'Folkestone',
    'Dover',
    'Thanet',
    'Sevenoaks',
    'Tonbridge',
    'Tunbridge Wells',
  ],
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BUSINESS.url}/#business`,
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    image: `${BUSINESS.url}/images/kent-roof-inspections-og.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postcode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    openingHoursSpecification: BUSINESS.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.split(' ')[0].split('-').map(d => d),
      opens: h.split(' ')[1].split('-')[0],
      closes: h.split(' ')[1].split('-')[1],
    })),
    priceRange: BUSINESS.priceRange,
    areaServed: BUSINESS.areaServed.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Roof Inspection Services',
      itemListElement: [
        'Roof Inspection',
        'Roof Survey',
        'Roof Leak Detection',
        'Drone Roof Inspection',
        'Commercial Roof Inspection',
        'Gutter Inspection',
        'Storm Damage Assessment',
      ].map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s } })),
    },
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${BUSINESS.url}${url}`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${BUSINESS.url}/#business`,
      name: BUSINESS.name,
    },
    areaServed: BUSINESS.areaServed.map((area) => ({ '@type': 'AdministrativeArea', name: area })),
    serviceType: name,
  }
}

export function articleSchema(
  title: string,
  description: string,
  url: string,
  datePublished: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${BUSINESS.url}${url}`,
    datePublished,
    dateModified: datePublished,
    author: {
      '@type': 'Organization',
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
  }
}
