var express = require("express");
var router = express.Router();

// mysql 선언
var dbConObj = require("../lib/db_config");
var conn = dbConObj.init();

router.get("/users", function (req, res) {
  conn.query("SELECT * FROM capdi_users", function (err, row) {
    res.send(row);
  });
});

router.post("/userModify", function (req, res) {
  const temp = {
    userid: req.body.user.userid,
    point: req.body.user.point,
    rating: req.body.user.rating,
  };
  conn.query(
    "UPDATE capdi_users SET point = ?, rating = ? WHERE userid = ?",
    [temp.point, temp.rating, temp.userid],
    function (err, row) {
      res.send(row);
    }
  );
});

router.get("/userDelete/:userid", function (req, res) {
  conn.query(
    "DELETE FROM capdi_users WHERE userid = ?",
    [req.params.userid],
    function (err, row) {
      res.send(row);
    }
  );
});

module.exports = router;
