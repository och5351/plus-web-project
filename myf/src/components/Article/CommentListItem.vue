<template>
<!--  댓글 -->
  <div id="commentListItem" class="comment-list-item">
    <b-container class="comment-box">
      <div class="comment-author justify-content-center">{{commentObj.name}}</div>
      <div class="comment-context justify-content-center">{{commentObj.contents}}</div>
      <div class="comment-created justify-content-center">{{commentObj.write_date}}</div>
<!--    대댓글 -->
      <template v-if="subCommentList[0].length > 0">
        <div class="comment-list-item-subcomment-list" :key="item" v-for="item in subCommentList[0]">
          <b-container class="subcomment-box">
            <div class="subcomment-author justify-content-center"><i class="fas fa-sort-up" style="margin-right: 1em;"></i>{{item.name}}</div>
            <div class="subcomment-context justify-content-center">{{item.contents}}</div>
            <div class="subcomment-created justify-content-center">{{item.write_date}}</div>
          </b-container>
        </div>
      </template>
    </b-container>
  </div>
</template>
<script>
  export default {
    name: "CommentListItem",
    props: {
      commentObj: Object
    },
    components: {

    },
    data() {
      return {
        subCommentList: [],
      }
    },
    mounted () {
      this.$http.get(`/api/comments/sub/${this.commentObj.cm_seq}`).then((res) => {
        this.subCommentList.push(res.data);
      })
    }
  }
</script>

<style scoped>
  .comment-author {
    float: left;
    display: flex;
    flex-direction: row;
    width: 20%;
  }
  .comment-created {
    float: left;
    display: flex;
    flex-direction: row;
  }
  .comment-context {
    float: left;
    display: flex;
    flex-direction: row;
    width: 50%;
  }
  .comment-box {
    margin: 0.5em;
    padding: 0.5em;
  }
  /* .comment-list-item-subcomment-list {
    padding-left: 1rem;
  } */
  .subcomment-author {
    clear: left;
    float: left;
    display: flex;
    flex-direction: row;
    width: 20%;
  }
  .subcomment-created {
    float: left;
    display: flex;
    flex-direction: row;
  }
  .subcomment-context {
    float: left;
    display: flex;
    flex-direction: row;
    width: 50%;
  }
  .subcomment-box {
    margin: 0.5em;
    padding: 0.5em;
  }
</style>