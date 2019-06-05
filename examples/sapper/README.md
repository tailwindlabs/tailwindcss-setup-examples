# Sapper

Setting up Tailwind with Sapper is really simple, just install Tailwind and pocstcss-cli:

```sh
npm install tailwindcss postcss-cli --save-dev
```

Create your Tailwind config file

```sh
./node_modules/.bin/tailwind init tailwind.js
```

Create a `postcss.config.js` file and add this to it

```js
const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [tailwindcss("./tailwing.js")]
};
```

Next, create a CSS file for your Tailwind styles. You have to store in it static folder `static/tailwind.css` and add this to it :

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Update your `package.json` with the custom scripts.

```js
"scripts": {
    "watch:tailwind": "postcss static/tailwind.css -o static/index.css -w",
}
```

Finally, add a stylesheet link to your `src/template.html` file

```html
<link rel="stylesheet" href="tailwind.css" />
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

Run these commands in a seperate window

```
npm run watch:tailwind
```

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```
