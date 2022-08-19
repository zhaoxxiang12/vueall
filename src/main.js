import Vue from 'vue'
import App from './App.vue'
// 如果目录中只有一个index.js文件可以直接引入目录
import router from './router'
import store from './store'
import api from './javascript/api.js'

Vue.config.productionTip = false
Vue.prototype.api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
