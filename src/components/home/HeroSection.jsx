import { Link } from 'react-router-dom'
import Button from '../shared/Button'
import { useApp } from '../../context/AppContext'

const HeroSection = () => {
  const { showModal } = useApp()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 transition-transform duration-700 ease-out hover:scale-110"
          style={{ 
            backgroundImage: "url('/images/hero-bg.jpg?v=4')",
            backgroundSize: 'contain',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        {/* Dark overlay gradient - darker at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-darkNavy/30 via-neutral-darkNavy/50 to-neutral-darkNavy/80 z-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-5 pb-32" style={{ paddingTop: '80px' }}>
        <h1 className="text-hero mb-4 mt-4">
          Luční Háj
        </h1>
        <p className="text-script mb-8 mt-2">
          Váš nový domov
        </p>
        
        {/* First part of empty space */}
        <div className="h-16"></div>
        
        {/* Scroll Indicator - enlarged */}
        <div className="flex justify-center">
          <img
            src="/images/scroll-button.png"
            alt="Scroll indicator"
            className="w-32 h-32 object-contain animate-bounce-custom"
          />
        </div>
        
        {/* Second part of empty space */}
        <div className="h-32"></div>
        
        {/* Third part of empty space */}
        <div className="h-16"></div>
        
        {/* Empty space instead of scroll indicator */}
        <div className="h-24" style={{ marginBottom: '228px' }}></div>




      </div>

      {/* Gradient Transition to Next Section - stronger gradient */}
      <div className="absolute left-0 right-0 h-[488px] bg-gradient-to-b from-transparent via-neutral-darkNavy/50 to-neutral-darkNavy z-0" style={{ bottom: '488px' }}></div>
    </section>
  )
}

export default HeroSection

