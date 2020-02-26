# Gatsby

To setup Tailwind with Gatsby, install Tailwind and Gatsby's PostCSS plugin:

```
npm install gatsby-plugin-postcss tailwindcss
```

Add the newly installed plugin to `gatsby-config.js` and add Tailwind to your
PostCSS config:

```js
// in gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-postcss`,
    options: {
      postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
],
```

Alternatively, you can create a `postcss.config.js` file and add Tailwind to
that file instead:

```js
// in gatsby-config.js
plugins: [`gatsby-plugin-postcss`]
```

```js
// in postcss.config.js
module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
}
```

Next, create a CSS file for your Tailwind styles. We've stored in it
`src/styles/tailwind.css` for this example:

```css
/* in src/styles/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Finally, import the CSS file by adding it to `gatsby-browser.js`:

```js
// in gatsby-browser.js
import "./src/styles/tailwind.css"
```

## Setup PurgeCSS

To add PurgeCSS, install the PurgeCSS plugin:

```
npm install gatsby-plugin-purgecss
```

Then add the PurgeCSS plugin to `gatsby-config.js`. Enable Tailwind support by
using the `tailwind: true` option:

```js
// in gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-postcss`,
    options: {
      postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  // gatsby-plugin-purgecss should be after gatsby-pulgin-postcss
  {
    resolve: `gatsby-plugin-purgecss`,
    options: {
      tailwind: true,
      ignore: ["node_modules"],
    },
  },
]
```

Finally, update `src/styles/tailwind.css`:

```css
/* purgecss start ignore */
@tailwind base;
@tailwind components;
/* purgecss end ignore */

@tailwind utilities;
```
