const fs = require('fs');

var fileupload = {};

fileupload.path = __dirname + '/../public/uploads/';
fileupload.currentDir = __dirname;

fs.mkdir(fileupload.path, err => {
})

module.exports = fileupload;