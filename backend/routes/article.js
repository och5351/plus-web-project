var express = require("express");
var router = express.Router();

// mysql 선언
var dbConObj = require("../lib/db_config");
var conn = dbConObj.init();

/* GET comments listing. */
router.get("/", function (req, res) {
  res.send("respond with a resource");
});

// Get Article, param should be an article's ID
// 본문 읽어오기 인자는 문서 고유 ID
router.get("/get/:articleID", function (req, res, next) {
  var articleID = req.params.articleID;

  conn.query(
    'SELECT p.post_id, p.board_id, p.ca_id, p.user_idx, u.name, p.contents, p.title, p.hit, date_format(p.write_date, "%y-%m-%d %a %T") as write_date FROM post p, capdi_users u WHERE p.post_id = ? AND p.user_idx = u.user_idx',
    [articleID],
    function (err, row) {
      res.send(row);
    }
  );
});

// Load notice / 공지사항 불러오기
router.get("/notice", function (req, res, next) {
  var ca_id = 6; // 공지사항 카테고리 번호
  var limit = 7;

  conn.query(
    "SELECT post_id, title from post WHERE ca_id=? ORDER BY write_date DESC LIMIT ?",
    [ca_id, limit],
    function (err, row) {
      res.send(row);
    }
  );
});

// Load recently updated posts / 최신글 불러오기
router.get("/new", function (req, res, next) {
  var limit = 7;

  conn.query(
    "SELECT post_id, title from post ORDER BY write_date DESC LIMIT ?",
    [limit],
    function (err, row) {
      res.send(row);
    }
  );
});

// Load hot posts / 인기글 불러오기
router.get("/hot", function (req, res, next) {
  var limit = 7;

  //TODO: 쿼리 수정
  conn.query(
    "SELECT post_id, title, TIMESTAMPDIFF(WEEK, write_date, NOW()) as week from post ORDER BY hit/views DESC, week LIMIT ?",
    [limit],
    function (err, row) {
      res.send(row);
    }
  );
});

// Hits / 추천
router.post("/hit/:articleID", function (req, res, next) {
  var articleID = req.params.articleID;

  conn.query(
    "UPDATE post SET hit=hit+1 WHERE post_id=?",
    [articleID],
    function (err, row) {
      res.send("추천했습니다");
    }
  );
});

module.exports = router;
