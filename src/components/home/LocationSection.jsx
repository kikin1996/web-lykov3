import { useEffect, useRef, useState } from 'react'
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
        mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
          center: { lat: 49.6853, lng: 18.3483 }, // Frýdek-Místek, ulice F. Čejky
          zoom: 15,
          disableDefaultUI: true,
          gestureHandling: "cooperative",
          styles: DARK_STYLE,
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

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              {/* School Icon - SVG in white */}
              <div className="mb-4 flex justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-h4 mb-2 text-white">Školy</h3>
              <p className="text-body-small text-white text-opacity-90">
                Základní a střední školy v okolí
              </p>
            </div>
            <div className="text-center p-6">
              {/* Shopping Cart Icon - SVG in white */}
              <div className="mb-4 flex justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-h4 mb-2 text-white">Obchody</h3>
              <p className="text-body-small text-white text-opacity-90">
                Obchodní centra a supermarkety
              </p>
            </div>
            <div className="text-center p-6">
              {/* Train/Transport Icon - SVG in white */}
              <div className="mb-4 flex justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-h4 mb-2 text-white">Doprava</h3>
              <p className="text-body-small text-white text-opacity-90">
                Výborná dopravní dostupnost
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
