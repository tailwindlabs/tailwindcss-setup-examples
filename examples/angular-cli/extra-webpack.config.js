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
