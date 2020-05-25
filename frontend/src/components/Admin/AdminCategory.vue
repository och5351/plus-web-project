<template>
	<div>
		<table class="table table-hover">
			<thead>
				<tr>
					<th scope="col"></th>
					<th scope="col">ID</th>
					<th scope="col">카테고리명</th>
				</tr>
			</thead>
			<tbody>
				<tr v-if="categorys === null">
					<td colspan="3" style="text-align: center;">데이터가 없습니다</td>
				</tr>
				<tr v-else v-for="(category, index) in categorys" :key="index">
					<th scope="row">
						<b-button style="margin-right: 10px;" variant="primary" @click="ViewCategory(index)">수정</b-button>
						<b-button variant="danger" @click="CategoryDelete(index)">삭제</b-button>
					</th>
					<td>{{ category.categoryId }}</td>
					<td>{{ category.categoryName }}</td>
				</tr>
			</tbody>
		</table>

		<div style="float: right;">
			<b-button variant="info" v-b-modal.add>카테고리 추가</b-button>
		</div>

		<div>
			<b-modal id="add" title="카테고리 관리 시스템" @ok="CategoryAdd">
				<div>
					<label>CategoryName : </label>
					<input type="text" v-model="category.categoryName" />
				</div>
			</b-modal>
		</div>

		<div>
			<b-modal v-model="edit" title="카테고리 관리 시스템" @ok="CategoryModify">
				<div>
					<label>ID : </label>
					{{ category.categoryId }}
				</div>
				<div>
					<label>CategoryName : </label>
					<input type="text" v-model="category.categoryName" />
				</div>
			</b-modal>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AdminCategory',
	data() {
		return {
			user_idx: this.$session.get('user_idx'),
			categorys: null,
			edit: false,
			category: {
				categoryId: null,
				categoryName: null,
			},
		};
	},
	methods: {
		ViewCategory(index) {
			this.edit = true;
			this.category.categoryId = this.categorys[index].categoryId;
			this.category.categoryName = this.categorys[index].categoryName;
		},
		CategoryAdd() {
			if (confirm('정말로 추가하시겠습니까?')) {
				this.$http
					.post('/api/admin/categoryAdd', {
						category: {
							categoryName: this.category.categoryName,
						},
					})
					.then(res => {
						location.reload();
						console.log(res);
					});
			}
		},
		CategoryModify() {
			if (confirm('정말로 수정하시겠습니까?')) {
				this.$http
					.post('/api/admin/categoryModify', {
						category: {
							categoryId: this.category.categoryId,
							categoryName: this.category.categoryName,
						},
					})
					.then(res => {
						location.reload();
						console.log(res);
					});
			}
		},
		CategoryDelete(index) {
			if (confirm('정말로 삭제하시겠습니까?')) {
				this.$http
					.post('/api/admin/categoryDelete', {
						category: {
							categoryId: this.categorys[index].categoryId,
						},
					})
					.then(res => {
						location.reload();
						console.log(res);
					});
			}
		},
	},
	created() {
		if (this.user_idx !== 1) {
			alert('잘못된 접근방법입니다');
			this.$router.go(-1);
		} else {
			this.$http.get(`/api/admin/category`).then(res => {
				this.categorys = res.data;
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
