/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        textSecondary:"var(--color-text-secondary)"
      },
      backgroundColor:{
        primary:"var(--color-primary)",
        primary_light:"var(--color-primary-light)",
      secondary:"var(--color-secondary)"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(-15deg, rgba(167,186,163,1) 0%, rgba(112,152,133,1) 53%, rgba(167,186,163,1) 100%)',
      },
      fontFamily:{
        playfair:["Playfair"],
        lato:["Lato"]
      
      },
      borderColor:{
        secondaryBorder:"var(--color-secondary)"
      }
    },
  },
  plugins: [],
}