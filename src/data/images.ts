/**
 * Image library.
 * High-resolution photos (Unsplash Licence — free for commercial use, no attribution required),
 * pre-optimised to WebP for fast loading.
 * To replace a photo: drop a new file into src/assets/images/ and point the
 * matching import below at it (keep the same variable name).
 * Recommended: landscape WebP or JPG, at least 1200px wide, under 250 KB.
 */
import heroPlant from '../assets/images/hero-plant.webp'
import heroLogistics from '../assets/images/hero-logistics.webp'
import weldingWide from '../assets/images/welding-wide.webp'
import cementPlant from '../assets/images/cement-plant.webp'
import miningLoader from '../assets/images/mining-loader.webp'
import steelGrinding from '../assets/images/steel-grinding.webp'
import mechanicalGears from '../assets/images/mechanical-gears.webp'
import hydraulicComponents from '../assets/images/hydraulic-components.webp'
import instrumentationAutomation from '../assets/images/instrumentation-automation.webp'
import pneumaticLines from '../assets/images/pneumatic-lines.webp'
import electricalTerminals from '../assets/images/electrical-terminals.webp'
import electronicControlPanel from '../assets/images/electronic-control-panel.webp'
import heavyMachinery from '../assets/images/heavy-machinery.webp'
import cranesLifting from '../assets/images/cranes-lifting.webp'
import industrialSafety from '../assets/images/industrial-safety.webp'

export const images = {
  heroPlant,
  heroLogistics,
  weldingWide,
  cementPlant,
  miningLoader,
  steelGrinding,
  mechanicalGears,
  hydraulicComponents,
  instrumentationAutomation,
  pneumaticLines,
  electricalTerminals,
  electronicControlPanel,
  heavyMachinery,
  cranesLifting,
  industrialSafety,
} as const

export type ImageKey = keyof typeof images
