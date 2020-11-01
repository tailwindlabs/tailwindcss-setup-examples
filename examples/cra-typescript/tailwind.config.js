module.exports = {
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {},
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
  ],
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.ts',
      './src/**/*.tsx',
      './public/index.html',
    ],
    options: {}
  },
}
