import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import SignUp from '@/components/SignUp'
import clear from '@/components/clear'

Vue.use(Router)

export const router = new Router({
 mode: 'history',
 routes: [
   {
     path: '/',
     name: 'login',
     component: login
   },
   {
    path: '/SignUp',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/clear',
    name: 'clear',
    component: clear
  },
 ]
})