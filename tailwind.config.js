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
        
"primary": "#e8e553",
        
"secondary": "#e0769f",
        
"accent": "#f9f993",
        
"neutral": "#252028",
        
"base-100": "#4C3B59",
        
"info": "#3C89E2",
        
"success": "#55ECA6",
        
"warning": "#F2A426",
        
"error": "#FC2759",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}

