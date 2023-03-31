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
        
"primary": "#95a8ed",
        
"secondary": "#f2e67b",
        
"accent": "#bbb1f9",
        
"neutral": "#1E2225",
        
"base-100": "#2D4362",
        
"info": "#91AEF3",
        
"success": "#186242",
        
"warning": "#F0B342",
        
"error": "#F05678",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
}

