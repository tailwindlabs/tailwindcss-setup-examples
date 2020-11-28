# Joomla

Setting up Tailwind CSS in Joomla is simple. This directory contains the files to install a minimal template and the files to build a stylesheet based on Tailwind CSS.

Once the template is ready, the development files can be removed.

To start, create a zip file with the files of the folder and install it on your site. Navigate to your Joomla template folder and create the template stylesheet (`css/style.css`):

## Quick Start

```bash
cd templates/{your_template}

## Joomla doesn't come with a compilation tool built in; we need to install the essential toolbox based on Laravel Mix.
npm i
npm run prod
```

## Configuring the template from scratch

Once you check how the template is organized, you can re-create the original definitions.

To create a new `package.json` definition:

```bash
npm init
```

To install Tailwind itself:

```bash
npm install tailwindcss -D
```

To create the Taiwind configuration file:

```bash
./node_modules/.bin/tailwind init
```

This will create the config file for called `tailwind.config.js` within your template folder.

## Laravel Mix

For this tutorial, we use Laravel Mix, which is a wrapper built around Webpack. It's much easier to use and works perfectly fine with Joomla. In your Joomla template folder, install Laravel Mix:

```bash
npm install laravel-mix
```

In this example, we create the template CSS file in `css/style.css` and the source style in `resources/src/style.css`.

In the source file `resources/src/style.css`, we define:

```postCss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Now create a file called `webpack.mix.js` in your template folder. In it, add the following:

```javascript
const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.postCss('./resources/css/style.css', './css/style.css',
	tailwindcss('./tailwind.config.js')
);
```

We also need to install a package called `cross-env`. This is only really required if you're working on Windows.

```bash
npm install cross-env
```

Once you've done that, open your `package.json` file and add the following:

```json
"scripts": {
    "dev": "npm run development",
    "development": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "watch": "npm run development -- --watch",
    "watch-poll": "npm run watch -- --watch-poll",
    "hot": "cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
    "prod": "npm run production",
    "production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --no-progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
},
```

After you've done this, run `npm run dev` or `npm run prod`. This will output a your css file at `/css/style.css`.  This is in your style in the template folder, so it'll be something like `templates/{your_template}/css/style.css`.

To add the stylesheet to your Joomla template, within `index.php`, add the following:

```php
JHtml::_('stylesheet', 'style.css', array('version' => 'auto', 'relative' => true));
```

If you load your template, you should now see the default styling.

## Build once

```bash
npm run dev
```

## Keep building

```bash
npm run watch
```

## Compile for production

```bash
npm run prod
```
