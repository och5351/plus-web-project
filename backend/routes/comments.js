var express = require('express');
var router = express.Router();
var mysql = require('mysql');

// Connection 객체 생성
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'capdi'
});

// Connect
connection.connect(function (err) {
    if (err) {
      console.error('mysql connection error');
      console.error(err);
      throw err;
    }
});

/* GET comments listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// Add Comments 댓글 작성
router.post('/addComment', function(req, res, next) {
    
});

module.exports = router;