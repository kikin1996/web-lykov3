import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import Button from '../shared/Button'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
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
    { 
      path: '/patro/1', 
      label: 'Byty',
      dropdown: [
        { path: '/patro/1', label: 'Patro 1' },
        { path: '/patro/2', label: 'Patro 2' },
        { path: '/patro/3', label: 'Patro 3' },
        { path: '/patro/4', label: 'Patro 4' },
      ]
    },
    { path: '/galerie', label: 'Galerie' },
    { path: '/o-projektu', label: 'O projektu' },
    { path: '/o-nas', label: 'O nás' },
    { path: '/kontakt', label: 'Kontakt' },
  ]

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  const isDarkBackground =
    isScrolled || location.pathname !== '/'

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
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/photos/lucni_haj_logo.svg"
              alt="Luční háj"
              style={{ height: '40px', width: 'auto' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                <Link
                  to={link.path}
                  className={`text-xs font-normal font-secondary uppercase tracking-widest px-3 py-2 transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-primary-teal'
                      : 'text-white hover:text-primary-teal'
                  }`}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-large opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-3 text-sm text-neutral-darkNavy hover:bg-neutral-offWhite hover:text-primary-teal transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
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
          <div className="lg:hidden mt-4 pb-4 border-t border-white border-opacity-10">
            {navLinks.map((link) => (
              <div key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 text-xs font-normal font-secondary uppercase tracking-widest transition-colors ${
                    isActive(link.path) ? 'text-primary-teal' : 'text-white hover:text-primary-teal'
                  }`}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-4">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 text-sm text-white text-opacity-80 hover:text-primary-teal"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
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

