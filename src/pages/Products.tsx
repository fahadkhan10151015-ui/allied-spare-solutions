import { useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Search, X, Info, SearchX, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import { PageHero, ProductCard, RfqCta } from '../components/blocks'
import { Photo, buttonClass } from '../components/ui'
import { categories, getCategory } from '../data/categories'
import { products } from '../data/products'
import { images } from '../data/images'

const normalise = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

export default function Products() {
  const [params, setParams] = useSearchParams()
  const activeSlug = params.get('category') ?? 'all'
  const query = params.get('q') ?? ''
  const active = activeSlug === 'all' ? undefined : getCategory(activeSlug)

  const update = (key: 'category' | 'q', value: string) => {
    const next = new URLSearchParams(params)
    if (!value || value === 'all') next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true, preventScrollReset: true })
  }

  const results = useMemo(() => {
    const q = normalise(query.trim())
    return products.filter((p) => {
      if (active && p.category !== active.slug) return false
      if (!q) return true
      const cat = getCategory(p.category)
      return normalise(`${p.name} ${p.description} ${cat?.name ?? ''} ${p.brand ?? ''}`).includes(q)
    })
  }, [active, query])

  const title = active ? active.name : 'Products & Spare Parts'

  return (
    <>
      <Seo
        title={active ? `${active.name} | Industrial Spare Parts` : 'Industrial Spare Parts & Products'}
        description={
          active
            ? `${active.description} Request a quotation from Allied Spare Solutions.`
            : 'Browse industrial spare parts we source: cement plant, mining and steel mill spares, mechanical, hydraulic, pneumatic, electrical, electronic, instrumentation, cranes and safety equipment.'
        }
      />
      <PageHero
        eyebrow="Product catalogue"
        title={title}
        intro={
          active
            ? active.description
            : 'Part groups we source for cement, mining, steel, manufacturing and allied industries — available as original OEM or quality equivalent, quoted on request.'
        }
        image={active?.image ?? images.mechanicalGears}
        imageAlt={active?.imageAlt ?? 'Industrial gears'}
      />

      {/* Filters */}
      <div className="sticky top-[4.5rem] z-30 border-b border-line bg-white/95 backdrop-blur md:top-[6.75rem]">
        <div className="container-site flex flex-col gap-3 py-4 lg:flex-row lg:items-center">
          <label className="relative block lg:w-80 lg:shrink-0">
            <span className="sr-only">Search products</span>
            <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-subtle" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => update('q', e.target.value)}
              placeholder="Search parts, e.g. bearings, liners, VFD"
              className="form-field !pl-10"
            />
          </label>
          <div className="-mx-5 overflow-x-auto px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0" role="group" aria-label="Filter by category">
            <div className="flex min-w-max gap-2">
              {[{ slug: 'all', name: 'All' }, ...categories].map((c) => {
                const selected = activeSlug === c.slug || (c.slug === 'all' && !active)
                return (
                  <button
                    key={c.slug}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => update('category', c.slug)}
                    className={`rounded-lg border px-3 py-1.5 text-[0.82rem] font-medium whitespace-nowrap transition-colors ${
                      selected
                        ? 'border-navy-900 bg-navy-900 text-white'
                        : 'border-line bg-white text-muted hover:border-navy-900/40 hover:text-navy-900'
                    }`}
                  >
                    {c.name.replace(' Spare Parts', '')}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <section className="bg-paper py-12 md:py-16">
        <div className="container-site">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-[0.92rem] text-muted" aria-live="polite">
              Showing <strong className="text-navy-900">{results.length}</strong>{' '}
              {results.length === 1 ? 'part group' : 'part groups'}
              {active && (
                <>
                  {' '}in <strong className="text-navy-900">{active.name}</strong>
                </>
              )}
              {query && (
                <>
                  {' '}matching “<strong className="text-navy-900">{query}</strong>”
                </>
              )}
            </p>
            {(active || query) && (
              <button
                type="button"
                onClick={() => setParams({}, { replace: true })}
                className="inline-flex items-center gap-1.5 self-start text-[0.85rem] font-semibold text-steel-600 hover:text-navy-900"
              >
                <X className="h-4 w-4" aria-hidden="true" /> Clear filters
              </button>
            )}
          </div>

          {active?.equipmentBy && (
            <div className="mb-8 rounded-lg border border-line bg-white p-5">
              <p className="eyebrow text-steel-600">Parts for equipment by</p>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-navy-900">{active.equipmentBy.join(' · ')}</p>
              <p className="mt-2 text-[0.75rem] text-subtle">
                Manufacturer names identify the equipment our parts fit. No affiliation or endorsement is implied.
              </p>
            </div>
          )}

          {results.length > 0 ? (
            <div className="space-y-14">
              {categories
                .map((c) => ({ c, items: results.filter((p) => p.category === c.slug) }))
                .filter((g) => g.items.length > 0)
                .map(({ c, items }) => (
                  <section key={c.slug} aria-labelledby={`group-${c.slug}`}>
                    {!active && (
                      <header className="mb-6 flex items-center gap-5 overflow-hidden rounded-lg border border-line bg-white">
                        <Photo src={c.image} alt={c.imageAlt} className="hidden h-24 w-40 shrink-0 sm:block" />
                        <div className="min-w-0 flex-1 px-5 py-4 sm:px-0">
                          <h2 id={`group-${c.slug}`} className="text-xl font-bold text-navy-900">
                            {c.name}
                          </h2>
                          <p className="mt-1 line-clamp-2 text-[0.88rem] text-muted">{c.summary}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => update('category', c.slug)}
                          className="mr-5 hidden shrink-0 text-[0.84rem] font-semibold text-steel-600 hover:text-navy-900 md:block"
                        >
                          {items.length} {items.length === 1 ? 'item' : 'items'} — view group →
                        </button>
                      </header>
                    )}
                    {active && (
                      <h2 id={`group-${c.slug}`} className="sr-only">
                        {c.name}
                      </h2>
                    )}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {items.map((p, i) => (
                        <ProductCard key={p.id} product={p} index={i} />
                      ))}
                    </div>
                  </section>
                ))}
            </div>
          ) : (
            <div className="flex flex-col items-center rounded-lg border border-dashed border-navy-900/20 bg-white px-6 py-16 text-center">
              <SearchX className="h-10 w-10 text-subtle" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-bold text-navy-900">No matching part groups</h2>
              <p className="mt-3 max-w-md text-muted">
                This list is not exhaustive. If you can’t find what you need, send us the part number, a photo or a
                drawing — we will try to source it.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to={`/request-quote${query ? `?product=${encodeURIComponent(query)}` : ''}`}
                  className={buttonClass('primary')}
                >
                  Request this part <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <button type="button" onClick={() => setParams({}, { replace: true })} className={buttonClass('ghost-dark')}>
                  Show all products
                </button>
              </div>
            </div>
          )}

          <div className="mt-12 flex gap-4 rounded-lg border-l-4 border-amber-500 bg-white p-5 text-[0.88rem] leading-relaxed text-muted">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-steel-600" aria-hidden="true" />
            <p>
              <strong className="text-navy-900">Supplied on request.</strong> The items above are part groups we source
              for clients; they are not a stock list. Prices, availability and lead times are confirmed in each
              quotation. Raw materials and other
              industrial requirements can also be quoted — just describe what you need.
            </p>
          </div>
        </div>
      </section>

      <RfqCta />
    </>
  )
}
