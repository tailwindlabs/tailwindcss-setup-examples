# PhoenixLiveView

## Get Phoenix working
To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.setup`
  * Install Node.js dependencies with `npm install` inside the `assets` directory
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

## Add Tailwind

Fist add the dependancies:

```sh
cd assets && yarn add tailwindcss postcss-loader autoprefixer
```

Then configure postcss-loader, in the same directory:

```sh
touch postcss.config.js
```

Copy this into that file:

```js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}
```

Now we need to add the postcss-loader to the webpack config. In `assets/webpack.config.js` you need to add it as the last loader:

```js
{
  test: /\.[s]?css$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    'sass-loader',
    'postcss-loader' // <-- Here.
  ]
}
```
Now create the tailwind config file:

```sh
npx tailwindcss init
```

Now we can add the tailwind directives at the _top_ of  `assets/css/app.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Now you can use tailwind! Try adding this to the navbar:

```html
<p class="text-orange-500 float-right">& Tailwind CSS</p>
```



## Learn more

  * Official website: https://www.phoenixframework.org/
  * Guides: https://hexdocs.pm/phoenix/overview.html
  * Docs: https://hexdocs.pm/phoenix
  * Forum: https://elixirforum.com/c/phoenix-forum
  * Source: https://github.com/phoenixframework/phoenix
