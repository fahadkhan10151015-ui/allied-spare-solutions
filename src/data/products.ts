/**
 * ─────────────────────────────────────────────────────────────
 *  PRODUCT CATALOGUE
 *  Every part group below is listed in the Allied Spare Solutions
 *  catalogue PDF. They are sourcing capabilities (supplied on
 *  request against an RFQ), not a stock list — so no prices,
 *  stock levels or part numbers are shown.
 *
 *  HOW TO EDIT
 *  • Add a product:    add a line to the right category below:
 *                       ['Product name', 'One-sentence description'],
 *  • Remove a product: delete its line.
 *  • Custom photo:     use the object form instead of the array form:
 *                       { name: '...', description: '...', image: myImport, brand: 'SKF' }
 *                      (import the image at the top of this file).
 *  • `brand` is optional — only add it when you have confirmed the brand.
 * ─────────────────────────────────────────────────────────────
 */
import { categories } from './categories'

export interface Product {
  id: string
  name: string
  description: string
  category: string // category slug
  image?: string // optional custom photo; falls back to the category photo
  brand?: string // optional, only when verified
}

type Entry = [name: string, description: string] | Omit<Product, 'id' | 'category'>

const catalogue: Record<string, Entry[]> = {
  'cement-plant': [
    ['Kiln tyres & support rollers', 'Riding rings and support roller assemblies for rotary kilns, including shafts and bearing housings.'],
    ['Girth gears & pinions', 'Ring gears and drive pinions for kilns and ball mills, supplied to drawing or sample.'],
    ['Kiln inlet & outlet seals', 'Lamella, graphite and pneumatic seal components for kiln inlet and outlet ends.'],
    ['Burner parts', 'Burner tips, nozzles and wear components for kiln and calciner burners.'],
    ['Cooler grate plates', 'Heat-resistant grate plates, side plates and fasteners for clinker coolers.'],
    ['Preheater cyclone parts', 'Vortex finder segments, flap valves and cyclone wear components.'],
    ['Mill liners & diaphragms', 'Shell liners, classifying liners and diaphragm plates for cement ball mills.'],
    ['Grinding media', 'Forged and cast grinding balls and cylpebs for raw and finish grinding.'],
    ['VRM rollers & table segments', 'Hardfaced grinding roller tyres and table liner segments for vertical roller mills.'],
    ['Roller press studded rolls', 'Studded roll shells and wear protection for high-pressure roller presses.'],
    ['Separator rotor parts', 'Rotor blades, guide vanes and wear parts for high-efficiency separators.'],
    ['Mill gearboxes & couplings', 'Main drive gearboxes, gear sets and flexible couplings for mill drives.'],
    ['Crusher hammers & blow bars', 'Manganese and high-chrome hammers, blow bars and wear liners for limestone crushers.'],
    ['Bag filter bags & cages', 'Filter bags in a range of media, with matching cages and venturis.'],
    ['Pulse valves', 'Diaphragm pulse-jet valves and repair kits for bag filter cleaning systems.'],
    ['Bucket elevator chains', 'Chains, buckets, sprockets and links for bucket elevators.'],
    ['Air slide fabric', 'Aeration fabric and accessories for air slide conveyors.'],
    ['Packer spares', 'Wear and replacement parts for rotary and inline cement packing machines.'],
  ],
  'mining-quarrying': [
    ['Jaw & cone crusher liners', 'Jaw plates, cheek plates and cone crusher wear liners.'],
    ['Mantles & concaves', 'Replacement mantles and concave rings for cone and gyratory crushers.'],
    ['Gyratory crusher parts', 'Spider bushings, eccentrics, main shaft and wear parts for gyratory crushers.'],
    ['SAG / ball mill liners', 'Shell, head and grate liners and lifters for SAG and ball mills.'],
    ['Screen panels & springs', 'Polyurethane, rubber and wire screen media with vibrating screen springs.'],
    ['Slurry pump wear parts', 'Impellers, throatbushes, liners and frame plates for slurry pumps.'],
    ['Cyclones & spigots', 'Hydrocyclone liners, spigots, vortex finders and complete cyclones.'],
    ['Conveyor belts & idlers', 'Conveyor belting, carrying and return idlers, and impact beds.'],
    ['Pulley lagging', 'Rubber and ceramic lagging for drive and non-drive conveyor pulleys.'],
    ['Ground engaging tools', 'Bucket teeth, adapters, cutting edges and wear protection for loaders and excavators.'],
    ['Undercarriage parts', 'Track chains, rollers, idlers, sprockets and shoes for tracked equipment.'],
    ['Hydraulic hoses & cylinders', 'Hoses, fittings and hydraulic cylinders for mobile and fixed mining equipment.'],
    ['Engine & filter parts', 'Engine service parts and air, oil, fuel and hydraulic filters for mining fleets.'],
    ['Drill bits & rods', 'Button bits, drill rods, shanks and couplings for surface and underground drilling.'],
    ['Heavy-equipment electrics', 'Alternators, starters, sensors and wiring components for heavy equipment.'],
  ],
  'steel-mill': [
    ['Rolling-mill bearings & chocks', 'Multi-row roll-neck bearings and chock assemblies for rolling stands.'],
    ['Roll guides', 'Roller and slide guides, with spare rollers and wear parts.'],
    ['Mill gearboxes & pinion stands', 'Main drive gearboxes, pinion stands and gear sets for rolling mills.'],
    ['Spindles & couplings', 'Universal joint spindles, gear spindles and drive couplings.'],
    ['Hydraulic cylinders & valves', 'Cylinders, servo and proportional valves for mill and furnace hydraulics.'],
    ['Cooling-water pumps', 'Process and cooling-water pumps with spare impellers and seals.'],
    ['Furnace fans & motors', 'Combustion and cooling fans, impellers and drive motors.'],
    ['Ladle slide-gate parts', 'Slide-gate mechanisms, plates and nozzles for ladles and tundishes.'],
    ['Crane wheels & brakes', 'Wheels, brakes and drive components for overhead and ladle cranes.'],
    ['Electrode-arm hydraulics', 'Hydraulic components for electric arc furnace electrode regulation.'],
    ['Descaling nozzles', 'High-pressure descaling nozzles and headers for hot strip and plate mills.'],
    ['Cooling-bed parts', 'Rakes, rollers, drives and wear parts for cooling beds.'],
  ],
  mechanical: [
    ['Bearings', 'Ball, roller, spherical, tapered and plain bearings with housings and accessories.'],
    ['Speed reducers & gearboxes', 'Helical, bevel, worm and planetary gear units and replacement gear sets.'],
    ['Couplings', 'Flexible, gear, grid, jaw and fluid couplings for power transmission.'],
    ['Industrial brakes', 'Drum, disc and electromagnetic brakes with pads, linings and thrusters.'],
    ['Seals & gaskets', 'Oil seals, mechanical seals, O-rings and gaskets for rotating and static equipment.'],
    ['Pulleys & rollers', 'Conveyor pulleys, rollers and belt drive pulleys.'],
    ['Sprockets & gears', 'Sprockets, spur and helical gears supplied to standard or drawing.'],
    ['Power transmission chains', 'Roller, conveyor and engineering class chains with attachments.'],
    ['Conveyor belts', 'Fabric, steel cord and specialty conveyor belting with splice materials.'],
    ['Crushing components', 'Wear and mechanical parts for primary and secondary crushers.'],
    ['Cable reels', 'Motorised and spring-driven cable reels for mobile machinery and cranes.'],
    ['Clutches', 'Mechanical, pneumatic and electromagnetic clutches and clutch-brakes.'],
  ],
  hydraulic: [
    ['Hoses & fittings', 'Hydraulic hose assemblies, adaptors, couplings and fittings.'],
    ['Cylinders', 'Hydraulic cylinders and seal kits, new or built to drawing.'],
    ['Pumps & valves', 'Gear, vane and piston pumps with directional, pressure and flow-control valves.'],
    ['Seals & gaskets', 'Hydraulic rod, piston and wiper seals with gasket sets.'],
    ['Lubrication systems', 'Centralised grease and oil lubrication systems, pumps and distributors.'],
    ['Extractors & presses', 'Hydraulic pullers, extractors and workshop presses for maintenance teams.'],
    ['Filters', 'Pressure, return and suction filters and replacement elements.'],
    ['Accumulators', 'Bladder and piston accumulators with bladders and repair kits.'],
    ['Pressure gauges', 'Pressure gauges, test points and gauge isolators for hydraulic systems.'],
    ['Centrifugal pumps', 'Process and water centrifugal pumps with impellers and mechanical seals.'],
    ['Dispersion nozzles', 'Spray and dispersion nozzles for cooling, dust suppression and process use.'],
    ['Power units', 'Hydraulic power packs, motors, reservoirs and control manifolds.'],
  ],
  'instrumentation-control': [
    ['Variable frequency drives', 'AC drives and spare boards for motor speed control.'],
    ['PLCs & HMIs', 'Programmable logic controllers, operator panels and replacement modules.'],
    ['Level sensors', 'Radar, ultrasonic, capacitive and vibrating level instruments.'],
    ['Sensors & switches', 'Proximity, pressure, temperature and limit switches and sensors.'],
    ['Motor control centres', 'MCC components, starters and replacement buckets.'],
    ['Relays', 'Control, safety, timer and protection relays.'],
    ['Motion control', 'Servo drives, servo motors and motion controllers.'],
    ['Control buttons', 'Push buttons, selector switches, pilot lights and emergency stops.'],
    ['Circuit protection', 'MCBs, MCCBs, motor protection breakers and residual current devices.'],
    ['Safety systems', 'Safety controllers, light curtains, interlocks and safety relays.'],
    ['I/O modules', 'Digital, analogue and fieldbus I/O modules and communication cards.'],
    ['Process analysers', 'Gas, liquid and emissions analysers with sensors and spares.'],
  ],
  pneumatic: [
    ['Valves', 'Solenoid, directional and process valves with coils and repair kits.'],
    ['Actuators', 'Pneumatic rotary and linear actuators for valves and dampers.'],
    ['Air cylinders', 'ISO and compact air cylinders with seal kits and mountings.'],
    ['Compressors & spares', 'Compressor service kits, filters, separators and replacement parts.'],
    ['Vacuum pumps', 'Vacuum pumps, generators and vacuum handling components.'],
    ['Connectors & tubes', 'Push-in fittings, couplings, tubing and air distribution components.'],
    ['Air brakes & clutches', 'Pneumatic brakes and clutches for presses and heavy drives.'],
    ['Pneumatic hammers', 'Pneumatic hammers and knockers for bins, hoppers and chutes.'],
    ['Shock absorbers', 'Industrial shock absorbers and dampers for motion control.'],
    ['Servo-pneumatics', 'Proportional valves and positioners for precise pneumatic control.'],
    ['FRL units', 'Filter, regulator and lubricator units with replacement elements.'],
    ['Transmissions', 'Air-operated transmission and drive components.'],
  ],
  electrical: [
    ['AC & DC motors', 'Low- and medium-voltage AC motors, DC motors and motor spares.'],
    ['Generators', 'Generator sets, alternators and generator spare parts.'],
    ['Transformers & starters', 'Power and control transformers, soft starters and DOL starters.'],
    ['Switches & rectifiers', 'Isolators, changeover switches and rectifier units.'],
    ['Cables & accessories', 'Power, control and instrument cable with glands, lugs and terminations.'],
    ['Cable reels', 'Cable reels and drums for cranes and mobile equipment.'],
    ['Industrial fuses', 'HRC, semiconductor and general-purpose fuses with fuse holders.'],
    ['Surge protectors', 'Surge protection devices for power and control circuits.'],
    ['Luminaires', 'Industrial, high-bay, flameproof and emergency lighting.'],
    ['Batteries', 'Industrial, standby and starter batteries.'],
    ['Electromagnetic parts', 'Coils, brakes, clutches and electromagnetic components.'],
    ['Switchgear parts', 'Breakers, contactors and spare parts for LV and MV switchgear.'],
  ],
  electronic: [
    ['Sensors', 'Inductive, photoelectric, ultrasonic and specialist industrial sensors.'],
    ['Encoders', 'Incremental and absolute encoders for speed and position feedback.'],
    ['Controls', 'Electronic controllers, temperature controllers and indicators.'],
    ['Transducers', 'Pressure, position, current and signal transducers.'],
    ['Calibrators', 'Process calibrators and calibration equipment.'],
    ['Capacitors', 'Power, motor-run and electronic capacitors.'],
    ['Thyristors (SCR)', 'Thyristors and power semiconductor modules for drives and rectifiers.'],
    ['Diodes & rectifiers', 'Power diodes, rectifier bridges and modules.'],
    ['Digital analysers', 'Power quality and network analysers.'],
    ['Vibration monitoring', 'Vibration sensors, transmitters and condition monitoring equipment.'],
    ['Inverters & resistors', 'Inverters, braking resistors and load resistors.'],
    ['Test & measurement', 'Multimeters, clamp meters, insulation testers and thermal tools.'],
  ],
  'heavy-light-machinery': [
    ['Filters', 'Air, oil, fuel and hydraulic filters for construction and mining equipment.'],
    ['Engine components', 'Engine service and overhaul parts, gaskets, pumps and turbo components.'],
    ['Cutting edges & teeth', 'Bucket teeth, adapters, cutting edges and end bits.'],
    ['Electrical parts', 'Starters, alternators, sensors, switches and harnesses.'],
    ['Loader parts', 'Drivetrain, hydraulic and wear parts for wheel loaders.'],
    ['Gaskets', 'Engine, transmission and hydraulic gasket sets.'],
    ['Undercarriage parts', 'Track links, rollers, idlers, sprockets and shoes.'],
    ['Hydraulic parts', 'Pumps, valves, cylinders and seal kits for mobile hydraulics.'],
    ['Forklift parts', 'Mast, hydraulic, braking and electrical parts for forklifts.'],
    ['Excavator parts', 'Swing, travel, hydraulic and attachment parts for excavators.'],
  ],
  'cranes-lifting': [
    ['Hooks', 'Crane hooks, hook blocks and safety latches.'],
    ['Hoists', 'Electric chain and wire rope hoists with spare parts.'],
    ['Winches', 'Electric, hydraulic and manual winches.'],
    ['Wire ropes & cables', 'Steel wire ropes, slings and crane cables.'],
    ['Pulleys & sheaves', 'Rope sheaves, pulleys and bearings for lifting equipment.'],
    ['Wheels & brakes', 'Crane wheels, wheel blocks, brakes and thrusters.'],
    ['Joysticks', 'Master controllers and joysticks for crane cabins.'],
    ['Radio remote controls', 'Industrial radio remote control systems and spares.'],
    ['Pendant stations', 'Pendant control stations, push buttons and festoon components.'],
    ['Lifting magnets', 'Electro and permanent lifting magnets.'],
  ],
  'industrial-safety': [
    ['Safety gloves', 'Cut-resistant, chemical, heat and general-purpose work gloves.'],
    ['Safety glasses', 'Safety spectacles, goggles and over-glasses.'],
    ['Head & face protection', 'Hard hats, face shields and welding helmets.'],
    ['Hearing protection', 'Ear plugs and ear defenders.'],
    ['Respirators', 'Disposable, half-mask and full-face respirators with filters.'],
    ['Fall protection', 'Harnesses, lanyards, fall arresters and anchorage devices.'],
    ['Protective clothing', 'Coveralls, high-visibility, flame-resistant and chemical protective wear.'],
    ['Gas detectors', 'Portable and fixed gas detectors with sensors and calibration gas.'],
    ['Fire-fighting equipment', 'Extinguishers, fire blankets and fire-fighting accessories.'],
    ['First aid', 'First-aid kits, eye wash stations and refills.'],
  ],
}

const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export const products: Product[] = Object.entries(catalogue).flatMap(([category, entries]) =>
  entries.map((entry) => {
    const base = Array.isArray(entry) ? { name: entry[0], description: entry[1] } : entry
    return { ...base, category, id: `${category}--${slugify(base.name)}` }
  }),
)

// Safety net: warns in development if a product points at a missing category.
if (import.meta.env.DEV) {
  const known = new Set(categories.map((c) => c.slug))
  products.forEach((p) => {
    if (!known.has(p.category)) console.warn(`Product "${p.name}" uses unknown category "${p.category}"`)
  })
}

export const productCountByCategory = (slug: string) =>
  products.filter((p) => p.category === slug).length
