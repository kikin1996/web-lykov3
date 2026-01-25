'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useApp } from '../../context/AppContext'
import Button from '../shared/Button'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { showModal } = useApp()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Domů' },
    { path: '/vyber-domu', label: 'Výběr domu' },
    { path: '/galerie', label: 'Galerie' },
    { path: '/standardy', label: 'Standardy' },
    { path: '/aktuality', label: 'Aktuality' },
    { path: '/kontakt', label: 'Kontakt' },
  ]

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(path)
  }

  const isDarkBackground =
    isScrolled || pathname !== '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkBackground
          ? 'bg-neutral-darkNavy bg-opacity-95 backdrop-blur-md border-b border-white border-opacity-10'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-5 lg:px-20 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/photos/lucni_haj_logo.svg"
              alt="Luční háj"
              width={120}
              height={40}
              style={{ height: '40px', width: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                <Link
                  href={link.path}
                  className={`text-xs font-normal font-secondary uppercase tracking-widest px-3 py-2 transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-primary-teal'
                      : 'text-white hover:text-primary-teal'
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => showModal('tour')}
              className="text-xs font-normal font-secondary uppercase tracking-widest px-4 py-2 border border-white text-white hover:bg-white hover:text-neutral-darkNavy transition-all duration-300"
            >
              Naplánovat návštěvu
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white border-opacity-10 bg-neutral-darkNavy bg-opacity-95 backdrop-blur-md -mx-5 lg:-mx-20 px-5 lg:px-20 -mb-5 lg:-mb-20">
            {navLinks.map((link) => (
              <div key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 text-xs font-normal font-secondary uppercase tracking-widest transition-colors ${
                    isActive(link.path) ? 'text-primary-teal' : 'text-white hover:text-primary-teal'
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            ))}
            <div className="mt-4">
              <button
                onClick={() => {
                  showModal('tour')
                  setIsMobileMenuOpen(false)
                }}
                className="w-full text-xs font-normal font-secondary uppercase tracking-widest px-4 py-2 border border-white text-white hover:bg-white hover:text-neutral-darkNavy transition-all duration-300"
              >
                Naplánovat návštěvu
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header


