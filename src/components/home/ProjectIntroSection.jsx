'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const ProjectIntroSection = () => {
  const [showImage, setShowImage] = useState(false)

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
    <section className="py-20 bg-neutral-darkNavy relative -mt-[488px] pt-16">
      <div className="container mx-auto px-5 lg:px-20">
        <div className={`grid grid-cols-1 ${showImage ? 'grid-cols-2' : ''} gap-12 items-center`}>
          {/* Left Side - Text Content */}
          <div className="text-left">
            <p className="text-overline mb-4 text-white">TÝNEC NAD SÁZAVOU</p>
            <h2 className="text-h1 mb-6 leading-tight" style={{ color: '#FFFFFF' }}>
              Moderní bydlení v
              <br />
              harmonii s přírodou
            </h2>
            <div className="space-y-4 text-body-regular text-white mb-6 hidden md:block">
              <p>
                Projekt Luční háj přináší klidné a komfortní bydlení v jedné z nejžádanějších
                lokalit středních Čech – Týnec nad Sázavou. Spojuje moderní stavební technologie,
                důraz na kvalitu provedení a výjimečnou polohu v blízkosti řeky Sázavy, lesů
                a turistických tras.
              </p>
              <p>
                Bydlení je navrženo pro ty, kteří hledají ticho, soukromí a dlouhodobě úsporný
                domov, a zároveň chtějí mít přírodu doslova za dveřmi.
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
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-large">
                <Image
                  src="/images/bungalov_hero.jpg"
                  alt="Vizualizace bungalovu Luční háj"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative Element Behind Image */}
            <div className="absolute -left-8 -bottom-8 w-full h-full bg-neutral-darkSlate rounded-xl opacity-30 -z-10 transform rotate-[-2deg]"></div>
          </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProjectIntroSection

