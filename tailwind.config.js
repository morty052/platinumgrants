/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        space: ["space-grotesk", "sans-serif"],
        inter: ["inter", "sans-serif"],
      
      },
      screens: {
        xxs: '350px',
        xs: '480px',
        ss: "540px",
        sm: "768px",
        md: "1024px",
        lg: "1200px",
        xl: "1700px",
        // xxl: '1536px',
      },
    },
    
  },
  plugins: [require('preline/plugin'),require('@tailwindcss/forms')],
}

