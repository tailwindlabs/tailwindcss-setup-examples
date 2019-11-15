# ember-tailwind

Setting up an Ember JS app to use Tailwindcss.

- `ember new <your-app-name> --no-welcome --yarn`
- `yarn add tailwindcss`
- `ember install ember-cli-postcss`

Add the following content to the below files:

```
# styles/app.css

@tailwind base;
@tailwind components;
@tailwind utilities;
```

```
# ember-cli-build.js

postcssOptions: {
  compile: {
    plugins: [
      require('tailwindcss')
    ]
  }
}
```

Run `npx tailwind init` in your termial, - this will create `tailwind.config.js` at the root of your project:
```
module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
}
```

Create `postcss.config.js` file at the root of your project with the following content:
```
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}
```

Add the following basic HTML content to the `templates/application.hbs` template:
```
<div class="container bg-gray-200 mx-auto">
  <h2 class="p-3">Welcome to Ember on Tailwindcss!</h2>
</div>


{{outlet}}
```
Start the server with `ember s`

Navigate to `localhost:4200`to see it in action.

Enjoy
