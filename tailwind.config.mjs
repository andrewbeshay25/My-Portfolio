/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1F2937",     // deep slate
          accent: "#10B981",      // emerald
          background: "#F3F4F6",  // light gray
          text: "#111827",        // almost black
        },
      },
    },
    plugins: [],
  };
  