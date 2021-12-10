import App from './App.vue'
import { createApp } from 'vue'
import router from '@/router'
import '@/assets/public.scss'

const app = createApp(App)
app.use(router).mount('#app')