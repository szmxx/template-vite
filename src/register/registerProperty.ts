/*
 * @Author: cola
 * @Date: 2022-07-05 15:19:23
 * @LastEditors: cola
 * @Description:
 */
import Http from '@/utils/Http'
import { App } from 'vue'

export default (app: App) => {
  app.config.globalProperties.$http = Http
}
