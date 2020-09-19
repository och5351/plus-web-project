<template>
	<div>
		<br />
		<p>{{ this.$session.get('name') }}님 환영 합니다!</p>
		<FullCalendar
			defaultView="dayGridMonth"
			:plugins="calendarPlugins"
			:events="events"
			locale="ko"
			@dateClick="handleDateClick"
		/>
	</div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

export default {
	components: {
		FullCalendar, // make the <FullCalendar> tag available
	},
	data() {
		return {
			calendarPlugins: [interactionPlugin, dayGridPlugin],
			events: [],
			user: {
				user_idx: this.$session.get('user_idx'),
				name: this.$session.get('name'),
			},
		};
	},
	methods: {
		handleDateClick(arg) {
			var todayDate = this.$moment().format('YYYY-MM-DD'); //오늘 날짜
			var clickDate = this.$moment(arg.date).format('YYYY-MM-DD'); //클릭한 날짜
			var todayDone = this.events.some(d => d.start == todayDate); //이미 체크되어있는지

			if (todayDate != clickDate) {
				return alert('당일만 체크할 수 있습니다!'); //오늘 날짜에만 클릭 할 수 있게 한다.
			}
			if (todayDone) {
				return alert('이미 체크되었습니다!');
			} else {
				this.$http
					.post('/api/attendance/attCheck', {
						user: this.user,
					})
					.then(res => {
						if (res.data.success == true) {
							this.setAttPoint();
							alert(res.data.message);
							location.reload();
						}
					});
			}
		},
		// 출석 포인트
		setAttPoint() {
			this.$http.get(`/api/attendance/point/${this.$session.get('userid')}`).then();
		},
	},
	created() {
		//user_idx 전송 후 기록 받기
		this.$http
			.post('/api/attendance/attLog', {
				user: this.user,
			})
			.then(res => {
				this.events = res.data.attendance;
			});
	},
};
</script>
<style lang="scss">
@import '../css/Mypage.css';
</style>
