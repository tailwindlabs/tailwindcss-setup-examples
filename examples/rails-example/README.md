# Rails

This example adds Tailwind to Rails 6 which hasn't fully been released yet but should be soon.

To install Rails 6 rc1, run:

```sh
gem install rails --pre
```

Create a new project using:

```sh
rails new rails-example
```

To install Tailwind, run:

```sh
yarn add tailwindcss
```

Create a new file to store your stylesheets:

```sh
mkdir app/javascript/stylesheets
touch app/javascript/stylesheets/application.scss
```

Add the following lines to inject Tailwind styles into your css:

```scss
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";
```

Go to `app/javascript/packs/application.js` and add:

```js
require("stylesheets/application.scss");
```

Open `app/views/layouts/application.html.erb` and add:

```erb
<%= stylesheet_pack_tag 'application', media: 'all', 'data-turbolinks-track': 'reload' %>
```

Open `postcss.config.js` and add:

```js
require('tailwindcss'),
require('autoprefixer'),
```

You can now run `bin/webpack` to make sure everything runs properly and then run `rails s` to get started.

**Optional bonus step**: You can run `npx tailwind init tailwind.config.js` and then copy the config from [here](https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js) to have a starting point
