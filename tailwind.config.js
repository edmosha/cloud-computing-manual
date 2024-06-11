/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT'

export default withMT({
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: '#f5841f',
        "primary-dark": '#e57919',
        gray: {
          300: '#f3f4f8',
          400: '#eee',
        }
      }
    },
  },
  plugins: [],
})
