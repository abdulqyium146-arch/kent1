interface ReviewCardProps {
  author: string
  location: string
  rating: number
  text: string
  date?: string
}

// SEO: Review cards use Schema.org Review microdata — reinforces rating signals
// and can contribute to aggregate rating rich results when enough reviews are present.
export default function ReviewCard({
  author,
  location,
  rating,
  text,
  date,
}: ReviewCardProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating)

  return (
    <div
      className="p-5 rounded-xl border border-slate-200 bg-white shadow-card"
      itemScope
      itemType="https://schema.org/Review"
    >
      <div className="flex items-center gap-1 mb-2" aria-label={`${rating} out of 5 stars`}>
        {stars.map((filled, i) => (
          <span
            key={i}
            className={filled ? 'text-accent-500' : 'text-slate-300'}
            aria-hidden="true"
          >
            ★
          </span>
        ))}
        <meta itemProp="reviewRating" content={String(rating)} />
      </div>
      <p className="text-sm text-slate-700 mb-3 italic" itemProp="reviewBody">
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>
          <span itemProp="author" itemScope itemType="https://schema.org/Person">
            <span itemProp="name" className="font-medium text-slate-700">
              {author}
            </span>
          </span>
          {' — '}
          <span className="text-slate-400">{location}, Kent</span>
        </span>
        {date && <span className="text-slate-400">{date}</span>}
      </div>
    </div>
  )
}
