/**
 * Industries served. The sector names come from the company catalogue
 * (Cement · Mining · Steel · Power · Oil & Gas · Food & Beverage · Paper ·
 * Recycling · Manufacturing). Edit text or images here.
 */
import type { LucideIcon } from 'lucide-react'
import { Factory, Pickaxe, Flame, Cog, Wrench, Layers } from 'lucide-react'
import { images } from './images'

export interface Industry {
  slug: string
  name: string
  summary: string
  description: string
  typicalParts: string[]
  image: string
  imageAlt: string
  icon: LucideIcon
  /** Product category to link to from the industry card */
  categoryLink?: string
}

export const industries: Industry[] = [
  {
    slug: 'cement',
    name: 'Cement Industry',
    summary: 'Kiln, mill, cooler and dedusting spares for clinker and cement production.',
    description:
      'Cement plants run continuous, high-wear processes where one failed component can stop a whole line. We source wear parts and critical spares for crushing, raw and cement grinding, pyroprocessing, conveying and packing — in OEM or quality equivalent form.',
    typicalParts: ['Kiln tyres & support rollers', 'Girth gears & pinions', 'Cooler grate plates', 'VRM rollers & table segments', 'Bag filter bags & cages', 'Bucket elevator chains'],
    image: images.cementPlant,
    imageAlt: 'Cement plant with preheater tower and silos',
    icon: Factory,
    categoryLink: 'cement-plant',
  },
  {
    slug: 'mining',
    name: 'Mining & Minerals',
    summary: 'Crushing, grinding, screening, slurry and mobile-fleet spare parts.',
    description:
      'From the pit to the processing plant, mines depend on wear parts that are replaced on a schedule and spares that are needed urgently. We help procurement teams source both — liners, screen media, slurry pump parts, GET and undercarriage.',
    typicalParts: ['Jaw & cone crusher liners', 'SAG / ball mill liners', 'Screen panels & springs', 'Slurry pump wear parts', 'Ground engaging tools', 'Drill bits & rods'],
    image: images.miningLoader,
    imageAlt: 'Excavator loading a haul truck at an open-pit mine',
    icon: Pickaxe,
    categoryLink: 'mining-quarrying',
  },
  {
    slug: 'steel-heavy-industry',
    name: 'Steel & Heavy Industry',
    summary: 'Rolling-mill, melt-shop, furnace and crane spares.',
    description:
      'Steel mills and heavy process plants operate large drives, hydraulics and cranes under demanding conditions. We source rolling-mill bearings, gearboxes, spindles, roll guides, descaling nozzles and hydraulic components.',
    typicalParts: ['Rolling-mill bearings & chocks', 'Mill gearboxes & pinion stands', 'Spindles & couplings', 'Roll guides', 'Ladle slide-gate parts', 'Crane wheels & brakes'],
    image: images.steelGrinding,
    imageAlt: 'Steel mill interior with overhead cranes',
    icon: Flame,
    categoryLink: 'steel-mill',
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    summary: 'Automation, motion, pneumatic and power transmission components.',
    description:
      'Production lines rely on a wide mix of automation and mechanical components. We supply drives, PLC modules, sensors, pneumatic valves and cylinders, bearings and gearboxes — consolidated across brands into one shipment where possible.',
    typicalParts: ['PLCs & HMIs', 'Variable frequency drives', 'Sensors & switches', 'Pneumatic valves', 'Bearings', 'Speed reducers & gearboxes'],
    image: images.instrumentationAutomation,
    imageAlt: 'Robotic arm in an automated manufacturing cell',
    icon: Cog,
    categoryLink: 'instrumentation-control',
  },
  {
    slug: 'engineering-maintenance',
    name: 'Engineering & Maintenance',
    summary: 'MRO supplies and hard-to-find parts for maintenance teams.',
    description:
      'Maintenance and engineering teams often need to replace an obsolete or unmarked part quickly. Send us the nameplate, an old part number, a photo or a drawing and we will work to identify it and offer OEM or equivalent options.',
    typicalParts: ['Seals & gaskets', 'Hydraulic hoses & fittings', 'Industrial fuses', 'Test & measurement', 'Safety equipment', 'Lubrication systems'],
    image: images.weldingWide,
    imageAlt: 'Maintenance technician welding in a workshop',
    icon: Wrench,
    categoryLink: 'mechanical',
  },
  {
    slug: 'allied-industries',
    name: 'Other Allied Industries',
    summary: 'Power, oil & gas, food & beverage, paper and recycling.',
    description:
      'Our catalogue also covers sectors including power generation, oil and gas, food and beverage, pulp and paper, and recycling. Electrical, instrumentation, hydraulic and safety requirements are common across them, and we handle each enquiry case by case.',
    typicalParts: ['AC & DC motors', 'Switchgear parts', 'Level sensors', 'Centrifugal pumps', 'Gas detectors', 'Conveyor belts'],
    image: images.electricalTerminals,
    imageAlt: 'Circuit breakers in a power distribution panel',
    icon: Layers,
    categoryLink: 'electrical',
  },
]

/** Full sector list from the catalogue, used in the hero strip and footer. */
export const sectorList = [
  'Cement', 'Mining', 'Steel', 'Power', 'Oil & Gas', 'Food & Beverage', 'Paper', 'Recycling', 'Manufacturing',
]
