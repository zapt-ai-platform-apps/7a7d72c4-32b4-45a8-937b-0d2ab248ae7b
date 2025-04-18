export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'dark-navy': '#060F38',
        'charcoal-gray': '#1C1C1C',
        'neon-yellow': '#CBFF2E',
        'purple-custom': '#763BEA',
        'light-gray': '#F5F5F5',
        'muted-white': '#E0E0E0',
        'deep-space': '#0A1128',
        'soft-teal': '#6CD4D4',
      },
      spacing: {
        '18': '4.5rem',
      },
      boxShadow: {
        'feature-card': '0 8px 32px rgba(0,0,0,0.15)',
      }
    },
  },
  plugins: [],
};