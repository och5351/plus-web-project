<template>
	<div class="section">
		<div class="container tim-container">
			<div id="title" class="cd-section">
				<div class="tim-typo">
					<h1>글쓰기</h1>
					<br />
					<div class="progress progress-line-primary">
						<div
							class="progress-bar progress-bar-primary"
							role="progressbar"
							aria-valuenow="60"
							aria-valuemin="0"
							aria-valuemax="100"
							style="width: 30%;"
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
									<textarea
										type="text"
										class="form-control"
										cols="500"
										rows="20"
										v-model="contentArea"
										id="contentArea"
									></textarea
									><br />
								</div>
							</div>
						</div>
					</div>
					<div id="checkFunction">
						<label class="col-form-label-lg">HashTag</label>
						<div class="row">
							<div class="col-xs-8 col-sm-6 col-md-3">
								<input class="form-check-input" type="checkbox" id="Food" v-model="checkedNames" value="음식" />음식
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
					<input type="text" class="form-control" id="showCategory" :value="checkedNames" readonly /><br /><br />
				</div>
			</div>

			<div style="margin-bottom: 30px;" class="file_upload">
				<input type="file" id="file" ref="file" name="file" v-on:change="handleFileUpload()" />
				<!-- <button v-on:click="submitFile()">확인</button> -->
			</div>

			<div id="buttonFunction">
				<div v-if="this.att === 'post'">
					<button class="btn btn-success btn-round" style="margin-right: 20px;" @click.prevent="submitButton">
						작성
					</button>
					<button class="btn btn-danger btn-round" style="margin-left: 20px;" @click.prevent="cancelButton">
						취소
					</button>
				</div>
				<div v-else>
					<button class="btn btn-success btn-round" style="margin-right: 20px;" @click.prevent="updateButton">
						수정
					</button>
					<button
						class="btn btn-danger btn-round"
						style="margin-left: 20px; margin-right: 20px;"
						@click.prevent="cancelButton"
					>
						취소
					</button>
					<button class="btn btn-warning btn-round" style="margin-left: 20px;" @click.prevent="removeButton">
						삭제
					</button>
				</div>
			</div>
		</div>
		<br /><br />
	</div>
</template>

<script>
window.onbeforeunload = function () {
	return '';
};
export default {
	name: 'postBody',
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
						} else {
							alert('세션 에러!! \n다시 로그인 해주세요.');
							this.$router.replace('/login');
						}
					})
					.catch(error => {
						console.log(`Error : ${error}`);
					});
			} else {
				this.$http
					.get(`/api/post/sessCheck/${this.sessionId}`)
					.then(res => {
						if (res.data[0]['count(*)'] === '0') {
							// session OK!
							alert('세션 에러!! \n다시 로그인 해주세요.');
							this.$router.replace('/login');
						}
					})
					.catch(error => {
						console.log(`Error : ${error}`);
					});
			}
		},
		setPoint(type) {
			if (type === 'update')
				this.$http.get(`/api/post/pointUpdate/${this.$session.get('userid')}`).then(res => console.log(res));
			else this.$http.get(`/api/post/pointDelete/${this.$session.get('userid')}`).then(res => console.log(res));
		},
		submitButton() {
			//작성 버튼
			const submitdate = this.$moment(new Date()).format('YYYYMMDDHHmmss');
			//유효성 검사 후 전송
			if (this.titleText === '') {
				alert('제목을 입력하세요.');
			} else if (this.contentArea === '') {
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
								contents: this.contentArea,
								title: this.titleText,
								write_date: submitdate,
								update_date: submitdate,
								hashTag: this.hashTagDistributor(this.checkedNames),
							},
						})
						.then(() => {
							this.submitFile();
							this.setPoint('update');
						})
						.catch(error => {
							console.log(`Error : ${error}`);
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
			} else if (this.contentArea === '') {
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
								contents: this.contentArea,
								title: this.titleText,
								update_date: submitdate,
							},
						})
						.then(() => {
							this.$router.push(`/board/${this.categoryName}`);
						})
						.catch(error => {
							console.log(`Error : ${error}`);
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
					.catch(error => {
						console.log(`Error : ${error}`);
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
				.then(() => {
					alert('업로드성공!!');
				});
		},
		handleFileUpload() {
			this.file = this.$refs.file.files[0];
		},
	},
};
</script>
