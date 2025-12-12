import { apartments } from '../data/mockData'

export const getAllApartments = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(apartments)
    }, 300)
  })
}

export const getApartmentById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const apartment = apartments.find(apt => apt.id === id)
      resolve(apartment || null)
    }, 300)
  })
}

export const getApartmentsByFloor = (floorId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const floorApartments = apartments.filter(apt => apt.floorId === parseInt(floorId))
      resolve(floorApartments)
    }, 300)
  })
}

export const getAvailableApartments = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const available = apartments.filter(apt => apt.status === 'available')
      resolve(available)
    }, 300)
  })
}

