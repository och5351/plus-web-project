<template>
<!--  댓글 -->
  <div id="commentListItem" class="comment-list-item">
    <b-container class="comment-box">
      <div class="row align-items-start" style="margin-bottom: 0.25em;">
        <div class="col-2">{{commentObj.name}}</div>
        <div class="col-6 text-left">{{commentObj.contents}}</div>
        <div class="col-3"><small>{{commentObj.write_date}}</small></div>
        <div class="col-1"><b-button class="btn btn-sm btn-primary" title="대댓글 작성" v-on:click.passive="openForm(commentObj.cm_id)"><span class="far fa-hand-point-left"></span></b-button></div>
      </div>
<!--    대댓글 -->
      <!-- <template v-if="subCommentList.length > 0"> -->
        <div class="comment-list-item-subcomment-list" :key="subcomment.cm_id" v-for="subcomment in subCommentList">
          <b-container class="subcomment-box">
            <div class="row align-items-start">
              <div class="col-2"><small class="far fa-hand-point-right" style="margin-right: 1em;"></small>{{subcomment.name}}</div>
              <div class="col-6 text-left">{{subcomment.contents}}</div>
              <div class="col-3"><small>{{subcomment.write_date}}</small></div>
              <div class="col-1"></div>
            </div>
          </b-container>
        </div>
      <!-- </template> -->
    </b-container>
    <div class="form-group sub-comment-form-group" :id="'subCommentForm' + commentObj.cm_id">
      <div class="row align-items-start">
        <div class="col-2"></div>
        <input type="text" class="form-control col-7" name="txtComment" :id="'commentArticle' + commentObj.cm_id" placeholder="대댓글 내용" v-on:keyup.enter.passive="addSubComment(commentObj.cm_id)">
        <div class="col-1"></div>
        <input type="submit" class="btn btn-sm btn-primary col-1" value="대댓글 작성" v-on:click.passive="addSubComment(commentObj.cm_id)">
        <div class="col-1"></div>
      </div>
    </div>
    <hr>
  </div>
</template>
<script>
  import $ from "jquery";

  export default {
    name: "CommentListItem",
    props: {
      commentObj: Object
    },
    components: {

    },
    data() {
      return {
        subCommentList: Object,
      }
    },
    mounted () {
      this.$http.get(`/api/comments/sub/${this.commentObj.cm_id}`).then((res) => {
        this.subCommentList = res.data;
      });
      $('.sub-comment-form-group').hide();
    },
    methods: {
      // Opening subcomment form / 대댓글 창 여닫기
      openForm: function(cm_id) {
        $('.sub-comment-form-group').slideUp();
        $('#subCommentForm'+cm_id).slideDown();
        $('#commentArticle'+cm_id).focus();
      },
      // Add subcomment / 대댓글 작성
      addSubComment: function(cm_id) {
        var contentId = this.$route.params.contentId;
        var comment = $("input#commentArticle"+cm_id).val().trim();

        // No empty comments! / 댓글 내용 입력확인
        if (comment == '') {
          alert("[오류]\n댓글에 입력할 내용을 작성해주시길 바랍니다!");
        }

        // Clear input text / 입력창 지우기
        $("input#commentArticle"+cm_id).val('');
        $("input#commentArticle"+cm_id).blur();

        // // Before send post data, must to check sessions / POST 전달 이전에 반드시 세션체크 할 것
        this.$http.post('/api/comments/addSub', {
          data: {
            post_id: contentId,
            cm_id: cm_id,
            user_idx: 1,  // Get attribute from session / 세션에서 받아오기
            contents: comment
          }
        })

        // Reload subcomments / 대댓글 다시 불러오기
        this.$http.get(`/api/comments/sub/${this.commentObj.cm_id}`).then((res) => {
          this.subCommentList = res.data;
        });
      }
    }
  }
</script>

<style scoped>
</style>