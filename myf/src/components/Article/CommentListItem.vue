<template>
<!--  댓글 -->
  <div class="comment-list-item">
    <b-container>
      <div class="comment-author justify-content-center">{{name}}</div>
      <div class="comment-context justify-content-center">{{commentObj.context}}</div>
      <div class="comment-created justify-content-center">{{commentObj.created_at}}</div>
<!--    대댓글 -->
      <template v-if="subCommentList.length > 0">
        <div class="comment-list-item-subcomment-list" :key="item.subcommentid" v-for="item in subCommentList">
          <b-containter>
            <div class="subcomment-author justify-content-center">{{item.user_name}}</div>
            <div class="subcomment-context justify-content-center">{{item.context}}</div>
            <div class="subcomment-created justify-content-center">{{item.created_at}}</div>
          </b-containter>
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
  .comment-list-item-subcomment-list {
    padding-left: 1rem;
  }
  .subcomment-author {
    clear: left;
    float: left;
    display: flex;
    flex-direction: row;
    width: 30%;
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
    width: 40%;
  }
</style>