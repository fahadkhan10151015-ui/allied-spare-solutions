/**
 * Company logo: an amber gradient tile with a stylised "A" whose crossbar is a
 * hex bolt head, plus the ALLIED / SPARE SOLUTIONS wordmark.
 * To use your own logo file instead, put it in src/assets/ and replace
 * <LogoMark /> below with:  <img src={myLogo} alt="" className="h-10 w-auto" />
 */
interface LogoProps {
  variant?: 'light' | 'dark' // light = for dark backgrounds
  className?: string
}

export function LogoMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="as-logo-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffc15e" />
          <stop offset="0.55" stopColor="#f59a23" />
          <stop offset="1" stopColor="#d9700c" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="42" height="42" rx="11" fill="url(#as-logo-bg)" />
      <path d="M1 30c10-2 26-9 42-22v8C29 27 13 33 1 34z" fill="#fff" opacity="0.14" />
      <path
        d="M11.5 33 22 10.5 32.5 33"
        fill="none"
        stroke="var(--color-navy-950)"
        strokeWidth="4.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m22 21.4 4.3 2.5v5l-4.3 2.5-4.3-2.5v-5z" fill="var(--color-navy-950)" />
      <circle cx="22" cy="26.4" r="1.5" fill="#f8ad4a" />
    </svg>
  )
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const main = variant === 'light' ? 'text-white' : 'text-navy-900'
  const sub = variant === 'light' ? 'text-amber-400/90' : 'text-steel-600'
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.25rem] font-extrabold tracking-[0.06em] ${main}`}>
          ALLIED
          <span className="ml-1.5 inline-block translate-y-[-2px] rounded-[4px] border border-current/30 px-1 py-[1px] align-middle font-mono text-[0.5rem] font-semibold tracking-[0.12em] opacity-70">
            UK
          </span>
        </span>
        <span className={`mt-1.5 font-mono text-[0.58rem] font-medium tracking-[0.24em] ${sub}`}>SPARE SOLUTIONS</span>
      </span>
    </span>
  )
}
