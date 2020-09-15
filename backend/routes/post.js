const express = require("express");
const router = express.Router();
const tfScript = require("./../lib/TFScripts/tfFunction");

// MongoDB Post Model
const Post = require("../models/post");

// mysql 선언
const dbConObj = require("../lib/db_config");
const conn = dbConObj.init();

//세션 확인
router.get("/sessCheck/:user_id", function (req, res) {
  const user_id = req.params.user_id;

  conn.query(
    "SELECT count(*) FROM capdi_users WHERE userid = ?",
    [user_id],
    function (err, row) {
      res.send(row);
    }
  );
});

//수정 2차 세션 확인
router.get("/sessCheckEdit?/:user_idx/:content_id", function (req, res) {
  const user_idx = req.params.user_idx;
  const post_id = req.params.content_id;

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

router.get("/categoryName/:categoryId", function (req, res) {
  conn.query(
    "SELECT ca_name FROM category WHERE ca_id = ?",
    [req.params.categoryId],
    function (err, row) {
      res.send(row);
    }
  );
});

//글쓰기
router.post("/insertPost", function (req, res) {
  const post = req.body.posting;

  Post.create({
    title: post.title,
    content: post.contents,
  }, (error) => {
    console.log(error);
  });
  

  // TODO: Convert in NoSQL
  conn.query(
    "INSERT INTO post(board_id, ca_id, user_idx, contents, title, write_date, update_date, hit, views) VALUES(?,?,?,?,?,?,?,?,?)",
    [
      post.board_id,
      post.ca_id,
      post.user_idx,
      post.contents,
      post.title,
      post.write_date,
      post.update_date,
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
  const post = req.body.posting;

  conn.query(
    "UPDATE post SET board_id = ?, ca_id = ?, user_idx = ?, contents = ?, title = ?, update_date = ? WHERE post_id = ?",
    [
      post.board_id,
      post.ca_id,
      post.user_idx,
      post.contents,
      post.title,
      post.update_date,
      post.post_seq,
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
