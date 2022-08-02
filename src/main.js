import { createApp } from 'vue'
import $ from 'jquery'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import axios from 'axios'

createApp(App).use(store).use(router).use($).mount('#app')

axios.defaults.headers.post['Content-Type'] = 'application/json'
