# Jekyll with Tailwind

## About

This project uses [jekyll-postcss](https://github.com/mhanberg/jekyll-postcss) to compile Tailwind CSS for you.

You can use any [PostCSS](https://postcss.org) plugin by installing it with `yarn` or `npm` and adding it to your [postcss.config.js](postcss.config.js).

The [jekyll-purgecss](https://github.com/mhanberg/jekyll-purgecss) plugin is used to integrate Purgecss (only in production).


## Installation

### Requirements

- Ruby
- Yarn and Node.js

### Install project dependencies

```sh
$ bundle config set --local path vendor/bundle
$ bundle install
$ yarn install
```


## Usage

### Start dev serve

```sh
$ bundle exec jekyll serve --trace --livereload
```

### Build for production

```sh
$ JEKYLL_ENV=production bundle exec jekyll build
```


## Configuration

In a few project, setup your config files as below.

### Gemfile

Add these gems to your [Gemfile](Gemfile). By using the plugins group as below, they will be enabled without being added to `plugins` in your config.

```ruby
group :jekyll_plugins do
  gem "jekyll-postcss"
  gem "jekyll-purgecss"
end
```

### package.json

Update the version numbers to whatever is currently latest.

```json
{
  "devDependencies": {
    "autoprefixer": "^9.3.1",
    "postcss-cli": "^6.0.1",
    "postcss-import": "^12.0.1",
    "purgecss": "^1.1.0",
    "tailwindcss": "^1.0.0"
  }
}
```

### postcss.config.js

```javascript
module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("./_includes/tailwind.config.js"),
    require("autoprefixer")
  ]
}
```

### purgecss.config.js

```javascript
module.exports = {
  content: ["./_site/**/*.html"],
  css: ["./_site/css/site.css"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
};
```

### tailwind.config.js

```sh
$ yarn run tailwind init _includes/tailwind.config.js
```
