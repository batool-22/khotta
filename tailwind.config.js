module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'image': "url('/frame.svg')"
       })
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
