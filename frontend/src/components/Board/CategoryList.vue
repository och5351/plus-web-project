<template>
    <div class="container">
        <!-- 로그인 박스 -->
        <div class="loginBox">
            <span> 
                <a href="#" class="memrog"> 회원가입 ｜ </a>
                <a href="#" class="ldpw">아이디 ·</a>
                <a href="#" class="idpw"> 비밀번호 찾기 </a>
            </span>
                <b-button href="#" variant="outline-secondary" size="md"> 로그인 </b-button>
        </div>

        <!-- 게시판 설명 -->
        <div class="border" id="exBox">
            <div class="card text-dark bg secondary mb-3">
            <div class="card-header">자유게시판</div>
            <div class="card-body">
                <h5 class="card-title">싸우면 무현이 부름</h5>
                <p class="card-text">3대 500 조무현 : 진실의 방으로...!</p>
            </div>
            </div>
        </div>

        <div style="padding: 20px; text-align: center;">
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
                <tr v-else v-for="(board, bIdx) in displayedPosts" :key="bIdx"
                    @click="detail(board.post_id)">
                    <th scope="row">{{board.post_id}}</th>
                    <td>{{board.title}}</td>
                    <td>{{board.views}}</td>
                </tr>
                </tbody>
            </table>

            <div id="pageStyle">
                <nav aria-label="Page navigation">
                    <ul class="pagination">
                        <li class="page-item">
                            <button type="button" class="page-link" v-if="pageNum !== 1" @click="pageNum--"> 이전</button>
                        </li>
                        <li class="page-item">
                            <button type="button" class="page-link"
                                    v-for="pageNumber in totalPage.slice(pageNum-1, pageNum+4)" :key="pageNumber"
                                    @click="pageNum = pageNumber"> {{pageNumber}}
                            </button>
                        </li>
                        <li class="page-item">
                            <button type="button" @click="pageNum++" v-if="pageNum < totalPage.length"
                                    class="page-link"> 다음
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            <button v-if="this.$session.get('user_idx')" type="button" class="float-right btn btn-success" @click="post()">글쓰기</button>
        </div>
            <!-- Footer -->
            <footer class="footer">
            <!-- Footer Links -->
            <div class="container text-center text-md-left">

                <!-- Grid row -->
                <div class="row">

                <!-- Grid column -->
                <div class="col-md-4 mx-auto text-info">

                    <!-- Content -->
                    <h5 class="font-weight-bold text-uppercase mt-3 mb-4">바로가기</h5>
                    <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                    consectetur
                    adipisicing elit.</p>

                </div>
                <!-- Grid column -->

                <hr class="clearfix w-100 d-md-none">

                <!-- Grid column -->
                <div class="col-md-2 mx-auto text-dark">
                    <!-- Links -->
                    <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Game</h5>
                    <ul class="list-unstyled">
                    <li>
                        <a href="#!" >League Of Legend</a>
                    </li>
                    <li>
                        <a href="#!">Battle Ground</a>
                    </li>
                    <li>
                        <a href="#!">Sudden Attack</a>
                    </li>
                    <li>
                        <a href="#!">Maple Stroy</a>
                    </li>
                    </ul>

                </div>
                <!-- Grid column -->

                <hr class="clearfix w-100 d-md-none">

                <!-- Grid column -->
                <div class="col-md-2 mx-auto text-dark">
                    <!-- Links -->
                    <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Music</h5>
                    <ul class="list-unstyled">
                    <li>
                        <a href="#!">Ballade</a>
                    </li>
                    <li>
                        <a href="#!">Hip Hop</a>
                    </li>
                    <li>
                        <a href="#!">Jazz</a>
                    </li>
                    <li>
                        <a href="#!">PoP</a>
                    </li>
                    </ul>

                </div>
                <!-- Grid column -->

                <hr class="clearfix w-100 d-md-none">

                <!-- Grid column -->
                <div class="col-md-2 mx-auto text-dark">

                    <!-- Links -->
                    <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Food</h5>

                    <ul class="list-unstyled">
                    <li>
                        <a href="#!">Korean</a>
                    </li>
                    <li>
                        <a href="#!">Western food</a>
                    </li>
                    <li>
                        <a href="#!">Instant</a>
                    </li>
                    <li>
                        <a href="#!">Junk food</a>
                    </li>
                    </ul>
                </div>
                <!-- Grid column -->
                </div>
                <!-- Grid row -->
            </div>

            <!-- Social buttons -->
            <ul class="list-unstyled list-inline text-center">
                <li class="list-inline-item">
                    <i class="fab fa-facebook-f"> </i>
                </li>
                <li class="list-inline-item">
                    <i class="fab fa-twitter"> </i>
                </li>
                <li class="list-inline-item">
                    <i class="fab fa-google-plus-g"> </i>
                </li>
                <li class="list-inline-item">
                    <i class="fab fa-github"> </i>
                </li>
            </ul>

            <!-- Copyright -->
            <div class="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="http://plus-market.com">PLUS</a>
            </div>

            </footer>
            <!-- Footer -->
    </div>
</template>

<script>
    import store from '../../store/store'

    export default {
        store,
        props: {
            categoryName: String,
        },
        data() {
            return {
                pageNum: store.getters.getPageNum,
                pageSize: 10,
                totalPage: [],
                categoryId: null,
                boardList: null,
            }
        },
        created() {
            this.getPosts()
            store.commit('setCategory', this.categoryName)
        },
        computed: {
            displayedPosts() {
                return this.paginate();
            }
        },
        watch: {
            boardList() {
                this.setPages();
            },
            pageNum() {
                store.commit('setPageNum', this.pageNum)
            }
        },
        methods: {
            getPosts() {
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
            setPages() {
                let numberOfPages = Math.ceil(this.boardList.length / this.pageSize);
                for (let index = 1; index <= numberOfPages; index++) {
                    this.totalPage.push(index);
                }
            },
            paginate() {
                let page = this.pageNum;
                let pageSize = this.pageSize;
                let from = (page * pageSize) - pageSize;
                let to = (page * pageSize);
                return this.boardList.slice(from, to);
            },
            category() {
                this.$http.get(`/api/board/info/${this.categoryName}`)
                    .then((res) => {
                        this.categoryId = res.data[0].ca_id
                    }).catch((error) => {
                    console.log(`Error : ${error}`)
                })
            },
            detail(seq) {
                this.$http.post(`/api/board/views/${seq}`)
                this.$router.push(`/article/${seq}/`)
            },
            post() {
                this.$router.push({
                    name: 'Posting',
                    params: {board_id: 1, categoryName: this.categoryName, categoryId: this.categoryId, att: 'post'}
                })
            },
        }
    }
</script>

<style>
    #pageStyle {
        float: left;
    }

    #exBox{
        margin-top: 20px;
        margin-bottom:  20px;
    }

    span{
        font-size: 14px;
        -webkit-text-fill-color: gray;
    }
    .memrog{
        font-weight: 700;
    }

    .loginBox{
        margin-top: 15px;
        margin-bottom: 10px;
        text-align: right;
    }

    button.page-link {
        display: inline-block;
    }

    button.page-link {
        font-size: 20px;
        color: #29b3ed;
        font-weight: 500;
    }
    
</style>