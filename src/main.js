import { createApp } from 'vue'
import { createPinia } from "pinia";
import { routers } from "@/router/router.js";
import './assets/style/main.scss'
import App from './App.vue'
import tech from './db.js'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)
app.use(routers)
app.mount('#app')

