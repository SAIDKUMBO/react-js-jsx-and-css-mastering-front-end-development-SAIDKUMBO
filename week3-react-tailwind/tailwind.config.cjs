/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode via a 'dark' class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind scans all JS/JSX files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',   // Deep Indigo
        secondary: '#FBBF24', // Warm Yellow
        accent: '#10B981',    // Teal/Green
        bgLight: '#F3F4F6',   // Light gray background
        bgDark: '#111827',    // Dark gray background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
