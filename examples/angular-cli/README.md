# AngularCli

To add TailwindCSS to a new Angular project using Angular-Cli, start by a fresh install:

```sh
ng new angular-cli --style=scss
```

Then go inside the project's folder and install **TailwindCSS**, **PostCSS**, **PurgeCSS** and **Custom webpack builders for Angular** which should allow us customizing webpack configurations without ejecting the app:

```sh
cd  angular-cli
npm i tailwindcss postcss-import postcss-loader postcss-scss @fullhuman/postcss-purgecss @angular-builders/custom-webpack -D
```

_(note: Angular-Cli already includes **autoprefixer**)_

Next, create 2 webpack config files named respectively **webpack.config.dev.js** and **webpack.config.prod.js**. The main idea is to only use **PurgeCSS** when building the final prod version:

_webpack.config.dev.js_

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: "postcss-loader",
        options: {
          ident: "postcss",
          syntax: "postcss-scss",
          plugins: () => [
            require("postcss-import"),
            require("tailwindcss"),
            require("autoprefixer")
          ]
        }
      }
    ]
  }
};
```

_webpack.config.prod.js_

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: "postcss-loader",
        options: {
          ident: "postcss",
          syntax: "postcss-scss",
          plugins: () => [
            require("postcss-import"),
            require("tailwindcss"),
            require("autoprefixer"),
            require("@fullhuman/postcss-purgecss")({
              // Specify the paths to all of the template files in your project
              content: [
                "./src/**/*.html",
                "./src/**/*.ts"
                // etc.
              ],
              // Include any special characters you're using in this regular expression
              defaultExtractor: content =>
                content.match(/[A-Za-z0-9-_:/]+/g) || []
            })
          ]
        }
      }
    ]
  }
};
```

Then in **angular.js** file, configure the app to use them:

```diff
"architect": {
  "build": {
-   "builder": "@angular-devkit/build-angular:browser",
+   "builder": "@angular-builders/custom-webpack:browser",
    "options": {
+     "customWebpackConfig": {
+       "path": "./webpack.config.dev.js"
+     },
      "outputPath": "dist/angular-cli",
      "index": "src/index.html",
      "main": "src/main.ts",

      (...)

    "configurations": {
      "production": {
+       "customWebpackConfig": {
+         "path": "./webpack.config.prod.js"
+       },
        "fileReplacements": [
          {
            "replace": "src/environments/environment.ts",
            "with": "src/environments/environment.prod.ts"
          }
```

Make those changes for both **architect.build** and **architect.serve**.

Next, create the Tailwind config file:

```sh
npx tailwind init
```

Finally, add this to `src/styles.scss`:

```scss
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";
```

Then run the app:

```sh
ng serve
```

### TailwindCSS as a separate Design System Project

This is more of a recommandation for advanced projects.

As Angular-Cli allows now creating and combining multiple Angular applications into a single one, I personally prefer creating a dedicated sub-project for TailwindCSS called `ui` or `design-system` by running:

```sh
ng generate application ui –-routing
```

That will generate a new basic app definition in the `projects` subfolder of the workspace.

Then, I re-apply the same settings from previously mentioned steps to the new project under **angular.js**.

Next, I move `src/styles.css` content to `src/projects/ui/src/styles.scss` (I keep the file at root level empty). Then I change settings under **angular.js** to make all empty `styles.scss` files under main project as of other apps extending the original one maintained under UI (just in case I want to introdue specific CSS for other apps):

```diff
-            "styles": ["projects/front/src/styles.scss"],
+            "styles": [
+              "projects/ui/src/styles.scss",
+              "projects/front/src/styles.scss"
+            ],
```

That way you can can have a dedicated app to work on your UI components or design system as you run run:

```sh
ng serve --project ui
```

Then you can simply import these angular components to your main app or other projects under the same workspace. (more about in this article by Jeffry Houser: [Combining Multiple Angular Applications into a Single One](https://medium.com/disney-streaming/combining-multiple-angular-applications-into-a-single-one-e87d530d6527)).
