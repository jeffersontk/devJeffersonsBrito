module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        brand: {
          100: '#4688D7',
          200: '#4688D7'
        },
        white: {
          100: "#fff",
          200: "#f9f9f9"
        },
        green: {
          300: "#015F43",
          500: "#00875F",
          700: "#00B37E",
        },
        blue: {
          500: "#81D8F7",
          700: "#2b3656",
          800: "#222b45",
          900: "#1b2237",
        },
        purple: {
          500: "#5865f2",
          700: "#323fba"
        },
        orange: {
          500: "#FBA94C"
        },
        red: {
          500: "#f75a68"
        },
        gray: {
          100: "#e1e1e6",
          200: "#c4c4cc",
          300: "#8d8d99",
          500: "#323238",
          600: "#29292e",
          700: "#121214",
          900: "#09090a",
        }
      },
      height: {
        '100': '28rem',
        '110': '32rem',
        '120': '36rem',
        '130': '40rem',
      },
      minWidth: {
        '40': '10rem',
        '60': '15rem',
      },
    },
  },
  variants: {
    display: ['children', 'default', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
  },
  plugins: [
    require('tailwindcss-children'),
  ],
}