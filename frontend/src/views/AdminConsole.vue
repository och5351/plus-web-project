<template>
	<div style="margin: 10px;">
		<div v-if="systemMenu === 'user'">
			<admin-user></admin-user>
		</div>
		<div v-else-if="systemMenu === 'board'">
			<admin-board></admin-board>
		</div>
		<div v-else>
			<admin-category></admin-category>
		</div>
	</div>
</template>

<script>
import AdminUser from '../components/Admin/AdminUser';
import AdminBoard from '../components/Admin/AdminBoard';
import AdminCategory from '../components/Admin/AdminCategory';

export default {
	components: { AdminCategory, AdminBoard, AdminUser },
	data() {
		return {
			systemMenu: this.$route.params.systemMenu,
		};
	},
};
</script>
