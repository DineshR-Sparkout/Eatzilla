/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
    theme: {
    extend: {
      screens: {
        xs:'400px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1440px',
      },
      container: {
        center: true,
        screens: {
          sm: '600px',
          md: '720px',
          lg: '960px',
          xl:'1140px',
          '2xl':'1140px'
        },
        padding:'1rem',
      },
      colors:{
        'midnight':'#1F2A37',
        'link-water':'#D1D5DB',
        'soap-stone':'#111928',
        'dark-cerulean':'#008352',
        'saddle':'#249641',
        'catalina-blue':'#6B7280',
        'gulf-blue':'#9CA3AF',
        'alice-blue':'#F9FAFB',
        'ghost-white':'#FAFAFA'
      },
      fontFamily:{
        Inter:'Inter',
        poppins:'Poppins',
      }
    },
  },
  plugins: [],
}
