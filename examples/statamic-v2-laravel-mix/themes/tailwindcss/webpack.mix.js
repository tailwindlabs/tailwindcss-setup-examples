const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.postCss('./resources/css/app.css', './css/app.css', [
        tailwindcss('./tailwind.config.js')
    ]
);