import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound.vue'
import CheckOut from '../views/checkout.vue'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/checkout'
    },
    
   
    {
      path: '/checkout',
      name: 'check-out',
      component: CheckOut
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    },
  ]
})