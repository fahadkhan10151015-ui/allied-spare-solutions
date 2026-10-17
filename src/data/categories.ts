/**
 * Product categories, taken from the "Our Product Range" and
 * "Spare Parts for Heavy Industry" pages of the company catalogue.
 *
 * To add a category: copy one block, give it a unique `slug`,
 * then add products for it in src/data/products.ts.
 */
import type { LucideIcon } from 'lucide-react'
import {
  Cog,
  Droplets,
  Gauge,
  Wind,
  Zap,
  Cpu,
  Tractor,
  Weight,
  HardHat,
  Factory,
  Pickaxe,
  Flame,
} from 'lucide-react'
import { images } from './images'

export type CategoryGroup = 'heavy-industry' | 'product-range'

export interface Category {
  slug: string
  name: string
  group: CategoryGroup
  /** One-line summary used on cards */
  summary: string
  /** Longer description used on the products page */
  description: string
  image: string
  imageAlt: string
  icon: LucideIcon
  /**
   * Equipment manufacturers whose machines these parts are for
   * (listed in the catalogue as "Parts for equipment by").
   */
  equipmentBy?: string[]
}

export const categories: Category[] = [
  // ── Spare parts for heavy industry ─────────────────────────
  {
    slug: 'cement-plant',
    name: 'Cement Plant Spare Parts',
    group: 'heavy-industry',
    summary: 'Kiln, mill, cooler, preheater and dedusting spares for cement production lines.',
    description:
      'Wear and critical spares across the cement process — from crusher hammers and mill liners to kiln tyres, girth gears, cooler grate plates and bag filter components. Supplied as original OEM or quality equivalent, matched to your equipment.',
    image: images.cementPlant,
    imageAlt: 'Cement plant with preheater tower, silos and conveyors beside the water',
    icon: Factory,
    equipmentBy: [
      'FLSmidth',
      'thyssenkrupp Polysius',
      'KHD Humboldt Wedag',
      'Loesche',
      'Gebr. Pfeiffer',
      'Christian Pfeiffer',
      'Claudius Peters',
      'Sinoma / CBMI',
      'Haver & Boecker',
      'Beumer',
      'Aumund',
    ],
  },
  {
    slug: 'mining-quarrying',
    name: 'Mining & Quarrying Spare Parts',
    group: 'heavy-industry',
    summary: 'Crusher liners, mill liners, screening, slurry and mobile-equipment parts.',
    description:
      'Crushing, grinding, screening, conveying and mobile-fleet spares for mines and quarries — liners, mantles and concaves, screen panels, slurry pump wear parts, ground engaging tools and undercarriage components.',
    image: images.miningLoader,
    imageAlt: 'Excavator loading a haul truck in an open-pit quarry',
    icon: Pickaxe,
    equipmentBy: [
      'Metso',
      'Sandvik',
      'FLSmidth',
      'Weir / Warman',
      'Telsmith',
      'Terex',
      'Caterpillar',
      'Komatsu',
      'Epiroc',
      'Atlas Copco',
      'Liebherr',
    ],
  },
  {
    slug: 'steel-mill',
    name: 'Steel Mill Spare Parts',
    group: 'heavy-industry',
    summary: 'Rolling-mill, furnace, ladle, crane and cooling-system spares.',
    description:
      'Spares for rolling mills, melt shops and finishing lines — rolling-mill bearings and chocks, mill gearboxes, spindles and couplings, roll guides, descaling nozzles, ladle slide-gate parts and hydraulic components.',
    image: images.steelGrinding,
    imageAlt: 'Interior of a steel mill with overhead cranes',
    icon: Flame,
    equipmentBy: [
      'SMS group',
      'Danieli',
      'Primetals',
      'Siemens',
      'ABB',
      'SKF',
      'Timken',
      'Flender',
      'Rexroth',
      'Demag',
      'Konecranes',
    ],
  },

  // ── General product range ─────────────────────────────────
  {
    slug: 'mechanical',
    name: 'Mechanical',
    group: 'product-range',
    summary: 'Bearings, gearboxes, couplings, brakes, chains, belts and power transmission.',
    description:
      'Mechanical power transmission and wear components — bearings, speed reducers and gearboxes, couplings, clutches and brakes, sprockets, chains, pulleys, conveyor belts and sealing products.',
    image: images.mechanicalGears,
    imageAlt: 'Large industrial gear wheel',
    icon: Cog,
  },
  {
    slug: 'hydraulic',
    name: 'Hydraulic',
    group: 'product-range',
    summary: 'Pumps, valves, cylinders, hoses, filters, accumulators and lubrication.',
    description:
      'Hydraulic power and fluid-handling components — pumps and valves, cylinders, hoses and fittings, filters, accumulators, power units and centralised lubrication systems.',
    image: images.hydraulicComponents,
    imageAlt: 'Close-up of a hydraulic cylinder with bolted fittings',
    icon: Droplets,
  },
  {
    slug: 'instrumentation-control',
    name: 'Instrumentation & Control',
    group: 'product-range',
    summary: 'VFDs, PLCs, HMIs, sensors, relays, analysers and safety systems.',
    description:
      'Automation and process-control equipment — variable frequency drives, PLCs and HMIs, I/O modules, level and process sensors, motor control centres, relays and process analysers.',
    image: images.instrumentationAutomation,
    imageAlt: 'Industrial robot arm on an automated production line',
    icon: Gauge,
  },
  {
    slug: 'pneumatic',
    name: 'Pneumatic',
    group: 'product-range',
    summary: 'Valves, air cylinders, actuators, FRL units and compressor spares.',
    description:
      'Compressed-air components — directional and process valves, air cylinders and actuators, FRL units, vacuum pumps, compressor spares, connectors and tubing.',
    image: images.pneumaticLines,
    imageAlt: 'Pneumatic valve manifold with air tubing',
    icon: Wind,
  },
  {
    slug: 'electrical',
    name: 'Electrical',
    group: 'product-range',
    summary: 'Motors, generators, transformers, switchgear, cables and fuses.',
    description:
      'Power and distribution equipment — AC and DC motors, generators, transformers and starters, switchgear parts, industrial fuses, surge protection, cables and accessories.',
    image: images.electricalTerminals,
    imageAlt: 'Circuit breakers and wiring in an electrical panel',
    icon: Zap,
  },
  {
    slug: 'electronic',
    name: 'Electronic',
    group: 'product-range',
    summary: 'Sensors, encoders, transducers, thyristors and test equipment.',
    description:
      'Electronic components and measurement equipment — sensors, encoders, transducers, thyristors (SCR), diodes, capacitors, vibration monitoring and test and measurement instruments.',
    image: images.electronicControlPanel,
    imageAlt: 'Industrial control cabinet with PLC modules and wiring',
    icon: Cpu,
  },
  {
    slug: 'heavy-light-machinery',
    name: 'Heavy & Light Machinery',
    group: 'product-range',
    summary: 'Engine, undercarriage, hydraulic and wear parts for mobile equipment.',
    description:
      'Spare parts for construction, mining and material-handling fleets — filters, engine components, undercarriage, cutting edges and teeth, and parts for loaders, excavators and forklifts.',
    image: images.heavyMachinery,
    imageAlt: 'Mining excavator loading a dump truck',
    icon: Tractor,
  },
  {
    slug: 'cranes-lifting',
    name: 'Cranes & Lifting',
    group: 'product-range',
    summary: 'Hoists, hooks, wire ropes, wheels, brakes and radio remote controls.',
    description:
      'Lifting equipment and crane spares — hoists and winches, hooks, wire ropes, pulleys and sheaves, crane wheels and brakes, pendant stations, joysticks, radio remote controls and lifting magnets.',
    image: images.cranesLifting,
    imageAlt: 'Tower crane seen from below against the sky',
    icon: Weight,
  },
  {
    slug: 'industrial-safety',
    name: 'Industrial Safety',
    group: 'product-range',
    summary: 'PPE, respirators, fall protection, gas detection and fire-fighting.',
    description:
      'Personal protective and site-safety equipment — gloves, head and face protection, safety glasses, hearing protection, respirators, protective clothing, fall protection, gas detectors and fire-fighting equipment.',
    image: images.industrialSafety,
    imageAlt: 'Hard hats and high-visibility safety vests',
    icon: HardHat,
  },
]

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug)
