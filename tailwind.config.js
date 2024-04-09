/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor:{
        blueBg:"#070025",
        blackBg:"#0B0C10",
        textColorLight:"#feffff",
      },
      fontFamily:{
        titleFont:["Akshar" ,"sans-serif"]
      }
    },
  },
  plugins: [],
}

