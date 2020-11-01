# Next.js with Sass

To add Tailwind and Sass to a Next project, start by installing `node-sass`, `@zeit/next-sass`, `tailwindcss`, `postcss-import`, `autoprefixer` and `postcss-custom-properties`, `postcss-nested` for being able to use variables and nesting in Sass :

```sh
npm install node-sass @zeit/next-sass tailwindcss postcss-import autoprefixer postcss-custom-properties postcss-nested
```

Next, set up your PostCSS plugins by creating a `postcss.config.js` file and adding the following configuration:

```js
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-custom-properties'),
  ]
}
```

Next, create a SCSS file in a the `assets` folder for your Tailwind styles. We've used `assets/scss/tailwind.scss` for this example:

```scss
@import "~tailwindcss/base";
@import "~tailwindcss/components";
@import "~tailwindcss/utilities";
```

Finally, import your CSS in your main layout component. Here we're using `components/Layout.js`:

```jsx
import '../assets/scss/tailwind.scss'

export default ({ children }) => (
  <div>
    // ...
  </div>
)
```
### Optional: Add PurgeCSS

Install the plugin for PostCSS:

```sh
npm install @fullhuman/postcss-purgecss
```

In your `postcss.config.js` configure purgecss to check for JSX and JS files in your pages and components and use it like a plugin:

```js
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./components/**/*.jsx','./pages/**/*.js'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    purgecss
  ]
}
```


