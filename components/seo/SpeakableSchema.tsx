interface SpeakableSchemaProps {
  pageUrl: string
  // CSS selectors pointing at the most AI/voice-extractable content on the page.
  // These tell Google Assistant, Gemini and AI Overview which paragraphs to read aloud
  // or cite first. Specificity beats breadth — 2-4 targeted selectors outperform blanket h2.
  cssSelectors?: string[]
}

// SEO: SpeakableSpecification — critical for:
//   • Google AI Overviews (featured answer extraction)
//   • Gemini conversational answers
//   • Voice search (Google Assistant, Alexa, Siri via Google)
//   • ChatGPT/Perplexity paragraph extraction
// Pages without Speakable are deprioritised in AI answer surfaces.
export default function SpeakableSchema({
  pageUrl,
  cssSelectors = ['h1', '.speakable-intro', '.speakable-answer', '.speakable-price'],
}: SpeakableSchemaProps) {
  const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://citywideroofing.info').replace(/\/$/, '')

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': pageUrl.startsWith('http') ? pageUrl : `${SITE}${pageUrl}`,
    url: pageUrl.startsWith('http') ? pageUrl : `${SITE}${pageUrl}`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
