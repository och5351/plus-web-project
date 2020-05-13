<template>
	<div>
		<!-- 로그인 박스 -->
		<div v-if="this.$session.get('user_idx') === undefined" class="loginBox">
			<b-button @click="signUp" variant="outline-secondary" class="memrog">회원가입</b-button>
			<span>
				<!--<a href="#" class="idpw">아이디 ·</a>
				<a href="#" class="idpw"> 비밀번호 찾기 </a>-->
			</span>
			<b-button @click="login" variant="outline-secondary" size="md">로그인</b-button>
		</div>
		<div v-else class="loginBox">
			<b-button @click="logout" variant="outline-secondary">로그아웃</b-button>
		</div>

		<!-- 게시판 설명 -->
		<div v-if="categoryNameDetail" class="border" id="exBox">
			<div class="card text-dark bg secondary mb-3">
				<div class="card-header">{{ categoryNameDetail }}게시판</div>
				<div class="card-body">
					<h5 class="card-title">{{ categoryName }}</h5>
					<p class="card-text">{{ categoryDetail }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		categoryName: String,
	},
	data() {
		return {
			categoryNameDetail: null,
			categoryDetail: null,
		};
	},
	created() {
		this.getCategoryDetail();
	},
	methods: {
		getCategoryDetail() {
			this.$http
				.get(`/api/board/detail/${this.categoryName}`)
				.then(res => {
					if (res.data.length === 0) {
						return;
					}
					this.categoryNameDetail = res.data[0].ca_name;
					this.categoryDetail = res.data[0].ca_detail;
				})
				.catch(error => {
					console.log(`Error : ${error}`);
				});
		},
		signUp() {
			this.$router.push('/SignUp');
		},
		login() {
			this.$router.push({
				path: '/login',
				query: { redirect: this.categoryName },
			});
		},
		logout() {
			this.$session.destroy();
			location.reload();
		},
	},
};
</script>

<style>
#exBox {
	margin-top: 20px;
	margin-bottom: 20px;
}

span {
	font-size: 14px;
	-webkit-text-fill-color: gray;
}

.memrog {
	margin: 10px;
	cursor: pointer;
	font-weight: 700;
}

.loginBox {
	margin-top: 15px;
	margin-bottom: 10px;
	text-align: right;
}
</style>
