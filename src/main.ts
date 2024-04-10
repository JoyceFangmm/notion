import './assets/styles/main.css'

import { createHead } from '@unhead/vue'
import { createApp } from 'vue'
import VueLazyload from 'vue-lazyload'

import { app as cacheApp } from '@/hooks'

import blogData from './api/blogData'
import App from './App.vue'
import router from './router'

blogData.init()

const app = createApp(App)

app.use(VueLazyload, {
  error: '../src/assets/images/common/default.png',
  loading: '../src/assets/images/common/default.png',
  filter: {
    https(listener: any) {
      if (!listener.src) return
      listener.src = listener.src.replace(/^https?:/, '')
    },
  },
})

const head = createHead()
app.use(head)

// 错误跟踪
app.config.errorHandler

cacheApp.setApp(app)
app.use(router)
app.mount('#app')
