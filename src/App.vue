<template>
  <div class="flex">

    <aside class="w-64 min-h-screen bg-gray-600">

      <!-- Logo -->
      <div class="bg-gray-700 text-center h-14 px-12 py-3">
        <img src="/images/logo.png" class="h-full">
      </div>


      <nav class="text-gray-400 p-5 pt-8">
        <ul>
          <li v-for="route in routers" class="h-12 hover:text-white" :class="{ 'text-white': route.path === $route.path }">
            <router-link :to="route.path" class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="route.meta.d" />
              </svg>
              <div class="pl-2">
                {{ route.meta.title }}
              </div>
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>

    <div class="flex-1">
      <!-- Header -->
      <header class="border-b h-14 flex items-center text-2xl pl-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="$route.meta.d" />
        </svg>

        樂易捐資料庫簡易圖表
        <span class="text-gray-300 text-base mx-2">/</span>
        {{ $route.meta.title }}
      </header>

      <!-- Main content -->
      <router-view></router-view>
    </div>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const routers = useRouter().getRoutes()

const showRouter = () => {
  console.log(routers)
}
</script>

<style>
#app {
  font-family: 'Microsoft JhengHei';
}
</style>
