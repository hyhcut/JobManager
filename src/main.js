import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from './store'
import Axios from 'axios'

Vue.config.productionTip = false

Axios.defaults.baseURL = 'http://job/api'
Vue.prototype.$ajax = Axios
// Vue.prototype.$form = FormFunction

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log(store.state.status);
    if (!store.state.login.status) {
      next({
        path: '/login',
        query: { redirect: "/" } // 把要跳转的地址作为参数传到下一步
      })
    } else {
      next()
    }
  } else {
    if (to.query && to.query.redirect) {
      if (store.state.login.status) {
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
