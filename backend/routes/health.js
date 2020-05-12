var express = require('express');
var router = express.Router();

/* GET health status server */
router.get('/health', function(req, res) {
    res.status(200).send();
});


module.exports = router;