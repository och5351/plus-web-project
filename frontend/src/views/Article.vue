<template>
	<div class="article">
		<progress value="0"></progress>
		<!-- Header Parts 게시글의 헤더 부분 -->
		<b-container>
			<div class="row">
				<div class="article-id justify-content-center col-2">{{ contentId }}</div>
				<div class="article-title justify-content-center col-7">
					<h5>{{ title }}</h5>
				</div>
				<div class="article-author justify-content-end col-3">작성자 {{ user }}</div>
			</div>
			<!-- 세션값을 이용해 수정버튼을 나타내자 -->
			<div class="row">
				<div class="col-2" v-if="this.$session.get('user_idx') == this.author_idx">
					<b-button class="btn-sm btn-primary" v-on:click="editPost()">
						<span class="fas fa-edit"> 수정</span>
					</b-button>
				</div>
				<div class="col-2" v-else></div>
				<div class="col-7"></div>
				<div class="article-created justify-content-end col-3">
					작성일 <small>{{ created }}</small>
				</div>
			</div>
		</b-container>
		<!-- Body Parts 게시글의 내용 부분 -->
		<div>
			<hr />
		</div>
		<b-container>
			<div class="row">
				<div class="article-contents justify-content-center text-left col" style="white-space: pre-line">
					{{ contents }}
				</div>
			</div>
			<div class="row text-center justify-content-center col">
				<p>
					<b-button v-on:click.passive="hitPost()"
						><span class="fas fa-thumbs-up">&nbsp;{{ hit }}</span></b-button
					>
				</p>
			</div>
		</b-container>
		<!-- Comments Parts 게시글의 댓글 부분 -->
		<CommentList :contentId="contentId" :authorIdx="Number(this.author_idx)"></CommentList>
	</div>
</template>

<script>
// @ is an alias to /src
import CommentList from '../components/Article/CommentList';

export default {
	name: 'Article',
	components: { CommentList: CommentList },
	data() {
		const contentId = Number(this.$route.params.contentId);
		return {
			categoryId: this.$route.params.categoryId,
			contentId: contentId,
			boardId: '',
			title: '',
			contents: '',
			user: '',
			created: '',
			author_idx: '',
			hit: '',
		};
	},
	methods: {
		editPost: function () {
			if (this.$session.get('user_idx') != this.author_idx) {
				alert('해당 게시글에 대한 권한이 없습니다.');
			} else {
				this.$router.push({
					name: 'Posting',
					params: { contentId: this.contentId, att: 'edit', board_id: this.board_id, categoryId: this.categoryId },
				});
			}
		},
		hitPost: function () {
			if (this.$session.get('user_idx') == null) {
				alert('로그인 후 추천가능합니다.');
			} else {
				this.$http.post(`/api/article/hit/${this.contentId}`).then(res => {
					this.$http.get(`/api/article/get/${this.contentId}`).then(res => {
						this.hit = res.data[0].hit;
					});
					alert(res.data);
				});
			}
		},
	},
	mounted() {
		this.$http.get(`/api/article/get/${this.contentId}`).then(res => {
			if (res.data.length !== 0) {
				this.boardId = res.data[0].board_id;
				this.categoryId = res.data[0].ca_id;
				this.title = res.data[0].title;
				this.contents = res.data[0].contents;
				this.user = res.data[0].name;
				this.created = res.data[0].write_date;
				this.author_idx = res.data[0].user_idx;
				this.hit = res.data[0].hit;
			} else {
				this.$router.push('/board');
			}
		});
	},
};
</script>

<style lang="scss">
/* 프로그레스 바 */
progress {
	position: fixed;
	left: 0;
	top: 0;

	width: 100%;
	height: 5px;

	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

	border: none;

	background-color: transparent;

	color: red;
}
progress::-webkit-progress-bar {
	background-color: transparent;
}

progress::-webkit-progress-value {
	background-color: orange;
}

progress::-moz-progress-bar {
	background-color: orange;
}
</style>
