<template>
    <div class="article">
        <progress value="0"></progress>
        <!-- Header Parts 게시글의 헤더 부분 -->
        <b-container>
            <div class="row">
                <div class="article-id justify-content-center col-sm">{{contentId}}</div>
                <div class="article-title justify-content-center col-xl"><h5>{{title}}</h5></div>
                <div class="article-author justify-content-end col-sm">작성자 {{user}}</div>
            </div>
            <div class="row">
                <div class="col-sm"></div>
                <div class="col-xl"></div>
                <div class="article-created justify-content-end col-sm">작성일 {{created}}</div>
            </div>
        </b-container>
        <!-- Body Parts 게시글의 내용 부분 -->
        <b-container>
            <div class="row">
                <br><br>
            </div>
            <div class="row">
                <pre class="article-contents justify-content-center col">{{contents}}</pre>
            </div>
        </b-container>
        <!-- Comments Parts 게시글의 댓글 부분 -->
        <CommentList :contentId="contentId"></CommentList>
    </div>
</template>

<script>
    // @ is an alias to /src
    import CommentList from "../components/Article/CommentList";

    export default {
        name: 'Article',
        components: {CommentList},
        data() {
            const contentId = Number(this.$route.params.contentId);
            return {
                contentId: contentId,
                title: '',
                contents: '',
                user: '',
                created: ''
            };
        },
        mounted () {
            this.$http.get(`/api/article/get/${this.contentId}`).then((res) => {
                this.title = res.data[0].title;
                this.contents = res.data[0].contents;
                this.user = res.data[0].name;
                this.created = res.data[0].write_date;
            })
        }
    }
</script>

<style lang="scss">
/* 프로그레스 바 */
progress {
    position: fixed;
    left: 0;
    top: 0;

    width: 100%;
    height: 5px;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    border: none;

    background-color: transparent;

    color: red;
}
progress::-webkit-progress-bar {
    background-color: transparent;
}

progress::-webkit-progress-value {
    background-color: orange;
}

progress::-moz-progress-bar {
    background-color: orange;
}
</style>
