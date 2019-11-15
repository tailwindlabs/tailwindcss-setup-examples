# Symfony

This example shows how to use Tailwind with both Symfony and Vue. Note that the use of Vue is not required but setup is shown for completeness.

When working in the development environment, all of Tailwind will be included. When building production assets (see blow) PurgeCSS will remove unused CSS classes from the generated stylesheet.

Getting started is straightforward and quick.

```sh
composer install
yarn install
```

Next, start the development server:

```sh
yarn dev
```

To watch for changes, pass the `--watch` flag:

```sh
yarn dev --watch
```

To watch with hot module reloading:

```sh
yarn encore dev-server --hot
```

To build production ready assets:

```sh
yarn build
```

After assets have been built (development or production assets), start the development server:

```sh
bin/console server:start
```

Browse to http://127.0.0.1:8000 to get started!
