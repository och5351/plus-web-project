<template>
    <div class="article">
        <progress value="0"></progress>
        <!-- Header Parts 게시글의 헤더 부분 -->
        <b-container>
            <div class="article-id justify-content-center">{{contentId}}</div>
            <div class="article-title justify-content-center"><h5>{{title}}</h5></div>
            <div class="article-author">작성자 {{user}}</div>
            <div class="article-created">작성일 {{created}}</div>
        </b-container>
        <!-- Body Parts 게시글의 내용 부분 -->
        <b-container>
            <pre class="article-contents justify-content-center">{{contents}}</pre>
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
/*  본문 스타일링  */
.article-id {
    display: flex;
    flex-direction: row;
    width: 5%;
    float: left;
}
.article-title {
    display: flex;
    flex-direction: row;
    float: left;
    justify-content: space-between;
    align-content: center;
    width: 80%;
}
.article-author {
    display: flex;
    flex-direction: row;
    float: right;
}
.article-created {
    display: flex;
    flex-direction: row;
    float: right;
}
.article-contents {
    clear: both;
    display: flex;
    flex-direction: row;
    padding: 2rem;
}
</style>
