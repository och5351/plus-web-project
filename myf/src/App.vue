<template>
  <div id="app" class="container">
    <div class="logo">
      <img src="./assets/logo.jpeg" width="150px" height="200px">
    </div>
      <b-tabs
       active-nav-item-class="font-weight-bold text-success"
        content-class="mt-3">
        <b-tab title="HOME">
          <home></home>
        </b-tab>
        <b-tab title="공지사항">
          <login></login>
        </b-tab>
        <b-tab title="HOT게시판">
          <post></post>
        </b-tab>
        <b-tab title="커뮤니티">
          <post></post>
        </b-tab>
      </b-tabs>
  </div>
</template>

<script>
import Home from './views/Home'
import Post from './views/Post'
import Login from './components/SignIn/login'

export default {
  name: 'App',
  components: {Home, Post, Login}
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
