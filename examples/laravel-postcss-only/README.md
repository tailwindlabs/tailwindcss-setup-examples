# Laravel (PostCSS-only)

To set up Tailwind with Laravel start by installing Tailwind and postcss-import:

```sh
npm install tailwindcss postcss-import
```

Next, create a CSS file for your Tailwind styles. We've stored in it `resources/css/tailwind.css` for this example:

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

Next, add your CSS file to your `webpack.mix.js` file and configure the `postcss-import` and `tailwindcss` PostCSS plugins:

```
mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/tailwind.css', 'public/css/tailwind.css', [
        require('postcss-import'),
        require('tailwindcss'),
    ]);
```

Finally, import that CSS file in your Blade templates/layout:

```html
<!-- ... --->
<head>
    <!-- ... --->
    <link href="{{ asset('css/tailwind.css') }}" rel="stylesheet">
</head>
<!-- ... --->
```

If you'd like to customize your Tailwind configuration, run `tailwind init` to create a `tailwind.config.js` file in your project root.
