'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Lightbox from '../gallery/Lightbox'

const ProjectIntroSection = () => {
  const [showImage, setShowImage] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1251px)')
    
    const updateDisplay = () => {
      setShowImage(mediaQuery.matches)
    }
    
    updateDisplay()
    mediaQuery.addEventListener('change', updateDisplay)
    
    return () => {
      mediaQuery.removeEventListener('change', updateDisplay)
    }
  }, [])

  return (
    <section className="bg-neutral-darkNavy relative pt-4 md:pt-8 pb-16 md:pb-20 min-[1279px]:pt-[170px] min-[1279px]:-mt-[488px]">
      <div className="container mx-auto px-5 lg:px-20">
        <div className={`grid grid-cols-1 ${showImage ? 'grid-cols-2' : ''} gap-12 items-center`}>
          {/* Left Side - Text Content */}
          <div className="text-left">
            <p className="text-overline mb-4 text-white">TÝNEC NAD SÁZAVOU</p>
            <h2
              className="mb-6 leading-tight font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ color: '#FFFFFF' }}
            >
              Moderní bydlení v
              <br />
              harmonii s přírodou
            </h2>
            <div className="space-y-4 text-lg text-white/95 mb-6 hidden md:block">
              <p>
                Projekt Luční háj vzniká v klidné obci Pecerady, jen pár minut od Týnce nad Sázavou –
                na místě, kde má krajina Posázaví stále svůj přirozený rytmus. Moderní architektura zde
                citlivě navazuje na okolní přírodu, lesy a blízkost řeky Sázavy a vytváří prostor
                pro skutečně klidné bydlení.
              </p>
              <p>
                Luční háj je určen pro ty, kteří chtějí po návratu domů zpomalit, nadechnout se a mít
                soukromí i přírodu doslova za dveřmi. Zároveň nabízí moderní technologie, kvalitní
                provedení a dlouhodobě úsporné řešení pro pohodlný každodenní život.
              </p>
            </div>
          </div>

          {/* Right Side - Tilted Image */}
          {showImage && (
          <div className="relative">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="topographic" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <circle cx="50" cy="50" r="2" fill="white" opacity="0.3" />
                    <path d="M 0 50 Q 25 30, 50 50 T 100 50" stroke="white" strokeWidth="1" fill="none" opacity="0.2" />
                    <path d="M 0 30 Q 25 50, 50 30 T 100 30" stroke="white" strokeWidth="1" fill="none" opacity="0.2" />
                    <path d="M 0 70 Q 25 50, 50 70 T 100 70" stroke="white" strokeWidth="1" fill="none" opacity="0.2" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#topographic)" />
              </svg>
            </div>

            {/* Tilted Image Container */}
            <div className="relative transform rotate-3 hover:rotate-2 transition-transform duration-300">
              <div className="rounded-xl overflow-hidden shadow-large">
                <button
                  type="button"
                  onClick={() => {
                    setLightboxIndex(0)
                    setLightboxOpen(true)
                  }}
                  aria-label="Otevřít obrázek v plné velikosti"
                  className="block w-full cursor-zoom-in"
                >
                  <Image
                    src="/images/main_photo_2.jpg"
                    alt="Vizualizace bungalovu Luční háj"
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </button>
              </div>
            </div>

            {/* Decorative Element Behind Image */}
            <div className="absolute -left-8 -bottom-8 w-full h-full bg-neutral-darkSlate rounded-xl opacity-30 -z-10 transform rotate-[-2deg]"></div>
          </div>
          )}
        </div>

        {lightboxOpen && (
          <Lightbox
            images={[
              {
                url: '/images/main_photo_2.jpg',
                caption: 'Vizualizace bungalovu Luční háj'
              }
            ]}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxOpen(false)}
            onNavigate={(index) => setLightboxIndex(index)}
          />
        )}
      </div>

    </section>
  )
}

export default ProjectIntroSection

