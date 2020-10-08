import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'my-admin',
    entry: '//localhost:9000',
    container: '#myAdmin',
    activeRule: '/myAdmin'
  }
])

start()

createApp(App).use(store).use(router).mount('#app')
