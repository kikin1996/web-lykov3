'use client'

import Link from 'next/link'
import SEO from '../src/components/seo/SEO'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Stránka nenalezena"
        description="Požadovaná stránka nebyla nalezena."
        url="/404"
      />
      <div className="min-h-screen bg-[#F5F7FB] pt-20 pb-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-neutral-darkNavy mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-neutral-darkNavy mb-4">Stránka nenalezena</h2>
          <p className="text-neutral-mediumGray mb-8">
            Omlouváme se, ale požadovaná stránka neexistuje.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-primary-teal text-white rounded-lg hover:bg-primary-tealDark transition-colors"
          >
            Zpět na hlavní stránku
          </Link>
        </div>
      </div>
    </>
  )
}

