## Option 1: Using `create-nuxt-app` and the integrated `@nuxtjs/tailwindcss` module

You can use `create-nuxt-app` to create a new Nuxt project that includes Tailwind CSS out of the box.

### 1. Create a new project with `npx create-nuxt-app`

Let's create a `tailwindcss-nuxt` project with the following command:

```sh
npx create-nuxt-app tailwindcss-nuxt
```

### 2. Choose "Tailwind CSS" in the "Which UI Framework" prompt

You'll be asked a series of questions, which the answers will be based on you specific use case. When asked about what **UI Framework** you want to use, you'll want to choose **Tailwind CSS**.

After that, keep answering questions based on your needs. You'll eventually end up with a brand new Nuxt project.

If you look at your `package.json` file, you'll notice that the `@nuxtjs/tailwindcss` dependency, Nuxt's official module for Tailwind CSS support, was added to your project.

### 3. Start your new Nuxt project

Let's go in our new project directory with `cd tailwindcss-nuxt` (or however you named this project). From there, you can start it with: 

```sh
npm run dev
```

You'll be greeted with the Nuxt demo homepage.

### 4. Tailwind CSS works out of the box!

To show that Tailwind CSS works out of the box, let's open the `pages/index.vue` file, locate the following `h1` tag:

```html
<h1 class="title">
  nuxt
</h1>
```

and replace it with some Tailwind flavoured styles:

```html
<h1
  class="mt-2 text-4xl font-black bg-gradient-to-r from-teal-400 to-teal-800 bg-clip-text text-transparent"
>
  nuxt with Tailwind CSS
</h1>
```

That's it! You're up and running with Nuxt and Tailwind CSS based on a default Tailwind config file.

### 5. Customizing the Taliwind config and writing custom CSS

If you want to customise the Tailwind config, simply create a `tailwind.config.js` in your project root.

The `@nuxtjs/tailwindcss` module will also look for a CSS file in `./assets/css/tailwind.css`, which is where you can write your custom CSS and use things like `@apply`, `@responsive` or `@screen` directives.

If no file is found at that location, the default three `@tailwind` layer directives will be used:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 6. Learn more about the `@nuxtjs/tailwindcss` module

You can find more information on more advanced features of the `@nuxtjs/tailwindcss` module here: https://tailwindcss.nuxtjs.org/

---

## Option 2: Should we show a "vanilla" implementation without the `@nuxtjs/tailwindcss` module?
