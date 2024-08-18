/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "times-new-roman": ["Times New Roman", "serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      colors:{
        "ocean-blue": "#6C63FF",
        "light-blue": "#c8f8ff",
        "ash-blue":"#006DA6",
      }
    },
    plugins: [],
  },
};
