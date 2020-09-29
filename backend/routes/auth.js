const express = require('express');
const router = express.Router();

// mysql 선언
var dbConObj = require('../lib/db_config');
var conn = dbConObj.init();

router.get('/google', passport.authenticate('google', { scope: ['profile'], session: false }));

// Google OAuth2.0
router.post('/google', function(req, res, next) {
    console.info(req);
    res.send(req.body.code);
});

// router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
//     function(req, res) {
//         console.info(req.body);
//         res.redirect('http://localhost:8080/?token=' + res.req.user);
//     }
// );

module.exports = router;