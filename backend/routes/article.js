var express = require("express");
var router = express.Router();

// MongoDB Models
const Post = require('../models/post');
const File = require('../models/file');


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
    'SELECT p.post_id, p.board_id, p.ca_id, p.user_idx, u.name, u.rating, p.contents, p.title, p.hit, date_format(p.write_date, "%y-%m-%d %a %T") as write_date FROM post p, capdi_users u WHERE p.post_id = ? AND p.user_idx = u.user_idx',
    [articleID],
    function (err, row) {
      if (row != null) {
        // 파일이 존재하는 경우 파일이름을 row에 포함한다
        File.findOne({post_id: row[0].post_id}, (err, result) => {
          if (result !== null) {
            row[0].filename = result.filename;
            row[0].originalname = result.originalname;
          }

          // MongoDB에서 본문 부분만 읽어들여 row에 추가한다
          Post.findOne({post_id: row[0].post_id}, (err, result) => {
            // 아직 MongoDB에 등록되지 않은(MySQL시절) 게시글이라면
            // 읽어온 MySQL게시글로 MongoDB 데이터를 생성 후, 구 MySQL 게시글을 반환한다
            if (result === null) {
              Post.create({post_id: row[0].post_id, contents: row[0].contents})
              return res.send(row);
            }
            row[0].contents = result.contents; // MongoDB에서 본문 부분만 읽어들여 row에 추가한다
            res.send(row);
          });
        });
      }
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
