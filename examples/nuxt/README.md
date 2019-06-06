# Nuxt

Setting up Tailwind with [NuxtJS](https://nuxtjs.org) is really simple, just add the [@nuxtjs/tailwindcss](https://github.com/Atinux/nuxt-tailwindcss) module:

```sh
npm install @nuxtjs/tailwindcss
```

Then add it to your `nuxt.config.js` file:

```js
export default {
  modules: [
    '@nuxtjs/tailwindcss'
  ]
}
```

That's it ✨

The module will:
- Create a CSS file for your Tailwind styles in `assets/css/tailwind.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- Import this file as global css
- Create a `tailwind.config.js` file.

```js
module.exports = {
  theme: {},
  variants: {},
  plugins: []
}
```
- Configure [nuxt-purgecss](https://github.com/Developmint/nuxt-purgecss)
- Set [postcss-preset-env](https://preset-env.cssdb.org) to stage 1, [learn more here](https://tailwindcss.com/docs/using-with-preprocessors#future-css-features)

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

### Start the server for production

```
npm run start
```

### Generate as a static website

```
npm run generate
```
