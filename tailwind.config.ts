import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#F5FCFD',
          secondary: '#E8F7F9',
          card: '#FFFFFF',
          'card-hover': '#F0FBFC',
          gold: '#0891B2',
          'gold-light': '#22D3EE',
          'gold-dark': '#0E5F73',
          teal: '#059669',
          'teal-dark': '#047857',
          accent: '#164E63',
          muted: '#5E7480',
          light: '#123B46',
          border: 'rgba(8,145,178,0.16)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Aptos"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-slow': 'bounce 2.5s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #c8a96e, #e8d5a8)',
        'gradient-dark': 'linear-gradient(180deg, #050810, #0d1117)',
      },
      screens: {
        'xs': '400px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}
export default config
