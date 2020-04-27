const express = require("express");
const router = express.Router();

// mysql 선언
const dbConObj = require("../lib/db_config");
const conn = dbConObj.init();

// 글 리스트
router.get("/:category_name", function (req, res) {
  conn.query(
    "SELECT * FROM capdi.post WHERE ca_id = (SELECT ca_id FROM capdi.category WHERE ca_name = ?)",
    [req.params.category_name],
    function (err, row) {
      res.send(row);
    }
  );
});

router.get("/info/:category_name", function (req, res) {
  conn.query(
    "SELECT * FROM capdi.category WHERE ca_name = ?",
    [req.params.category_name],
    function (err, row) {
      res.send(row);
    }
  );
});

router.put("/views/:postId", function (req, res) {
  conn.query("UPDATE post SET views = views + 1 WHERE post_id = ?", [
    req.params.postId,
  ]);
  conn.commit();
});

module.exports = router;
