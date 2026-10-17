import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, FileText, Camera, Hash, PenTool, Boxes, Mail, MapPin, ShieldCheck, Globe2, Timer } from 'lucide-react'
import Seo from '../components/Seo'
import { ButtonLink, Photo, SectionHeading } from '../components/ui'
import { CategoryCard, OrderSteps, RfqCta } from '../components/blocks'
import { images } from '../data/images'
import { categories } from '../data/categories'
import { industries, sectorList } from '../data/industries'
import { whyChoose, exportDocuments } from '../data/company'
import { featuredBrands, trademarkNotice } from '../data/brands'
import { site } from '../config/site'

export default function Home() {
  return (
    <>
      <Seo
        title="Allied Spare Solutions | Industrial Spare Parts Supplier & Sourcing"
        description="Industrial spare parts sourcing for cement plants, mines, steel mills and manufacturing. Original OEM and quality equivalent parts with export documentation. Request a quote."
      />

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 -z-20">
          <Photo
            src={images.heroPlant}
            alt="Industrial process plant illuminated at night"
            eager
            className="h-full w-full"
            imgClassName="hero-zoom"
            position="62% 50%"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
        </div>
        <div className="blueprint absolute inset-0 -z-10 opacity-50" aria-hidden="true" />
        <div className="absolute -top-32 -left-32 -z-10 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" aria-hidden="true" />

        <div className="container-site grid min-h-[40rem] items-center gap-12 py-20 lg:min-h-[46rem] lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-amber-400/30 bg-amber-500/10 py-1.5 pr-4 pl-2 text-[0.8rem] font-medium text-amber-300 backdrop-blur">
              <span className="rounded-full bg-amber-500 px-2 py-0.5 font-mono text-[0.65rem] font-bold tracking-wider text-navy-950">UK</span>
              Birmingham-based · Supplying industry worldwide
            </p>
            <h1 className="mt-7 text-[2.6rem] leading-[1.02] font-extrabold sm:text-6xl lg:text-[4.2rem]">
              Industrial Spare Parts &amp; Sourcing{' '}
              <span className="text-gradient-amber">You Can Rely On</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
              A UK sourcing partner for OEM and quality equivalent spare parts, raw materials and engineering
              requirements — for cement, mining, steel, manufacturing and allied industries.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/request-quote" className="!px-7 !py-3.5 shadow-[0_10px_30px_-10px_rgb(245_154_35/0.7)]">
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink to="/products" variant="ghost-light" className="!px-7 !py-3.5 backdrop-blur">
                Explore Our Products
              </ButtonLink>
            </div>
            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-3">
              {[
                { icon: ShieldCheck, k: 'OEM & equivalent', v: 'Supply options' },
                { icon: Globe2, k: 'UK · EU · China', v: 'Sourcing network' },
                { icon: Timer, k: 'Breakdown', v: 'Orders prioritised' },
              ].map(({ icon: Icon, k, v }) => (
                <div key={k} className="rounded-xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-md">
                  <Icon className="h-5 w-5 text-amber-400" aria-hidden="true" />
                  <dt className="mt-3 font-display text-[0.95rem] leading-tight font-bold text-white">{k}</dt>
                  <dd className="mt-1 text-[0.75rem] text-white/55">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* What to send card */}
          <aside className="hidden lg:col-span-4 lg:col-start-9 lg:block lg:self-end">
            <div className="rounded-2xl border border-white/15 bg-navy-950/60 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <p className="eyebrow text-amber-400">Quick RFQ</p>
              <p className="mt-3 font-display text-lg font-bold">Send us any one of these:</p>
              <ul className="mt-4 space-y-3 text-[0.9rem] text-white/80">
                {[
                  { icon: Hash, t: 'Part number or OEM reference' },
                  { icon: Camera, t: 'Photo of the part or nameplate' },
                  { icon: PenTool, t: 'Drawing or specification sheet' },
                  { icon: Boxes, t: 'Quantity and delivery country' },
                ].map(({ icon: Icon, t }) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.07] text-amber-400">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${site.email}`}
                className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-white/[0.07] py-2.5 text-[0.85rem] font-semibold text-white ring-1 ring-white/10 transition-colors hover:bg-amber-500 hover:text-navy-950"
              >
                <Mail className="h-4 w-4" aria-hidden="true" /> Email your RFQ
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Sector strip */}
      <div className="bg-graphite-900 text-white/80">
        <div className="container-site overflow-x-auto">
          <ul className="flex min-w-max items-center gap-6 py-4 font-mono text-[0.74rem] tracking-[0.14em] uppercase">
            <li className="pr-2 text-amber-400">Sectors</li>
            {sectorList.map((s) => (
              <li key={s} className="flex items-center gap-6">
                <span className="h-1.5 w-1.5 bg-amber-500" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Intro ──────────────────────────────────────── */}
      <section className="overflow-hidden py-20 md:py-28">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="absolute -top-6 -left-6 -z-10 h-40 w-40 rounded-2xl bg-amber-500/15" aria-hidden="true" />
            <div className="blueprint-light absolute -right-6 -bottom-6 -z-10 h-48 w-48 rounded-2xl bg-paper" aria-hidden="true" />
            <div className="group relative overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgb(7_19_36/0.55)] ring-1 ring-navy-900/10">
              <Photo
                src={images.cementPlant}
                alt="Cement plant with preheater tower, silos and conveyors beside the water"
                className="aspect-[4/3] w-full"
                imgClassName="transition-transform duration-[1.2s] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[0.72rem] font-semibold text-navy-900 shadow backdrop-blur">
                <MapPin className="h-3.5 w-3.5 text-amber-600" aria-hidden="true" /> Cement · Mining · Steel
              </span>
              <figure className="absolute inset-x-4 bottom-4 rounded-xl border border-white/15 bg-navy-950/70 p-4 text-white backdrop-blur-md sm:inset-x-auto sm:right-4 sm:max-w-xs">
                <blockquote className="font-display text-[1rem] leading-snug font-semibold">
                  “Not just a supplier — an extension of your procurement team.”
                </blockquote>
              </figure>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="An international industrial supply company built around your downtime."
            />
            <div className="-mt-4 space-y-4 text-[1.02rem] leading-relaxed text-muted">
              <p>
                {site.name} is a UK-based trading and sourcing company, headquartered in Birmingham, supplying spare parts, industrial requirements and raw
                materials to cement plants, mines, steel mills and factories.
              </p>
              <p>
                We work with trusted business partners in China and Europe and a multi-country supplier network to
                source original OEM and high-quality equivalent parts at competitive prices — then deliver them
                with full export documentation, so your maintenance teams can avoid costly downtime.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {['OEM and equivalent options', 'Urgent breakdown orders prioritised', 'Many brands, one shipment', 'Obsolete parts traced'].map(
                (t) => (
                  <li key={t} className="flex items-center gap-3 text-[0.95rem] font-medium text-navy-900">
                    <span className="h-2 w-2 bg-amber-500" aria-hidden="true" />
                    {t}
                  </li>
                ),
              )}
            </ul>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 font-semibold text-steel-600 hover:text-navy-900"
            >
              More about us <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Product range ──────────────────────────────── */}
      <section className="blueprint-light bg-paper py-20 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Product range"
            title="Spare parts across twelve product groups"
            intro="From kiln and crusher wear parts to drives, sensors and safety equipment. Every group is supplied on request — tell us what you need and we source it."
            action={
              <ButtonLink to="/products" variant="ghost-dark">
                View all products <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            }
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <CategoryCard key={c.slug} category={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── How to order ───────────────────────────────── */}
      <section className="relative isolate bg-navy-900 py-20 text-white md:py-24">
        <div className="blueprint absolute inset-0 -z-10" aria-hidden="true" />
        <div className="container-site">
          <SectionHeading
            tone="light"
            eyebrow="How to order"
            title="From part number to delivery in four clear steps"
            intro="No part number? A photo of the nameplate, the old part or a drawing is often enough for us to identify it."
          />
          <OrderSteps />
        </div>
      </section>

      {/* ── Industries ─────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Industries we serve"
            title="Supporting heavy industry and the plants that depend on uptime"
            action={
              <ButtonLink to="/industries" variant="ghost-dark">
                All industries <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            }
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => {
              const Icon = ind.icon
              return (
                <Link
                  key={ind.slug}
                  to={`/industries#${ind.slug}`}
                  className="group relative isolate flex aspect-[5/4] flex-col justify-end overflow-hidden rounded-lg p-6 text-white"
                >
                  <Photo
                    src={ind.image}
                    alt={ind.imageAlt}
                    className="absolute inset-0 -z-10 h-full w-full"
                    imgClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/5" />
                  <Icon className="mb-auto h-6 w-6 text-amber-400" aria-hidden="true" />
                  <h3 className="text-xl font-bold">{ind.name}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-white/75">{ind.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[0.85rem] font-semibold text-amber-400">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Why choose ─────────────────────────────────── */}
      <section className="bg-paper py-20 md:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading eyebrow="Why choose us" title={`Why clients work with ${site.name}`} />
              <div className="-mt-4 rounded-lg border border-line bg-white p-6">
                <p className="flex items-center gap-2 font-display font-bold text-navy-900">
                  <FileText className="h-5 w-5 text-amber-500" aria-hidden="true" />
                  Export documentation
                </p>
                <ul className="mt-4 space-y-2 text-[0.92rem] text-muted">
                  {exportDocuments.map((d) => (
                    <li key={d} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-steel-500" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-lg bg-line ring-1 ring-line sm:grid-cols-2 lg:col-span-8">
            {whyChoose.map(({ title, text, icon: Icon }, i) => (
              <li key={title} className="bg-white p-7 transition-colors hover:bg-paper">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 text-amber-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-900">{title}</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Brands ─────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Brands we source"
            title="Parts for the equipment you already run"
            intro="A selection of the manufacturers whose products and equipment we source parts for. Original OEM or quality equivalents are offered to suit your budget."
            action={
              <ButtonLink to="/brands" variant="ghost-dark">
                Full brand list <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            }
          />
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-line ring-1 ring-line sm:grid-cols-3 lg:grid-cols-6">
            {featuredBrands.map((b) => (
              <li
                key={b}
                className="flex h-20 items-center justify-center bg-white px-3 text-center font-display text-[0.98rem] font-bold tracking-tight text-navy-800/80 transition-colors hover:bg-paper hover:text-navy-900"
              >
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-4xl text-[0.78rem] leading-relaxed text-subtle">{trademarkNotice}</p>
        </div>
      </section>

      <RfqCta />
    </>
  )
}
