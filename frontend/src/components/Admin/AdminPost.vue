<template>
	<div>
		<table class="table table-hover">
			<thead>
				<tr>
					<th scope="col"></th>
					<th scope="col">ID</th>
					<th scope="col">타입</th>
					<th scope="col">제목</th>
					<th scope="col">글쓴이</th>
					<th scope="col">작성일</th>
					<th scope="col">조회수</th>
				</tr>
			</thead>
			<tbody>
				<tr v-if="postList === null">
					<td colspan="7" style="text-align: center">데이터가 없습니다</td>
				</tr>
				<tr v-else v-for="(post, index) in postList" :key="index">
					<th scope="row">
						<b-button variant="danger" @click="postDelete(index)">삭제</b-button>
					</th>
					<td>{{ post.post_id }}</td>
					<td>{{ post.type }}</td>
					<td>{{ post.title }}</td>
					<td>{{ post.writer }}</td>
					<td>{{ $moment(post.write_date).format('YYYY-MM-DD') }}</td>
					<td>{{ post.views }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: 'AdminUser',
	data() {
		return {
			postList: null,
		};
	},
	methods: {
		postDelete(index) {
			if (confirm('정말로 삭제하시겠습니까?')) {
				this.$http
					.post('/api/admin/postDelete', {
						post: {
							id: this.postList[index].post_id,
						},
					})
					.then(res => {
						location.reload();
						alert(res.data.message);
					})
					.catch(() => {
						alert('알 수없는 오류가 발생 했습니다.');
					});
			}
		},
	},
	created() {
		if (this.$session.get('rating') !== '관리자') {
			alert('잘못된 접근방법입니다');
			this.$router.push('/');
		} else {
			this.$http.get(`/api/admin/postList`).then(res => {
				this.postList = res.data;
			});
		}
	},
};
</script>
