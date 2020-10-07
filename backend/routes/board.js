const express = require("express");
const router = express.Router();

// mysql 선언
const dbConObj = require("../lib/db_config");
const conn = dbConObj.init();

// 글 리스트
router.get("/:category_name", (req, res) => {
  conn.query(
    "SELECT p.*, u.name, (SELECT COUNT(*) FROM comment) - COUNT(*) as comments FROM post p, capdi_users u, comment c WHERE ca_id = ( SELECT ca_id FROM category WHERE ca_name = ?) AND p.user_idx = u.user_idx AND p.post_id <> c.post_id GROUP BY p.post_id",
    [req.params.category_name],
    (err, row) => {
      res.send(row);
    }
  );
});

router.get("/detail/:category_name", (req, res) => {
  conn.query(
    "SELECT * FROM category_detail WHERE ca_id = (SELECT ca_id FROM category WHERE ca_name = ?)",
    [req.params.category_name],
    (err, row) => {
      res.send(row);
    }
  );
});

router.get("/info/:category_name", (req, res) => {
  conn.query(
    "SELECT * FROM category WHERE ca_name = ?",
    [req.params.category_name],
    (err, row) => {
      res.send(row);
    }
  );
});

router.post("/views/:postId", (req, res) => {
  conn.query(
    "UPDATE post SET views = views + 1 WHERE post_id = ?",
    [req.params.postId],
    (err, row) => {
      res.send(row);
    }
  );
});

module.exports = router;
