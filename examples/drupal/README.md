# Drupal

Example of setting up Tailwind and PurgeCSS in a Drupal theme using Laravel Mix. Comes with a breakpoints config file to match Tailwind defaults.

## Instructions

Initialize your package.json - if not already done so.

__Yarn__: `yarn init`

__NPM__: `npm init`

Install Tailwind, Laravel Mix, PurgeCSS and cross-env

__Yarn__
```bash
yarn add --dev tailwindcss laravel-mix @fullhuman/postcss-purgecss cross-env
```

__NPM__
```bash
npm install --dev tailwindcss laravel-mix @fullhuman/postcss-purgecss cross-env
```

__NOTE__: Check the example package.json _scripts_ section just in case the helper scripts for running mix weren't added.

Create a css file with your tailwind styles. In this theme, we've stored them in `css/main.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Make sure to add the path to the css file to your `theme_name.libraries.yml` config

```yaml
global-styling:
  version: 1.x
  css:
    theme:
      dist/css/main.css: {}
```

AND register the new library under the `libraries` key of your `theme_name.info.yml` file

```yaml
libraries:
  - theme_name/global-styling
```

Generate your TailwindCSS config
```bash
npx tailwind init
```

Generate your Laravel-Mix config by copying the default file. (Comes with documentation for other options available to you.)

```bash
cp node_modules/laravel-mix/setup/webpack.mix.js ./
```

Towards the top of your Mix config, add the following for purgecss:

```js
const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: ["./templates/**/*.twig", "./js/**/*.vue"],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});
```

The above is taken directly from the official [documentation](https://tailwindcss.com/docs/controlling-file-size#setting-up-purgecss) but with modifications to work with this simple drupal theme.

Next add a postCSS task to:
1. Compile your tailwind styles
2. Autoprefix your styles.
3. To run purgecss on production builds.

```js
mix.postCss("css/main.css", "dist/css", [
  require("tailwindcss"),
  require("autoprefixer"),
  ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
]);
```

Before installing the theme, make sure to run `npm run dev` or `npm run prod` at least once.

## Theme Setup

1. Copy the `theme_name` folder into your project's `themes/custom`
  * Rename and replace all instances of `theme_name` to whatever you desire
2. Run `npm install`
  * If you prefer yarn, run `yarn import`, delete the `package-lock.json` file, then run `yarn install`.
3. Install the theme in the Drupal admin `/admin/appearance`
4. Clear the cache
  * From the dashboard, go to `/admin/config/development/performance` and "Clear All Caches"
  * Or, if you using drush, run `drush cr`

### Available Commands

#### Compile and hot reloading
```
npm run watch
```

#### Compile and build for production
```
npm run prod
```