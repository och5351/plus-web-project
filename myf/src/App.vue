<template>
  <div id="app" class="container">
    <div class="logo">
      <img src="./assets/logo.jpeg" width="150px" height="200px">
    </div>
      <b-tabs
       active-nav-item-class="font-weight-bold text-success"
        content-class="mt-3">
        <b-tab title="HOME">
          <router-view/>
        </b-tab>
        <b-tab title="공지사항">
          <router-link to='/login'></router-link>
        </b-tab>
        <b-tab title="HOT게시판">
          <router-view/>
        </b-tab>
        <b-tab title="자유게시판">
          <router-view/>
        </b-tab>
      </b-tabs>
    
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
