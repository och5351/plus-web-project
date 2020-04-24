<template>
  <div id="app" class="container">
    <div class="logo">
      <img style="width: 200px; height: 200px" alt="Vue logo" src="./assets/plusLogo.png">
    </div>
    <div class="publicLoginButton" style="padding-right: 20px" v-if="mySession == true">
      <div>
          <span class="trueLogin">닉네임</span><img class="rounded-circle" align="right" width="30px" height="30px" src="https://picsum.photos/250/250/?image=59" alt="Circle image"/>
      </div>
    </div>
    <div v-else>
      <div>
        <button @click="login" class="loginbox" >Login</button>
        <span class="loginbox">로그인 해주세요</span>
      </div>
    </div>
      <b-tabs
       active-nav-item-class="font-weight-bold text-success"
        content-class="mt-3">
        <b-tab title="HOME" @click="main"/>
        <b-tab title="공지사항" @click="main"/>
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
    },
    data() {
      return {
        /*로그인 세션 정보를 받아와서 로그인을 할지 닉네임을 표시할지 선택*/
        mySession: false
      }
    },
    watch: {
      
    },
  }
</script>

<style scoped>
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
  .loginbox {
    width: 150px; 
    vertical-align: middle; 
    float:right;
  }
  .trueLogin{
    width: 50px; 
    vertical-align: middle; 
    float:right;
  }
</style>