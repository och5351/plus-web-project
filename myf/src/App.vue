<template>
  <div id="app" class="container">
    <div class="logo">
      <img src="./assets/logo.jpeg" width="150px" height="200px">
    </div>
      <b-tabs
       active-nav-item-class="font-weight-bold text-success"
        content-class="mt-3">
        <b-tab title="HOME" @click="main"/>

        <b-tab title="공지사항" @click="login"/>

        <b-tab title="HOT게시판" @click="post"/>
 
        <b-tab title="커뮤니티" @click="detailPost">
  
        </b-tab>
      </b-tabs>
      <router-view></router-view>
  </div>
</template>

<script>
//import Home from './views/Home'
//import Post from './views/Post'
//import Login from './components/SignIn/login'

export default {
  name: 'App',
  methods: {
    main: function(){
      this.$router.push('/') 
    },
    login: function(){
      this.$router.push('/login') 
    },
    post: function(){
      this.$router.push('/post') 
    },
    detailPost: function(){
      this.$router.push('/')
    }
  },
  //components: {Home, Post, Login}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #42b983;
  margin-top: 60px;
  margin-right: 150px;
  margin-left: 150px;

}
</style>
