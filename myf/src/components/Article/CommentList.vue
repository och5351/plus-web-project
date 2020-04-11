<template>
  <div class="comment-list">
    <b-container><hr><h5>댓글
      <b-button id="btnOpenComments" v-on:click="toggleComments()" class="btn btn-sm btn-primary" title="댓글 닫기">
        <span id="span-btnOpenComments" class="fas fa-caret-up"></span>
      </b-button>
      &nbsp;
    </h5></b-container>
    <div id="commentSection" :key="comment.cm_id" v-for="comment in commentList">
      <CommentListItem :commentObj="comment"></CommentListItem>
    </div>
    <div class="form-group" id="commentSection" >
      <br><hr>
      <div class="row">
        <input type="text" class="form-control col-9" name="txtComment" id="commentArticle" placeholder="댓글 내용" v-on:keyup.enter.passive="addComment()">
        <!-- Spacer...! -->
        <div class="col-1"></div>
        <input type="submit" class="btn btn-primary col-2" value="댓글 작성" v-on:click.passive="addComment()">
      </div>
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
        $("[id='commentSection']").toggle();

        // Changes btn's arrow direction/ 화살표 방향 변경
        if ($("[id='commentSection']").is(":visible") == false) {
            $("#span-btnOpenComments").attr("class", "fa fa-caret-down");
            $("#btnOpenComments").attr("title", "댓글 열기");
        } else {
            $("#span-btnOpenComments").attr("class", "fa fa-caret-up");
            $("#btnOpenComments").attr("title", "댓글 닫기");
        }
      },
      addComment: function() {
        var contentId = this.$route.params.contentId;
        var comment = $("input#commentArticle").val().trim();

        // No empty comments! / 댓글 내용 입력확인
        if (comment == '') {
          alert("[오류]\n댓글에 입력할 내용을 작성해주시길 바랍니다!");
        }

        // Clear input text / 입력창 지우기
        $("input#commentArticle").val('');
        $("input#commentArticle").blur();
        console.log(contentId, comment);
      }
    },
    data() {
      return {
        commentList: Object,
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