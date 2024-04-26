/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      'text': '#ffffff',
      'background': '#090909',
      'bgsecondary': '#141414',
      'primary': '#5d4de1',
      'secondary': '#2974c9',
      'link': '#9D92ED',
      'accent': '#19134b',
     }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};