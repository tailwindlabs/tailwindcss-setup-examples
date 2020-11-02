# Rails with Webpacker

Setting up Tailwind with [Rails](https://rubyonrails.org/) is really simple.

First you need [Webpacker](https://github.com/rails/webpacker) to use [PostCSS](https://github.com/postcss/postcss)

Then install `tailwindcss` and `@fullhuman/postcss-purgecss` :

```sh
yarn add tailwindcss @fullhuman/postcss-purgecss
```

In your `postcss.config.js`, add `tailwindcss` and `@fullhuman/postcss-purgecss` as well:

```js
// only needed if you want to purge
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./app/views/**/*.html.erb"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    }),

    // only needed if you want to purge
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
}
```

Next, create a CSS file for your Tailwind styles. You have to store in it public folder `app/javascript/src/tailwind.css` and add this to it :

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

You need to import it in your `app/javascript/packs/application.js` file:

```js
import '../src/tailwind.css'
```

Finally, change the stylesheet link in your `app/views/layouts/application.html.erb`:

```diff
- <%= stylesheet_link_tag 'application', media: 'all', 'data-turbolinks-track': 'reload' %>
+ <%= stylesheet_pack_tag 'application', media: 'all', 'data-turbolinks-track': 'reload' %>
```

## Project setup

```
bundle
yarn
```

Start the server
```
bundle exec rails s
```

### Compiles and minifies for production

```
bundle exec rails webpacker:compile
```

That's it 🚀💎
