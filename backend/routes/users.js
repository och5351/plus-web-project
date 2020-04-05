var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var tfScript = require('./../public/TFScripts/tfFunction')

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

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//회원 가입
router.post('/signUp', function (req, res) {
  const user = {
    'userid': req.body.user.userid,
    'name': req.body.user.name,
    'password': req.body.user.password
  };

  const salt = bcrypt.genSaltSync();
  const encryptedPassword = bcrypt.hashSync(user.password, salt);

  connection.query('INSERT INTO capdi_users (userid,name,password) VALUES (?,?,?)', [user.userid, user.name, encryptedPassword], function (err, row) {
    if (err) throw err;
  });

  res.json({
    success: true,
    message: '회원 가입이 완료되었습니다!'
  })
});

//아이디 체크
router.post('/idCheck', function (req, res) {
  const user = {
    'userid': req.body.user.userid,
  };
  connection.query('SELECT userid FROM capdi_users WHERE userid = ?', [user.userid], function (err, row) {
    if (row[0] === undefined) {
      res.json({
        success: true,
        message: '사용 가능한 아이디 입니다.'
      })
    }
    else {
      res.json({
        success: false,
        message: '이미 사용 중인 아이디 입니다.'
      })
    }
  });
});

//로그인
router.post('/login', function (req, res) {
  const user = {
    'userid': req.body.user.userid,
    'password': req.body.user.password
  };

  connection.query('SELECT userid, password FROM capdi_users WHERE userid = ?', [user.userid], function (err, row) {
    if (row[0] === undefined) {
      res.json({ // 매칭되는 아이디 없을 경우
        success: false,
        message: 'ID 혹은 PW를 확인해주세요!'
      })
    }

    if (row[0] !== undefined && row[0].userid === user.userid) {
      bcrypt.compare(user.password, row[0].password, function (err, res2) {
        if (res2) {
          res.json({ // 로그인 성공
            success: true,
            message: '로그인 성공!'
          })
        }
        else {
          res.json({ // 매칭되는 아이디는 있으나, 비밀번호가 틀린 경우
            success: false,
            message: 'ID 혹은 PW를 확인해주세요!'
          })
        }
      })
    }

  })
});

//글쓰기
router.post('/toPosting', function (req, res) {
  const temp = {
    'title': req.body.posting.title,
    'content': req.body.posting.content,
    'checkedNames': req.body.posting.checkedNames
  };
  console.log(temp)
  tfScript.tfFunc(); //Tensorflow 삽입 완료
});

router.get('/list', function (req, res) {

  connection.query('SELECT * FROM writing WHERE board_id = 1', function (err, row) {
    res.send(row)
  })
})

module.exports = router;
