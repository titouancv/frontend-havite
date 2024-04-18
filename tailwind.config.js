/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#305536',
        'secondary': '#ff7d72',
        'light-3': '#eedfc2',
        'light-2': '#f3ead6',
        'light-1': '#f9f4ea',
      },
    },
    fontSize: {
      h1: '54.9px',
      h2: '43.9px',
      h3: '35.2px',
      h4: '28.1px',
      h5: '22.5px',
      'body-text': '18px',
      'caption-text': '14.4px',
      'tiny-text': '11.5px',
    }
  },
  plugins: [],
}

