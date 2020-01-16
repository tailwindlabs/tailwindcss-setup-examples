# Next.js

To add Tailwind to a Next (^9.2.0) project, start by installing `tailwindcss`, `postcss-import` and `autoprefixer`:

```sh
npm install tailwindcss postcss-import autoprefixer --save
```

Next, set up your PostCSS plugins by creating a `postcss.config.js` file and adding the following configuration:

```js
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer"
  ]
};

```

Next, create a CSS file for your Tailwind styles. We've used `css/tailwind.css` for this example:

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

Finally, import your CSS in your `_app.js` component to make them available globally:

```jsx
import React from 'react'
import App from 'next/app'
import '../css/tailwind.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
```
## Setting up Purgecss (optional)
To add Purgecss, start by installing `@fullhuman/postcss-purgecss`. 

```sh
npm install @fullhuman/postcss-purgecss --save
```

Finally, add Purgecss to PostCSS plugins by updating the `postcss.config.js` file and adding the following configuration:

```js
const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  }
];
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};

```

[Learn more about using Purgecss with Tailwind here.](https://tailwindcss.com/docs/controlling-file-size#setting-up-purgecss)
