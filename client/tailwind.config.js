/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "4px",
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
        "light-blue": "#A1DFFF",
        "ash-blue":"#006DA6",
        "add":"#006DA6",
        "remove":"#D9534F",
        "back" : "#5BC0DE",
        "next":"#009688",
        "finish":"#4CAF50",

      }
    },
    plugins: [],
  },
};
