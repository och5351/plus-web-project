<template>
    <div class="section">
        <div class="container tim-container">
            <div id="title" class="cd-section">
                <div class="tim-typo">
                    <h1>글쓰기</h1><br>
                    <div class="progress progress-line-primary">
                        <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="60"
                             aria-valuemin="0" aria-valuemax="100" style="width: 30%;">
                            <span class="sr-only"></span>
                        </div>
                    </div>
                    <div id="inputs">
                        <div class="row">
                            <div class="col-lg-12 col-sm-4">
                                <div>
                                    <label class="col-form-label-lg">제목</label>
                                    <input type="text" class="form-control" v-model="titleText" id="titleText">
                                </div>
                            </div>

                        </div>
                    </div>

                    <div id="content">
                        <div class="row">
                            <div class="col-lg-12 col-sm-4">
                                <div>
                                    <label class="col-form-label-lg">본문</label>
                                    <textarea type="text" class="form-control" cols="500" rows="20"
                                              v-model="contentArea" id="contentArea"></textarea><br>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="checkFunction">

                        <label class="col-form-label-lg">HashTag</label>
                        <div class="row">
                            <div class="col-xs-8 col-sm-6 col-md-3">
                                <input class="form-check-input" type="checkbox" id="Food" v-model="checkedNames"
                                       value="음식"/>음식
                                <span class="form-check-sign">
                                    <span class="check"></span>
                                </span>
                            </div>
                            <div class="col-xs-8 col-sm-6 col-md-3">
                                <input class="form-check-input" type="checkbox" id="Game" v-model="checkedNames"
                                       value="게임"/>게임
                                <span class="form-check-sign">
                                    <span class="check"></span>
                                </span>
                            </div>
                            <div class="col-xs-8 col-sm-6 col-md-3">
                                <input class="form-check-input" type="checkbox" id="Web" v-model="checkedNames"
                                       value="모바일"/>모바일
                                <span class="form-check-sign">
                                    <span class="check"></span>
                                </span>
                            </div>
                            <div class="col-xs-8 col-sm-6 col-md-3">
                                <input class="form-check-input" type="checkbox" id="Application" v-model="checkedNames"
                                       value="음악"/>음악
                                <span class="form-check-sign">
                                    <span class="check"></span>
                                </span>
                            </div>
                            <div class="col-xs-8 col-sm-6 col-md-3">
                                <input class="form-check-input" type="checkbox" id="AI" v-model="checkedNames"
                                       value="그림"/>그림
                                <span class="form-check-sign">
                                    <span class="check"></span>
                                </span>
                            </div>
                            <div class="col-xs-8 col-sm-6 col-md-3">
                                <input class="form-check-input" type="checkbox" id="Music" v-model="checkedNames"
                                       value="소설"/>소설
                                <span class="form-check-sign">
                                    <span class="check"></span>
                                </span>
                            </div>
                            <div class="col-xs-8 col-sm-6 col-md-3">
                                <input class="form-check-input" type="checkbox" id="Paint" v-model="checkedNames"
                                       value="여행/사진"/>여행/사진
                                <span class="form-check-sign">
                                    <span class="check"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <input type="text" class="form-control" id="showCategory" :value="checkedNames" readonly/><br><br>
                </div>
            </div>

            <div id="buttonFunction">
                <!-- 삭제 버튼 구현 요망-->
                <div v-if="this.att == 'post'">
                    <button class="btn btn-success btn-round" style="margin-right: 20px;" @click.prevent="submitB">
                        <i class="material-icons">done</i> 작성
                    </button>
                    <button class="btn btn-danger btn-round" style="margin-left: 20px;" @click.prevent="cancleB">
                        <i class="material-icons">clear</i> 취소
                    </button>
                </div>
                <div v-else>
                    <button class="btn btn-success btn-round" style="margin-right: 20px;" @click.prevent="updateB">
                        <i class="material-icons">done</i> 수정
                    </button>
                    <button class="btn btn-danger btn-round" style="margin-left: 20px;" @click.prevent="cancleB">
                        <i class="material-icons">clear</i> 취소
                    </button>
                </div>

            </div>
        </div>
        <br><br>
    </div>

</template>

<script>

    window.onbeforeunload = function () {
        return '';
    };
    export default {
        name: 'postBody',
        mounted () {
            if (this.categoryId === null) this.$router.go(-1)
            console.log(this.$session.get('user_idx'))
            var mySessionIDX = '1'
            var mySessionID = 'och5351' // session 만들었을 시 삭제
            if (this.att === 'edit') { //edit 쿼리 조회
                this.$http.get(`/api/post/Posting/sessCheckEdit/${mySessionIDX}/${mySessionID}/${this.contentId}`).then((res) => {//session에 정해졌을 시 하나로
                    if (res.data[0]['count(*)'] !== '0') { // session OK!
                        var dic = res.data[0]
                        this.titleText = dic['title']
                        this.contentArea = dic['contents']
                    } else {
                        alert('세션 에러!! \n다시 로그인 해주세요.')
                        this.$router.replace('/login')
                    }
                }).catch(function (error) {
                    console.log(`Error : ${error}`)
                });
            } else {//posting 쿼리 조회
                this.$http.get(`/Posting/sessCheck/${mySessionID}`).then((res) => {
                    if (res.data[0]['count(*)'] === '0') { // session OK!
                        alert('세션 에러!! \n다시 로그인 해주세요.')
                        this.$router.replace('/login')
                    }
                }).catch(function (error) {
                    console.log(`Error : ${error}`)
                });
            }
        },
        methods: {
            submitB: function () { //작성 버튼
                var submitdate = this.$moment(new Date()).format('YYYYMMDDHHmmss')
                //유효성 검사 후 전송
                if (this.titleText === '') {
                    alert('제목을 입력하세요.')
                } else if (this.contentArea === '') {
                    alert('본문을 입력하세요.')
                } else if (this.checkedNames === '') {
                    alert('카테고리를 선택하세요.')
                } else {
                    if (confirm("작성하시겠습니까?")) {
                        this.$http.post('/api/post/Posting', {
                            posting: {
                                board_id: this.board_id, //게시판에서 받아 와야 함
                                ca_id: this.categoryId,
                                user_idx: this.$session.get('user_idx'), //세션에서 받아와야 함
                                user_id: this.$session.get('user_id'), //세션에서 받아와야 함
                                name: this.$session.get('name'), //세션에서 받아와야 함
                                contents: this.contentArea,
                                title: this.titleText,
                                write_date: submitdate,
                                update_date: submitdate,
                                //hashTag: hashTagDistributor(this.checkedNames),
                            }
                        }).then(res => {
                            console.log(res.data)
                        }).catch(function (error) {
                            console.log('에러');
                            console.log(error);
                        });
                        this.$router.push(`/board/${this.categoryName}`)
                    }
                }
            },
            updateB: function () { //수정 버튼
                var submitdate = this.$moment(new Date()).format('YYYYMMDDHHmmss')
                //유효성 검사 후 전송
                if (this.titleText === '') {
                    alert('제목을 입력하세요.')
                } else if (this.contentArea === '') {
                    alert('본문을 입력하세요.')
                } else if (this.checkedNames === '') {
                    alert('카테고리를 선택하세요.')
                } else {
                    if (confirm("작성하시겠습니까?")) {
                        this.$http.post('/api/post/updatePost', {
                            posting: {
                                post_seq: this.num, //작성 글에서 받아 와야 함
                                board_id: this.board_id, //게시판에서 받아 와야 함
                                ca_id: '1', //this.checkedNames,
                                user_idx: this.$session.get('user_idx'), //세션에서 받아와야 함
                                user_id: this.$session.get('user_id'), //세션에서 받아와야 함
                                name: this.$session.get('name'), //세션에서 받아와야 함
                                contents: this.contentArea,
                                title: this.titleText,
                                update_date: submitdate,
                            }
                        }).then(res => {
                            console.log(res.data)
                        }).catch(function (error) {
                            console.log('에러');
                            console.log(error);
                        });
                        this.$router.push(`/board/${this.categoryName}`)
                    }
                }
            },
            cancleB() { //취소 버튼
                if (this.att === 'post') {
                    if (confirm("작성을 취소하시겠습니까?\n작업하시던 내용은 사라집니다.")) {
                        this.$router.push(`/board/${this.categoryName}`)
                    }
                } else {
                    if (confirm("작성을 취소하시겠습니까?\n작업하시던 내용은 사라집니다.")) {
                        this.$router.push(`/article/${this.contentId}`)
                    }
                }
            },
            hashTagDistributor(val) { // checkNames to index
                switch (val) {
                    case '음식': return 1
                    case '게임': return 2
                    case '모바일': return 3
                    case '음악': return 4
                    case '그림': return 5
                    case '소설': return 6
                    default: return 7
                }
            },
            hashTagAdder(checkArr) { //hash 태그 index 배열로 변환
                var hashTag = []
                if (checkArr != null) {
                    for (var i = 0; i < checkArr.length; i++) {
                        if (i == 0) {
                            hashTag.push(this.hashTagDistributor(checkArr[i]))
                        } else {
                            hashTag.push(this.hashTagDistributor(checkArr[i]))
                        }
                    }
                }
                hashTag.sort()
                hashTag = hashTag.map(String)
                return hashTag
            }
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
            }
        }
    }
</script>
