/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        syncopate: ['Syncopate', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#DC2626',
          'red-light': '#EF4444',
          'red-dark': '#B91C1C',
          black: '#09090B',
          'card': '#111113',
          'card-hover': '#18181B',
        },
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-up': {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'reveal-up': {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'hero-word': {
          '0%': { transform: 'translateY(60px) skewY(3deg)', opacity: '0' },
          '100%': { transform: 'translateY(0) skewY(0deg)', opacity: '1' },
        },
        'line-grow': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.4s ease-out',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both',
        'reveal-up': 'reveal-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'hero-word': 'hero-word 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'line-grow': 'line-grow 0.6s cubic-bezier(0.16,1,0.3,1) both',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
