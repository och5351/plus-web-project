<template>
	<!--  댓글 -->
	<div id="commentListItem" class="comment-list-item">
		<b-container class="comment-box">
			<div class="row align-items-start" style="margin-bottom: 0.25em;">
				<div class="col-2" style="background-color: #ccffcc;" title="작성자" v-if="commentObj.user_idx == authorIdx">
					{{ commentObj.name }}
				</div>
				<div class="col-2" v-else>{{ commentObj.name }}</div>
				<div class="col-5 text-left">{{ commentObj.contents }}</div>
				<div class="col-3">
					<small>{{ commentObj.write_date }}</small>
				</div>
				<div class="col-2">
					<b-button
						class="btn btn-sm btn-primary"
						title="대댓글 작성"
						v-on:click.passive="openForm(commentObj.cm_id)"
						v-if="this.$session.get('user_idx') != null"
					>
						<span class="far fa-hand-point-left"></span>
					</b-button>
					<b-button
						class="btn btn-sm btn-danger"
						title="댓글 삭제"
						v-on:click.passive="deleteComment(commentObj.cm_id, true)"
						v-if="this.$session.get('user_idx') == commentObj.user_idx"
					>
						<span class="far fa-trash-alt"></span>
					</b-button>
				</div>
			</div>
			<!--    대댓글 -->
			<div class="comment-list-item-subcomment-list" :key="subcomment.cm_id" v-for="subcomment in subCommentList">
				<b-container class="subcomment-box">
					<div class="row align-items-start">
						<div
							class="col-2"
							style="background-color: #ccffcc;"
							title="작성자"
							v-if="subcomment.user_idx == authorIdx"
						>
							<small class="far fa-hand-point-right" style="margin-right: 1em;"></small>{{ subcomment.name }}
						</div>
						<div class="col-2" v-else>
							<small class="far fa-hand-point-right" style="margin-right: 1em;"></small>{{ subcomment.name }}
						</div>
						<div class="col-5 text-left">{{ subcomment.contents }}</div>
						<div class="col-3">
							<small>{{ subcomment.write_date }}</small>
						</div>
						<div class="col-2 text-right">
							<b-button
								class="btn btn-sm btn-danger"
								title="대댓글 삭제"
								v-on:click.passive="deleteComment(subcomment.cm_id, false)"
								v-if="sessUserIdx == subcomment.user_idx"
							>
								<span class="far fa-trash-alt"></span>
							</b-button>
						</div>
					</div>
				</b-container>
			</div>
		</b-container>
		<div
			class="form-group sub-comment-form-group"
			:id="'subCommentForm' + commentObj.cm_id"
			v-if="this.$session.get('user_idx') != null"
		>
			<div class="row align-items-start">
				<div class="col-2"></div>
				<input
					type="text"
					class="form-control col-7"
					name="txtComment"
					:id="'commentArticle' + commentObj.cm_id"
					placeholder="대댓글 내용"
					v-on:keyup.enter.passive="addSubComment(commentObj.cm_id)"
				/>
				<div class="col-1"></div>
				<input
					type="submit"
					class="btn btn-sm btn-primary col-1"
					value="대댓글 작성"
					v-on:click.passive="addSubComment(commentObj.cm_id)"
				/>
				<div class="col-1"></div>
			</div>
		</div>
		<hr />
	</div>
</template>
<script>
import $ from 'jquery';

export default {
	name: 'CommentListItem',
	props: {
		commentObj: Object,
		authorIdx: Number,
	},
	components: {},
	data() {
		return {
			subCommentList: Object,
			sessUserIdx: Number,
		};
	},
	mounted() {
		this.$http.get(`/api/comments/sub/${this.commentObj.cm_id}`).then(res => {
			this.subCommentList = res.data;
		});
		$('.sub-comment-form-group').hide();

		this.sessUserIdx = this.$session.get('user_idx');
	},
	methods: {
		// Opening subcomment form / 대댓글 창 여닫기
		openForm: function (cm_id) {
			$('.sub-comment-form-group').slideUp();
			$('#subCommentForm' + cm_id).slideDown();
			$('#commentArticle' + cm_id).focus();
		},
		// Add subcomment / 대댓글 작성
		addSubComment: function (cm_id) {
			var contentId = this.$route.params.contentId;
			var comment = $('input#commentArticle' + cm_id)
				.val()
				.trim();

			// No empty comments! / 댓글 내용 입력확인
			if (comment == '') {
				alert('[오류]\n댓글에 입력할 내용을 작성해주시길 바랍니다!');
			}

			// Clear input text / 입력창 지우기
			$('input#commentArticle' + cm_id).val('');
			$('input#commentArticle' + cm_id).blur();

			if (this.$session.get('user_idx') == null || this.$session.get('userid') == null) {
				alert('로그인 후 이용 가능한 기능입니다!');
				return;
			}

			// // Before send post data, must to check sessions / POST 전달 이전에 반드시 세션체크 할 것
			this.$http.post('/api/comments/addSub', {
				data: {
					post_id: contentId,
					cm_id: cm_id,
					user_idx: this.$session.get('user_idx'), // Get attribute from session / 세션에서 받아오기
					contents: comment,
				},
			});

			// Reload subcomments / 대댓글 다시 불러오기
			this.$http.get(`/api/comments/sub/${this.commentObj.cm_id}`).then(res => {
				this.subCommentList = res.data;
			});
		},
		// Delete Comment / 댓글 삭제
		deleteComment: function (cm_id, reload) {
			this.$http
				.post('/api/comments/remove', {
					data: {
						cm_id: cm_id,
					},
				})
				.then(res => {
					if (res.data.success && reload) {
						alert(res.data.message);
						setTimeout(() => {
							location.reload();
						}, 10);
					} else if (res.data.success && !reload) {
						// Reload subcomments / 대댓글 다시 불러오기
						this.$http.get(`/api/comments/sub/${this.commentObj.cm_id}`).then(res => {
							this.subCommentList = res.data;
						});
					} else {
						alert(res.data.message);
					}
				});
		},
	},
};
</script>

<style scoped></style>
