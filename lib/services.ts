export interface RoofVueService {
  slug: string
  name: string
  shortName: string
  tagline: string
  metaDescription: string
  price: string
  duration: string
  deliverable: string
  targetAudience: string[]
  benefits: string[]
  whatIsIncluded: string[]
  schemaServiceType: string
  fullDescription: string
}

export const roofvueServices: RoofVueService[] = [
  {
    slug: 'roof-survey',
    name: 'Drone Roof Survey',
    shortName: 'roof survey',
    tagline: 'Complete aerial roof inspection with no ladders or scaffolding',
    // SEO: 155-char meta, includes Kent for local relevance
    metaDescription:
      'Professional drone roof surveys across Kent from £149. CAA-licensed pilots inspect your roof safely — no scaffolding needed. Full HD report within 48hrs.',
    price: 'from £149',
    duration: '1–2 hours on-site',
    deliverable: 'Full HD PDF report with annotated imagery within 48 hours',
    targetAudience: ['homeowners', 'landlords', 'property managers'],
    benefits: [
      'No ladders or scaffolding required — completely safe inspection',
      'CAA-licensed pilots operating legally across all Kent towns',
      'High-resolution imagery captures details invisible from ground level',
      'Faster and more cost-effective than traditional scaffold surveys',
      'Detailed PDF report delivered within 48 hours of survey',
      'Identify hidden defects before they become expensive repairs',
    ],
    whatIsIncluded: [
      'Pre-flight safety checks and CAA-compliant flight plan',
      'Full perimeter drone flight capturing all roof elevations',
      'Close-up HD imagery of all potential problem areas',
      'Annotated condition report highlighting all defects found',
      'Recommendations and priority ratings for any repairs needed',
      'PDF report emailed within 48 hours of survey completion',
    ],
    schemaServiceType: 'RoofInspectionService',
    fullDescription: `RoofVue's drone roof survey service provides a comprehensive aerial inspection of your property's roof without the need for ladders, scaffold towers or cherry pickers. Our CAA-licensed drone pilots operate legally across all Kent towns, from Maidstone and Canterbury to Folkestone, Dover and Tunbridge Wells.

During the survey, our drone captures ultra-high-definition video and still imagery of every aspect of your roof — including areas that would be impossible to see from the ground or even from a traditional ladder. We examine roof tiles, slates, lead flashing, ridge tiles, hip tiles, chimney stacks, gutters, valleys, and flat roof sections where applicable.

The result is a thorough, objective assessment of your roof's current condition backed by clear photographic evidence. Within 48 hours of the survey, you will receive a professionally formatted PDF report containing all imagery, annotated to highlight any defects found, together with our recommendations and a priority rating for any repairs required.

Our drone roof surveys are particularly popular with homeowners who have noticed something unusual about their roof but cannot safely investigate themselves, and with landlords and property managers who need documented evidence of roof condition for maintenance records or insurance purposes. We cover all residential property types across Kent, including terraced houses, semi-detached homes, detached properties, bungalows, and converted period buildings.`,
  },
  {
    slug: 'roof-condition-report',
    name: 'Roof Condition Report',
    shortName: 'condition report',
    tagline: "Detailed written report on your roof's current condition",
    metaDescription:
      "Roof condition reports in Kent from £199. RoofVue's drone-based assessment gives you a detailed written report on your roof's condition — ideal for insurance and planning.",
    price: 'from £199',
    duration: '2–3 hours on-site plus report preparation',
    deliverable: 'Comprehensive written condition report with graded assessment and HD imagery',
    targetAudience: ['homeowners', 'insurance claimants', 'property managers'],
    benefits: [
      'Insurance-grade documentation of current roof condition',
      'Objective third-party assessment from qualified professionals',
      'Graded severity ratings make prioritising repairs straightforward',
      'Photographic evidence of every defect and area of concern',
      'Useful for insurance claims, planning applications and valuations',
      'Full Kent coverage — one company for all your properties',
    ],
    whatIsIncluded: [
      'Comprehensive drone aerial survey of all roof elevations',
      'Written condition assessment with graded severity ratings (1–5)',
      'Annotated HD photographic evidence for every defect identified',
      'Material condition assessment (tiles, flashings, gutters, chimneys)',
      'Estimated remaining serviceable life for roof sections where appropriate',
      'Summary of recommended actions with indicative urgency',
      'Full PDF report delivered within 48 hours',
    ],
    schemaServiceType: 'PropertyConditionAssessment',
    fullDescription: `The RoofVue Roof Condition Report is our most comprehensive assessment product, designed to give homeowners, insurance professionals and property managers a thorough, evidence-based understanding of a roof's current condition.

Using our CAA-licensed drones, we conduct a meticulous aerial survey of your roof across all elevations, capturing high-definition imagery that is then used to produce a detailed written condition report. Unlike a basic survey that simply notes defects, our Roof Condition Report provides a graded assessment of each roof section and component — tiles, slates, ridge tiles, hip tiles, valleys, lead flashings, chimney stacks, parapet walls, gutters and downpipes — using a standardised severity scale from 1 (excellent) to 5 (immediate action required).

This structured approach makes the report invaluable for insurance purposes, where insurers need clear evidence of pre-existing condition, and for property managers overseeing multiple Kent properties who need to prioritise maintenance budgets across a portfolio. The report is also frequently used alongside conveyancing processes and planning applications involving roof alterations.

We cover all property types and all areas of Kent, from the Medway towns and Maidstone through to Canterbury, the Thanet coast, the Weald and the Romney Marsh.`,
  },
  {
    slug: 'pre-purchase-roof-survey',
    name: 'Pre-Purchase Roof Survey',
    shortName: 'pre-purchase survey',
    tagline: 'Know the true condition of a roof before you buy',
    metaDescription:
      'Pre-purchase roof surveys in Kent from £179. Buy with confidence — RoofVue drone inspection reveals hidden roof defects before you exchange contracts. 48hr PDF report.',
    price: 'from £179',
    duration: '1–2 hours on-site',
    deliverable: 'Urgent PDF condition report within 48 hours, suitable for solicitors',
    targetAudience: ['home buyers', 'solicitors', 'estate agents'],
    benefits: [
      'Reveals hidden defects before you commit to a purchase',
      'Provides leverage for price renegotiation if defects are found',
      'Fast 48-hour turnaround to fit tight conveyancing timelines',
      'Independent, impartial assessment with no vested interest',
      'Suitable for solicitors and mortgage lenders as supporting evidence',
      'Covers all property types across Kent — old and new builds',
    ],
    whatIsIncluded: [
      'Pre-purchase drone aerial survey of all roof elevations',
      'Identification of all current defects with photographic evidence',
      'Assessment of roof materials and estimated remaining life',
      'Approximate cost indicators for any remedial works required',
      'Summary suitable for sharing with solicitors and lenders',
      'PDF report delivered within 48 hours of survey',
    ],
    schemaServiceType: 'PrePurchaseInspectionService',
    fullDescription: `Buying a property in Kent is one of the largest financial decisions most people ever make, and the roof is one of the most expensive elements to repair or replace if something goes wrong. RoofVue's Pre-Purchase Roof Survey gives home buyers the independent aerial assessment they need before exchanging contracts.

Traditional house surveys often include only a visual inspection of the roof from ground level, which can miss significant defects that are only visible when closely examined from above. Our CAA-licensed drones fly around and over the property, capturing close-up HD imagery of all roof elevations, chimney stacks, flashings, valley gutters and other critical components.

The resulting report is formatted to be useful not just to the buyer but also to solicitors and mortgage lenders who may require evidence of a property's structural condition. If defects are found, our cost indications give buyers clear grounds for price renegotiation or for requiring the seller to carry out remedial works before completion.

We work across all of Kent — from Sevenoaks and Tunbridge Wells in the west through Maidstone, Ashford and Canterbury to Deal and Folkestone on the coast — and our 48-hour report turnaround means we can fit within even the most pressured conveyancing timelines. We can survey a property whether or not you have already arranged access, as we can operate from the public highway in most cases.`,
  },
  {
    slug: 'landlord-roof-inspection',
    name: 'Landlord Roof Inspection',
    shortName: 'landlord inspection',
    tagline: 'Compliance-ready roof inspections for rental properties',
    metaDescription:
      'Landlord roof inspections across Kent from £149. RoofVue provides documented proof of roof maintenance for compliance and insurance. No scaffolding. 48hr report.',
    price: 'from £149',
    duration: '1–2 hours on-site',
    deliverable: 'Compliance-ready PDF report within 48 hours',
    targetAudience: ['landlords', 'letting agents', 'property management companies'],
    benefits: [
      'Documented proof of roof maintenance for compliance purposes',
      'Reduces liability exposure under the Landlord and Tenant Act 1985',
      'Useful evidence for Section 21 and Section 8 proceedings if needed',
      'Consistent reporting format across entire property portfolios',
      'Portfolio discounts available for landlords with multiple Kent properties',
      'Fast scheduling — we cover all Kent postcodes from our Maidstone base',
    ],
    whatIsIncluded: [
      'Drone aerial inspection of all roof elevations and components',
      'Defect identification with photographic evidence and location markers',
      'Compliance-ready written report referencing relevant legislation',
      'Condition grading and urgency ratings for any repairs found',
      'Recommended maintenance schedule going forward',
      'PDF report delivered within 48 hours, suitable for landlord records',
    ],
    schemaServiceType: 'LandlordPropertyInspectionService',
    fullDescription: `Landlords in Kent have clear legal obligations to maintain the structure and exterior of their rental properties in good repair under the Landlord and Tenant Act 1985. The roof is one of the most critical structural elements, and documented evidence of regular inspection and maintenance is increasingly important for compliance, insurance and dispute resolution purposes.

RoofVue's Landlord Roof Inspection service is designed specifically for the needs of private landlords, portfolio investors, letting agents and property management companies operating across Kent. Our CAA-licensed drone pilots can inspect rental properties quickly and cost-effectively, with no need to arrange scaffolding or disrupt tenants with extended access requirements.

The inspection report we produce is formatted specifically to serve as compliance documentation — it references relevant legislative obligations, provides clear photographic evidence of current condition, and grades any defects by urgency and severity. This format is particularly useful for landlords who need to demonstrate to local councils or housing authorities that they are taking their maintenance obligations seriously.

For landlords with multiple rental properties across Kent, we offer portfolio pricing and can schedule multiple inspections efficiently. We cover all Kent postcodes, from properties in the Medway towns, Maidstone and Sevenoaks to those in Thanet, Folkestone, Ashford and the Weald.`,
  },
]

export function getServiceBySlug(slug: string): RoofVueService | undefined {
  return roofvueServices.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return roofvueServices.map((s) => s.slug)
}
