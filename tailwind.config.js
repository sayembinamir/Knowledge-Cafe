/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#7dbc0f",

          "secondary": "#5ced1e",

          "accent": "#b35afc",

          "neutral": "#1C1E31",

          "base-100": "#FFFFFF",

          "info": "#6995E8",

          "success": "#218C72",

          "warning": "#DEB617",

          "error": "#E7799C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

