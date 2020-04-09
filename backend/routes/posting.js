var express = require('express');
var router = express.Router();
var tfScript = require('./../lib/TFScripts/tfFunction')

// mysql 선언
var dbConObj = require('../lib/db_config');
var conn = dbConObj.init();

//글쓰기
router.post('/toPosting', function (req, res) {
    const temp = {
      'title': req.body.posting.title,
      'content': req.body.posting.content,
      'checkedNames': req.body.posting.checkedNames
    };
    console.log(temp);
    tfScript.tfFunc(); //Tensorflow 삽입 완료
  });
  
module.exports = router;