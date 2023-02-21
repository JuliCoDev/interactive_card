/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'ligth' : "hsl(249, 99%, 64%)",
        'semi-dark' : "hsl(278, 94%, 30%)",
        'dark' : "hsl(278, 68%, 15%)",
        'dark-grayish' : "hsl(279, 6%, 55%)"
      },
      fontFamily: {
        space: ['Space Grotesk'],
      },   
      width: {
        
      },
      height: {
        'card-mobile' : '170px'        
      }  
    },
  },
  plugins: [],
}
