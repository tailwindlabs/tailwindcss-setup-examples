# Create React App

This example shows a [Create React App](https://create-react-app.dev/) with Tailwind CSS. The following steps were taken to create this project:

1. Create a new Create React App:
    ```sh
    npx create-react-app <YOUR_APP_NAME>
    cd <YOUR_APP_NAME>
    ```
2. Add dependencies of Tailwind CSS, the [PostCSS](https://github.com/postcss/postcss) tool, and the recommended [Autoprefixer](https://autoprefixer.github.io/) PostCSS plugin: 
    ```sh
    npm install tailwindcss autoprefixer postcss-cli cross-env npm-run-all --save-dev
    ```
3. Create a Tailwind CSS configuration file named `tailwind.config.js` with the following content:
    ```js
    module.exports = {
      purge: [
        './src/**/*.jsx'
      ],
      theme: {
        extend: {},
      },
      variants: {},
      plugins: [],
    }
    ```
    Note: this is the configuration that gets created with `npx tailwind init`, extended with a PurgeCSS [[1]](https://tailwindcss.com/docs/controlling-file-size) [[2]](https://purgecss.com/) configuration. This PurgeCSS configuration makes the following assumptions:
    1. The `*.jsx` file extension is used for React files to separate them from normal JavaScript files. `App.jsx` in this project was manually renamed from `App.js` to `App.jsx`.
    2. JSX files are the only files that reference Tailwind CSS class names.
4. Create a PostCSS configuration file named `postcss.config.js` with the following content:
    ```js
    module.exports = {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ]
    }
    ```
5. Rename the initial `*.css` files to `*.pcss` and add .`*.css` to `.gitignore`.

    Note: using the distinct `*.pcss` file extension for PostCSS files has several benefits. It makes it easy to keep the generated `*.css` files out of version control. It makes it easy for Humans to differentiate between source code and generated code. It is required by some IDEs such as IntelliJ for correct syntax highlighting and code inspection functionality.
6. Add the Tailwind CSS directives to `index.pcss`:
    ```pcss
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   
   /* ... previous code ... */
   ``` 
7. Configure the NPM `start` and `build` scripts to include execution of PostCSS:
    ```
    "start": "run-p start:**",
    "start:postcss": "postcss src/**/*.pcss --base src --dir src --ext css --watch --verbose",
    "start:react": "react-scripts start",
    "build": "cross-env NODE_ENV=production run-s build:**",
    "build:postcss": "postcss src/**/*.pcss --base src --dir src --ext css  --verbose",
    "build:react": "react-scripts build",
    ```
   Note: `cross-env` allows setting `NODE_ENV` parameters in an operating system agnostic way. `NODE_ENV=production` enables PurgeCSS. 
   
   Note: `npm-run-all` (and its short-cut `run-p`) allows `postcss` to run in watch mode in parallel with `react-scripts`.
