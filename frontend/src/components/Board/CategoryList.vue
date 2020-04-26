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
                <tr v-if="boardList === null">
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
    export default {
        props: {
            categoryName: String,
        },
        data() {
            return {
                categoryId: null,
                boardList: null,
                pageArray: null,
            }
        },
        mounted() {
            this.$http.get(`/api/board/${this.categoryName}`)
                .then((res) => {
                    if (res.data.length === 0) {
                        this.category()
                        return
                    }
                    this.boardList = res.data
                    this.categoryId = res.data[0].ca_id
                }).catch(function (error) {
                console.log(`Error : ${error}`)
            });
        },
        methods: {
            category() {
                this.$http.get(`/api/board/info/${this.categoryName}`)
                    .then((res) => {
                        this.categoryId = res.data[0].ca_id
                    }).catch((error) => {
                    console.log(`Error : ${error}`)
                })
            },
            detail(seq) {
                this.$http.get(`/api/board/views/${seq}`)
                this.$router.push(`article/${seq}`)
            },
            post() {
                this.$router.push({
                    name: 'Posting',
                    params: {board_id: 1, categoryName: this.categoryName, categoryId: this.categoryId, att: 'post'}
                })
            }
        }
    }
</script>
