<template>
    <div class="login">
        <br><br>
        <div class="tag">I D :</div>
        <input type="text" id="id" v-model="user.userid" placeholder="ID를 입력해주세요!"><br><br>
        <div class="tag">P W :</div>
        <input type="password" id="password" v-model="user.password" placeholder="PW를 입력해주세요!"><br><br>
        <button v-on:click="login">로그인</button>
        <p>만약, 계정이 없다면,
            <router-link to='/SignUp'>회원가입을 먼저 진행해주세요!
                <router-view/>
            </router-link>
        </p>
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
                            // Session setting / 세션 지정
                            this.$session.set('user_idx', res.data.user_idx);
                            this.$session.set('userid', res.data.userid);
                            this.$session.set('name', res.data.name);

                            alert(res.data.message);
                            this.$router.push('/')
                        }
                        if (res.data.success == false) {
                            // Session removing / 세션 삭제
                            this.$session.remove('user_idx');
                            this.$session.remove('userid');
                            this.$session.remove('name');
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
    .login {
        margin-top: 40px;
        text-align: center;
    }

    .tag {
        position: relative;
        margin-left: -175px;
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