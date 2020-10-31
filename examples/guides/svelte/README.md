## 1. Create a new Svelte project

Let's start by creating a new Svelte project called `tailwindcss-svelte` with the following command:

```sh
npx degit sveltejs/template tailwindcss-svelte
```

Once the template is cloned, we can move into our new directory and install the dependencies with:

```sh
cd tailwindcss-svelte && npm install
```

At this point, you should be able to start your app with `npm run dev` and see it in action at `localhost:5000` 👍

## 2. Adding Tailwind CSS as a dependency

Let's now bring in Tailwind CSS. We'll also install a few other packages like `autoprefixer`, `postcss-cli` and `concurrently`:

```sh
npm install tailwindcss autoprefixer postcss-cli concurrently
```

## 3. Generate Tailwind and PostCSS config files

Let's now generate default `tailwind.config.js` and `postcss.config.js` files:

```sh
npx tailwindcss init -p
```

## 4. Create a CSS file with the `@tailwind` directives

Inside the `public` directory, let's create a new file called `tailwind.css`. In there, we'll have our 3 `@tailwind` directives:

```css
/* public/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 5. Update the scripts in `package.json` to run our CSS through PostCSS

First, let's add a `watch:tailwind` script that will take the `public/tailwind.css` file as an input, run it through PostCSS, write the output in a file called `public/tailwind-output.css`, and watch for changes in the input file:

```javascript
// package.json
{
  // ...,
  "scripts" : {
    "watch:tailwind": "postcss public/tailwind.css -o public/tailwind-output.css -w",
    // ...
  }
}
```

Let's also add a `build:tailwind` script that does the same, but with `NODE_ENV` set to `production`, so that it can be used to purged unused styles. This one doesn't need the "watch" flag, since it will likely only be run once when building for production.

```javascript
// package.json
{
  // ...,
  "scripts" : {
    "build:tailwind": "NODE_ENV=production postcss public/tailwind.css -o public/tailwind-output.css",
    // ...
  }
}
```

Finally, we'll update the `dev` script to _concurrently_ start rollup **and** run the `watch:tailwind` script:

```javascript
// package.json
{
  // ...,
  "scripts" : {
    "dev": "concurrently \"rollup -c -w\" \"yarn run watch:tailwind\"",
    // ...
  }
}
```

## 6. Link the output CSS file in our HTML template

In our `watch:tailwind` and `build:tailwind` scripts, we've told PostCSS to put our compiled Tailiwnd CSS in `public/tailwind-output.css`. For this to become useful, we need to add a `<link>` tag in our `index.html` file that references that CSS file:

```diff
// public/index.html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset='utf-8'>
	<meta name='viewport' content='width=device-width,initial-scale=1'>

	<title>Svelte app</title>

	<link rel='icon' type='image/png' href='/favicon.png'>
	<link rel='stylesheet' href='/global.css'>
	<link rel='stylesheet' href='/build/bundle.css'>
+	<link rel="stylesheet" href="/tailwind-output.css">

	<script defer src='/build/bundle.js'></script>
</head>

<body>
</body>
</html>
```

## 7. Play with Svelte and Tailwind!

To verify that Tailwind CSS is now working in our Svelte app, let's modify the `src/App.svelte` file.

Let's replace the entire file with the following:

```html
<script>
  export let name;
</script>

<div
  class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
>
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div
      class="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
    />
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div class="max-w-md mx-auto">
        <div
          class="text-base font-bold leading-6 text-gray-700 sm:text-lg sm:leading-7"
        >
          <p>You're all set to use Svelte with {name}!</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

Note we're using the `{name}` property in our markup. This prop is defined in `src/main.js`, and is initially set to `world`.

Let's change it to `Tailwind CSS`, and we should now be greeted with the following message:

> "You're all set to use Svelte with Tailwind CSS!"
