import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js' // Arahkan secara spesifik ke index.js router
import './assets/style.css'

const app = createApp(App)

app.use(router)
app.mount('#app')