// SEO: NAPBlock — single source of truth for Name, Address, Phone.
// Uses Schema.org microdata (itemProp) to reinforce local business signals
// independently of JSON-LD, giving Google two reinforcing NAP data sources.

interface NAPBlockProps {
  showAddress?: boolean
  showHours?: boolean
  className?: string
}

export default function NAPBlock({
  showAddress = true,
  showHours = true,
  className = '',
}: NAPBlockProps) {
  const phone = process.env.NEXT_PUBLIC_PHONE ?? '+44 333 567 5656'
  const email = process.env.NEXT_PUBLIC_EMAIL ?? 'info@roofvue.co.uk'

  return (
    <div
      itemScope
      itemType="https://schema.org/LocalBusiness"
      className={`text-sm text-slate-600 space-y-1 ${className}`}
    >
      <p className="font-semibold text-slate-900">
        <span itemProp="name">RoofVue</span>
      </p>

      <p>
        <a
          href={`tel:${phone}`}
          itemProp="telephone"
          className="text-brand-600 hover:text-brand-700 font-medium"
        >
          {phone}
        </a>
      </p>

      <p>
        <a
          href={`mailto:${email}`}
          itemProp="email"
          className="text-brand-600 hover:text-brand-700"
        >
          {email}
        </a>
      </p>

      {showAddress && (
        <div
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
          className="not-italic"
        >
          <span itemProp="addressLocality">Maidstone</span>
          {', '}
          <span itemProp="addressRegion">Kent</span>
          {', '}
          <span itemProp="addressCountry">GB</span>
        </div>
      )}

      {showHours && (
        <p>
          <meta itemProp="openingHours" content="Mo-Su 00:00-23:59" />
          Open 24/7 — 7 days a week
        </p>
      )}
    </div>
  )
}
