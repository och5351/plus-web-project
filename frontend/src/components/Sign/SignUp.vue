<template>
	<div class="sign-up">
		<br />
		<div style="font-size: 150%; border: 15%; color: green">회 원 가 입</div>
		<br />
		<br />

		<div style="position: relative; left: -140px; color: green">I D )</div>
		<b-button
			v-on:click="idCheck"
			id="idCheckClear"
			variant="outline-secondary"
			style="position: relative; right: -350px; width: 75pt; height: 35pt; visibility: visible"
			>중복 확인
		</b-button>
		<img
			src="../../assets/loginComponentIMG/check.png"
			id="idClear"
			style="width: 1%; visibility: hidden; position: relative; right: -260px"
		/>
		<input
			class="signup_"
			type="text"
			id="id"
			name="uid"
			v-model="user.userid"
			placeholder="ID를 입력해주세요!"
			style="position: relative; left: -77px"
		/>
		<br />
		<br />

		<div style="position: relative; left: -125px; color: green">
			N A M E )
			<br />
		</div>
		<img
			src="../../assets/loginComponentIMG/check.png"
			id="nameClear"
			style="width: 1%; visibility: hidden; position: relative; right: -400px"
		/>
		<input
			class="signup_"
			type="text"
			value="* 한글만 입력해 주세요."
			id="nameFalse"
			style="width: 20%; position: relative; right: -380px; visibility: visible; font-weight: bold; border: 0px"
			disabled
		/>
		<input
			class="signup_"
			type="text"
			id="name"
			v-model="user.name"
			@keyup="nameCheck"
			placeholder="이름을 입력해주세요!"
			style="position: relative; left: -139px"
		/>
		<br />
		<br />

		<div style="position: relative; left: -140px; color: green">
			P W )
			<br />
		</div>
		<img
			src="../../assets/loginComponentIMG/check.png"
			id="pwClear"
			style="width: 1%; visibility: hidden; position: relative; right: -540px"
		/>
		<input
			class="signup_"
			type="text"
			value="* 비밀번호는 영문,숫자,특수 문자 조합 4~15이내로 입력해주세요."
			id="pwFalse"
			style="width: 45%; position: relative; right: -520px; visibility: visible; font-weight: bold; border: 0px"
			disabled
		/>
		<input
			class="signup_"
			type="password"
			id="pw"
			name="upw"
			v-model="user.password"
			@keyup="pwCheck"
			style="position: relative; left: -279px"
			placeholder="PW를입력해주세요!"
		/>
		<br />
		<br />

		<div style="position: relative; left: -102px; color: green">
			C H E C K P W )
			<br />
		</div>
		<input
			class="signup_"
			v-on:keydown.enter="signUp"
			type="password"
			id="pwcheck"
			style="position: relative; left: -23px"
			@keyup="repwCheck"
			placeholder="PW를 다시 입력해주세요!"
		/>
		<br />
		<br />
		<span id="alert-success" style="display: none; font-weight: bold; color: blue">비밀번호가 일치합니다.</span>
		<span id="alert-danger" style="display: none; font-weight: bold; color: red">비밀번호가 일치하지 않습니다.</span>

		<br />
		<br />
		<b-button
			v-on:click="signUp"
			id="allClear"
			variant="outline-secondary"
			style="border: 1px solid black; width: 67pt; height: 35pt"
			>가입하기
		</b-button>
		<br />
		<br />
		<p>
			또는
			<router-link to="/login">로그인으로 돌아가기</router-link>
		</p>
		<br />
		<br />
	</div>
</template>

<script>
export default {
	data: function () {
		return {
			redirect: this.$route.query.redirect,
			user: {
				userid: '',
				name: '',
				password: '',
			},
		};
	},

	methods: {
		//최종 가입 버튼
		signUp() {
			var id = this._$('#idClear').css('visibility');
			var name = this._$('#nameClear').css('visibility');
			var pw = this._$('#pwClear').css('visibility');
			var aler = this._$('#alert-success').css('display');

			if (id === 'visible' && name === 'visible' && pw === 'visible' && aler === 'inline-block') {
				this.$http
					.post('/api/users/signUp', {
						user: this.user,
					})
					.then(res => {
						if (res.data.success === true) {
							alert(res.data.message);
							this.$router.push(this.redirect);
						}
					});
			} else {
				alert('회원 정보를 다시 확인해주세요!');
			}
		},
		//아이디 확인 버튼
		idCheck() {
			var idReg = /^[A-Za-z]+[A-Za-z0-9]{3,15}$/g;
			if (!idReg.test(this._$('input[name=uid]').val())) {
				alert('아이디는 영문자로 시작하는 4~15자 영문자 또는 숫자이어야 합니다.(특수 문자 제외)');
			} else {
				this.$http
					.post('/api/users/idCheck', {
						user: this.user,
					})
					.then(res => {
						if (res.data.success == true) {
							alert(res.data.message);
							this._$('#idClear').css('visibility', 'visible');
							this._$('#idCheckClear').css('visibility', 'hidden');
							this._$('#id').attr('disabled', true).attr('readonly', false);
						}
						if (res.data.success == false) {
							alert(res.data.message);
						}
					});
			}
		},
		//이름 확인
		nameCheck() {
			var regexp = /[a-z0-9]|[ [\]{}()<>?|`~!@#$%^&*-_+=,.;:'"\\]/g;
			var v = this._$('#name').val();
			if (regexp.test(v)) {
				alert('한글만 입력가능 합니다.');
				this._$('#nameClear').css('visibility', 'hidden');
				this._$('#nameFalse').css('visibility', 'visible');
				this._$('#name').val(v.replace(regexp, ''));
			} else {
				this._$('#nameClear').css('visibility', 'visible');
				this._$('#nameFalse').css('visibility', 'hidden');
			}
			if (v == '') {
				this._$('#nameClear').css('visibility', 'hidden');
				this._$('#nameFalse').css('visibility', 'visible');
			}
		},
		//비밀 번호 확인
		pwCheck() {
			var pwd1 = this._$('#pw').val();
			var pwd2 = this._$('#pwcheck').val();
			var pwReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{4,15}$/;

			if (!pwReg.test(this._$('input[name=upw]').val())) {
				this._$('#pwClear').css('visibility', 'hidden');
				this._$('#pwFalse').css('visibility', 'visible');
				return;
			} else {
				this._$('#pwClear').css('visibility', 'visible');
				this._$('#pwFalse').css('visibility', 'hidden');
			}
			if (pwd1 != '' && pwd2 == '') {
				null;
			} else if (pwd1 != '' || pwd2 != '') {
				if (pwd1 == pwd2) {
					this._$('#alert-success').css('display', 'inline-block');
					this._$('#alert-danger').css('display', 'none');
				} else {
					this._$('#alert-success').css('display', 'none');
					this._$('#alert-danger').css('display', 'inline-block');
				}
			}
		},
		//비밀 번호 재확인
		repwCheck() {
			var pwd1 = this._$('#pw').val();
			var pwd2 = this._$('#pwcheck').val();

			if (pwd1 != '' && pwd2 == '') {
				null;
			} else if (pwd1 != '' || pwd2 != '') {
				if (pwd1 == pwd2) {
					this._$('#alert-success').css('display', 'inline-block');
					this._$('#alert-danger').css('display', 'none');
				} else {
					this._$('#alert-success').css('display', 'none');
					this._$('#alert-danger').css('display', 'inline-block');
				}
			}
		},
	},
};
</script>
<style lang="scss">
@import '../../css/SignUp.css';
</style>
