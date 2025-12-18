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
    { value: 'interior', label: 'Interiér' },
    { value: 'location', label: 'Okolí' },
    { value: 'amenities', label: 'Vybavení' },
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

  return (
    <div className="pt-24 pb-20 bg-neutral-offWhite min-h-screen">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="text-center mb-12">
          <p className="text-overline mb-4">Galerie</p>
          <h1 className="text-h1 mb-4">Fotogalerie projektu</h1>
          <p className="text-body-large max-w-2xl mx-auto text-neutral-mediumGray">
            Prohlédněte si fotografie exteriéru, interiéru a vybavení Ecohau Riverside.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                selectedCategory === category.value
                  ? 'bg-primary-teal text-white'
                  : 'bg-white text-neutral-darkNavy hover:bg-neutral-offWhite'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20">
            <p className="text-body-large">Načítání...</p>
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
  )
}

export default GalleryPage











