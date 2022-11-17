import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'normalize.css'
import '@/css/index.less'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

import { registerFn } from '@/global/registerFn/index'

const app = createApp(App)

app.use(createPinia())
app.use(registerFn)
app.use(ElementPlus)
app.use(router)

app.mount('#app')
