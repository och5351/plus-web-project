<template>
    <div>
        <CategoryList :caName="caName"/>
    </div>
</template>

<script>

import CategoryList from '../components/Board/CategoryList'

export default {
    data () {
        return {
            caName : this.$route.params.category_name
        }
    },
    components: {
        CategoryList
    },
}

</script>
