<template>
	<div class="postbody_section">
		<div class="container tim-container">
			<div id="title" class="cd-section">
				<div class="tim-typo">
					<h1 class="postbody_">글쓰기</h1>
					<br />
					<div class="progress progress-line-primary">
						<div
							class="progress-bar progress-bar-striped bg-info"
							role="progressbar"
							aria-valuenow="60"
							aria-valuemin="0"
							aria-valuemax="100"
							style="width: 30%"
						>
							<span class="sr-only"></span>
						</div>
					</div>
					<div id="inputs">
						<div class="row">
							<div class="col-lg-12 col-sm-4">
								<div>
									<label class="col-form-label-lg">제목</label>
									<input type="text" class="form-control" v-model="titleText" id="titleText" />
								</div>
							</div>
						</div>
					</div>

					<div id="content">
						<div class="row">
							<div class="col-lg-12 col-sm-4">
								<div>
									<label class="col-form-label-lg">본문</label>
									<!-- Toast UI Editor -->
									<editor
										ref="toastuiEditor"
										v-if="contentArea != ''"
										:initialValue="contentArea"
										height="800px"
										:options="editorOptions"
										initialEditType="wysiwyg"
									/>
								</div>
							</div>
						</div>
					</div>
					<div id="checkFunction">
						<label class="col-form-label-lg">HashTag</label>
						<div class="row">
							<div class="col-xs-8 col-sm-6 col-md-3">
								<input class="form-check-input" type="checkbox" id="Food" v-model="checkedNames" value="음식" />
								음식
								<span class="form-check-sign">
									<span class="check"></span>
								</span>
							</div>
							<div class="col-xs-8 col-sm-6 col-md-3">
								<input class="form-check-input" type="checkbox" id="Game" v-model="checkedNames" value="게임" />게임
								<span class="form-check-sign">
									<span class="check"></span>
								</span>
							</div>
							<div class="col-xs-8 col-sm-6 col-md-3">
								<input class="form-check-input" type="checkbox" id="Web" v-model="checkedNames" value="모바일" />모바일
								<span class="form-check-sign">
									<span class="check"></span>
								</span>
							</div>
							<div class="col-xs-8 col-sm-6 col-md-3">
								<input
									class="form-check-input"
									type="checkbox"
									id="Application"
									v-model="checkedNames"
									value="음악"
								/>음악
								<span class="form-check-sign">
									<span class="check"></span>
								</span>
							</div>
							<div class="col-xs-8 col-sm-6 col-md-3">
								<input class="form-check-input" type="checkbox" id="AI" v-model="checkedNames" value="그림" />그림
								<span class="form-check-sign">
									<span class="check"></span>
								</span>
							</div>
							<div class="col-xs-8 col-sm-6 col-md-3">
								<input class="form-check-input" type="checkbox" id="Music" v-model="checkedNames" value="소설" />소설
								<span class="form-check-sign">
									<span class="check"></span>
								</span>
							</div>
							<div class="col-xs-8 col-sm-6 col-md-3">
								<input
									class="form-check-input"
									type="checkbox"
									id="Paint"
									v-model="checkedNames"
									value="여행/사진"
								/>여행/사진
								<span class="form-check-sign">
									<span class="check"></span>
								</span>
							</div>
						</div>
					</div>
					<input type="text" class="form-control" id="showCategory" :value="checkedNames" readonly />
					<br />
					<br />
				</div>
			</div>

			<div style="margin-bottom: 30px" class="file_upload">
				<input type="file" id="file" ref="file" name="file" v-on:change="handleFileUpload()" />
				<button
					class="btn btn-success btn-round"
					id="postbody_btnFile"
					v-on:click="submitFile()"
					style="margin: 10px"
					disabled="true"
				>
					파일 업로드
				</button>
				<button
					class="btn btn-warning btn-round"
					id="postbody_btnRevokeFile"
					v-on:click="revokeFile()"
					style="margin: 10px"
					disabled="true"
				>
					해제
				</button>
			</div>

			<div id="buttonFunction">
				<div v-if="this.att === 'post'">
					<button
						id="postbody_btn"
						class="btn btn-outline-info btn-round"
						style="margin-right: 20px"
						@click.prevent="submitButton"
					>
						작성
					</button>
					<button
						id="postbody_btn"
						class="btn btn-outline-danger btn-round"
						style="margin-left: 20px"
						@click.prevent="cancelButton"
					>
						취소
					</button>
				</div>
				<div v-else>
					<button
						id="postbody_btn"
						class="btn btn-success btn-round"
						style="margin-right: 20px"
						@click.prevent="updateButton"
					>
						수정
					</button>
					<button
						id="postbody_btn"
						class="btn btn-danger btn-round"
						style="margin-left: 20px; margin-right: 20px"
						@click.prevent="cancelButton"
					>
						취소
					</button>
					<button
						id="postbody_btn"
						class="btn btn-warning btn-round"
						style="margin-left: 20px"
						@click.prevent="removeButton"
					>
						삭제
					</button>
				</div>
			</div>
		</div>
		<br />
		<br />
	</div>
</template>

<script>
window.onbeforeunload = function () {
	return '';
};
// 프로토타입 형태로 바꿔야 하는 것들
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import { Editor } from '@toast-ui/vue-editor';
export default {
	name: 'postBody',
	components: {
		// 프로토타입 형태로 바꿔야 하는 것들
		editor: Editor,
	},
	data() {
		const contentId = this.$route.params.contentId;
		const att = this.$route.params.att;
		const board_id = this.$route.params.board_id;
		const categoryId = this.$route.params.categoryId;
		const categoryName = this.$route.params.categoryName;
		return {
			contentId: contentId,
			att: att,
			board_id: board_id || null,
			categoryId: categoryId || null,
			categoryName: categoryName || null,
			checkedNames: [],
			titleText: '',
			contentArea: '',
			sessionIdx: this.$session.get('user_idx'),
			sessionId: this.$session.get('userid'),
			sessionName: this.$session.get('name'),
			filename: '',
			originalname: '',
			editorOptions: {
				language: 'ko-KR',
				hideModeSwitch: true,
			},
		};
	},
	mounted() {
		if (this.categoryId === null) this.$router.go(-1);
		if (this.categoryName === null) {
			this.$http.get(`/api/post/categoryName/${this.categoryId}`).then(res => {
				this.categoryName = res.data[0].ca_name;
			});
		}
		let att = this.att;
		this.getPosts(att);
	},
	methods: {
		getPosts(att) {
			if (att === 'edit') {
				this.$http
					.get(`/api/post/sessCheckEdit/${this.sessionIdx}/${this.contentId}`)
					.then(res => {
						if (res.data[0]['count(*)'] !== '0') {
							// session OK!
							const dic = res.data[0];
							this.titleText = dic['title'];
							this.contentArea = dic['contents'];
							// document.querySelector('#file').value('파일을 수정하려면 해제버튼을 누르세요');
							document.querySelector('#file').disabled = true;
							document.querySelector('#postbody_btnFile').disabled = true;
							document.querySelector('#postbody_btnRevokeFile').disabled = false;
						} else {
							alert('세션 에러!! \n다시 로그인 해주세요.');
							this.$router.replace('/login');
						}
					})
					.catch(() => {
						alert('알 수 없는 오류가 발생했습니다');
					});
			} else {
				this.$http
					.get(`/api/post/sessCheck/${this.sessionId}`)
					.then(res => {
						if (res.data[0]['count(*)'] === '0') {
							// session OK!
							alert('세션 에러!! \n다시 로그인 해주세요.');
							this.$router.replace('/login');
						} else {
							this.contentArea = '게시글';
						}
					})
					.catch(() => {
						alert('알 수 없는 오류가 발생했습니다');
					});
			}
		},
		setPoint(type) {
			if (type === 'update') this.$http.get(`/api/post/pointUpdate/${this.$session.get('userid')}`).then();
			else this.$http.get(`/api/post/pointDelete/${this.$session.get('userid')}`).then();
		},
		submitButton() {
			//작성 버튼
			const submitdate = this.$moment(new Date()).format('YYYYMMDDHHmmss');
			//유효성 검사 후 전송
			if (this.titleText === '') {
				alert('제목을 입력하세요.');
			} else if (this.$refs.toastuiEditor.invoke('getMarkdown') === '') {
				alert('본문을 입력하세요.');
			} else if (this.checkedNames === '') {
				alert('카테고리를 선택하세요.');
			} else {
				if (confirm('작성하시겠습니까?')) {
					this.$http
						.post('/api/post/insertPost', {
							posting: {
								board_id: this.board_id,
								ca_id: this.categoryId,
								user_idx: this.sessionIdx,
								contents: this.$refs.toastuiEditor.invoke('getMarkdown'),
								title: this.titleText,
								write_date: submitdate,
								update_date: submitdate,
								hashTag: this.hashTagDistributor(this.checkedNames),
								filename: this.filename,
								originalname: this.originalname,
							},
						})
						.then(() => {
							this.setPoint('update');
						})
						.catch(() => {
							alert('알 수 없는 오류가 발생했습니다');
						});
					this.$router.go(-1).reload();
				}
			}
		},
		updateButton() {
			//수정 버튼
			const submitdate = this.$moment(new Date()).format('YYYYMMDDHHmmss');
			//유효성 검사 후 전송
			if (this.titleText === '') {
				alert('제목을 입력하세요.');
			} else if (this.$refs.toastuiEditor.invoke('getMarkdown') === '') {
				alert('본문을 입력하세요.');
			} else if (this.checkedNames === '') {
				alert('카테고리를 선택하세요.');
			} else {
				if (confirm('수정하시겠습니까?')) {
					this.$http
						.post('/api/post/updatePost', {
							posting: {
								post_seq: this.contentId,
								board_id: 1,
								ca_id: this.categoryId,
								user_idx: this.sessionIdx,
								contents: this.$refs.toastuiEditor.invoke('getMarkdown'),
								title: this.titleText,
								update_date: submitdate,
								filename: this.filename,
								originalname: this.originalname,
							},
						})
						.then(() => {
							this.$router.push(`/board/${this.categoryName}`);
						})
						.catch(() => {
							alert('알 수 없는 오류가 발생했습니다');
						});
				}
			}
		},
		cancelButton() {
			//취소 버튼
			if (this.att === 'post') {
				if (confirm('작성을 취소하시겠습니까?\n작업하시던 내용은 사라집니다.')) {
					this.$router.push(`/board/${this.categoryName}`);
				}
			} else {
				if (confirm('작성을 취소하시겠습니까?\n작업하시던 내용은 사라집니다.')) {
					this.$router.push(`/article/${this.contentId}`);
				}
			}
		},
		removeButton() {
			if (confirm('정말로 삭제하시겠습니까?')) {
				this.$http
					.post(`/api/post/deletePost/${this.contentId}`)
					.then(() => {
						this.setPoint('delete');
						this.$router.go(-2);
					})
					.catch(() => {
						alert('알 수 없는 오류가 발생했습니다');
					});
			}
		},
		hashTagDistributor(val) {
			// checkNames to index
			switch (val) {
				case '음식':
					return 1;
				case '게임':
					return 2;
				case '모바일':
					return 3;
				case '음악':
					return 4;
				case '그림':
					return 5;
				case '소설':
					return 6;
				default:
					return 7;
			}
		},
		hashTagAdder(checkArr) {
			//hash 태그 index 배열로 변환
			let hashTag = [];
			if (checkArr != null) {
				for (let i = 0; i < checkArr.length; i++) {
					if (i === 0) {
						hashTag.push(this.hashTagDistributor(checkArr[i]));
					} else {
						hashTag.push(this.hashTagDistributor(checkArr[i]));
					}
				}
			}
			hashTag.sort();
			hashTag = hashTag.map(String);
			return hashTag;
		},
		submitFile() {
			let formData = new FormData();
			formData.append('file', this.file);
			this.$http
				.post('/api/postFile/upload', formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				})
				.then(res => {
					document.querySelector('#file').disabled = true;
					document.querySelector('#postbody_btnFile').disabled = true;
					document.querySelector('#postbody_btnRevokeFile').disabled = true;
					this.filename = res.data.filename;
					this.originalname = res.data.originalname;
					alert('파일 업로드 성공');
				});
		},
		handleFileUpload() {
			if (this.$refs.file.files == null) {
				document.querySelector('#file').disabled = false;
				document.querySelector('#postbody_btnFile').disabled = true;
				document.querySelector('#postbody_btnRevokeFile').disabled = true;
			} else {
				document.querySelector('#file').disabled = true;
				document.querySelector('#postbody_btnFile').disabled = false;
				document.querySelector('#postbody_btnRevokeFile').disabled = false;
				this.file = this.$refs.file.files[0];
			}
		},
		revokeFile() {
			if (this.$refs.file.file != null) {
				document.querySelector('#file').disabled = true;
				document.querySelector('#postbody_btnFile').disabled = false;
				document.querySelector('#postbody_btnRevokeFile').disabled = false;
			} else {
				document.querySelector('#file').value = '';
				document.querySelector('#file').disabled = false;
				document.querySelector('#postbody_btnFile').disabled = true;
				document.querySelector('#postbody_btnRevokeFile').disabled = true;
			}
		},
	},
};
</script>

<style>
@import '../../css/PostBody.css';
@import url('https://fonts.googleapis.com/css2?family=Jua&family=Nanum+Myeongjo:wght@400;700;800&family=Poor+Story&family=Single+Day&family=Sunflower:wght@300&display=swap');
</style>
