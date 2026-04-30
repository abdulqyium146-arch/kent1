import Link from 'next/link'

export interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: React.ReactNode
  price?: string
}

export default function ServiceCard({ title, description, href, icon, price }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-card p-6 hover:border-brand-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
    >
      <div className="w-12 h-12 bg-brand-50 group-hover:bg-brand-100 rounded-xl flex items-center justify-center mb-4 transition-colors text-brand-600">
        {icon}
      </div>
      <h3 className="font-semibold text-slate-900 text-lg mb-2 group-hover:text-brand-700 transition-colors">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed flex-1">{description}</p>
      {price && (
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-sm text-slate-400">From</span>
          <span className="font-semibold text-brand-700">{price}</span>
        </div>
      )}
      <div className="mt-4 flex items-center gap-1 text-brand-600 text-sm font-medium">
        Learn more
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  )
}
