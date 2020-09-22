<template>
	<div class="comment-list">
		<b-container
			><hr />
			<h5>
				댓글
				<b-button
          id="btnOpenComments"
          variant="outline-info"
          v-on:click="toggleComments()"
          class="btn btn-sm btn-primary"
          title="댓글 닫기"
        >
					<span id="span-btnOpenComments" class="fas fa-caret-up commentlist_"></span>
				</b-button>
				&nbsp;
			</h5></b-container
		>
		<div id="commentSection" :key="comment.cm_id" v-for="comment in commentList">
			<CommentListItem :commentObj="comment" :authorIdx="Number(authorIdx)"></CommentListItem>
		</div>
		<div class="form-group">
			<br />
			<div class="row" v-if="this.$session.get('user_idx') != null">
				<input
					type="text"
					class="form-control col-9"
					name="txtComment"
					id="commentArticle"
					placeholder="댓글 내용"
					v-on:keyup.enter.passive="addComment()"
				/>
				<!-- Spacer...! -->
				<div class="col-1"></div>
				<input
          type="submit"
          class="btn btn-primary col-2"
          id="Commentbtn"
          value="댓글 작성"
          v-on:click.passive="addComment()"
        />
			</div>
			<div class="row" v-else>
				<div class="col" id="loginplease"><small>댓글 기능은 로그인 후 사용가능합니다</small></div>
			</div>
		</div>
	</div>
</template>

<script>
import CommentListItem from './CommentListItem';

export default {
	name: 'CommentList',
	props: {
		contentId: Number,
		authorIdx: Number,
	},
	methods: {
		toggleComments: function () {
			// Toggle Comments/ 댓글 토글
			this._$("[id='commentSection']").slideToggle();
			this.showComment = !this.showComment;

			// Changes btn's arrow direction/ 화살표 방향 변경
			if (this.showComment) {
				this._$('#span-btnOpenComments').attr('class', 'fa fa-caret-down commentlist_');
				this._$('#btnOpenComments').attr('title', '댓글 열기');
			} else {
				this._$('#span-btnOpenComments').attr('class', 'fa fa-caret-up commentlist_');
				this._$('#btnOpenComments').attr('title', '댓글 닫기');
			}
		},
		addComment: function () {
			var contentId = this.$route.params.contentId;
			var comment = this._$('input#commentArticle').val().trim();

			// No empty comments! / 댓글 내용 입력확인
			if (comment == '') {
				alert('[오류]\n댓글에 입력할 내용을 작성해주시길 바랍니다!');
				return;
			}

			// Clear input text / 입력창 지우기
			this._$('input#commentArticle').val('');
			this._$('input#commentArticle').blur();

			if (this.$session.get('user_idx') == null || this.$session.get('userid') == null) {
				alert('로그인 후 이용 가능한 기능입니다!');
				return;
			}

			this.$http.post('/api/comments/add', {
				data: {
					post_id: contentId,
					user_idx: this.$session.get('user_idx'), // Get attribute from session / 세션에서 받아오기
					contents: comment,
				},
			});

			// Reload comments / 댓글 다시 불러오기
			this.$http.get(`/api/comments/get/${this.contentId}`).then(res => {
				this.commentList = res.data;
			});
		},
	},
	data() {
		return {
			commentList: Object,
			showComment: false,
			resetKey: 0,
		};
	},
	components: {
		CommentListItem,
	},
	mounted() {
		this.$http.get(`/api/comments/get/${this.contentId}`).then(res => {
			this.commentList = res.data;
		});
	},
};
</script>

<style lang="scss">
span.commentlist_ {
	-webkit-text-fill-color: white;
}
</style>
