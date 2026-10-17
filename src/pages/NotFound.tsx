import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import { ButtonLink } from '../components/ui'

export default function NotFound() {
  return (
    <section className="blueprint-light bg-paper py-28">
      <Seo title="Page not found" description="The page you are looking for could not be found." />
      <div className="container-site max-w-2xl text-center">
        <p className="font-mono text-sm tracking-[0.2em] text-steel-600">ERROR 404</p>
        <h1 className="mt-4 text-4xl font-bold text-navy-900 sm:text-5xl">This page could not be found</h1>
        <p className="mt-5 text-muted">The link may be out of date. Try the product catalogue, or send us your requirement directly.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink to="/">Back to home</ButtonLink>
          <ButtonLink to="/products" variant="ghost-dark">
            Browse products <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
