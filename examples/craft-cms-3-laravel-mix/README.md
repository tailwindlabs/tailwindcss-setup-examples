# Craft CMS 3

Setting up TailwindCSS in Craft 3 is relatively simple. Navigate to your Craft project folder:

```sh
cd my-project.test
```

First thing we need to do is create a package.json file.

```sh
npm init
```

Follow the instructions and once it's done, the next step is to install Tailwind itself.

```sh
npm install tailwindcss
```

We then need to create a configuration file. To do this, run the following in your Craft project folder:

```sh
./node_modules/.bin/tailwind init
```

This will create the config file called `tailwind.config.js` within your Craft project folder.

Because Craft doesn't come with a compilation tool built in, we need to install one. For this tutorial, we'll be using Laravel Mix, which is a wrapper built around Webpack. It's much easier to use and works great with Craft.

In your Craft project folder, install Laravel Mix:

```sh
npm install laravel-mix
```

For the sake of this example, we're going to create our CSS file in `resources/css/app.css`. This is in our Craft project folder, so it'll be something like `my-project.test/resources/css/app.css`.

In that file, add:

```postCss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Now create a file called `webpack.mix.js` in your Craft project folder. In it, add the following:

```javascript
const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.postCss('resources/css/app.css', 'web/css/app.css', [
        tailwindcss('tailwind.config.js')
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

After you've done this, run `npm run dev`. This will output a your css file at `web/css/app.css`.

To hook this into your Craft 3 templates, simply add the following to your `templates/_layout.html` template:

```html
<link rel="stylesheet" href="/css/app.css">
```

If you load your Craft project, you should now see the default styling.

## Build once

```bash
npm run dev
```

## Keep building

```bash
npm run watch
```