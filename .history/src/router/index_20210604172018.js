import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../page/index'
import user from '../page/user/index'
import customer from '../page/customer/index'
import material from '../page'
import Platform from 
import Launch from
import Exposure from
import Billing from

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    }
  ]
})
