/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8FB78B", // Soft Green
        heroBackground: "#AED9E0", // Light Blue
        textContrast: "#FFFFFF", // White (for text on hero background)
        heading: "#2D3748", // Dark Grey (for headings)
        button: "#6B7280", // Grey (for buttons)
        border: "#CBD5E0", // Light Grey (for borders and dividers)
        heroHeading: "#2D3748",
      },
    },
  },
  plugins: [],
};
