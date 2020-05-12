var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* GET health status server */
router.get('/health', function(req, res) {
    res.status(200).send();
});

module.exports = router;