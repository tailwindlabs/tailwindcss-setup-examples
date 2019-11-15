<template>
  <div class="mx-auto w-64">
    <div class="bg-gray-100 p-4 rounded shadow text-center">
      Button clicked
      <div class="font-bold font-serif leading-none mb-2 text-6xl">
        {{ counter }}
      </div>
      times.
    </div>
    <button
        @click="counter += 1"
        class="bg-green-500 mt-4 p-2 rounded shadow text-white w-full hover:bg-green-600 hover:shadow-lg"
    >
      Click
    </button>
  </div>
</template>

<script>
  export default {
    name: "Counter",

    data() {
      return {
        counter: 0
      }
    }
  }
</script>
