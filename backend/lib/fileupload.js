var fileupload = {};

fileupload.path = __dirname + '/../public/uploads/';
// 로컬 Devel용 위치
// fileupload.path = __dirname + '/../../frontend/public/uploads/';
fileupload.currentDir = __dirname;

module.exports = fileupload;