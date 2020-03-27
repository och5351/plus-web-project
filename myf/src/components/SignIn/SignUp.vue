<template>
    <div class="sign-up">
        <img src="../assets/loginComponentIMG/logo.png"><h3>플러스 마켓</h3><br><br><br>
        <div style="background-color: black; height:5px;"></div>
        <br><br>
        <div style="font-size:150%; border:15%;">회 원 가 입</div><br><br>


        <div style="position: relative; left: -155px;">I D : <br><br></div>
        <button v-on:click="idCheck" id="idCheckClear" style="position: relative; right: -395px; border: 1px solid black; width: 55pt; height: 35pt; visibility:visible;">중복 확인</button>
        <img src="../assets/loginComponentIMG/check.png" id="idClear" style="width:1%; visibility:hidden; position: relative; right: -335px;">
        <input type="text" id="id" name="uid" v-model="user.userid" placeholder="ID를 입력해주세요!" style="position: relative; left: -47px;"><br><br>


        <div style="position: relative; left: -147px;">N A M E : <br><br></div>
        <img src="../assets/loginComponentIMG/check.png" v-bind="check" id="nameClear" style="width:1%; visibility:hidden; position: relative; right: -467px;">
        <input type="text" value="*한글만 입력해 주세요." id="nameFalse" style="width:10%; position: relative; right: -415px; visibility:visible; font-weight: bold; border: 0px;">
        <input type="text" id="name" v-model="user.name" @keyup="nameCheck" placeholder="이름을 입력해주세요!" style="position: relative; left: -101px;"><br><br>


        <div style="position: relative; left: -155px;">P W : <br><br></div>
        <img src="../assets/loginComponentIMG/check.png" id="pwClear" style="width:1%; visibility:hidden; position: relative; right: -599px;">
        <input type="text" value="*비밀번호는 영문,숫자,특수 문자 조합 4~15이내로 입력해주세요." id="pwFalse" style="width:27%; position: relative; right: -545px; visibility:visible; font-weight: bold; border: 0px;">
        <input type="password" id="pw" name="upw" v-model="user.password" @keyup="pwCheck" style="position: relative; left: -227px;" placeholder="PW를입력해주세요!"><br><br>


        <div style="position: relative; left: -115px;">C H E C K P W : <br><br></div>
        <input type="password" id="pwcheck" @keyup="repwCheck" placeholder="PW를 다시 입력해주세요!"><br><br>
        <span id="alert-success" style="display: none; font-weight: bold; color: blue;">비밀번호가 일치합니다.</span>
        <span id="alert-danger" style="display: none; font-weight: bold; color: red;">비밀번호가 일치하지 않습니다.</span>
        
        <br>
<button v-on:click="signUp" id="allClear" style="border: 1px solid black; width: 55pt; height: 35pt;">가입하기</button>
<span>또는 <router-link to="/">로그인으로 돌아가기</router-link></span>
    </div>
</template>
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script>
export default {
    data: function () {
  return {
    user: {
      userid: '',
      name: '',
      password: ''
    }
  }
},
watch : {
  check: function() {
  }
},
methods: {
  //최종 가입 버튼
  signUp: function () {

        var a = document.getElementById('idClear');
        var b = document.getElementById('nameClear');
        var c = document.getElementById('pwClear');
        var d = document.getElementById('alert-success');

if((a.style.visibility=="visible") && (b.style.visibility=="visible") && (c.style.visibility=="visible") && (d.style.display=="inline-block")) {
    this.$http.post('/api/users/signUp', { 
      user: this.user
    })
    .then((res) => {
      if (res.data.success == true) {
        alert(res.data.message);
        this.$router.push('/') 
      }
    })
  }else{
    alert('회원 정보를 다시 확인해주세요!');
  }
  },
  //아이디 확인 버튼
  idCheck: function () {
    var idReg = /^[A-Za-z]+[A-Za-z0-9]{3,15}$/g;
        if( !idReg.test( $("input[name=uid]").val() ) ) {
            alert("아이디는 영문자로 시작하는 4~15자 영문자 또는 숫자이어야 합니다.(특수 문자 제외)");
            return;
        }
        else{
    this.$http.post('/api/users/idCheck', {
    user: this.user
    })
    .then((res) => {
      if (res.data.success == true) {
        alert(res.data.message);
        document.getElementById("idClear").style.visibility='visible'; 
        document.getElementById("idCheckClear").style.visibility='hidden';
        $("#id").attr("disabled",true).attr("readonly".false);     
      }
      if (res.data.success == false) {
        alert(res.data.message);       
      }
    })
        }
  },
  //이름 확인
  nameCheck: function () {
     var regexp = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"\\]/g;
     var v = $("#name").val();
     if  (regexp.test(v)) {
          alert("한글만 입력가능 합니다.");
          document.getElementById("nameClear").style.visibility='hidden';
          document.getElementById("nameFalse").style.visibility='visible';
          $("#name").val(v.replace(regexp, ''));
               }else{
                document.getElementById("nameClear").style.visibility='visible';
                document.getElementById("nameFalse").style.visibility='hidden';
               }
               if(v==''){
                 document.getElementById("nameClear").style.visibility='hidden';
                document.getElementById("nameFalse").style.visibility='visible';
               }
  },
  //비밀 번호 확인
  pwCheck: function () {

    var pwd1 = $("#pw").val();
    var pwd2 = $("#pwcheck").val();
    var pwReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{4,15}$/;

        if( !pwReg.test( $("input[name=upw]").val() ) ) {
            document.getElementById("pwClear").style.visibility='hidden';
            document.getElementById("pwFalse").style.visibility='visible';
            return;
        }
        else {
          document.getElementById("pwClear").style.visibility='visible';
          document.getElementById("pwFalse").style.visibility='hidden';
        }
        if ( pwd1 != '' && pwd2 == '' ) {
            null;
        } else if (pwd1 != "" || pwd2 != "") {
            if (pwd1 == pwd2) {
                $("#alert-success").css('display', 'inline-block');
                $("#alert-danger").css('display', 'none');

            } else {
                $("#alert-success").css('display', 'none');
                $("#alert-danger").css('display', 'inline-block');
            }
        }
  },
  //비밀 번호 재확인 
  repwCheck: function () {
        var pwd1 = $("#pw").val();
        var pwd2 = $("#pwcheck").val();

        if ( pwd1 != '' && pwd2 == '' ) {
            null;
        } else if (pwd1 != "" || pwd2 != "") {
            if (pwd1 == pwd2) {
                $("#alert-success").css('display', 'inline-block');
                $("#alert-danger").css('display', 'none');

            } else {
                $("#alert-success").css('display', 'none');
                $("#alert-danger").css('display', 'inline-block');
            }
        }
  },
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
.sign-up {
    margin-top: 40px;
    text-align: center;
}
input {
    margin: 0px 0;
    width: 20%;
    padding: 15px;
}
button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
    border: 1px;
    background-color: white;
}
p {
    margin-top: 40px;
    font-size: 20px;
}
span {
    display: block;
    margin-top: 20px;
    font-size: 15px;
}
</style>