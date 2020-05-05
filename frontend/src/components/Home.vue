<template>
	<div id="app" class="container">
		<div class="logo">
			<img style="width: 200px; height: 200px;" alt="Vue logo" src="./assets/plusLogo.png" />
		</div>
		<div>
			<b-navbar toggleable="lg" type="dark" variant="secondary">
				<b-navbar-brand href="#">Plus</b-navbar-brand>
				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav>
						<b-nav-item href="#">Home</b-nav-item>
						<b-nav-item href="#">Hot게시판</b-nav-item>
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

		<!-- 배너 부분 링크 문제 해결해야함 -->
		<div class="row">
			<div class="col-md-9" id="banner">
				<b-carousel
					id="carousel-fade"
					style="text-shadow: 0px 0px 2px #000;"
					fade
					indicators
					img-width="571"
					img-height="612"
				>
					<b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=18"></b-carousel-slide>
					<b-carousel-slide
						caption="Second Slide"
						img-src="https://picsum.photos/1024/480/?image=12"
					></b-carousel-slide>
					<b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22"></b-carousel-slide>
				</b-carousel>
			</div>

			<!-- 로그인 박스 -->
			<div class="col-md-3">
				<div class="loginbox">
					<b-button @click="login" class="loginbutton" align="center">Login</b-button>
				</div>

				<!-- 공지사항 박스 -->
				<div class="border" id="notice">
					<label>공지사항</label><br />
					<b-link href="#"> 공지사항은 누가 전파한다?</b-link><br />
					<b-link href="#"> 당직사관이 전파한다</b-link><br />
					<b-link href="#"> 애국가 1절만 제창</b-link><br />
					<b-link href="#"> 동해물과 백두산이 마르고 닳도록 하느님이 누구시죠</b-link><br />
				</div>
			</div>
		</div>

		<!-- 인기글 & 최신글 -->
		<div class="row">
			<div class="col-md-9">
				<div class="hottopic">
					<div class="tabs" variant="secondary">
						<b-card no-body>
							<b-tabs pills card>
								<b-tab title="인기글" active
									><b-card-text> <b-table striped hover :items="items"></b-table> </b-card-text
								></b-tab>
								<b-tab title="최신글"><b-card-text>Tab contents 2</b-card-text></b-tab>
							</b-tabs>
						</b-card>
					</div>
				</div>
			</div>
			<!-- 광고 -->
			<div class="col-md-3">
				<div class="ad">
					<b-img src="https://picsum.photos/300/150/?image=41" fluid-grow alt="Fluid-grow image"></b-img>
				</div>
			</div>
		</div>

		<!-- 라우터 연결할때만 이거 보고 할거임 탭's 안쓸꼬야
      <b-tabs
       active-nav-item-class="font-weight-bold text-success"
        content-class="mt-3">
        <b-tab title="HOME" @click="main"/>
        <b-tab title="공지사항" @click="main"/>
        <b-tab title="HOT게시판" @click="post"/>
        <b-tab title="커뮤니티" @click="comunity"/>
      </b-tabs>
      <router-view></router-view>
      -->
	</div>
</template>

<script>
export default {
	name: 'App',
	methods: {
		main: function () {
			if (this.$router.history.current.path != '/') {
				this.$router.push('/');
			}
		},
		login: function () {
			if (this.$router.history.current.path != '/login') {
				this.$router.push('/login');
			}
		},
		post: function () {
			if (this.$router.history.current.path != '/') {
				this.$router.push('/');
			}
		},
		comunity: function () {
			if (this.$router.history.current.path != '/board') {
				this.$router.push('/board');
			}
		},
	},
	data() {
		return {
			/*로그인 세션 정보를 받아와서 로그인을 할지 닉네임을 표시할지 선택*/
			mySession: false,
		};
	},
	watch: {},
};
</script>

<script>
export default {
	data() {
		return {
			items: [
				{ age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
				{ age: 21, first_name: 'Larsen', last_name: 'Shaw' },
				{ age: 89, first_name: 'Geneva', last_name: 'Wilson' },
				{ age: 38, first_name: 'Jami', last_name: 'Carney' },
			],
		};
	},
};
</script>

<style scoped>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #42b983;
	margin-top: 10px;
	margin-right: 150px;
	margin-left: 150px;
}
#banner {
	margin-top: 10px;
}

#notice {
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	margin-top: 10px;
	padding: 7px;
	height: 250px;
	align-self: auto;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.loginbutton {
	margin-top: 10px;
	width: 250px;
	height: 70px;
}
.trueLogin {
	width: 50px;
	vertical-align: middle;
	float: right;
}

.hottopic {
	margin-top: 10px;
}
</style>
