// API Configuration
// Environment variables in Next.js use process.env
// For client-side access, they must be prefixed with NEXT_PUBLIC_
export const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || process.env.GOOGLE_MAPS_API_KEY || ''

// Check if API key is set
export const isGoogleMapsConfigured = () => {
  return GOOGLE_MAPS_API_KEY && GOOGLE_MAPS_API_KEY !== 'your_api_key_here'
}











