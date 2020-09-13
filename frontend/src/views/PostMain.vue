<template>
	<div id="PostingWrap">
		<!-- <editor /> -->
		<contentsBody />
	</div>
</template>

<script>
// import editor from '../components/Post/PostEditor';
import contentsBody from '../components/Post/PostBody';

export default {
	name: 'postingMain',
	components: {
		// editor,
		contentsBody,
	},
};
</script>
<style lang="scss"></style>
