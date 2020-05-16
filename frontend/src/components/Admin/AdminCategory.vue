<template>
	<div>
		<p>Admin Category</p>
	</div>
</template>

<script>
export default {
	name: 'AdminCategory',
	data() {
		return {
			user_idx: this.$session.get('user_idx'),
		};
	},
	created() {
		if (this.user_idx !== 1) {
			alert('잘못된 접근방법입니다');
			this.$router.go(-1);
		}
	},
};
</script>

<style scoped></style>
