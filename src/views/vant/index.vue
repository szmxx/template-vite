<!--
 * @Author: cola
 * @Date: 2023-09-11 00:24:12
 * @LastEditors: cola
 * @Description:

-->
<template>
  <div class="flex flex-col gap-y-4 p-4">
<<<<<<< HEAD
    <div class="flex gap-x-2">
=======
    <div class="flex gap-x-2" @click="onClick">
>>>>>>> 6b3db6c (feat(core): add vant)
      <van-button type="primary">主要按钮</van-button>
      <van-button type="success">成功按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
    <div>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
<<<<<<< HEAD
=======
            autocomplete="on"
>>>>>>> 6b3db6c (feat(core): add vant)
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup lang="ts">
<<<<<<< HEAD
import { showLoadingToast, showDialog } from 'vant'
=======
import { showLoadingToast } from 'vant'

>>>>>>> 6b3db6c (feat(core): add vant)
const username = ref('')
const password = ref('')
const onSubmit = () => {
  console.log('submit')
}
<<<<<<< HEAD
showLoadingToast({
  message: '加载中...',
  forbidClick: true,
})
showDialog({ message: '提示' })
=======

function onClick() {
  showLoadingToast({
    message: '加载中...',
    forbidClick: true,
  })
}
>>>>>>> 6b3db6c (feat(core): add vant)
</script>
