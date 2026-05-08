'use client'

import Script from 'next/script'

interface CalendlyEmbedProps {
  url?: string
  height?: number
}

export default function CalendlyEmbed({
  url = 'https://calendly.com/roofvue',
  height = 700,
}: CalendlyEmbedProps) {
  return (
    <>
      <div
        className="calendly-inline-widget w-full rounded-2xl overflow-hidden"
        data-url={`${url}?hide_gdpr_banner=1&primary_color=f59e0b`}
        style={{ minWidth: '320px', height: `${height}px` }}
      />
      {/* lazyOnload: deferred until page is interactive — no render-blocking */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  )
}
