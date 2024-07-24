/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryD: '#242731',
        primaryW: '#E0E4E7',
        primaryP:'#A162F7',
        secondaryP:'#A162F7',
        secondaryB:'#2884FF',
        secondaryY:'#F6CC0D',
        secondaryR:'#FF6370',
        secondaryG:'#70CF97',
        secondaryO:'#FF764C',
        backG:'#F5F6FA',
        backGd:'#F5F5F5',
        
        customGray:{
          light:'#E0E4E7',
          dark1:'#242731',
          dark2:'#5F6165',
          dark3:'#72767C',
          dark4:'#7C7C8D',
          dark5:'#A4A5A6',
        },
        backcolor:'#F5F4F6',
        whiteP:'#FFFFFF',
      },
    },
    screens:{
      sm:'500px',
      md:'1024px',
      lg:'760px',
    },
  },
  plugins: [],
}