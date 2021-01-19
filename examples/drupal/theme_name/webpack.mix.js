let mix = require("laravel-mix");

const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: ["./templates/**/*.twig", "./js/**/*.vue"],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

mix.postCss("css/main.css", "dist/css", [
  require("tailwindcss"),
  require("autoprefixer"),
  ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
]);
