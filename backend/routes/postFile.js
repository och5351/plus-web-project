const express = require("express");
const router = express.Router();
const tfScript = require("./../lib/TFScripts/tfFunction");
var multer = require("multer");
// public/uploads에 해시값 파일명으로 저장하여 파일명을 통한 임의접근을 방지하고, 파일명을 아는 경우 URL을 통해 간단히 접근 가능하게 한다
var upload = multer({ dest: "frontend/public/uploads/" });

// mysql 선언
const dbConObj = require("../lib/db_config");
const conn = dbConObj.init();

router.get("/upload", function (res, req) {
  res.render("upload");
});

// 파일 업로드 함수
router.post("/upload", upload.single("file"), function (req, res) {
  const file = req.file;

  // 파일을 업로드 후, 파일명을 반환한다.
  res.json({filename: file.filename, originalname: file.originalname});
});

module.exports = router;
