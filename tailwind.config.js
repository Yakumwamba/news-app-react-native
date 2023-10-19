/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './screens/**/*.{js,jsx,ts,tsx}','./components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'image-one':  "./static/image4.png"
      }
    },
    colors: {
      PrimaryGreen: ""
    }
  },
  plugins: [],
};
