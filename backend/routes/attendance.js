var express = require("express");
var router = express.Router();

// mysql 선언
var dbConObj = require("../lib/db_config");
var conn = dbConObj.init();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// 출석 체크
router.post("/attCheck", function (req, res) {
  const user = req.body.user;
  conn.query(
    // DB 서버 시간 수정 전 까지 임시로 사용할 쿼리
    "INSERT INTO attendance (user_idx, name, date) VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 9 HOUR))",
    [user.user_idx, user.name],
    function (err, row) {
      if (err) {
        console.log(err);
      } else {
        console.log("attChechk success!");
        res.json({
          success: true,
          message: "출석 체크되었습니다!",
        });
      }
    }
  );
});

//출석부 페이지
router.post("/attLog", function (req, res) {
  const user = req.body.user;
  conn.query(
    'select date_format(date, "%Y-%m-%d") as start, title from attendance where user_idx = ?',
    [user.user_idx],
    function (err, row) {
      if (err) {
        console.log(err);
      } else {
        res.json({
          attendance: row,
        });
      }
    }
  );
});

//출석 포인트
router.get('/point/:user_id', function (req, res) {
  conn.query('UPDATE capdi_users SET point = point + 1000 WHERE userid = ?', [req.params.user_id], function (err, row) {
    if (err) {
      console.log(err);
    } else {
      res.send(row);
    }
  });
})

module.exports = router;
