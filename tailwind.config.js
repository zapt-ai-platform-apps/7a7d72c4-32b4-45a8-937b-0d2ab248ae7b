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
        'purple-custom': '#763BEA',
        'dark-navy': '#060F38',
        'neon-yellow': '#CBFF2E',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
};