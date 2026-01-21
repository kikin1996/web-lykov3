import { useEffect, useRef, useState } from 'react'
import ContactForm from '../components/contact/ContactForm'
import ContactHeroImage from '../components/contact/ContactHeroImage'
import { GOOGLE_MAPS_API_KEY, isGoogleMapsConfigured } from '../config/api'

const ContactPage = () => {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const [mapError, setMapError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    setMapError(null)

    if (!isGoogleMapsConfigured()) {
      setMapError('API klíč není nastaven.')
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

    const initMap = () => {
      if (!mapRef.current || mapInstanceRef.current) return
      
      if (!window.google || !window.google.maps || !window.google.maps.Map) {
        return false
      }

      try {
        const mapCenter = { lat: 49.839666, lng: 14.611472 }
        mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
          center: mapCenter,
          zoom: 13,
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: true,
          scaleControl: true,
          streetViewControl: true,
          fullscreenControl: true,
          gestureHandling: "cooperative",
          // Světlý vzhled - bez custom styles (default Google Maps light theme)
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
        
        setIsLoading(false)
        setMapError(null)
        return true
      } catch (error) {
        setMapError('Chyba: ' + error.message)
        setIsLoading(false)
        return false
      }
    }

    if (window.google && window.google.maps && window.google.maps.Map) {
      const timer = setTimeout(() => {
        initMap()
      }, 100)
      return () => clearTimeout(timer)
    }

    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]')
    
    if (existingScript) {
      const checkInterval = setInterval(() => {
        if (initMap()) {
          clearInterval(checkInterval)
        }
      }, 200)
      
      const timeout = setTimeout(() => {
        clearInterval(checkInterval)
        if (!mapInstanceRef.current) {
          setMapError('Mapa se nenačetla.')
          setIsLoading(false)
        }
      }, 15000)
      
      return () => {
        clearInterval(checkInterval)
        clearTimeout(timeout)
      }
    }

    const callbackName = `initMap_${Date.now()}`
    
    window[callbackName] = () => {
      setTimeout(() => {
        if (!initMap()) {
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
      setMapError('Chyba při načítání mapy.')
      setIsLoading(false)
    }
    
    document.head.appendChild(script)

    const timeout = setTimeout(() => {
      if (!mapInstanceRef.current) {
        setMapError('Mapa se nenačetla.')
        setIsLoading(false)
      }
    }, 15000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#F5F7FB] pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hlavní karta - jeden velký blok */}
        <div className="rounded-[28px] bg-white border border-slate-200/70 shadow-[0_20px_60px_rgba(15,23,42,0.12)] overflow-hidden">
        {/* Horní část: foto vlevo, formulář vpravo */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Levý sloupec - foto */}
          <div className="min-h-[420px]">
            <ContactHeroImage />
          </div>

          {/* Pravý sloupec - formulář */}
          <div className="p-10 pt-24">
            <ContactForm />
          </div>
        </div>

        {/* Spodní část - 3 info boxy */}
        <div className="border-t border-slate-100 p-10 lg:p-12">
          {/* Nadpis sekce */}
          <div className="mb-12">
            <div className="inline-flex items-center rounded-full bg-[#E6FFFA] text-[#00B89A] px-3 py-1 text-xs font-medium mb-6">
              Kontaktujte nás
            </div>
            <h2 className="text-[34px] leading-[1.1] font-semibold tracking-tight text-slate-900 font-serif mb-6">
              Rádi se vám ozveme.
            </h2>
            <p className="text-slate-600 text-[15px] leading-6 mb-3">
              Máte dotaz nebo se chcete spojit? Jsme tu pro vás.
            </p>
            <p className="text-slate-600 text-[15px] leading-6 mb-8">
              Napište nám jakoukoli z níže uvedených možností, ozveme se co nejdříve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
            {/* Email Support */}
            <div className="text-left">
              <div className="h-10 w-10 rounded-full bg-[#E6FFFA] text-[#00D9B5] flex items-center justify-center mb-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">E-mail podpora</h3>
              <p className="text-sm text-slate-600 mb-1">Odpovíme co nejdříve.</p>
              <a href="mailto:hello@luchnihaj.cz" className="text-sm text-[#00D9B5] underline hover:text-[#00B89A]">
                hello@luchnihaj.cz
              </a>
            </div>

            {/* Visit Office */}
            <div className="text-left">
              <div className="h-10 w-10 rounded-full bg-[#E6FFFA] text-[#00D9B5] flex items-center justify-center mb-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">Navštivte nás</h3>
              <p className="text-sm text-slate-600 mb-1">Přijďte za námi osobně.</p>
              <p className="text-sm text-[#00D9B5] underline">Týnec nad Sázavou, Česká republika</p>
            </div>

            {/* Call Us */}
            <div className="text-left">
              <div className="h-10 w-10 rounded-full bg-[#E6FFFA] text-[#00D9B5] flex items-center justify-center mb-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">Zavolejte nám</h3>
              <p className="text-sm text-slate-600 mb-1">K dispozici v pracovní době.</p>
              <a href="tel:+420123456789" className="text-sm text-[#00D9B5] underline hover:text-[#00B89A]">
                (+420) 123 - 456 - 789
              </a>
            </div>
          </div>

          {/* Mapa sekce */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Luční háj lokalita</h3>
            <div className="mb-4">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=49.839666,14.611472"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#00D9B5] hover:bg-[#00B89A] text-white text-lg font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                Trasa
              </a>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200/70 shadow-sm overflow-hidden p-6">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                <div 
                  ref={mapRef} 
                  id="contact-map"
                  className="w-full h-full"
                  style={{ minHeight: '400px' }}
                ></div>
                
                {isLoading && !mapError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-50/80 z-10">
                    <div className="text-center">
                      <p className="text-sm text-slate-600">Načítání mapy...</p>
                    </div>
                  </div>
                )}
                
                {mapError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-50/80 z-10">
                    <div className="text-center p-4">
                      <p className="text-sm text-slate-600">{mapError}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
