<template>
	<div id="app" class="container">
		<div class="logo" id="app_logo">
			<img @click="main" style="width: 200px; height: 200px;" alt="Vue logo" src="./assets/plusLogo.png" />
			<div v-if="this.$session.get('rating') === '관리자'" style="margin-top: 10%; float: right;">
				<b-button v-b-toggle.sidebar-no-header>Admin Console</b-button>
				<b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" backdrop shadow>
					<template>
						<div class="p-3">
							<h4 id="sidebar-no-header-title">Plus Market Admin Console</h4>
							<nav class="mb-3">
								<b-nav vertical>
									<b-nav-item active @click="AdminMenu('user')">사용자 관리</b-nav-item>
									<b-nav-item @click="AdminMenu('board')">게시판 관리</b-nav-item>
									<b-nav-item @click="AdminMenu('post')">게시글 관리</b-nav-item>
									<b-nav-item @click="AdminMenu('category')">카테고리 관리</b-nav-item>
								</b-nav>
							</nav>
						</div>
					</template>
				</b-sidebar>
			</div>
		</div>

		<div>
			<b-navbar toggleable="lg" type="dark" variant="secondary">
				<b-navbar-brand class="link" id="app_link" @click="main">Plus</b-navbar-brand>
				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav>
						<b-nav-item @click="main">Home</b-nav-item>
						<b-nav-item @click="board('notice')">공지사항</b-nav-item>
						<b-nav-item @click="board('free')">자유게시판</b-nav-item>
					</b-navbar-nav>
					<b-dropdown size="sm" text="커뮤니티">
						<b-dropdown-item @click="board('tour')">여행</b-dropdown-item>
						<b-dropdown-item @click="board('food')">음식</b-dropdown-item>
						<b-dropdown-item @click="board('cartoon')">만화</b-dropdown-item>
						<b-dropdown-item @click="board('music')">음악</b-dropdown-item>
					</b-dropdown>
				</b-collapse>
			</b-navbar>
		</div>
		<router-view :key="$route.fullPath"></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
	methods: {
		main: function () {
			this.$router.push('/');
		},
		board(category) {
			this.$router.push(`/board/${category}`);
		},
		AdminMenu(menu) {
			this.$router.push(`/admin/${menu}`);
		},
	},
};
</script>

<style lang="scss">
@import './css/App.css';
</style>
