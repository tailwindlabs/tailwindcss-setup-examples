# TailwindExample

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.setup`
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

## Setup Tailwind with PurgeCSS

This is the steps to setup Tailwind CSS in a newly created Phoenix 1.4+ application (that includes Webpack):

    cd assets && npm install tailwindcss postcss-loader @fullhuman/postcss-purgecss


Create the file `./assets/postcss.config.js`

    const purgecss = require('@fullhuman/postcss-purgecss')({
      // Specify the paths to all of the template files in your project
      content: [
        '../lib/**/*.eex',
        '../lib/**/*.leex',
      ],

      // Include any special characters you're using in this regular expression
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    })

    module.exports = {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production'
          ? [purgecss]
          : []
      ]
    }


Next step is to instruct Webpacker to use that file. Edit `assets/webpack.config.js` and change the line

    use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']


Edit app.css file to add the Tailwind imports recomended in the guide.

    @tailwind base;
    @tailwind components;
    @tailwind utilities;



