const ProjectIntroSection = () => {
  return (
    <section className="py-20 bg-neutral-darkNavy relative -mt-32 pt-32">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left">
            <p className="text-overline mb-4 text-white">ECOHAU RIVERSIDE</p>
            <h2 className="text-h1 mb-6 leading-tight" style={{ color: '#FFFFFF' }}>
              NEJLEPŠÍ
              <br />
              EKOLOGICKÁ
              <br />
              MĚSTSKÁ OBLAST
              <br />
              V PRAZE
            </h2>
            <div className="space-y-4 text-body-regular text-white text-opacity-80 mb-6">
              <p>
                S filozofií udržitelného rozvoje prosperujícího sídliště s romantickým dechem 
                a krásou v harmonii s přírodou ve stylu benátského města v Itálii. Podél řeky 
                v Praze.
              </p>
              <p>
                Ecohau Riverside je moderní rezidenční bytový komplex navržený s důrazem na 
                kvalitu, udržitelnost a komfortní bydlení. Projekt se nachází v klidné lokalitě 
                s výbornou dopravní dostupností a blízkostí přírody.
              </p>
            </div>
          </div>

          {/* Right Side - Tilted Image */}
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
                <div className="w-full h-full bg-gradient-to-br from-primary-teal/20 via-neutral-darkSlate to-primary-teal/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-white text-opacity-60 text-sm mb-2">Obrázek projektu</p>
                    <p className="text-white text-opacity-40 text-xs">
                      Moderní budovy podél řeky
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element Behind Image */}
            <div className="absolute -left-8 -bottom-8 w-full h-full bg-neutral-darkSlate rounded-xl opacity-30 -z-10 transform rotate-[-2deg]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectIntroSection

