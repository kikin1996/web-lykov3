import Image from 'next/image'

const InteractiveBuilding = () => {
  return (
    <>
      <section
        id="building"
        className="py-24 bg-neutral-offWhite -mt-12 border-0 relative z-10"
        style={{ border: 'none', borderTop: 'none', borderBottom: 'none' }}
      >
        <div className="container mx-auto px-5 lg:px-20" style={{ border: 'none' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text column */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-neutral-darkNavy">
                <span className="block mb-4">Nejlepších výsledků</span>
                <span className="block mb-4">dosáhnete</span>
                <span className="block">v lepším prostředí.</span>
              </h2>
              <p className="text-body-regular text-neutral-mediumGray max-w-xl">
                Interiéry jsou připravené pro všechny vaše velké představy a plány.
              </p>
            </div>

            {/* Image column – stylizovaný tvar podle vzoru */}
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Hlavní obrázek bez rámu */}
              <div className="relative overflow-hidden z-10">
                <Image
                  src="/images/hero_photo.png"
                  alt="Modern office interior"
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Sekce WORK IN PROGRESS se třemi obrázky */}
      <section className="pt-20 pb-32 bg-neutral-offWhite">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-neutral-darkNavy">
              Interiér, co pohladí na duši
            </h2>
            <p className="text-body-regular text-neutral-mediumGray max-w-2xl mx-auto">
              Prohlédněte si návrhy interiéru, které máme pro vás připravené, a nechte se inspirovat.
            </p>
          </div>

          {/* Tři obrázky vedle sebe */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* První obrázek */}
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-medium hover:shadow-large transition-shadow">
              <div className="aspect-[4/3] overflow-hidden group">
                <Image
                  src="/images/work-progress-1.jpg"
                  alt="Modern office space"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* Druhý obrázek */}
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-medium hover:shadow-large transition-shadow">
              <div className="aspect-[4/3] overflow-hidden group">
                <Image
                  src="/images/work-progress-2.jpg"
                  alt="Music Hall"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* Třetí obrázek */}
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-medium hover:shadow-large transition-shadow">
              <div className="aspect-[4/3] overflow-hidden group">
                <Image
                  src="/images/work-progress-3.jpg"
                  alt="Modern living space"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default InteractiveBuilding

