export interface RoofVueService {
  slug: string
  name: string
  shortName: string
  tagline: string
  metaDescription: string
  price: string
  duration: string
  deliverable: string
  icon: string
  targetAudience: string[]
  benefits: string[]
  whatIsIncluded: string[]
  schemaServiceType: string
  fullDescription: string
}

export const roofvueServices: RoofVueService[] = [
  {
    slug: 'residential-roof-survey',
    name: 'Residential Roof Survey',
    shortName: 'Roof Survey',
    tagline: 'A thorough, independent assessment of your home\'s roof condition',
    metaDescription:
      'Independent residential roof surveys across Kent from £149. RoofVue provides unbiased, expert roof assessments — no repairs agenda, just honest advice. 48hr PDF report.',
    price: 'from £149',
    duration: '1–2 hours on-site',
    deliverable: 'Detailed PDF condition report with HD imagery within 48 hours',
    icon: '🏠',
    targetAudience: ['homeowners', 'property managers', 'letting agents'],
    benefits: [
      'Completely independent — we have no interest in selling you repairs',
      'Expert assessment from qualified roof survey professionals',
      'High-resolution imagery captures every detail of your roof',
      'Clear, jargon-free report with prioritised action list',
      'Full PDF report delivered within 48 hours',
      'Covers all property types across Kent',
    ],
    whatIsIncluded: [
      'Full inspection of all roof elevations, slopes and components',
      'Assessment of tiles, slates, flashings, ridges, hips and valleys',
      'Chimney stack, parapet wall and flat roof section inspection',
      'Gutter and downpipe condition assessment',
      'Annotated HD photographic evidence for every finding',
      'Condition grading and urgency ratings (1–5 scale)',
      'Recommended actions with indicative urgency',
      'PDF report delivered within 48 hours',
    ],
    schemaServiceType: 'RoofSurveyService',
    fullDescription: `A RoofVue Residential Roof Survey is an independent, professional assessment of your home's roof condition — conducted by qualified roof survey specialists with no interest in selling you unnecessary repairs.

We inspect every aspect of your roof: tiles, slates, ridge tiles, hip tiles, valleys, lead flashings, chimney stacks, parapet walls, gutters and downpipes. Our surveyors use a combination of ground-level inspection, drone-assisted aerial imagery and — where safely accessible — close-up physical examination to ensure nothing is missed.

The key word here is independent. Unlike asking a roofer to assess your roof, RoofVue has no repair teams and no financial incentive to recommend more work than your roof needs. Our only interest is in giving you an accurate, honest picture of your roof's condition and telling you clearly what, if anything, requires attention.

Our written report grades each area of your roof using a standardised 1–5 condition scale, backed by clear photographic evidence. We tell you what we found, how serious each issue is, and what we recommend. You can then choose your own contractor with confidence.

We cover all residential property types across Kent — Victorian terraces, Edwardian semis, post-war bungalows, 1970s estates, new builds, period cottages and converted properties — in all areas from Dartford and Gravesend through Maidstone and Canterbury to Folkestone, Dover and the Thanet coast.`,
  },
  {
    slug: 'drone-roof-inspection',
    name: 'Drone Roof Inspection',
    shortName: 'Drone Inspection',
    tagline: 'Precision aerial roof inspection — safe, thorough and non-invasive',
    metaDescription:
      'Professional drone roof inspections across Kent from £199. CAA-licensed aerial surveys capture HD footage of every roof elevation. Full PDF report within 48 hours.',
    price: 'from £199',
    duration: '1–3 hours on-site',
    deliverable: 'HD drone footage, annotated stills and full PDF report within 48 hours',
    icon: '🚁',
    targetAudience: ['homeowners', 'commercial property owners', 'housing associations'],
    benefits: [
      'Access areas impossible to reach safely by ladder or scaffold',
      'CAA-licensed pilots — compliant with UK drone regulations',
      'Ultra-high-definition imagery reveals hidden defects',
      'No scaffolding, no ladders, minimal disruption',
      'Faster and significantly more cost-effective than scaffold surveys',
      'Ideal for multi-storey, steep-pitch and complex roof geometries',
    ],
    whatIsIncluded: [
      'Pre-flight safety assessment and CAA-compliant flight planning',
      'Full aerial survey of all roof elevations and surfaces',
      'Ultra-HD video and high-resolution still photography',
      'Close-up imagery of flashings, ridges, verges and chimneys',
      'Annotated report with precise defect locations',
      'All raw footage and imagery included in report package',
      'Condition assessment and prioritised recommendations',
      'PDF report delivered within 48 hours',
    ],
    schemaServiceType: 'DroneRoofInspectionService',
    fullDescription: `RoofVue's Drone Roof Inspection service uses CAA-licensed unmanned aerial vehicles to capture ultra-high-definition footage and imagery of your roof from angles and heights that would be impossible or prohibitively expensive to achieve using traditional methods.

Our drone pilots hold full CAA Flyer ID and Operator ID licences, operate legally under UK Air Navigation Order regulations, and carry full public liability insurance. Every inspection flight is preceded by a comprehensive safety assessment.

The practical advantage of drone inspection is substantial. For a typical two-storey property, traditional scaffold access costs between £800 and £2,000 and takes days to erect — before any survey work even begins. A drone inspection achieves superior visual coverage in a fraction of the time and at a fraction of the cost, capturing close-up HD imagery of every ridge tile, flashing, valley, chimney haunch and parapet that would be missed from ground level.

Our drone inspections are particularly valuable for complex or large properties: multi-storey buildings, steeply pitched roofs, mansard roofs, properties with multiple elevations, and any structure where close visual access is otherwise difficult or dangerous.

The result is a comprehensive, evidence-based condition report with clear photographic documentation of every defect found — delivered to your inbox within 48 hours. We cover all of Kent, from the Medway towns and North Kent coast through the Weald to the Channel ports.`,
  },
  {
    slug: 'home-buyer-roof-report',
    name: 'Home Buyer Roof Report',
    shortName: 'Buyer Report',
    tagline: 'Know exactly what you\'re buying before you exchange contracts',
    metaDescription:
      'Home buyer roof reports across Kent from £249. Independent drone inspection reveals hidden roof defects before exchange — giving you confidence or negotiating power. 48hr report.',
    price: 'from £249',
    duration: '1–2 hours on-site',
    deliverable: 'Urgent buyer-format PDF report within 24–48 hours',
    icon: '🔑',
    targetAudience: ['home buyers', 'property investors', 'solicitors', 'estate agents'],
    benefits: [
      'Full aerial and ground-level inspection before you commit',
      'Identify hidden defects that standard surveys miss',
      'Provides grounds for price renegotiation if problems are found',
      'Fast 24–48 hour turnaround to fit conveyancing timelines',
      'Formatted for solicitors, mortgage lenders and insurers',
      'Completely independent — no conflict of interest',
    ],
    whatIsIncluded: [
      'Independent drone and ground-level roof inspection',
      'Identification of all current defects with photographic evidence',
      'Materials assessment and estimated remaining serviceable life',
      'Approximate cost indicators for any remedial works identified',
      'Risk rating: low, medium, high for each issue found',
      'Executive summary suitable for solicitors and lenders',
      'Priority PDF report within 24–48 hours',
    ],
    schemaServiceType: 'PrePurchaseRoofInspectionService',
    fullDescription: `Buying a home is one of the most significant financial commitments most people will ever make. The roof is also one of the most expensive elements to repair or replace — yet most standard RICS HomeBuyer Reports offer only a cursory ground-level assessment that can miss serious defects.

RoofVue's Home Buyer Roof Report gives you a genuinely independent, expert assessment of the roof's condition before you exchange contracts. We combine drone aerial inspection with ground-level survey to build a complete picture of the roof — catching problems that would be invisible from street level.

Where defects are found, our report provides estimated cost indications for remedial works. These give buyers clear, evidence-based grounds for price renegotiation — or, where problems are serious enough, grounds for reconsidering the purchase altogether before it is too late.

Our report is formatted specifically for conveyancing purposes. The executive summary can be shared directly with your solicitor, mortgage lender or insurer. Our 24–48 hour turnaround means we can fit within even tight conveyancing timelines — we can often inspect within 24 hours of your request.

We operate across all of Kent and can in most cases inspect from the public highway, meaning we do not need to negotiate access with the seller or occupants. We cover all property types: Victorian terraces, Edwardian semis, post-war housing, new builds, period conversions and listed properties.`,
  },
  {
    slug: 'commercial-roof-survey',
    name: 'Commercial Roof Survey',
    shortName: 'Commercial Survey',
    tagline: 'Expert roof surveys for offices, retail, industrial and mixed-use properties',
    metaDescription:
      'Commercial roof surveys across Kent from £349. RoofVue provides independent expert assessments for flat, felt, EPDM, metal and complex commercial roofs. Detailed reports for maintenance and insurance.',
    price: 'from £349',
    duration: '2–4 hours on-site',
    deliverable: 'Full commercial condition report with drone footage and remediation schedule',
    icon: '🏢',
    targetAudience: ['commercial property owners', 'facilities managers', 'estate agents', 'investors'],
    benefits: [
      'Specialist experience with flat, felt, metal and complex commercial roofs',
      'Drone survey covers large roof areas efficiently and cost-effectively',
      'Detailed condition report suitable for maintenance planning and insurance',
      'Independent assessment — no repair teams, no sales agenda',
      'Portfolio pricing available for multiple commercial properties',
      'Covers offices, retail units, industrial premises and mixed-use buildings',
    ],
    whatIsIncluded: [
      'Full drone and close-inspection survey of all commercial roof areas',
      'Assessment of all roof materials, membranes, coverings and drainage',
      'Identification of ponding, splits, blistering and membrane failure',
      'Roof light, lantern and penetration condition assessment',
      'Detailed photographic evidence with annotated condition notes',
      'Condition grading and recommended remediation schedule',
      'Budget cost estimates for prioritised remedial works',
      'Full PDF commercial report within 48–72 hours',
    ],
    schemaServiceType: 'CommercialRoofSurveyService',
    fullDescription: `Commercial roofs present a different set of challenges to residential properties. Flat, low-pitch and complex commercial roof systems — built-up felt, EPDM single-ply membrane, GRP, profiled metal sheeting, asphalt and green roof systems — require a different skillset to assess accurately.

RoofVue's Commercial Roof Survey service is designed specifically for commercial and mixed-use properties: offices, retail units, warehouses, industrial units, leisure facilities, schools and large-scale residential buildings. Our surveyors have direct experience with all principal commercial roofing systems and the common failure modes associated with each.

Drone survey is particularly effective for commercial properties, where large roof areas can be inspected comprehensively and safely in a fraction of the time it would take to physically walk every section. We combine aerial drone footage with close ground-level and accessible inspection to ensure the full picture.

Our commercial report is formatted for practical use: it provides a clear condition grading for each roof section, identifies defects with precise photographic documentation, and produces a prioritised remediation schedule with budget cost estimates. This format is directly useful for maintenance planning, cyclical budgeting, insurance purposes and pre-acquisition due diligence.

We work across all of Kent and the wider South East and offer portfolio pricing for property companies and facilities managers responsible for multiple commercial assets.`,
  },
  {
    slug: 'insurance-roof-assessment',
    name: 'Insurance Roof Assessment',
    shortName: 'Insurance Assessment',
    tagline: 'Independent evidence-based assessments for insurance claims and disputes',
    metaDescription:
      'Independent insurance roof assessments across Kent from £199. RoofVue provides expert, impartial roof condition reports for claims, disputes and underwriting purposes. 48hr report.',
    price: 'from £199',
    duration: '1–3 hours on-site',
    deliverable: 'Insurance-format PDF report with photographic evidence within 48 hours',
    icon: '📋',
    targetAudience: ['homeowners with insurance claims', 'loss adjusters', 'insurers', 'solicitors'],
    benefits: [
      'Genuinely independent — not connected to any insurer or repair contractor',
      'Expert testimony quality reports accepted by insurers and courts',
      'Clear distinction between storm/event damage and pre-existing wear',
      'Photographic and drone evidence supports claim validation',
      'Fast turnaround for urgent claim situations',
      'Used by homeowners, loss adjusters and insurers alike',
    ],
    whatIsIncluded: [
      'Full independent inspection of all claimed damage areas',
      'Assessment of damage cause: storm event vs. pre-existing condition',
      'Drone aerial survey for comprehensive high-level damage evidence',
      'Comparative condition assessment of damaged vs. undamaged sections',
      'Precise photographic documentation of all damage identified',
      'Expert opinion on extent of damage and cause attribution',
      'Estimated remediation costs from neutral perspective',
      'Insurance-format PDF report within 48 hours',
    ],
    schemaServiceType: 'InsuranceRoofAssessmentService',
    fullDescription: `When a roof insurance claim is disputed or complex, the outcome often depends on the quality and independence of the survey evidence. RoofVue provides genuinely independent insurance roof assessments — we are not connected to any insurer, loss adjuster or repair contractor, which means our findings cannot be influenced by any financial interest other than accuracy.

Our insurance assessments are structured to address the key questions in any roof claim: what is the nature and extent of the damage? Is the damage attributable to the claimed event (storm, impact, weather) or does it represent pre-existing wear and deterioration? What is the current condition of the undamaged sections of the roof? What is the estimated cost of remediation?

We provide clear, evidence-based answers to all of these questions, supported by drone aerial photography, close-up ground-level inspection, and precise photographic documentation of every finding. Our reports are written to the standard expected in expert witness testimony and are regularly accepted by insurers, loss adjusters, and — where disputes proceed — by courts and dispute resolution services.

Our clients include homeowners who feel their claim has been unfairly handled, loss adjusters seeking independent verification, underwriters assessing risk at renewal, and solicitors acting in property damage disputes. We cover all of Kent and can typically arrange inspection within 24–48 hours for urgent claim situations.`,
  },
  {
    slug: 'landlord-roof-inspection',
    name: 'Landlord Roof Inspection',
    shortName: 'Landlord Inspection',
    tagline: 'Compliance-ready roof inspections for rental properties across Kent',
    metaDescription:
      'Landlord roof inspections across Kent from £149. RoofVue provides documented proof of roof maintenance for compliance, insurance and dispute purposes. 48hr PDF report.',
    price: 'from £149',
    duration: '1–2 hours on-site',
    deliverable: 'Compliance-ready PDF report within 48 hours',
    icon: '🔑',
    targetAudience: ['landlords', 'letting agents', 'property management companies', 'HMO operators'],
    benefits: [
      'Documented proof of roof maintenance under the Landlord and Tenant Act 1985',
      'Reduces liability in repair obligation disputes',
      'Consistent reporting format across your whole portfolio',
      'Portfolio discounts for landlords with multiple properties',
      'Minimal tenant disruption — drone inspection avoids intrusive access',
      'Fast scheduling across all Kent postcodes',
    ],
    whatIsIncluded: [
      'Drone and ground-level inspection of all roof elevations',
      'Defect identification with photographic evidence and location references',
      'Compliance-focused written report referencing relevant legislation',
      'Condition grading and urgency ratings for all issues found',
      'Recommended maintenance schedule and actions',
      'PDF report formatted for landlord records and dispute evidence',
    ],
    schemaServiceType: 'LandlordPropertyInspectionService',
    fullDescription: `Landlords in Kent have clear legal obligations under the Landlord and Tenant Act 1985 to maintain the structure and exterior of their rental properties in good repair. The roof is one of the most critical structural elements — and documented evidence of regular inspection and proactive maintenance is increasingly essential for compliance, insurance and dispute resolution.

RoofVue's Landlord Roof Inspection service is designed specifically for private landlords, portfolio investors, letting agents, HMO operators and property management companies. Our approach minimises disruption to tenants: wherever possible, we conduct the roof inspection by drone from outside the property, meaning we often do not need to disturb the occupants at all.

The inspection report we produce is formatted specifically for landlord compliance purposes. It references relevant legislative obligations, provides clear photographic evidence of current roof condition, grades any defects by urgency and severity, and recommends a maintenance schedule going forward. This format is directly useful for demonstrating to local councils, housing authorities or dispute resolution services that a landlord is taking their maintenance obligations seriously.

For landlords with multiple properties across Kent, we offer portfolio pricing and efficient multi-property scheduling. We cover all Kent postcodes from our Maidstone base — from properties in the Medway towns and Dartford through to Folkestone, Ashford and the Thanet coast.`,
  },
]

export function getServiceBySlug(slug: string): RoofVueService | undefined {
  return roofvueServices.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return roofvueServices.map((s) => s.slug)
}
