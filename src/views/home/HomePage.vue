<!--
 * @Author: cola
 * @Date: 2022-07-04 19:17:18
 * @LastEditors: cola
 * @Description:
-->
<template>
  <div class="flex justify-between h-[60px] items-center px-4 border-b">
    <div>{{ title }}</div>
    <DarkToggle></DarkToggle>
  </div>
  <div class="flex gap-4 p-4">
    <div
      v-for="i in portals"
      :key="i.label"
      class="center rounded cursor-pointer w-400px h-200px bg-color hover:bg-primary"
      @click="openHandler(i)"
    >
      {{ i.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import useStore from '@/store/app'
const { config } = useStore()
const title = config?.title
const portals = [
  {
    label: '系统一',
    path: '/demo',
  },
  {
    label: '系统二',
    path: '/admin',
  },
]

const router = useRouter()

function openHandler(i: Record<string, string>) {
  router.push(i.path)
}
</script>
