import PropTypes from 'prop-types'
import Card from '../shared/Card'

const GalleryGrid = ({ images, onImageClick }) => {
  if (images.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-body-large text-neutral-mediumGray">
          V této kategorii nejsou žádné obrázky.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {images.map((image) => (
        <Card
          key={image.id}
          hover
          className="overflow-hidden cursor-pointer"
          onClick={() => onImageClick(image)}
        >
          <div className="aspect-square bg-neutral-lightGray overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-primary-teal/20 to-primary-teal/5 flex items-center justify-center">
              <span className="text-neutral-mediumGray text-sm">Obrázek</span>
            </div>
          </div>
          {image.caption && (
            <div className="p-4">
              <p className="text-body-small text-neutral-mediumGray">{image.caption}</p>
            </div>
          )}
        </Card>
      ))}
    </div>
  )
}

GalleryGrid.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
}

export default GalleryGrid






