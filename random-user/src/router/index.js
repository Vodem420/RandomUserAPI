import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing-page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

export default router
