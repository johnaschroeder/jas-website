/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#293c63',
        text: '#080505',
        offWhite: '#f7f7f7',
        mainBlack: '#222',
        mainGrey: '#ececec',
        darkGrey: '#afafaf',
        mainWhite: '#fff',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
