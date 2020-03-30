import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from '../views/Article'
import login from '@/components/SignIn/login'
import clear from '@/components/SignIn/clear'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'post',
    component: function () {
      return import('../views/Home.vue')
    }
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('../views/About.vue')
    }
  },
  {
    path: '/post',
    name: 'Post',
    component: function () {
      return import('../views/Post.vue')
    }
  },
  {
    path: '/article/:contentId',
    name: 'Article',
    component: Article
  },
  {
    path: '/posting',
    name: 'Posting',
    component: function () {
      return import('../views/Posting.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
   path: '/signup',
   name: 'SignUp',
   component: function() {
      return import('../components/SignIn/SignUp.vue')
   }
 },
 {
   path: '/clear',
   name: 'clear',
   component: clear
 }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
