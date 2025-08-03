/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  animation: {
    pulseSlow: 'pulse 4s ease-in-out infinite',
  },
}
  },
  plugins: [],
}