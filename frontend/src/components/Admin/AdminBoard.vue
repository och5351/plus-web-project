<template>
	<div>
		<table class="table table-hover">
			<thead>
				<tr>
					<th scope="col"></th>
					<th scope="col">ID</th>
					<th scope="col">게시판명</th>
				</tr>
			</thead>
			<tbody>
				<tr v-if="boardList === null">
					<td colspan="3" style="text-align: center">데이터가 없습니다</td>
				</tr>
				<tr v-else v-for="(board, index) in boardList" :key="index">
					<th scope="row">
						<b-button style="margin-right: 10px" variant="primary" @click="ViewBoard(index)">수정</b-button>
						<b-button variant="danger" @click="BoardDelete(index)">삭제</b-button>
					</th>
					<td>{{ board.boardId }}</td>
					<td>{{ board.boardName }}</td>
				</tr>
			</tbody>
		</table>

		<div style="float: right">
			<b-button variant="info" v-b-modal.add>게시판 추가</b-button>
		</div>

		<div>
			<b-modal id="add" title="게시판 관리 시스템" @ok="BoardAdd">
				<div>
					<label>BoardName : </label>
					<input type="text" v-model="board.name" />
				</div>
			</b-modal>
		</div>

		<div>
			<b-modal v-model="edit" title="게시판 관리 시스템" @ok="BoardModify">
				<div>
					<label>ID : </label>
					{{ board.id }}
				</div>
				<div>
					<label>BoardName : </label>
					<input type="text" v-model="board.name" />
				</div>
			</b-modal>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AdminBoard',
	data() {
		return {
			boardList: null,
			edit: false,
			board: {
				id: null,
				name: null,
			},
		};
	},
	methods: {
		ViewBoard(index) {
			this.edit = true;
			this.board.id = this.boardList[index].boardId;
			this.board.name = this.boardList[index].boardName;
		},
		BoardAdd() {
			this.board.name = null;
			if (confirm('정말로 추가하시겠습니까?')) {
				this.$http
					.post('/api/admin/boardAdd', {
						board: {
							name: this.board.name,
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
		BoardModify() {
			if (confirm('정말로 수정하시겠습니까?')) {
				this.$http
					.post('/api/admin/boardModify', {
						board: {
							id: this.board.id,
							name: this.board.name,
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
		BoardDelete(index) {
			if (confirm('정말로 삭제하시겠습니까?')) {
				this.$http
					.post('/api/admin/boardDelete', {
						board: {
							id: this.boardList[index].boardId,
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
			this.$http.get(`/api/admin/boardList`).then(res => {
				this.boardList = res.data;
			});
		}
	},
};
</script>

<style scoped></style>
