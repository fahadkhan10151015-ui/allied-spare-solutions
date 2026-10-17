import { Globe2, Handshake, ClipboardList, Truck, CheckCircle2, ArrowRight, MapPin, Building2 } from 'lucide-react'
import Seo from '../components/Seo'
import { PageHero, OrderSteps, RfqCta } from '../components/blocks'
import { ButtonLink, Photo, SectionHeading } from '../components/ui'
import { images } from '../data/images'
import { whyChoose, exportDocuments } from '../data/company'
import { site } from '../config/site'

const pillars = [
  {
    icon: ClipboardList,
    title: 'Procurement support',
    text: 'We work alongside your purchasing and maintenance teams — from identifying a part to consolidating a multi-line RFQ into a single quotation.',
  },
  {
    icon: Globe2,
    title: 'International sourcing',
    text: `Trusted business partners in ${site.sourcingRegions.join(' and ')}, plus a multi-country supplier network, give us access to OEM and equivalent parts.`,
  },
  {
    icon: Handshake,
    title: 'Competitive sourcing',
    text: 'Direct access to manufacturers and distributors lets us offer competitive pricing, with OEM and alternative options to fit your budget.',
  },
  {
    icon: Truck,
    title: 'Export-ready delivery',
    text: 'Goods are packed for export and shipped with the documentation your customs and quality teams need.',
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Us — Industrial Procurement Solutions"
        description="Allied Spare Solutions is a UK-based industrial trading and sourcing company, headquartered in Birmingham, supplying OEM and equivalent spare parts, industrial requirements and raw materials, with partners in China and Europe."
      />
      <PageHero
        eyebrow="About us"
        title="An extension of your procurement team"
        intro={`${site.name} is a UK-based international industrial supply company, headquartered in Birmingham with offices in London and Manchester. We source spare parts, industrial requirements and raw materials for manufacturing, cement, mining, steel and allied industries.`}
        image={images.steelGrinding}
        imageAlt="Steel mill interior with overhead cranes"
      />

      <section className="py-20 md:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="What we do" title="Sourcing the parts that keep production running" />
            <div className="-mt-4 space-y-5 text-[1.05rem] leading-relaxed text-muted">
              <p>
                {site.name} is a British company based in the United Kingdom. From our head office in Birmingham —
                supported by sales and logistics teams in London and Manchester — we serve industrial buyers in the UK
                and overseas.
              </p>
              <p>
                When a crusher, kiln, mill or production line stops, every hour counts. {site.name} exists to shorten
                the path between a failed component and its replacement. We source original OEM spare parts and
                high-quality equivalents from a multi-country supplier network, working with trusted business
                partners in China and Europe.
              </p>
              <p>
                Our product range covers mechanical, hydraulic, pneumatic, electrical, electronic, instrumentation
                and control, heavy and light machinery, cranes and lifting, and industrial safety — as well as
                dedicated wear and critical spares for cement plants, mines and steel mills. Raw materials and other
                industrial requirements can be quoted on request.
              </p>
              <p>
                We handle each enquiry individually: you send a part number, nameplate photo or drawing, and we reply
                with OEM and equivalent options, then ship with full export documentation. We serve the UK
                and Europe, Africa, the Middle East and Asia, and welcome RFQs from businesses worldwide.
              </p>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="tick-frame">
              <Photo src={images.heroLogistics} alt="Container port with cranes loading cargo at dusk" className="aspect-[4/3] rounded-2xl" />
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-line ring-1 ring-line">
              {[
                ['Sourcing partners', site.sourcingRegions.join(' & ')],
                ['Markets served', site.marketsServed.join(', ')],
                ['Supply options', 'OEM & equivalent'],
                ['Head office', 'Birmingham, UK'],
              ].map(([k, v]) => (
                <div key={k} className="bg-white p-5">
                  <dt className="eyebrow text-subtle">{k}</dt>
                  <dd className="mt-2 font-display font-bold text-navy-900">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* ── UK offices ── */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-20 text-white md:py-24">
        <div className="blueprint absolute inset-0 -z-10" aria-hidden="true" />
        <div className="absolute -right-40 -bottom-40 -z-10 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl" aria-hidden="true" />
        <div className="container-site">
          <SectionHeading
            tone="light"
            eyebrow="Our UK offices"
            title="Proudly based in the United Kingdom"
            intro="Three UK locations cover sales, export coordination and logistics, so your enquiry is handled by a local team from first quote to final shipment."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {site.offices.map((o, i) => (
              <article
                key={o.city}
                className="card-lift relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur"
              >
                <span className="absolute top-6 right-6 font-mono text-xs text-white/30">0{i + 1}</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-navy-950">
                  {i === 0 ? <Building2 className="h-5 w-5" aria-hidden="true" /> : <MapPin className="h-5 w-5" aria-hidden="true" />}
                </span>
                <p className="eyebrow mt-6 text-amber-400">{o.role}</p>
                <h3 className="mt-2 text-2xl font-bold">{o.city}</h3>
                <p className="mt-2 text-white/65">{o.address}</p>
                <p className="text-[0.85rem] text-white/45">{o.region}, United Kingdom</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="Our approach" title="How we support industrial buyers" align="center" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-lg border border-line bg-white p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500 text-navy-950">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-bold text-navy-900">{title}</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate bg-navy-900 py-20 text-white md:py-24">
        <div className="blueprint absolute inset-0 -z-10" aria-hidden="true" />
        <div className="container-site">
          <SectionHeading tone="light" eyebrow="Working with us" title="A simple, transparent ordering process" />
          <OrderSteps />
          <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-2">
            <div>
              <h3 className="eyebrow text-amber-400">Documents supplied with export orders</h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {exportDocuments.map((d) => (
                  <li key={d} className="flex items-center gap-2.5 text-white/80">
                    <CheckCircle2 className="h-4 w-4 text-amber-500" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="eyebrow text-amber-400">What clients value</h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {whyChoose.slice(0, 6).map((w) => (
                  <li key={w.title} className="flex items-center gap-2.5 text-white/80">
                    <CheckCircle2 className="h-4 w-4 text-amber-500" aria-hidden="true" />
                    {w.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ButtonLink to="/request-quote" className="mt-12">
            Send an RFQ <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </section>

      <RfqCta />
    </>
  )
}
