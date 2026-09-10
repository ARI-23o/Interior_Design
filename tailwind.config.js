/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FAF8F5',
          soft: '#F4F0EB',
          subtle: '#EAE4DC',
        },
        charcoal: {
          DEFAULT: '#191715',
          light: '#2E2A26',
          muted: '#57514A',
          subtle: '#787067',
        },
        bronze: {
          DEFAULT: '#B88654',
          light: '#D4AA7D',
          dark: '#936639',
          gold: '#C5A059',
        },
        border: {
          luxury: '#E4DDD3',
          dark: '#38332E',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.2em',
        'wide-luxury': '0.3em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(25, 23, 21, 0.07)',
        'luxury-lg': '0 30px 60px -20px rgba(25, 23, 21, 0.12)',
      }
    },
  },
  plugins: [],
}
