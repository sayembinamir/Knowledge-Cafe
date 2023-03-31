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
        
"primary": "#f9a011",
        
"secondary": "#1cdb9e",
        
"accent": "#0c579e",
        
"neutral": "#3A253C",
        
"base-100": "#2E3338",
        
"info": "#5192DB",
        
"success": "#1FD681",
        
"warning": "#A9760A",
        
"error": "#FA527C",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}

