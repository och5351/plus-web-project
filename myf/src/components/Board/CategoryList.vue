<template>
    <div class="container">
        <div style="width: 80%; padding: 20px; text-align: center;">
            <table class="table table-hover">
                <thead>
                <tr>
                    <th scope="col">번호</th>
                    <th scope="col">제목</th>
                    <th scope="col">조회수</th>
                </tr>
                </thead>
                <tbody>
                <tr v-if="boardList === ''">
                    <td colspan="3" style="text-align: center">데이터가 없습니다</td>
                </tr>
                <tr v-else v-for="(board, bIdx) in boardList" :key="bIdx"
                    @click="detail(board.post_id)">
                    <th scope="row">{{bIdx + 1}}</th>
                    <td>{{board.title}}</td>
                    <td>{{board.views}}</td>
                </tr>
                </tbody>
            </table>
            <button type="button" class="float-right btn btn-success" @click="post()">글쓰기</button>
        </div>
    </div>
</template>

<script>

//import PaginatedList  from 'PaginatedList '

export default {
    comments : {
        //PaginatedList
    },
    props : {
        caName: String
    },
    data : () => {
        return {
            boardList: '',
            pageArray: ''
        }
    },
    created () {
        this.$http.get(`/api/board/${this.caName}`)
            .then((res) => {
                this.boardList = res.data
            }).catch(function(error) {
            console.log(`Error : ${error}`)
        });
    },
    methods : {
        detail (seq) {
            this.$router.push(`article/${seq}`)
        },
        post () {
            this.$router.push({
                name : 'Posting',
                query : {board_id: 1, category : 1, att: 'post'}
            })
        }
    }
}
</script>
