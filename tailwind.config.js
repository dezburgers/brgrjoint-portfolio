/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      boxShadow: {
        '5xl': '0 0 50px 50px rgba(0, 0, 0, 0.9)',
        '3xl': '0 10px 20px 20px rgba(0, 0, 0, 0.8)', // Adjust the values as per your requirements
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        Montserrat: ["Montserrat"],
        poppins: ["Poppins", "sans-serif"],
      },
      spacing: {
        'screen-150': '150vh',
        '128': '32rem',
        '192': '48rem',
        '224': '56rem',
        '256': '64rem',
      },
      colors: {
        peach: '#f8e2d7',
        darkpeach: '#FF6F61',
        offblack: '#111',
        bluewash: '#9999cc',
      },
    },
  },
  plugins: [],
};
