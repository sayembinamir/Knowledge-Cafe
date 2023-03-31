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
        
"primary": "#a69ae2",
        
"secondary": "#08aa74",
        
"accent": "#e0849e",
        
"neutral": "#262D40",
        
"base-100": "#47454A",
        
"info": "#258AE9",
        
"success": "#21E492",
        
"warning": "#9A7D09",
        
"error": "#DD2C67",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}

