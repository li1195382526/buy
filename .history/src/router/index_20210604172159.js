import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../page/index'
import user from '../page/user/index'
import customer from '../page/customer/index'
import material from '../page/material/index'
import Platform from '../page/platform/index'
import Launch from '../page/platform/index'
import Exposure from '../page/Exposure/index'
import Billing from '../page/Billing/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home,
      children:[
         {// 通知
          meta: {requireAuth: true},
          path: '/topSlide/notifications',
          name: 'notifications',
          // component: () => import("./views/topSlide/notifications.vue")
          component: resolve => require(['./views/topSlide/notifications.vue'], resolve)
      },
      ]
    }
  ]
})
