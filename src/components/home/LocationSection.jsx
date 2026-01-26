'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { GOOGLE_MAPS_API_KEY, isGoogleMapsConfigured } from '../../config/api'

const LocationSection = () => {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const [mapError, setMapError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Reset states
    setIsLoading(true)
    setMapError(null)

    if (!isGoogleMapsConfigured()) {
      setMapError('API klíč není nastaven. Zkontrolujte .env soubor a restartujte dev server.')
      setIsLoading(false)
      return
    }

    if (!mapRef.current) {
      return
    }

    if (mapInstanceRef.current) {
      setIsLoading(false)
      return
    }

    const DARK_STYLE = [
      { elementType: "geometry", stylers: [{ color: "#0b1220" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#6b7280" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#0b1220" }] },
      { featureType: "poi", stylers: [{ visibility: "off" }] },
      { featureType: "transit", stylers: [{ visibility: "off" }] },
      { featureType: "road", elementType: "geometry", stylers: [{ color: "#182235" }] },
      { featureType: "water", elementType: "geometry", stylers: [{ color: "#08101f" }] }
    ]

    const initMap = () => {
      if (!mapRef.current || mapInstanceRef.current) return
      
      if (!window.google || !window.google.maps || !window.google.maps.Map) {
        console.log('Čekám na Google Maps API...')
        return false
      }

      try {
        console.log('Inicializuji mapu do elementu:', mapRef.current)
        const mapCenter = { lat: 49.839666, lng: 14.611472 }; // 49°50'22.8"N 14°36'41.3"E
        mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
          center: mapCenter,
          zoom: 13,
          disableDefaultUI: true,
          gestureHandling: "cooperative",
          styles: DARK_STYLE,
        })
        
        // Vytvoření custom markeru s kolečkem a ikonou domu
        const createMarkerWithHouse = () => {
          const canvas = document.createElement('canvas')
          canvas.width = 60
          canvas.height = 60
          const ctx = canvas.getContext('2d')
          
          // Kreslení zeleného kolečka (kruh)
          ctx.beginPath()
          ctx.arc(30, 30, 25, 0, 2 * Math.PI)
          ctx.fillStyle = '#00D9B5'
          ctx.fill()
          ctx.strokeStyle = '#FFFFFF'
          ctx.lineWidth = 3
          ctx.stroke()
          
          // Kreslení ikony domu (bílá)
          ctx.fillStyle = '#FFFFFF'
          ctx.strokeStyle = '#FFFFFF'
          ctx.lineWidth = 2
          
          // Střecha (trojúhelník)
          ctx.beginPath()
          ctx.moveTo(30, 15)
          ctx.lineTo(20, 22)
          ctx.lineTo(40, 22)
          ctx.closePath()
          ctx.fill()
          
          // Dům (čtverec)
          ctx.fillRect(20, 22, 20, 18)
          
          // Dveře
          ctx.fillStyle = '#00D9B5'
          ctx.fillRect(26, 30, 8, 10)
          
          return canvas.toDataURL()
        }
        
        // Přidání vlastního markeru na pozici
        const marker = new window.google.maps.Marker({
          position: mapCenter,
          map: mapInstanceRef.current,
          title: 'Luční háj',
          icon: {
            url: createMarkerWithHouse(),
            scaledSize: new window.google.maps.Size(60, 60),
            anchor: new window.google.maps.Point(30, 30),
          }
        })
        
        console.log('Mapa úspěšně inicializována!', mapInstanceRef.current)
        setIsLoading(false)
        setMapError(null)
        return true
      } catch (error) {
        console.error('Chyba při inicializaci mapy:', error)
        setMapError('Chyba: ' + error.message)
        setIsLoading(false)
        return false
      }
    }

    // If Google Maps is already loaded, initialize immediately
    if (window.google && window.google.maps && window.google.maps.Map) {
      console.log('Google Maps už je načteno, inicializuji...')
      const timer = setTimeout(() => {
        initMap()
      }, 100)
      return () => clearTimeout(timer)
    }

    // Check if script is already loading
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]')
    
    if (existingScript) {
      console.log('Script už existuje, čekám na načtení...')
      const checkInterval = setInterval(() => {
        if (initMap()) {
          clearInterval(checkInterval)
        }
      }, 200)
      
      const timeout = setTimeout(() => {
        clearInterval(checkInterval)
        if (!mapInstanceRef.current) {
          setMapError('Timeout: Mapa se nenačetla. Zkontrolujte API klíč v Google Cloud Console.')
          setIsLoading(false)
        }
      }, 15000)
      
      return () => {
        clearInterval(checkInterval)
        clearTimeout(timeout)
      }
    }

    // Load Google Maps script
    console.log('Načítám Google Maps script...')
    const callbackName = `initMap_${Date.now()}`
    
    window[callbackName] = () => {
      console.log('Google Maps callback volán!')
      setTimeout(() => {
        if (!initMap()) {
          // Retry if not ready
          const retryInterval = setInterval(() => {
            if (initMap()) {
              clearInterval(retryInterval)
            }
          }, 200)
          
          setTimeout(() => clearInterval(retryInterval), 5000)
        }
      }, 100)
      delete window[callbackName]
    }

    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=${callbackName}`
    script.async = true
    script.defer = true
    
    script.onerror = () => {
      console.error('Chyba při načítání Google Maps scriptu!')
      setMapError('Chyba při načítání Google Maps. Zkontrolujte API klíč a povolte "Maps JavaScript API" v Google Cloud Console.')
      setIsLoading(false)
    }
    
    document.head.appendChild(script)
    console.log('Script přidán do head:', script.src)

    // Fallback timeout
    const timeout = setTimeout(() => {
      if (!mapInstanceRef.current) {
        console.error('Timeout: Mapa se nenačetla po 15 sekundách')
        setMapError('Mapa se nenačetla. Otevřete konzoli prohlížeče (F12) pro více informací.')
        setIsLoading(false)
      }
    }, 15000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <section className="py-20 bg-neutral-darkNavy text-white relative -mt-12 pt-32 z-10">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="text-center mb-12">
          <p className="text-overline mb-4 text-primary-teal">Lokalita</p>
          <h2 className="text-h1 mb-4" style={{ color: '#FFFFFF' }}>Umístění projektu</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Google Maps Container */}
          <div className="relative w-full h-[600px] mb-8" style={{ borderRadius: '24px', overflow: 'hidden' }}>
            <div 
              ref={mapRef} 
              id="location-map"
              className="w-full h-full"
              style={{ minHeight: '600px' }}
            ></div>
            
            {/* Loading Overlay */}
            {isLoading && !mapError && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-neutral-darkNavy/80 z-10"
                style={{ borderRadius: '24px' }}
              >
                <div className="text-center">
                  <p className="text-body-regular text-white mb-2">Načítání mapy...</p>
                  <p className="text-body-small text-white text-opacity-80">Prosím čekejte</p>
                </div>
              </div>
            )}
            
            {/* Error Overlay */}
            {mapError && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-neutral-darkNavy/80 z-10"
                style={{ borderRadius: '24px' }}
              >
                <div className="text-center p-6 max-w-md">
                  <p className="text-body-regular text-white mb-2">Mapa okolí</p>
                  <p className="text-body-small text-primary-teal mt-2 font-semibold">{mapError}</p>
                  <p className="text-body-small text-white text-opacity-80 mt-3">
                    API klíč: {GOOGLE_MAPS_API_KEY ? `Nastaven (${GOOGLE_MAPS_API_KEY.substring(0, 15)}...)` : 'Nenastaven'}
                  </p>
                  <p className="text-body-small text-white text-opacity-70 mt-2 text-xs">
                    Otevřete konzoli prohlížeče (F12 → Console) pro více informací
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-8 hidden md:grid">
            <div className="text-center p-6">
              {/* School Icon */}
              <div className="mb-2 flex justify-center">
                <Image
                  src="/photos/icon1.png"
                  alt="Ikona škol - základní a mateřské školy v blízkosti projektu Luční Háj"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p className="text-body-small text-white text-opacity-90">
                Základní a mateřské školky - 5min
              </p>
            </div>
            <div className="text-center p-6">
              {/* Shopping Cart Icon */}
              <div className="mb-2 flex justify-center">
                <Image
                  src="/photos/icon2.png"
                  alt="Ikona obchodů - supermarket Lidl v blízkosti projektu Luční Háj"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p className="text-body-small text-white text-opacity-90">
                Supermarket Lidl - 5 min
              </p>
            </div>
            <div className="text-center p-6">
              {/* Transport Icon */}
              <div className="mb-2 flex justify-center">
                <Image
                  src="/photos/icon3.png"
                  alt="Ikona dopravy - dostupnost veřejné dopravy v projektu Luční Háj"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p className="text-body-small text-white text-opacity-90">
                Nájezd na dálnici D1 - 18 min
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
