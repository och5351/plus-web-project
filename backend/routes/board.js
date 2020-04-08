var express = require('express');
var router = express.Router();
var dbConObj = require('../lib/db_config');
var conn = dbConObj.init();

// 글 리스트
router.get('/:category_id', function (req, res) {

    var category_id = req.params.category_id;

    conn.query('SELECT * FROM post WHERE ca_id = ?', [category_id], function (err, row) {
        res.send(row)
    })
});

module.exports = router;
