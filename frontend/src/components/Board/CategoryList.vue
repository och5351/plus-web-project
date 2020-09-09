<template>
	<div class="container">
		<div>
			<category-head :categoryName="categoryName"></category-head>
		</div>

		<div style="padding: 20px; text-align: center;">
			<table class="table table-hover">
				<thead>
					<tr>
						<th scope="col">번호</th>
						<th scope="col">제목</th>
						<th scope="col">작성자</th>
						<th scope="col">조회수</th>
					</tr>
				</thead>
				<tbody>
					<tr v-if="boardList === null">
						<td colspan="4" style="text-align: center;">데이터가 없습니다</td>
					</tr>
					<tr v-else v-for="(board, bIdx) in displayedPosts" :key="bIdx" @click="detail(board.post_id)">
						<th scope="row">{{ board.post_id }}</th>
						<td style="cursor: pointer;">{{ board.title }}</td>
						<td>
							<img alt="관리자" width="16" height="16" src="/css/rating.png" />
							{{ board.name }}
						</td>
						<td>{{ board.views }}</td>
					</tr>
				</tbody>
			</table>

			<div id="pageStyle">
				<nav aria-label="Page navigation">
					<ul class="pagination">
						<li class="page-item">
							<button type="button" class="page-link" v-if="pageNum !== 1" @click="pageNum--">이전</button>
						</li>
						<li class="page-item">
							<button
								type="button"
								class="page-link"
								v-for="pageNumber in totalPage.slice(pageNum - 1, pageNum + 4)"
								:key="pageNumber"
								@click="pageNum = pageNumber"
							>
								{{ pageNumber }}
							</button>
						</li>
						<li class="page-item">
							<button type="button" @click="pageNum++" v-if="pageNum < totalPage.length" class="page-link">
								다음
							</button>
						</li>
					</ul>
				</nav>
			</div>

			<button v-if="this.$session.get('user_idx')" type="button" class="float-right btn btn-success" @click="post()">
				글쓰기
			</button>
		</div>

		<div>
			<category-footer></category-footer>
		</div>
	</div>
</template>

<script>
import store from '../../store/store';
import CategoryHead from './CategoryHead';
import CategoryFooter from './CategoryFooter';

export default {
	store,
	props: {
		categoryName: String,
	},
	data() {
		return {
			pageNum: store.getters.getPageNum,
			pageSize: 10,
			totalPage: [],
			categoryId: null,
			boardList: null,
		};
	},
	components: {
		CategoryHead,
		CategoryFooter,
	},
	created() {
		this.getPosts();
		store.commit('setCategory', this.categoryName);
	},
	computed: {
		displayedPosts() {
			return this.paginate();
		},
	},
	watch: {
		boardList() {
			this.setPages();
		},
		pageNum() {
			store.commit('setPageNum', this.pageNum);
		},
	},
	methods: {
		getPosts() {
			this.$http
				.get(`/api/board/${this.categoryName}`)
				.then(res => {
					if (res.data.length === 0) {
						this.category();
						return;
					}
					this.boardList = res.data;
					this.categoryId = res.data[0].ca_id;
				})
				.catch(() => {
					alert('알 수 없는 오류 입니다.');
				});
		},
		setPages() {
			let numberOfPages = Math.ceil(this.boardList.length / this.pageSize);
			for (let index = 1; index <= numberOfPages; index++) {
				this.totalPage.push(index);
			}
		},
		paginate() {
			let page = this.pageNum;
			let pageSize = this.pageSize;
			let from = page * pageSize - pageSize;
			let to = page * pageSize;
			return this.boardList.slice(from, to);
		},
		category() {
			this.$http
				.get(`/api/board/info/${this.categoryName}`)
				.then(res => {
					this.categoryId = res.data[0].ca_id;
				})
				.catch(() => {
					alert('알 수 없는 오류 입니다.');
				});
		},
		detail(seq) {
			this.$http.post(`/api/board/views/${seq}`).then();
			this.$router.push({
				path: `/article/${seq}/`,
				params: { categoryName: this.categoryName, categoryId: this.categoryId },
			});
		},
		post() {
			this.$router.push({
				name: 'Posting',
				params: { board_id: 1, categoryName: this.categoryName, categoryId: this.categoryId, att: 'post' },
			});
		},
	},
};
</script>

<style>
#pageStyle {
	margin: 0 auto;
}

button.page-link {
	display: inline-block;
}

button.page-link {
	font-size: 20px;
	color: #29b3ed;
	font-weight: 500;
}
</style>
