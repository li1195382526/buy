import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../page/index'

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
          path: '/list',
          name: 'list',
          component: resolve => require(['../page/user/list.vue'], resolve)
        },
        {
          path: '/customer',
          name: 'customer',
          component: resolve => require(['../page/customer/index'], resolve)
        },
        {
          path: '/customeradd',
          name: 'customeradd',
          component: resolve => require(['../page/customer/customeradd.vue'], resolve)
        },
        {
          path: '/material',
          name: 'material',
          component: resolve => require(['../page/material/list.vue'], resolve)
        },{
          path: '/materialadd',
          name: 'materialadd',
          component: resolve => require(['../page/material/index.vue'], resolve)
        },{
          path: '/Platform',
          name: 'Platform',
          component: resolve => require(['../page/platform/index'], resolve)
        },{
          path: '/Launch',
          name: 'Launch',
          component: resolve => require(['../page/launch/index'], resolve)
        },
        {
          path: '/Launchadd',
          name: 'Launchadd',
          component: resolve => require(['../page/launch/add.vue'], resolve)
        },{
          path: '/Exposure',
          name: 'Exposure',
          component: resolve => require(['../page/exposure/index'], resolve)
        },{
          path: '/Billing',
          name: 'Billing',
          component: resolve => require(['../page/billing/index'], resolve)
        },
      ]
    }
  ]
})
