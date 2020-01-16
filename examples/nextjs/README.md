# Next.js

To add Tailwind to a Next (^9.2.0) project, start by installing `tailwindcss`, `postcss-import` and `autoprefixer`:

```sh
npm install tailwindcss postcss-import autoprefixer
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
