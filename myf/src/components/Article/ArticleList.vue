<template>
    <div class="articlelist">
        <b-container>
            {{contentId}}
        </b-container>
        <b-container>
            {{title}}
        </b-container>
        <b-container>
            {{context}}
        </b-container>
        <b-container>
            {{user}}
        </b-container>
        <b-container>
            {{created}}
        </b-container>
    </div>
</template>

<script>
import data from "@/data"
export default {
    name: 'ArticleList',
    data() {
        // Get contentID from URL parameters
        const contentId = Number(this.$route.params.contentId);
        const contentData = data.Content.filter(
            contentItem => contentItem.contentid === contentId
        )[0];
        return {
            // return content's data
            contentId: contentId,
            title: contentData.title,
            context: contentData.context,
            user: data.User.filter(item => item.userid === contentData.userid)[0].name,
            created: contentData.created_at
        }
    }
}
</script>

<style>

</style>