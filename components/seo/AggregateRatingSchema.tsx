// IMPORTANT: Populate ratingValue, reviewCount and reviews with REAL verified data
// before deploying. Google's structured data policy prohibits fabricated ratings.
// This component accepts props so ratings can be managed from a single source of truth.
// Recommended: connect to a review API (Google, Trustpilot, Checkatrade) at build time.

interface Review {
  author: string
  reviewBody: string
  ratingValue: number
  datePublished: string
  location?: string
}

interface AggregateRatingSchemaProps {
  ratingValue: string        // e.g. "4.9"
  reviewCount: string        // e.g. "127"
  reviews?: Review[]         // up to 5 individual reviews for rich result eligibility
  serviceType?: string       // e.g. "Drone Roof Survey"
  locationName?: string      // e.g. "Maidstone"
}

// SEO: AggregateRating enables star ratings in SERPs — documented 15-30% CTR uplift.
// Also signals social proof to AI systems evaluating citation worthiness.
// Google requires a minimum of 1 review AND a minimum of 3 ratingValue to show stars.
export default function AggregateRatingSchema({
  ratingValue,
  reviewCount,
  reviews = [],
  serviceType = 'Drone Roof Survey',
  locationName,
}: AggregateRatingSchemaProps) {
  const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://citywideroofing.info').replace(/\/$/, '')

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE}/#business`,
    name: 'RoofVue',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount,
      bestRating: '5',
      worstRating: '1',
    },
    ...(reviews.length > 0 && {
      review: reviews.map((r) => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: r.author,
        },
        reviewBody: r.reviewBody,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: String(r.ratingValue),
          bestRating: '5',
          worstRating: '1',
        },
        datePublished: r.datePublished,
        ...(r.location && {
          locationCreated: {
            '@type': 'Place',
            name: `${r.location}, Kent`,
          },
        }),
        itemReviewed: {
          '@type': 'Service',
          name: serviceType,
          provider: {
            '@type': 'Organization',
            '@id': `${SITE}/#organization`,
          },
          ...(locationName && {
            areaServed: {
              '@type': 'City',
              name: locationName,
            },
          }),
        },
      })),
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
