# angular-cli

To set up Tailwind with angular-cli we need a builder allowing us to access the configuration of webpack. Also install the css purger for production:

```sh
npm install tailwindcss --save
npm install @angular-builders/custom-webpack --save-dev
npm install -D @fullhuman/postcss-purgecss --save-dev
```
Now create a `tailwind.config.js` file by running this command:
```sh
npx tailwind init
```
The file `tailwind.config.js` will look something like this:
```js
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```

Next we create `src/tailwind.scss` and import tailwind classes and variables:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Then create `extra-webpack.config.js` and put the following content:
```js
// According to https://tailwindcss.com/docs/controlling-file-size#setting-up-purge-css-manually
const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    // etc.
  ],

  // This is the function used to extract class names from your templates
  defaultExtractor: content => {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

    return broadMatches.concat(innerMatches)
  }
})

// According to:
// https://tailwindcss.com/docs/installation
// and
// https://dev.to/beavearony/building-tailwind-css-in-an-angular-cli-project-e04
module.exports = (config, options) => {
  console.log(`Using '${config.mode}' mode`);
  config.module.rules.push({
    test: /tailwind\.scss$/,
    use: [
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            require('tailwindcss')('./tailwind.config.js'),
            require('autoprefixer'),
            ...(config.mode === 'production' ? [purgecss] : [])
          ]
        }
      }
    ]
  });
  return config;
};
```

Now in `angular.json` replace the default angular builder with the custom one we installed above:
```json
        "build": {
          "builder": "@angular-builders/custom-webpack:browser",
          "options": {
            "customWebpackConfig": {
              "path": "extra-webpack.config.js"
            },
        // ...
        "serve": {
          "builder": "@angular-builders/custom-webpack:dev-server",
          "options": {
            "customWebpackConfig": {
              "path": "extra-webpack.config.js"
            },        
        // ...
        "extract-i18n": {
          "builder": "@angular-builders/custom-webpack:extract-i18n",
          "options": {
            "customWebpackConfig": {
              "path": "extra-webpack.config.js"
            },
        // ...
        "test": {
          "builder": "@angular-builders/custom-webpack:karma",
          "options": {
            "customWebpackConfig": {
              "path": "extra-webpack.config.js"
            },        
```
Next add the `src/tailwind.scss` to the styles in `angular.json` like this:
```json
        "build": {
          "builder": "@angular-builders/custom-webpack:browser",
          "options": {
            // ...
            "styles": [
              "src/styles.scss",
              "src/tailwind.scss"
            ],
        // ...
        "test": {
          "builder": "@angular-builders/custom-webpack:karma",
          "options": {
            // ...
            "styles": [
              "src/styles.scss",
              "src/tailwind.scss"
            ],
```
That's all. 

Now use some utility 45° rotation class to test that the setup was successful. 
Replace the content of `src/app/app.component.html` with this content using the tailwind utility classes `bg-red-600`, `transform` and `rotate-45`:
```html
<div style="width: 300px; height: 300px;" class="bg-red-600 transform rotate-45">
</div>
```
If the setup was successful you should see a red square rotated 45° degrees at the left top corner of your browser.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run start
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Sources
https://tailwindcss.com/docs/installation

https://dev.to/beavearony/building-tailwind-css-in-an-angular-cli-project-e04

https://tailwindcss.com/docs/controlling-file-size#setting-up-purge-css-manually
