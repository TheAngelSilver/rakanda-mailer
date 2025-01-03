/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        coffee: {
          light: "#D4A574",
          medium: "#8B4513", // Adding this to match styled-components theme
          DEFAULT: "#8B4513",
          dark: "#3B2515",
        },
      },
    },
  },
  plugins: [],
};
