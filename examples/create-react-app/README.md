# create-react-app

Setting up Tailwind with create-react-app is really simple, just install Tailwind:

```sh
npm install tailwindcss --save-dev
```

Create your Tailwind config file.

```sh
./node_modules/.bin/tailwind init tailwind.js
```

Next, create a CSS file for your Tailwind styles.

```sh
touch /src/css/tailwind.src.css
```

And inject the base styles.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Update your `package.json` with the custom scripts.

```js
"scripts": {
  "tailwind:css":"tailwind build src/css/tailwind.src.css -c  tailwind.js -o src/css/tailwind.css",
  "start": "npm run tailwind:css && react-scripts start",
  "build": "npm run tailwind:css && react-scripts build"
}
```

And finally, import the generated css file in your root (`index.js`) file

```js
import "./css/tailwind.css";
```

**Optional**: You can copy [this](https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js) entire file into your `tailwind.js` file to get a headstart with the defaults.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run start
```

### Compiles and minifies for production

```
npm run build
```
