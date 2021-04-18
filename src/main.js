import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import BaseButton from './components/BaseButton'
import BaseBox from './components/BaseBox'

const app = createApp(App)
app.component('base-button', BaseButton)
app.component('base-box', BaseBox)
app.use(router).mount('#app')
