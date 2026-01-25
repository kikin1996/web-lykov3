import Image from 'next/image'
import PropTypes from 'prop-types'
import Card from '../shared/Card'

const GalleryGrid = ({ images, onImageClick }) => {
  if (images.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-600">
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
            <Image
              src={image.thumbnail || image.url}
              alt={image.caption || 'Obrázek galerie'}
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
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











