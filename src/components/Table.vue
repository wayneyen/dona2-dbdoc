<template>
  <div class="card-table" :class="class">
    <div class="card-title">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="$route.meta.d" />
      </svg>
      <p class="flex-1 text-2xl text-gray-100 ml-2">{{ title }}</p>
      <p class="text-2xl text-gray-200">{{ subTitle }}</p>
    </div>

    <div class="p-6">
      <div class="masonry-2-col">
        <ColumnGroup title="系統" />
        <ColumnGroup title="基本資料" />
        <ColumnGroup title="代表人資訊" />
        <ColumnGroup title="組織屬性" />
        <ColumnGroup title="金流設定" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ColumnGroup from '@/components/ColumnGroup.vue'

const props = defineProps({
  class: String,
  title: String,
  subTitle: String
})
</script>

<style scoped>
.card-table {
  @apply
    rounded-xl
    shadow-lg
    overflow-hidden
    h-auto
    hover:shadow-2xl
    transition
    duration-500
    transform;
}
.card-table .card-title {
  @apply
    flex
    items-center
    p-4
    text-white
    font-bold
    text-xl
    bg-gradient-to-r from-blue-600 to-blue-500;
}
</style>
