<script>
  export let name;
</script>

<style global>
  @import 'tailwindcss/base';

  @import 'tailwindcss/components';

  @import 'tailwindcss/utilities';
</style>

<main class="text-center p-4 max-w-xs mx-auto sm:max-w-none">
  <h1 class="text-red-600 text-6xl uppercase font-hairline">Hello {name}!</h1>
  <p>
    Visit the
    <a class="text-blue-700 hover:underline" href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>
