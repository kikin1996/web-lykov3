'use client'

import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative pt-16 pb-2 sm:pt-20 sm:pb-20 min-[1279px]:h-[1600px] flex items-center justify-center overflow-hidden">
      {/* Background – tmavá barva vždy */}
      <div className="absolute inset-0 z-0 bg-neutral-darkNavy">
        {/* Pozadí obrázek jen od 1279px – přes CSS třídu */}
        <div className="absolute inset-0 hidden min-[1279px]:block bg-no-repeat transition-transform duration-700 ease-out hover:scale-105 hero-main-bg" />
        {/* Přechod / overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-darkNavy/30 via-neutral-darkNavy/50 to-neutral-darkNavy/80 z-0" />
      </div>

      {/* Obsah – nadpis a tagline */}
      <div className="relative z-10 text-center max-w-4xl px-5 pb-0 pt-12 sm:pt-32 md:pt-32 lg:pt-20 min-[1279px]:pt-8 min-[1279px]:-mt-[550px]">
        <h1
          className="mb-0 mt-4 font-primary font-normal uppercase text-white tracking-wide leading-tight"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            // Větší, ale stále responzivní podle šířky
            fontSize: 'clamp(2.86rem, 6.5vw + 1.56rem, 104px)'
          }}
        >
          Luční Háj
        </h1>
        <p
          className="mb-0"
          style={{
            fontFamily: "'Allura', 'Brush Script MT', cursive",
            // Vizuálně téměř „na sobě“ s H1
            fontSize: 'clamp(1.82rem, 4.2vw + 0.9rem, 55px)',
            color: '#00D9B5',
            marginTop: '-0.6rem'
          }}
        >
          Váš nový domov
        </p>

        {/* Obrázek pod nadpisem jen pod 1400px – čistě CSS */}
        <div className="mt-8 mb-8 w-full max-w-4xl mx-auto min-[1279px]:hidden">
          <Image
            src="/images/main_background_mobile2.jpg"
            alt="Luční Háj - moderní bydlení"
            width={1200}
            height={400}
            className="w-full h-auto rounded-xl shadow-lg object-cover"
            style={{ maxHeight: 'min(400px, 50vh)' }}
            priority
          />
        </div>

        {/* Spodní mezera před další sekcí – co nejmenší na mobilech */}
        <div className="h-2 sm:h-4 min-[1279px]:h-16" />
        <div className="hidden min-[1279px]:block h-32" />
        <div className="h-2 sm:h-4 min-[1279px]:h-16" />
        <div className="mb-4 sm:mb-6 min-[1279px]:h-24 min-[1279px]:mb-[228px]" />
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
