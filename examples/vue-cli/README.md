# vue-cli

Setting up Tailwind with vue-cli is really simple, just install Tailwind:

```sh
npm install tailwindcss
```

Then add it to your PostCSS config (use a separate `postcss.config.js` file):

```js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
```

Next, create a CSS file for your Tailwind styles. We've stored in it `src/assets/tailwind.css` for this example:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Finally, import that CSS file at the bottom of your main `App.vue` component:

```html
<template>
  <!-- ... --->
</template>

<script>
  /* ... */
</script>

<style src="./assets/tailwind.css">
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
