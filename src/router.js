import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Login from './views/login.vue'
import ProjectIndex from './views/project/index.vue'
import ProjectList from './views/project/list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta:{
        requiresAuth: true
      },
      children:[
        {
          path: '/project',
          name: 'project',
          component: ProjectIndex,
          redirect: '/project/list',
          children:[
            {
              path: 'list',
              component: ProjectList
            }
          ]
        }
      ]
      // component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
