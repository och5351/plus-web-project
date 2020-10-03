const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt-nodejs');

// mysql 선언
var dbConObj = require('../lib/db_config');
var conn = dbConObj.init();

router.post('/google', (req, res, next) => {
	const user = {
		email: req.body.email,
	}
	
	conn.query(
		"SELECT user_idx, userid, name FROM capdi_users WHERE userid = ?",
		[user.email],
		function (err, row) {
			if (row[0] === undefined) {
				// 아이디 존재하지 않는 경우
				res.json({
					success: false,
					message: '해당 SNS와 연동된 계정이 없습니다 회원가입을 진행합니다'
				})
			}
			else {
				res.json({
					success: true,
					message: '로그인 성공!',
					user_idx: row[0].user_idx,
					userid: row[0].userid,
					name: row[0].name,
				});
			}
		}
	)
});

router.post('/googleSignUp', (req, res, next) => {
	const salt = bcrypt.genSaltSync();

	const user = {
		userid: req.body.email,
		name: req.body.name,
		password: encryptedPassword = bcrypt.hashSync(req.body.password, salt),
	}

	conn.query(
		"INSERT INTO capdi_users (userid, name, password) VALUES (?, ?, ?)",
		[user.userid, user.name, user.password],
		function (err, row) {
			if (err) throw err;
		}
	)

	res.json({
		success: true,
		message: '구글 계정을 통한 회원가입이 완료되었습니다!\n재로그인 해주세요!'
	});
})

module.exports = router;