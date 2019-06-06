# Svelte

Setting up Tailwind with svelte is really simple, just install Tailwind and pocstcss-cli:

```sh
npm install tailwindcss postcss-cli --save-dev
```

If you want to remove unused styles, add PurgeCSS as well

```
npm install @fullhuman/postcss-purgecss
```

Create your Tailwind config file

```sh
./node_modules/.bin/tailwind init tailwind.js
```

Create a `postcss.config.js` file and add this to it

```js
const tailwindcss = require("tailwindcss");

// only needed if you want to purge
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.svelte", "./public/**/*.html"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),

    // only needed if you want to purge
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};
```

Next, create a CSS file for your Tailwind styles. You have to store in it public folder `public/tailwind.css` and add this to it :

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Update your `package.json` with the custom scripts.

`build:tailwind is only needed if you want to purge`

```js
"scripts": {
    "watch:tailwind": "postcss public/tailwind.css -o public/index.css -w",
    "build:tailwind": "NODE_ENV=production postcss public/tailwind.css -o public/index.css",
    "dev": "run-p start:dev autobuild watch:build",
    "build": "npm run build:tailwind && rollup -c",

}
```

Finally, add a stylesheet link to your `public/index.html` file

```html
<link rel="stylesheet" href="index.css" />
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```
