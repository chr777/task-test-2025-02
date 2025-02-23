/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "360px",
        lg: "1024px",
      },
      fontFamily: {
        nohemi: ["Nohemi", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: '#24ffbc',
      },
      boxShadow: {
        custom: "0px 0px 0px 1px #00000014, 0px 2px 8px 0px #0000000F",
      },
      backgroundImage: {
        'custom-gradient-top': "linear-gradient(132.15deg, rgba(11, 11, 15, 1) 0%, rgba(26, 26, 34, 0.9) 95.96%)",
        'custom-gradient-bottom': "linear-gradient(132.15deg, #211A1A 0%, #212127 95.96%)",
      },
    },
  },
  plugins: [],
}