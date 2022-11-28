/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        aeonik: ["Aeonik"],
        aeonikbold: ["AeonikBold"],
        telma: ["Telma"],
        maloney: ["Maloney"],
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
      colors: {
        "vPurple": "#6667AB",
        "vTeal": "#00A7B7",
        "vYellow": "#FFB926",
        "vPurpleBG": "rgba(102, 103, 171, 0.1)",
        "vYellowBG": "rgba(255, 185, 38, 0.1)",
        "vGreen": "#00A7B7",
        "vGreenBG": "#0DABBB14",
      }
    },
  },
  plugins: [],
}
