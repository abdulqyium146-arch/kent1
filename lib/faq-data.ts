export interface FAQ {
  question: string
  answer: string
}

// ── Service FAQs ─────────────────────────────────────────────────────────────

const roofSurveyFAQs: FAQ[] = [
  {
    question: 'Do you need access to my property for a drone roof survey in Kent?',
    answer:
      'Our CAA-licensed drone pilots can survey your roof from outside your property boundary in most cases across Kent. We operate throughout Maidstone, Canterbury, Folkestone and all Kent towns, requiring only a clear flight path to the roof.',
  },
  {
    question: 'How much does a drone roof survey cost in Kent?',
    answer:
      "RoofVue's drone roof surveys in Kent start from £149 for standard residential properties. The exact price depends on property size and roof complexity. We cover all areas of Kent including Tunbridge Wells, Dover, Ashford and surrounding towns.",
  },
  {
    question: 'How long does a drone roof survey take in Kent?',
    answer:
      'Most residential drone roof surveys in Kent take between 1–2 hours on-site. You will receive your full PDF report with HD imagery and findings within 48 hours of the survey being completed.',
  },
  {
    question: 'Are RoofVue drone pilots licensed to fly in Kent?',
    answer:
      'Yes — all RoofVue pilots hold a CAA (Civil Aviation Authority) Flyer ID and Operator ID, as required by UK law for commercial drone operations. We operate legally and safely across all of Kent, from Maidstone and Canterbury to coastal towns like Folkestone and Margate.',
  },
  {
    question: 'What does a drone roof survey include?',
    answer:
      'Our drone roof survey includes a full aerial inspection of all roof elevations, close-up HD imagery of all potential defect areas, an annotated condition report, and recommendations for any repairs needed. The PDF report is delivered within 48 hours of the survey.',
  },
  {
    question: 'Can a drone survey identify all types of roof defects?',
    answer:
      'Drone surveys are highly effective at identifying cracked or missing tiles, damaged ridge tiles, failed flashings, blocked gutters, chimney defects, and flat roof deterioration. Our CAA-licensed pilots use HD cameras that can detect issues invisible from ground level in all Kent property types.',
  },
  {
    question: 'Do I need to be present during the drone roof survey?',
    answer:
      'You do not need to be present during the survey itself, as our drones operate externally. However, we do recommend being available to receive the pilot before the survey begins. We survey properties across all of Kent, from Dartford and Gravesend to Canterbury and Thanet.',
  },
  {
    question: 'What weather conditions affect drone roof surveys in Kent?',
    answer:
      'We cannot fly in winds above 20mph, heavy rain, or fog. Kent weather is generally suitable for drone operations year-round, but we will always reschedule if conditions are unsafe. We will contact you promptly if a weather cancellation is needed and rebook at your earliest convenience.',
  },
]

const roofConditionReportFAQs: FAQ[] = [
  {
    question: "What is a Roof Condition Report and how is it different from a basic survey?",
    answer:
      "A RoofVue Roof Condition Report goes beyond a basic survey by providing a structured, graded written assessment of every roof component — tiles, flashings, gutters, chimneys and more — using a severity scale of 1–5. It's particularly useful for insurance, planning, or portfolio management purposes across Kent properties.",
  },
  {
    question: 'How much does a Roof Condition Report cost in Kent?',
    answer:
      "RoofVue's Roof Condition Reports start from £199 for standard residential properties in Kent. The price reflects the additional report preparation time compared to a basic survey. We cover all areas of Kent including Maidstone, Canterbury, Sevenoaks and the Thanet coast.",
  },
  {
    question: 'Is a Roof Condition Report accepted by insurance companies?',
    answer:
      'Our Roof Condition Reports provide photographic evidence and graded assessments that are suitable for supporting insurance claims and renewal applications. We recommend checking with your specific insurer, but our reports are routinely used for insurance purposes by Kent homeowners and landlords.',
  },
  {
    question: 'How quickly will I receive my Roof Condition Report?',
    answer:
      "You will receive your completed Roof Condition Report as a professionally formatted PDF within 48 hours of the drone survey. We cover all of Kent — from Dartford and Swanley to Canterbury, Folkestone and the Romney Marsh — and our 48-hour turnaround applies across all locations.",
  },
  {
    question: 'What grading system does RoofVue use in their condition reports?',
    answer:
      'We use a standardised 1–5 severity scale: Grade 1 (Excellent), Grade 2 (Good), Grade 3 (Fair — monitor), Grade 4 (Action recommended), Grade 5 (Immediate action required). Each roof component is individually graded with supporting photographic evidence in our Kent reports.',
  },
  {
    question: 'Can I use a Roof Condition Report for planning permission in Kent?',
    answer:
      'Yes — RoofVue Roof Condition Reports can be submitted as supporting evidence for planning applications involving roof works or extensions in Kent. We cover all Kent planning authority areas including Maidstone Borough, Canterbury City Council, Ashford Borough and the Medway towns.',
  },
  {
    question: 'Can a Roof Condition Report be used for property valuations?',
    answer:
      'Our reports provide objective evidence of roof condition that can inform property valuations, particularly for older properties in Kent where the roof is a significant cost factor. Estate agents and surveyors across Maidstone, Canterbury and Sevenoaks regularly recommend our reports.',
  },
  {
    question: 'Do you provide follow-up surveys after a Roof Condition Report?',
    answer:
      'Yes — we recommend a follow-up survey 12–24 months after the initial report to track any changes in condition. This is particularly valuable for landlords and property managers with portfolios across Kent, as it creates a documented maintenance history for each property.',
  },
]

const prePurchaseFAQs: FAQ[] = [
  {
    question: 'Can I get a pre-purchase roof survey before buying a house in Kent?',
    answer:
      'Yes — RoofVue provides pre-purchase drone roof surveys across all of Kent. Whether you are buying in Canterbury, Sevenoaks, Folkestone or any other Kent town, we can survey the property quickly and deliver a full condition report within 48 hours to support your purchase decision.',
  },
  {
    question: 'How much does a pre-purchase roof survey cost in Kent?',
    answer:
      "RoofVue's pre-purchase roof surveys start from £179 in Kent. Given that a roof replacement in Kent can cost £5,000–£15,000 or more, a pre-purchase survey is an extremely cost-effective way to protect yourself when buying a property in Maidstone, Canterbury, Tunbridge Wells or any other Kent location.",
  },
  {
    question: 'How quickly can you survey a property I am buying in Kent?',
    answer:
      "We aim to schedule pre-purchase surveys within 3–5 working days across all of Kent. Given conveyancing timelines, we recommend booking as soon as your offer is accepted. We cover all Kent postcodes from our Maidstone base and can often accommodate urgent requests.",
  },
  {
    question: 'Do I need the seller\'s permission for a pre-purchase roof survey?',
    answer:
      "In most cases we can conduct the drone survey from the public highway or an adjacent property without needing access to the vendor's land. However, for the most thorough inspection, particularly of flat roof sections, access to the property or garden is preferable. Your solicitor can request this as part of the conveyancing process.",
  },
  {
    question: 'Can a pre-purchase roof survey help me negotiate the price?',
    answer:
      "Yes — if our pre-purchase survey reveals significant defects on a Kent property, the detailed photographic evidence in our report gives you concrete grounds for price renegotiation or requesting that the seller carries out repairs before completion. Many Kent home buyers have saved thousands using our reports in negotiations.",
  },
  {
    question: 'Is a pre-purchase roof survey the same as a full structural survey?',
    answer:
      "No — a RoofVue pre-purchase roof survey focuses specifically on the roof and associated structures (chimneys, gutters, flashings). For a full structural assessment of a property in Kent, we recommend commissioning a full RICS Building Survey as well. Our report complements a full survey by providing detailed drone imagery of the roof.",
  },
  {
    question: 'What types of roofs can you survey before a purchase in Kent?',
    answer:
      "We can survey all roof types found in Kent properties — pitched tile and slate roofs, flat roofs, mansard roofs, heritage buildings with traditional materials, oast house roofs and modern developments. We cover Victorian terraces in Maidstone, period cottages in the Weald, and contemporary homes in Ashford and Dartford alike.",
  },
  {
    question: 'Will the report be in a format suitable for my solicitor?',
    answer:
      "Yes — our pre-purchase roof survey reports are professionally formatted PDF documents with clear photography, written condition assessments and recommended actions. They are designed to be shared with solicitors, mortgage lenders and surveyors involved in Kent property transactions.",
  },
]

const landlordFAQs: FAQ[] = [
  {
    question: 'Are landlord roof inspections required by law in Kent?',
    answer:
      "While there is no specific law mandating annual roof inspections, landlords in Kent have a duty of care under the Landlord and Tenant Act 1985 to keep the structure and exterior of rental properties in repair. A RoofVue landlord roof inspection provides documented evidence of compliance across all of your Kent rental properties.",
  },
  {
    question: 'How much does a landlord roof inspection cost in Kent?',
    answer:
      "RoofVue's landlord roof inspections start from £149 per property in Kent. We offer portfolio discounts for landlords with multiple rental properties across Kent — contact us to discuss pricing for larger portfolios in Maidstone, Canterbury, Medway and the wider county.",
  },
  {
    question: 'How often should landlords inspect their rental property roofs in Kent?',
    answer:
      "We recommend an annual roof inspection for all rental properties in Kent, and immediately following any severe weather events such as storms. Regular documented inspections demonstrate a consistent duty of care, which is important evidence if disputes arise with tenants or local councils across Kent.",
  },
  {
    question: 'Can RoofVue inspect a tenanted property without disturbing the tenant?',
    answer:
      "Yes — because our drone surveys are conducted externally, we typically do not need to enter the property or the tenant's home. This makes our inspections ideal for landlords who need to minimise disruption to tenants in Maidstone, Canterbury, Folkestone, Dover and across all of Kent.",
  },
  {
    question: 'Will a landlord roof inspection report help with insurance claims?',
    answer:
      "Yes — having recent documented evidence of your rental property's roof condition is extremely valuable when making insurance claims for storm damage, leaks or other roofing issues. Our reports are used by landlords across Kent to support claims and demonstrate that the property was being properly maintained.",
  },
  {
    question: 'Can I use RoofVue for multiple rental properties across Kent?',
    answer:
      "Absolutely — we specialise in serving landlords and property management companies across the whole of Kent. Whether you have two properties in Maidstone or a portfolio of twenty across Maidstone, Canterbury, Medway and Thanet, we can schedule and manage inspections cost-effectively with portfolio pricing.",
  },
  {
    question: 'What format does the landlord inspection report come in?',
    answer:
      "Landlord inspection reports are delivered as professionally formatted PDF documents, clearly branded as a RoofVue inspection report. They include the property address, date of inspection, graded condition assessments for all roof components, photographic evidence, and recommended actions — all in a format suitable for landlord records and compliance documentation.",
  },
  {
    question: 'Do you cover commercial as well as residential rental properties in Kent?',
    answer:
      "Yes — RoofVue covers both residential and commercial rental properties across Kent. We have experience inspecting everything from individual residential lets and HMOs to commercial properties and mixed-use buildings in Maidstone, Canterbury, Ashford, the Medway towns and across the county.",
  },
]

// SEO: Per-service FAQ maps — 8 unique FAQs per service, all mention Kent naturally
export function getServiceFAQs(serviceSlug: string): FAQ[] {
  const map: Record<string, FAQ[]> = {
    'roof-survey': roofSurveyFAQs,
    'roof-condition-report': roofConditionReportFAQs,
    'pre-purchase-roof-survey': prePurchaseFAQs,
    'landlord-roof-inspection': landlordFAQs,
  }
  return map[serviceSlug] ?? []
}

// SEO: Dynamic location FAQs — town name injected into templates, providing
// unique content across all 54 location pages without 216 hardcoded entries
export function getLocationFAQs(locationSlug: string, locationName: string): FAQ[] {
  void locationSlug // available for future per-town customisation
  return [
    {
      question: `How much does a drone roof survey cost in ${locationName}?`,
      answer: `RoofVue's drone roof surveys in ${locationName}, Kent start from £149 for standard residential properties. The price depends on property size and roof complexity. We are based in Maidstone and cover ${locationName} and all surrounding Kent postcodes.`,
    },
    {
      question: `How quickly can RoofVue survey my roof in ${locationName}?`,
      answer: `We typically schedule drone roof surveys in ${locationName} within 3–5 working days of booking. Our CAA-licensed pilots operate across all of Kent from our Maidstone base, so ${locationName} is well within our regular coverage area.`,
    },
    {
      question: `Do I need scaffolding for a roof survey in ${locationName}?`,
      answer: `No — RoofVue's drone surveys in ${locationName} eliminate the need for scaffolding entirely. Our CAA-licensed pilots use professional drones to capture HD imagery of your roof safely and legally, saving you the significant cost of scaffold erection.`,
    },
    {
      question: `What types of properties do you survey in ${locationName}, Kent?`,
      answer: `We survey all residential and commercial property types in ${locationName} — terraced houses, semi-detached homes, detached properties, bungalows, period buildings and new builds. Whatever the property type in ${locationName}, our drone can inspect it safely and deliver a full report within 48 hours.`,
    },
  ]
}

// SEO: Combined location + service FAQs for the most granular pages
// (54 locations × 4 services = 216 pages, each needing unique FAQ content)
export function getLocationServiceFAQs(locationName: string, serviceName: string): FAQ[] {
  return [
    {
      question: `How much does a ${serviceName} cost in ${locationName}, Kent?`,
      answer: `RoofVue's ${serviceName} in ${locationName}, Kent starts from £149 for standard residential properties. Contact us for an exact quote tailored to your property in the ${locationName} area.`,
    },
    {
      question: `How long does a ${serviceName} take in ${locationName}?`,
      answer: `Most ${serviceName} appointments in ${locationName} take 1–2 hours on-site. Your full HD PDF report will be delivered within 48 hours of the survey. We serve ${locationName} as part of our comprehensive Kent coverage from our Maidstone base.`,
    },
    {
      question: `Do I need to be present for a ${serviceName} in ${locationName}?`,
      answer: `You do not need to be present during the drone survey itself, as all work is conducted externally. We do ask that you or a representative is available at the start of the appointment in ${locationName} to confirm access arrangements.`,
    },
    {
      question: `Is scaffolding required for a ${serviceName} in ${locationName}?`,
      answer: `No — one of the key benefits of choosing RoofVue for your ${serviceName} in ${locationName} is that no scaffolding is ever required. Our CAA-licensed drone pilots work safely from ground level, saving you the considerable cost of traditional scaffold access.`,
    },
    {
      question: `What will I receive after my ${serviceName} in ${locationName}?`,
      answer: `Within 48 hours of your ${serviceName} in ${locationName}, you will receive a professionally formatted PDF report by email. The report includes HD annotated imagery, written condition assessments, and prioritised recommendations for any repairs identified.`,
    },
    {
      question: `Can RoofVue survey my ${locationName} property quickly for a sale or purchase?`,
      answer: `Yes — we understand conveyancing moves fast. If you need a roof survey in ${locationName} urgently to support a sale or purchase, contact us directly and we will do our best to prioritise your appointment. Our 48-hour report turnaround means you won't be left waiting.`,
    },
  ]
}

export function getHomepageFAQs(): FAQ[] {
  return [
    {
      question: 'What areas of Kent does RoofVue cover?',
      answer:
        "RoofVue covers the whole of Kent, including Maidstone, Canterbury, Folkestone, Dover, Tunbridge Wells, Ashford, the Medway towns (Rochester, Chatham, Gillingham), Thanet (Margate, Ramsgate, Broadstairs), North Kent (Gravesend, Dartford, Sittingbourne), and over 50 more towns and villages across the county.",
    },
    {
      question: 'Do I need scaffolding for a roof survey with RoofVue?',
      answer:
        "No — RoofVue's drone roof surveys completely eliminate the need for scaffolding or ladders. Our CAA-licensed pilots fly professional drones around and over your property, capturing high-definition imagery of your roof safely and legally without any physical access to the roof surface.",
    },
    {
      question: 'How quickly will I receive my roof survey report?',
      answer:
        "You will receive your full roof survey PDF report within 48 hours of the drone survey being completed. The report includes annotated HD photography, a written condition assessment, and recommendations for any repairs required. We cover all of Kent and maintain this 48-hour turnaround across the county.",
    },
    {
      question: "Are RoofVue's drone pilots properly licensed?",
      answer:
        "Yes — all RoofVue drone pilots hold a CAA (Civil Aviation Authority) Flyer ID and Operator ID as required under UK law for commercial drone operations. We comply fully with the Air Navigation Order and UK drone regulations when operating across Kent.",
    },
    {
      question: 'How much does a roof survey cost in Kent?',
      answer:
        "RoofVue's roof surveys start from £149 for standard residential properties in Kent. The exact cost depends on the size and complexity of the property. We offer four service types — Drone Roof Survey, Roof Condition Report, Pre-Purchase Roof Survey and Landlord Roof Inspection — each with transparent pricing.",
    },
    {
      question: 'What types of roofs and properties does RoofVue survey in Kent?',
      answer:
        "We survey all roof types across all property types in Kent — tiled and slated pitched roofs, flat roofs, complex multi-section roofs, chimney stacks, heritage properties, period cottages, Victorian terraces, modern new builds and commercial buildings. If it has a roof in Kent, we can inspect it.",
    },
  ]
}

export function getGlobalFAQs(): FAQ[] {
  return [
    {
      question: 'What is a drone roof survey?',
      answer:
        "A drone roof survey is a professional aerial inspection of your roof using a CAA-licensed unmanned aerial vehicle (drone) equipped with a high-definition camera. The drone flies around and over the property, capturing detailed imagery of all roof elevations, tiles, flashings, gutters and chimneys without any ladders or scaffolding.",
    },
    {
      question: 'Is a drone roof survey better than a traditional roof inspection?',
      answer:
        "Drone roof surveys offer significant advantages over traditional methods in Kent. They are safer (no one on the roof), faster, more cost-effective than hiring scaffolding, and can capture detailed imagery of areas that would be difficult or dangerous to access physically. HD drone footage often reveals defects that would be missed from ground level.",
    },
    {
      question: 'How long does a drone roof survey take?',
      answer:
        "Most residential drone roof surveys in Kent take 1–2 hours on-site. Larger or more complex properties may take longer. The PDF report with full findings is delivered within 48 hours of the survey being completed.",
    },
    {
      question: 'How much does a drone roof survey cost in Kent?',
      answer:
        "RoofVue's drone roof surveys start from £149 for standard residential properties across Kent. Roof Condition Reports start from £199, Pre-Purchase Surveys from £179, and Landlord Inspections from £149. Contact us for an exact quote for your Kent property.",
    },
    {
      question: 'Are RoofVue drone pilots licensed to fly commercially?',
      answer:
        "Yes — all RoofVue drone pilots hold a CAA Flyer ID and Operator ID, as required for all commercial drone operations in the UK under the Air Navigation Order. We fly legally and safely across all of Kent.",
    },
    {
      question: 'Do I need scaffolding for a RoofVue survey?',
      answer:
        "No — the entire purpose of a drone roof survey is to eliminate the need for scaffolding. Our drones access all parts of your roof safely from ground level, making inspections faster, cheaper and less disruptive than traditional scaffold-based surveys.",
    },
    {
      question: 'How soon will I receive my roof survey report?',
      answer:
        "Within 48 hours of your drone survey, you will receive a professionally formatted PDF report by email containing HD annotated imagery, a written condition assessment, and recommended actions for any defects found.",
    },
    {
      question: 'What areas of Kent does RoofVue cover?',
      answer:
        "RoofVue covers all of Kent from our Maidstone base — including Canterbury, Folkestone, Dover, Margate, Ramsgate, Broadstairs, Tunbridge Wells, Tonbridge, Sevenoaks, Ashford, Faversham, Sittingbourne, the Medway towns, Gravesend, Dartford and over 50 more towns and villages.",
    },
    {
      question: 'Can a drone survey identify all roof defects?',
      answer:
        "Drone surveys are highly effective at identifying missing or cracked tiles, damaged ridge tiles, failed lead flashings, blocked gutters, chimney defects, moss and lichen growth, and flat roof deterioration. Some internal defects (e.g. rafter condition) require physical inspection, but the vast majority of roof defects visible from the exterior can be captured by our HD drones.",
    },
    {
      question: 'What is included in a RoofVue Roof Condition Report?',
      answer:
        "Our Roof Condition Report includes a comprehensive written assessment of all roof components (tiles, flashings, gutters, chimneys, valleys), graded using a severity scale of 1–5, supported by annotated HD photographic evidence. It also includes recommended actions, indicative urgency ratings, and a summary suitable for insurance or conveyancing purposes.",
    },
    {
      question: 'Can I use a RoofVue report for a house purchase in Kent?',
      answer:
        "Yes — our Pre-Purchase Roof Survey is specifically designed for home buyers in Kent. The report is formatted to be useful for solicitors, mortgage lenders and surveyors, and is typically delivered within 48 hours of the survey — fast enough for even tight conveyancing timelines.",
    },
    {
      question: 'Do landlords have a legal obligation to inspect roofs in Kent?',
      answer:
        "Under the Landlord and Tenant Act 1985, landlords must keep the structure and exterior of rental properties in repair. While the law does not specify inspection frequency, documented evidence of regular roof inspection — such as a RoofVue Landlord Roof Inspection report — is important for demonstrating compliance.",
    },
    {
      question: 'Can you survey a property without the owner being present?',
      answer:
        "In most cases, yes — our drone surveys are conducted from outside the property boundary, so the owner or tenant does not need to be present. We do ask that someone is available at the start of the appointment to confirm access arrangements.",
    },
    {
      question: 'What weather conditions prevent a drone survey in Kent?',
      answer:
        "We cannot fly safely in winds above 20mph, heavy rain, snow or fog. Kent weather is generally suitable for drone operations year-round, but we always reschedule if conditions are unsafe. We will contact you promptly in the event of a weather cancellation.",
    },
    {
      question: 'How do I book a drone roof survey in Kent?',
      answer:
        "You can book by calling us, emailing info@roofvue.co.uk or completing the contact form on our website. We cover all of Kent from Maidstone and aim to schedule your survey within 3–5 working days of booking. Urgent pre-purchase bookings can often be accommodated sooner.",
    },
    {
      question: 'Do you survey commercial roofs as well as residential in Kent?',
      answer:
        "Yes — RoofVue surveys both residential and commercial properties across Kent. We inspect everything from residential lets and HMOs to retail units, industrial buildings and mixed-use properties. Commercial surveys are priced individually based on the size and complexity of the building.",
    },
    {
      question: 'What types of roofing materials can your drones inspect in Kent?',
      answer:
        "Our drones can inspect all roof materials found in Kent properties — concrete and clay roof tiles, natural slate, lead, zinc, felt flat roofs, GRP (fibreglass) flat roofs, EPDM rubber roofs, asphalt, and traditional materials found in period and heritage buildings.",
    },
    {
      question: "Is RoofVue insured to operate drones commercially in Kent?",
      answer:
        "Yes — RoofVue carries comprehensive commercial drone insurance as required for all commercial UAV operations in the UK. Our CAA-licensed pilots are fully insured while operating across Kent, giving you peace of mind throughout the survey process.",
    },
    {
      question: 'Can a drone survey detect hidden water ingress?',
      answer:
        "Drone surveys can identify the likely source of water ingress by detecting visible defects such as cracked tiles, failed flashings, gaps around chimney stacks and blocked gutters. For confirmed leak tracing inside the roof structure, a follow-up physical inspection may be recommended in addition to the drone survey.",
    },
    {
      question: 'How does a RoofVue survey compare to a RICS building survey in Kent?',
      answer:
        "A RICS Building Survey covers the whole property and typically includes a visual inspection of the roof from ground level or loft hatch. RoofVue's drone survey provides a far more detailed and specific assessment of the roof itself, using close-up HD aerial imagery. Many Kent homeowners use both services together for comprehensive peace of mind.",
    },
  ]
}
