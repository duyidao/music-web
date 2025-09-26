import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/style/reset.less'
import directives from './directives/index.js'

const app = createApp(App)

app.use(directives) // 全局指令
app.mount('#app')
