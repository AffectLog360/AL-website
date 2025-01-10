// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}", // for new app router
      "./components/**/*.{js,ts,jsx,tsx}", // if you use /components
    ],
    theme: {
      extend: {
        fontFamily: {
          sora: ["Sora", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
  