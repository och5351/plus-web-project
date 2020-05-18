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
      res.send(row);
    }
  );
});

router.post("/userDelete", function (req, res) {
  conn.query(
    "DELETE FROM capdi_users WHERE userid = ?",
    [req.body.user.userid],
    function (err, row) {
      res.send(row);
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
      res.send(row);
    }
  );
});

router.post("/categoryModify", function (req, res) {
  conn.query(
    "UPDATE category SET ca_name = ? WHERE ca_id = ?",
    [req.body.category.categoryName, req.body.category.categoryId],
    function (err, row) {
      res.send(row);
    }
  );
});

router.get("/board", function (req, res) {
  conn.query("SELECT * FROM board", function (err, row) {
    res.send(row);
  });
});

module.exports = router;
