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
				<tr v-if="categoryList === null">
					<td colspan="3" style="text-align: center">데이터가 없습니다</td>
				</tr>
				<tr v-else v-for="(category, index) in categoryList" :key="index">
					<th scope="row">
						<b-button style="margin-right: 10px" variant="primary" @click="ViewCategory(index)">수정</b-button>
						<b-button variant="danger" @click="CategoryDelete(index)">삭제</b-button>
					</th>
					<td>{{ category.categoryId }}</td>
					<td>{{ category.categoryName }}</td>
				</tr>
			</tbody>
		</table>

		<div style="float: right">
			<b-button variant="info" v-b-modal.add>카테고리 추가</b-button>
		</div>

		<div>
			<b-modal id="add" title="카테고리 관리 시스템" @ok="CategoryAdd">
				<div>
					<label>CategoryName : </label>
					<input type="text" v-model="category.name" />
				</div>
			</b-modal>
		</div>

		<div>
			<b-modal v-model="edit" title="카테고리 관리 시스템" @ok="CategoryModify">
				<div>
					<label>ID : </label>
					{{ category.id }}
				</div>
				<div>
					<label>CategoryName : </label>
					<input type="text" v-model="category.name" />
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
			categoryList: null,
			edit: false,
			category: {
				id: null,
				name: null,
			},
		};
	},
	methods: {
		ViewCategory(index) {
			this.edit = true;
			this.category.id = this.categoryList[index].categoryId;
			this.category.name = this.categoryList[index].categoryName;
		},
		CategoryAdd() {
			this.category.name = null;
			if (confirm('정말로 추가하시겠습니까?')) {
				this.$http
					.post('/api/admin/categoryAdd', {
						category: {
							name: this.category.name,
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
		CategoryModify() {
			if (confirm('정말로 수정하시겠습니까?')) {
				this.$http
					.post('/api/admin/categoryModify', {
						category: {
							id: this.category.id,
							name: this.category.name,
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
		CategoryDelete(index) {
			if (confirm('정말로 삭제하시겠습니까?')) {
				this.$http
					.post('/api/admin/categoryDelete', {
						category: {
							id: this.categoryList[index].categoryId,
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
			this.$http.get(`/api/admin/categoryList`).then(res => {
				this.categoryList = res.data;
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
