## 1. Create a new NextJS project with `create-next-app`

First, let's spin off a new NextJS project, that we'll call `tailwindcss-nextjs`, with the following command:

```bash
npx create-next-app tailwindcss-nextjs
```

This will scaffold a new NextJS application for us.

## 2. Add Tailwind CSS and Autoprefixer as dependencies

Let's first move into our new project directory with `cd tailwindcss-nextjs`. From there, we can install Tailwind CSS and NextJS as dependencies:

```sh
npn install tailwindcss autoprefixer@^9
```

Note that at the time of writing this guide, we need to stick to version 9 of Autoprefixer. This will go away when NextJS internally upgrades to PostCSS 8, at what point we'll update this guide! 😅

## 3. Generate Tailwind and PostCSS config files

Next, let's generate default `tailwind.config.js` **and** `postcss.config.js` files:

```sh
npx tailwindcss init -p
```

## 4. Create a `src` directory

While this step is not necessary, it adds some clarity to our project structure. Everything we'll work on for our NextJS project will live inside a `src` folder.

You can do that manually, or run `mkdir src` in your command line prompt.

We'll move the `pages`, `public` and `styles` folders inside `src`. Our directory should now look something like this:

```
src/
|-- pages
|-- public
|-- styles
package.json
postcss.config.js
tailwind.config.js
```

## 5. Create a CSS file with the `@tailwind` layers

Inside of `src/styles`, we'll delete the existing CSS files and create a new file called `tailwind.css`. This file will contain three `@tailwind` declaratives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 6. Import our new CSS file in `_app.js`

With this new CSS file in place, we'll open the `_app.js` file located in `src/pages`.

At the top of that file, we'll remove any existing imports for CSS file we have deleted at step 5. Instead, we'll import our new `tailwind.css` file:

```javascript
// src/pages/_app.js
import "../styles/tailwind.css";
```

## 7. Use Tailwind in our demo homepage.

Since we removed CSS files in `src/styles`, trying to run the project with `npm run dev` would not work, since the current `index.js` page in `src/styles` relies on these styles.

We'll completely replace that demo homepage with the following code:

```javascript
// src/pages/index.js
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="text-base font-bold leading-6 text-gray-700 sm:text-lg sm:leading-7">
              <p>You're all set with NextJS with TailwindCSS!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```
