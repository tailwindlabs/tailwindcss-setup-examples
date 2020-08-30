# Svelte

Setting up Tailwind with Svelte is really simple, just install necessary dependencies:

```sh
npm i -D svelte-preprocess tailwindcss postcss autoprefixer
```

Create your Tailwind config file

```sh
npx tailwindcss init
```

configure **svelte-preprocess** in `rollup.config.js`

```js
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess'; // here

// ...

export default {
  // ...
  plugins: [
    svelte({
      dev: !production,
      css: css => {
        css.write('bundle.css');
      },
      preprocess: sveltePreprocess({
        // from here
        postcss: {
          plugins: [require('tailwindcss'), require('autoprefixer')],
        },
      }), // up to this point
    }),
    // ...
  ],
  // ...
};
```

netx, import Tailwind styles in `src/App.svelte` :

```svelte
<script>
	export let name;
</script>

<style global>
	@import 'tailwindcss/base';

	@import 'tailwindcss/components';

	@import 'tailwindcss/utilities';
</style>

<main>
	<h1>Hello {name}!</h1>
	<p>
    	Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.
	</p>
</main>
```

Finally, enable purge in `tailwind.config.js`:

```js
module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.svelte'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```
