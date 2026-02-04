import { gallery } from '../data/mockData'

export const getAllImages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(gallery.filter(img => !img.hidden))
    }, 300)
  })
}

export const getImagesByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (category === 'all') {
        resolve(gallery.filter(img => !img.hidden))
      } else {
        const filtered = gallery.filter(img => img.category === category && !img.hidden)
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











