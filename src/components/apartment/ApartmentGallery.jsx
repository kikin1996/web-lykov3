import { useState } from 'react'
import PropTypes from 'prop-types'

const ApartmentGallery = ({ apartment }) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const images = apartment.images && apartment.images.length > 0 
    ? apartment.images 
    : ['/images/apartments/placeholder.jpg']

  return (
    <div className="bg-white rounded-xl shadow-medium overflow-hidden">
      {/* Main Image */}
      <div className="aspect-video bg-neutral-lightGray relative">
        <div className="w-full h-full bg-gradient-to-br from-primary-teal/20 to-primary-teal/5 flex items-center justify-center">
          <span className="text-neutral-mediumGray">Obrázek bytu {apartment.apartmentNumber}</span>
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="p-4 grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                selectedImage === index
                  ? 'border-primary-teal'
                  : 'border-transparent hover:border-primary-teal/50'
              }`}
            >
              <div className="w-full h-full bg-neutral-lightGray"></div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

ApartmentGallery.propTypes = {
  apartment: PropTypes.object.isRequired,
}

export default ApartmentGallery











