<template>
    <div>
        <CategoryList :categoryName="categoryName"/>
    </div>
</template>

<script>

import CategoryList from '../components/Board/CategoryList'

export default {
    data () {
        return {
            categoryName : this.$route.params.categoryName
        }
    },
    components: {
        CategoryList
    },
}

</script>
