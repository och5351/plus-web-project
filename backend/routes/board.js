const express = require('express');
const router = express.Router();

// mysql 선언
const dbConObj = require('../lib/db_config');
const conn = dbConObj.init();

// 글 리스트
router.get('/:category_name', function (req, res) {

    let category_name = req.params.category_name;

    conn.query('SELECT * FROM capdi.post WHERE ca_id = (SELECT ca_id FROM capdi.category WHERE ca_name = ?)', [category_name], function (err, row) {
        res.send(row)
    })
});

module.exports = router;
