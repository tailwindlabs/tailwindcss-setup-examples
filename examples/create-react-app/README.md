# create-react-app

Setting up Tailwind with create-react-app is really simple, just install Tailwind and postcss-cli:

```sh
npm install tailwindcss postcss-cli
```

Then add it to your PostCSS config (use a separate `postcss.config.js` file):

```js
module.exports = {
  plugins: [
    require('tailwindcss'),
    //other plugins (autoprefixer, purgecss, postcss-import, postcss-preset-env, etc.)
  ]
}
```

Next, create a CSS file for your Tailwind styles. We've stored in it `src/assets/tailwind.css` for this example:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```


Update your `package.json` with the custom scripts.

```json
"scripts": {
  "build:css": "postcss src/assets/tailwind.css -o src/assets/tailwind.dist.css",
  "watch:css": "npm run build:css -- -w",
  "start": "npm run watch:css & react-scripts start",
  "build": "npm run build:css && react-scripts build"
}
```
Add the generated file to your `.gitignore`
```gitignore
tailwind.dist.css
```

And finally, import the generated css file in your root (`index.js`) file

```js
import "./assets/tailwind.dist.css";
```

### Why using postcss?
Postcss will allow you to use other plugins like autoprefixer, or cssnano. See the relative part in [Tailwind documentation](https://tailwindcss.com/docs/installation#using-tailwind-with-postcss).

### To go further
With utility classes library like Tailwind, it can be painfull to manage `classNames` on React Components. It's why you may need the [classed-components](https://github.com/mathieutu/classed-components) package.

It allows you to write your classes as arrays, objects, functions, or template strings:

```jsx
const Nav = classed.nav([
  'flex',
  'items-center',
  'justify-between',
  'flex-wrap',
  ({ isBlue }) => ({ 'bg-blue-500': isBlue }),
  'p-6',
])

<Nav isBlue={isBlue}></Nav>
```

instead of 

```jsx
<nav classNames={`flex items-center justify-between flex-wrap p-6 ${isBlue ? 'bg-blue-500' : ''}`}></nav>
```

This example project uses it, and you can find more information about its api on [github](https://github.com/mathieutu/classed-components).


## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run start
```

### Compiles and minifies for production

```
npm run build
```
