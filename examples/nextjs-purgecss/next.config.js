const withSass = require('@zeit/next-sass');
const withPurgeCss = require('next-purgecss');

module.exports = withSass(withPurgeCss({
  purgeCssPaths: [
    'pages/**/*',
    'components/**/*'
  ]
}));
