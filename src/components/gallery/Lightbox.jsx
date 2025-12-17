import { useEffect } from 'react'
import PropTypes from 'prop-types'

const Lightbox = ({ images, currentIndex, onClose, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && currentIndex > 0) onNavigate(currentIndex - 1)
      if (e.key === 'ArrowRight' && currentIndex < images.length - 1) onNavigate(currentIndex + 1)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, images.length, onClose, onNavigate])

  const currentImage = images[currentIndex]

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative max-w-7xl max-h-full p-4" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-4xl hover:text-primary-teal transition-colors z-10"
          aria-label="Zavřít"
        >
          ×
        </button>

        {/* Navigation Arrows */}
        {currentIndex > 0 && (
          <button
            onClick={() => onNavigate(currentIndex - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-primary-teal transition-colors z-10"
            aria-label="Předchozí"
          >
            ‹
          </button>
        )}
        {currentIndex < images.length - 1 && (
          <button
            onClick={() => onNavigate(currentIndex + 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-primary-teal transition-colors z-10"
            aria-label="Další"
          >
            ›
          </button>
        )}

        {/* Image */}
        <div className="max-h-[90vh] flex items-center justify-center">
          <div className="bg-neutral-lightGray rounded-lg overflow-hidden max-w-full max-h-full">
            <div className="w-full h-full bg-gradient-to-br from-primary-teal/20 to-primary-teal/5 flex items-center justify-center" style={{ minHeight: '60vh', minWidth: '60vw' }}>
              <span className="text-white text-lg">Obrázek: {currentImage?.caption || `Obrázek ${currentIndex + 1}`}</span>
            </div>
          </div>
        </div>

        {/* Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-body-small">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Caption */}
        {currentImage?.caption && (
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white text-center max-w-2xl">
            <p className="text-body-regular">{currentImage.caption}</p>
          </div>
        )}
      </div>
    </div>
  )
}

Lightbox.propTypes = {
  images: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
}

export default Lightbox








