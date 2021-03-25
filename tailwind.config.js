module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Open Sans"],
      },
      height: {
        xl: '450px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
