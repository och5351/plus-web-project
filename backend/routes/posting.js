var express = require("express");
var router = express.Router();
var tfScript = require("./../lib/TFScripts/tfFunction");

// mysql 선언
var dbConObj = require("../lib/db_config");
var conn = dbConObj.init();

//세션 확인
router.get("/Posting/sessCheck/:user_id", function (req, res) {
  var user_id = req.params.user_id;

  conn.query(
    "SELECT count(*) FROM capdi_users WHERE userid = ?",
    [user_id],
    function (err, row) {
      res.send(row);
    }
  );
});

//수정 2차 세션 확인
router.get("/Posting/sessCheckEdit?/:user_idx/:content_id", function (
  req,
  res
) {
  var user_idx = req.params.user_idx;
  var post_id = req.params.content_id;

  conn.query(
    "SELECT count(*), title, contents FROM post WHERE post_id=? AND user_idx=?",
    [post_id, user_idx],
    function (err, row) {
      res.send(row);
    }
  );
});

router.get("/pointUpdate/:user_id", function (req, res) {
  conn.query(
    "UPDATE capdi_users SET point = point + 50 WHERE userid = ?",
    [req.params.user_id],
    function (err, row) {
      res.send(row);
    }
  );
});

router.get("/pointDelete/:user_id", function (req, res) {
  conn.query(
    "UPDATE capdi_users SET point = point - 50 WHERE userid = ?",
    [req.params.user_id],
    function (err, row) {
      res.send(row);
    }
  );
});

//글쓰기
router.post("/Posting", function (req, res) {
  const temp = {
    board_id: req.body.posting.board_id,
    ca_id: req.body.posting.ca_id,
    user_id: req.body.posting.user_idx,
    user_idx: req.body.posting.user_idx,
    name: req.body.posting.name,
    contents: req.body.posting.contents,
    title: req.body.posting.title,
    write_date: req.body.posting.write_date,
    update_date: req.body.posting.update_date,
    hashTag: req.body.posting.hashTag,
  };

  conn.query(
    "INSERT INTO post(board_id, ca_id, user_idx, contents, title, write_date, update_date, hit, views) VALUES(?,?,?,?,?,?,?,?,?)",
    [
      temp.board_id,
      temp.ca_id,
      temp.user_idx,
      temp.contents,
      temp.title,
      temp.write_date,
      temp.update_date,
      0,
      0,
    ],
    function (err, row) {
      res.send(row);
    }
  );
  //tfScript.tfFunc(); //Tensorflow 삽입 완료
});

//업데이트
router.post("/updatePost", function (req, res) {
  const temp = {
    post_seq: req.body.posting.post_seq,
    board_id: req.body.posting.board_id,
    ca_id: req.body.posting.ca_id,
    name: req.body.posting.name,
    contents: req.body.posting.contents,
    title: req.body.posting.title,
    update_date: req.body.posting.update_date,
  };

  conn.query(
    "UPDATE post SET board_id = ?, ca_id = ?, user_idx = ?, contents = ?, title = ?, update_date = ? WHERE post_id = ?",
    [
      temp.board_id,
      temp.ca_id,
      temp.user_idx,
      temp.name,
      temp.contents,
      temp.title,
      temp.update_date,
      temp.post_seq,
    ],
    function (err, row) {
      res.send(row);
    }
  );
});

router.post("/deletePost/:categoryId", function (req, res) {
  conn.query(
    "DELETE FROM post WHERE post_id = ?",
    [req.params.categoryId],
    function (err, row) {
      res.send(row);
    }
  );
});

module.exports = router;
