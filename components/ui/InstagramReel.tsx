'use client'

import Script from 'next/script'

export default function InstagramReel() {
  return (
    <>
      {/* blockquote is Instagram's embed markup — embed.js replaces it with an iframe */}
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/reel/DW99GEtt2Zd/?utm_source=ig_embed&utm_campaign=loading"
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: '12px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
          margin: '0 auto',
          maxWidth: '540px',
          minWidth: '326px',
          padding: 0,
          width: '100%',
        }}
      />
      {/* lazyOnload defers until after page is interactive — zero render-blocking penalty */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== 'undefined' && (window as any).instgrm) {
            ;(window as any).instgrm.Embeds.process()
          }
        }}
      />
    </>
  )
}
