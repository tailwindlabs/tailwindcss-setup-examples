# [Stencil](https://stenciljs.com)

For a new Stencil project follow the [getting started](https://stenciljs.com/docs/getting-started) guide.

To add Tailwind to a Stencil project, start by installing `@fullhuman/postcss-purgecss`, `@stencil/postcss`, `autoprefixer`, `cssnano` and `tailwindcss`:

```sh
npm install @fullhuman/postcss-purgecss @stencil/postcss autoprefixer cssnano tailwindcss --save-dev
```

Next, set up the PostCSS plugin in stencil.config.ts

```js
import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.tsx', './src/index.html'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

export const config: Config = {
  globalStyle: 'src/global/app.css',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      baseUrl: 'http://localhost:5000'
    }
  ],
  plugins: [
    postcss({
      plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        autoprefixer(),
        ...(process.env.NODE_ENV === 'production'
          ? [purgecss, require('cssnano')]
          : [])
      ]
    })
  ]
};
```

You only want to use purgecss for production builds so modify package.json to ensure builds are run the NODE_ENV set to production

```js
  "scripts": {
    "build": "NODE_ENV=production stencil build --prerender",
    "start": "stencil build --dev --watch --serve"
  },
```

Consider using `cross-env` if your team uses multiple operating systems.

Next, create a CSS file in your `global` folder for your Tailwind styles. We've used `src/global/css/app.css` for this example:

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

Finally, import your CSS in the index.html in `src/index.html`:

```html
<link href="/build/app.css" rel="stylesheet" />
```

## Using Tailwind class in component files

You can either use classes in component files eg. `src/components/app.tsx` like this

```html
<div
  class="antialiased text-green-900 flex items-center justify-center min-h-screen"
></div>
```

this adds the CSS to the main index.html file

## Scoped CSS

Using a css file and specifying Using `scoped: true` in the component inlines the CSS into the component output.

See `src/components/scoped-css/index.tsx` for an example

```tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'scoped-css',
  styleUrl: './scoped-css.css',
  scoped: true
})
export class ScopedCss {
  @Prop()
  greeting: string = 'Hello';
  render() {
    return <div class="scoped-class">{this.greeting}</div>;
  }
}
```

where `src/components/scoped-css/scoped-css.css` looks like this

```css
.scoped-class {
  @apply text-green-500;
}
```

## Shadow Dom CSS

Using a css file and specifying Using `shadow: true` in the component inlines the CSS into the component output and style is applied in the shadow dom.

See `src/components/shadow-css/index.tsx` for an example

```tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'shadow-css',
  styleUrl: './shadow-css.css',
  shadow: true
})
export class ShadowCss {
  @Prop()
  message: string = 'World';
  render() {
    return <div class="shadow-class">{this.message}</div>;
  }
}
```

where `src/components/shadow-css/shadow-css.css` looks like this

```css
:host {
}

.shadow-class {
  @apply text-blue-500;
}
```
