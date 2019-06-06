<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    
    <h1 class="text-3xl my-4">Hello, Tailwind!</h1>
   
    <p class="mb-4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="mb-4">
      <a class="mr-4 text-teal-600 hover:underline" href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a class="mr-4 text-teal-600 hover:underline" href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, Tailwind!'
  }
}
</script>