/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit", // just in time mode
  theme: {
    // Overwrite & add
    extend: {
      colors: {
        blue : '#2CBCE9',
        red: '#B7245C',
        yellow: '#FDCC49',
        grey: '#E8E8E8',
        violet: '#8A4FFF',
        'deep-blue': '#031927',
        'dark-grey': '#757575',
        'opaque-black': 'rgba(0, 0, 0, 0.35)',

      },
      backgroundImage: (theme) => ({
        'gradient-rainbow':
          "linear-gradient(81.66deg, #00B5EE 7.21%, #ae77af 45.05%, #FDCC49 78.07%)",
        'gradient-rainblue':
          "linear-gradient(90deg, #2CBCE9 14.53%, #ae77af 69.36%, #FDCC49 117.73%)",
      }),

      fontFamily : {
        playfair : ['Playfair Display', 'serif'],
        opensans : ['Open Sans', 'sans-serif'],
      },
      // allows to use images in the before and later pseudo-elements
      content: {
        brush: 'url("./assets/brush.png")',
        person1: 'url("./assets/person-1.png")',
        person2: 'url("./assets/person-2.png")',
        person3: 'url("./assets/person-3.png")',
      }
    },
    screens:{
      xs : '480px',
      sm : '768px',
      md : '1060px',
      lg : '1650px',
    }
  },
  plugins: [],
};
