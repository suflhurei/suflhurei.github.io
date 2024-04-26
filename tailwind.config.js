/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      'text': '#ffffff',
      'background': '#070707',
      'primary': '#577cc6',
      'secondary': '#8a9fc8',
      'link': '#9D92ED',
      'accent': '#8a9fc8',
     },
     fontSize: {
      '2xl': '2rem',
      '9xl': '10rem'
     }
     
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};