module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#222B45",
        "secondary-dark": "#151A30",
        "primary-light": "#F5f5f5",
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
      }
    },
  },
  variants: {
    display: ['children', 'default', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
  },
  plugins: [
    require('tailwindcss-children'),
  ],
}