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
				<tr v-if="boards === null">
					<td colspan="3" style="text-align: center;">데이터가 없습니다</td>
				</tr>
				<tr v-else v-for="(board, index) in boards" :key="index">
					<th scope="row">
						<b-button style="margin-right: 10px;" variant="primary" @click="ViewBoard(index)">수정</b-button>
						<b-button variant="danger" @click="BoardDelete(index)">삭제</b-button>
					</th>
					<td>{{ board.boardId }}</td>
					<td>{{ board.boardName }}</td>
				</tr>
			</tbody>
		</table>

		<div style="float: right;">
			<b-button variant="info" v-b-modal.add>게시판 추가</b-button>
		</div>

		<div>
			<b-modal id="add" title="게시판 관리 시스템" @ok="BoardAdd">
				<div>
					<label>BoardName : </label>
					<input type="text" v-model="boardAction.boardName" />
				</div>
			</b-modal>
		</div>

		<div>
			<b-modal v-model="edit" title="게시판 관리 시스템" @ok="BoardModify">
				<div>
					<label>ID : </label>
					{{ boardAction.boardId }}
				</div>
				<div>
					<label>BoardName : </label>
					<input type="text" v-model="boardAction.boardName" />
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
			user_idx: this.$session.get('user_idx'),
			boards: null,
			edit: false,
			boardAction: {
				boardId: null,
				boardName: null,
			},
		};
	},
	methods: {
		ViewBoard(index) {
			this.edit = true;
			this.boardAction.boardId = this.boards[index].boardId;
			this.boardAction.boardName = this.boards[index].boardName;
		},
		BoardAdd() {
			if (confirm('정말로 추가하시겠습니까?')) {
				this.$http
					.post('/api/admin/boardAdd', {
						boardAction: {
							boardName: this.boardAction.boardName,
						},
					})
					.then(res => {
						location.reload();
						console.log(res);
					});
			}
		},
		BoardModify() {
			if (confirm('정말로 수정하시겠습니까?')) {
				this.$http
					.post('/api/admin/boardModify', {
						boardAction: {
							boardId: this.boardAction.boardId,
							boardName: this.boardAction.boardName,
						},
					})
					.then(res => {
						location.reload();
						console.log(res);
					});
			}
		},
		BoardDelete(index) {
			if (confirm('정말로 삭제하시겠습니까?')) {
				this.$http
					.post('/api/admin/boardDelete', {
						boardAction: {
							boardId: this.boards[index].boardId,
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
			this.$http.get(`/api/admin/board`).then(res => {
				this.boards = res.data;
			});
		}
	},
};
</script>

<style scoped></style>
