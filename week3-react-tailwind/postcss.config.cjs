export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // a deep indigo
        secondary: '#FBBF24', // a warm yellow
        accent: '#10B981', // teal/green
        bgLight: '#F3F4F6',
        bgDark: '#111827',
      },
    },
  },
};

darkMode: 'class'
