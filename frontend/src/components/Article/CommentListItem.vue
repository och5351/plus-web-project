<template>
	<!--	댓글 -->
	<div id="commentListItem" class="comment-list-item">
		<b-container class="comment-box">
			<div class="row align-items-start" style="margin-bottom: 0.25em;">
				<div
					class="col-2"
					id="commentlistitem_author"
					style="background-color: rgb(253, 245, 230);"
					title="작성자"
					v-if="commentObj.user_idx == authorIdx"
				>
					<span id="commentlistitem_hit" title="추천" v-on:click="likeComment(commentObj.cm_id, true)">
						<span
							class="far fa-smile commentlistitem_smile"
							v-bind:style="'color: green; font-size: ' + this.commentLike"
						></span>
					</span>
					<span id="commentlistitem_hit" title="비추천" v-on:click="likeComment(commentObj.cm_id, false)">
						<span
							class="far fa-angry commentlistitem_angry"
							v-bind:style="'color: red; font-size: ' + this.commentDislike"
						></span>
						&nbsp;
					</span>
					<img
						class="commentlistitem_rating"
						v-if="commentObj.rating === '일반회원'"
						alt=""
						width="24"
						height="24"
						src="/css/beginer.png"
					/>
					<img
						class="commentlistitem_rating"
						v-else-if="commentObj.rating === '우수회원'"
						alt=""
						width="24"
						height="24"
						src="/css/silver.png"
					/>
					<img class="commentlistitem_rating" v-else alt="" width="24" height="24" src="/css/diamond.png" />
					{{ commentObj.name }}
				</div>
				<div class="col-2" id="commentlistitem_author" v-else>
					<span id="commentlistitem_hit" title="추천" v-on:click="likeComment(commentObj.cm_id, true)">
						<span
							class="far fa-smile commentlistitem_smile"
							v-bind:style="'color: green; font-size: ' + this.commentLike"
						></span>
					</span>
					<span id="commentlistitem_hit" title="비추천" v-on:click="likeComment(commentObj.cm_id, false)">
						<span
							class="far fa-angry commentlistitem_angry"
							v-bind:style="'color: red; font-size: ' + this.commentDislike"
						></span>
						&nbsp;
					</span>
					<img
						class="commentlistitem_rating"
						v-if="commentObj.rating === '일반회원'"
						alt=""
						width="24"
						height="24"
						src="/css/beginer.png"
					/>
					<img
						class="commentlistitem_rating"
						v-else-if="commentObj.rating === '우수회원'"
						alt=""
						width="24"
						height="24"
						src="/css/silver.png"
					/>
					<img class="commentlistitem_rating" v-else alt="" width="24" height="24" src="/css/diamond.png" />
					{{ commentObj.name }}
				</div>
				<div class="col-5 text-left">{{ commentObj.contents }}</div>
				<div class="col-3">
					<small>{{ commentObj.write_date }}</small>
				</div>
				<div class="col-2 text-right">
					<b-button
						class="btn btn-sm btn-info"
						id="commentlistitem_btncreate"
						title="답글 작성"
						v-on:click.passive="openForm(commentObj.cm_id)"
						v-if="this.$session.get('user_idx') != null"
					>
						<span class="far fa-hand-point-left commentlistitem_"></span>
					</b-button>
					<b-button
						class="btn btn-sm btn-danger"
						id="commentlistitem_btndel"
						title="댓글 삭제"
						v-on:click.passive="deleteComment(commentObj.cm_id, true)"
						v-if="this.$session.get('user_idx') == commentObj.user_idx"
					>
						<span class="far fa-trash-alt commentlistitem_"></span>
					</b-button>
					<span v-else id="commentlistitem_btnhidden"></span>
				</div>
			</div>
			<!--		답글 -->
			<div class="comment-list-item-subcomment-list" :key="subcomment.cm_id" v-for="subcomment in subCommentList">
				<b-container class="subcomment-box">
					<div class="row align-items-start">
						<div
							class="col-2"
							id="commentlistitem_author"
							style="background-color: rgb(253, 245, 230);"
							title="작성자"
							v-if="subcomment.user_idx == authorIdx"
						>
							<small class="far fa-hand-point-right commentlistitem_" style="margin-right: 1em;"></small>
							<img
								class="commentlistitem_rating"
								v-if="subcomment.rating === '일반회원'"
								alt=""
								width="24"
								height="24"
								src="/css/beginer.png"
							/>
							<img
								class="commentlistitem_rating"
								v-else-if="subcomment.rating === '우수회원'"
								alt=""
								width="24"
								height="24"
								src="/css/silver.png"
							/>
							<img class="commentlistitem_rating" v-else alt="" width="24" height="24" src="/css/diamond.png" />
							{{ subcomment.name }}
						</div>
						<div class="col-2" id="commentlistitem_author" v-else>
							<small class="far fa-hand-point-right commentlistitem_" style="margin-right: 1em;"></small>
							<img
								class="commentlistitem_rating"
								v-if="subcomment.rating === '일반회원'"
								alt=""
								width="24"
								height="24"
								src="/css/beginer.png"
							/>
							<img
								class="commentlistitem_rating"
								v-else-if="subcomment.rating === '우수회원'"
								alt=""
								width="24"
								height="24"
								src="/css/silver.png"
							/>
							<img class="commentlistitem_rating" v-else alt="" width="24" height="24" src="/css/diamond.png" />
							{{ subcomment.name }}
						</div>
						<div class="col-5 text-left">{{ subcomment.contents }}</div>
						<div class="col-3">
							<small>{{ subcomment.write_date }}</small>
						</div>
						<div class="col-2 text-right">
							<b-button
								class="btn btn-sm btn-danger"
								id="commentlistitem_btndel"
								title="답글 삭제"
								v-on:click.passive="deleteComment(subcomment.cm_id, false)"
								v-if="sessUserIdx == subcomment.user_idx"
							>
								<span class="far fa-trash-alt commentlistitem_"></span>
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
					placeholder="답글 내용"
					v-on:keyup.enter.passive="addSubComment(commentObj.cm_id)"
				/>
				<div class="col-1"></div>
				<input
					type="submit"
					class="btn btn-sm btn-info col-1"
					value="답글 작성"
					v-on:click.passive="addSubComment(commentObj.cm_id)"
				/>
				<div class="col-1"></div>
			</div>
		</div>
		<hr />
	</div>
</template>
<script>
export default {
	name: 'CommentListItem',
	props: {
		commentObj: Object,
		authorIdx: Number,
	},
	components: {},
	data() {
		return {
			commentLike: String,
			commentDislike: String,
			subCommentList: Object,
			sessUserIdx: Number,
		};
	},
	mounted() {
		// 답글 불러오기
		this.$http.get(`/api/comments/sub/${this.commentObj.cm_id}`).then(res => {
			this.subCommentList = res.data;
		});
		this._$('.sub-comment-form-group').hide();

		this.sessUserIdx = this.$session.get('user_idx');

		// 댓글 좋아요 갯수 읽어온 뒤, 픽셀 조정
		this.$http.get(`/api/comments/getlike/${this.commentObj.cm_id}`).then(res => {
			if (res.data[0].total === 0) {
				this.commentLike = '18px';
				this.commentDislike = '18px';
				return;
			}

			var like = (res.data[0].dolike / res.data[0].total) * 50;
			var dislike = 50 - like;

			// 최소 5픽셀
			like = like <= 5 ? 5 : like;
			dislike = dislike <= 5 ? 5 : dislike;

			this.commentLike = like + 'px';
			this.commentDislike = dislike + 'px';
		});
	},
	methods: {
		// Opening subcomment form / 답글 창 여닫기
		openForm: function (cm_id) {
			this._$('.sub-comment-form-group').slideUp();
			this._$('#subCommentForm' + cm_id).slideDown();
			this._$('#commentArticle' + cm_id).focus();
		},
		// Add subcomment / 답글 작성
		addSubComment: function (cm_id) {
			var contentId = this.$route.params.contentId;
			var comment = this._$('input#commentArticle' + cm_id)
				.val()
				.trim();

			// No empty comments! / 댓글 내용 입력확인
			if (comment === '') {
				alert('[오류]\n댓글에 입력할 내용을 작성해주시길 바랍니다!');
				return;
			}

			// Clear input text / 입력창 지우기
			this._$('input#commentArticle' + cm_id).val('');
			this._$('input#commentArticle' + cm_id).blur();

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

			// Reload subcomments / 답글 다시 불러오기
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
						// Reload subcomments / 답글 다시 불러오기
						this.$http.get(`/api/comments/sub/${this.commentObj.cm_id}`).then(res => {
							this.subCommentList = res.data;
						});
					} else {
						alert(res.data.message);
					}
				});
		},
		// Like comment / 댓글 추천
		likeComment: function (cm_id, type) {
			this.$http
				.post('/api/comments/like/', {
					data: {
						cm_id: cm_id,
						type: type,
						user_idx: this.$session.get('user_idx'),
					},
				})
				.then(res => {
					if (res.data != null) alert(res.data);

					// 댓글 좋아요 갯수 읽어온 뒤, 픽셀 조정
					this.$http.get(`/api/comments/getlike/${this.commentObj.cm_id}`).then(res => {
						if (res.data[0].total === 0) {
							this.commentLike = '18px';
							this.commentDislike = '18px';
							return;
						}

						var like = (res.data[0].dolike / res.data[0].total) * 50;
						var dislike = 50 - like;

						// 최소 5픽셀
						like = like <= 5 ? 5 : like;
						dislike = dislike <= 5 ? 5 : dislike;

						this.commentLike = like + 'px';
						this.commentDislike = dislike + 'px';
					});
				});
		},
	},
};
</script>

<style lang="scss">
@import '../../css/CommentListItem.css';
</style>
