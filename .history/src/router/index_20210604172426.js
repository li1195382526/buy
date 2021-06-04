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
         {
          path: '/user',
          name: 'user',
          component: resolve => require(['../page/user/index'], resolve)
        },{
          path: '/customer',
          name: 'customer',
          component: resolve => require(['../page/customer/index'], resolve)
        },{
          path: '/material',
          name: 'material',
          component: resolve => require(['../page/material/index'], resolve)
        },{
          path: '/user',
          name: 'user',
          component: resolve => require(['../page/user/index'], resolve)
        },{
          path: '/user',
          name: 'user',
          component: resolve => require(['../page/user/index'], resolve)
        },{
          path: '/user',
          name: 'user',
          component: resolve => require(['../page/user/index'], resolve)
        },
      ]
    }
  ]
})
