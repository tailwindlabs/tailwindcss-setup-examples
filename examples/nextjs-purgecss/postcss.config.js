// const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        require('postcss-easy-import'),
        require('tailwindcss'),
        require('postcss-nested'),
        require('postcss-custom-properties'),
        require('autoprefixer')
    ]
}