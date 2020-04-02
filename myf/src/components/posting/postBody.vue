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
                        <div class="row">
                            <div class="col-xs-8 col-sm-6 col-md-1">
                                <input class="form-check-input" type="checkbox"  id="Game" v-model="checkedNames" value="게임"/>게임
                                <span class="form-check-sign">
                                    <span class="check"></span>
                                </span>
                            </div>
                            <div class="col-xs-8 col-sm-6 col-md-1">
                                <input class="form-check-input" type="checkbox"  id="Web" v-model="checkedNames" value="웹"/>웹
                                <span class="form-check-sign">
                                    <span class="check"></span>
                                </span>
                            </div>
                            <div class="col-xs-8 col-sm-6 col-md-1">
                                <input class="form-check-input" type="checkbox"  id="Application" v-model="checkedNames" value="어플"/>어플
                                <span class="form-check-sign">
                                    <span class="check"></span>
                                </span>
                            </div>
                            <div class="col-xs-8 col-sm-6 col-md-1">
                                <input class="form-check-input" type="checkbox"  id="AI" v-model="checkedNames" value="인공지능"/>AI
                                <span class="form-check-sign">
                                    <span class="check"></span>
                                </span>
                            </div>
                            <div class="col-xs-8 col-sm-6 col-md-1">
                                <input class="form-check-input" type="checkbox"  id="Music" v-model="checkedNames" value="음악"/>음악
                                <span class="form-check-sign">
                                    <span class="check"></span>
                                </span>
                            </div>                                   
                            <div class="col-xs-8 col-sm-6 col-md-1">
                                <input class="form-check-input" type="checkbox"  id="Paint" v-model="checkedNames" value="그림"/>그림
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
                <button class="btn btn-success btn-round" style="margin-right: 20px;" @click.prevent="submitB">
                                            <i class="material-icons">done</i> 작성</button>
                <button class="btn btn-danger btn-round" style="margin-left: 20px;" @click.prevent="cancleB">
                                            <i class="material-icons">clear</i> 취소</button>
            </div>
        </div> <br><br>
    </div>
       
</template>
<script>
import axios from 'axios';
export default {
    name: 'postBody',
    methods: {
        submitB: function() {          
            //유효성 검사 후 전송
            if (this.titleText == '') {
                alert('제목을 입력하세요.')
            } else if (this.contentArea == '') {
                alert('본문을 입력하세요.')
            } else if (this.checkedNames == '') {
                alert('카테고리를 선택하세요.')
            } else {
                if(confirm("작성하시겠습니까?")){
                    axios.post('/api/users/toPosting', {
                        posting:{
                            title: this.titleText,
                            content: this.contentArea,
                            checkedNames: this.checkedNames
                        }
                    }).then(res => { console.log(res.data) 
                    }).catch(function(error) {
                        console.log('에러')
                        console.log(error);
                    });
                    this.$router.push('/board')
                }
            }
        },
        cancleB() {
            //취소 이벤트
        }
    },
    data() {
        return{
            checkedNames: [],
            titleText: '',
            contentArea: '',
        }
    }
}

</script>
<style scoped>

</style>