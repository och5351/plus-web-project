<template>
	<div>
		<table class="table table-hover">
			<thead>
				<tr>
					<th scope="col"></th>
					<th scope="col">ID</th>
					<th scope="col">이름</th>
					<th scope="col">포인트</th>
					<th scope="col">등급</th>
				</tr>
			</thead>
			<tbody>
				<tr v-if="users === null">
					<td colspan="5" style="text-align: center;">데이터가 없습니다</td>
				</tr>
				<tr v-else v-for="(user, index) in users" :key="index">
					<th scope="row">
						<b-button style="margin-right: 10px;" variant="primary" @click="ViewUser(index)">수정</b-button>
						<b-button variant="danger" @click="UserDelete(index)">삭제</b-button>
					</th>
					<td>{{ user.userid }}</td>
					<td>{{ user.name }}</td>
					<td>{{ user.point }}</td>
					<td>{{ user.rating }}</td>
				</tr>
			</tbody>
		</table>

		<div>
			<b-modal v-model="edit" title="사용자 관리 시스템" @ok="UserModify">
				<div>
					<label>ID : </label>
					{{ user.userid }}
				</div>
				<div>
					<label>NAME : </label>
					{{ user.name }}
				</div>
				<div>
					<label>Point : </label>
					<input type="text" v-model="user.point" />
				</div>
				<div>
					<label>Rating : </label>
					<input type="text" v-model="user.rating" />
				</div>
			</b-modal>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AdminUser',
	data() {
		return {
			user_idx: this.$session.get('user_idx'),
			users: null,
			edit: false,
			user: {
				userid: null,
				name: null,
				point: 0,
				rating: null,
			},
		};
	},
	methods: {
		ViewUser(index) {
			this.edit = true;
			this.user.userid = this.users[index].userid;
			this.user.name = this.users[index].name;
			this.user.point = this.users[index].point;
			this.user.rating = this.users[index].rating;
		},
		UserModify() {
			if (confirm('정말로 수정하시겠습니까?')) {
				this.$http
					.post('/api/admin/userModify', {
						user: {
							userid: this.user.userid,
							point: this.user.point,
							rating: this.user.rating,
						},
					})
					.then(res => {
						location.reload();
						alert(res.data.message);
					});
			}
		},
		UserDelete(index) {
			if (confirm('정말로 삭제하시겠습니까?')) {
				this.$http
					.post('/api/admin/userDelete', {
						user: {
							userid: this.users[index].userid,
						},
					})
					.then(res => {
						location.reload();
						alert(res.data.message);
					});
			}
		},
	},
	created() {
		if (this.user_idx !== 1) {
			alert('잘못된 접근방법입니다');
			this.$router.go(-1);
		} else {
			this.$http.get(`/api/admin/users`).then(res => {
				this.users = res.data;
			});
		}
	},
};
</script>

<style scoped>
input {
	margin: 5px;
}
</style>
