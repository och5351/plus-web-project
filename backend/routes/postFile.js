const express = require("express");
const router = express.Router();
const tfScript = require("./../lib/TFScripts/tfFunction");
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })


// mysql 선언
const dbConObj = require("../lib/db_config");
const conn = dbConObj.init();

router.get('/upload', function (res, req) {
    res.render('upload');
});

router.post("/upload", upload.single('file'), function (req, res) {
    const file = req.file;
    console.log(file);
    conn.query(
        "INSERT INTO post_file (ori_filename, server_filename, size, type) VALUES (?,?,?,?)",
        [file.originalname, file.filename, file.size, file.mimetype],
        function (err, row) {
            if (err) {
                console.log(err);
            } else {
                console.log("success!");
            }
        }
    );
});


module.exports = router;
