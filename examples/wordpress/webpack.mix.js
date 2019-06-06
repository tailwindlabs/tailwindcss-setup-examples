const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.postCss('./resources/css/style.css', './css/style.css',
	tailwindcss('./tailwind.config.js')
);