import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

// Inner pages load on demand so the home page downloads less JavaScript.
const Products = lazy(() => import('./pages/Products'))
const Brands = lazy(() => import('./pages/Brands'))
const Industries = lazy(() => import('./pages/Industries'))
const About = lazy(() => import('./pages/About'))
const RequestQuote = lazy(() => import('./pages/RequestQuote'))
const NotFound = lazy(() => import('./pages/NotFound'))

const page = (el: React.ReactNode) => <Suspense fallback={<div className="min-h-[60vh]" />}>{el}</Suspense>

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={page(<Products />)} />
        <Route path="brands" element={page(<Brands />)} />
        <Route path="industries" element={page(<Industries />)} />
        <Route path="about" element={page(<About />)} />
        <Route path="request-quote" element={page(<RequestQuote />)} />
        <Route path="contact" element={<Navigate to="/request-quote" replace />} />
        <Route path="*" element={page(<NotFound />)} />
      </Route>
    </Routes>
  )
}
