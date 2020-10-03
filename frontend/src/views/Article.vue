<template>
	<div class="article">
		<progress value="0"></progress>
		<!-- Header Parts 게시글의 헤더 부분 -->
		<b-container>
			<div class="row">
				<div class="article-id justify-content-center col-2" id="article_count">{{ contentId }}</div>
				<div class="article-title justify-content-center col-7">
					<h5 class="article_">{{ title }}</h5>
				</div>
				<div class="article-author justify-content-end col-3" id="article_name">
					작성자
					<img v-if="this.rating === '일반회원'" alt="" width="24" height="24" src="/css/beginer.png" />
					<img v-else-if="this.rating === '우수회원'" alt="" width="24" height="24" src="/css/silver.png" />
					<img v-else alt="" width="24" height="24" src="/css/diamond.png" />
					{{ user }}
				</div>
			</div>
			<!-- 세션값을 이용해 수정버튼을 나타내자 -->
			<div class="row">
				<div class="col-2" v-if="this.$session.get('user_idx') == this.author_idx">
					<b-button id="article_modifybtn" class="btn-sm btn-warning" v-on:click="editPost()">
						<span class="fas fa-edit article_">수정</span>
					</b-button>
				</div>
				<div class="col-2" v-else></div>
				<div class="col-7"></div>
				<div class="article-created justify-content-end col-3" id="article_time">
					작성일
					<small>{{ created }}</small>
				</div>
			</div>
		</b-container>
		<!-- Body Parts 게시글의 내용 부분 -->
		<div>
			<hr />
		</div>
		<b-container>
			<div class="row">
				<div class="col" v-if="filename != '' && filename != undefined">
					<a v-if="filename != '' && filename != undefined" :href="'/uploads/' + filename" :download="originalname">{{
						originalname
					}}</a>
				</div>
			</div>
			<div class="row">
				<!-- <div class="article-contents justify-content-center text-left col" style="white-space: pre-line">
					{{ contents }}
				</div>-->
				<viewer class="col" v-if="contents != ''" :initialValue="contents" height="800px" />
			</div>
			<div class="row text-center justify-content-center col">
				<p>
					<b-button variant="danger" v-on:click.passive="hitPost()">
						<span class="fas fa-thumbs-up article_">&nbsp;{{ hit }}</span>
					</b-button>
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

// 프로토타입 형태로 바꿔야 하는 것들
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/vue-editor';

export default {
	name: 'Article',
	components: {
		CommentList: CommentList,
		viewer: Viewer,
	},
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
			filename: '',
			originalname: '',
			rating: '',
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
				this.filename = res.data[0].filename;
				this.originalname = res.data[0].originalname;
				this.rating = res.data[0].rating;
			} else {
				this.$router.push('/board');
			}
		});
	},
};
</script>

<style lang="scss">
@import '../css/Article.css';
</style>
