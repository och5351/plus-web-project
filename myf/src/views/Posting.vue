<template>
<div class = 'wrap'>
    <noscript>
      <strong>We're sorry but hello-world doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container">
            <div class="navbar-translate">
                <a class="navbar-brand" href="#0">플러스 마켓</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
          </button>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="active nav-item">
                        <a href="#pablo" class="nav-link">
                            <i class="material-icons">explore</i> Discover
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#pablo" class="nav-link">
                            <i class="material-icons">account_circle</i> Profile
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#pablo" class="nav-link">
                            <i class="material-icons">settings</i> Settings
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="section">
        <div class="container tim-container">
            <!--                typography -->
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
                        <div class="row">
                            <div class="col-lg-8 col-sm-4">
                                <label class="col-form-label-lg">취미</label>
                                <div class="form-check ">
                                    <label class="form-check-label ">
                                                <input class="form-check-input" type="checkbox"  id="Game" v-model="checkedNames" value="게임">게임
                                                <span class="form-check-sign">
                                                  <span class="check"></span>
                                                </span>
                                    </label>


                                    <label class="form-check-label">
                                              <input class="form-check-input" type="checkbox"  id="Web" v-model="checkedNames" value="웹">웹
                                              <span class="form-check-sign">
                                                <span class="check"></span>
                                              </span>
                                    </label>


                                    <label class="form-check-label">
                                            <input class="form-check-input" type="checkbox"  id="Application" v-model="checkedNames" value="어플">어플
                                            <span class="form-check-sign">
                                              <span class="check"></span>
                                            </span>
                                    </label>


                                    <label class="form-check-label">
                                          <input class="form-check-input" type="checkbox"  id="AI" v-model="checkedNames" value="인공지능">인공지능
                                          <span class="form-check-sign">
                                            <span class="check"></span>
                                          </span>
                                    </label>


                                    <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox"  id="Music" v-model="checkedNames" value="음악">음악
                                        <span class="form-check-sign">
                                          <span class="check"></span>
                                        </span>
                                    </label>


                                    <label class="form-check-label">
                                              <input class="form-check-input" type="checkbox"  id="Paint" v-model="checkedNames" value="그림">그림
                                              <span class="form-check-sign">
                                                <span class="check"></span>
                                              </span>
                                    </label>

                                    <input type="text" class="form-control" id="showCategory" :value="checkedNames" readonly/><br><br>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div id="buttonFunction">
                        <button class="btn btn-success btn-round" style="margin-right: 20px;" @click="submitB">
                                                  <i class="material-icons">done</i> 작성</button>
                        <button class="btn btn-danger btn-round" style="margin-left: 20px;" @click="cancleB">
                                                  <i class="material-icons">clear</i> 취소</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
    
<footer class="py-5 bg-primary">
    <div class="container" style="position:absolute; bottom: 0;width: 100%;height: 30px">
    </div>
</footer>
</div>

</template>

<script>
import 'expose-loader?$!expose-loader?jQuery!jquery'

var select = new Vue({
    el: '#checkFunction',
    data: {
        checkedNames: []
    }
})

var buttonFunction = new Vue({
    el: '#buttonFunction',
    methods: {
        submitB: function(event) {

            title = $('#titleText').val()
            content = $('#contentArea').val()
            select = select.checkedNames
                //유효성 검사 후 전송
            if (title == '') {
                event.preventDefault()
                alert('제목을 입력하세요.')
            } else if (content == '') {
                event.preventDefault()
                alert('본문을 입력하세요.')
            } else if (select == '') {
                event.preventDefault()
                alert('카테고리를 선택하세요.')
            } else {
                $.ajax({
                    type: 'POST',
                    url: url,
                    data: {
                        "title": title,
                        "content": content,
                        "select": select
                    },
                    success: success,
                    dataType: data
                })
            }

        },
        cancleB: function() {
            //취소 이벤트
        }
    }
})
export default {
    
}
</script>
<style lang="scss">

</style>