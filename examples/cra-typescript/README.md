# CREATE REACT APP (CRA)

To add [Tailwind](https://tailwindcss.com/) to a [CRA](https://create-react-app.dev) project, start by installing `tailwindcss`, `postcss-import`, `autoprefixer`, `postcss`, `postcss-cli` and `npm-run-all`:

```sh
yarn add tailwindcss postcss-import autoprefixer postcss postcss-cli npm-run-all
```

Next, set up your PostCSS plugins by creating a `postcss.config.js` file and adding the following configuration:

```js
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
};

```

Next, set up your Tailwind config by creating a `tailwind.config.js` file and adding the following configuration:

```js
module.exports = {
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {},
  plugins: [],
  purge: [
    './src/**/*.ts',
    './src/**/*.tsx',
    './public/index.html',
  ],
}

```

Next, create a CSS file for your Tailwind styles. We've used `src/styles/tailwind.css` for this example:

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

/* you can add your custom styles here, for example */

html, body, #root {
  height: 100%;
}
```

Finally, import your CSS pos build in your `src/index.tsx` component to make them available globally:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
