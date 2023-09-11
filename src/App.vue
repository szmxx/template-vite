<!--
 * @Author: cola
 * @Date: 2022-07-04 16:13:38
 * @LastEditors: cola
 * @Description:
-->

<template>
  <el-config-provider :locale="current">
    <router-view v-if="isSelfRoute"></router-view>
    <LayoutPage v-else></LayoutPage>
  </el-config-provider>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import LayoutPage from '@/layout'
import { isSelfRouteFn } from '@/layout/utils'
// 是否是自身路由
const isSelfRoute = isSelfRouteFn()
const { locale } = useI18n()
const current = shallowRef()
watch(
  locale,
  (newVal) => {
    console.log(newVal)
    switch (newVal) {
      case 'zh-CN':
        current.value = zhCn
        break
      case 'en-US':
        current.value = null
        break
    }
  },
  {
    immediate: true,
  },
)

console.log(import.meta.env.VITE_APP_NAME)
</script>
