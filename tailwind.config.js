/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          200: '#F5E6C8',
          300: '#F0D080',
          400: '#FFD700',
          500: '#D4AF37',
          600: '#B8860B',
          700: '#9A6F0A',
          800: '#7A5608',
          900: '#5A3E06',
        },
        dark: {
          900: '#0A0A0A',
          800: '#111111',
          700: '#181818',
          600: '#222222',
          500: '#2A2A2A',
          400: '#333333',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFD700 0%, #D4AF37 40%, #B8860B 70%, #FFD700 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent 0%, #FFD700 50%, transparent 100%)',
        'glass-dark': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite',
        'pulse-gold': 'pulseGold 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,175,55,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(212,175,55,0.8), 0 0 60px rgba(212,175,55,0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
