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
        console.log(profile);
        conn.query('SELECT * FROM capdi_users WHERE googleID = ?', [profile.id], function (err, row) {
            if (err) { console.error(err) }
            else
                console.log(row);
            
            return cb(err, row);
        });
    }
));
//=====================================================================//

// Google OAuth2.0
router.get('/google', function(req, res, next) {
    passport.authenticate('google', { scope: ['profile'] });
});

router.get('/google/callback', function(req, res, next) {
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    }
});

module.exports = router;