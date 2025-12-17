import { floors } from '../data/mockData'

export const getAllFloors = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(floors)
    }, 300)
  })
}

export const getFloorById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const floor = floors.find(f => f.id === parseInt(id))
      resolve(floor || null)
    }, 300)
  })
}








