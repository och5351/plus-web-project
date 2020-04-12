<template>
<!--  댓글 -->
  <div id="commentListItem" class="comment-list-item">
    <b-container class="comment-box">
      <div class="row align-items-start">
        <div class="col-2">{{commentObj.name}}</div>
        <div class="col-6 text-left">{{commentObj.contents}}</div>
        <div class="col-3"><small>{{commentObj.write_date}}</small></div>
        <div class="col-1"><b-button class="btn btn-sm btn-primary" title="대댓글 작성"><span class="far fa-hand-point-left"></span></b-button></div>
      </div>
<!--    대댓글 -->
      <template v-if="String(subCommentList[0]).length > 0">
        <div class="comment-list-item-subcomment-list" :key="item.cm_id" v-for="item in subCommentList[0]">
          <b-container class="subcomment-box">
            <div class="row align-items-start">
              <div class="col-2"><small class="far fa-hand-point-right" style="margin-right: 1em;"></small>{{item.name}}</div>
              <div class="col-6 text-left">{{item.contents}}</div>
              <div class="col-3"><small>{{item.write_date}}</small></div>
              <div class="col-1"></div>
            </div>
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
      this.$http.get(`/api/comments/sub/${this.commentObj.cm_id}`).then((res) => {
        this.subCommentList.push(res.data);
      })
    }
  }
</script>

<style scoped>
</style>