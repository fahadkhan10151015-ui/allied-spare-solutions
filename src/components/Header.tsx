import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Mail, Phone, Menu, X, ArrowRight, MessageCircle, MapPin, Clock } from 'lucide-react'
import Logo from './Logo'
import { buttonClass } from './ui'
import { navigation, site, whatsappLink } from '../config/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="relative hidden overflow-hidden bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white/75 md:block">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" aria-hidden="true" />
        <div className="container-site flex h-10 items-center justify-between text-[0.8rem]">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] py-0.5 pr-2.5 pl-1 text-[0.72rem] font-semibold text-white">
              <UkFlag />
              UK Based
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
              {site.headOffice}
            </span>
            <span className="hidden items-center gap-1.5 lg:inline-flex">
              <Clock className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
              Mon–Fri · 08:30–17:30 GMT
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              title="WhatsApp"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06] ring-1 ring-white/15 transition-colors hover:bg-emerald-500 hover:text-white hover:ring-emerald-400"
            >
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email us"
              title="Email us"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-navy-950 transition-colors hover:bg-amber-400"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b bg-white/90 backdrop-blur-xl transition-shadow ${
          scrolled ? 'border-line shadow-[0_6px_24px_-12px_rgb(7_19_36/0.25)]' : 'border-transparent'
        }`}
      >
        <div className="container-site flex h-[4.5rem] items-center justify-between gap-6">
          <Link to="/" aria-label={`${site.name} — home`} className="shrink-0">
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `relative block px-3.5 py-2 text-[0.92rem] font-medium transition-colors after:absolute after:inset-x-3.5 after:-bottom-[1px] after:h-[2px] after:origin-left after:bg-amber-500 after:transition-transform ${
                        isActive
                          ? 'text-navy-900 after:scale-x-100'
                          : 'text-muted hover:text-navy-900 after:scale-x-0 hover:after:scale-x-100'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Link to="/request-quote" className={buttonClass('primary', '!py-2.5')}>
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-navy-900 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-[4.5rem] bottom-0 md:top-[7rem] overflow-y-auto bg-navy-950 text-white lg:hidden"
      >
        <nav aria-label="Mobile" className="container-site py-6">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {navigation.map((item, i) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-4 font-display text-xl font-semibold ${
                      isActive ? 'text-amber-400' : 'text-white'
                    }`
                  }
                >
                  <span>
                    <span className="mr-4 font-mono text-xs text-white/40">0{i + 1}</span>
                    {item.label}
                  </span>
                  <ArrowRight className="h-4 w-4 text-white/40" aria-hidden="true" />
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/request-quote" className={buttonClass('primary', 'mt-8 w-full')}>
            Request a Quote
          </Link>
          <div className="mt-8 space-y-3 text-white/75">
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-amber-500" aria-hidden="true" /> {site.headOffice}, United Kingdom
            </p>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-amber-500" aria-hidden="true" /> Email us
            </a>
            <a href={site.phoneHref} className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-amber-500" aria-hidden="true" /> {site.phoneDisplay}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <MessageCircle className="h-4 w-4 text-amber-500" aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

function UkFlag() {
  return (
    <svg viewBox="0 0 60 30" className="h-3.5 w-[1.4rem] rounded-full" aria-hidden="true" focusable="false">
      <clipPath id="uk-t">
        <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
      </clipPath>
      <path d="M0 0v30h60V0z" fill="#012169" />
      <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
      <path d="M0 0l60 30m0-30L0 30" clipPath="url(#uk-t)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  )
}
