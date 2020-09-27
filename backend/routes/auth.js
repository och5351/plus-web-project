const express = require('express');
const router = express.Router();

const { OAuth2Client } = require('google-auth-library');

// 구글 OAuth 정보
const googleOAuthInfo = require('../lib/gauth');

// mysql 선언
var dbConObj = require('../lib/db_config');
var conn = dbConObj.init();

//=====================================================================//
const client = new OAuth2Client(
    googleOAuthInfo.clientID,
    googleOAuthInfo.clientSecret,
    googleOAuthInfo.callbackURL,
)
//=====================================================================//

// Google OAuth2.0
router.post('/google', function(req, res, next) {
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: req.body.code
        });

        return ticket;
    }
    verify().then((ticket) => {console.log(ticket)}).catch(console.error);
});

module.exports = router;