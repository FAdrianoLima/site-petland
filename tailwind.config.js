module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#322783",
        secondary: "#194883",
      },
      zIndex: { 9999: "9999" },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1240px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1920px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1921px',
        // => @media (min-width: 1536px) { ... }
      }
    },
    fontFamily: {
      body: ['Inter'],
    },
    
  },
  plugins: [],
};
