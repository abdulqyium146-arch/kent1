export const BUSINESS = {
  name: 'RoofVue',
  phone: '+44 333 567 5656',
  email: 'info@roofvue.co.uk',
  address: {
    street: '12 Mill Street',
    city: 'Maidstone',
    region: 'Kent',
    postcode: 'ME14 1BW',
    country: 'GB',
  },
  url: 'https://www.citywideroofing.info',
  tagline: 'Independent Roof Surveys You Can Trust',
  description:
    'RoofVue is an independent roof survey company providing unbiased, expert roof assessments for homeowners, buyers, landlords and businesses across Kent and the South East.',
  geo: { lat: 51.2728, lng: 0.5217 },
  openingHours: ['Mo-Su 00:00-23:59'],
  priceRange: '££',
  foundingYear: '2014',
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
    'Medway',
  ],
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'RoofingContractor'],
    '@id': `${BUSINESS.url}/#business`,
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    image: `${BUSINESS.url}/images/roofvue-og.jpg`,
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
    priceRange: BUSINESS.priceRange,
    areaServed: BUSINESS.areaServed.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
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
