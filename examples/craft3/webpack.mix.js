const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: 'import-glob-loader'
            }
        ]
    }
});

mix.copy('src/img', 'public_html/assets/img', false);

mix.js('src/js/main.js', 'public_html/assets/js')
    .sass('src/scss/style.scss', 'public_html/assets/css')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')]
    })
    .purgeCss({
        enabled: mix.inProduction(),
        globs: [path.join(__dirname, 'public_html/templates/**/*.html')],
        extensions: ['html', 'twig', 'js', 'php']
    })
    .sourceMaps();

mix.setPublicPath('public_html/assets');
mix.setResourceRoot('assets/');

mix.browserSync({
    proxy: process.env.MIX_PROXY,
    files: [
        'public_html/assets/css/{*,**/*}.css',
        'public_html/assets/js/{*,**/*}.js',
        'public_html/templates/{*,**/*}.+(html|twig)'
    ]
});
