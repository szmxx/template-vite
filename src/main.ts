import { createApp } from 'vue'
import { showFailToast } from 'vant'
import App from './App.vue'
import install from '@/register'
import initConfig from './config'
import './permission'
const app = createApp(App)
install(app)
;(async () => {
  try {
    await initConfig()
    app.mount('#app')
  } catch {
    showFailToast('加载配置文件失败！')
  }
})()
