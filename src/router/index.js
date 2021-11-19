import { createRouter, createWebHistory } from 'vue-router'
import CompanyStore from '@/components/CompanyStore.vue'

const routes = [
  {
    name: 'CompanyStore',
    path: '/company-store',
    component: CompanyStore,
    meta: {
      title: '組織商店基本資料',
      d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
    }
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
