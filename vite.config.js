import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { readFileSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env from parent directory
  const envDir = resolve(__dirname, '..')
  const env = loadEnv(mode, envDir, '')
  
  // Read GOOGLE_MAPS_API_KEY from parent .env if exists
  let googleMapsApiKey = env.VITE_GOOGLE_MAPS_API_KEY || ''
  if (!googleMapsApiKey) {
    try {
      const envFile = readFileSync(resolve(envDir, '.env'), 'utf-8')
      const match = envFile.match(/^GOOGLE_MAPS_API_KEY=(.+)$/m)
      if (match) {
        googleMapsApiKey = match[1].trim()
      }
    } catch (e) {
      // .env file not found or can't read
    }
  }
  
  return {
    plugins: [react()],
    envPrefix: 'VITE_',
    envDir: envDir,
    define: {
      'import.meta.env.VITE_GOOGLE_MAPS_API_KEY': JSON.stringify(googleMapsApiKey),
    },
  }
})











