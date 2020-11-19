# Hugo

Let's setup Tailwind with Hugo, first install Tailwind and postcss-cli:

```sh
# Do npm init if there is no package.json in your root folder
npm init

npm install tailwindcss postcss-cli --save-dev
```

Create a `postcss.config.js` file in the root directory and add this:

```js
module.exports = {
  plugins: [require("tailwindcss")],
};
```

Next, create a CSS file for your Tailwind styles. Create the file in `assets/css/tailwind.css` folder and add the following code:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Finally, import that CSS file in your layout:

```html
{{ $styles := resources.Get "css/tailwind.css" }}
{{ $styles = $styles | resources.PostCSS (dict "inlineImports" true) }}

{{ if hugo.IsProduction }}
  {{ $styles = $styles | minify }}
{{ end }}

<link href="{{ $styles.Permalink }}" rel="stylesheet" />
```

## For purging CSS

Create your tailwind config file:

```sh
npx tailwindcss init
```

Update the purge options with all the folders you want like this:

```js
module.exports = {
  purge: {
    content: ["./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html"],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
```

**NOTE:** For proper purge to occur in production build, you must pass `NODE_ENV` flag like this:

```sh
NODE_ENV=production hugo
```
