import App from './App.vue'
import { createApp } from 'vue'
import router from '@/router'
import '@/assets/public.scss'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-persistedstate-plugin'

const app = createApp(App)
const store = createPinia()
store.use(createPersistedState())
app
  .use(router)
  .use(store)
  .mount('#app')