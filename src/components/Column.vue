<template>
  <div class="p-2 border-t flex justify-between text-sm" :class="class">
    <div class="font-bold text-gray-800">{{ title }}</div>
    <div class="text-gray-700 text-right">{{ desc }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  class: String,
  title: String,
  desc: String
})
</script>

<style scoped>

</style>
