<template>
  <div class="comment-list">
    <b-container class="justify-content-center"><hr><h5>댓글
      <b-button class="btn btn-sm btn-primary"><span class="fas fa-caret-down"></span></b-button>
    </h5></b-container>
    <div :key="item.commentid" v-for="item in comments">
      <CommentListItem :commentObj="item"></CommentListItem>
    </div>
  </div>
</template>

<script>
    import data from "@/data";
    import CommentListItem from "./CommentListItem";

    export default {
      name: 'CommentList',
      props: {
        contentId : Number,
      },
      data() {
        return {
          comments: data.Comment.filter(commentItem => {
            // returns primary comment's data of its article
            return commentItem.contentid === this.contentId;
          })
        }
      },
      components: {
        CommentListItem
      }
    }
</script>

<style>

</style>