<template>
  <div class="card-column break-inside" :class="class">
    <div class="card-title">
      <p class="flex-1 text-gray-100 ml-1">{{ title }}</p>
    </div>

    <div v-if="title === '系統'">
      <Column title="id" desc="系統ID" class="border-none" />
      <Column title="name" desc="公司名稱" />
      <Column title="email" desc="電子信箱" />
      <Column v-show="!collapse" title="ubn" desc="統一編號" />
      <Column v-show="!collapse" title="plan" desc="方案設定" />
      <Column v-show="!collapse" title="official_site" desc="官網網址" />
      <Column v-show="!collapse" title="company_description" desc="組織簡述" />
      <Column v-show="!collapse" title="logo_url" desc="組織圖示" />
      <Column v-show="!collapse" title="status" desc="啟用狀態" />
      <div class="more" @click="collapse = !collapse">{{ collapse ? '更多' : '更少' }}...</div>
    </div>
    <div v-if="title === '基本資料'">
      <Column title="name" desc="公司名稱" />
      <Column title="email" desc="電子信箱" />
      <Column title="ubn" desc="統一編號" />
      <Column v-show="!collapse" title="plan" desc="方案設定" />
      <Column v-show="!collapse" title="official_site" desc="官網網址" />
      <Column v-show="!collapse" title="company_description" desc="組織簡述" />
      <Column v-show="!collapse" title="logo_url" desc="組織圖示" />
      <Column v-show="!collapse" title="status" desc="啟用狀態" />
      <div class="more" @click="collapse = !collapse">{{ collapse ? '更多' : '更少' }}...</div>
    </div>

    <div v-if="title === '代表人資訊'">
      <Column title="owner" desc="代表人" class="border-none" />
      <Column title="owner_phone_country_code" desc="代表人聯絡電話國碼" />
      <Column title="owner_email" desc="代表人聯絡Email" />
      <Column v-show="!collapse" title="owner_address" desc="代表人聯絡地址" />
      <Column v-show="!collapse" title="owner_phone" desc="代表人聯絡電話" />
      <div class="more" @click="collapse = !collapse">{{ collapse ? '更多' : '更少' }}...</div>
    </div>

    <div v-if="title === '組織屬性'">
      <Column title="is_ngo" desc="營利屬性" class="border-none" />
      <Column title="is_salable" desc="是否有銷售商品" />
      <Column title="is_invoiceable" desc="是否開發票" />
      <Column v-show="!collapse" title="is_receipt_ductable" desc="是否開可扣抵收據" />
      <Column v-show="!collapse" title="is_receipt_disductable" desc="是否開不可扣抵收據" />
      <div class="more" @click="collapse = !collapse">{{ collapse ? '更多' : '更少' }}...</div>
    </div>

    <div v-if="title === '金流設定'">
      <Column title="ezreceipt_app_key" desc="易發票API KEY" class="border-none" />
      <Column title="ezreceipt_api_url" desc="易發票API URL" />
      <Column title="ezreceipt_acc_name" desc="易發票ACC" />
      <Column v-show="!collapse" title="invoice_provider" desc="電子發票供應商" />
      <Column v-show="!collapse" title="ezreceipt_app_code" desc="易發票APP CODE" />
      <Column v-show="!collapse" title="ezreceipt_password" desc="易發票登入密碼" />
      <div class="more" @click="collapse = !collapse">{{ collapse ? '更多' : '更少' }}...</div>
    </div>
  </div>
</template>

<script setup>
import Column from '@/components/Column.vue'
import { ref } from '@vue/reactivity';

const collapse = ref(true)

const props = defineProps({
  class: String,
  title: String,
  subTitle: String
})
</script>

<style scoped>
.card-column {
  @apply
    w-auto
    h-fit
    rounded
    overflow-hidden
    border-none
    shadow
    hover:bg-gray-100
    transition
    duration-500
    mb-5
    transform;
}
.card-column .card-title {
  @apply
    flex
    items-center
    p-2
    text-white
    font-bold
    text-sm
    bg-gradient-to-r from-gray-500 to-gray-300;
}
.card-column .more {
  @apply
    text-gray-500
    hover:text-gray-700
    border-t
    p-2
    text-sm
    cursor-pointer;
}
</style>
