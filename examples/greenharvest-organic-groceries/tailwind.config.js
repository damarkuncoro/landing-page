/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22c55e', /* Fresh green */
        secondary: '#16a34a', /* Dark green */
        accent: '#a3e635', /* Lime green */
        background: '#f6fef9', /* Very light green */
        foreground: '#052e16', /* Dark green text */
        muted: '#64748b', /* Gray for muted text */
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}