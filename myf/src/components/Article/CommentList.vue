<template>
  <div class="comment-list">
    <b-container class="justify-content-center"><hr><h5>댓글
      <b-button id="btnOpenComments" v-on:click="toggleComments()" class="btn btn-sm btn-primary">
        <span id="span-btnOpenComments" class="fas fa-caret-up"></span>
      </b-button>
    </h5></b-container>
    <div :key="comment" v-for="comment in commentList">
      <CommentListItem :commentObj="comment"></CommentListItem>
    </div>
  </div>
</template>

<script>
  import CommentListItem from "./CommentListItem";
  import $ from "jquery";

  export default {
    name: 'CommentList',
    props: {
      contentId : Number,
    },
    methods: {
      toggleComments: function() {
        // Toggle Comments/ 댓글 토글
        $("#commentListItem").toggle();

        // Changes btn's arrow direction/ 화살표 방향 변경
        if ($("#commentListItem").is(":visible") == false) {
            $("#span-btnOpenComments").attr("class", "fa fa-caret-down");
        } else {
            $("#span-btnOpenComments").attr("class", "fa fa-caret-up");
        }
      }
    },
    data() {
      return {
        commentList: [],
      }
    },
    components: {
      CommentListItem
    },
    mounted () {
    // Temporary param '2' for now...
    this.$http.get(`/api/comments/get/${this.contentId}`).then((res) => {
      this.commentList = res.data;
    })
  }
}
</script>

<style>

</style>