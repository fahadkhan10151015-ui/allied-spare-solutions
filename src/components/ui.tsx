import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost-light' | 'ghost-dark'

const base =
  'group inline-flex shrink-0 whitespace-nowrap items-center justify-center gap-2 rounded-lg px-5 py-3 text-[0.92rem] font-semibold tracking-[0.01em] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary: 'bg-amber-500 text-navy-950 hover:bg-amber-400 shadow-[0_1px_0_rgb(0_0_0/0.15)]',
  secondary: 'bg-navy-900 text-white hover:bg-navy-700',
  'ghost-light': 'border border-white/30 text-white hover:border-white hover:bg-white/5',
  'ghost-dark': 'border border-navy-900/25 text-navy-900 hover:border-navy-900 hover:bg-navy-900/[0.03]',
}

export const buttonClass = (variant: Variant = 'primary', extra = '') =>
  `${base} ${variants[variant]} ${extra}`

export function ButtonLink({
  variant = 'primary',
  className = '',
  ...props
}: LinkProps & { variant?: Variant }) {
  return <Link {...props} className={buttonClass(variant, className)} />
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'dark',
  action,
}: {
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
  tone?: 'dark' | 'light' // light = on dark background
  action?: ReactNode
}) {
  const center = align === 'center'
  return (
    <div
      className={`mb-10 flex flex-col gap-6 md:mb-14 ${
        center ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'
      }`}
    >
      <div className={center ? 'max-w-2xl' : 'max-w-2xl'}>
        {eyebrow && (
          <p
            className={`eyebrow mb-4 flex items-center gap-3 ${center ? 'justify-center' : ''} ${
              tone === 'light' ? 'text-amber-400' : 'text-steel-600'
            }`}
          >
            <span className="h-px w-8 bg-amber-500" aria-hidden="true" />
            {eyebrow}
          </p>
        )}
        <h2
          className={`text-3xl leading-[1.1] font-bold sm:text-[2.5rem] ${
            tone === 'light' ? 'text-white' : 'text-navy-900'
          }`}
        >
          {title}
        </h2>
        {intro && (
          <p
            className={`mt-5 text-[1.05rem] leading-relaxed ${
              tone === 'light' ? 'text-white/70' : 'text-muted'
            }`}
          >
            {intro}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}

/** Photo with a navy fallback tile so the layout still looks right if an image fails to load. */
export function Photo({
  src,
  alt,
  className = '',
  imgClassName = '',
  position,
  eager = false,
}: {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  position?: string
  eager?: boolean
}) {
  return (
    <div className={`img-tile overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={eager ? 'high' : undefined}
        style={position ? { objectPosition: position } : undefined}
        className={`h-full w-full object-cover ${imgClassName}`}
        onError={(e) => {
          e.currentTarget.style.visibility = 'hidden'
        }}
      />
    </div>
  )
}
