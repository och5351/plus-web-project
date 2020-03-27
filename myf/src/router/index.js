import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from '../views/Article'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
