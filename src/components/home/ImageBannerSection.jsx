import Image from 'next/image'

const ImageBannerSection = () => {
  return (
    <>
      <section className="relative w-full h-[150px] md:h-[300px] overflow-hidden mt-4 md:mt-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/images/bungalow_wide_shot.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>
        </div>

        {/* Text Overlay - positioned at bottom */}
        <div className="relative z-10 h-full flex items-end justify-start pb-2 md:pb-12">
          <div className="container mx-auto px-5 lg:px-20">
            <div className="max-w-4xl">
              <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
                Promyšlené dispozice
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Duplikovaná sekce "Nejlepších výsledků" */}
      <section className="pt-16 md:pt-48 pb-24 md:pb-16 bg-white">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Fotka - nyní vlevo */}
            <div className="relative w-full max-w-2xl mx-auto mt-16 md:mt-0">
              <div className="relative overflow-hidden z-10 rounded-xl group">
                <Image
                  src="/images/pohled na dum/PA_L.jpg"
                  alt="Rodinný dům v projektu Luční Háj - moderní architektura v klidném prostředí"
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </div>
            {/* Text - nyní vpravo */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-neutral-darkNavy">
                Místo do kterého se zamilujete
              </h2>
              <p className="text-body-regular text-neutral-mediumGray max-w-xl">
                Kvalitní bydlení s výjimečným designem a prvotřídním vybavením v klidném prostředí.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ImageBannerSection

