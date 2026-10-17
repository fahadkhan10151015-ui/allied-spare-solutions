/**
 * Brands listed under "Brands we source" in the company catalogue,
 * grouped by product range. Names are shown as plain text — no logos
 * are reproduced. Listing a brand means parts can be sourced for or
 * from that brand on request; it does NOT mean Allied Spare Solutions
 * is an authorised distributor or is endorsed by the manufacturer.
 *
 * To edit: add or remove names in the arrays below.
 */
export interface BrandGroup {
  category: string // category slug from categories.ts
  title: string
  brands: string[]
}

export const brandGroups: BrandGroup[] = [
  {
    category: 'mechanical',
    title: 'Mechanical',
    brands: [
      'SKF', 'Timken', 'INA', 'Tsubaki', 'SEW-Eurodrive', 'NORD Drivesystems', 'Flender', 'Sumitomo',
      'Rexnord', 'Baldor-Dodge', 'KTR', 'Hub City', 'Stearns', 'Stromag', 'Wichita Clutch',
      'Eaton Airflex', 'Twiflex', 'Dana', 'Magnetek', 'Transcon Conveyor', 'Phoenix Conveyor Belt Systems',
      'Eriez', 'Swagelok', 'Graco', 'Ingersoll Rand', 'Lincoln Electric', 'Belden', 'The Okonite Company',
      'Thermo Fisher Scientific',
    ],
  },
  {
    category: 'hydraulic',
    title: 'Hydraulic',
    brands: [
      'Bosch Rexroth', 'Parker', 'Eaton', 'Vickers', 'Char-Lynn', 'Sauer-Danfoss', 'HYDAC', 'HAWE Hydraulik',
      'Atos', 'Bucher Hydraulics', 'Sun Hydraulics', 'Oilgear', 'Hägglunds', 'Moog', 'Enerpac',
      'Power Team', 'Donaldson', 'Stauff', 'Lincoln Industrial', 'Bijur Delimon', 'Dropsa', 'Alemite',
      'Grundfos', 'Moyno', 'Spirax Sarco', 'Bürkert', 'Festo', 'Aventics', 'IMI Norgren', 'Bray', 'Greenlee',
    ],
  },
  {
    category: 'instrumentation-control',
    title: 'Instrumentation & Control',
    brands: [
      'Siemens', 'ABB', 'Schneider Electric', 'Square D', 'Allen-Bradley', 'Emerson', 'Rosemount', 'Foxboro',
      'Yokogawa', 'Honeywell', 'Endress+Hauser', 'VEGA', 'SICK', 'Pepperl+Fuchs', 'Turck', 'Omron',
      'Phoenix Contact', 'Yaskawa', 'Eaton', 'Ametek', 'Barksdale', 'Ashcroft', 'Hach', 'Elster', 'Testo',
      'Raytek', 'Fluke', 'Omega', 'Extech', 'Leine & Linde',
    ],
  },
  {
    category: 'pneumatic',
    title: 'Pneumatic',
    brands: [
      'SMC', 'Festo', 'Parker', 'Norgren', 'Camozzi', 'ASCO Numatics', 'Bürkert', 'MAC Valves', 'ROSS Controls',
      'Bimba', 'Wilkerson', 'ARO', 'Ingersoll Rand', 'Atlas Copco', 'Gardner Denver', 'Chicago Pneumatic',
      'AUMA', 'Rotork', 'Rotex', 'Bray', 'DeZURIK', 'Deublin', 'Rotoflux', 'Nordson', 'Aeroquip', 'Stauff',
      'Enerpac', 'SPX', 'Furukawa Rock Drill (FRD)', 'Bosch Rexroth',
    ],
  },
  {
    category: 'electrical',
    title: 'Electrical',
    brands: [
      'ABB', 'Siemens', 'Schneider Electric', 'Eaton', 'WEG', 'SEW-Eurodrive', 'Baldor', 'Leeson', 'Marathon',
      'Nidec', 'TECO-Westinghouse', 'Mitsubishi Electric', 'Fuji Electric', 'General Electric', 'Franklin Electric',
      'Cooper Bussmann', 'SIBA', 'Phoenix Contact', 'WAGO', 'Hubbell', 'Vishay', 'International Rectifier',
      'Omron', 'BEI Sensors', 'Philips', 'Federal Signal', 'Acme Electric', 'Kohler', 'Kidde', 'Murphy',
    ],
  },
  {
    category: 'electronic',
    title: 'Electronic',
    brands: [
      'Siemens', 'ABB', 'Omron', 'Yaskawa', 'Schneider Electric', 'Honeywell', 'Beckhoff', 'Lenze', 'Keyence',
      'SICK', 'Banner', 'Balluff', 'Pepperl+Fuchs', 'ifm electronic', 'Turck', 'Baumer', 'Kübler',
      'Leine & Linde', 'MTS Sensors', 'Endress+Hauser', 'VEGA', 'HYDAC', 'Phoenix Contact', 'WAGO',
      'Schmersal', 'Bender', 'Foxboro', 'Eaton (Cutler-Hammer)', 'Mitutoyo', 'Fluke',
    ],
  },
  {
    category: 'heavy-light-machinery',
    title: 'Heavy & Light Machinery',
    brands: [
      'Caterpillar', 'Komatsu', 'Volvo Construction Equipment', 'Hitachi', 'Liebherr', 'JCB', 'Doosan', 'Hyundai',
      'Kobelco', 'Sany', 'Case', 'John Deere', 'New Holland', 'Bobcat', 'Kubota', 'Terex', 'Sandvik',
      'Atlas Copco', 'Telsmith', 'Bomag', 'Manitou', 'JLG', 'Genie', 'Grove', 'Manitowoc', 'P&H',
      'Palfinger', 'Ingersoll Rand', 'Furukawa Rock Drill (FRD)', 'Hengst',
    ],
  },
  {
    category: 'cranes-lifting',
    title: 'Cranes & Lifting',
    brands: [
      'Konecranes', 'Demag', 'STAHL CraneSystems', 'ABUS', 'R&M Materials Handling', 'Columbus McKinnon',
      'Yale Hoists', 'Coffing Hoists', 'Budgit', 'Harrington', 'Shaw-Box', 'Duff-Norton',
      'Acco Material Handling', 'Liebherr', 'Manitowoc', 'Grove', 'Terex', 'Sennebogen', 'P&H', 'JLG',
      'Dynapac',
    ],
  },
  {
    category: 'industrial-safety',
    title: 'Industrial Safety',
    brands: [
      '3M', 'MSA', 'Ansell', 'DuPont', 'Honeywell North', 'Fibre-Metal', 'Salisbury', 'Jackson Safety',
      'Kimberly-Clark Professional', 'Ergodyne', 'Tillman', 'Shelby', 'Crews (MCR Safety)', 'Eagle',
      'Checkers', 'Allegro Industries',
    ],
  },
]

/** Unique, alphabetically sorted list of every brand above. */
export const allBrands = Array.from(new Set(brandGroups.flatMap((g) => g.brands))).sort((a, b) =>
  a.localeCompare(b),
)

/** A short selection for the home page. */
export const featuredBrands = [
  'SKF', 'Timken', 'Siemens', 'ABB', 'Schneider Electric', 'Bosch Rexroth', 'Parker', 'Festo', 'SMC',
  'Flender', 'SEW-Eurodrive', 'Endress+Hauser', 'Honeywell', 'Caterpillar', 'Komatsu', 'Konecranes',
  'Demag', 'HYDAC', 'Eaton', 'WEG', 'Omron', 'Yaskawa', 'Atlas Copco', '3M',
]

export const trademarkNotice =
  'Brand names are trademarks of their respective owners. They are listed to show which equipment our parts fit or which manufacturers’ products we can source on request. Allied Spare Solutions is an independent supplier and does not claim to be an authorised distributor of, or to be endorsed by, these manufacturers unless stated otherwise in writing.'
