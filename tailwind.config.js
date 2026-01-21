/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        flyYellow: "#FFC400",
        flyYellowDark: "#FFB300",
        flyBlack: "#0B0B0B",
        flyBg: "#F8F8F8",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11,11,11,0.08)",
      },
    },
  },
  plugins: [],
}
