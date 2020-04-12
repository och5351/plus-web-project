<template>
    <div class="section">
        <div class="container tim-container">
            <div id="title" class="cd-section">
                <div class="tim-typo">
                    <h1>글쓰기</h1><br>
                    <div class="progress progress-line-primary">
                        <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 30%;">
                            <span class="sr-only"></span>
                        </div>
                    </div>
                    <div id="inputs">
                        <div class="row">
                            <div class="col-lg-8 col-sm-4">
                                <div>
                                    <label class="col-form-label-lg">제목</label>
                                    <input type="text" class="form-control" v-model="titleText" id="titleText">
                                </div>
                            </div>

                        </div>
                    </div>

                    <div id="content">
                        <div class="row">
                            <div class="col-lg-8 col-sm-4">
                                <div>
                                    <label class="col-form-label-lg">본문</label>
                                    <textarea type="text" class="form-control" cols="1000" rows="20" v-model="contentArea" id="contentArea"></textarea><br>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="checkFunction">

                        <label class="col-form-label-lg">취미</label>
                        <div class="row" style="width:110%">
                            <div class="col-xs- col-sm-6 col-md-1">
                                <input class="form-check-input" type="checkbox"  id="Food" v-model="checkedNames" value="음식"/>음식
                                <span class="form-check-sign">
                                    <span class="check"></span>
                                </span>
                            </div>
                            <div class="col-xs-8 col-sm-6 col-md-1">
                                <input class="form-check-input" type="checkbox"  id="Game" v-model="checkedNames" value="게임"/>게임
                                <span class="form-check-sign">
                                    <span class="check"></span>
                                </span>
                            </div>
                            <div class="col-xs-8 col-sm-6 col-md-1">
                                <input class="form-check-input" type="checkbox"  id="Web" v-model="checkedNames" value="모바일"/>모바일
                                <span class="form-check-sign">
                                    <span class="check"></span>
                                </span>
                            </div>
                            <div class="col-xs-8 col-sm-6 col-md-1">
                                <input class="form-check-input" type="checkbox"  id="Application" v-model="checkedNames" value="음악"/>음악
                                <span class="form-check-sign">
                                    <span class="check"></span>
                                </span>
                            </div>
                            <div class="col-xs-8 col-sm-6 col-md-1">
                                <input class="form-check-input" type="checkbox"  id="AI" v-model="checkedNames" value="그림"/>그림
                                <span class="form-check-sign">
                                    <span class="check"></span>
                                </span>
                            </div>
                            <div class="col-xs-8 col-sm-6 col-md-1">
                                <input class="form-check-input" type="checkbox"  id="Music" v-model="checkedNames" value="소설"/>소설
                                <span class="form-check-sign">
                                    <span class="check"></span>
                                </span>
                            </div>
                            <div class="col-xs-8 col-sm-6 col-md-1">
                                <input class="form-check-input" type="checkbox"  id="Paint" v-model="checkedNames" value="여행/사진"/>여행/사진
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
                <!-- 삭제 버튼 구현 -->
                <div v-if="this.att == 'post'">
                    <button class="btn btn-success btn-round" style="margin-right: 20px;" @click.prevent="submitB">
                                            <i class="material-icons">done</i> 작성</button>
                    <button class="btn btn-danger btn-round" style="margin-left: 20px;" @click.prevent="cancleB">
                                        <i class="material-icons">clear</i> 취소</button>
                </div>
                <div v-else>
                    <button class="btn btn-success btn-round" style="margin-right: 20px;" @click.prevent="updateB">
                                                <i class="material-icons">done</i> 수정</button>
                    <button class="btn btn-danger btn-round" style="margin-left: 20px;" @click.prevent="cancleB">
                                                <i class="material-icons">clear</i> 취소</button>
                </div>

            </div>
        </div> <br><br>
    </div>

</template>

<script>
window.onbeforeunload = function() {
    return '';
};
export default {

    name: 'postBody',
    created(){
        this.$route.params
    },
    methods: {
        submitB: function() { //작성 버튼
            var submitdate = this.$moment(new Date()).format('YYYYMMDDHHmmss')
            //유효성 검사 후 전송
            if (this.titleText == '') {
                alert('제목을 입력하세요.')
            } else if (this.contentArea == '') {
                alert('본문을 입력하세요.')
            } else if (this.checkedNames == '') {
                alert('카테고리를 선택하세요.')
            } else {
                if(confirm("작성하시겠습니까?")){
                    this.$http.post('/api/post/Posting', {
                        posting:{
                            board_id: this.board_id, //게시판에서 받아 와야 함
                            ca_id: this.category,//this.checkedNames,
                            userid: 'och5351', //세션에서 받아와야 함
                            name: '오찬해', //세션에서 받아와야 함
                            contents: this.contentArea,
                            title: this.titleText,
                            write_date: submitdate,
                            update_date: submitdate,
                        }
                    }).then(res => { console.log(res.data)
                    }).catch(function(error) {
                        console.log('에러');
                        console.log(error);
                    });
                    this.$router.push({name:'Board'})
                }
            }
        },
        updateB: function(){ //수정 버튼
            var submitdate = this.$moment(new Date()).format('YYYYMMDDHHmmss')
            //유효성 검사 후 전송
            if (this.titleText == '') {
                alert('제목을 입력하세요.')
            } else if (this.contentArea == '') {
                alert('본문을 입력하세요.')
            } else if (this.checkedNames == '') {
                alert('카테고리를 선택하세요.')
            } else {
                if(confirm("작성하시겠습니까?")){
                    this.$http.post('/api/post/updatePost', {
                        posting:{
                            post_seq: this.num, //작성 글에서 받아 와야 함
                            board_id: this.board_id, //게시판에서 받아 와야 함
                            ca_id: '1', //this.checkedNames,
                            userid: 'och5351', //세션에서 받아와야 함
                            name: '오찬해', //세션에서 받아와야 함
                            contents: this.contentArea,
                            title: this.titleText,
                            update_date: submitdate,
                        }
                    }).then(res => { console.log(res.data)
                    }).catch(function(error) {
                        console.log('에러');
                        console.log(error);
                    });
                    this.$router.push('/Board')
                }
            }
        },
        cancleB() {
            this.$router.push()
        }
    },
    data() {
        const num = this.$route.query.num;
        const att = this.$route.query.att;
        const board_id = this.$route.query.board_id;
        const category = this.$route.query.category;
        return{
            num: num,
            att: att,
            board_id : board_id,
            category : category,
            checkedNames: [],
            titleText: '',
            contentArea: ''
        }
    }
}
</script>

<style scoped>
</style>
