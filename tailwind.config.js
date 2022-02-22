module.exports = {
  mode: 'jit', 
  purge: [
    
     './dist/*.{html,css}',
      
    
  ],
  content: [
    "./src/*.{html,css}",
  ],
  theme: {
    fontFamily:{
      spartan: 'Spartan'
    },
    extend: {
      colors: {
        a1a1a1: '#a1a1a1',
        siva: '#454545',
      },
      backgroundImage: {
        'hero-1': "url('/src/images/desktop-image-hero-1.jpg')",
        'hero-2': "url('/src/images/desktop-image-hero-2.jpg')",
        'hero-3': "url('/src/images/desktop-image-hero-3.jpg')",
      },
      width: {
        '37.5': '37.5rem',
        '52.5': '52.5rem',
        '26.25':'26.25rem',
        '27.5': '27.5rem',
        '36.25': '36.25rem',
        '60': '60rem',
        '70': '70rem',
        '80': '80rem',
        

      },
      letterSpacing:{
        bigg: '0.75em',
        lilbig: '0.25em'
      },
      padding: {
        '75px': '75px',
        '50px': '50px',
        '62px': '62px'

      },
      screens: {
        '3xl': '1750px',
        '4xl': '1920px',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
