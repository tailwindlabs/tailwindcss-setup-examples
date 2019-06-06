const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./components/**/*.jsx','./pages/**/*.js'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    //Uncomment this line if you want to use purgecss
    //purgecss
  ]
}
