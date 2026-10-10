/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf2f4',
          100: '#fbe6e9',
          200: '#f7d0d6',
          300: '#f0abb6',
          400: '#e5788c',
          500: '#d54d68',
          600: '#bf2f4e',
          700: '#9b1e3a',
          800: '#670d1f',
          900: '#4a0e17',
          950: '#2b040a',
        },
        gold: {
          50: '#fbf8ee',
          100: '#f5edd2',
          200: '#ebd9a4',
          300: '#dec070',
          400: '#d2a744',
          500: '#c59128',
          600: '#aa751f',
          700: '#88561c',
          800: '#71461c',
          900: '#5f3a1b',
          950: '#371e0c',
        },
        ivory: {
          50: '#fffef9',
          100: '#fffdf2',
          200: '#fdfae2',
          300: '#fbf4cb',
          400: '#f7e9a8',
          500: '#f1d77f',
          600: '#e0bc53',
          700: '#be983b',
          800: '#997632',
          900: '#7d602c',
          950: '#463314',
        },
        saffron: {
          500: '#FF7722',
          600: '#E65100',
        },
        temple: {
          bronze: '#8c6d32',
          dark: '#1c0f13',
          paper: '#faf5ea',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Cinzel', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        script: ['Great Vibes', 'cursive'],
        cormorant: ['Cormorant Garamond', 'serif'],
        tamil: ['Noto Serif Tamil', 'Anek Tamil', 'sans-serif'],
        hindi: ['Noto Serif Devanagari', 'Rozha One', 'serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 25px rgba(212, 175, 55, 0.8))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
