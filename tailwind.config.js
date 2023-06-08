/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '/src/index.html',
    './src/index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {

      height: {
        'neuHeight': ["calc(100vh - 0.1px)"],
      },

      fontFamily : {
        "Manrope": ["Manrope", 'sans-serif'],
      },

      boxShadow: {
        "shadoGreen": "inset 0 1px 0 0 rgba(83, 255, 171, 1)",
      },

      colors : {
        lightCyan: "#CEE3E9",
        "neonGreen": "#52FFA8",
        "hoverGreen": "#53FFAB",
        "grayishBlue": "#4E5D73",
        "darkGrayishBlue": "#323A49",
        "darkBlue": "#1F2632",
      },
    },
  },
  plugins: [],
}