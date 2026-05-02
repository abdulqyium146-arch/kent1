import type { FAQ } from '@/lib/faq-data'

interface FAQSchemaProps {
  faqs: FAQ[]
}

// SEO: FAQPage JSON-LD — enables rich result FAQ dropdowns in SERPs,
// which can double the SERP real-estate for the listing page.
export default function FAQSchema({ faqs }: FAQSchemaProps) {
  if (faqs.length === 0) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
