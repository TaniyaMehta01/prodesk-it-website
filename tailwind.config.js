/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          accent: '#65e4c2',
          'accent-glow': 'rgba(101, 228, 194, 0.25)',
          purple: '#8b7cff',
          'purple-glow': 'rgba(139, 124, 255, 0.25)',
          bg: '#07101f',
          surface: '#0d1729',
          'surface-2': '#111e33',
          muted: '#aab6ca',
          lightBg: '#f6f8fc',
          lightSurface: '#ffffff',
          lightMuted: '#58657a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      }
    }
  },
  plugins: [],
};
