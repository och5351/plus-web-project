<template>
  <div id="app" class="container">
    <div class="logo">
      <img style="width: 200px; height: 200px" alt="Vue logo" src="./assets/plusLogo.png">
    </div>

    <div>
      <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-navbar-brand href="#">Plus</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="main">Home</b-nav-item>
          <b-nav-item @click="board">자유게시판</b-nav-item>
        </b-navbar-nav>
          <b-dropdown size="sm" text="커뮤니티">
            <b-dropdown-item href="#">여행</b-dropdown-item>
            <b-dropdown-item href="#">음식</b-dropdown-item>
            <b-dropdown-item href="#">만화</b-dropdown-item>
            <b-dropdown-item href="#">노래</b-dropdown-item>
          </b-dropdown>

        <!-- 오른쪽 검색창 -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="검색"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
      </b-navbar>
    </div>
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
      board () {
        this.$router.push('/board/free');
      },
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