# Statamic V2

Setting up TailwindCSS in Statamic V2 is relatively simple. Navigate to your Statamic theme folder:

```sh
cd site/themes/{your_theme}
```

First thing we need to do is create a package.json file.

```sh
npm init
```

Follow the instructions and once it's done, the next step is to install Tailwind itself.

```sh
npm install tailwindcss
```

We then need to create a configuration file. To do this, run the following in your theme folder:

```sh
./node_modules/.bin/tailwind init
```

This will create the config file for called `tailwind.config.js` within your theme folder.

Because Statamic doesn't come with a compilation tool built in, we need to install one. For this tutorial, we'll be using Laravel Mix, which is a wrapper built around Webpack. It's much easier to use and works great with Statamic.

In your Statamic theme folder, install Laravel Mix:

```sh
npm install laravel-mix
```

For the sake of this example, we're going to create our CSS file in `resources/css/app.css`. This is in your theme folder, so it'll be something like `site/themes/{your_theme}/resources/css/app.css`.

In that file, add:

```postCss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Now create a file called `webpack.mix.js` in your theme folder. In it, add the following:

```javascript
const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.postCss('./resources/css/app.css', './css/app.css', [
        tailwindcss('./tailwind.config.js')
    ]
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

After you've done this, run `npm run dev`. This will output a your css file at `/css/app.css`.

To hook this into your Statamic V2 theme, simply add the following to your `layouts/default.html`:

```html
<link rel="stylesheet" href="/site/themes/{your_theme}/css/app.css">
```

If you load your theme, you should now see the default styling.

## Build once

```bash
npm run dev
```

## Keep building

```bash
npm run watch
```