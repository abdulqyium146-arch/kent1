import type { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About RoofVue | Independent Roof Survey Specialists, Kent',
  description:
    'RoofVue is an independent roof survey company based in Maidstone, Kent. No repair teams, no sales agenda — just expert, unbiased assessments for homeowners, buyers and businesses.',
  alternates: { canonical: '/about' },
}

const values = [
  {
    title: 'Independence above everything',
    description: 'We have no repair teams and no affiliate relationships with contractors. Our assessments are ours alone. What we find is what we tell you — nothing more, nothing less.',
  },
  {
    title: 'Evidence before opinion',
    description: 'Every finding in every RoofVue report is backed by high-resolution photographic evidence. We show you what we saw, not just what we concluded.',
  },
  {
    title: 'Clarity in everything we write',
    description: 'Our reports are written to be read by real people — not just surveyors. Plain language, clear grading, actionable recommendations.',
  },
  {
    title: 'We show up and we are thorough',
    description: 'We are known in Kent for actually arriving when we say we will and not leaving until we\'ve looked at everything. Reputation is earned over thousands of surveys, not marketing.',
  },
]

const stats = [
  { value: '4,800+', label: 'Properties surveyed' },
  { value: '10+', label: 'Years operating in Kent' },
  { value: '4.9 / 5', label: 'Average customer rating' },
  { value: '6', label: 'Qualified surveyors' },
  { value: '48hrs', label: 'Report turnaround guarantee' },
  { value: '54+', label: 'Kent towns covered' },
]

const team = [
  {
    name: 'James Hartley',
    role: 'Founder & Senior Surveyor',
    bio: 'Qualified building surveyor with 20+ years in property inspection. Founded RoofVue in 2014 after identifying the need for genuinely independent roof assessments in Kent.',
  },
  {
    name: 'Helen Brooks',
    role: 'Commercial Survey Lead',
    bio: 'Specialises in flat, EPDM and commercial roof systems. Handles all commercial and industrial survey work across the county.',
  },
  {
    name: 'Tom Richards',
    role: 'CAA-Licensed Drone Pilot & Surveyor',
    bio: 'Holds full CAA Flyer ID and Operator ID. Conducts all drone-assisted inspections and aerial survey work across Kent.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="badge bg-accent-500/20 text-accent-300 mb-6">Our story</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            Independent roof surveys —{' '}
            <span className="text-accent-400">because honest advice matters</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
            RoofVue was built on a simple principle: homeowners and buyers deserve a genuinely independent view of their roof — not an assessment from someone who profits from the repairs.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why RoofVue exists</h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  RoofVue was founded in Maidstone in {BUSINESS.foundingYear} by James Hartley, a qualified building surveyor who had spent fifteen years working in the construction industry and became increasingly frustrated by one recurring problem.
                </p>
                <p>
                  Homeowners were calling roofers to diagnose roof problems. Roofers — quite reasonably — are in the business of doing repairs, not providing neutral assessments. Homeowners were regularly being advised to do more work than they needed, or given quotes for the wrong repairs because no one had properly identified the source of the problem.
                </p>
                <p>
                  The solution was straightforward: an independent roof survey company with no repair teams, no upselling incentive, and no conflict of interest. Just qualified surveyors, thorough inspections, and honest reports.
                </p>
                <p>
                  A decade on, RoofVue has surveyed over 4,800 properties across Kent — from Victorian terraces in Canterbury to modern commercial units in the Medway towns. Our approach has not changed: we inspect, we document, we report honestly. What you do next is your decision.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Book a Survey
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 mb-6">
                <h3 className="font-bold text-slate-900 text-lg mb-6">RoofVue at a glance</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-3xl font-bold text-accent-600 mb-1">{s.value}</div>
                      <div className="text-xs text-slate-500">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-brand-900 rounded-3xl p-8 text-white">
                <h3 className="font-bold text-white text-lg mb-4">The RoofVue difference</h3>
                <div className="space-y-3">
                  {[
                    'We do not do repairs — ever',
                    'No affiliate relationships with contractors',
                    'Every report reviewed before delivery',
                    'Drone + ground-level inspection on every job',
                    'Plain language reports, no jargon',
                    'We answer our phone',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What we stand for</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Four principles that have guided every survey we have ever done.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 border border-slate-200 shadow-card">
                <div className="w-10 h-10 rounded-xl bg-brand-900 flex items-center justify-center text-accent-400 font-bold text-lg mb-5">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-3">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our team</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Qualified, experienced, and answerable to you — not to a parent company or contractor network.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-slate-50 rounded-2xl p-7 border border-slate-200">
                <div className="w-14 h-14 rounded-2xl bg-brand-900 flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-accent-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">{member.name}</h3>
                <p className="text-xs font-semibold text-accent-600 uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 gradient-hero text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-5">Ready to get an honest view?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Book an independent RoofVue survey. We cover all of Kent — from £149, reports within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary px-8 py-4">Book a Survey</Link>
            <a href={`tel:${BUSINESS.phone.replace(/\s/g, '')}`} className="btn-outline px-8 py-4">
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
