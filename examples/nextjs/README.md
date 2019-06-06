# Next.js

To add Tailwind to a Next project, start by installing `@zeit/next-css`, `tailwindcss`, `postcss-import` and `autoprefixer`:

```sh
npm install @zeit/next-css tailwindcss postcss-import autoprefixer
```

Next, set up your PostCSS plugins by creating a `postcss.config.js` file and adding the following configuration:

```js
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
```

Next, create a CSS file in your `static` folder for your Tailwind styles. We've used `static/css/tailwind.css` for this example:

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

Finally, import your CSS in your main layout component. Here we're using `components/Layout.js`:

```jsx
import '../static/css/tailwind.css'

export default ({ children }) => (
  <div>
    // ...
  </div>
)
