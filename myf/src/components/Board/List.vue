<template>
    <div class="container">
        <div style="width: 80%; padding: 20px; text-align: center;">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">공지사항</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">자유게시판</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Q&A</a>
                </li>
            </ul>

            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">번호</th>
                            <th scope="col">제목</th>
                            <th scope="col">조회수</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-if="boardList[0] == null">
                            <td colspan="3" style="text-align: center">데이터가 없습니다</td>
                        </tr>
                        <tr v-else v-for="(board, bIdx) in boardList[0]" :key="bIdx"
                        @click="detail(board.post_seq)">
                            <th scope="row">{{bIdx + 1}}</th>
                            <td>{{board.title}}</td>
                            <td>{{board.views}}</td>
                        </tr>
                        </tbody>
                    </table>
                    <button type="button" class="float-right btn btn-success" @click="post()">글쓰기</button>
                </div>

                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>

<!--        <paginated-list :list-array="pageArray" />-->

    </div>
</template>

<script>

//import PaginatedList  from 'PaginatedList '

export default {
    name : "List",
    comments : {
        //PaginatedList
    },
    data : () => {
        return {
            ca_id : 'free',
            boardList: [],
            pageArray: []
        }
    },
    methods : {
        detail (seq) {
            this.$router.push(`article/${seq}`)
        },
        post () {
            this.$router.push({
                name : 'Posting',
                params : {board_id: 'board', category : this.ca_id, att: 'post'}
            })
        }
    },
    created () {
        this.$http.get(`api/board/${this.ca_id}`)
        .then((res) => {
            this.boardList.push(res.data)
        }).catch(function(error) {
            console.log(`Error : ${error}`)
        });
    }
}
</script>
