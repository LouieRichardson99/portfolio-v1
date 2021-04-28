module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Open Sans"],
      },
      height: {
        xl: "450px",
        88: "22rem",
      },
      backgroundColor: {
        input_bg: "#e3e3e3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
