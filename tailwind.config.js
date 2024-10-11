/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lamaSky: "#C3EBFA",
        lamaSkyLight: "#3568f3",
        lamaPurple: "#CFCEFF",
        lamaPurpleLight: "#F1F0FF",
        Yellow: "#fec107",
        YellowLight: "#FEFCE8",
        blue:"#17a2b7",
        green:"#27a844",
        red:"#dc3546",
        Green:"#26a743",
        Blue:"047aff",
        yellow: "#f7c119",
        Red: "#d73948",
        


      },
    },
  },
  plugins: [],
}