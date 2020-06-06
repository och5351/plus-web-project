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
				<tr v-if="userList === null">
					<td colspan="5" style="text-align: center;">데이터가 없습니다</td>
				</tr>
				<tr v-else v-for="(user, index) in userList" :key="index">
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
					{{ user.id }}
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
			userList: null,
			edit: false,
			user: {
				id: null,
				name: null,
				point: 0,
				rating: null,
			},
		};
	},
	methods: {
		ViewUser(index) {
			this.edit = true;
			this.user.id = this.userList[index].userid;
			this.user.name = this.userList[index].name;
			this.user.point = this.userList[index].point;
			this.user.rating = this.userList[index].rating;
		},
		UserModify() {
			if (confirm('정말로 수정하시겠습니까?')) {
				this.$http
					.post('/api/admin/userModify', {
						user: {
							id: this.user.id,
							point: this.user.point,
							rating: this.user.rating,
						},
					})
					.then(res => {
						location.reload();
						alert(res.data.message);
					})
					.catch(function () {
						alert('알 수없는 오류가 발생 했습니다.');
					});
			}
		},
		UserDelete(index) {
			if (confirm('정말로 삭제하시겠습니까?')) {
				this.$http
					.post('/api/admin/userDelete', {
						user: {
							id: this.userList[index].userid,
						},
					})
					.then(res => {
						location.reload();
						alert(res.data.message);
					})
					.catch(function () {
						alert('알 수없는 오류가 발생 했습니다.');
					});
			}
		},
	},
	created() {
		if (this.user_idx !== 1) {
			alert('잘못된 접근방법입니다');
			this.$router.go(-1);
		} else {
			this.$http.get(`/api/admin/userList`).then(res => {
				this.userList = res.data;
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
