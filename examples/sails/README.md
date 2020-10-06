# sails

Setting up Tailwind in a `sails new` application is really simple, just install Tailwind and `grunt-postcss` as development dependencies:

```sh
npm i --save-dev tailwindcss grunt-postcss
```
Then generate a `tailwind.config.js` file by running:

```sh
npx tailwind init
```
Next, create a CSS file for your Tailwind styles. We've stored in it `/assets/styles/tailwindcss/tailwind.css` for this example:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then create `postcss.js` in `tasks/config/` directory and add the following content:

```js
module.exports = function (grunt) {
  grunt.config.set("postcss", {
    options: {
      map: true,
      processors: [require("tailwindcss")("./tailwind.config.js")],
    },
    dist: {
      expand: true,
      cwd: "assets/styles/tailwindcss",
      src: ["tailwind.css"],
      dest: ".tmp/public/styles",
      ext: ".css",
    },
  });

  grunt.loadNpmTasks("grunt-postcss");
};
```

You will need to register the `postcss` grunt task in both `tasks/register/compileAssets.js` and `tasks/register/syncAssets.js` like so:

```js
// tasks/register/compileAssets.js
module.exports = function (grunt) {
  grunt.registerTask("compileAssets", [
    "clean:dev",
    "less:dev",
    "copy:dev",
    "postcss",
  ]);
};
```

```js
// tasks/register/syncAssets.js
module.exports = function (grunt) {
  grunt.registerTask("syncAssets", ["less:dev", "sync:dev", "postcss"]);
};
```

Finally we need to exclude the `tailwindcss` folder from `tasks/config/copy.js` `src` pattern. Look for this line:

```js
// tasks/config/copy.js
dev: {
      files: [
        {
          expand: true,
          cwd: "./assets",
          src: ["**/*.!(coffee|less)"],
          dest: ".tmp/public",
        },
      ],
    },
```
and change it to:

```js
// tasks/config/copy.js
dev: {
      files: [
        {
          expand: true,
          cwd: "./assets",
          src: ["!(tailwindcss)/**/*.!(coffee|less)"],
          dest: ".tmp/public",
        },
      ],
    },
```

And that's it! Just start Sails.js development server by running `sails lift` and you have Tailwind all set-up.
