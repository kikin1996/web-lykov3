import Card from '../shared/Card'
import { amenities } from './AmenitiesSection'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white border-0 hidden md:block" style={{ border: 'none', borderTop: 'none', borderBottom: 'none' }}>
      <div className="container mx-auto px-5 lg:px-20" style={{ border: 'none' }}>
        <div className="max-w-7xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* Sekce Standardy stavby */}
            <section className="mt-16">
              <div className="text-center mb-12">
                <p className="text-overline mb-4">Standardy</p>
                <h2 className="mb-6 leading-tight font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-darkNavy">
                  Standardy stavby
                </h2>
                <p className="text-body-large max-w-2xl mx-auto">
                  Základní technické parametry a vybavení, které zajišťují kvalitu,
                  úspornost a dlouhodobý komfort bydlení v projektu Luční Háj.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 hidden md:grid">
                {amenities.map((amenity, index) => (
                  <Card key={index} hover className="overflow-hidden">
                    <div className="rounded-2xl overflow-hidden border border-slate-200/70 h-[220px]">
                      <img
                        src={amenity.image}
                        alt={amenity.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          if (e.target.nextElementSibling) {
                            e.target.nextElementSibling.style.display = 'flex'
                          }
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-primary-teal/10 to-primary-teal/5 hidden items-center justify-center">
                        <span className="text-neutral-mediumGray text-sm">{amenity.title}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-h3 mb-3">{amenity.title}</h3>
                      <p className="text-body-regular text-neutral-mediumGray">
                        {amenity.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

