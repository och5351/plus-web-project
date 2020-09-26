const express = require('express');
const router = express.Router();
const oauth2Client = require('../lib/gauth');

// mysql 선언
var dbConObj = require('../lib/db_config');
var conn = dbConObj.init();

// Google OAuth2.0
router.post('/google', function(req, res, next) {
    var code = req.body.code;
    var redirect_uri = req.body.redirect_uri;

    const {tokens} = oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    oauth2Client.on('tokens', (tokens) => {
        if (tokens.refresh_token) {
            console.log(tokens.refresh_token);
        }
        console.log(token.access_token);
    })
});

module.exports = router;