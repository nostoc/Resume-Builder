/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "times-new-roman": ["Times New Roman", "serif"],
      },
      colors:{
        "ocean-blue": "#6C63FF",
      }
    },
    plugins: [],
  },
};
