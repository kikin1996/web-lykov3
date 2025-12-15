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
          className="absolute inset-0"
          style={{ 
            backgroundImage: "url('/images/hero-bg.jpg?v=2')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        {/* Dark overlay gradient - darker at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-darkNavy/30 via-neutral-darkNavy/50 to-neutral-darkNavy/80 z-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-5 pb-32" style={{ paddingTop: '228px' }}>
        <div className="inline-block mb-6 px-6 py-2 border border-white rounded text-sm font-normal text-white uppercase tracking-widest">
          Rezidenční
        </div>
        <h1 className="text-hero mb-4">
          ECOHAU<br />RIVERSIDE
        </h1>
        <p className="text-script mb-8">
          Váš nový domov
        </p>
        
        {/* Scroll Indicator */}
        <div className="flex justify-center" style={{ marginBottom: '228px' }}>
          <img
            src="/images/scroll-button.png"
            alt="Scroll indicator"
            className="w-24 h-24 object-contain animate-bounce-custom"
          />
        </div>
      </div>

      {/* Gradient Transition to Next Section - stronger gradient */}
      <div className="absolute left-0 right-0 h-80 bg-gradient-to-b from-transparent via-neutral-darkNavy/90 to-neutral-darkNavy z-0" style={{ bottom: '0px' }}></div>
    </section>
  )
}

export default HeroSection

