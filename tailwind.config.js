module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-inter), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {
      colors: {
        gray: "#f6f6f6",
        primary: {
          100: "#eff6ff", // Lighter shade
          200: "#dbeafe", // Slightly darker shade
          300: "#93c5fd", // Mid shade
          400: "#93c5fd",
          500: "#3b82f6", // Base color slightly lighter for a gradient effect
          600: "#2563eb", // Darker shade
          700: "#1d4ed8",
          800: "#1e40af", // Base color
          900: "#002088", // Darkest shade
        },
        secondary: {
          100: "rgb(235, 236, 245)",
          200: "rgb(214, 215, 235)",
          300: "rgb(193, 194, 225)",
          400: "rgb(172, 173, 215)",
          500: "rgb(111, 114, 185)", // Base color
          600: "rgb(100, 103, 166)",
          700: "rgb(89, 92, 147)",
          800: "rgb(78, 81, 128)",
          900: "rgb(67, 70, 109)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
