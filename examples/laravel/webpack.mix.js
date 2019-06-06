const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

let tailwindcss = require('tailwindcss');

mix.js('resources/js/app.js', 'public/js');
mix.postCss('resources/css/tailwind.css', 'public/css/app.css', [
        require('tailwindcss'),
    ]);

/*
 * Use tailwind as SASS
mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/tailwind.scss', 'public/css/app.css')
    .options({
        processCssUrls: false,
        postCss: [
            tailwindcss('./tailwind.config.js')
        ],
    });
*/
