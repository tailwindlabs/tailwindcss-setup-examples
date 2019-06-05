# Jekyll with Tailwind

## About

This project uses [jekyll-postcss](https://github.com/mhanberg/jekyll-postcss) to manage compiling your Tailwind. You can use any [PostCSS](https://postcss.org) plugin by installing it with `yarn` or `npm` and adding it to your `postcss.config.js`.

[jekyll-purgecss](https://github.com/mhanberg/jekyll-purgecss) is used to integrate Purgecss (only in production).

## Usage

### Locally

`bundle exec jekyll serve`

### Production

`JEKYLL_ENV=production bundle exec jekyll build`

## Install

Once you configure the following files, run:

```shell
$ bundle install
$ yarn install

$ yarn run tailwind init _includes/tailwind.config.js
```

### Gemfile

```ruby
group :jekyll_plugins do
  gem "jekyll-postcss"
  gem "jekyll-purgecss"
end
```

### _config.yml

```yaml
plugins:
  - jekyll-postcss
  - jekyll-purgecss
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


