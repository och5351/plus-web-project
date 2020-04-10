<template>
<!--  댓글 -->
  <div id="commentListItem" class="comment-list-item">
    <b-container class="comment-box">
      <div class="row">
        <div class="comment-author justify-content-center col-sm">{{commentObj.name}}</div>
        <div class="comment-context justify-content-start col-lg">{{commentObj.contents}}</div>
        <div class="comment-created justify-content-center col-sm">{{commentObj.write_date}}</div>
      </div>
<!--    대댓글 -->
      <template v-if="String(subCommentList[0]).length > 0">
        <div class="comment-list-item-subcomment-list" :key="item.cm_seq" v-for="item in subCommentList[0]">
          <b-container class="subcomment-box">
            <div class="row">
              <div class="subcomment-author justify-content-center col-sm"><i class="far fa-hand-point-right" style="margin-right: 1em;"></i>{{item.name}}</div>
              <div class="subcomment-context justify-content-start col-lg">{{item.contents}}</div>
              <div class="subcomment-created justify-content-center col-sm">{{item.write_date}}</div>
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
      this.$http.get(`/api/comments/sub/${this.commentObj.cm_seq}`).then((res) => {
        this.subCommentList.push(res.data);
      })
    }
  }
</script>

<style scoped>
</style>