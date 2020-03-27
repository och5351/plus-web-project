<template>
  <div id="app" class="container">
    <div class="logo">
      <img src="./assets/logo.jpeg" width="150px" height="200px">
    </div>
      <b-tabs
       active-nav-item-class="font-weight-bold text-success"
        content-class="mt-3">
        <b-tab title="HOME">
          <router-link to="/">
          홈 화면
          </router-link>
        </b-tab>
        <b-tab title="공지사항">
          <router-link to="/">
          공지사항 내용들
          </router-link>
        </b-tab>
        <b-tab title="HOT게시판">
          <router-link to="/">
          HOT한 게시물
          </router-link>
        </b-tab>
        <b-tab title="자유게시판">
          <router-link to="/">
          자유로운 게시물
          </router-link>
        </b-tab>
      </b-tabs>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
