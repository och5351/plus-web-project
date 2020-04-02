<template>
  <div id="app" class="container">
    <div class="logo">
      <img src="./assets/logo.jpeg" width="150px" height="200px">
    </div>
    <div style="padding-right: 20px">
      <div>
          <span style="width: 50px; vertical-align: middle; float:right;">닉네임</span><img class="rounded-circle" align="right" width="30px" height="30px" src="https://picsum.photos/250/250/?image=59" alt="Circle image"/>
      </div>
    </div>
      <b-tabs
       active-nav-item-class="font-weight-bold text-success"
        content-class="mt-3">
        <b-tab title="HOME" @click="main"/>
        <b-tab title="공지사항" @click="login"/>
        <b-tab title="HOT게시판" @click="post"/>
        <b-tab title="커뮤니티" @click="comunity"/>
      </b-tabs>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    main: function(){
      if(this.$router.history.current.path != '/'){
        this.$router.push('/')
      }
    },
    login: function(){
      if(this.$router.history.current.path != '/login'){
        this.$router.push('/login')
      }
    },
    post: function(){
      if(this.$router.history.current.path != '/'){
        this.$router.push('/')
      }
    },
    comunity: function(){
      if(this.$router.history.current.path != '/board'){
        this.$router.push('/board')
      }
    }
  }
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
