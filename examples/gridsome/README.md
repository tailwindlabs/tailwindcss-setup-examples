# gridsome

If you don't have an existing Gridsome project, check out their docs on how to get started.

Once you have a Gridsome site, install Tailwind by running this in the root of the project:

```
npm install tailwindcss
```

More than likely, you want to use PurgeCSS as well, so let's install that too:

```
npm install @fullhuman/postcss-purgecss
```

Next, initialize your Tailwind config:

```
./node_modules/.bin/tailwind init
```

Then in `gridsome.config.js`, require Tailwind and add it as a PostCSS plugin, as well as our PurgeCSS config:

```js
// gridsome.config.js
const purgecss = require('@fullhuman/postcss-purgecss')
const tailwind = require('tailwindcss')

const postcssPlugins = [
  tailwind('./tailwind.config.js'),
]

// add purgecss only when building for production
if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
```

Now let's create a `purgecss.config.js` file to define some options for PurgeCSS:

```js
// purgecss.config.js

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\\/]+/g)
  }
}

module.exports = {
  content: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.html',
    './src/**/*.pug',
    './src/**/*.md',
  ],
  whitelist: [
    'body',
    'html',
    'img',
    'a',
    'g-image',
    'g-image--lazy',
    'g-image--loaded',
  ],
  extractors: [
    {
      extractor: TailwindExtractor,
      extensions: ['vue', 'js', 'jsx', 'md', 'html', 'pug'],
    },
  ],
}
```

Next up, we'll create a file at `src/assets/tailwind.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Finally, we'll import that into our `src/main.js` file:

```js
import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/tailwind.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
```

Now you should be all set to start using Tailwind and PurgeCSS in your Gridsome project!