import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import BreadcrumbNav from '@/components/ui/BreadcrumbNav'
import ServiceCard from '@/components/ui/ServiceCard'
import { roofvueServices } from '@/lib/services'
import { getBreadcrumbs } from '@/lib/seo-utils'
import { BUSINESS } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Roof Survey Services Kent | RoofVue — Independent Assessments',
  description:
    'Six specialist independent roof survey services in Kent — residential surveys, drone inspections, home buyer reports, commercial surveys, insurance assessments and landlord inspections. From £149.',
  alternates: { canonical: '/services' },
}

const audiences = [
  { icon: '🏠', label: 'Homeowners', desc: 'Worried about your roof? Get an honest assessment before calling a roofer.' },
  { icon: '🔑', label: 'Home Buyers', desc: 'Know what you\'re buying before you exchange. Independent drone inspection.' },
  { icon: '🏢', label: 'Commercial Owners', desc: 'Expert surveys for offices, retail units, warehouses and mixed-use.' },
  { icon: '📋', label: 'Insurers & Loss Adjusters', desc: 'Independent evidence-based assessments for claims and disputes.' },
  { icon: '🤝', label: 'Landlords & Agents', desc: 'Compliance-ready inspections for rental portfolios across Kent.' },
  { icon: '💼', label: 'Property Investors', desc: 'Pre-acquisition due diligence before committing to a purchase.' },
]

export default function ServicesPage() {
  const breadcrumbs = getBreadcrumbs('/services')

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="bg-slate-50 border-b border-slate-200 py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <BreadcrumbNav items={breadcrumbs} />
        </div>
      </div>

      {/* Hero */}
      <section className="gradient-hero text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="badge bg-accent-500/20 text-accent-300 mb-6">All services</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Independent roof surveys for every situation
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Six specialist services, one principle: independent, unbiased, expert assessment with no repairs agenda. Choose the service that fits your situation.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roofvueServices.map((service) => (
              <ServiceCard key={service.slug} service={service} showPrice variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Who we work with</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              From first-time buyers to portfolio investors — our independent surveys are built for real decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {audiences.map((a) => (
              <div key={a.label} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card flex gap-4">
                <span className="text-3xl flex-shrink-0">{a.icon}</span>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{a.label}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why independent */}
      <section className="py-20 px-4 bg-brand-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Why independent matters</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            When a roofer assesses your roof, they have a financial interest in finding work. RoofVue has no repair teams. Our surveyors are paid to find the truth, not to generate repair quotes. That distinction changes everything about the advice you receive.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { label: 'No repair teams', icon: '✕' },
              { label: 'No contractor affiliates', icon: '✕' },
              { label: 'No upselling incentive', icon: '✕' },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 rounded-xl px-5 py-4 flex items-center gap-3">
                <span className="text-red-400 font-bold text-lg">{item.icon}</span>
                <span className="text-slate-200 font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-primary px-8 py-4">
            Book an Independent Survey
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Not sure which service you need?</h2>
          <p className="text-slate-500 mb-8">Call us and we&apos;ll point you in the right direction. No obligation, no hard sell.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary px-7 py-3">Book a Survey</Link>
            <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} className="btn-outline-dark px-7 py-3">
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
