import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[]
}

// SEO: Visible breadcrumb nav mirrors JSON-LD BreadcrumbSchema — reinforces
// page hierarchy signals and improves user navigation for bounce rate metrics.
export default function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol
        className="flex flex-wrap items-center gap-1 text-sm text-slate-500"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li
              key={item.url}
              className="flex items-center gap-1"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {isLast ? (
                <span
                  className="text-slate-800 font-medium"
                  itemProp="name"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.url}
                    className="hover:text-brand-600 transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.name}</span>
                  </Link>
                  <span aria-hidden="true" className="text-slate-300">
                    /
                  </span>
                </>
              )}
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
