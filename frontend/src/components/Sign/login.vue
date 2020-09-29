<template>
	<div class="login" id="login_login">
		<br />
		<br />
		<div class="tag" id="login_tag">I D )</div>
		<input class="login_" type="text" id="id" v-model="user.userid" placeholder="ID를 입력해주세요!" />
		<br />
		<br />
		<div class="tag" id="login_tag">P W )</div>
		<input
			class="login_"
			v-on:keydown.enter="login"
			type="password"
			id="password"
			v-model="user.password"
			placeholder="PW를 입력해주세요!"
		/>
		<br />
		<br />
		<button v-on:click="login" class="btn" id="login_btn_login">로그인</button>
		<br />
		<img
			v-on:click="HandleGetAuth"
			:disabled="!isLoaded"
			src="../../assets/OAuthImage/btn_google_signin_dark_normal_web@2x.png"
			id="login_btn_gauth"
		/>
		<br />
		<p id="login_parahgraph">
			만약, 계정이 없다면,
			<a class="click" id="login_click_signup" @click="signUp">회원가입을 먼저 진행해주세요!</a>
		</p>
	</div>
</template>

<script>
export default {
	data: function () {
		return {
			redirect: this.$route.query.redirect,
			user: {
				userid: '',
				password: '',
			},
		};
	},
	methods: {
		login: function () {
			this.$http
				.post('/api/users/login', {
					user: this.user,
				})
				.then(res => {
					if (res.data.success === true) {
						// Session setting / 세션 지정
						this.$session.set('user_idx', res.data.user_idx);
						this.$session.set('userid', res.data.userid);
						this.$session.set('name', res.data.name);

						this.UpdateRating();

						// 등급 표시
						this.$http.get(`/api/users/check/${this.$session.get('user_idx')}`).then(res => {
							this.$session.set('rating', res.data.rating);
						});
						alert(res.data.message);
						this.$router.push(this.redirect);
					}
					if (res.data.success === false) {
						// Session removing / 세션 삭제
						this.$session.remove('user_idx');
						this.$session.remove('userid');
						this.$session.remove('name');
						this.$session.remove('rating');
						alert(res.data.message);
					}
				})
				.catch(() => {
					alert('알 수 없는 오류가 발생했습니다');
				});
		},
		signUp() {
			this.$router.push({
				path: '/SignUp',
				query: { redirect: this.$route.fullPath },
			});
		},
		UpdateRating() {
			this.$http.get(`/api/users/update/${this.$session.get('user_idx')}`).then();
		},
		HandleGetAuth() {
			// this.$gAuth
			// 	.getAuthCode()
			// 	.then(authCode => {
			// 		return this.$http.post('/api/auth/google', {
			// 			code: authCode,
			// 			redirect_uri: 'postmessage',
			// 		});
			// 	})
			// 	.then(response => {
			// 		console.log(response);
			// 	})
			// 	.catch(error => {
			// 		console.log(error);
			// 	});
			this.$http.get('/api/auth/google').then(function (res) {
				alert(res);
			});
			// 	.catch(() => {});
			// this.$gAuth
			// 	.signIn()
			// 	.then(GoogleUser => {
			// 		console.log(GoogleUser.getBasicProfile().getId());
			// 	})
			// 	.catch(error => {
			// 		alert(error);
			// 	});
		},
		isLoaded() {
			return false;
			// return this.$gAuth.isLoaded();
		},
	},
};
</script>

<style lang="scss">
@import '../../css/login.css';
</style>
