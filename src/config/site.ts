/**
 * ─────────────────────────────────────────────────────────────
 *  SITE SETTINGS — edit company details and contact info here.
 *  Every page, the header, footer and the quote form read from
 *  this one file, so a change here updates the whole website.
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  name: 'Allied Spare Solutions',
  tagline: 'UK-based industrial supply & sourcing partner',
  shortDescription:
    'UK-based industrial supply and sourcing company providing original OEM and quality equivalent spare parts, industrial requirements and raw materials to cement, mining, steel, manufacturing and allied industries.',

  // Change this to your real domain once it is connected in Vercel.
  // It is used for canonical links and social-share previews.
  // Also update the same domain in public/sitemap.xml and public/robots.txt.
  url: 'https://alliedsparesolutions.vercel.app',

  email: 'alliedsparesolutions@gmail.com',
  phoneDisplay: '+44 7503 691027',
  phoneHref: 'tel:+447503691027',
  // WhatsApp number in international format, digits only (no + or spaces)
  whatsappNumber: '447503691027',

  // UK-registered company. Office locations are shown in the header, footer,
  // About and Contact pages. Keep addresses short (area + postcode district).
  country: 'United Kingdom',
  headOffice: 'Birmingham, England',
  offices: [
    { city: 'Birmingham', role: 'Head Office', address: 'Colmore Row, Birmingham B3', region: 'West Midlands' },
    { city: 'London', role: 'Sales & Export Office', address: 'Bishopsgate, London EC2', region: 'Greater London' },
    { city: 'Manchester', role: 'Logistics Hub', address: 'Trafford Park, Manchester M17', region: 'Greater Manchester' },
  ],

  marketsServed: ['UK & Europe', 'Africa', 'Middle East', 'Asia'],
  sourcingRegions: ['China', 'Europe'],
} as const

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const mailtoLink = (subject?: string, body?: string) => {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const query = params.toString().replace(/\+/g, '%20')
  return `mailto:${site.email}${query ? `?${query}` : ''}`
}

/** Main navigation — order shown in the header. */
export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Brands', to: '/brands' },
  { label: 'Industries', to: '/industries' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/request-quote' },
] as const
