import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/style/reset.less'
import '@/assets/font/iconfont.css';
import '@/assets/font/iconfont.js';
// @ts-ignore
import directives from '@/directives'

const app = createApp(App)

app.use(directives)
app.mount('#app')
