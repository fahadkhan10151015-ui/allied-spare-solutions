import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShieldAlert, ArrowRight, SearchX } from 'lucide-react'
import Seo from '../components/Seo'
import { PageHero, RfqCta } from '../components/blocks'
import { SectionHeading, buttonClass } from '../components/ui'
import { brandGroups, allBrands, trademarkNotice } from '../data/brands'
import { categories, getCategory } from '../data/categories'
import { images } from '../data/images'

export default function Brands() {
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()

  const groups = useMemo(
    () =>
      brandGroups
        .map((g) => ({ ...g, brands: g.brands.filter((b) => b.toLowerCase().includes(q)) }))
        .filter((g) => g.brands.length > 0),
    [q],
  )
  const equipmentGroups = categories.filter((c) => c.equipmentBy)

  return (
    <>
      <Seo
        title="Brands & Manufacturers We Source"
        description="Industrial brands we source spare parts for — bearings, drives, hydraulics, pneumatics, automation, electrical, heavy machinery, cranes and safety. OEM and quality equivalent parts."
      />
      <PageHero
        eyebrow="Brands & manufacturers"
        title={`Parts sourced across ${allBrands.length} industrial brands`}
        intro="We source original OEM and quality equivalent parts for, and from, the manufacturers below. Brand names are shown as text only — they identify products and equipment, not a distribution agreement."
        image={images.electronicControlPanel}
        imageAlt="Industrial control cabinet"
      />

      <section className="py-14 md:py-20">
        <div className="container-site">
          <div className="mb-12 flex gap-4 rounded-lg border border-amber-500/40 bg-amber-500/[0.07] p-5 text-[0.88rem] leading-relaxed text-ink">
            <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
            <p>
              <strong>Independent supplier.</strong> {trademarkNotice}
            </p>
          </div>

          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Brands we source, by product range</h2>
              <p className="mt-2 text-muted">{allBrands.length} brand names listed across 9 product ranges.</p>
            </div>
            <label className="relative block md:w-80">
              <span className="sr-only">Search brands</span>
              <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-subtle" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Find a brand, e.g. SKF"
                className="form-field !pl-10"
              />
            </label>
          </div>

          {groups.length === 0 ? (
            <div className="flex flex-col items-center rounded-lg border border-dashed border-navy-900/20 px-6 py-14 text-center">
              <SearchX className="h-9 w-9 text-subtle" aria-hidden="true" />
              <p className="mt-4 text-lg font-bold text-navy-900">“{query}” isn’t in our list yet</p>
              <p className="mt-2 max-w-md text-muted">
                Our network covers more manufacturers than we can list. Send us the part details and we will check.
              </p>
              <Link
                to={`/request-quote?product=${encodeURIComponent(`${query} part`)}`}
                className={buttonClass('primary', 'mt-6')}
              >
                Ask about this brand <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-2">
              {groups.map((g) => {
                const cat = getCategory(g.category)
                const Icon = cat?.icon
                return (
                  <article key={g.category} className="rounded-lg border border-line bg-white">
                    <header className="flex items-center justify-between border-b border-line px-6 py-4">
                      <h3 className="flex items-center gap-3 text-lg font-bold text-navy-900">
                        {Icon && (
                          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-amber-400">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                        )}
                        {g.title}
                      </h3>
                      <Link
                        to={`/products?category=${g.category}`}
                        className="text-[0.82rem] font-semibold text-steel-600 hover:text-navy-900"
                      >
                        View parts →
                      </Link>
                    </header>
                    <ul className="flex flex-wrap gap-2 p-6">
                      {g.brands.map((b) => (
                        <li
                          key={b}
                          className="rounded-lg border border-line bg-paper px-3 py-1.5 text-[0.85rem] font-medium text-navy-900"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Heavy industry equipment"
            title="Parts for plant equipment from leading OEMs"
            intro="For cement, mining and steel operations we supply spare and wear parts that fit equipment built by the following manufacturers."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {equipmentGroups.map((c) => (
              <article key={c.slug} className="rounded-lg border border-line bg-white p-6">
                <h3 className="text-lg font-bold text-navy-900">{c.name.replace(' Spare Parts', '')}</h3>
                <ul className="mt-4 space-y-2 text-[0.92rem] text-muted">
                  {c.equipmentBy!.map((b) => (
                    <li key={b} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 bg-amber-500" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/products?category=${c.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-[0.88rem] font-semibold text-steel-600 hover:text-navy-900"
                >
                  View part groups <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RfqCta />
    </>
  )
}
