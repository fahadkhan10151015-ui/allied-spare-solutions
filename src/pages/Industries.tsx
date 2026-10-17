import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import Seo from '../components/Seo'
import { PageHero, RfqCta } from '../components/blocks'
import { Photo, buttonClass } from '../components/ui'
import { industries, sectorList } from '../data/industries'
import { images } from '../data/images'

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries We Serve"
        description="Spare parts sourcing for cement plants, mining and quarrying, steel mills, manufacturing, engineering and maintenance teams, and allied industries such as power, oil & gas, food & beverage and paper."
      />
      <PageHero
        eyebrow="Industries we serve"
        title="Spare parts for the plants that keep heavy industry moving"
        intro="Our catalogue covers cement, mining, steel, power, oil & gas, food & beverage, paper, recycling and manufacturing. Here is how we support each sector."
        image={images.miningLoader}
        imageAlt="Loader on a mining site"
      >
        <ul className="flex flex-wrap gap-2">
          {sectorList.map((s) => (
            <li key={s} className="rounded-lg border border-white/20 px-3 py-1 font-mono text-[0.72rem] tracking-wider text-white/80 uppercase">
              {s}
            </li>
          ))}
        </ul>
      </PageHero>

      {/* Quick nav */}
      <nav aria-label="Industries" className="border-b border-line bg-white">
        <div className="container-site overflow-x-auto">
          <ul className="flex min-w-max gap-1 py-3">
            {industries.map((ind) => (
              <li key={ind.slug}>
                <a
                  href={`#${ind.slug}`}
                  className="block rounded-lg px-3 py-2 text-[0.88rem] font-medium text-muted hover:bg-paper hover:text-navy-900"
                >
                  {ind.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="divide-y divide-line">
        {industries.map((ind, i) => {
          const Icon = ind.icon
          const flip = i % 2 === 1
          return (
            <section key={ind.slug} id={ind.slug} className={`scroll-mt-40 py-16 md:py-24 ${flip ? 'bg-paper' : 'bg-white'}`}>
              <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <div className={`tick-frame ${flip ? 'lg:order-2' : ''}`}>
                  <Photo src={ind.image} alt={ind.imageAlt} className="aspect-[4/3] w-full rounded-lg" />
                </div>
                <div>
                  <p className="eyebrow flex items-center gap-3 text-steel-600">
                    <Icon className="h-4 w-4 text-amber-500" aria-hidden="true" />
                    {String(i + 1).padStart(2, '0')} / {String(industries.length).padStart(2, '0')}
                  </p>
                  <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">{ind.name}</h2>
                  <p className="mt-5 text-[1.02rem] leading-relaxed text-muted">{ind.description}</p>
                  <h3 className="eyebrow mt-8 text-navy-900">Typical requirements</h3>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {ind.typicalParts.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-[0.92rem] text-ink">
                        <Check className="h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Link
                      to={`/request-quote?category=${encodeURIComponent(ind.name)}`}
                      className={buttonClass('primary')}
                    >
                      Request a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    {ind.categoryLink && (
                      <Link to={`/products?category=${ind.categoryLink}`} className={buttonClass('ghost-dark')}>
                        View related parts
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      <RfqCta />
    </>
  )
}
