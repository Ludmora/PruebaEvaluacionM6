import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import lista from '../views/listaJuegos.vue'
import notfound from '@/views/notfound.vue'
import juego from '@/views/Juego.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/listaJuegos',
    name:'lista',
    component: lista
  },
  {
    path: '/listaJuegos/:id',
    name: 'juego',
    component: juego,
    props: true,
  },
    {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
 {
  path: '/:catchAll(.*)',
  name: 'notfound',
  component: notfound,
}
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
