const express = require("express");
const router = express.Router();

// mysql 선언
const dbConObj = require("../lib/db_config");
const conn = dbConObj.init();

router.get("/users", function (req, res) {
  conn.query("SELECT * FROM capdi_users", function (err, row) {
    res.send(row);
  });
});

router.post("/userModify", function (req, res) {
  const user = req.body.user;
  conn.query(
    "UPDATE capdi_users SET point = ?, rating = ? WHERE userid = ?",
    [user.point, user.rating, user.userid],
    function (err, row) {
      res.json({ message: "성공적으로 수정하였습니다." });
    }
  );
});

router.post("/userDelete", function (req, res) {
  conn.query(
    "DELETE FROM capdi_users WHERE userid = ?",
    [req.body.user.userid],
    function (err, row) {
      res.json({ message: "성공적으로 삭제하였습니다." });
    }
  );
});

router.get("/category", function (req, res) {
  conn.query(
    "SELECT ca_id as categoryId, ca_name as categoryName FROM category order by ca_id",
    function (err, row) {
      res.send(row);
    }
  );
});

router.post("/categoryAdd", function (req, res) {
  conn.query(
    "INSERT INTO category (ca_name) values (?)",
    [req.body.category.categoryName],
    function (err, row) {
      res.json({ message: "성공적으로 추가하였습니다." });
    }
  );
});

router.post("/categoryModify", function (req, res) {
  conn.query(
    "UPDATE category SET ca_name = ? WHERE ca_id = ?",
    [req.body.category.categoryName, req.body.category.categoryId],
    function (err, row) {
      res.json({ message: "성공적으로 수정하였습니다." });
    }
  );
});

router.post("/categoryDelete", function (req, res) {
  conn.query(
    "DELETE FROM category WHERE ca_id = ?",
    [req.body.category.categoryId],
    function (err, row) {
      res.json({ message: "성공적으로 삭제하였습니다." });
    }
  );
});

router.get("/board", function (req, res) {
  conn.query(
    "SELECT board_id as boardId, board_name as boardName FROM board",
    function (err, row) {
      res.send(row);
    }
  );
});

router.post("/boardAdd", function (req, res) {
  conn.query(
    "INSERT INTO board (board_name) values (?)",
    [req.body.boardAction.boardName],
    function (err, row) {
      res.json({ message: "성공적으로 추가하였습니다." });
    }
  );
});

router.post("/boardModify", function (req, res) {
  conn.query(
    "UPDATE board SET board_name = ? WHERE board_id = ?",
    [req.body.boardAction.boardName, req.body.boardAction.boardId],
    function (err, row) {
      res.json({ message: "성공적으로 수정하였습니다." });
    }
  );
});

router.post("/boardDelete", function (req, res) {
  conn.query(
    "DELETE FROM board WHERE board_id = ?",
    [req.body.boardAction.boardId],
    function (err, row) {
      res.json({ message: "성공적으로 삭제하였습니다." });
    }
  );
});

module.exports = router;
