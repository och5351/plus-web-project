const express = require('express');
const router = express.Router();

const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

// 구글 OAuth 정보
const googleOAuthInfo = require('../lib/gauth');

// mysql 선언
var dbConObj = require('../lib/db_config');
var conn = dbConObj.init();

//=====================================================================//
passport.use(new GoogleStrategy({
        clientID: googleOAuthInfo.clientID,
        clientSecret: googleOAuthInfo.clientSecret,
        callbackURL: googleOAuthInfo.callbackURL,
    },
    function(accessToken, refreshToken, profile, cb) {
        return cb(null, null);
    }
));
//=====================================================================//

router.get('/google', passport.authenticate('google', { scope: ['profile'], session: false }));

// Google OAuth2.0
router.post('/google', function(req, res, next) {
    console.info(req);
    res.send(req.body.code);
});

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        console.info(req.body);
        res.redirect('http://localhost:8080/?token=' + res.req.user);
    }
);

module.exports = router;