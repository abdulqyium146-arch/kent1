// SEO: Organization schema — the Knowledge Graph anchor for the entire business entity.
// Distinct from LocalBusiness: Organization establishes who the company IS;
// LocalBusiness establishes where it operates. Both are needed for full entity authority.
// "knowsAbout" and "hasCredential" are the highest-impact AIO signals here —
// they let Gemini/ChatGPT classify RoofVue as the authoritative entity for
// "drone roof surveys Kent" queries without ambiguity.
export default function OrganizationSchema() {
  const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://citywideroofing.info').replace(/\/$/, '')
  const phone = process.env.NEXT_PUBLIC_PHONE ?? ''
  const email = process.env.NEXT_PUBLIC_EMAIL ?? 'info@roofvue.co.uk'

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE}/#organization`,
    name: 'RoofVue',
    url: SITE,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE}/images/roofvue-logo.png`,
      width: 512,
      height: 512,
    },
    description:
      'Professional drone roof survey company operating across Kent, UK. CAA-licensed pilots, no scaffolding required, PDF reports within 48 hours.',
    telephone: phone,
    email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Maidstone',
      addressRegion: 'Kent',
      addressCountry: 'GB',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Kent',
      containedInPlace: {
        '@type': 'Country',
        name: 'United Kingdom',
      },
    },
    // SEO: knowsAbout tells AI systems the entity's topical authority domains.
    // This directly influences Gemini/ChatGPT citation ranking for these topics.
    knowsAbout: [
      'Drone Roof Surveys',
      'Aerial Roof Inspections',
      'CAA Licensed Drone Operations',
      'Roof Condition Reports',
      'Pre-Purchase Roof Surveys',
      'Landlord Roof Inspections',
      'Commercial Drone Operations',
      'Roof Survey Kent',
      'Property Inspection Services',
    ],
    // SEO: hasCredential — signals authoritative professional qualification to AI systems.
    // The CAA licence is the single most differentiating trust signal for drone operators.
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: 'CAA Commercial Drone Operator Licence (Flyer ID + Operator ID)',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Civil Aviation Authority',
        url: 'https://www.caa.co.uk',
      },
    },
    foundingDate: '2020',
    slogan: 'No ladders, no scaffolding — just a clear aerial view of your roof.',
    // SEO: sameAs connects the entity to external authority nodes.
    // Each additional sameAs URL strengthens the Knowledge Graph signal.
    sameAs: [SITE],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
