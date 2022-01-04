module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      sans: ['Rubik', 'sans-serif']
    },
    
    extend: {
      colors: {
        primary: 'hsl(238, 40%, 52%)',
        "very-light-gray": "hsl(228, 33%, 97%)",
        danger: "hsl(358, 79%, 66%)"
      },
    },
  },
  plugins: [],
}
