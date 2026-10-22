/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080808',
        card: {
          DEFAULT: '#141414',
          hover: '#1a1a1a',
          subtle: '#101010',
        },
        border: {
          DEFAULT: '#262626',
          subtle: '#1e1e1e',
          active: '#383838',
        },
        indicator: {
          green: '#00FF85',
          amber: '#FFB800',
          red: '#FF5A5A',
        },
        brand: {
          primary: '#00E5FF',
          secondary: '#7928CA',
          accent: '#00FF85',
        },
        text: {
          primary: '#EDEDED',
          secondary: '#A1A1AA',
          muted: '#71717A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-green': '0 0 20px -5px rgba(0, 255, 133, 0.3)',
        'glow-amber': '0 0 20px -5px rgba(255, 184, 0, 0.3)',
        'glow-red': '0 0 20px -5px rgba(255, 90, 90, 0.3)',
      }
    },
  },
  plugins: [],
}
