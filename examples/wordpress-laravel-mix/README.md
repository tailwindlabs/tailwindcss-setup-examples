# WordPress

Setting up TailwindCSS in WordPress is relatively simple. Navigate to your WordPress theme folder:

```bash
cd wp-content/themes/{your_theme}
```

First thing we need to do is create a package.json file.

```bash
npm init
```

Follow the instructions and once it's done, the next step is to install Tailwind itself.

```bash
npm install tailwindcss -D
```

We then need to create a configuration file. To do this, run the following in your theme folder:

```bash
./node_modules/.bin/tailwind init
```

This will create the config file for called `tailwind.config.js` within your theme folder.

Because WordPress doesn't come with a compilation tool built in, we need to install one. For this tutorial, we'll be using Laravel Mix, which is a wrapper built around Webpack. It's much easier to use and works perfectly fine with WordPress.

## Laravel Mix

In your WordPress theme folder, install Laravel Mix:

```bash
npm install laravel-mix
```

For the sake of this example, we're going to create our CSS file in `resources/css/style.css`. This is in your theme folder, so it'll be something like `wp-content/themes/{your_theme}/resources/css/style.css`.

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

After you've done this, run `npm run dev`. This will output a your css file at `/css/style.css`.

To hook this into your WordPress theme, within functions.php, add the following:

```php
function add_tailwind() {
    wp_enqueue_style( 'style', get_template_directory_uri() . '/css/style.css' );
}
add_action('wp_enqueue_scripts', 'add_tailwind');
}
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