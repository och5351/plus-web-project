var express = require('express');
var router = express.Router();

// mysql 선언
var dbConObj = require('../lib/db_config');
var conn = dbConObj.init();

/* GET comments listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// Get Comments, param should be an article's ID
// 댓글 읽어오기 인자는 문서 고유 ID
router.get('/get/:articleID', function(req, res, next) {
    var articleID = req.params.articleID;

    conn.query('SELECT c.cm_seq, c.post_seq, u.name, c.contents, date_format(c.write_date, "%Y-%m-%d %W %H:%i:%S") as write_date FROM comment c, capdi_users u WHERE c.post_seq = ? AND c.userid = u.userid', [articleID], function(err, row) {
        res.send(row);
    });
});

// Get Sub-Comments, param should be an comment's ID
// 대댓글 읽어오기 인자는 댓글 고유 ID
router.get('/sub/:commentID', function(req, res, next) {
    var commentID = req.params.commentID;

    conn.query('SELECT u.name, d.contents, date_format(d.write_date, "%Y-%m-%d %W %H:%i:%S") as write_date FROM deep d, capdi_users u WHERE d.cm_seq = ? AND d.userid = u.userid ORDER BY d.deep_seq', [commentID], function(err, row) {
        res.send(row);
    })
});

// Add Comments 댓글 작성
router.post('/add', function(req, res, next) {
    
});

module.exports = router;