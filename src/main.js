import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from './store'
import Axios from 'axios'
import Mock from './mock'

Vue.config.productionTip = false

//设置cookies
const $cookies = require('vue-cookies')
Vue.use($cookies)

//设置后台url和axios
Axios.defaults.baseURL = 'http://job/api'
Vue.prototype.$ajax = Axios
// Vue.prototype.$form = FormFunction

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (router.app.$cookies.get("login") !== 'on') {
      next({
        path: '/login',
        query: { redirect: "/" } // 把要跳转的地址作为参数传到下一步
      })
    } else {
      next()
    }
  } else {
    if (to.query && to.query.redirect) {
      if (router.app.$cookies.get("login") === "on") {
        next({path: to.query.redirect})
      } else {
        next()
      }
    } else {
      next() // 确保一定要调用 next()
    }
  }
  })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
