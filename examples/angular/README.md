# Angular and Tailwind starter

Generated using [Angular CLI](https://github.com/angular/angular-cli) version - **v11.1.4** (latest at the time of writing).

Angular version - **v11.1.2** (latest at the time of writing).

Tailwind version - **v2.0.3** (latest at the time of writing).

## Setting up Tailwind with Angular

Setting up Tailwind with Angular involves:
* installing Postcss dependencies,
* adding custom build schematics to extend Angular's default build behavior,
* defininging `webpack.config.js` file and configuring Postcss with Tailwind,
* adding extra webpack configuration to generate Tailwind styles during _build_, _serve_ and _test_ processes,
* generating the Tailwind config file and adding Tailwind base styles to your application's root `styles.scss` file


### Installing dependencies

We will start by adding development only dependencies for Tailwind and Postcss.
To do so, run the following command that will install the necessary packages:

```sh
$ npm i -D tailwindcss@latest postcss@latest autoprefixer@latest postcss-import@latest postcss-loader@4 postcss-scss@latest
```

\* *Note that we're using `postcss-loader` v4 even the v5 has been released at the time of writing. However, due to its incompatibility with other packages we opt for latest minor 4.x version instead.*

Next up, we will add `ngx-build-blus` schematics to our Angular project for extending the Angular CLI's default build behavior without ejecting.

```sh
$ ng add ngx-build-plus
```

### Configuring webpack

In order to add an extra step to our _build_ pipeline we need to define a webpack configuration that will be run during the build.
From the root of your Angular project, run the following command

```sh
$ touch webpack.config.js
```

and provide the minimum webpack configuration in order to use Postcss with Tailwind

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            ident: 'postcss',
            syntax: 'postcss-scss',
            plugins: [
              require('postcss-import'),
              require('tailwindcss'),
              require('autoprefixer'),
            ],
          },
        },
      },
    ],
  },
};

```

### Configuring Angular to use custom webpack defined pipeline
In order to apply the extra webpack configuration that we previously defined in our `webpack.config.js` file, we need to tell Angular when to run this extra step of building Tailwind styles.

Inside of `angular.json` file you'll need to add the following option in _build_, _serve_ and _test_ commands:

```json
{
  ...
  "projects": {
    "angular": {
      ...
      "architect": {
        "build": {
          "builder": "ngx-build-plus:browser",
          "options": {
            ...
            "extraWebpackConfig": "webpack.config.js"
          }
        },
        "serve": {
          "builder": "ngx-build-plus:dev-server",
          "options": {
            ...
            "extraWebpackConfig": "webpack.config.js",
          },
        },
        "test": {
          "builder": "ngx-build-plus:karma",
          "options": {
            ...
            "extraWebpackConfig": "webpack.config.js",
          }
        },
      }
    }
  }
}

```

\* *Adding `ngx-build-plus` schematics to Angular project automatically replaces default `@angular-devkit/build-angular` with `ngx-build-plus` in your angular.json file (if for some reason that changes in the next version of the package, you'll need to manually replace those values).*

### Generating Tailwind config and add base styles
The last step in including Tailwind in your Angular project is generating Tailwind configuration.

```sh
$ npx tailwindcss init
```

Don't forget to add Tailwind base styles to your application's root `styles.scss` file found in the `src/` directory.

```scss
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

## Project setup

### Install dependencies
```sh
$ npm ci
```

### Serve using local dev server (with hot module reloading)
```sh
$ ng serve
```

### Run production build
```sh
$ ng build
```
