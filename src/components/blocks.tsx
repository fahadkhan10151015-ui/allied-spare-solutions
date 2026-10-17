import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Mail, MessageCircle, FileQuestion } from 'lucide-react'
import type { ReactNode } from 'react'
import { ButtonLink, Photo, buttonClass } from './ui'
import type { Category } from '../data/categories'
import { getCategory } from '../data/categories'
import type { Product } from '../data/products'
import { productCountByCategory } from '../data/products'
import { orderSteps } from '../data/company'
import { site, whatsappLink } from '../config/site'

/* ── Page hero for inner pages ───────────────────────────── */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = '',
  children,
}: {
  eyebrow: string
  title: ReactNode
  intro: ReactNode
  image?: string
  imageAlt?: string
  children?: ReactNode
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      {image && (
        <div className="absolute inset-y-0 right-0 -z-10 w-full md:w-[55%]">
          <Photo src={image} alt={imageAlt} eager className="h-full w-full" imgClassName="opacity-45 md:opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/20" />
        </div>
      )}
      <div className="blueprint absolute inset-0 -z-10" aria-hidden="true" />
      <div className="container-site py-16 md:py-24">
        <p className="eyebrow flex items-center gap-3 text-amber-400">
          <span className="h-px w-8 bg-amber-500" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-[3.5rem]">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{intro}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}

/* ── Category card ───────────────────────────────────────── */
export function CategoryCard({ category, index }: { category: Category; index: number }) {
  const Icon = category.icon
  const count = productCountByCategory(category.slug)
  return (
    <Link
      to={`/products?category=${category.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-line bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-900/30 hover:shadow-[0_18px_40px_-24px_rgb(7_19_36/0.45)]"
    >
      <div className="relative aspect-[16/9]">
        <Photo
          src={category.image}
          alt={category.imageAlt}
          className="absolute inset-0 h-full w-full"
          imgClassName="transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
        <span className="absolute top-3 left-3 rounded-lg bg-navy-950/80 px-2 py-1 font-mono text-[0.68rem] tracking-[0.14em] text-white/85 backdrop-blur">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="absolute bottom-0 left-4 flex h-11 w-11 translate-y-1/2 items-center justify-center rounded-lg bg-amber-500 text-navy-950 shadow-md">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <div className="flex flex-1 flex-col px-5 pt-9 pb-5">
        <h3 className="text-lg font-bold text-navy-900">{category.name}</h3>
        <p className="mt-2 flex-1 text-[0.9rem] leading-relaxed text-muted">{category.summary}</p>
        <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
          <span className="font-mono text-[0.72rem] tracking-wider text-subtle uppercase">{count} part groups</span>
          <ArrowUpRight
            className="h-4 w-4 text-navy-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  )
}

/* ── Product card ────────────────────────────────────────── */
export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const category = getCategory(product.category)
  const Icon = category?.icon
  const quoteHref = `/request-quote?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent(
    category?.name ?? '',
  )}`
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-line bg-white transition-all duration-300 hover:border-navy-900/25 hover:shadow-[0_16px_36px_-24px_rgb(7_19_36/0.45)]">
      {product.image ? (
        <div className="relative aspect-[4/3] overflow-hidden">
          <Photo
            src={product.image}
            alt={`${product.name} — ${category?.name ?? 'industrial spare part'}`}
            className="absolute inset-0 h-full w-full"
            imgClassName="transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <span className="absolute bottom-3 left-3 max-w-[85%] truncate rounded-lg bg-navy-950/80 px-2 py-1 font-mono text-[0.64rem] tracking-[0.14em] text-white/90 uppercase">
            {category?.name}
          </span>
        </div>
      ) : (
        /* Designed tile used until a real product photo is added in products.ts */
        <div className="blueprint-light relative flex aspect-[2/1] flex-col justify-between overflow-hidden border-b border-line bg-gradient-to-br from-paper to-paper-2 p-4">
          <div className="flex items-start justify-between gap-3">
            {Icon && (
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-amber-400">
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
            )}
            <span className="font-mono text-[0.64rem] text-subtle">{String(index + 1).padStart(3, '0')}</span>
          </div>
          {Icon && (
            <Icon
              className="absolute -right-3 -bottom-5 h-28 w-28 text-navy-900/[0.06] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
              strokeWidth={1.1}
              aria-hidden="true"
            />
          )}
          <span className="max-w-[80%] truncate font-mono text-[0.64rem] tracking-[0.14em] text-steel-600 uppercase">
            {category?.name}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[1.05rem] leading-snug font-bold text-navy-900">{product.name}</h3>
        {product.brand && (
          <p className="mt-1 font-mono text-[0.72rem] tracking-wider text-steel-600 uppercase">{product.brand}</p>
        )}
        <p className="mt-2 flex-1 text-[0.88rem] leading-relaxed text-muted">{product.description}</p>
        <div className="mt-5 border-t border-line pt-4">
          <Link to={quoteHref} className={buttonClass('ghost-dark', 'w-full !py-2.5 !text-[0.84rem] group-hover:border-navy-900 group-hover:bg-navy-900 group-hover:text-white')}>
            Request Quote
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}

/* ── How to order ────────────────────────────────────────── */
export function OrderSteps({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const onDark = tone === 'dark'
  return (
    <ol className="grid gap-px overflow-hidden rounded-lg sm:grid-cols-2 lg:grid-cols-4">
      {orderSteps.map((step, i) => (
        <li
          key={step.title}
          className={`relative p-6 md:p-7 ${onDark ? 'bg-white/[0.04] ring-1 ring-white/10' : 'bg-white ring-1 ring-line'}`}
        >
          <span className={`font-mono text-sm ${onDark ? 'text-amber-400' : 'text-steel-600'}`}>
            STEP {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className={`mt-3 text-lg font-bold ${onDark ? 'text-white' : 'text-navy-900'}`}>{step.title}</h3>
          <p className={`mt-2 text-[0.92rem] leading-relaxed ${onDark ? 'text-white/65' : 'text-muted'}`}>
            {step.text}
          </p>
          {i < orderSteps.length - 1 && (
            <ArrowRight
              className={`absolute top-6 right-6 hidden h-4 w-4 lg:block ${onDark ? 'text-white/25' : 'text-line'}`}
              aria-hidden="true"
            />
          )}
        </li>
      ))}
    </ol>
  )
}

/* ── RFQ call-to-action band ─────────────────────────────── */
export function RfqCta() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-site">
        <div className="relative isolate overflow-hidden rounded-lg bg-navy-900 px-6 py-12 text-white sm:px-12 md:py-16">
          <div className="blueprint absolute inset-0 -z-10" aria-hidden="true" />
          <div className="absolute top-0 left-0 h-full w-1.5 bg-amber-500" aria-hidden="true" />
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="eyebrow text-amber-400">Request for quotation</p>
              <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl">
                Send us your part list, part numbers or nameplate photos.
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Our UK team reviews every enquiry and replies with OEM and quality equivalent options, pricing and lead
                time. Enquiries from businesses worldwide are welcome.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <ButtonLink to="/request-quote" className="w-full !py-3.5">
                <FileQuestion className="h-4 w-4" aria-hidden="true" /> Start a Quote Request
              </ButtonLink>
              <a href={`mailto:${site.email}`} className={buttonClass('ghost-light', 'w-full')}>
                <Mail className="h-4 w-4" aria-hidden="true" /> Email us
              </a>
              <a
                href={whatsappLink('Hello Allied Spare Solutions, I would like a quotation for:')}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass('ghost-light', 'w-full')}
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
