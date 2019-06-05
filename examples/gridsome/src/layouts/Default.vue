<template>
  <div class="mx-auto px-8 max-w-3xl">
    <header class="flex justify-between items-center mb-10 h-16">
      <g-link to="/" class="text-lg font-normal">{{ $static.metaData.siteName }}</g-link>
      <nav>
        <g-link class="text-teal-500 hover:underline" to="/">Home</g-link>
        <g-link class="ml-6 text-teal-500 hover:underline" to="/about">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
</style>
