const express = require('express');
const router = express.Router();

const GAuth = require('../lib/gauth');
const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
        clientID: GAuth.clientID,
        clientSecret: GAuth.clientSecret,
        callbackURL: GAuth.callbackURL,
    },
    function (accessToken, refreshToken, profile, callback) {
        console.info(profile);
        return callback(null, null);
    }
));

// mysql 선언
var dbConObj = require('../lib/db_config');
var conn = dbConObj.init();

router.get('/google', passport.authenticate('google', { scope: ['profile'], session: false }));

// Google OAuth2.0
// router.post('/google', function(req, res, next) {
//     console.info(req);
//     res.send(req.body.code);
// });

// router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
//     function(req, res) {
//         console.info(req.body);
//         res.redirect('http://localhost:8080/?token=' + res.req.user);
//     }
// );

module.exports = router;