const mongoose = require("mongoose");

// CONNECT TO MONGODB SERVER
// 임시 테스트 서버
module.exports = mongoose.connect('mongodb://34.64.200.167/plus', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false 
    })
    .then(() => console.log('Successfully connected to mongodb'))
    .catch(e => console.error(e));