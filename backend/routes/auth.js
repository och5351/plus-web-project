const express = require('express');
const router = express.Router();

// mysql 선언
var dbConObj = require('../lib/db_config');
var conn = dbConObj.init();

// Google OAuth2.0
router.post('/google', function(req, res, next) {
    console.info(req.body);
});

module.exports = router;