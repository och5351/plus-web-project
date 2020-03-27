<template>
    <div class="article">
        <progress value="0"></progress>
        <b-container>
            <div class="article-id justify-content-center">{{contentId}}</div>
            <div class="article-title justify-content-center"><h5>{{title}}</h5></div>
            <div class="article-author">작성자 {{user}}</div>
            <div class="article-created">작성일 {{created}}</div>
        </b-container>
        <b-container>
            <pre class="article-context justify-content-center">{{context}}</pre>
        </b-container>
        <CommentList :contentId="contentId"></CommentList>
    </div>
</template>

<script>
    // @ is an alias to /src
    import data from "@/data"
    import CommentList from "../components/Article/CommentList";

    export default {
        name: 'Article',
        components: {CommentList},
        data() {
            const contentId = Number(this.$route.params.contentId);
            const contentData = data.Content.filter(contentItem => contentItem.contentid === contentId)[0];
            return {
                contentId: contentId,
                title: contentData.title,
                context: contentData.context,
                user: data.User.filter(item => item.userid === contentData.userid)[0].name,
                created: contentData.created_at
            };
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
.article-context {
    clear: both;
    display: flex;
    flex-direction: row;
    padding: 2rem;
}
</style>
