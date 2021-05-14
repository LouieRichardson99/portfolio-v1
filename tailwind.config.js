module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        xl: "450px",
      },
      backgroundColor: {
        input_bg: "#e3e3e3",
        green_btn: "#25B62C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
