export interface KentLocation {
  name: string
  slug: string
  postcodePrefix: string
  lat: number
  lng: number
  population: number
  region: 'West Kent' | 'East Kent' | 'North Kent' | 'South Kent' | 'Medway'
  nearbyTowns: string[]
  landmarks: string[]
  propertyTypes: string[]
  description: string
}

type BaseLocation = Omit<KentLocation, 'nearbyTowns'>

// SEO: Haversine formula — used at build time to compute geographically accurate
// nearby-town lists, which power internal linking for PageRank distribution
function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLng = ((lng2 - lng1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

const baseLocations: BaseLocation[] = [
  {
    name: 'Maidstone',
    slug: 'maidstone',
    postcodePrefix: 'ME14',
    lat: 51.272,
    lng: 0.529,
    population: 174900,
    region: 'West Kent',
    landmarks: ['Maidstone Museum', 'Leeds Castle', 'River Medway Towpath'],
    propertyTypes: ['Victorian terraces', 'modern new builds', 'semi-detached family homes'],
    description:
      "As Kent's county town on the River Medway, Maidstone has a diverse mix of Victorian terraces, modern new-build estates and period properties across its urban centre and surrounding villages.",
  },
  {
    name: 'Canterbury',
    slug: 'canterbury',
    postcodePrefix: 'CT1',
    lat: 51.279,
    lng: 1.076,
    population: 162600,
    region: 'East Kent',
    landmarks: ['Canterbury Cathedral', 'Westgate Towers', "St Augustine's Abbey"],
    propertyTypes: ['period Victorian terraces', 'student accommodation conversions', 'detached family homes'],
    description:
      "Canterbury's rich heritage and university population create a varied housing stock ranging from medieval city-centre properties to modern suburban developments on the city's outskirts.",
  },
  {
    name: 'Folkestone',
    slug: 'folkestone',
    postcodePrefix: 'CT19',
    lat: 51.081,
    lng: 1.166,
    population: 57900,
    region: 'East Kent',
    landmarks: ['The Leas Promenade', 'Folkestone Harbour Arm', 'Folkestone Warren'],
    propertyTypes: ['Victorian seafront properties', 'terraced hillside houses', 'modern harbour apartments'],
    description:
      "Folkestone's clifftop position and regenerating harbour area feature a mix of grand Victorian seafront villas, traditional terraced streets and newly developed coastal apartments.",
  },
  {
    name: 'Dover',
    slug: 'dover',
    postcodePrefix: 'CT16',
    lat: 51.127,
    lng: 1.313,
    population: 44200,
    region: 'East Kent',
    landmarks: ['Dover Castle', 'White Cliffs of Dover', 'Dover Harbour'],
    propertyTypes: ['Victorian terraces', 'semi-detached homes', 'period town houses'],
    description:
      "As England's busiest port town, Dover has a mix of Victorian terraced housing across its hillside streets and a growing number of renovated period properties near the famous White Cliffs.",
  },
  {
    name: 'Margate',
    slug: 'margate',
    postcodePrefix: 'CT9',
    lat: 51.386,
    lng: 1.387,
    population: 61800,
    region: 'East Kent',
    landmarks: ['Turner Contemporary Gallery', 'Dreamland Margate', 'Margate Old Town'],
    propertyTypes: ['Regency seafront properties', 'Victorian terraces', 'converted period apartments'],
    description:
      "Margate's Regency and Victorian seafront properties have seen significant regeneration interest, with a mix of grand coastal villas, traditional terraces and converted period apartments throughout the town.",
  },
  {
    name: 'Ramsgate',
    slug: 'ramsgate',
    postcodePrefix: 'CT11',
    lat: 51.336,
    lng: 1.416,
    population: 42600,
    region: 'East Kent',
    landmarks: ['Ramsgate Royal Harbour', 'Ramsgate Tunnels', 'West Cliff Promenade'],
    propertyTypes: ['Georgian harbour-front properties', 'Victorian terraces', 'clifftop detached homes'],
    description:
      "Ramsgate's striking Georgian Royal Harbour is surrounded by grand period townhouses, Victorian terraced streets and exposed clifftop properties that require regular roof maintenance due to coastal exposure.",
  },
  {
    name: 'Broadstairs',
    slug: 'broadstairs',
    postcodePrefix: 'CT10',
    lat: 51.359,
    lng: 1.438,
    population: 25400,
    region: 'East Kent',
    landmarks: ['Viking Bay Beach', 'Bleak House (Dickens connection)', 'North Foreland Lighthouse'],
    propertyTypes: ['Victorian villas', 'Edwardian terraces', 'modern seaside bungalows'],
    description:
      'Broadstairs is a charming seaside town where Victorian villas and Edwardian terraces sit alongside modern seaside bungalows, all exposed to coastal weather that demands regular roof inspection.',
  },
  {
    name: 'Tunbridge Wells',
    slug: 'tunbridge-wells',
    postcodePrefix: 'TN1',
    lat: 51.132,
    lng: 0.263,
    population: 117700,
    region: 'West Kent',
    landmarks: ['The Pantiles', 'Calverley Grounds', 'Chalybeate Spring'],
    propertyTypes: ['Victorian villas', 'Georgian townhouses', 'large detached family homes'],
    description:
      'Royal Tunbridge Wells is known for its elegant Regency and Victorian architecture, with large detached homes, Victorian villas and period townhouses lining its leafy residential streets.',
  },
  {
    name: 'Tonbridge',
    slug: 'tonbridge',
    postcodePrefix: 'TN9',
    lat: 51.197,
    lng: 0.274,
    population: 43600,
    region: 'West Kent',
    landmarks: ['Tonbridge Castle', 'River Medway', 'Tonbridge School grounds'],
    propertyTypes: ['Victorian semi-detached homes', 'Edwardian terraces', 'modern new-build estates'],
    description:
      'Tonbridge sits on the River Medway with a mix of Victorian semi-detached homes around the historic castle, Edwardian terraces and modern new-build estates on its outskirts.',
  },
  {
    name: 'Sevenoaks',
    slug: 'sevenoaks',
    postcodePrefix: 'TN13',
    lat: 51.272,
    lng: 0.188,
    population: 32000,
    region: 'West Kent',
    landmarks: ['Knole House and Park', 'Sevenoaks Wildlife Reserve', 'The Vine cricket ground'],
    propertyTypes: ['large detached homes', 'period cottages', 'executive new builds'],
    description:
      'Sevenoaks is an affluent commuter town on the North Downs where large detached homes, period cottages and executive new builds command premium property prices and require careful roof maintenance.',
  },
  {
    name: 'Ashford',
    slug: 'ashford',
    postcodePrefix: 'TN23',
    lat: 51.146,
    lng: 0.874,
    population: 80200,
    region: 'South Kent',
    landmarks: ['Ashford Designer Outlet', 'Victoria Park', 'Godinton House nearby'],
    propertyTypes: ['modern new builds', 'semi-detached family homes', 'period town centre properties'],
    description:
      'Ashford has undergone significant regeneration as a Eurostar hub town, with substantial new-build housing developments alongside older period properties in the town centre and surrounding villages.',
  },
  {
    name: 'Faversham',
    slug: 'faversham',
    postcodePrefix: 'ME13',
    lat: 51.314,
    lng: 0.889,
    population: 19800,
    region: 'North Kent',
    landmarks: ['Faversham Market Place', 'Shepherd Neame Brewery', 'Oare Gunpowder Works'],
    propertyTypes: ['medieval timber-framed buildings', 'Georgian townhouses', 'Victorian cottages'],
    description:
      'Faversham is a beautifully preserved medieval market town where timber-framed properties, Georgian townhouses and Victorian cottages require specialist care and regular roof inspection due to their historic age.',
  },
  {
    name: 'Sittingbourne',
    slug: 'sittingbourne',
    postcodePrefix: 'ME10',
    lat: 51.34,
    lng: 0.736,
    population: 55500,
    region: 'North Kent',
    landmarks: ['Milton Regis Court Hall', 'Dolphin Sailing Barge Museum', 'Kemsley village'],
    propertyTypes: ['Victorian terraces', 'inter-war semi-detached homes', 'modern estates'],
    description:
      'Sittingbourne is a growing North Kent town with a mix of Victorian terraced housing, inter-war semi-detached properties and modern residential estates across the town and surrounding villages.',
  },
  {
    name: 'Gillingham',
    slug: 'gillingham',
    postcodePrefix: 'ME7',
    lat: 51.389,
    lng: 0.549,
    population: 103700,
    region: 'Medway',
    landmarks: ['Gillingham Football Club', 'Great Lines Heritage Park', 'Chatham Dockyard nearby'],
    propertyTypes: ['Victorian terraces', 'Edwardian semi-detached homes', 'ex-local-authority properties'],
    description:
      "Gillingham in the Medway towns has a high density of Victorian terraces and Edwardian semi-detached properties, many of which were built to house dockyard workers and now require ongoing roof maintenance.",
  },
  {
    name: 'Rochester',
    slug: 'rochester',
    postcodePrefix: 'ME1',
    lat: 51.375,
    lng: 0.5,
    population: 77000,
    region: 'Medway',
    landmarks: ['Rochester Castle', 'Rochester Cathedral', 'Charles Dickens Centre'],
    propertyTypes: ['Georgian and Victorian town houses', 'period riverside properties', 'modern apartments'],
    description:
      "Rochester's historic city centre is defined by Georgian and Victorian townhouses, with period riverside properties sitting in the shadow of the Norman castle and medieval cathedral.",
  },
  {
    name: 'Chatham',
    slug: 'chatham',
    postcodePrefix: 'ME4',
    lat: 51.38,
    lng: 0.527,
    population: 88000,
    region: 'Medway',
    landmarks: ['Chatham Historic Dockyard', 'Fort Amherst', 'Chatham Waterfront'],
    propertyTypes: ['Victorian terraces', 'Edwardian semis', 'waterfront new-build apartments'],
    description:
      "Chatham's heritage as the home of the Royal Navy's historic dockyard is reflected in its Victorian and Edwardian housing stock, now joined by modern waterfront apartment developments along the Medway.",
  },
  {
    name: 'Gravesend',
    slug: 'gravesend',
    postcodePrefix: 'DA11',
    lat: 51.441,
    lng: 0.369,
    population: 55200,
    region: 'North Kent',
    landmarks: ['Pocahontas statue', 'Tilbury Ferry crossing', 'Gravesend Town Pier'],
    propertyTypes: ['Victorian terraces', 'Edwardian semi-detached homes', 'riverside development properties'],
    description:
      'Gravesend is a North Kent riverside town with close Thames crossing links to Essex, featuring a mix of Victorian terraces, Edwardian semis and newer riverside development properties.',
  },
  {
    name: 'Dartford',
    slug: 'dartford',
    postcodePrefix: 'DA1',
    lat: 51.446,
    lng: 0.217,
    population: 110000,
    region: 'North Kent',
    landmarks: ['Dartford Crossing (QE2 Bridge)', 'Central Park', 'Mick Jagger birthplace'],
    propertyTypes: ['Victorian terraces', 'modern new builds', 'semi-detached homes'],
    description:
      "Dartford sits at the gateway to Kent with the famous QE2 Bridge crossing the Thames, and its residential areas include Victorian terraces close to the town centre and extensive modern housing estates.",
  },
  {
    name: 'Swanley',
    slug: 'swanley',
    postcodePrefix: 'BR8',
    lat: 51.398,
    lng: 0.171,
    population: 21000,
    region: 'North Kent',
    landmarks: ['Swanley Park', 'White Oak Leisure Centre', 'Swanley Village'],
    propertyTypes: ['post-war semi-detached homes', 'modern estates', 'bungalows'],
    description:
      'Swanley is a North Kent town near the M25 with a predominantly post-war housing stock of semi-detached homes, modern estates and bungalows built during the town\'s suburban expansion.',
  },
  {
    name: 'Westerham',
    slug: 'westerham',
    postcodePrefix: 'TN16',
    lat: 51.266,
    lng: 0.069,
    population: 5400,
    region: 'West Kent',
    landmarks: ["Chartwell (Churchill's home)", 'General Wolfe statue', 'Quebec House'],
    propertyTypes: ['period cottages', 'detached family homes', 'converted farmhouses'],
    description:
      "Westerham is a picturesque market town close to Churchill's Chartwell home, where period stone cottages, detached family homes and converted farmhouses sit amid the rolling North Downs landscape.",
  },
  {
    name: 'Edenbridge',
    slug: 'edenbridge',
    postcodePrefix: 'TN8',
    lat: 51.196,
    lng: 0.065,
    population: 8200,
    region: 'West Kent',
    landmarks: ['Hever Castle', 'Eden Valley Walk', 'Edenbridge High Street'],
    propertyTypes: ['period cottages', 'semi-detached homes', 'rural farmhouse conversions'],
    description:
      'Edenbridge sits close to the spectacular Hever Castle in the Eden Valley, with a mix of traditional Kent cottages, semi-detached homes and converted rural properties across the town and surrounding countryside.',
  },
  {
    name: 'Cranbrook',
    slug: 'cranbrook',
    postcodePrefix: 'TN17',
    lat: 51.097,
    lng: 0.534,
    population: 6800,
    region: 'South Kent',
    landmarks: ['Cranbrook Union Windmill', 'Cranbrook School', 'The Weald countryside'],
    propertyTypes: ['Wealden tile-hung houses', 'period cottages', 'large detached country homes'],
    description:
      "Cranbrook is the unofficial capital of the Kentish Weald, characterised by distinctive tile-hung Wealden houses, period thatched and oast cottages, and large detached country homes requiring specialist roof care.",
  },
  {
    name: 'Tenterden',
    slug: 'tenterden',
    postcodePrefix: 'TN30',
    lat: 51.066,
    lng: 0.688,
    population: 8100,
    region: 'South Kent',
    landmarks: ['Tenterden High Street', 'Kent and East Sussex Railway', "St Mildred's Church"],
    propertyTypes: ['Georgian townhouses', 'tile-hung Wealden cottages', 'Victorian villas'],
    description:
      "Tenterden, known as the Jewel of the Weald, has one of the finest High Streets in Kent lined with Georgian townhouses, tile-hung Wealden cottages and Victorian villas that demand expert roof maintenance.",
  },
  {
    name: 'Hythe',
    slug: 'hythe',
    postcodePrefix: 'CT21',
    lat: 51.072,
    lng: 1.083,
    population: 20500,
    region: 'South Kent',
    landmarks: ['Royal Military Canal', 'Hythe Town Hall', 'Romney Hythe and Dymchurch Railway'],
    propertyTypes: ['Victorian seafront villas', 'Edwardian terraces', 'period town houses'],
    description:
      'Hythe is a historic Cinque Port on the edge of the Romney Marsh, where Victorian seafront villas, Edwardian terraces and period town houses line the seafront and historic Royal Military Canal route.',
  },
  {
    name: 'Deal',
    slug: 'deal',
    postcodePrefix: 'CT14',
    lat: 51.224,
    lng: 1.402,
    population: 30400,
    region: 'East Kent',
    landmarks: ['Deal Castle', 'Deal Pier', 'Walmer Castle nearby'],
    propertyTypes: ['Georgian townhouses', 'Victorian terraces', "fisherman's cottages"],
    description:
      "Deal is a charming former Cinque Port town where compact Georgian townhouses, Victorian terraces and historic fisherman's cottages sit close to the English Channel and require regular weather protection.",
  },
  {
    name: 'Sandwich',
    slug: 'sandwich',
    postcodePrefix: 'CT13',
    lat: 51.273,
    lng: 1.34,
    population: 7200,
    region: 'East Kent',
    landmarks: ['Sandwich Town Walls', 'Richborough Roman Fort', "Royal St George's Golf Club"],
    propertyTypes: ['medieval timber-framed buildings', 'Georgian townhouses', 'period flint cottages'],
    description:
      "Sandwich is one of England's best-preserved medieval towns, with a remarkable collection of timber-framed buildings, Georgian townhouses and flint cottages that require specialist roof care due to their historic fabric.",
  },
  {
    name: 'Whitstable',
    slug: 'whitstable',
    postcodePrefix: 'CT5',
    lat: 51.36,
    lng: 1.026,
    population: 32700,
    region: 'North Kent',
    landmarks: ['Whitstable Harbour', 'Whitstable Castle', 'Tankerton Slopes'],
    propertyTypes: ["Victorian fishermen's cottages", 'weatherboarded houses', 'modern coastal homes'],
    description:
      "Whitstable is famous for its oysters and characterful harbour, where weatherboarded fishermen's cottages, Victorian terraces and modern coastal homes all need regular inspection for weather-related wear.",
  },
  {
    name: 'Herne Bay',
    slug: 'herne-bay',
    postcodePrefix: 'CT6',
    lat: 51.372,
    lng: 1.127,
    population: 39600,
    region: 'North Kent',
    landmarks: ['Herne Bay Clock Tower', 'Herne Bay Pier ruins', 'Hampton Pier area'],
    propertyTypes: ['Victorian seafront properties', 'Edwardian villas', 'bungalows'],
    description:
      'Herne Bay is a traditional seaside town with a distinctive Victorian clock tower, where Victorian seafront properties, Edwardian villas and bungalows line the coastal strip and require regular roof maintenance.',
  },
  {
    name: 'Birchington',
    slug: 'birchington',
    postcodePrefix: 'CT7',
    lat: 51.376,
    lng: 1.306,
    population: 12200,
    region: 'East Kent',
    landmarks: ['Minnis Bay Beach', 'Powell-Cotton Museum (Quex House)', "St Mildred's Church"],
    propertyTypes: ['inter-war bungalows', 'Victorian villas', 'modern seaside houses'],
    description:
      "Birchington-on-Sea is known for its popular Minnis Bay beach and inter-war bungalow estates, with Victorian villas and modern seaside homes completing a varied housing stock exposed to coastal weather.",
  },
  {
    name: 'Westgate-on-Sea',
    slug: 'westgate-on-sea',
    postcodePrefix: 'CT8',
    lat: 51.38,
    lng: 1.336,
    population: 8100,
    region: 'East Kent',
    landmarks: ["St Mildred's Bay", 'Westgate Bay Beach', 'Epple Bay cliffs'],
    propertyTypes: ['Victorian villas', 'Edwardian semis', 'inter-war bungalows'],
    description:
      'Westgate-on-Sea is a quiet seaside town between Margate and Birchington, where Victorian villas, Edwardian semis and inter-war bungalows face the North Sea and benefit from regular drone roof inspections.',
  },
  {
    name: 'New Romney',
    slug: 'new-romney',
    postcodePrefix: 'TN28',
    lat: 50.987,
    lng: 0.944,
    population: 7200,
    region: 'South Kent',
    landmarks: [
      'Romney Hythe and Dymchurch Railway terminus',
      'New Romney Church',
      'Dungeness headland nearby',
    ],
    propertyTypes: ['period cottages', 'bungalows', 'rural farmhouses'],
    description:
      "New Romney sits on the edge of the flat Romney Marsh, where a mix of period cottages, rural bungalows and historic farmhouses face the challenging coastal weather conditions of the Marsh.",
  },
  {
    name: 'Lydd',
    slug: 'lydd',
    postcodePrefix: 'TN29',
    lat: 50.956,
    lng: 0.91,
    population: 4800,
    region: 'South Kent',
    landmarks: [
      "All Saints' Church Lydd (Cathedral of the Marsh)",
      'Lydd Airport',
      'Dungeness headland nearby',
    ],
    propertyTypes: ['period flint cottages', 'rural bungalows', 'traditional Marsh farmhouses'],
    description:
      "Lydd is a quiet town on the Romney Marsh known as the Cathedral of the Marsh, where traditional flint cottages, rural bungalows and historic Marsh farmhouses all benefit from expert drone roof surveys.",
  },
  {
    name: 'Headcorn',
    slug: 'headcorn',
    postcodePrefix: 'TN27',
    lat: 51.17,
    lng: 0.63,
    population: 4200,
    region: 'South Kent',
    landmarks: ['Headcorn Aerodrome', 'St Peter and St Paul Church', 'Headcorn Vineyard nearby'],
    propertyTypes: ['tile-hung Wealden cottages', 'Victorian terraces', 'oast house conversions'],
    description:
      "Headcorn is a charming Wealden village with a working aerodrome, where tile-hung cottages, Victorian terraces and converted oast houses create a varied housing stock requiring specialist roof knowledge.",
  },
  {
    name: 'Marden',
    slug: 'marden',
    postcodePrefix: 'TN12',
    lat: 51.166,
    lng: 0.492,
    population: 4100,
    region: 'West Kent',
    landmarks: ['Marden Parish Church', 'Marden Meadows nature reserve', 'Marden Fruit Show heritage'],
    propertyTypes: ['Victorian farmhouses', 'tile-hung cottages', 'semi-detached homes'],
    description:
      'Marden is an agricultural village in the Weald of Kent with a heritage of fruit growing, where Victorian farmhouses, tile-hung cottages and semi-detached homes form the local housing stock.',
  },
  {
    name: 'Staplehurst',
    slug: 'staplehurst',
    postcodePrefix: 'TN12',
    lat: 51.157,
    lng: 0.551,
    population: 5300,
    region: 'West Kent',
    landmarks: ["All Saints' Church Staplehurst", 'Iden Croft Herbs garden', 'Staplehurst Station'],
    propertyTypes: ['tile-hung Wealden cottages', 'Victorian semis', 'modern detached homes'],
    description:
      'Staplehurst is a pleasant Weald of Kent village with good rail links to London, where tile-hung Wealden cottages, Victorian semi-detached homes and modern detached properties make up the local housing mix.',
  },
  {
    name: 'Paddock Wood',
    slug: 'paddock-wood',
    postcodePrefix: 'TN12',
    lat: 51.181,
    lng: 0.387,
    population: 9400,
    region: 'West Kent',
    landmarks: ['Hop Farm Country Park nearby', 'Paddock Wood Station', 'Mereworth Castle area'],
    propertyTypes: ['Victorian cottages', 'modern new-build estates', 'semi-detached homes'],
    description:
      "Paddock Wood grew as a railway town in the heart of Kent's hop-growing country, with Victorian cottages, modern new-build estates and semi-detached homes forming a varied residential area.",
  },
  {
    name: 'Borough Green',
    slug: 'borough-green',
    postcodePrefix: 'TN15',
    lat: 51.28,
    lng: 0.302,
    population: 5600,
    region: 'West Kent',
    landmarks: ['Ightham Mote (National Trust nearby)', 'Borough Green Station', 'Oldbury Hill'],
    propertyTypes: ['Victorian cottages', 'Edwardian semis', 'modern detached homes'],
    description:
      'Borough Green is a West Kent village on the edge of the North Downs, where Victorian cottages, Edwardian semi-detached homes and modern detached properties benefit from expert drone roof survey coverage.',
  },
  {
    name: 'Snodland',
    slug: 'snodland',
    postcodePrefix: 'ME6',
    lat: 51.33,
    lng: 0.442,
    population: 14300,
    region: 'North Kent',
    landmarks: ['Snodland Church', 'River Medway', 'Holborough Lakes'],
    propertyTypes: ['Victorian terraces', 'post-war semis', 'modern housing estates'],
    description:
      'Snodland sits on the River Medway between Maidstone and Rochester, with Victorian terraces, post-war semi-detached homes and modern housing estates making up the majority of its residential property.',
  },
  {
    name: 'Larkfield',
    slug: 'larkfield',
    postcodePrefix: 'ME20',
    lat: 51.303,
    lng: 0.431,
    population: 10200,
    region: 'West Kent',
    landmarks: ['Larkfield Leisure Centre', 'Leybourne Lakes nearby', 'New Hythe Lane area'],
    propertyTypes: ['post-war semi-detached homes', 'modern estates', 'bungalows'],
    description:
      "Larkfield is a suburban village near Maidstone with predominantly post-war semi-detached homes, modern residential estates and bungalows that benefit from RoofVue's local Kent roof survey expertise.",
  },
  {
    name: 'East Malling',
    slug: 'east-malling',
    postcodePrefix: 'ME19',
    lat: 51.285,
    lng: 0.428,
    population: 4700,
    region: 'West Kent',
    landmarks: ['East Malling Research Station', "All Saints' Church East Malling", 'The Rocks climbing area'],
    propertyTypes: ['Victorian cottages', 'period farmhouses', 'modern detached homes'],
    description:
      'East Malling is a historic village famous for its internationally renowned horticultural research station, with Victorian cottages, period farmhouses and modern detached homes forming a mix of residential property types.',
  },
  {
    name: 'West Malling',
    slug: 'west-malling',
    postcodePrefix: 'ME19',
    lat: 51.294,
    lng: 0.408,
    population: 5900,
    region: 'West Kent',
    landmarks: ['West Malling Abbey', 'High Street conservation area', "St Mary's Abbey ruins"],
    propertyTypes: ['period townhouses', 'Georgian cottages', 'modern new builds'],
    description:
      'West Malling is a pretty market town with a well-preserved High Street conservation area, where period townhouses, Georgian cottages and modern new builds sit alongside the ancient West Malling Abbey.',
  },
  {
    name: 'Kings Hill',
    slug: 'kings-hill',
    postcodePrefix: 'ME19',
    lat: 51.276,
    lng: 0.413,
    population: 12000,
    region: 'West Kent',
    landmarks: ['Kings Hill Business Park', 'Kings Hill Avenue', 'West Malling Airfield heritage'],
    propertyTypes: ['modern new-build family homes', 'executive detached homes', 'semi-detached properties'],
    description:
      'Kings Hill is a planned modern community built on a former airfield, with exclusively modern new-build family homes, executive detached properties and high-spec semi-detached houses across its landscaped development.',
  },
  {
    name: 'Aylesford',
    slug: 'aylesford',
    postcodePrefix: 'ME20',
    lat: 51.302,
    lng: 0.475,
    population: 6700,
    region: 'West Kent',
    landmarks: ['Aylesford Priory (The Friars)', 'Medway Bridge', 'Aylesford village green'],
    propertyTypes: ['period cottages', 'Victorian semis', 'modern detached homes'],
    description:
      'Aylesford is a picturesque historic village on the River Medway, where period cottages, Victorian semis and modern detached homes line the riverside streets near the ancient Aylesford Priory.',
  },
  {
    name: 'Barming',
    slug: 'barming',
    postcodePrefix: 'ME16',
    lat: 51.267,
    lng: 0.487,
    population: 8400,
    region: 'West Kent',
    landmarks: ['Medway Valley Walk', 'Loose Valley nature reserve nearby', 'Barming Station'],
    propertyTypes: ['Edwardian semis', 'post-war bungalows', 'modern estates'],
    description:
      'Barming is a residential suburb on the western edge of Maidstone, with Edwardian semi-detached homes, post-war bungalows and modern estates forming a predominantly suburban residential character.',
  },
  {
    name: 'Bearsted',
    slug: 'bearsted',
    postcodePrefix: 'ME14',
    lat: 51.265,
    lng: 0.567,
    population: 6800,
    region: 'West Kent',
    landmarks: ['Bearsted Green', 'Bearsted Golf Club', 'Thurnham Castle ruins nearby'],
    propertyTypes: ['period village cottages', 'detached family homes', 'Victorian properties'],
    description:
      "Bearsted is a desirable village on the edge of Maidstone with a picturesque village green, where period cottages, detached family homes and Victorian properties benefit from RoofVue's Maidstone-based team.",
  },
  {
    name: 'Boughton Monchelsea',
    slug: 'boughton-monchelsea',
    postcodePrefix: 'ME17',
    lat: 51.232,
    lng: 0.543,
    population: 3200,
    region: 'West Kent',
    landmarks: ['Boughton Monchelsea Place', 'Boughton Park', "Church of St Peter's"],
    propertyTypes: ['period Kent farmhouses', 'ragstone cottages', 'detached rural homes'],
    description:
      'Boughton Monchelsea is a rural parish on the Greensand Ridge south of Maidstone, where period ragstone cottages, historic farmhouses and detached rural homes require specialist inspection of their traditional roof materials.',
  },
  {
    name: 'Loose',
    slug: 'loose',
    postcodePrefix: 'ME15',
    lat: 51.249,
    lng: 0.521,
    population: 5100,
    region: 'West Kent',
    landmarks: ['Loose Valley', 'Loose Stream', "All Saints' Church Loose"],
    propertyTypes: ['period cottages', 'Victorian semis', 'modern detached homes'],
    description:
      'Loose is a picturesque valley village on the southern edge of Maidstone, where period cottages along the Loose Stream, Victorian semi-detached homes and modern detached properties form a charming rural-suburban mix.',
  },
  {
    name: 'Otham',
    slug: 'otham',
    postcodePrefix: 'ME15',
    lat: 51.252,
    lng: 0.561,
    population: 1800,
    region: 'West Kent',
    landmarks: ['Stoneacre (National Trust)', 'Otham village pond', 'Otham Court area'],
    propertyTypes: ['period Kent cottages', 'farmhouse conversions', 'rural detached homes'],
    description:
      'Otham is a small rural village east of Maidstone with a National Trust property, where traditional Kent cottages, farmhouse conversions and rural detached homes represent some of the county\'s most characterful housing stock.',
  },
  {
    name: 'Minster-on-Sea',
    slug: 'minster-on-sea',
    postcodePrefix: 'ME12',
    lat: 51.421,
    lng: 0.809,
    population: 9600,
    region: 'North Kent',
    landmarks: ['Minster Abbey', 'Elmley Marshes nature reserve', 'Leysdown-on-Sea beach'],
    propertyTypes: ['inter-war bungalows', 'modern estates', 'period farmhouses'],
    description:
      'Minster-on-Sea sits on the Isle of Sheppey overlooking the Thames Estuary, where inter-war bungalows, modern residential estates and period farmhouses face the coastal exposure that makes roof maintenance essential.',
  },
  {
    name: 'Sheerness',
    slug: 'sheerness',
    postcodePrefix: 'ME12',
    lat: 51.441,
    lng: 0.76,
    population: 14400,
    region: 'North Kent',
    landmarks: ['Sheerness Docks', 'Beachfields Park', 'Blue Town Heritage Centre'],
    propertyTypes: ["Victorian dockyard workers' cottages", 'terraced homes', 'modern estates'],
    description:
      "Sheerness is the main town on the Isle of Sheppey, with Victorian dockyard workers' cottages, terraced homes and modern estates all exposed to the prevailing Thames Estuary winds and requiring regular roof care.",
  },
  {
    name: 'Queenborough',
    slug: 'queenborough',
    postcodePrefix: 'ME11',
    lat: 51.419,
    lng: 0.74,
    population: 3200,
    region: 'North Kent',
    landmarks: ['Queenborough Castle ruins', 'Queenborough Harbour', 'Swale Estuary'],
    propertyTypes: ['Victorian cottages', 'terraced homes', 'older bungalows'],
    description:
      'Queenborough is a small historic town on the Swale, the channel separating the Isle of Sheppey from the mainland, with Victorian cottages, terraced homes and older bungalows lining its harbour-side streets.',
  },
  {
    name: 'Rainham',
    slug: 'rainham',
    postcodePrefix: 'ME8',
    lat: 51.366,
    lng: 0.614,
    population: 24600,
    region: 'Medway',
    landmarks: ['Rainham Mark Grammar School', 'Rainham Leisure Centre', 'Lower Rainham Road area'],
    propertyTypes: ['post-war semi-detached homes', 'modern detached houses', 'bungalows'],
    description:
      'Rainham is a large suburban area in the Medway towns with predominantly post-war semi-detached homes, modern detached houses and bungalows spread across its extensive residential neighbourhoods.',
  },
  {
    name: 'Strood',
    slug: 'strood',
    postcodePrefix: 'ME2',
    lat: 51.391,
    lng: 0.479,
    population: 37500,
    region: 'Medway',
    landmarks: ['Temple Manor', 'Rochester Bridge', 'Medway Valley railway'],
    propertyTypes: ['Victorian terraces', 'Edwardian semis', 'modern new builds'],
    description:
      'Strood sits on the west bank of the Medway opposite Rochester, with Victorian terraces, Edwardian semi-detached homes and modern new builds making it one of the busiest residential areas in the Medway towns.',
  },
  {
    name: 'Northfleet',
    slug: 'northfleet',
    postcodePrefix: 'DA11',
    lat: 51.449,
    lng: 0.34,
    population: 26500,
    region: 'North Kent',
    landmarks: ['Northfleet Embankment', 'Ingress Park', 'Galley Hill nature reserve'],
    propertyTypes: ["Victorian workers' cottages", 'inter-war terraces', 'modern riverside apartments'],
    description:
      "Northfleet is a North Kent town on the Thames with a heritage of chalk quarrying and cement making, where Victorian workers' cottages, inter-war terraces and modern riverside apartments make up the diverse housing stock.",
  },
]

// SEO: Compute nearbyTowns at module init using haversine — powers internal linking
// between location pages which distributes PageRank across the site's 54 location hubs
export const kentLocations: KentLocation[] = baseLocations.map((loc) => ({
  ...loc,
  nearbyTowns: baseLocations
    .filter((l) => l.slug !== loc.slug)
    .sort(
      (a, b) =>
        haversineKm(loc.lat, loc.lng, a.lat, a.lng) -
        haversineKm(loc.lat, loc.lng, b.lat, b.lng)
    )
    .slice(0, 5)
    .map((l) => l.slug),
}))

export function getLocationBySlug(slug: string): KentLocation | undefined {
  return kentLocations.find((l) => l.slug === slug)
}

export function getLocationsByRegion(): Record<string, KentLocation[]> {
  return kentLocations.reduce<Record<string, KentLocation[]>>((acc, loc) => {
    if (!acc[loc.region]) acc[loc.region] = []
    acc[loc.region].push(loc)
    return acc
  }, {})
}

// SEO: haversine-sorted nearby towns for internal linking widgets on every location page
export function getNearbyLocations(slug: string, count = 5): KentLocation[] {
  const loc = getLocationBySlug(slug)
  if (!loc) return []
  return kentLocations
    .filter((l) => l.slug !== slug)
    .sort(
      (a, b) =>
        haversineKm(loc.lat, loc.lng, a.lat, a.lng) -
        haversineKm(loc.lat, loc.lng, b.lat, b.lng)
    )
    .slice(0, count)
}
