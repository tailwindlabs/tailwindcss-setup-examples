// Minify css
const cssnano = require('cssnano')

// Remove what's not need from tailwind
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./components/**/*.jsx', './pages/**/*.js'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})

// import tailwindcss
const tailwind = require('tailwindcss')('./tailwind.config.js')

// to inline @import rules content with extra features
const postcssImport = require('postcss-import')

// add vendor prefixes
const autoprefixer = require('autoprefixer')

// common plugins for both dev & production env
let plugins = [postcssImport, tailwind, autoprefixer]

// add only when production
if (process.env.NODE_ENV === 'production') {
  plugins = plugins.concat([
    purgecss,
    cssnano({
      preset: 'default',
    }),
  ])
}

// export plugins
module.exports = { plugins }
