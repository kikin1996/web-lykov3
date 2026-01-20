import { useEffect, useState } from 'react'
import { getAllImages, getImagesByCategory } from '../services/galleryService'
import GalleryGrid from '../components/gallery/GalleryGrid'
import Lightbox from '../components/gallery/Lightbox'

const GalleryPage = () => {
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

  const [allImages, setAllImages] = useState([])

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

  useEffect(() => {
    const loadAllImages = async () => {
      const data = await getAllImages()
      setAllImages(data)
    }
    loadAllImages()
  }, [])

  const heroImage = allImages.length > 0 ? allImages[0] : null

  return (
    <div className="min-h-screen bg-[#F5F7FB] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Jeden hlavní bílý box */}
        <div className="bg-white rounded-[28px] border border-slate-200/70 shadow-[0_20px_60px_rgba(15,23,42,0.08)] overflow-hidden">
          <div className="px-6 md:px-10 py-10">
            {/* Hero sekce - 2 sloupce jako Kontakt */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
              {/* Levý sloupec - hero foto */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
                <img
                  src={heroImage?.url || heroImage?.thumbnail || '/images/gallery/exterior-1.jpg' || '/images/hero-bg2.webp'}
                  alt={heroImage?.caption || 'Fotogalerie projektu'}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Pokud selže první obrázek, zkus fallback
                    if (e.target.src !== '/images/hero-bg2.webp') {
                      e.target.src = '/images/hero-bg2.webp'
                    } else {
                      e.target.style.display = 'none'
                      if (e.target.nextElementSibling) {
                        e.target.nextElementSibling.classList.remove('hidden')
                        e.target.nextElementSibling.classList.add('flex')
                      }
                    }
                  }}
                />
                {/* Gradient placeholder - zobrazí se jen pokud selže i fallback */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 hidden items-center justify-center">
                  <p className="text-slate-400 text-sm">Obrázek galerie</p>
                </div>
              </div>

              {/* Pravý sloupec - texty */}
              <div className="flex flex-col justify-center">
                {/* Pill label */}
                <div className="mb-6">
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 border border-slate-200/70">
                    Galerie
                  </span>
                </div>

                {/* H1 */}
                <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6 font-serif">
                  Fotogalerie projektu
                </h1>

                {/* Popis */}
                <p className="text-slate-600 text-base lg:text-lg leading-7">
                  Prohlédněte si fotografie exteriéru, interiéru a vybavení projektu Luční háj.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-100 mb-10" />

            {/* Filters */}
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

            {/* Galerie grid */}
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
  )
}

export default GalleryPage











