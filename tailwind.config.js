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
      primary: "#242E42",
      secondary: "#EDEDED",
      textColor: "#20463C",
      greenFaint: "#CBE5DE",
      white: "#FFF",
      accent: "#F52D56",
      IntercityPrimary: "#37323E",
      IntercityBrightPink: "#FF1654"
    
    },
    fontFamily: {
      RubikBold: ['RubikBold'],
  
    },
  },
  plugins: [],
};
