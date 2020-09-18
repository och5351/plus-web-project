var fileupload = {};

// ..의 위치는 백엔드 서버 실행기준입니다.
fileupload.path = __dirname + '/../../frontend/public/uploads/';
fileupload.currentDir = __dirname;

console.log(fileupload.path);

module.exports = fileupload;