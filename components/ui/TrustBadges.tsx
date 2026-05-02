// SEO: Trust badges reinforce E-E-A-T signals (Experience, Expertise, Authoritativeness,
// Trustworthiness) — a key ranking factor for local service businesses in Google's algorithm.

const badges = [
  {
    icon: '✓',
    title: 'CAA Licensed Pilots',
    description: 'Fully licensed by the UK Civil Aviation Authority',
  },
  {
    icon: '✓',
    title: 'No Scaffolding Needed',
    description: 'Complete aerial inspection from ground level',
  },
  {
    icon: '✓',
    title: 'PDF Report Within 48hrs',
    description: 'Detailed HD report delivered to your inbox',
  },
  {
    icon: '✓',
    title: 'Covering All of Kent',
    description: '54+ towns across every Kent postcode',
  },
]

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((badge) => (
        <div
          key={badge.title}
          className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-card border border-slate-100"
        >
          <span className="text-2xl text-brand-600 font-bold mb-2">{badge.icon}</span>
          <h3 className="text-sm font-semibold text-slate-900 mb-1">{badge.title}</h3>
          <p className="text-xs text-slate-500">{badge.description}</p>
        </div>
      ))}
    </div>
  )
}
