export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
      },
    },
  },
  plugins: [],
};