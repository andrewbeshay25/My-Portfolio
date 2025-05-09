// tailwind.config.mjs
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        accent: "#3B82F6",
        "accent-dark": "#1E3A8A",
        background: "#F9FAFB",
        text: "#1F2937",
      },
    },
  },
  plugins: [],
};
