/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          teal: '#00D9B5',
          tealDark: '#00B89A',
          tealLight: '#33E5C8',
        },
        neutral: {
          darkNavy: '#1E2738',
          darkSlate: '#2A3340',
          mediumGray: '#4A5568',
          lightGray: '#E5E7EB',
          offWhite: '#F9FAFB',
          white: '#FFFFFF',
        },
        text: {
          primary: '#1E2738',
          secondary: '#4A5568',
          tertiary: '#6B7280',
          inverse: '#FFFFFF',
          accent: '#00D9B5',
        },
        semantic: {
          success: '#00D9B5',
          error: '#EF4444',
          warning: '#F59E0B',
          info: '#3B82F6',
        },
      },
      fontFamily: {
        primary: ["'Playfair Display', serif"],
        secondary: ["'Inter', sans-serif"],
        script: ["'Dancing Script', cursive"],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
        '5xl': '128px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'small': '0 2px 8px rgba(30, 39, 56, 0.08)',
        'medium': '0 4px 16px rgba(30, 39, 56, 0.12)',
        'large': '0 8px 32px rgba(30, 39, 56, 0.16)',
        'glow': '0 0 24px rgba(0, 217, 181, 0.3)',
      },
    },
  },
  plugins: [],
}








