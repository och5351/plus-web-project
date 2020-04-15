<template>
    <div>
        <BoardList ca_id="free"/>
    </div>
</template>

<script>

import BoardList from '../components/Board/List'

export default {
    name : 'Board',
    components: {
        BoardList
    }
}

</script>
