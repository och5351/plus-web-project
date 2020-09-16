const mongoose = require('mongoose');
const mongoconnection = require('../lib/mongo_config');

// 파일 스키마 구조
const fileSchema = new mongoose.Schema({
    post_id: {
        type: Number,
        required: true,
    },
    filename: {
        type: String,
        required: true,
    },
    originalname: {
        type: String,
        required: true,
    },
},{
    collection: 'postfile',
},);

module.exports = mongoose.model('File', fileSchema);