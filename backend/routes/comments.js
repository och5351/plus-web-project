var express = require('express');
var router = express.Router();

// mysql 선언
var dbConObj = require('../lib/db_config');
var conn = dbConObj.init();

/* GET comments listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/* Separate implements before merging it
   댓글 대댓글 분리 구현 후, 병합 예정 */
// Get Comments, param should be an article's ID
// 댓글 읽어오기 인자는 문서 고유 ID
router.get('/get/:articleID', function(req, res, next) {
    var articleID = req.params.articleID;

    conn.query('SELECT * FROM comment WHERE post_seq = ?', [articleID], function(err, row) {
        res.send(row);
    });
});

// Get Sub-Comments, param should be an comment's ID
// 대댓글 읽어오기 인자는 댓글 고유 ID
router.get('/sub/:commentID', function(req, res, next) {
    var commentID = req.params.commentID;

    conn.query('SELECT * FROM deep WHERE cm_seq = ?', [commentID], function(err, row) {
        res.send(row);
    })
});

// Add Comments 댓글 작성
router.post('/add', function(req, res, next) {
    
});

module.exports = router;