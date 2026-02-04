'use client'

import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative h-[1300px] min-[1279px]:h-[1400px] flex items-center justify-center overflow-hidden">
      {/* Background – tmavá barva vždy */}
      <div className="absolute inset-0 z-0 bg-neutral-darkNavy">
        {/* Pozadí obrázek jen od 1400px – čistě CSS, žádný JS */}
        <div
          className="absolute inset-0 hidden min-[1279px]:block bg-no-repeat transition-transform duration-700 ease-out hover:scale-105"
          style={{
            backgroundImage: "url('/images/main_background2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 70%',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Přechod / overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-darkNavy/30 via-neutral-darkNavy/50 to-neutral-darkNavy/80 z-0" />
      </div>

      {/* Obsah – nadpis a tagline */}
      <div className="relative z-10 text-center max-w-4xl px-5 pb-32 pt-8 -mt-[250px]">
        <h1
          className="mb-4 mt-4 font-primary font-normal uppercase text-white tracking-wide leading-tight"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2.25rem, 5vw + 1.5rem, 79px)'
          }}
        >
          Luční Háj
        </h1>
        <p
          className="text-script mb-8 mt-2"
          style={{
            fontFamily: "'Allura', 'Brush Script MT', cursive",
            fontSize: 'clamp(1.75rem, 3vw + 1rem, 50px)',
            color: '#00D9B5'
          }}
        >
          Váš nový domov
        </p>

        {/* Obrázek pod nadpisem jen pod 1400px – čistě CSS */}
        <div className="mt-8 mb-8 w-full max-w-4xl mx-auto min-[1279px]:hidden">
          <Image
            src="/images/hero-bg2.webp"
            alt="Luční Háj - moderní bydlení"
            width={1200}
            height={400}
            className="w-full h-auto rounded-xl shadow-lg object-cover"
            style={{ maxHeight: 'min(400px, 50vh)' }}
            priority
          />
        </div>

        <div className="h-16" />
        <div className="hidden min-[1279px]:block h-32" />
        <div className="h-16" />
        <div className="h-24 mb-[228px]" />
      </div>

      {/* Přechod do další sekce */}
      <div
        className="absolute left-0 right-0 h-[488px] bg-gradient-to-b from-transparent via-neutral-darkNavy/50 to-neutral-darkNavy z-0"
        style={{ bottom: '488px' }}
      />
    </section>
  )
}

export default HeroSection
