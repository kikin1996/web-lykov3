'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PropTypes from 'prop-types'

const FloorPlan = ({ floor, apartments }) => {
  const [hoveredApartment, setHoveredApartment] = useState(null)
  const router = useRouter()

  const getStatusColor = (status) => {
    switch (status) {
      case 'available':
        return '#00D9B5'
      case 'reserved':
        return '#F59E0B'
      case 'sold':
        return '#9CA3AF'
      default:
        return '#E5E7EB'
    }
  }

  const handleApartmentClick = (apartmentId) => {
    router.push(`/byt/${floor.id}/${apartmentId}`)
  }

  // Simple SVG floor plan layout - 4 apartments in a 2x2 grid
  const apartmentPositions = [
    { id: 0, x: 50, y: 50, width: 200, height: 150 }, // Top-left
    { id: 1, x: 270, y: 50, width: 200, height: 150 }, // Top-right
    { id: 2, x: 50, y: 220, width: 200, height: 150 }, // Bottom-left
    { id: 3, x: 270, y: 220, width: 200, height: 150 }, // Bottom-right
  ]

  return (
    <div className="bg-white rounded-xl shadow-medium p-6">
      <h2 className="text-h3 mb-6">Půdorys patra</h2>
      <div className="relative bg-neutral-offWhite rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <svg
          viewBox="0 0 520 420"
          className="w-full h-full"
          style={{ maxHeight: '600px' }}
        >
          {/* Floor outline */}
          <rect
            x="20"
            y="20"
            width="480"
            height="380"
            fill="white"
            stroke="#E5E7EB"
            strokeWidth="2"
          />

          {/* Apartments */}
          {apartments.map((apartment, index) => {
            const pos = apartmentPositions[index]
            if (!pos) return null

            const isHovered = hoveredApartment === apartment.id
            const statusColor = getStatusColor(apartment.status)

            return (
              <g key={apartment.id}>
                <rect
                  x={pos.x}
                  y={pos.y}
                  width={pos.width}
                  height={pos.height}
                  fill={isHovered ? statusColor : statusColor + '40'}
                  stroke={statusColor}
                  strokeWidth={isHovered ? '3' : '2'}
                  className="cursor-pointer transition-all"
                  onMouseEnter={() => setHoveredApartment(apartment.id)}
                  onMouseLeave={() => setHoveredApartment(null)}
                  onClick={() => handleApartmentClick(apartment.id)}
                />
                <text
                  x={pos.x + pos.width / 2}
                  y={pos.y + pos.height / 2 - 10}
                  textAnchor="middle"
                  className="text-sm font-semibold fill-neutral-darkNavy pointer-events-none"
                >
                  {apartment.apartmentNumber}
                </text>
                <text
                  x={pos.x + pos.width / 2}
                  y={pos.y + pos.height / 2 + 10}
                  textAnchor="middle"
                  className="text-xs fill-neutral-mediumGray pointer-events-none"
                >
                  {apartment.size} m²
                </text>
              </g>
            )
          })}

          {/* Tooltip */}
          {hoveredApartment && (() => {
            const apartment = apartments.find(a => a.id === hoveredApartment)
            if (!apartment) return null
            return (
              <g>
                <rect
                  x="260"
                  y="10"
                  width="200"
                  height="80"
                  fill="white"
                  stroke="#00D9B5"
                  strokeWidth="2"
                  rx="4"
                />
                <text x="270" y="30" className="text-sm font-semibold fill-neutral-darkNavy">
                  {apartment.apartmentNumber} | {apartment.type}
                </text>
                <text x="270" y="50" className="text-xs fill-neutral-mediumGray">
                  {apartment.size} m² | {apartment.price.toLocaleString('cs-CZ')} Kč
                </text>
                <text x="270" y="70" className="text-xs fill-primary-teal font-semibold">
                  Klikněte pro detail →
                </text>
              </g>
            )
          })()}
        </svg>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#00D9B5' }}></div>
          <span className="text-body-small">Volný</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#F59E0B' }}></div>
          <span className="text-body-small">Rezervovaný</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#9CA3AF' }}></div>
          <span className="text-body-small">Prodáno</span>
        </div>
      </div>
    </div>
  )
}

FloorPlan.propTypes = {
  floor: PropTypes.object.isRequired,
  apartments: PropTypes.array.isRequired,
}

export default FloorPlan











