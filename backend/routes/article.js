var express = require('express');
var router = express.Router();

// mysql 선언
var dbConObj = require('../lib/db_config');
var conn = dbConObj.init();

/* GET comments listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// Get Article, param should be an article's ID
// 본문 읽어오기 인자는 문서 고유 ID
router.get('/get/:articleID', function(req, res, next) {
    var articleID = req.params.articleID;

    conn.query('SELECT p.post_id, p.board_id, p.ca_id, p.user_idx, u.name, p.contents, p.title, date_format(p.write_date, "%y-%m-%d %a %T") as write_date FROM post p, capdi_users u WHERE p.post_id = ? AND p.user_idx = u.user_idx', [articleID], function(err, row) {
        res.send(row);
    });
});

module.exports = router;