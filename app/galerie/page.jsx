'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { getAllImages, getImagesByCategory } from '../../src/services/galleryService'
import GalleryGrid from '../../src/components/gallery/GalleryGrid'
import Lightbox from '../../src/components/gallery/Lightbox'
import SEO from '../../src/components/seo/SEO'
import StructuredData from '../../src/components/seo/StructuredData'

export default function GalleryPage() {
  const [images, setImages] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [loading, setLoading] = useState(true)

  const categories = [
    { value: 'all', label: 'Všechny' },
    { value: 'exterior', label: 'Exteriér' },
    { value: 'bungalov-interier', label: 'Interiér Bungalov' },
    { value: 'dvojdomek-interier', label: 'Interiér Dvojdomek' },
    { value: 'location', label: 'Okolí' },
  ]

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true)
      const data = selectedCategory === 'all'
        ? await getAllImages()
        : await getImagesByCategory(selectedCategory)
      setImages(data)
      setLoading(false)
    }
    loadImages()
  }, [selectedCategory])

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Fotogalerie projektu Luční Háj",
    "description": "Prohlédněte si fotografie exteriéru, interiéru a vybavení projektu Luční Háj. Galerie obsahuje vizualizace domů, interiéry bytů a okolí projektu.",
    "url": "https://domypecerady.cz/galerie"
  }

  return (
    <>
      <SEO
        title="Fotogalerie"
        description="Prohlédněte si fotografie exteriéru, interiéru a vybavení projektu Luční Háj. Galerie obsahuje vizualizace domů, interiéry bytů a okolí projektu."
        keywords="galerie, fotografie, interiér, exteriér, vizualizace, Luční Háj, Týnec nad Sázavou"
        image="/images/gallery_main.jpg"
        url="/galerie"
      />
      <StructuredData data={structuredData} />
      <div className="min-h-screen bg-[#F5F7FB] pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-white rounded-[28px] border border-slate-200/70 shadow-[0_20px_60px_rgba(15,23,42,0.08)] overflow-hidden">
            <div className="px-6 md:px-10 py-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                  <Image
                    src="/images/gallery_main.jpg"
                    alt="Fotogalerie projektu Luční Háj"
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 border border-slate-200/70">
                      Galerie
                    </span>
                  </div>

                  <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6 font-serif">
                    Fotogalerie projektu
                  </h1>

                  <p className="text-slate-600 text-base lg:text-lg leading-7">
                    Prohlédněte si fotografie exteriéru, interiéru a vybavení projektu Luční háj.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 mb-10" />

              <div className="flex flex-wrap gap-3 justify-center mb-10">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`px-6 py-2 rounded-md transition-all duration-300 text-sm font-medium ${
                      selectedCategory === category.value
                        ? 'bg-[#00D9B5] text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/70'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              {loading ? (
                <div className="text-center py-20">
                  <p className="text-slate-600">Načítání...</p>
                </div>
              ) : (
                <>
                  <GalleryGrid images={images} onImageClick={setSelectedImage} />
                  {selectedImage && (
                    <Lightbox
                      images={images}
                      currentIndex={images.findIndex(img => img.id === selectedImage.id)}
                      onClose={() => setSelectedImage(null)}
                      onNavigate={(index) => setSelectedImage(images[index])}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


