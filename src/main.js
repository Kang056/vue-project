import { createApp } from 'vue'
import App from './App.vue'
import router from './index.js'
import i18n from './assets/i18n' // 引入 i18n 實例
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(i18n) // 使用 i18n

app.mount('#app')
