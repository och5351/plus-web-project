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

    conn.query('SELECT DISTINCT c.cm_id, c.post_id, u.name, c.contents, date_format(c.write_date, "%y-%m-%d %a %T") as write_date FROM comment c, capdi_users u WHERE c.post_id = ? AND c.user_idx = u.user_idx AND c.cm_id NOT IN (SELECT deep_id FROM deep)', [articleID], function(err, row) {
        res.send(row);
    });
});

// Get Sub-Comments, param should be an comment's ID
// 대댓글 읽어오기 인자는 댓글 고유 ID
router.get('/sub/:commentID', function(req, res, next) {
    var commentID = req.params.commentID;

    conn.query('SELECT c.cm_id, u.name, c.contents, date_format(c.write_date, "%y-%m-%d %a %T") as write_date FROM comment c, capdi_users u, deep d WHERE d.cm_id=? AND c.cm_id = d.deep_id AND c.user_idx = u.user_idx', [commentID], function(err, row) {
        res.send(row);
    })
});

// Add Comments 댓글 작성
router.post('/add', function(req, res, next) {
    const data = {
        'post_id': req.body.data.post_id,
        'user_idx': req.body.data.user_idx,
        'contents': req.body.data.contents
    }

    conn.query('INSERT INTO comment(post_id, user_idx, contents, write_date) VALUES(?, ?, ?, NOW())', [data.post_id, data.user_idx, data.contents], function(err, row) {
        if (err != null) {
            res.send('Error');
        } else {
            res.send('Succeed');
        }
    })
});

module.exports = router;