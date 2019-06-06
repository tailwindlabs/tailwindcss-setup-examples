# NextJS with Tailwind, Sass and PurgeCSS

## Tailwind

Once you have installed [NextJS](https://github.com/zeit/create-next-app), install Tailwind CSS:


```
npm install tailwindcss
```

Some PostCSS packages and autoprefixer to make it work with Sass:

```
npm install -D autoprefixer postcss-custom-properties postcss-easy-import postcss-import postcss-nested
```

## PostCSS Config

Create a postcss.config.js file in your project's root:

```
module.exports = {
    plugins: [
        require('postcss-easy-import'),
        require('tailwindcss'),
        require('postcss-nested'),
        require('postcss-custom-properties'),
        require('autoprefixer')
    ]
}
```

## Adding Sass and PurgeCSS

Install the Sass and PurgeCSS plugins for NextJS

```
npm install -D node-sass @zeit/next-sass next-purgecss
```

## Setup Sass and PurgeCSS

Create or modify the next.config.js file at your porject's root:

```
const withSass = require('@zeit/next-sass');
const withPurgeCss = require('next-purgecss');

module.exports = withSass(withPurgeCss({
  purgeCssPaths: [
    'pages/**/*',
    'components/**/*'
  ]
}));
```

And finally create a scss file for your Tailwind styles and import it in your pages or layouts:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Example

[Check the example on github](https://github.com/migramcastillo/nextjs-tailwind-sass-template)