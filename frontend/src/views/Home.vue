<template>
	<div id="app" class="container">
		<!-- 배너 부분 링크 문제 해결해야함 -->
		<div class="row">
			<div class="col-md-9" id="home_banner">
				<b-carousel
					id="carousel-fade"
					style="text-shadow: 0px 0px 2px #000"
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
				<div v-if="this.$session.get('user_idx') == null" class="loginbox">
					<b-button @click="login" class="loginbutton" id="home_loginbutton" align="center">Login</b-button>
				</div>
				<div class="MyInfo" id="home_MyInfo" v-else>
					<img v-if="this.$session.get('rating') === ' 일반회원'" alt width="24" height="24" src="/css/beginer.png" />
					<img
						v-else-if="this.$session.get('rating') === ' 우수회원'"
						alt
						width="24"
						height="24"
						src="/css/silver.png"
					/>
					<img v-else alt width="24" height="24" src="/css/diamond.png" />
					<span class="rate" id="#home_rate">[{{ this.$session.get('rating') }}]</span>
					<br />
					<span class="welcome" id="home_welcome">{{ this.$session.get('name') }}님 환영합니다!</span>
					<br />
					<b-button variant="outline-info" id="home_Mybtn" v-on:click="Mypage">마이페이지</b-button>&nbsp;
					<b-button variant="outline-danger" id="home_Mybtn" v-on:click="logout">로그아웃</b-button>
				</div>

				<!-- TODO: 리스트 CSS 수정 -->
				<!-- 공지사항 박스 -->
				<div class="border" id="home_notice">
					<label>공지사항</label>
					<br />
					<div :key="item.post_id" v-for="item in notice">
						<b-link v-bind:href="'/article/' + item.post_id">{{ item.title }}</b-link>
						<br />
					</div>
				</div>
			</div>
		</div>

		<!-- 인기글 & 최신글 -->
		<div class="row">
			<div class="col-md-9">
				<div class="hottopic" id="home_hottopic">
					<div class="tabs" variant="secondary">
						<b-card no-body>
							<b-tabs pills card>
								<b-tab title="인기글" active>
									<b-card-text>
										<div :key="item.post_id" v-for="item in hot">
											<b-link v-bind:href="'/article/' + item.post_id">{{ item.title }}</b-link>
											<br />
										</div>
									</b-card-text>
								</b-tab>
								<b-tab title="최신글">
									<b-card-text>
										<div :key="item.post_id" v-for="item in recent">
											<b-link v-bind:href="'/article/' + item.post_id">{{ item.title }}</b-link>
											<br />
										</div>
									</b-card-text>
								</b-tab>
							</b-tabs>
						</b-card>
					</div>
				</div>
			</div>
			<!-- 광고 -->
			<div class="col-md-3">
				<div class="ad" id="home_ad">
					<b-img src="https://picsum.photos/300/400/?image=41" fluid alt="Fluid image"></b-img>
				</div>
			</div>
		</div>

		<!-- 이미지 -->
		<div class="row">
			<div class="col-md-12">
				<b-alert show variant="light" align="left">
					<a href="#" class="alert-link">이미지</a>
				</b-alert>
				<b-container class="bg-white" id="img_box">
					<b-row id="home_first_line">
						<b-col cols="2">
							<b-img thumbnail left src="https://picsum.photos/125/125/?image=54" alt="Image 1"></b-img>
						</b-col>
						<b-col cols="2">
							<b-img thumbnail src="https://picsum.photos/125/125/?image=58" alt="Image 2"></b-img>
						</b-col>
						<b-col cols="2">
							<b-img thumbnail src="https://picsum.photos/125/125/?image=59" alt="Image 3"></b-img>
						</b-col>
						<b-col cols="2">
							<b-img thumbnail src="https://picsum.photos/125/125/?image=57" alt="Image 4"></b-img>
						</b-col>
						<b-col cols="2">
							<b-img thumbnail src="https://picsum.photos/125/125/?image=52" alt="Image 5"></b-img>
						</b-col>
						<b-col cols="2">
							<b-img thumbnail src="https://picsum.photos/125/125/?image=51" alt="Image 6"></b-img>
						</b-col>
					</b-row>
					<b-row id="home_second_line">
						<b-col cols="2">
							<b-img thumbnail left src="https://picsum.photos/125/125/?image=54" alt="Image 1"></b-img>
						</b-col>
						<b-col cols="2">
							<b-img thumbnail src="https://picsum.photos/125/125/?image=58" alt="Image 2"></b-img>
						</b-col>
						<b-col cols="2">
							<b-img thumbnail src="https://picsum.photos/125/125/?image=59" alt="Image 3"></b-img>
						</b-col>
						<b-col cols="2">
							<b-img thumbnail src="https://picsum.photos/125/125/?image=57" alt="Image 4"></b-img>
						</b-col>
						<b-col cols="2">
							<b-img thumbnail src="https://picsum.photos/125/125/?image=52" alt="Image 5"></b-img>
						</b-col>
						<b-col cols="2">
							<b-img thumbnail src="https://picsum.photos/125/125/?image=51" alt="Image 6"></b-img>
						</b-col>
					</b-row>
				</b-container>
			</div>
		</div>

		<!-- Footer -->
		<footer class="footer" id="home_footer">
			<!-- Footer Links -->
			<div class="container text-center text-md-left">
				<!-- Grid row -->
				<div class="row">
					<!-- Grid column -->
					<div class="col-md-4 mx-auto text-info">
						<!-- Content -->
						<h5 class="font-weight-bold text-uppercase mt-3 mb-4">바로가기</h5>
						<p>
							Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur
							adipisicing elit.
						</p>
					</div>
					<!-- Grid column -->

					<hr class="clearfix w-100 d-md-none" />

					<!-- Grid column -->
					<div class="col-md-2 mx-auto text-dark">
						<!-- Links -->
						<h5 class="font-weight-bold text-uppercase mt-3 mb-4">Game</h5>
						<ul class="list-unstyled">
							<li>
								<a href="#!">League Of Legend</a>
							</li>
							<li>
								<a href="#!">Battle Ground</a>
							</li>
							<li>
								<a href="#!">Sudden Attack</a>
							</li>
							<li>
								<a href="#!">Maple Stroy</a>
							</li>
						</ul>
					</div>
					<!-- Grid column -->

					<hr class="clearfix w-100 d-md-none" />

					<!-- Grid column -->
					<div class="col-md-2 mx-auto text-dark">
						<!-- Links -->
						<h5 class="font-weight-bold text-uppercase mt-3 mb-4">Music</h5>
						<ul class="list-unstyled">
							<li>
								<a href="#!">Ballade</a>
							</li>
							<li>
								<a href="#!">Hip Hop</a>
							</li>
							<li>
								<a href="#!">Jazz</a>
							</li>
							<li>
								<a href="#!">PoP</a>
							</li>
						</ul>
					</div>
					<!-- Grid column -->

					<hr class="clearfix w-100 d-md-none" />

					<!-- Grid column -->
					<div class="col-md-2 mx-auto text-dark">
						<!-- Links -->
						<h5 class="font-weight-bold text-uppercase mt-3 mb-4">Food</h5>

						<ul class="list-unstyled">
							<li>
								<a href="#!">Korean</a>
							</li>
							<li>
								<a href="#!">Western food</a>
							</li>
							<li>
								<a href="#!">Instant</a>
							</li>
							<li>
								<a href="#!">Junk food</a>
							</li>
						</ul>
					</div>
					<!-- Grid column -->
				</div>
				<!-- Grid row -->
			</div>

			<!-- Social buttons -->
			<ul class="list-unstyled list-inline text-center" id="Socialbtn">
				<li class="list-inline-item">
					<i class="fab fa-facebook-f"></i>
				</li>
				<li class="list-inline-item">
					<i class="fab fa-twitter"></i>
				</li>
				<li class="list-inline-item">
					<i class="fab fa-google-plus-g"></i>
				</li>
				<li class="list-inline-item">
					<i class="fab fa-github"></i>
				</li>
			</ul>

			<!-- Copyright -->
			<div class="footer-copyright text-center py-3">
				© 2020 Copyright:
				<a href="http://plus-market.com">PLUS</a>
			</div>
		</footer>
		<!-- Footer -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			notice: Object,
			recent: Object,
			hot: Object,
		};
	},
	methods: {
		login: function () {
			this.$router.push({
				path: '/login',
				query: { redirect: this.$route.fullPath },
			});
		},
		// 로그아웃 시 세션 삭제 후 새로 고침
		logout: function () {
			this.$session.destroy();
			location.reload();
		},
		Mypage: function () {
			this.$router.push('/Mypage');
		},
	},
	mounted() {
		// Load notice / 공지사항 불러오기
		this.$http.get('/api/article/notice').then(res => {
			this.notice = res.data;
		});
		this.$http.get('/api/article/new').then(res => {
			this.recent = res.data;
		});
		this.$http.get('/api/article/hot').then(res => {
			this.hot = res.data;
		});
	},
};
</script>

<style lang="scss">
@import '../css/Home.css';
@import url('https://fonts.googleapis.com/css2?family=Jua&family=Poor+Story&family=Sunflower:wght@300&display=swap');
</style>
