import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../config/site'

interface SeoProps {
  title: string
  description: string
}

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Sets the page title, meta description, canonical URL and Open Graph tags. */
export default function Seo({ title, description }: SeoProps) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`
    const url = `${site.url}${pathname === '/' ? '' : pathname}`
    document.title = fullTitle
    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', url)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [title, description, pathname])

  return null
}
