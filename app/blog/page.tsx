import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Roofing Guides & Advice for Kent Homeowners',
  description:
    'Plain-English roofing advice for Kent homeowners. Guides on inspection costs, detecting leaks, buying house surveys and drone inspections. Written by local experts.',
  alternates: { canonical: '/blog' },
}

const articles = [
  {
    title: 'How Much Does a Roof Inspection Cost in Kent?',
    href: '/blog/roof-inspection-cost-kent',
    category: 'Costs & Pricing',
    date: '12 March 2024',
    excerpt:
      'A realistic, up-to-date guide to what roof inspections cost in Kent — why prices vary, what you get for your money, and how to avoid paying too much.',
    readTime: '6 min read',
  },
  {
    title: 'How to Check Your Roof for Leaks: A Homeowner\'s Guide',
    href: '/blog/how-to-check-roof-for-leaks',
    category: 'DIY Advice',
    date: '28 February 2024',
    excerpt:
      'Before calling a professional, there are several things you can safely check yourself — from the loft and the garden. Here is what to look for and what it might mean.',
    readTime: '8 min read',
  },
  {
    title: 'Do You Need a Roof Survey Before Buying a House in the UK?',
    href: '/blog/roof-survey-before-buying-house',
    category: 'Buying a Property',
    date: '14 February 2024',
    excerpt:
      'The standard homebuyer survey is not enough to tell you the true state of a roof. Here is why a specialist roof survey before exchanging contracts is nearly always money well spent.',
    readTime: '7 min read',
  },
  {
    title: 'The Real Benefits of Drone Roof Inspections',
    href: '/blog/benefits-drone-roof-inspections',
    category: 'Technology',
    date: '30 January 2024',
    excerpt:
      'No scaffolding, faster results, better imagery. Drone roof inspections are changing the way homeowners and landlords assess their properties — here is what you need to know.',
    readTime: '5 min read',
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 via-brand-700 to-brand-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Roofing Guides &amp; Advice</h1>
          <p className="text-xl text-blue-100">
            Plain-English articles on roof inspections, costs, leaks and more — written by Kent roofing experts.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group block bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-brand-200 hover:shadow-md transition-all p-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full">{article.category}</span>
                  <span className="text-xs text-slate-400">{article.date}</span>
                  <span className="text-xs text-slate-400">· {article.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors leading-snug">{article.title}</h2>
                <p className="text-slate-500 leading-relaxed mb-4">{article.excerpt}</p>
                <div className="text-brand-600 font-medium text-sm flex items-center gap-1">
                  Read article
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Need an Inspection, Not Just Advice?" body="Our guides give you the context — we give you the actual assessment. Book a roof inspection in Kent today." variant="light" />
    </>
  )
}
