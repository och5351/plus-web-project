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

    conn.query('SELECT DISTINCT c.cm_id, c.post_id, c.user_idx, u.name, u.rating, c.contents, date_format(c.write_date, "%y-%m-%d %a %T") as write_date \
    FROM comment c, capdi_users u WHERE c.post_id = ? AND c.user_idx = u.user_idx AND c.cm_id NOT IN (SELECT deep_id FROM deep) ORDER BY c.cm_id', [articleID], function(err, row) {
        res.send(row);
    });
});

// Get Comments like count
// 댓글 좋아요 갯수 가져오기
router.get('/getlike/:commentID', function(req, res, next) {
    var commentId = req.params.commentID;

    conn.query('SELECT COUNT(CASE WHEN cm_like=true THEN 1 END) as dolike, \
    COUNT(CASE WHEN cm_like=false THEN 1 END) as dislike,\
    COUNT(*) as total \
    FROM (SELECT cm_like FROM comment_like WHERE cm_id = ?) a;\
    ', [commentId], function(err, row) {
        res.send(row);
    });
});

// Get Sub-Comments, param should be an comment's ID
// 대댓글 읽어오기 인자는 댓글 고유 ID
router.get('/sub/:commentID', function(req, res, next) {
    var commentID = req.params.commentID;

    conn.query('SELECT c.cm_id, c.user_idx, u.name, u.rating, c.contents, date_format(c.write_date, "%y-%m-%d %a %T") as write_date \
    FROM comment c, capdi_users u, deep d WHERE d.cm_id=? AND c.cm_id = d.deep_id AND c.user_idx = u.user_idx ORDER BY c.cm_id', [commentID], function(err, row) {
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

// Add Comments 댓글 작성
router.post('/addSub', function (req, res, next) {
    const data = {
        'post_id': req.body.data.post_id,
        'cm_id': req.body.data.cm_id,
        'user_idx': req.body.data.user_idx,
        'contents': req.body.data.contents
    }

    sql1 = "INSERT INTO comment(post_id, user_idx, contents, write_date) VALUES(?, ?, ?, NOW());";
    sql2 = "INSERT INTO deep(deep_id, cm_id) VALUES((SELECT MAX(cm_id) FROM comment), ?);";

    try {
        conn.beginTransaction();
        conn.query(sql1, [data.post_id, data.user_idx, data.contents])
        conn.query(sql2, [data.cm_id]);
        conn.commit();
    } catch(err) {
        if (err != null) {
            res.send(err);
        } else {
            res.send('Succeed');
        }
    }
});

// Delete Comment 댓글 삭제
router.post('/remove', function (req, res, next) {
    const data = {
        'cm_id': req.body.data.cm_id
    }
    sql = "DELETE FROM comment WHERE cm_id IN (SELECT cm_id FROM comment WHERE cm_id IN (SELECT deep_id as cm_id FROM deep WHERE cm_id = ? UNION SELECT cm_id FROM deep WHERE cm_id = ?) ORDER BY cm_id DESC)";
    conn.query(sql, [data.cm_id, data.cm_id], function(err, result) {
        if (result.affectedRows != 0) {
            res.json({
                success: true,
                message: '댓글 삭제 성공'
            });
        } else {
            res.json({
                success: false,
                message: '대댓글이 존재하는 댓글은 삭제가 불가능합니다.'
            });
        }
    });
})

router.post('/like', function (req, res, next) {
    const data = {
        cm_id: req.body.data.cm_id,
        type: req.body.data.type,
        user_idx: req.body.data.user_idx,
    };

    message = '';

    if (data.user_idx == null) {
        message = '로그인 후 사용가능합니다.';
        return res.send(message);
    } else {
        sql = 'SELECT cm_like FROM comment_like WHERE cm_id = ? AND user_idx = ?';
        
        // 로그인 아이디로 추천이 되어있는지 확인
        conn.query(sql, [data.cm_id, data.user_idx], function (err, row) {
            if (row[0] != null && row[0].cm_like == data.type) {
                sql2 = 'DELETE FROM comment_like WHERE cm_id = ? AND user_idx = ?';
                conn.query(sql2, [data.cm_id, data.user_idx]);
                message = '추천이 취소되었습니다';
            } else if (row[0] != null && row[0].cm_like != data.type) {
                sql2 = 'UPDATE comment_like SET cm_like = ? WHERE cm_id = ? AND user_idx = ?';
                conn.query(sql2, [data.type, data.cm_id, data.user_idx]);
                message = '의견이 반영되었습니다';
            } else {
                sql2 = 'INSERT INTO comment_like(cm_like, cm_id, user_idx) VALUES(?, ?, ?)';
                conn.query(sql2, [data.type, data.cm_id, data.user_idx]);
                message = '의견이 반영되었습니다';
            }
            return res.send(message);
        });
    }
});

module.exports = router;