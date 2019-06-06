# Gridsome

If you don't have an existing Gridsome project, check out their docs on how to get started.

This plugin makes use of the gridsome-plugin-tailwindcss plugin to add
Tailwind, PurgeCSS, postcss-preset-env, and postcss-import to your build chain.
It includes both gridsome-plugin-tailwindcss and the regular tailwindcss so
that you can write your own plugins and access the default config in
`tailwind.config.js`.

The plugin adds Tailwind directives under the hood using Gridsome's Client API,
but you can turn off auto-importing of the Tailwind directives by passing this
to the plugin in `gridsome.config.js`.

```js
module.exports = {
	plugins: [
		{
			use: 'gridsome-plugin-tailwindcss',
			options: {
				shouldBeEasy: false
			}
		}
	]
}
```

It's recommended to use `tailwind.config.js` to add [global base styles](https://tailwindcss.com/docs/adding-base-styles#using-a-plugin),
components, and utilities instead of adding them in CSS files.

Or you can add the directives somewhere in your CSS.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Now you should be all set to start using Tailwind, postcss-preset-env, postcss-import, and PurgeCSS in your Gridsome project!
