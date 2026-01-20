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
                Highest Results Comes From
                <br />
                Better Workplaces.
              </h2>
              <p className="text-body-regular text-neutral-mediumGray max-w-xl">
                We offer a range of workplace services from office relocation, office design,
                office fit out, office refurbishment to workplace consultancy services.
              </p>
            </div>

            {/* Image column – stylizovaný tvar podle vzoru */}
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Hlavní obrázek bez rámu */}
              <div className="relative overflow-hidden z-10">
                <img
                  src="/images/hero_photo.png"
                  alt="Modern office interior"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    if (e.target.nextElementSibling) {
                      e.target.nextElementSibling.style.display = 'flex'
                    }
                  }}
                />
                {/* Fallback, když obrázek neexistuje */}
                <div className="hidden w-full aspect-[16/9] items-center justify-center bg-gradient-to-br from-neutral-lightGray to-neutral-offWhite">
                  <p className="text-neutral-mediumGray text-sm">
                    Office hero image
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Sekce WORK IN PROGRESS se třemi obrázky */}
      <section className="pt-20 pb-32 bg-neutral-offWhite">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-neutral-mediumGray">WORK IN</span>{' '}
              <span className="text-neutral-darkNavy">PROGRESS</span>
            </h2>
            <p className="text-body-regular text-neutral-mediumGray max-w-2xl mx-auto">
              You can download our brochure about us and our working methods from this link. We are innovative and...
            </p>
          </div>

          {/* Tři obrázky vedle sebe */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* První obrázek */}
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-medium hover:shadow-large transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/work-progress-1.jpg"
                  alt="Modern office space"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    if (e.target.nextElementSibling) {
                      e.target.nextElementSibling.style.display = 'flex'
                    }
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-neutral-lightGray to-neutral-offWhite">
                  <p className="text-neutral-mediumGray text-sm">Office space image</p>
                </div>
              </div>
            </div>

            {/* Druhý obrázek */}
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-medium hover:shadow-large transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/work-progress-2.jpg"
                  alt="Music Hall"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    if (e.target.nextElementSibling) {
                      e.target.nextElementSibling.style.display = 'flex'
                    }
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-neutral-lightGray to-neutral-offWhite">
                  <p className="text-neutral-mediumGray text-sm">Music Hall image</p>
                </div>
              </div>
            </div>

            {/* Třetí obrázek */}
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-medium hover:shadow-large transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/work-progress-3.jpg"
                  alt="Modern living space"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    if (e.target.nextElementSibling) {
                      e.target.nextElementSibling.style.display = 'flex'
                    }
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-neutral-lightGray to-neutral-offWhite">
                  <p className="text-neutral-mediumGray text-sm">Living space image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default InteractiveBuilding

