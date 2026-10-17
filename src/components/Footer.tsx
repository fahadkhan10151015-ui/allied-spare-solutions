import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MessageCircle, ArrowRight, MapPin } from 'lucide-react'
import Logo from './Logo'
import { buttonClass } from './ui'
import { navigation, site, whatsappLink } from '../config/site'
import { categories } from '../data/categories'
import { industries } from '../data/industries'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative isolate overflow-hidden bg-navy-950 text-white/70">
      <div className="blueprint absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div className="absolute -top-40 left-1/2 -z-10 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" aria-hidden="true" />

      {/* UK offices strip */}
      <div className="border-b border-white/10">
        <div className="container-site grid gap-4 py-10 sm:grid-cols-3">
          {site.offices.map((o) => (
            <div key={o.city} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-amber-500/40 hover:bg-white/[0.06]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="eyebrow block !text-[0.62rem] text-amber-400">{o.role}</span>
                <span className="mt-1 block font-display text-lg font-bold text-white">{o.city}</span>
                <span className="block text-[0.85rem] text-white/55">{o.address}, UK</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo variant="light" />
          <p className="mt-6 max-w-sm text-[0.92rem] leading-relaxed">
            UK-based industrial supply and sourcing of original OEM and quality equivalent spare parts for cement, mining,
            steel, manufacturing and allied industries.
          </p>
          <ul className="mt-6 space-y-2.5 text-[0.92rem]">
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-white">
                <Mail className="h-4 w-4 text-amber-500" aria-hidden="true" /> Email our sales team
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="flex items-center gap-3 hover:text-white">
                <Phone className="h-4 w-4 text-amber-500" aria-hidden="true" /> {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <MessageCircle className="h-4 w-4 text-amber-500" aria-hidden="true" /> WhatsApp {site.phoneDisplay}
              </a>
            </li>
          </ul>
          <Link to="/request-quote" className={buttonClass('primary', 'mt-8')}>
            Request a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <FooterCol title="Company" className="lg:col-span-2">
          {navigation.map((n) => (
            <li key={n.to}>
              <Link to={n.to} className="hover:text-white">
                {n.label}
              </Link>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Products" className="lg:col-span-3">
          {categories.slice(0, 9).map((c) => (
            <li key={c.slug}>
              <Link to={`/products?category=${c.slug}`} className="hover:text-white">
                {c.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/products" className="text-amber-400 hover:text-amber-300">
              All products →
            </Link>
          </li>
        </FooterCol>

        <FooterCol title="Industries" className="lg:col-span-3">
          {industries.map((i) => (
            <li key={i.slug}>
              <Link to={`/industries#${i.slug}`} className="hover:text-white">
                {i.name}
              </Link>
            </li>
          ))}
          <li className="pt-3 text-[0.82rem] text-white/50">
            Markets served: {site.marketsServed.join(' · ')}
          </li>
        </FooterCol>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-6 text-[0.78rem] text-white/45 md:flex-row md:items-start md:justify-between">
          <p className="shrink-0">
            © {year} {site.name} · United Kingdom · All rights reserved.
          </p>
          <p className="max-w-2xl md:text-right">
            Brand names and trademarks belong to their respective owners and are used only to identify products
            and the equipment our parts fit. No affiliation or endorsement is implied.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, children, className = '' }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <h2 className="eyebrow mb-5 text-white">{title}</h2>
      <ul className="space-y-2.5 text-[0.92rem]">{children}</ul>
    </div>
  )
}
