const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white border-0" style={{ border: 'none', borderTop: 'none', borderBottom: 'none' }}>
      <div className="container mx-auto px-5 lg:px-20" style={{ border: 'none' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-overline mb-4">O projektu</p>
            <h2 className="text-h1 mb-6">Ecohau Riverside</h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-body-large mb-6">
              Ecohau Riverside je moderní rezidenční bytový komplex navržený s důrazem na kvalitu, 
              udržitelnost a komfortní bydlení. Projekt se nachází v klidné lokalitě s výbornou 
              dopravní dostupností a blízkostí přírody.
            </p>
            <p className="text-body-regular mb-6">
              Každý byt je navržen s ohledem na maximální využití prostoru a denního světla. 
              Moderní architektura kombinuje elegantní design s funkčností a ekologickými řešeními.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-h3 mb-4">Výhody projektu</h3>
                <ul className="space-y-3 text-body-regular">
                  <li className="flex items-start">
                    <span className="text-primary-teal mr-3">✓</span>
                    <span>Moderní architektura a design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-teal mr-3">✓</span>
                    <span>Ekologické a udržitelné řešení</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-teal mr-3">✓</span>
                    <span>Výborná dopravní dostupnost</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-teal mr-3">✓</span>
                    <span>Prvotřídní vybavení a služby</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-h3 mb-4">Lokalita</h3>
                <p className="text-body-regular mb-4">
                  Projekt se nachází v klidné rezidenční čtvrti s výbornou infrastrukturou. 
                  V blízkosti najdete školy, obchody, restaurace a parky.
                </p>
                <p className="text-body-regular">
                  Výborná dopravní dostupnost do centra města a blízkost přírodních rezervací 
                  dělají z Ecohau Riverside ideální místo pro život.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

