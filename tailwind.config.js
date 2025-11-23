/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          50: '#f0f9fa',
          100: '#e1f3f5',
          200: '#c3e7eb',
          300: '#a5dce1',
          400: '#87d1d7',
          500: '#0891b2',
          600: '#0ea5e9',
          700: '#06b6d4',
          800: '#0d9488',
          900: '#0f172a',
        },
      },
    },
  },
  plugins: [],
}
