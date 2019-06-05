Setup Tailwind for Laravel Application
--

**Prerequisites**

Node: [v8+](https://github.com/tailwindcss/tailwindcss/issues/839)

[Install Tailwind via NPM](https://tailwindcss.com/docs/installation/#1-install-tailwind-via-npm)

`npm install tailwindcss --save-dev`

[Create a Tailwind config file](https://tailwindcss.com/docs/installation#2-create-a-tailwind-config-file)

`./node_modules/.bin/tailwind init tailwind.js`

Rename `tailwind.js` to `tailwind.config.js`

[Use Tailwind in your css](https://tailwindcss.com/docs/installation/#2-add-tailwind-to-your-css)

`vim resources/css/tailwind.css`

Or; if you want `SCSS`

`vim resources/scss/tailwind.scss`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

[Process your CSS with Tailwind](https://tailwindcss.com/docs/installation/#laravel-mix)

Using **Laravel Mix** `webpack.mix.js`

```js
const mix = require('laravel-mix');

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
```

Run

`npm run watch`

Import css in your views

`<link href="{{ asset('css/app.css') }}" rel="stylesheet">`

See `welcome.blade.php`
