<template>
<!--  댓글 -->
  <div id="commentListItem" class="comment-list-item">
    <b-container class="comment-box">
      <div class="comment-author justify-content-center">{{name}}</div>
      <div class="comment-context justify-content-center">{{commentObj.context}}</div>
      <div class="comment-created justify-content-center">{{commentObj.created_at}}</div>
<!--    대댓글 -->
      <template v-if="subCommentList.length > 0">
        <div class="comment-list-item-subcomment-list" :key="item.subcommentid" v-for="item in subCommentList">
          <b-container class="subcomment-box">
            <div class="subcomment-author justify-content-center"><i class="fas fa-sort-up" style="margin-right: 1em;"></i>{{item.user_name}}</div>
            <div class="subcomment-context justify-content-center">{{item.context}}</div>
            <div class="subcomment-created justify-content-center">{{item.created_at}}</div>
          </b-container>
        </div>
      </template>
    </b-container>
  </div>
</template>

<script>
  import data from "@/data"

  export default {
    name: "CommentListItem",
    props: {
      commentObj: Object
    },
    components: {

    },
    data() {
      return {
        // returns secondary-comment's data of its primary-comment
        name: data.User.filter(userItem => userItem.userid === this.commentObj.userid)[0].name,
        subCommentList: data.SubComment.filter(item => item.commentid === this.commentObj.commentid).map(subCommentItem => ({
          ...subCommentItem,
          user_name: data.User.filter(item => item.userid === subCommentItem.userid)[0].name
        })),
        subCommentCreateToggle: false
      }
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