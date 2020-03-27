<template>
    <div class="login">
        <br><br><br><br><br><br><br>
        <div style="position: relative; left: -155px;">I D : <br><br></div>
       <input type="text" id="id" v-model="user.userid" placeholder="ID를 입력해주세요!"><br><br>
       <div style="position: relative; left: -155px;">P W : <br><br></div>
       <input type="password" id="password" v-model="user.password" placeholder="PW를 입력해주세요!"><br><br>
       <button v-on:click="login">로그인</button>
<p>만약, 계정이 없다면, <router-link to="/SignUp">회원가입을 먼저 진행해주세요!</router-link></p>
    </div>
</template>
<script>
export default {
       data: function () {
  return {
    user: {
      userid: '',
      password: ''
    }
  }
},
methods: {
    login: function () {
    this.$http.post('/api/users/login', { 
      user: this.user
    })
    .then((res) => {
      if (res.data.success == true) {
        alert(res.data.message);
         this.$router.push('/clear') 
      }
      if (res.data.success == false) {
        alert(res.data.message);
      }
    })
    .catch(function () {
      alert('error')
    })
  }
}
}
</script>
<style scoped>
h3 {
  text-align: center;
  position: absolute;
  transform: translate( 310%, -250% );
  font-size: 250%;
}
img {
  width: 10%;
  vertical-align: middle;
}
.login {
margin-top: 40px;
text-align: center;
}
input {
    margin: 0px 0;
    width: 20%;
    padding: 15px;
}
button {
  margin-top: 10px;
    width: 10%;
    cursor: pointer;
    background-color: white;
    border: 0px;
    height: 0px;
}
p {
    margin-top: 40px;
    font-size: 15px;
}
p a {
    text-decoration: underline;
    cursor: pointer;
}
</style>