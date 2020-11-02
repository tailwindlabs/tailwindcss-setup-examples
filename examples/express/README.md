# Express.js

Setting up Tailwind with Express is really simple, just install Tailwind:

```sh
npm install tailwindcss --save-dev
```

Create the tailwind configuration file

This command will create a tailwind.js file in your root directory

```sh
./node_modules/.bin/tailwind init tailwind.js
```

Install `postcss` if you haven't already:

```sh
npm install postcss-cli
```

Create a new postcss config file:

```sh
touch postcss.config.js
```

Add this to your new ostcss config file:

```js
const tailwindcss = require('tailwindcss')

module.exports = {
  "plugins": [
    require('tailwindcss')('tailwind.js'),
    require('autoprefixer')(),
  ]
}
```

Next, create a CSS file for your Tailwind styles. We've stored in it `public/stylesheets/tailwind.css` for this example:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Add these scripts to your `package.json` file (this replaces existing start command):

```js
"scripts": {
    "start": "yarn build:css && node ./bin/www",
    "build:css": "postcss public/stylesheets/tailwind.css -o public/stylesheets/style.css"
}
````

Now you can run your app with `npm run start` and it will recompile tailwindcss each time.

Make sure your `style.css` file is imported into your view.
