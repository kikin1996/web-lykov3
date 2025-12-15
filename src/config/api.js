// API Configuration
// Environment variables are prefixed with VITE_ in Vite
export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''

// Check if API key is set
export const isGoogleMapsConfigured = () => {
  return GOOGLE_MAPS_API_KEY && GOOGLE_MAPS_API_KEY !== 'your_api_key_here'
}






