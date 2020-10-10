<template>
	<div id="app" class="container">
		<!-- 배너 부분 링크 문제 해결해야함 -->
		<div class="row">
			<div class="col-md-9" id="home_banner">
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
					<label id="home_notice_title">&lt; 공지사항 &gt;</label>
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
							<b-tabs active-nav-item-class="font-weight-bold text-danger bg-light" pills card>
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
		<categoryFooter />
		<!-- Footer -->
	</div>
</template>

<script>
import categoryFooter from '../components/Board/CategoryFooter';

export default {
	data() {
		return {
			notice: Object,
			recent: Object,
			hot: Object,
		};
	},
	components: {
		categoryFooter,
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
