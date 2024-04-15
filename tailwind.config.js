/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        bgColorDark:"#0B0B0B",
        bgColorLight:"#000000",
      },
      fontFamily:{
        urbanistLight:["Urbanist","sans-serif"]
      }
    },
  },
  plugins: [],
}

