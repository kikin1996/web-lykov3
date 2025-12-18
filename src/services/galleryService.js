import { gallery } from '../data/mockData'

export const getAllImages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(gallery)
    }, 300)
  })
}

export const getImagesByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (category === 'all') {
        resolve(gallery)
      } else {
        const filtered = gallery.filter(img => img.category === category)
        resolve(filtered)
      }
    }, 300)
  })
}

export const getImageById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const image = gallery.find(img => img.id === parseInt(id))
      resolve(image || null)
    }, 300)
  })
}











