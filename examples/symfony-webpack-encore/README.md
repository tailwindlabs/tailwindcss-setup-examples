# Symfony (Webpack Encore)

To set up Tailwind with Symfony start by installing `symfony/twig-pack`, `symfony/webpack-encore-bundle` and `sensio/framework-extra-bundle`:
```shell script
composer require symfony/twig-pack symfony/webpack-encore-bundle sensio/framework-extra-bundle
```

After that installing `tailwindcss`, `postcss-import` and `autoprefixer` 
```shell script
yarn add --dev tailwindcss postcss-import autoprefixer
```

Next, use the `@tailwind` directive to inject Tailwind's `base`, `components`, and `utilities` styles into your CSS `assets/css/app.css`:

```css
@tailwind base;

@tailwind components;

@tailwind utilities;
```

Next, create a `postcss.config.js` file, add `tailwindcss` and `autoprefixer` as a plugin and pass the path to your config file:
```js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
```

Next, enable the PostCSS loader in `webpack.mix.js` file:

```js
const Encore = require('@symfony/webpack-encore');

Encore
    // ...
    .enablePostCssLoader((options) => {
        options.config = {
            path: './postcss.config.js'
        };
    })
    // ...
;

module.exports = Encore.getWebpackConfig();
```

Finally, import that CSS file in your Twig templates/layout `templates/base.html.twig`:

```html
<!-- ... --->
<head>
    <!-- ... --->
    {% block stylesheets %}
        {{ encore_entry_link_tags('app') }}
    {% endblock %}
</head>
<!-- ... --->
```

If you'd like to customize your Tailwind configuration, run `npx tailwindcss init` to create a `tailwind.config.js` file in your project root.
