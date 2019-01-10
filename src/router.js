import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/item',
      name: 'item',
      component: () => import(/* webpackChunkName: "item" */ './views/Item.vue')
    },
    {
      path: '/score',
      name: 'score',
      component: () => import(/* webpackChunkName: "score" */ './views/Score.vue')
    }
  ]
})
