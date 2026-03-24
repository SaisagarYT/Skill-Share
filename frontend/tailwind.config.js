/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        primary: "#b0ffb3",
        accent: "#00ff5f",
        dark: "#111111",
        light: "#f8fef8",
        heading: "#111111",
        subheading: "#5e5e5e",
        button: "#00ff5f",
        buttonText: "#111111",
      },
      borderRadius: {
        xl: "1.25rem",
      },
      boxShadow: {
        hero: "0 0 0 1px #b0ffb3, 0 8px 32px 0 rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
